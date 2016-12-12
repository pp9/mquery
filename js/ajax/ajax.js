// .ajaxComplete()
// .ajaxError()
// .ajaxSend()
mQuery.get = function(url, next) {
    var xml = new XMLHttpRequest();
    // console.log('some %s', url);
    xml.open('GET', url);
    xml.onreadystatechange = function(smm) {
        console.log(xml);
    };
    xml.send();
    // console.log(url);
    if(typeof next === 'function') next();
}
