module.exports = function(sequelise, DataTypes)
{
    var panoImg = sequelise.define('panoImg', {
        name: DataTypes.STRING,
        url: DataTypes.STRING,
        rotationSpeed: DataTypes.INTEGER,
        manualRotation: DataTypes.BOOLEAN
    });

    return panoImg;
}