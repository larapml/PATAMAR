window.onscroll = function() {scroll()};

var navbar = document.getElementById("sidebar");
var sticky = navbar.offsetTop;

$(document).ready(function() {
    // Initialize the store
    store_init();
});

function scroll() {
    if (window.pageYOffset >= document.documentElement.clientHeight) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky");
    }
}

function slide_to(destination) {
    var element = document.getElementById(destination);
    element.scrollIntoView({behavior: "smooth"});
}

function logo_hover(element) {
    element.setAttribute('src', './images/patamaro_hover.jpg');
}

function logo_unhover(element) {
    element.setAttribute('src', './images/patamaro.jpg');
}

function menu_click(section) {

    $(".menu").each(function() {
        $(this).removeClass('active');
    });

    $(".submenu").each(function() {
        $(this).removeClass('active');
    });

    $("#"+section+"_menu").addClass('active');
    $("#"+section+"_submenu").removeClass('hidden');
    $("#"+section+"_angle").removeClass('fa-angle-down');
    $("#"+section+"_angle").addClass('fa-angle-up');

    $(".main").each(function() {
        if (!$(this).hasClass('hidden')) {
            $(this).addClass('hidden');
        }
    });

    $(".sub").each(function() {
        if (!$(this).hasClass('hidden')) {
            $(this).addClass('hidden');
        }
    });

    $("#"+section+"_div").removeClass('hidden');
}

function submenu_click(subsection, section) {
    $("."+ section +"_submenu").each(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
    });

    $(".menu").each(function() {
        $(this).removeClass('active');
    });

    $("#"+section+"_menu").addClass('active');
    $("#"+subsection).addClass('active');

    $(".main").each(function() {
        if (!$(this).hasClass('hidden')) {
            $(this).addClass('hidden');
        }
    });

    $(".sub").each(function() {
        if (!$(this).hasClass('hidden')) {
            $(this).addClass('hidden');
        }
    });

    $("#"+subsection+"_div").removeClass('hidden');
}

function toogle_submenu(section) {
    if ($("#"+section+"_submenu").hasClass('hidden')) {
        $("#"+section+"_submenu").removeClass('hidden');
        $("#"+section+"_angle").removeClass('fa-angle-down');
        $("#"+section+"_angle").addClass('fa-angle-up');
    }
    else {
        $("#"+section+"_submenu").addClass('hidden');
        $("#"+section+"_angle").removeClass('fa-angle-up');
        $("#"+section+"_angle").addClass('fa-angle-down');
    }
}

function projects_click(project) {
    if ($("#"+project+"_menu").hasClass('active')) {

        $("#"+project+"_div").addClass('hidden');
        $("#"+project+"_menu").removeClass('active');
        return;

    }

    $(".projetos").each(function() {
        $(this).removeClass('active');
    });

    $("#"+project+"_menu").addClass('active');

    $(".projeto_sobre").each(function() {
        if (!$(this).hasClass('hidden')) {
            $(this).addClass('hidden');
        }
    });

    $("#"+project+"_div").removeClass('hidden');
}

function show_about(person) {
    if ($("#"+person).hasClass('active')) {

        $("#"+person+"_about").addClass('hidden');
        $("#"+person).removeClass('active');
        return;

    }

    $(".colaboradores").each(function() {
        $(this).removeClass('active');
    });

    $("#"+person).addClass('active');

    $(".about").each(function() {
        if (!$(this).hasClass('hidden')) {
            $(this).addClass('hidden');
        }
    });

    $("#"+person+"_about").removeClass('hidden');
}