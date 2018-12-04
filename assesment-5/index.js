var express = require("express");
var app = express();
var port = 5432;

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

var Engineer = require('./models/engineer.js');
var Project = require('./models/project.js');
var Manager = require('./models/manager.js');

app.get("/printEngineerDetails/:projectName", function (req, res) {
    Project.findAll({
        attributes: ['id'],
        where: {
            Name: projectName
        }
    })
        .then(project_array => {
            x = project_array[0].dataValues.id;
        })
        .then(() => {
            Engineer.findAll({
                where: {
                    projectId: x
                }
            })
                .then(engineer_array => {
                    engineer_array.forEach(function (elem) {
                        res.render(elem.dataValues);
                    })
                })
        })
});

function foo(projectid, name) {
    Manager.update({
        projectId: projectid
    },
        {
            where: {
                Name: name
            }
        });
}

app.get("/assignManagertoProject", function (req, res) {
    foo(2, 'Manager2');
    foo(1, 'Manager1');
});


app.get("/updateEngineer/:namee", function (req, res) {
    Engineer.update({ name: 'abhiram', Specialisation: 'ROR', Experience: 'fresher' }, { fields: ['name', 'Specialisation', 'Experience'] }).then(() => {
        console.log('Updated');
    });
})

app.post("/deleteProject/:projectname", function (req, res) {
    Project.destroy({
        where: {
            name: projectName
        }
    })
})

app.listen(port, function () {
    console.log("App listening on PORT " + port);
});