const db = require('../models/index.js');
const Engineer = require('../models/engineer.js');
const Manager = require('../models/manager.js');
const Project = require('../models/project.js');


const engineers = [
    {
        name: 'Nishanth',
        Specialisation: 'NodeJs',
        Experience: '2 months',
    },
    {
        name: 'Mohan',
        Specialisation: 'ROR',
        Experience: '2 months',
    },
    {
        name: 'Ashwin',
        Specialisation: 'ROR',
        Experience: '3 months',
    },
    {
        name: 'Rihan',
        Specialisation: 'React',
        Experience: '! week',
    },
    {
        name: 'Veeresh',
        Specialisation: 'Reach',
        Experience: 'Nil',
    },
];


const managers = [
    {
        name: 'manager_1',
        Experience: '5 years',
    },
    {
        name: 'manager_2',
        Experience: '8 years',
    },
    {
        name: 'manager_3',
        Experience: '3 years',
    },
    {
        name: 'manager_4',
        Experience: '7 years',
    },
];

const projects = [
    {
        name: 'Project1',
        language: 'C',
        Version: 89,
    },
    {
        name: 'Project2',
        language: 'Java',
        Version: 12,
    },
    {
        name: 'Project3',
        language: 'Javascript',
        Version: 11,
    },
    {
        name: 'Project4',
        language: 'ROR',
        Version: 3,
    },
    {
        name: 'Project5',
        language: 'React',
        Version: 7,
    },
];

const seed = () => {
    return Promise.all(engineers.map(engineer => Engineer.create(engineer))
    )
        .then(() => Promise.all(managers.map(manager => Manager.create(manager))
        ))
        .then(() => Promise.all(projects.map(project => Project.create(project))
        ))
};

const main = () => {
    console.log('Syncing db....');

    db.sync({ force: true })
        .then(() => {
            console.log('Seeding db....');
            return seed();
        })
        .catch(err => {
            console.log('Error while seeding');
            console.log(err.stack);
        })
        .then(() => {
            console.log('Closing db connection....');
            db.close();
            return null;
        })
};

main();

