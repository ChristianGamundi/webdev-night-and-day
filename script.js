$(document).ready(function() {
    $('button').click(function(){
        if ($('body').hasClass('black')) {
            $('body').removeClass('black').addClass('white');
        }
        else {
            $('body').removeClass('white').addClass('black');
        }
    });
});

if ($('#moonspot1').hasClass('visible')) {
    $('#moonspot1').removeClass('visible');
} else {
    $('#moonspot1').addClass('visible');
}