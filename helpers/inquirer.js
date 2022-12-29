const inquirer = require('inquirer');
require('colors');

const answers = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            {
                value: '1',
                name: '1. Create Task'
            },
            {
                value: '2',
                name: '2. List Task'
            },
            {
                value: '3',
                name: '3. List Completed Tasks'
            },
            {
                value: '4',
                name: '4. List Pending Tasks'
            },
            {
                value: '5',
                name: '5. Complete Task(s)'
            },
            {
                value: '6',
                name: '6. Delete Task'
            },
            {
                value: '0',
                name: '0. Exit '
            }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('============================'.green);
    console.log('      Select an Option       '.green);
    console.log('============================\n'.green);

    const { option } = await inquirer.prompt(answers);
    return option;
};

const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'Enter',
            message: `\n Press ${'ENTER'.green} To Continue \n`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
};

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'please enter a task';
                }
                return true;
            }
        }
    ];

    const { description } = await inquirer.prompt(question);
    return description;
};

module.exports = { inquirerMenu, pause, readInput };
