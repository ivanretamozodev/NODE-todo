const { showMenu, pause } = require('./helpers/messages');

require('colors');
console.clear();

const main = async () => {
    console.log('hola mundo');

    let option = '';
    do {
        option = await showMenu();
        if (option !== '0') {
            await pause();
        }
    } while (option !== '0');

    pause();
};

main();
