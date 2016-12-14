'use strict';
// this is eqivalent of core.js in jquery
// TODO: this part is kinda mess

// JQUERY
// 0:li.test.cls
// 1:li.test
// 2:li.test
// 3:li
// context:document
// length:4
// prevObject:jQuery.fn.init[1]
// selector:"li"


// Test.prototype.init = function() {
//     return {test: '123'};
// }

// function Test() {
//     return new Test.prototype.init();
// }


// let t = new Test();
// console.log(t);

function nodeListToArr(list) {
    var arr = [];
    for (var i = 0; i < list.length; i++) {
        arr[i] = list[i];
    }
    return arr;
}



function mainSelect(sel) {
    var ret = {
        nodes: [],
        length: 0
    }

    var selectResult = nodeListToArr(document.querySelectorAll(sel));

    ret.nodes = selectResult;
    ret.length = selectResult.length;
    return ret;
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
var m$, mQuery;

mQuery = function(selector, context) {
    return new mQuery.prototype.init(selector, context);
}


mQuery.prototype.init = function (selector, context) {
    // this is constructor function
    var qr = {};
    if(selector === document) {
        // attach global event cbs
        // document.ajaxComplete = function () {
        //     console.log('ajaxComplete');
        // }
        // document.ajaxError = function () {
        //     console.log('ajax error');
        // }
        // document.ajaxSend = function () {
        //     console.log('ajaxSend');
        // }
        qr.selected = [document];
    } else {
        qr = makeQuery(selector, context);
    }

    qr.selected.forEach((el, i) => {this[i] = el});
    // console.log(qr);
    this.length = qr.selected.length;
    this.selector = qr.selector || document;
    this.context = context || document;
    this.prevObject = this;
    return this;
}

mQuery.prototype.init.prototype = mQuery.prototype;


// mQuery.prototype.init.prototype


mQuery.extend = mQuery.prototype.extend = function(extentionObject) {
    if(typeof extentionObject !== 'object') return;

    for(let key in extentionObject) {
        this[key] = extentionObject[key];
    }
}

mQuery.extend({
    each: function(arr, callback) {
        // this method id dumb i should remove it, or replace with _.each implementaion
        nodeListToArr(arr).forEach(callback);
        // arr.forEach(callback);
    },
    add: function (selector, context) {
        var rsp = makeQuery(selector, context);

        for (var i = 0, b = this.length; i < rsp.length; i++, b++) {
            this[b] = rsp.selected[i];
        }
        delete this.selector;
        return this;
    }
});

// mQuery.prototype.each()





m$ = mQuery;

mQuery.prototype.each = function(cb){
     for(var i = 0; i < this.length; i++) {
        cb.call(null, i, this[i]);
     }
};
