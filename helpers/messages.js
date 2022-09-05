const { resolve } = require('path');

require('colors');

const showMenu = () => {
    return new Promise((resolve) => {
        console.clear();
        console.log('================='.green);
        console.log('Select an Option'.green);
        console.log('=================\n'.green);

        console.log(`${'1.'.green} Create Task`);
        console.log(`${'1.'.green} List Tasks`);
        console.log(`${'4.'.green} List Completed Tasks`);
        console.log(`${'5.'.green} List Pending Tasks`);
        console.log(`${'6.'.green} Complete Task(s)`);
        console.log(`${'7.'.green} Delete Task`);
        console.log(`${'0.'.green} Exit\n`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Select an Option: ', (option) => {
            readLine.close();
            resolve(option);
        });
    });
};

const pause = () => {
    return new Promise((resolve) => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`Press ${'ENTER'.green} To Continue`, (option) => {
            readLine.close();
            resolve();
        });
    });
};

module.exports = {
    showMenu,
    pause
};
