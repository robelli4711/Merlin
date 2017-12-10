/**
 * Main class and derrived functionalities for Solution handling
 *
 * @summary Solution Class 
 *
 * @link   URL
 * @file   merlin.js
 * @author Robert Niederer
 * @since  10/12/2017
 * @revision 1.0
 */

Solution = {

    /**
     * setup Solutions
     * @param Selection Box 
     * @return none
     */
    get: function(obj) {

        x = this.set();
        x.forEach(function(element) {
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
    set: function() {
        var quest = []; // lists all selected issue Text

        if (document.getElementById("s_1").checked) {
            quest.push("- Das Problem wurde gelöst");
        }
        if (document.getElementById("s_2").checked) {
            quest.push("- Ein Reparaturauftrag wurde aufgesetzt, der Kunde ist informiert");
        }
        if (document.getElementById("s_3").checked) {
            quest.push("- Das Ersatzteil ist im Online Shop verfügbar");
        }
        if (document.getElementById("s_4").checked) {
            quest.push("- Der Kunde bekommt eine EMail mit den notwendigen Instruktionen");
        }
        if (document.getElementById("s_5").checked) {
            quest.push("- Der Fall wurde an die Backline eskaliert.");
        }
        if (document.getElementById("s_6").checked) {
            quest.push("- Den Kunden erneut kontaktieren");
        }
        if (document.getElementById("s_7").checked) {
            quest.push("- Der Kunde wird sich noch einmal melden");
        }
        if (document.getElementById("s_8").checked) {
            quest.push("- Gutschein ausgestellt");
        }

        return quest;
    }
}