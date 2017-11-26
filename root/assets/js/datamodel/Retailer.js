

Retailer = {

    /**
   * setup Porduct GROUP Combo
   * @param Selection Box 
   * @return none
   */
    get: function (obj) {

        x = this.set();
        x.forEach(function (element) {
            var option = document.createElement('option');
            option.text = element.retailer;
            option.value = element.retailer;
            obj.add(option, 0);
        });
    },

    /**
   * Get content Data
   * @param none 
   * @return Object Array with Group Data
   */
    set: function () {

        var retailer = [];

        retailer.push({
            id: 1,
            retailer: " ",
        });

        retailer.push({
            id: 2,
            retailer: "Media Markt",
        });

        retailer.push({
            id: 3,
            retailer: "Becker",
        });

        retailer.push({
            id: 3,
            retailer: "Saturn",
        });

        retailer.push({
            id: 3,
            retailer: "KMC",
        });

        retailer.push({
            id: 3,
            retailer: "N/A",
        });

        return retailer.sort();
    }
}