define(["TypeCheck", "Failure", "List"], function (TypeCheck, Failure, List) {
    /**
     * @param {Object} options - options object
     * @param {String} options.id - id of the layer configuration
     * @param {String} options.layerName - name of configured layer
     * @param {String} options.url - url of the layer
     * @param {String} options.type - type of the layer
     */
    var LayerConfiguration = function (options) {
        this.id = TypeCheck.isString(options.id) ? options.id : Failure.throwTypeError("options.id is not a string");
        this.layerName = TypeCheck.isString(options.layerName) ? options.layerName : Failure.throwTypeError("options.layerName is not a string");
        this.url = TypeCheck.isString(options.url) ? options.url : Failure.throwTypeError("options.url is not a string");
        this.type = TypeCheck.isString(options.type) ? options.type : Failure.throwTypeError("options.type is not a string");
    };
    return LayerConfiguration;
});