$(document).ready(function () {
    $('.nav li').click(function (e) {

        $('.nav li').removeClass('active');

        var $parent = $(this);
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();
    });
});

var selector = '.nav li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});