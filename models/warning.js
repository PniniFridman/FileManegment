module.exports = (sequelize, DataTypes) => {
    const Warning = sequelize.define(
    "warning",
    {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
    },
    userid: {
    type: DataTypes.INTEGER,
    },
    fileid: {
    type: DataTypes.INTEGER,
    },
    text: {
        type: DataTypes.STRING,
        },
    snooze: {
        type: DataTypes.TINYINT,
        }
    },
    {
    timestamps: false,
    }
    );
    return Warning;
};
    