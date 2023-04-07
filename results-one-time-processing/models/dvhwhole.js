/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dvhwhole', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    id4: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: true
    },
    id7: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: true
    },
    LV05: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: 'of whole lung'
    },
    LV10: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: 'of whole lung'
    },
    LV20: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: 'of whole lung'
    },
    LV30: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: 'of whole lung'
    },
    LV40: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: 'of whole lung'
    },
    maxdose: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    meandose: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mediandose: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    volume: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    filename: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    isdifferential: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: '1: is differential , 0: not differential'
    }
  }, {
    sequelize,
    tableName: 'dvhwhole'
  });
};
