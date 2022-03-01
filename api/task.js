const moment = require('moment');

module.exports = app => {

    const getTasks = (req, res) => {
        const date = req.query.date ? req.query.date : moment().endOf('day').toDate();

        app.db('tasks')
            .where({ userId: req.user.id })
            .where('estimateAt', '<=', date)
            .orderBy('estimateAt')
            .then((tasks) => res.json(tasks))
            .catch((err) => res.status(500).json(err));
    };

    const save = (req, res) => {

        if (!req.body.description.trim()) {
            return res.status(404).send("Descrição é um campo obrigatório");
        }

        req.body.userId = req.user.id;

        app.db('tasks')
        .insert(req.body)
        .then(_ => res.status(204).send())
        .catch(err => res.status(400).json(err))

        console.log("Salvando task: " + req.body.description);
    };

    const remove = (req, res) => {
        app.db('tasks')
            .where({ id: req.params.id, userId: req.user.id })
            .del()
            .then((rowsDeleted) => {
                if (rowsDeleted > 0) {
                    res.status(204).send();
                } else {
                    const msg = `Não foi encontrada Tarefa com id ${req.params.id}.`;
                    res.status(400).send(msg);
                }
            })
            .catch((error) => res.status(400).json(error));
    }

    const updateTaskDoneAt = (req, res, doneAt) => {
        app.db('tasks')
            .where({ id: req.params.id, userId: req.user.id })
            .update({ doneAt })
            .then(_ => res.status(200).send())
            .catch((err) => res.status(400).json(err));
    }

    const toggleTask = (req, res) => {
        app.db('tasks')
            .where({ id: req.params.id, userId: req.user.id })
            .first()
            .then((task) => {
                if (!task) {
                    const msg = `Tarefa com id ${req.params.id} não encontrada.`
                    res.status(400).send(msg);
                }

                const doneAt = task.doneAt ? null : new Date();

                updateTaskDoneAt(req, res, doneAt);

            })
            .catch((err) => res.status(400).json(err));
    }

    return { getTasks, save, remove, toggleTask }

}
