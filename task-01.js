Object.prototype.isArray = function() { 
    return Object.prototype.toString.call(this) === '[object Array]';
};