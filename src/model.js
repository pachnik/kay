
const jsondb = require('simple-json-db');
const db = new jsondb('.../data/lide.json');


exports.load =()=>{
    return db.JSON();
};

exports.loadOne = (id) => {
    if(db.has(id)) {
        return db.get(id);
    } else {
        return null;
    }
};