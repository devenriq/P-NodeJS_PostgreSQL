const boom = require('@hapi/boom');
const faker = require('faker');

const { models } = require('./../libs/sequelize');

const getConnection = require('./../libs/postgres');
const pool = require('./../libs/postgresPool');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  async generate() {
    const limit = 50;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        phone: faker.phone.phoneNumber('+51-9##-###-###'),
      });
    }
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;

    // const client = await getConnection();
    // const rta = await client.query('SELECT * FROM task');
    // return rta.rows;
  }

  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data,
    };

    this.users.push(newUser);
    return newUser;
  }

  async findOne(id) {
    const user = this.users.find((person) => person.id === id);
    if (!user) {
      throw boom.notFound('User no encontrado');
    }
  }

  async update(id, changes) {
    const index = this.users.find((person) => person.id === id);
    if (index === -1) {
      throw boom.notFound('User not found');
    } else {
      const user = this.users[index];
      this.users[index] = {
        ...user,
        ...changes,
      };
      return this.users[index];
    }
  }

  async delete(id) {
    const index = this.users.find((user) => user.id === index);
    if (index === -1) {
      throw boom.notFound('User not found');
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UsersService;
