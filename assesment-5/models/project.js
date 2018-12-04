'use strict';
const Manager = require('./manager.js');
const Engineer = require('./engineer.js');
const Sequelize = require('sequelize');
const sequelize = require("../config/connection.js");

const Project = sequelize.define('Project', {
  name: Sequelize.STRING,
  language: Sequelize.STRING,
  Version: Sequelize.INTEGER
},
  {}
);
Project.associate = function (models) {
  Project.hasOne(Manager, { foreignKey: 'projectId', foreignKeyConstraint: true });
  Project.hasMany(Engineer, { foreignKey: 'projectId', foreignKeyConstraint: false });
};

Project.sync();

modules.export = Project;