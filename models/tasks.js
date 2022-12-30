const Task = require('./task');
class Tasks {
    _list = {};
    get listArray() {
        const list = [];
        Object.keys(this._list).forEach((key) => {
            const task = this._list[key];
            list.push(task);
        });
        return list;
    }
    constructor() {
        this._list = {};
    }

    createTask(description = '') {
        const task = new Task(description);
        this._list[task.id] = task;
    }
    loadTaskFromArray(tasks = []) {
        tasks.forEach((task) => {
            this._list[task.id] = task;
        });
    }
    showList() {
        this.listArray.forEach((task, id) => {
            console.log();
            const index = `${id + 1}.`.green;
            const { description, createdAt } = task;
            const state = createdAt ? 'Completed'.green : 'Pending'.red;
            console.log(`${index} ${description} :: ${state}`);
        });
    }
    listCompletedAndPendingsTasks(completed = true) {
        console.log();
        let index = 0;
        this.listArray.forEach((task) => {
            const { description, createdAt } = task;
            const state = createdAt ? 'Completed'.green : 'Pending'.red;
            if (completed) {
                if (createdAt) {
                    index += 1;
                    console.log(`${(index + '.').green} ${description} :: ${createdAt}`);
                }
            } else {
                if (!createdAt) {
                    index += 1;
                    console.log(`${(index + '.').green} ${description} :: ${state}`);
                }
            }
        });
    }
}

module.exports = Tasks;
