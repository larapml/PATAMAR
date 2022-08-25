var store = {
    "ovos": {
        "image": "images/inventory/escultura_ovos.jpg",
        "title": "Uma Escultura para pôr Ovos",
        "description": ["Galinheiro modular com coletor de ovos.", "Acolhe duas a sete galinhas.", "200x60x150cm"],
    },
    "suporte_portatil": {
        "image": "images/inventory/suporte_portatil.jpg",
        "title": "Suporte portátil para um portátil",
        "description": ["Suporte desmontável de 3 peças de mdf 18mm.", "Ajustável a qualquer modelo de computador portátil."],
    },
    "sacos": {
        "image": "images/inventory/banco.jpg",
        "title": "Sacos de folhas",
        "description": ["Sacos em eco print. 3 versões - folhas, ferros enferrujados e eucalipto.", "Vários formatos."],
    },
    "luz": {
        "image": "images/inventory/luz.jpg",
        "title": "Luz",
        "description": ["Candeeiro de uma única verguinha de 9mm.", "Disponível em vários tamanhos."],
    },
    "banco": {
        "image": "images/inventory/banco.jpg",
        "title": "Banco X",
        "description": ["Banco inspirado na Mutchinha de Cabo Verde e no tronco da D. Geninha.", "Disponível em vários tamanhos."],
    },
};

function store_init() {
    let store_div = $("#store");

    for (let item in store) {
        let item_div = $("<div class='col-sm-4 col-12'>");
        item_div.attr("id", item);
        item_div.addClass("store_item");
        item_div.append($("<img>").attr("src", store[item].image));
        item_div.append($("<p class='no-space' style='font-weight: bold; text-align: left; margin-bottom: 0px;'>").text(store[item].title));

        store[item].description.forEach(function(description) {
            item_div.append($("<p class='no-space' style='text-align: left; margin-bottom: 0px;'>").text(description));
        });

        store_div.append(item_div);
    }
}