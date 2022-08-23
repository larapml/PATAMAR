var store = {
    "banco": {
        "image": "images/inventory/banco.jpg",
        "title": "Banco",
        "price": "111€",
        "description": "Banco de madeira",
    },
    "banco1": {
        "image": "images/inventory/banco.jpg",
        "title": "Banco",
        "price": "111€",
        "description": "Banco de madeira",
    },
    "banco2": {
        "image": "images/inventory/banco.jpg",
        "title": "Banco",
        "price": "111€",
        "description": "Banco de madeira",
    },
    "banco3": {
        "image": "images/inventory/banco.jpg",
        "title": "Banco",
        "price": "111€",
        "description": "Banco de madeira",
    },
    "banco4": {
        "image": "images/inventory/banco.jpg",
        "title": "Banco",
        "price": "111€",
        "description": "Banco de madeira",
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
        item_div.append($("<p class='no-space' style='text-align: left; margin-bottom: 0px;'>").text(store[item].description));
        item_div.append($("<p class='no-space' style='text-align: left; margin-bottom: 0px;'>").text(store[item].price));
        store_div.append(item_div);
    }
}