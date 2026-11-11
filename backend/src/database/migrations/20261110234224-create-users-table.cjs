"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /* criando a tabela no banco */
    await queryInterface.createTable("users", {
      id: {
        primaryKey: true /* primeira chave da tabela */,
        allowNull: false /* campo obrigatorio */,
        type: Sequelize.UUID /* tipo id, UUID ex: dnu39d-mdcj393-fmsad-  */,
        defaultValue: Sequelize.UUIDV4 /* defini o id padrao */,
      },
      name: {
        type: Sequelize.STRING /* tipo texto */,
        allowNull: false /* campo obrigatorio */,
      },
      email: {
        type: Sequelize.STRING /* tipo texto */,
        allowNull: false /* campo obrigatorio */,
        unique: true /* nao pode email repitidos */,
      },
      password_hash: {
        type: Sequelize.STRING /* tipo texto */,
        allowNull: false /* campo obrigatorio */,
      },
      admin: {
        type: Sequelize.BOOLEAN /* true ou false */,
        defaultValue: false /* defini false como padrao */,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("users");
  },
};
