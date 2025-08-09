$(document).ready(function () {
    let movedRight = false;
    const ua = navigator.userAgent;
    const moveDistance = /mobile/i.test(ua) ? 190 : 320; // если мобила → 200, иначе → 300

    $('.circle').click(function () {
        if (!movedRight) {
            $(this).animate({'margin-left': moveDistance + 'px'}, 300);
            movedRight = true;
        } else {
            $(this).animate({'margin-left': '10px'}, 300);
            movedRight = false;
        }
    });
});

