// console.log(m$(document));
m$(document).ajaxError();

// $.each(['ere', 1, true, null], function(e, i) {console.log(e, i);})
m$('#some-id').on('click', function(){
    m$.get('package.jsonaaa', function(resp) {
        console.log(resp);
    })
    // console.log('smm');
})