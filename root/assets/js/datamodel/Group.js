

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

        return group.sort();
    }
}