const fs = require('fs');
const DB = './db/data.json';

const saveDB = (data) => {
    fs.writeFileSync(DB, JSON.stringify(data));
};

const readDB = () => {
    if (!fs.existsSync(DB)) {
        return null;
    }
    const info = fs.readFileSync(DB, 'utf-8');
    const data = JSON.parse(info);
    return data;
};

module.exports = { saveDB, readDB };
