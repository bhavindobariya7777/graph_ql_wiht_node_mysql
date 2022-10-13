const Sequelize = require('sequelize');
const sequelize = new Sequelize('graphQL','root','Tce@1234',{
    host:"localhost",
    dialect:"mysql",
    logging:false
})

sequelize.authenticate()
.then(()=>{
console.log("Database Connected....")
})
.catch(e=>{
    console.log("Erorr====>"+e)
})

module.exports =sequelize;