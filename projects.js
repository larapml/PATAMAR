var categories = {
    "em_contrucao": ["grade_viva"],
    "urbanismo": ["grade_viva", "respiga"],
    "concurso": ["boussana", "sol_adormecido"],
    "arquitetura": ["boussana", "casa_burro_cabras", "ovos"],
    "instalacao": ["sol_adormecido"],
    "design": ["chaleira_compostagem", "suporte_portatil", "lixo_lixo"],
    "oficina": ["calque_folhas", "plataforma", "ferro_novo"]
}

function filter_projects(category) {
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

var boussana = ["imagens/senegal3.jpg", "imagens/senegal.png", "imagens/senegal1.jpg"];
var calque_folhas = ["imagens/calque.jpg", "imagens/calquedasfolhas.jpg", "imagens/calquedasfolhas2.jpg" ];
var sol_adormecido = ["imagens/soladormecido.jpg", "imagens/soladormecido1.jpg", "imagens/soladormecido2.jpg"];
var ovos = ["imagens/ovos2.jpg", "imagens/ovos.jpg"];

// <BOUSSANA>
$("#ecole_secundaire_boussana_forward").click(function() {
    let img = $("#ecole_secundaire_boussana_img");

    let actual_img = img.attr("src");

    let next_index = boussana.indexOf(actual_img);

    if (next_index !== -1) {
        next_index += 1;

        if (next_index >= boussana.length) {
            next_index = 0;
        }
        
        img.attr("src", boussana[next_index]);
        // document.getElementById("ecole_secundaire_boussana_img").scrollIntoView();
    }
});

$("#ecole_secundaire_boussana_back").click(function() {
    let img = $("#ecole_secundaire_boussana_img");

    let actual_img = img.attr("src");

    let next_index = boussana.indexOf(actual_img);

    if (next_index !== -1) {
        next_index -= 1;
        
        if (next_index < 0) {
            next_index = boussana.length - 1;
        }

        img.attr("src", boussana[next_index]);
        // document.getElementById("ecole_secundaire_boussana_img").scrollIntoView();
    }
});
// </BOUSSANA>