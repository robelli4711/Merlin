

Product = {

    /**
   * setup Product Combo
   * @param Selection Box 
   * @return none
   */
    get: function (obj, index) {

        $(obj).empty();     // clear the selection box

        x = this.set();
        x.forEach(function (element) {

            if (element.id_group === parseInt(index)) {

                var option = document.createElement('option');
                option.text = element.product;
                option.value = element.id;
                obj.add(option, 0);
            }
        });
    },

    /**
   * Get content Data
   * @param none 
   * @return Object Array with Group Data
   */
    set: function () {

        product = [];

        product.push({
            id: 1,
            id_group: 4,
            product: "Sonicare",
        });

        product.push({
            id: 2,
            id_group: 4,
            product: "AirFloss",
        });

        product.push({
            id: 3,
            id_group: 7,
            product: "AirFryer",
        });

        product.push({
            id: 4,
            id_group: 8,
            product: "Multi Blender",
        });

        product.push({
            id: 5,
            id_group: 5,
            product: "Hair Clipper",
        });

        product.push({
            id: 6,
            id_group: 6,
            product: "Dummy",
        });

        product.push({
            id: 7,
            id_group: 6,
            product: "Milk Bottle",
        });

        product.push({
            id: 8,
            id_group: 6,
            product: "Baby Thermometer",
        });

        product.push({
            id: 9,
            id_group: 2,
            product: "Fitness Watch",
        });

        return product;
    },
}
