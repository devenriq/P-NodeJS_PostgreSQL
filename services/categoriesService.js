const faker = require('faker');
const boom = require('@hapi/boom');

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
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
    return this.categories;
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
