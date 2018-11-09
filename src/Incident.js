define(["TypeCheck", "Failure", "IncidentType", "HazardLevel"], function (TypeCheck, Failure, IncidentType, HazardLevel) {
    /**
     * @param {Object} options - options object
     * @param {String} options.id - id of the incident
     * @param {String} options.description - description of the incident
     * @param {IncidentType} options.type - type of the incident
     * @param {HazardLevel} options.level - level of hazard
     */
    var Incident = function (options) {
        this.id = TypeCheck.isString(options.id) ? options.id : Failure.throwTypeError("options.id is not a string");
        this.description = TypeCheck.isString(options.description) ? options.description : Failure.throwTypeError("options.description is not a string");
        this.type = TypeCheck.isEnumValue(options.type, IncidentType) ? options.type : Failure.throwTypeError("options.type is not a value of IncidentType");
        this.level = TypeCheck.isEnumValue(options.level, HazardLevel) ? options.level : Failure.throwTypeError("options.level is not a value of HazardLevel");
    };
    return Incident;
});