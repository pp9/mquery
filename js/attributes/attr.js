// TODO:
//[ ] add scope for collback

mQuery.prototype.attr = function(name, value){
    var boolAttrList = ['disabled', 'hidden'],
    self = this,
    attrList = self[0].attributes;


    function mSetAttr(name, value, node) {
        // check if att is bool
        if(boolAttrList.indexOf(name) > -1) {
            node.setAttribute(name, name);
        } else {
            node.setAttribute(name, value);
        }
    }

    function mGetAttr(name, node) {
        var getAttr;
        for (var i = 0; i < node.attributes.length; i++) {
            if(node.attributes[i].name == name) {
                getAttr = node.attributes[i].textContent || node.attributes[i].name;
                break;
            }
        }
        return getAttr;
    }

    if(typeof value == 'function') {
        var attrVal = value();
        mSetAttr(name, attrVal, self[0]);
        return self[0];
    }

    if(typeof name == 'object') {
        for(key in name) {
            mSetAttr(key, name[key], self[0]);
        }
        return self;
    }

    if(value) {
        mSetAttr(name, value, self[0]);
        return self;
    }

    var res = mGetAttr(name, self[0]);
    return res;
};