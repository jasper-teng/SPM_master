require("dotenv").config();
const { Sequelize } = require("sequelize");
const { test } = require("./models/user");
const db_url = process.env.DATABASE_URL;
const sequelize = new Sequelize(db_url);

exports.dbHealthCheck = async function fuckme() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return error
  }
};


exports.testCRUD = async function help(){
  const rah = test.build({id: 4});
  console.log(rah.toJSON());
  await rah.save();
  return "ok";
}