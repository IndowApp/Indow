module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: { 
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name: DataTypes.STRING, 
      email: DataTypes.STRING, 
    });
  
    
    User.associate = (models) => {
      models.User.hasMany(models.BankAccount);
    // UNCOMMENT BELOW WHEN THE USER PREFERENCE TABLE IS COMPLETE 
    //   models.User.hasOne(models.UserPreference);
    }
  
    return User;
  };
  