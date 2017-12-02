

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

        // set default value
        obj.value = "N/A";
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
            retailer: "N/A",
        });

        retailer.push({
            id: 2,
            retailer: "Media Markt",
        });

        retailer.push({
            id: 3,
            retailer: "Saturn",
        });

        retailer.push({
            id: 5,
            retailer: "Amazon",
        });

        retailer.push({
            id: 6,
            retailer: "Expert",
        });

        retailer.push({
            id: 7,
            retailer: "Philips Online Store",
        });

        retailer.push({
            id: 8,
            retailer: "Zahnarztpraxis",
        });


        // return alphabetically sorted
        retailer.sort(function(a,b) {return (a.retailer > b.retailer) ? 1 : ((b.retailer > a.retailer) ? -1 : 0);} );
        return retailer.reverse();
    }
}