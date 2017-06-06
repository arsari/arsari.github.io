$(document).ready(function () {
    // tooltip script
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // flip boxes
    $('.hover').hover(function () {
        $(this).addClass('flip')
    }, function () {
        $(this).removeClass('flip')
    })
})
