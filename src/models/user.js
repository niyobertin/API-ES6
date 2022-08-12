// const sequelize = require("sequelize");

// const { DataTypes } = require("sequelize/types")

const getUserModel = (sequelize, { DataTypes }) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });
    //associating user with message.
    User.associate = (models) => {
        User.hasMany(models.message, { onDelete: 'CASCADE' });
    };
    //allowing user to login using user name or email.
    User.findByLogin = async (login) => {
        let user = await User.findOne({
            where: { username: login },
        });
        if (!user) {
            user = await User.fingOne({
                where: { email: login }
            })
        };
        return user;
    };
    return User;
}
export default getUserModel;