const { showMenu, pause } = require('./helpers/messages');

require('colors');
console.clear();

const main = async () => {
    console.log('hola mundo');
    showMenu();
    pause();
};

main();
