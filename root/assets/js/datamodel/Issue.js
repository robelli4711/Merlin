

Issue = {

    /**
   * setup Issue Combo
   * @param Selection Box 
   * @return none
   */
    get: function () {

        return this.set();
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
        });

        issue.push({
            id: 2,
            issue: "has Fluid?",
            solution: "Fluid was missing",
        });

        issue.push({
            id: 3,
            issue: "is Cleaned?",
            solution: "was not cleaned",
        });

        issue.push({
            id: 4,
            issue: "is Closed?",
            solution: "was open",
        });

        issue.push({
            id: 5,
            issue: "is Descaled",
            solution: "wasn't descaled",
        });

        issue.push({
            id: 6,
            issue: "Sound",
            solution: "Sound",
        });

        issue.push({
            id: 7,
            issue: "Vibration",
            solution: "Vibration",
        });

        issue.push({
            id: 8,
            issue: "Dead",
            solution: "Device is dead",
        });

        issue.push({
            id: 9,
            issue: "Broken",
            solution: "Device is broken",
        });

        issue.push({
            id: 10,
            issue: "Spare Parts",
            solution: "ordered Spart Part",
        });

        issue.push({
            id: 11,
            issue: "Repair",
            solution: "sent to Service center",
        });

        issue.push({
            id: 12,
            issue: "not Connected",
            solution: "now it's connected",
        });

        return issue;        
    }
}