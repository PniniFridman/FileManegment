module.exports = (sequelize, DataTypes) => {
    const File = sequelize.define(
    "file",
    {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
    },
    name: {
    type: DataTypes.STRING,
    },
    url: {
    type: DataTypes.STRING,
    },
    folderId: {
        type: DataTypes.INTEGER,
        },
    userId: {
        type: DataTypes.INTEGER,
        }
    },
    {
    timestamps: false,
    }
    );
    return File;
};
    