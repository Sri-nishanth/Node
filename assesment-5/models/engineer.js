'use strict';
const Project = require('./project.js');
const Sequelize = require('sequelize');
const sequelize = require("../config/connection.js");

const Engineer = sequelize.define('Engineer', {
  name: Sequelize.STRING,
  Specialisation: Sequelize.STRING,
  Experience: Sequelize.STRING
},
  {}
);
Enginer.associate = function (models) {
  Engineer.belongsTo(Project, { foreignKey: 'projectId', foreignKeyConstraint: false });
};

Engineer.sync();

modules.export = Engineer;