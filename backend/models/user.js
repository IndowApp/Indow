module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: { 
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name: DataTypes.STRING, 
      email: DataTypes.STRING, 
    });
  
    // UNCOMMENT BELOW WHEN THE USER PREFERENCE TABLE IS COMPLETE 
    // 
    // User.associate = (models) => {
    //   models.User.hasOne(models.UserPreference);
    // }
  
    return User;
  };
  