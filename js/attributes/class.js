// TODO:
// [x] implement callback
// [] add `state` argument for toggleClass


mQuery.prototype.addClass = function(value) {
    var className;
    var i = 0;
    switch (typeof value) {
        case 'function' :
            this.each(function(i, el) {
                className = value(i, el.classList.toString());
                if(className) el.classList.add(className);
            });
            break;
        case 'string':
            className = value;
            while(el = this[i++]) {
                el.classList.add(value);
            }
            // for(var i = 0; i < this.length; i++) {
            //     this[i].classList.add(value);
            // }
            break;
    }
};

mQuery.prototype.removeClass = function(value) {
    switch (typeof value) {
        case 'function' :
            this.each(function(i, el) {
                className = value(i, el.classList.toString());
                if(className) el.classList.remove(className);
            });
            break;
        case 'string':
            className = value;
            for(var i = 0; i < this.length; i++) {
                this[i].classList.remove(value);
            }
            break;
    }
};

mQuery.prototype.hasClass = function(value) {
    // check that class name is valid
    if(typeof value !== 'string' || value.indexOf(' ') !== -1) throw new Error('Class name must be String with no spaces');

    var hasClass = false;
    this.each(function(i, el) {
        if(el.classList.contains(value)) return hasClass = true;
    });
    return hasClass;
}

// https://api.jquery.com/toggleClass/
mQuery.prototype.toggleClass = function(className, state) {
    switch (typeof className) {
        case 'function':
            var toggleName;
            this.each(function(i, el) {
                toggleName = className(i, el, state);
                if(typeof toggleName === 'string') el.classList.contains(toggleName) ? el.classList.remove(toggleName) : el.classList.add(toggleName);
            })
        break;
        case 'string':
        this.each(function(e, el) {
            el.classList.contains(className) ? el.classList.remove(className) : el.classList.add(className);
        });
        break;
    }
    return this;
}