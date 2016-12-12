// var $res = $('li').addClass(function(i, currentClassName ) {
//     // return '';
// });
// var m$res = m$('li').addClass(function(i, currentClassName) {
//     // console.log(currentClassName);
//     return 'tmm'
// });

// m$('h1').toggleClass(function() {
//     return 'tst2';
// });
// m$('li').addClass('tsts');

// var evt = new Event('tstEv');
// // console.log(evt);

// document.addEventListener('tstEv', function(e) {
//     console.log(e);
// });
// document.dispatchEvent(evt);
document.querySelector('h1').addEventListener('click', function(e) {
    console.log(e.type);
});


document.querySelector('h1').attributes[0].addEventListener('change', function(e) {
    console.log('class changed');
});

document.querySelector('h1').setAttribute('class', 'newClass');
document.querySelector('h1').attributes[0].dispatchEvent(new Event('change'));

m$('h1').on('click', function(e) {
    // console.log(this);
    console.log(e);
});

// $('h1').on('click', function(e) {
//     // console.log(this);
//     console.log(e);
// });


// m$('li').removeClass('test');
// console.log($res);
// console.log(m$res);
