Issue = {

    /**
     * setup Issue Combo
     * @param 
     * @return Array - Alle Products Datas
     */
    get: function () {

        return this.set();
    },


    /**
     * get question from issue
     * @param int - product id
     * @return String - the question
     */
    getQuestion: function (id) {
        var x = this.set();

        var result = $.grep(x, function (e) {
            return e.id == id;
        });

        try {
            return result[0].question;            
        } catch (error) {
            return "";
        }
    },


    /**
     *  get troubleshooting from issue
     * @param int - product id
     * @return String - the troubleshooting
     */
    getTroubleshooting: function (id) {
        var x = this.set();

        var result = $.grep(x, function (e) {
            return e.id == id;
        });

        try {
            return result[0];            
        } catch (error) {
            return "";
        }
    },

    /**
     * Get content Data
     * @param none 
     * @return Object Array with Group Data
     */
    set: function () {

        issue = [];

        issue.push({
            id: 1,
            issue: "Power",
            solution: "Power was missing",
            question: "The Device is not starting",
            troubleshooting: "Is the Device on power?"
        });

        issue.push({
            id: 2,
            issue: "Contains",
            solution: "Fluid was missing",
            question: "No Result after starting",
            troubleshooting: "Has the device the needed Fluids?"
        });

        issue.push({
            id: 3,
            issue: "Maintanance",
            solution: "was not cleaned",
            question: "The device stocks",
            troubleshooting: "Was the device cleaned before?"
        });

        issue.push({
            id: 4,
            issue: "Power but not working",
            solution: "was open",
            question: "The device is not working",
            troubleshooting: "Is the Lid closed?"
        });

        issue.push({
            id: 5,
            issue: "Performance",
            solution: "wasn't descaled",
            question: "The device is not working",
            troubleshooting: "Descaled recently?"
        });

        issue.push({
            id: 6,
            issue: "Sound",
            solution: "Sound",
            question: "The Device is very noisy",
            troubleshooting: "Change the Heads"
        });

        issue.push({
            id: 7,
            issue: "Vibration",
            solution: "Vibration",
            question: "The Device vibrates too much",
            troubleshooting: "Change the Heads"
        });

        issue.push({
            id: 8,
            issue: "Dead",
            solution: "Device is dead",
            question: "The device is not working",
            troubleshooting: "Is the the device fullly loaded"
        });

        issue.push({
            id: 9,
            issue: "Broken",
            solution: "Device is broken",
            question: "The Device is damaged",
            troubleshooting: "N/A"
        });

        issue.push({
            id: 10,
            issue: "Spare Parts",
            solution: "ordered Spart Part",
            question: "Where can I get Spare Parts",
            troubleshooting: "Check OLS and SC"
        });

        issue.push({
            id: 11,
            issue: "Repair",
            solution: "sent to Service center",
            question: "How to send in to Repair?",
            troubleshooting: "Eligable to send in?"
        });

        issue.push({
            id: 12,
            issue: "not Connected",
            solution: "now it's connected",
            question: "The device is not connecting",
            troubleshooting: "Bluetooth on"
        });

        return issue;
    }
}