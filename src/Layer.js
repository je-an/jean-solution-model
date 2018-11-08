define(["TypeCheck", "Failure", "Bounding"], function (TypeCheck, Failure, Bounding) {
    /**
     * @param {Object} options - options object
     * @param {String} options.id - id of the layer
     * @param {String} options.url - url of the layer
     * @param {String} options.type - type of the layer
     * @param {String} options.preview - preview of the layer
     * @param {String} options.name - name of the layer
     * @param {String} options.layerName - combined map and layer name of the layer
     * @param {Bounding} options.bounding - the boundings of this layer
     */
    var Layer = function (options) {
        this.id = TypeCheck.isString(options.id) ? options.id : Failure.throwTypeError("options.id is not a string");
        this.url = TypeCheck.isString(options.url) ? options.url : Failure.throwTypeError("options.url is not a string");
        this.type = TypeCheck.isString(options.type) ? options.type : Failure.throwTypeError("options.type is not a string");
        this.preview = TypeCheck.isString(options.preview) ? options.preview : Failure.throwTypeError("options.preview is not a string");
        this.name = TypeCheck.isString(options.name) ? options.name : Failure.throwTypeError("options.name is not a string");
        this.layerName = TypeCheck.isString(options.layerName) ? options.layerName : Failure.throwTypeError("options.layerName is not a string");
        this.bounding = TypeCheck.isInstanceOf(options.bounding, Bounding) ? options.bounding : Failure.throwTypeError("options.bounding is not an instance of Bounding");
    };
    return Layer;
});