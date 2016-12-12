mQuery.prototype.attr = function(name, value){
    var attr = this[0].getAttribute(name);
    console.log(this[0].getAttribute('id'));
    if(value) {
        this[0].setAttribute(name, value);
        return this;
    }
    return attr;
};