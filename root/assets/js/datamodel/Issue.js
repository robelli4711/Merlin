Issue = {

    /**
     * setup Issue Combo
     * @param Selection Box 
     * @return none
     */
    get: function () {

        return this.set();
    },

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
     * Get content Data
     * @param none 
     * @return Object Array with Group Data
     */
    set: function () {

        issue = [];

        issue.push({
            id: 1,
            issue: "has Power?",
            solution: "Power was missing",
            question: "The Device is not starting"
        });

        issue.push({
            id: 2,
            issue: "has Fluid?",
            solution: "Fluid was missing",
            question: "No Resu;t after starting"
        });

        issue.push({
            id: 3,
            issue: "is Cleaned?",
            solution: "was not cleaned",
            question: "The device stocks"
        });

        issue.push({
            id: 4,
            issue: "is Closed?",
            solution: "was open",
            question: "The device is not working"
        });

        issue.push({
            id: 5,
            issue: "is Descaled",
            solution: "wasn't descaled",
            question: "The device is not working"
        });

        issue.push({
            id: 6,
            issue: "Sound",
            solution: "Sound",
            question: "The Device is very noisy"
        });

        issue.push({
            id: 7,
            issue: "Vibration",
            solution: "Vibration",
            question: "The Device vibrates too much"
        });

        issue.push({
            id: 8,
            issue: "Dead",
            solution: "Device is dead",
            question: "The device is not working"
        });

        issue.push({
            id: 9,
            issue: "Broken",
            solution: "Device is broken",
            question: "The Device is damaged"
        });

        issue.push({
            id: 10,
            issue: "Spare Parts",
            solution: "ordered Spart Part",
            question: "Where can I get Spare Parts"
        });

        issue.push({
            id: 11,
            issue: "Repair",
            solution: "sent to Service center",
            question: "How to send in to Repair?"
        });

        issue.push({
            id: 12,
            issue: "not Connected",
            solution: "now it's connected",
            question: "The device is not connecting"
        });

        return issue;
    }
}