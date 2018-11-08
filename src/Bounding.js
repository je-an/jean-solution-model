define(["TypeCheck", "Failure"], function (TypeCheck, Failure) {
    /**
     * @param {Object} options - options object
     * @param {Number} options.northLatitude - north bound
     * @param {Number} options.eastLongitude - east bound
     * @param {Number} options.southLatitude - south bound
     * @param {Number} options.westLongitude - west bound
     */
    var Bounding = function (options) {
        this.northLatitude = TypeCheck.isNumber(options.northLatitude) ? options.northLatitude : Failure.throwTypeError("options.northLatitude is not a number");
        this.eastLongitude = TypeCheck.isNumber(options.eastLongitude) ? options.eastLongitude : Failure.throwTypeError("options.eastLongitude is not a number");
        this.southLatitude = TypeCheck.isNumber(options.southLatitude) ? options.southLatitude : Failure.throwTypeError("options.southLatitude is not a number");
        this.westLongitude = TypeCheck.isNumber(options.westLongitude) ? options.westLongitude : Failure.throwTypeError("options.westLongitude is not a number");
    };
    return Bounding;
});