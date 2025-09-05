const { Sequelize, DataTypes } = require('sequelize');
const db_url = process.env.DATABASE_URL;
const sequelize = new Sequelize(db_url);

exports.test = sequelize.define(
  'test',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey:true
    },
    created_at: {
      type: DataTypes.TIME,
      defaultValue: DataTypes.NOW
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    tableName:'test',
    timestamps: false
  },
);

// `sequelize.define` also returns the model
console.log(sequelize.models.test); // true