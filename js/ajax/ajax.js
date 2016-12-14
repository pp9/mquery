// .ajaxComplete()
// .ajaxError()
// .ajaxSend()

mQuery.get = function(url, next) {
    var xml = new XMLHttpRequest();
    // console.log('some %s', url);
    xml.open('GET', url);
    xml.onreadystatechange = function(smm) {

    };
    xml.onload = function(resp) {
        console.log(resp);
        if(typeof next === 'function') next.call(null, xml.responseText);
    }
    xml.onerror = function() {
        console.log('error');
    }
    xml.send();

}
mQuery.prototype.extend({
    ajaxError: function (cb) {
        // global event can only accept document
        if(this[0] !== document) return new Error(`${this[0]} should be document element`);
        this[0].addEventListener('ajaxError', cb);
        // document.addEventListener('test', cb);
    }
})
