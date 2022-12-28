require('colors');
const { inquirerMenu, pause } = require('./helpers/inquirer');

console.clear();

const main = async () => {
    console.log('hola mundo');

    let option = '';
    do {
        option = await inquirerMenu();
        console.log(option);
        await pause();
    } while (option !== '0');

    pause();
};

main();
