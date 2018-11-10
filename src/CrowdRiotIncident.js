define([
    "TypeCheck",
    "Failure",
    "List",
    "Inheritance",
    "Incident"
], function (
    TypeCheck,
    Failure,
    List,
    Inheritance,
    Incident
) {
        /**
         * @extends Incident
         * @param {Object} options - options object
         * @param {Number} options.amount - amount of tangos on the map
         * @param {Number} options.latitude - coordinate of tangos
         * @param {Number} options.longitude - coordinate of tangos
         * @param {Number} options.updateTime - time in ms for movement of tangos
         * @param {Number} options.movementTop - amount in degrees for movement top of the coords
         * @param {Number} options.movementRight - amount in degrees for movement right of the coords
         * @param {Number} options.movementBottom - amount in degrees for movement bottom of the coords
         * @param {Number} options.movementLeft - amount in degrees for movement left of the coords
         * @param {String} options.color - color as hex string
         */
        var CrowdRiotIncident = function (options) {
            Inheritance.inheritConstructor(Incident, this, options);
            this.amount = TypeCheck.isNumber(options.amount) ? options.amount : Failure.throwTypeError("options.amount is not a number");
            this.latitude = TypeCheck.isNumber(options.latitude) ? options.latitude : Failure.throwTypeError("options.latitude is not a number");
            this.longitude = TypeCheck.isNumber(options.longitude) ? options.longitude : Failure.throwTypeError("options.longitude is not a number");
            this.updateTime = TypeCheck.isNumber(options.updateTime) ? options.updateTime : Failure.throwTypeError("options.updateTime is not a number");
            this.movementTop = TypeCheck.isNumber(options.movementTop) ? options.movementTop : Failure.throwTypeError("options.movementTop is not a number");
            this.movementRight = TypeCheck.isNumber(options.movementRight) ? options.movementRight : Failure.throwTypeError("options.movementRight is not a number");
            this.movementBottom = TypeCheck.isNumber(options.movementBottom) ? options.movementBottom : Failure.throwTypeError("options.movementBottom is not a number");
            this.movementLeft = TypeCheck.isNumber(options.movementLeft) ? options.movementLeft : Failure.throwTypeError("options.movementLeft is not a number");
            this.color = TypeCheck.isString(options.color) ? options.color : Failure.throwTypeError("options.color");
        };
        Inheritance.inheritPrototype(CrowdRiotIncident, Incident);
        return CrowdRiotIncident;
    });