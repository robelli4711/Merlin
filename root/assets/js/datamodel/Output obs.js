Output = {

    /**
     * setup Porduct GROUP Combo
     * @param none 
     * @return String - generated Output
     */
    get: function () {

        var output;
        x = this.set();

        x.forEach(function (element) {
            output += element.output;
        });

        return output;
    },

    /**
     * Get content Data
     * @param none 
     * @return Object Array with Output Data
     */
    set: function (tag, value) {

        var output = [];

        output.push({
            id: tag,
            output: value,
        });

        return output;
    }
}