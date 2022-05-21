function slide_to(destination) {
    var element = document.getElementById(destination);
    element.scrollIntoView({behavior: "smooth"});
}

function logo_hover(element) {
    element.setAttribute('src', './imagens/patamaro_hover.jpg');
}

function logo_unhover(element) {
    element.setAttribute('src', './imagens/patamaro.jpg');
}

function menu_click(section) {
    $(".menu").each(function() {
        $(this).removeClass('active');
    });

    $("#"+section+"_menu").addClass('active');

    /*
    $(".main").each(function() {
        if (!$(this).hasClass('hidden')) {
            $(this).addClass('hidden');
        }
    });

    $("#"+section+"_div").removeClass('hidden');
    */

    $("#test").removeClass('hidden');
    $("#test").addClass('show');
}