require('colors');
const Tasks = require('./models/tasks');
const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/database-control');

const main = async () => {
    let option = '';
    const tasks = new Tasks();
    const taskDB = readDB();
    if (taskDB) {
        tasks.loadTaskFromArray(taskDB);
    }
    do {
        option = await inquirerMenu();
        switch (option) {
            case '1':
                const description = await readInput('Description');
                tasks.createTask(description);
                break;
            case '2':
                tasks.showList();
                break;
            case '3':
                tasks.listCompletedAndPendingsTasks(true);
                break;
            case '4':
                tasks.listCompletedAndPendingsTasks(false);
                break;
        }
        saveDB(tasks.listArray);
        await pause();
    } while (option !== '0');

    pause();
};

main();
