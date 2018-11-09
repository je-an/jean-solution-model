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
         */
        var CrowdRiotIncident = function (options) {
            Inheritance.inheritConstructor(Incident, this, options);
            this.amount = TypeCheck.isNumber(options.amount) ? options.amount : Failure.throwTypeError("options.amount is not a number");
            this.latitude = TypeCheck.isNumber(options.latitude) ? options.latitude : Failure.throwTypeError("options.latitude is not a number");
            this.longitude = TypeCheck.isNumber(options.longitude) ? options.longitude : Failure.throwTypeError("options.longitude is not a number");
        };
        Inheritance.inheritPrototype(CrowdRiotIncident, Incident);
        return CrowdRiotIncident;
    });