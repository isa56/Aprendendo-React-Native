const bcrypt = require('bcrypt-nodejs');

module.exports = (app) => {
    const getHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, salt) => callback(hash));
        });
    };

    const save = (req, res) => {
        getHash(req.body.password, (hash) => {
            const password = hash;

            app.db('users').insert({
                name: req.body.name, email: req.body.email, password
            })
                .then(_ => res.status(204).send())
                .catch((err) => res.status(500).json(err));
        });

    };

    return { save }

}
