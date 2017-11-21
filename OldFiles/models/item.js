/*==================================ITEM MODEL====================================*/

module.exports = function(sequelize, DataTypes){
    var Item = sequelize.define('item', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expiration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reserved: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
      return Item;
    };