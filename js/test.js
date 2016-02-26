var object1 = {
    apple: 0,
    banana: { weight: 52, price: 100 },
    cherry: 97,
};
var object2 = {
    banana: { price: 200 },
    durian: 100,
};

// for(var k in object2['banana']) {

//     console.log(k);
// }
// console.log($.extend());

// $.extend(true, object1, object2);

var ext = mQuery.extend(object1);
// console.log(ext);
console.log(mQuery('#some-id').addClass('class_name'));