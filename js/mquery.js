'use strict';

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
        var rsp = {};
        var selNodes = mainSelect(sel);

        rsp.selected = selNodes.nodes;
        rsp.length = selNodes.length;
        rsp.selector = sel;
        return rsp;
    }
}

function mQuery() {};

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
var m$ = function(selector, context) {

    var mainObj = new mQuery();

    var rsp = makeQuery(selector, context);

    for (var i = 0; i < rsp.selected.length; i++) {
        mainObj[i] = rsp.selected[i];
    }
    mainObj.length = rsp.length;
    mainObj.selector = rsp.selector;
    mainObj.splice = function() {
        return true;
    }

    return mainObj;
}