// TODO:
// [ ] add corect object for dom obj selector
'use strict';

var mQuery = function(selector, context) {
    // jQuery
    return new mQuery.fn.init(selector, context);
}
mQuery.fn = mQuery.prototype = {
    version: 0.01,
};

// init is a constructor
var init = mQuery.fn.init = function(selector, context) {

    if(!selector) {
        return this;
    }

    var rsp = makeQuery(selector, context);

    for (var i = 0; i < rsp.selected.length; i++) {
        this[i] = rsp.selected[i];
    }
    this.length = rsp.length;
    this.selector = rsp.selector;
    this.splice = function() {
        return true;
    }

    return this;
}

mQuery.extend = mQuery.fn.extend = function(deep, obj1, obj2) {
    var o1, o2;
    if(typeof deep == 'boolean') {
        o1 = obj1;
        o2 = obj2;
    } else {
        o1 = deep;
        o2 = obj1;
    }
    if(arguments.length == 1) {
        return this;
    }

    function mergeObj(ob1, ob2) {
        for(var key in ob2) {
            if(typeof ob2[key] == 'object' && deep) {
                mergeObj(ob1[key], ob2[key]);
            } else {
                ob1[key] = ob2[key];
            }
        }
    }
    mergeObj(o1, o2);

    return o1;
}



function nodeListToArr(list) {
    var arr = [];
    for (var i = 0; i < list.length; i++) {
        arr[i] = list[i];
    }
    return arr;
}

function mainSelect(sel) {
    var selectResult = document.querySelectorAll(sel);
    var arr = nodeListToArr(selectResult);
    var resp = {};
    resp.nodes = arr;
    resp.length = selectResult.length;
    return resp;
}

function makeQuery(selector, context) {
    var rsp = {};

    if(selector instanceof HTMLElement) {
        rsp.selected = [selector];
        rsp.context = selector;
        return rsp;
    }

    if(selector) {
        var sel;
        // build selector
        if(context) {
            if(context instanceof mQuery) {
                sel = context.selector + ' ' + selector;
            } else {
                sel = context + ' ' + selector;
            }
        } else {
            sel = selector;
        }


        var selNodes = mainSelect(sel);
        rsp.selected = selNodes.nodes;
        rsp.length = selNodes.length;
        rsp.selector = sel;
        return rsp;
    }
}

// function mQuery() {};

mQuery.prototype.add = function (selector, context) {
    var rsp = makeQuery(selector, context);

    for (var i = 0, b = this.length; i < rsp.length; i++, b++) {
        this[b] = rsp.selected[i];
    }
    delete this.selector;
    return this;
};
mQuery.prototype.each = function(call){
     for(var i = 0; i < this.length; i++) {
        call(i, this[i]);
     }
};
// mQuery.fn = mQuery.prototype;