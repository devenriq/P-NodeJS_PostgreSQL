const faker = require('faker');
const boom = require('@hapi/boom');

const pool = require('./../libs/postgresPool');

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  generate() {
    const limit = 6;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
      });
    }
  }

  async find() {
    const query = 'SELECT * FROM task';
    const rta = await this.pool.query(query);
    return rta.rows;

    // return this.categories;
  }

  async create(data) {
    const category = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.categories.push(category);
    return this.categories;
  }

  async findOne(id) {
    const category = this.categories.find(
      (classification) => classification.id === id
    );
    if (!id) {
      throw boom.notFound('Category no encontrada');
    }
    return category.id;
  }

  async update(id, changes) {
    const index = this.categories.find(
      (classification) => classification.id === id
    );
    if (index === -1) {
      throw boom.notFound('Category no encontrada');
    } else {
      const category = this.categories[index];
      this.categories[index] = {
        ...category,
        ...changes,
      };
      return this.categories[index];
    }
  }

  async delete(id) {
    const index = this.categories.find(
      (classification) => classification.id === id
    );
    if (index === -1) {
      throw boom.notFound('Category no encontrada');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = CategoriesService;
