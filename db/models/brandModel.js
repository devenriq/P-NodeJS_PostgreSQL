const { Model, DataTypes, Sequelize } = require('sequelize');

const BRAND_TABLE = 'brand';
const BrandSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Brand extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: BRAND_TABLE,
      modelName: 'Brand',
      timestamps: false,
    };
  }
}

module.exports = { BRAND_TABLE, BrandSchema, Brand };
