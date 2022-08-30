var categories = {
    "em_contrucao": ["grade_viva"],
    "urbanismo": ["grade_viva", "respiga"],
    "concurso": ["boussana", "sol_adormecido"],
    "arquitetura": ["boussana", "casa_burro_cabras", "ovos"],
    "instalacao": ["sol_adormecido"],
    "design": ["chaleira_compostagem", "suporte_portatil", "lixo_lixo"],
    "oficina": ["calque_folhas", "plataforma", "ferro_novo", "corpos_alameda"]
}

function filter_projects(category) {

    if (!$("#projetos_menu").hasClass('active')) {
        menu_click("projetos");
    }

    $(".projetos_submenu").each(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
    });

    $("#"+category).addClass('active');

    if (category == "todos") {
        $(".projetos_section").each(function() {
            if ($(this).hasClass('hidden')) {
                $(this).removeClass('hidden');
            }
        });
        return;
    }

    $(".projetos_section").each(function() {
        if (!$(this).hasClass('hidden')) {
            $(this).addClass('hidden');
        }
    });

    if (category in categories) {
        categories[category].forEach(function(project) {
            $("#"+project+"_section").removeClass('hidden');
        });
    }
}

var project_images = {
    "boussana": [
        "images/projects/boussana/boussana_1.jpg",
        "images/projects/boussana/boussana_2.jpg"
    ],
    "calque_folhas": [
        "images/projects/calque_folhas/calque_folhas_1.JPG", 
        "images/projects/calque_folhas/calque_folhas_2.JPG", 
        "images/projects/calque_folhas/calque_folhas_5.JPG", 
        "images/projects/calque_folhas/calque_folhas_6.JPG",
        "images/projects/calque_folhas/calque_folhas_7.JPG"
    ],
    "casa_burro_cabras": [
        "images/projects/casa_burro_cabras/casa_burro_cabras_1.jpg"
    ],
    "chaleira_compostagem": [
        "images/projects/chaleira_compostagem/chaleira_compostagem_1.jpg",
        "images/projects/chaleira_compostagem/chaleira_compostagem_2.jpg",
        "images/projects/chaleira_compostagem/chaleira_compostagem_4.jpg",
    ],
    "corpos_alameda": [
        "images/projects/corpos_alameda/corpos_alameda_1.jpg",
        "images/projects/corpos_alameda/corpos_alameda_2.jpg",
        "images/projects/corpos_alameda/corpos_alameda_4.jpg",
        "images/projects/corpos_alameda/corpos_alameda_5.jpg",
        "images/projects/corpos_alameda/corpos_alameda_6.jpg",
        "images/projects/corpos_alameda/corpos_alameda_7.jpg",
    ],
    "ferro_novo": [
        "images/projects/ferro_novo/ferro_novo_1.jpg",
        "images/projects/ferro_novo/ferro_novo_4.jpg",
    ],
    "grade_viva": [
        "images/projects/grade_viva/grade_viva_1.jpg"
    ],
    "lixo_lixo": [
        "images/projects/lixo_lixo/lixo_lixo_1.jpg",
        "images/projects/lixo_lixo/lixo_lixo_2.jpg",
    ],
    "ovos": [
        "images/projects/ovos/ovos_0.jpg",
        "images/projects/ovos/ovos_1.jpg",
        "images/projects/ovos/ovos_2.jpg",
        "images/projects/ovos/ovos_3.jpg",
        "images/projects/ovos/ovos_5.jpg",
        "images/projects/ovos/ovos_6.jpg",
        "images/projects/ovos/ovos_gif1.jpg",
        "images/projects/ovos/ovos_gif2.jpg",
    ],
    "plataforma": [
        "images/projects/plataforma/plataforma_1.jpg",
        "images/projects/plataforma/plataforma_2.jpg",
    ],
    "respiga": [
        "images/projects/respiga/respiga_1.JPG",
        "images/projects/respiga/respiga_2.jpg",
        "images/projects/respiga/respiga_3.jpg",
    ],
    "suporte_portatil": [
        "images/projects/suporte_portatil/suporte_portatil_1.jpg",
        "images/projects/suporte_portatil/suporte_portatil_2.jpg",
        "images/projects/suporte_portatil/suporte_portatil_3.jpg",
    ],
    "sol_adormecido": [
        "images/projects/sol_adormecido/sol_adormecido_1.jpg",
    ]
};

var projects_images_hover = {
    "boussana": "images/projects/boussana/boussana_hover.jpg",
    "calque_folhas": "images/projects/calque_folhas/calque_folhas_hover.JPG",
    "casa_burro_cabras": "images/projects/casa_burro_cabras/casa_burro_cabras_hover.jpg",
    "chaleira_compostagem": "images/projects/chaleira_compostagem/chaleira_compostagem_hover.jpg",
    "corpos_alameda": "images/projects/corpos_alameda/corpos_alameda_hover.jpeg",
    "ferro_novo": "images/projects/ferro_novo/ferro_novo_hover.jpg",
    "grade_viva": "images/projects/grade_viva/grade_viva_hover.jpg",
    "lixo_lixo": "images/projects/lixo_lixo/lixo_lixo_hover.jpg",
    "ovos": "images/projects/ovos/ovos_hover.jpg",
    "plataforma": "images/projects/plataforma/plataforma_hover.jpg",
    "respiga": "images/projects/respiga/respiga_hover.jpg", 
    "suporte_portatil": "images/projects/suporte_portatil/suporte_portatil_hover.jpg",
    "sol_adormecido": "images/projects/sol_adormecido/sol_adormecido_hover.jpg"
};

$(".projeto_btn.back").click(function(event) {
    var project = event.target.id.replace("_back", "");
    console.log(project);

    let img_holder = $("#"+project+"_img");
    let actual_img = img_holder.attr("src");

    let next_index = project_images[project].indexOf(actual_img);
    if (next_index !== -1) {
        next_index -= 1;
        
        if (next_index < 0) {
            next_index = project_images[project].length - 1;
        }

        console.log(project_images[project][next_index])
        img_holder.attr("src", project_images[project][next_index]);
    }
});

$(".projeto_btn.forward").click(function(event) {
    var project = event.target.id.replace("_forward", "");

    let img_holder = $("#"+project+"_img");
    let actual_img = img_holder.attr("src");

    let next_index = project_images[project].indexOf(actual_img);
    if (next_index !== -1) {
        next_index += 1;
        
        if (next_index >= project_images[project].length) {
            next_index = 0;
        }

        img_holder.attr("src", project_images[project][next_index]);
    }
});

function projects_hover(project) {
    /*
    var img_holder = $("#projects_hover");
    img_holder.attr("src", projects_images_hover[project]);
    img_holder.removeClass("hidden");
    */
    $(".projects_img_holder").css("background-image", "url('"+projects_images_hover[project]+"')");
}

function projects_unhover() {
    /*
    var img_holder = $("#projects_hover");
    img_holder.addClass("hidden");
    */
    $(".projects_img_holder").css("background-image", "url('')");
}