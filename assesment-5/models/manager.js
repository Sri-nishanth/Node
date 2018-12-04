'use strict';
const Project = require('./project.js');
const Sequelize = require('sequelize');
const sequelize = require("../config/connection.js");

const Manager = sequelize.define('Manager', {
  name: Sequelize.STRING,
  Experience: Sequelize.STRING
},
  {}
);
Manager.associate = function (models) {
  Manager.belongsTo(Project, { foreignKey: 'projectId', foreignKeyConstraint: false });
  // associations can be defined here
};

Manager.sync();

modules.export = Manager;