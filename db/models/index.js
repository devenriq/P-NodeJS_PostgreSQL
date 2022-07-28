const { User, UserSchema } = require('./userModel');
const { Product, ProductSchema } = require('./productModel');
const { Category, CategorySchema } = require('./categoryModel');
const { Brand, BrandSchema } = require('./brandModel');
// const { Client, ClientSchema } = require('./clientModel');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Brand.init(BrandSchema, Brand.config(sequelize));
  // Client.init(ClientSchema, Client.config(sequelize));
}

module.exports = { setupModels };
