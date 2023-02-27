module.exports = (sequelize, DataTypes) => {
    const Folder = sequelize.define(
    "folder",
    {
    idfolders: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
    },
    name: {
    type: DataTypes.STRING,
    },
    parentid: {
    type: DataTypes.INTEGER,
    },
    userid: {
        type: DataTypes.INTEGER,
        }
    },
    {
    timestamps: false,
    }
    );
    return Folder;
};
    