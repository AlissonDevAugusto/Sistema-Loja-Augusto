import Sequelize, { Model } from "sequelize";

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: { notEmpty: true },
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: { min: 0 },
        },
        path: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        category: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: { notEmpty: true },
        },
        barcode: {
          type: Sequelize.STRING(14),
          allowNull: true,
          unique: true,
          set(value) {
            const code = value ? String(value).trim() : "";
            this.setDataValue("barcode", code || null);
          },
          validate: {
            is: {
              args: /^(\d{8}|\d{12,14})$/,
              msg: "The barcode must have 8, 12, 13, or 14 digits.",
            },
          },
        },
        stockQuantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
          validate: { min: 0 },
        },
      },
      {
        sequelize,
        tableName: "products",
        underscored: true,
      },
    );

    return this;
  }
}

export default Product;
