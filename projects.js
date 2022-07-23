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