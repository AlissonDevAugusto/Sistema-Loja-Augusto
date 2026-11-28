import Sequelize, { Model } from "sequelize";

class StockMovement extends Model {
  static init(sequelize) {
    super.init(
      {
        productId: { type: Sequelize.INTEGER, allowNull: false },
        type: { type: Sequelize.ENUM("IN", "OUT"), allowNull: false },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: { min: 1 },
        },
        reason: Sequelize.STRING(100),
      },
      {
        sequelize,
        tableName: "stock_movements",
        underscored: true,
        updatedAt: false,
      },
    );

    return this;
  }
}

export default StockMovement;
