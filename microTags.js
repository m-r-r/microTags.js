
var microTags = function(element, options) {
    this._el = element;
    this._children = element.childNodes;

    this._max_size = 3;
    this._min_size = 0.7;
    this._max_angle = 15;
    this._min_angle = -15;

    if (options != undefined)
        this._set_options(options);

    this._max_count = this._get_max_count();
    self = this;
    this.eachTag(function(element, count) {
        self._make_inline(element, count);
        self._set_size(element, count);
        self._set_tilt(element, count);
    });
}

microTags.prototype.version = "0.2"

microTags.prototype._set_options = function(options) {
    var max_size  = options['max-size'],
        min_size  = options['min-size'],
        max_angle = options['max-angle'],
        min_angle = options['min-angle'];

    if ((max_size >= 1) && (max_size > min_size))
        this._max_size = max_size;
    else
        console.error("microTags: option `max-size` must be >= 1 and > min-size");

    if ((min_size > 0) && (min_size < max_size))
        this._min_size = min_size;
    else
        console.error("microTags: option `min-size` must be > 0 and < max-size");

    if (max_angle > min_angle) {
        this._max_angle = max_angle;
        this._min_angle = min_angle;
    }
    else
        console.error("microTags: option `max-angle` must be > `min-angle`");
        
}

microTags.prototype.eachTag = function(callback) { 
    var i, child, tag, count;
    for (i=0; i < this._children.length; i++) {
        child = this._children[i];
        if (child.attributes != undefined) {
            window._c = child;
            count = parseInt(child.attributes["data-count"].value || "1");
            callback(child, count);
        }
    }
}

microTags.prototype._get_max_count = function() {
    var max = 0;
    this.eachTag(function(element, count) {
        max = (max < count) ? count : max;
    });
    return max;
}

microTags.prototype._make_inline = function(element, coun) {
    element.style['display'] = 'inline-block';
}

microTags.prototype._set_size = function(element, count) {
    var size,
        max = this._max_size,
        min = this._min_size,
        max_count = this._max_count;

    size = (count * max / max_count);
    size = (size >= min) ? size : min;
    console.debug(element+ ': ' + count + ': ' + size );
    element.style['fontSize'] = size + 'em';
}

microTags.prototype._set_tilt = function(element, count) {
    var angle,
        max = this._max_angle,
        min = this._min_angle;
    angle = min + (Math.random() * (max - min));
    element.style['transform']       = 'rotate(' + angle + 'deg)';
    element.style['MozTransform']    = 'rotate(' + angle + 'deg)';
    element.style['OTransform']      = 'rotate(' + angle + 'deg)';
    element.style['WebkitTransform'] = 'rotate(' + angle + 'deg)';
    element.style['msTransform']     = 'rotate(' + angle + 'deg)';
}

if (window != undefined) {
    window.microTags = microTags;
}


