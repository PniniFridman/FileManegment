module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        "category",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            color: {
                type: DataTypes.STRING,
            },
            img: {
                type: DataTypes.STRING,
            },
            text: {
                type: DataTypes.STRING,
            },
            defult: {
                type: DataTypes.TINYINT,
            },
            userId: {
                type: DataTypes.INTEGER,
            }
        },
        {
            timestamps: false,
        }
    );
    return Category;
};
