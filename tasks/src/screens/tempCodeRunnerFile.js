        const tasks = [...this.state.tasks];

        tasks.push({
            id: Math.random(),
            description: newTask.description,
            estimeAt: newTask.date
        });