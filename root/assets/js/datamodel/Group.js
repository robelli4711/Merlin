

Group = {

    /**
   * setup Porduct GROUP Combo
   * @param Selection Box 
   * @return none
   */
    get: function (obj) {

        x = this.set();
        x.forEach(function (element) {
            var option = document.createElement('option');
            option.text = element.group;
            option.value = element.id;
            obj.add(option, 0);
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

        var group = [];

        // Haushaltsgeräte
        group.push({
            id: 1,
            group: "Haushaltsgeräte",
        });

        // Avent
        group.push({
            id: 2,
            group: "Avent",
        });

        // Körperpflege
        group.push({
            id: 3,
            group: "Körperpflege",
        });

        // Gesundheit
        group.push({
            id: 4,
            group: "Gesundheit",
        });

        // Referral
        group.push({
            id: 5,
            group: "Weiterleitung",
        });

        // Promotion
        group.push({
            id: 6,
            group: "Promotion",
        });

        // Ersatzteile
        group.push({
            id: 7,
            group: "Ersatzteile",
        });

        // Online Shop
        group.push({
            id: 8,
            group: "Allgemein",
        });

        // Online Shop
        group.push({
            id: 9,
            group: "Online Shop",
        });

        // return alphabetically sorted
        group.sort(function(a,b) {return (a.group > b.group) ? 1 : ((b.group > a.group) ? -1 : 0);} );
        return group.reverse();
    }
}