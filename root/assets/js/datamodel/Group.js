

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

        // BODY CARE
        group.push({
            id: 1,
            group: "Body Care",
        });

        // HEALTH CARE
        group.push({
            id: 2,
            group: "Health Care",
        });

        // GARMIN
        group.push({
            id: 3,
            group: "Garmin",
        });

        // TOOTHBRUSH
        group.push({
            id: 4,
            group: "Toothbrush",
        });

        // SHAVING
        group.push({
            id: 5,
            group: "Shaving",
        });

        // AVENT
        group.push({
            id: 6,
            group: "Avent",
        });

        // COOKING
        group.push({
            id: 7,
            group: "Cooking",
        });

        // BLENDER
        group.push({
            id: 8,
            group: "Blender",
        });

        return group;
    }
}