define(["TypeCheck", "Failure", "List"], function (TypeCheck, Failure, List) {
    /**
     * @param {Object} options - options object
     * @param {String} options.id - id of the map
     * @param {String} options.name - name of the map
     * @param {String} options.description - description of the map
     * @param {String} options.url - url of the map
     * @param {List<Layer>} options.layers - layers of the map
     */
    var Map = function (options) {
        this.id = TypeCheck.isString(options.id) ? options.id : Failure.throwTypeError("options.id is not a string");
        this.name = TypeCheck.isString(options.name) ? options.name : Failure.throwTypeError("options.name is not a string");
        this.description = TypeCheck.isString(options.description) ? options.description : Failure.throwTypeError("options.description is not a string");
        this.layers = TypeCheck.isInstanceOf(options.layers, List) ? options.layers : Failure.throwTypeError("options.layers is not a List");
    };
    return Map;
});