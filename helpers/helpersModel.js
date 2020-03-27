const database = require("../data/dbConfig");

module.exports = {
    getAllHelpers,

    getHelperByName,

    addHelper,

    deleteHelperByName

}

// GET functions
function getAllHelpers() {
    return database("helpers");
}

function getHelperByName(name) {
    return database("helpers")
        .where({name})
        .first();
}

function addHelper(helper){
    return database("helpers")
    .insert(helper)
    .then(ids => {
      const [id] = ids;
      return getHelperByName(id);
    });
}

// DELETE functions
function deleteHelperByName(name) {
    return database("helpers")
        .where({name})
        .del();
}
