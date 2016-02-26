// TODO:
// [ ] implement callback

mQuery.fn.extend({
    addClass: function(value) {
        var className;
        switch (typeof value) {
            case 'function' :
                // this.each();
                break;
            case 'string':
                className = value;

                for(var i = 0; i < this.length; i++) {
                    this[i].classList.add(value);
                }
                break;
        }
        return this;
    }
})