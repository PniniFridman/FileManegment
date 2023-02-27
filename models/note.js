module.exports = (sequelize, DataTypes) => {
    const Note = sequelize.define(
    "note",
    {
    title: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    contents: {
    type: DataTypes.TEXT,
    },
    created: {
    type: DataTypes.DATE,
    },
    },
    {
    timestamps: false,
    }
    );
    return Note;
};
    