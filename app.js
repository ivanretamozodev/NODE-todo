require('colors');
const { inquirerMenu, pause } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

const main = async () => {
    let option = '';
    do {
        option = await inquirerMenu();
        console.log(option);
        await pause();
    } while (option !== '0');

    pause();
};

main();
