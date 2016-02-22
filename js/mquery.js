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
mQuery.prototype.addClass = function(value) {
    var className;
    switch (typeof value) {
        case 'function' :
            className = value();
            break;
        case 'string':
            className = value;
            break;
    }

    for(var i = 0; i < this.length; i++) {
        this[i].classList.add(value);
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

    return mainObj;
}


// var ctx = m$('.wrapp');
// var m$res = m$('li').addClass(function() {});
var smm = 'some string';
var fn = function (argument) {
    return 1;
}


var $res = $('.some-cls').addClass(function(arg1, arg2, arg3) {
    console.log(arguments);
});
var arr = [1,2,"some string of daata"];
var nArr = new Array(1, 2, "some string");
var oArr = Object.create(null);
oArr[0] = 0;
oArr['1'] = 1;

// console.log(m$res);
// console.log($res);
console.log(oArr);