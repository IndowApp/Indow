module.exports = (sequelize, DataTypes) => {
    const BankAccount = sequelize.define('BankAccount', {
      id: { 
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      balance: DataTypes.INTEGER,
      income: DataTypes.INTEGER
    });
  
    
    BankAccount.associate = (models) => {
      models.BankAccount.belongsTo(models.User);
    // uncomment below when/if we decide to use an asset table: 
    // models.BankAccount.hasMany(models.Asset);
    }
  
    return BankAccount;
  };
  