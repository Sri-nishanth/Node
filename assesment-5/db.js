var Sequelize = require('sequelize');
const sequelize = new Sequelize('Nishanth','postgres','nishanth',{
  host : 'localhost',
  dialect : 'postgres',
  operatorsAliases : false,
  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})
sequelize.authenticate().then(() => {
  console.log("Success!!"); 
 
   const Manager = sequelize.define('manager',{
    Name: {
      type: Sequelize.STRING
    }
  });
  const Project = sequelize.define('project', {
    Name: {
      type: Sequelize.STRING
    }
  }); 
  const Engineer = sequelize.define('engineer', {
    Name: {
      type: Sequelize.STRING
     }
  });
  Project.hasOne(Manager,{foreignKey: 'projectId', foreignKeyConstraint:true});
  Engineer.belongsTo(Project,{foreignKey: 'projectId', foreignKeyConstraint:false});
  Project.sync({force: true}).then(() => {
    return Project.bulkCreate([
    {
      Name: 'Keyless',
    },
    {
      Name: 'blue',
    }
    ]);
  });
  Manager.sync({force: true}).then(() => {
    return Manager.bulkCreate([
    {
      Name: 'Manager1',
    },
    {
      Name: 'Manager2',
    }
    ]);
  });
  Engineer.sync({force: true}).then(() => {
    return Engineer.bulkCreate([
    {
      Name: 'Mohan',
      projectId: 1
    },
    {
      Name: 'Nishanth',
      projectId: 2
    },
    {
      Name: 'Ashwin',
      projectId: 1
    }
    ]);
  });
  function printEngineerDetails(){
    var x;
    setTimeout(() => {

      Project.findAll({
        attributes: ['id'],
        where:{
          Name : 'blue'
        }
      })
      .then(project_array => {
        console.log(project_array[0].dataValues.id);
        x = project_array[0].dataValues.id;
        //console.log(project_array)
      })
     },1000);
    setTimeout(() => {
      //console.log(x);
      Engineer.findAll({
        where:{
          projectId: x
        }
      })
      .then(engineer_array => {
        engineer_array.forEach(function(elem){
          console.log(elem.dataValues);
        })
      }) 
    },1000);
  }
  function assignManagertoProject() {
    function foo(projectid,name){
      Manager.update({
        projectId: projectid 
      },
      { 
        where:{ 
            Name: name
          }
      });
    }
    setTimeout(() => {
      foo(2,'Manager2');
      foo(1,'Manager1');
    },2000);     
  }
  function deleteEngineer(){
    setTimeout(() => {
      Engineer.destroy({
        where: {
          Name: 'Ashwin'
        }
      })
    },3000);
  }
  function deleteProject(){
    setTimeout(() => {
      Project.truncate({ cascade: true });
    },5000);
  }
  printEngineerDetails(); 
  assignManagertoProject();
  deleteEngineer();
  deleteProject();
});