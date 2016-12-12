mQuery.Event = function() {
// altKey:false
// bubbles:true
// button:0
// buttons:0
// cancelable:true
// clientX:53
// clientY:37
// ctrlKey:false
// currentTarget:h1.tst
// data:undefined
// delegateTarget:h1.tst
// detail:1
// eventPhase:2
// handleObj:Object
// isDefaultPrevented:returnFalse()
// jQuery22409000965247448052:true
// metaKey:false
// offsetX:45
// offsetY:16
// originalEvent:MouseEvent
// pageX:53
// pageY:37
// relatedTarget:null
// screenX:53
// screenY:103
// shiftKey:false
// target:h1.tst
// timeStamp:2259.4100000000003
// toElement:h1.tst
// type:"click"
// view:Window
// which:1
}
mQuery.prototype.on = function(eventName, callback) {
    this.each(function(i, el) {
        el.addEventListener(eventName, callback);
    })
}