// const { Model, DataTypes, Sequelize } = require('sequelize');

// const CLIENT_TABLE = 'client';
// const ClientSchema = {
//   id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: DataTypes.INTEGER,
//   },
//   name: {
//     allowNull: false,
//     type: DataTypes.STRING,
//     unique: false,
//   },
//   createdAt: {
//     allowNull: false,
//     type: DataTypes.DATE,
//     field: 'create_at',
//     defaultValue: Sequelize.NOW,
//   },
// };

// class Client extends Model {
//   static associate() {}
//   static config(sequelize) {
//     return {
//       sequelize,
//       tableName: CLIENT_TABLE,
//       modelName: 'User',
//       timestamps: false,
//     };
//   }
// }

// module.exports = { CLIENT_TABLE, ClientSchema, Client };
