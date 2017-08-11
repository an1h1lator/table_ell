$('.t .t__th-td-slide').each(function(i) {

    let maxWidth = $(this).width();
    $(this).html('<div>' + $(this).html() + '</div>');

    let minWidth = $('div', this).width();
    $(this).data('maxWidth', maxWidth).data('minWidth', minWidth);

});

$('.slide').click(function() {

    let option = 'maxWidth';
    let td = $('.t .t__th-td-slide');
    let div  = $('.t__th-td-slide div');

    td.toggleClass('td--hidden');
    if (td.hasClass('td--hidden')) option = 'minWidth';

    div.width(div.parent().data(option));

    console.log(div.parent().data(option));
});
