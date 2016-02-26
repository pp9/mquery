mQuery.prototype.hasClass = function(className) {
    console.log($('#some-id'));
    if(className && typeof className == 'string') {
        this.each(function(i, e) {
            m$.mGetAttr(className, m$(e)[0]);
        })
    }
};