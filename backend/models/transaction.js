module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
      id: { 
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      transaction_type: DataTypes.STRING,
      category: DataTypes.STRING,
      merchant_name: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      iso_currency_code: DataTypes.STRING,
      date: DataTypes.STRING,
      location: DataTypes.STRING,
      pending: DataTypes.BOOLEAN
    });
  
    
    Transaction.associate = (models) => {
      models.Transaction.belongsTo(models.BankAccount);
    // uncomment below when/if we decide to use an asset table: 
    // models.BankAccount.hasMany(models.Asset);
    }
  
    return Transaction;
  };
  