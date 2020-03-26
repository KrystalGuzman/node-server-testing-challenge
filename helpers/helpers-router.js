const express = require("express");

const database = require("./helpersModel");

// const jsonParser = require('body-parser').json
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const router = express.Router();

// GET all helpers
router.get("/helpers", (req, res) => {

    database.getAllHelpers()
        .then(helpers =>
            res.status(200).json(helpers)
        )
        .catch(error =>
            res.status(500).json({message: "Could not retrieve helpers.", error})
        )
});

// GET helper by name
router.get("/helpers/:name", (req, res) => {

    const name = req.params.name;

    database.getHelperByName(name)
        .then(helpers => {

            if (helpers)
                { res.status(200).json(helpers)}
            else
                { res.status(400).json({message: "Could not retrieve data for a " + name + " helper.", error})}
        })
        .catch(error =>
            res.status(500).json({message: "Could not retrieve helper."})
        )
});


// POST new helper to database
router.post("/helpers", (req, res) => {
console.log(req.body);
    const helperInfo = req.body;
    if (!helperInfo || !helperInfo.name || !helperInfo.job)
        {
            console.log(helperInfo)
            res.status(400).json({message: "Must include name and job properties."})
        }
    else
        {
            database.addHelper(helperInfo)
                .then(helper =>
                    res.status(201).json(helper)
                )
                .catch(error =>
                    res.status(500).json({message: "Could not add helper.", error})
                )
        }
});
// router.post("/helpers", (req, res) => {
//     const helperInfo = req.body;
//         if (!helperInfo || !helperInfo.name || !helperInfo.job)
//         {
//             console.log(helperInfo)
//             res.status(400).json({message: "Must include name and job properties."})
//         }
//     database.addHelper(helperInfo)
//       .then(helperInfo => {
//         res.status(200).json(helperInfo);
//       })
//       .catch(err => {
//         res.status(500).json({ message: "Failed to post" });
//       });
//   });

// DELETE helper by name
router.delete("/helpers/:name", (req, res) => {

    const name = req.params.name;

    database.deleteHelperByName(name)
        .then(helpers =>
            res.status(200).json({message: "Data for the " + name + " helper was deleted."})
        )
        .catch(error =>
            res.status(500).json({message: "Could not retrieve data for a " + name + " helper.", error})
        )
});

module.exports = router;