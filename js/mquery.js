'use strict';

// this is eqivalent of core.js in jquery
// TODO: this part is kinda mess
var m$, mQuery;

mQuery = function(selector, context) {
    // return mQuery.prototype.init(sel, ctx);
    var mainObj =  new mQuery.prototype.init(selector, context);
    // var rsp = makeQuery(selector, context);
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

mQuery.prototype.init = function (selector, context) {
    if(selector === document) {
        // console.log('doc');
        return document;
    }
    return makeQuery(selector, context);
    // return rsp;
}


mQuery.extend = mQuery.prototype.extend = function(extentionObject) {
    if(typeof extentionObject !== 'object') return;

    for(let key in extentionObject) {
        this[key] = extentionObject[key];
    }
}

mQuery.extend({
    each: function(arr, callback) {
        // this method id dumb i should remove it, or replace with _.each implementaion
        arr.forEach(callback);
    }
})

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
    // console.log(selector);
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
        // console.log(selNodes);

        rsp.selected = selNodes.nodes;
        rsp.length = selNodes.length;
        rsp.selector = sel;
        return rsp;
    }
}


mQuery.prototype.add = function (selector, context) {
    var rsp = makeQuery(selector, context);

    for (var i = 0, b = this.length; i < rsp.length; i++, b++) {
        this[b] = rsp.selected[i];
    }
    delete this.selector;
    return this;
};

m$ = mQuery;
// mQuery.prototype.each = function(cb){
//      for(var i = 0; i < this.length; i++) {
//         cb.call(null, i, this[i]);
//      }
// };
