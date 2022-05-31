// const { get } = require("express/lib/response");

  
module.exports = (sequelize,DataTypes) =>{
    const Users=sequelize.define("users",{
        name:{
            type:DataTypes.STRING,
            defaultValue:"null",
            set(value){
                this.setDataValue('name',value+' abhi');
            },
            get(){
                return this.getDataValue('name')+" XYZ"
            }
        },
        email:{
            type:DataTypes.STRING,
            defaultValue:"test@gmail.com"
        },
        gender:{
            type:DataTypes.STRING,
            defaultValue:"null"
        }
    },{
        // tableName:"loginusers",
        timestamps:false
        // createdAt:false
        // updatedAt:false
        // createdAt:"created",
        // updatedAt:"updated"
    });
    return Users;
}