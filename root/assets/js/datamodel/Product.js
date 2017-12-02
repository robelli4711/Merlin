

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
                // set default value
                obj.value = "";                
    },

    /**
   * Get content Data
   * @param none 
   * @return Object Array with Group Data
   */
    set: function () {

        product = [];

        // Group 1
        product.push({
            id: 1,
            id_group: 1,
            product: "Halbautomaten / Vollautomaten",
        });

        product.push({
            id: 2,
            id_group: 1,
            product: "Filterkaffee",
        });

        product.push({
            id: 3,
            id_group: 1,
            product: "Senseo",
        });

        product.push({
            id: 4,
            id_group: 1,
            product: "AirFryer",
        });

        product.push({
            id: 5,
            id_group: 1,
            product: "Mixer / Entsafter",
        });

        product.push({
            id: 6,
            id_group: 1,
            product: "Bodenpflege",
        });

        product.push({
            id: 7,
            id_group: 1,
            product: "Bügeln",
        });

        product.push({
            id: 8,
            id_group: 1,
            product: "Luft und Wasserreinigung",
        });

        // Group 2
        product.push({
            id: 9,
            id_group: 2,
            product: "uGrow App",
        });

        product.push({
            id: 10,
            id_group: 2,
            product: "Milchpumpen",
        });

        product.push({
            id: 11,
            id_group: 2,
            product: "Babyflaschen & Sauger",
        });

        product.push({
            id: 12,
            id_group: 2,
            product: "Schnuller",
        });

        product.push({
            id: 13,
            id_group: 2,
            product: "Flaschenwärmer und Sterilisatoren",
        });

        product.push({
            id: 14,
            id_group: 2,
            product: "Nahrungszubereitung",
        });

        product.push({
            id: 15,
            id_group: 2,
            product: "Babyphones",
        });

        // Group 3
        product.push({
            id: 16,
            id_group: 3,
            product: "Rasierer & Haarschneider",
        });

        product.push({
            id: 17,
            id_group: 3,
            product: "Hautpflege",
        });

        product.push({
            id: 18,
            id_group: 3,
            product: "Haarentfernung",
        });

        product.push({
            id: 19,
            id_group: 3,
            product: "Haarpflege",
        });

        product.push({
            id: 20,
            id_group: 3,
            product: "Sonicare",
        });

        product.push({
            id: 21,
            id_group: 3,
            product: "Bürstenköpfe",
        });

        product.push({
            id: 22,
            id_group: 3,
            product: "Airfloss",
        });

        // Group 4
        product.push({
            id: 23,
            id_group: 4,
            product: "Schlaftherapie",
        });

        product.push({
            id: 24,
            id_group: 4,
            product: "Infrarot",
        });

        product.push({
            id: 25,
            id_group: 4,
            product: "Blutdruckmessung",
        });

        // Group 5
        product.push({
            id: 26,
            id_group: 5,
            product: "Ton und Bild",
        });

        product.push({
            id: 27,
            id_group: 5,
            product: "PC / Tablets /Telefone",
        });

        product.push({
            id: 28,
            id_group: 5,
            product: "Beleuchtung",
        });

        product.push({
            id: 29,
            id_group: 5,
            product: "Automobil",
        });

        product.push({
            id: 30,
            id_group: 5,
            product: "Andere",
        });

        // Group 6
        product.push({
            id: 31,
            id_group: 6,
            product: "Alle",
        });

        // Group 7
        product.push({
            id: 32,
            id_group: 7,
            product: "Alle",
        });

        // Group 9
        product.push({
            id: 34,
            id_group: 9,
            product: "Online Shop",
        });
        

        // return alphabetically sorted
        product.sort(function(a,b) {return (a.product > b.product) ? 1 : ((b.product > a.product) ? -1 : 0);} );
        return product.reverse();
    },
}


