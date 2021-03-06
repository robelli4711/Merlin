/**
 * Main class and derrived functionalities for ProductToIssue handling
 *
 * @summary ProductToIssue Class 
 *
 * @link   URL
 * @file   merlin.js
 * @author Robert Niederer
 * @since  10/12/2017
 * @revision 1.0
 */

ProductToIssue = {

    /**
     * setup Issue Combo
     * @param Selection Box 
     * @return Array
     */
    get: function(obj, target, index) {

        var x = this.set();
        var i = 0;
        var issue = Issue.get();

        x.forEach(function(element) {

            if (element.pid === parseInt(index)) {

                var result = $.grep(issue, function(e) {
                    return e.id == element.iid;
                });

                var line = '<div class="col-md-4"><div id="div1" class="checkbox"><input id="id' + element.iid +
                    '" type="checkbox" onclick=\'merlin.onClickIssue("' + element.iid + '");\' style="height: 20px;width: 20px;"><label id="label1" for="id' + element.iid + '" style="vertical-align: sub;">' + result[0].issue +
                    '</label></div></div>';

                $(target).append(line);

                i++;
            }
        });
    },

    /**
     * Get content Data
     * @param none 
     * @return Object Array with Comparing Data
     */
    set: function() {

        issue = [];

        // ESPRESSO FULL HALF/AUTOMATIC
        issue.push({ pid: 1, iid: 1 });
        issue.push({ pid: 1, iid: 2 });
        issue.push({ pid: 1, iid: 3 });
        issue.push({ pid: 1, iid: 4 });
        issue.push({ pid: 1, iid: 5 });
        issue.push({ pid: 1, iid: 6 });
        issue.push({ pid: 1, iid: 7 });
        issue.push({ pid: 1, iid: 8 });
        issue.push({ pid: 1, iid: 9 });
        issue.push({ pid: 1, iid: 10 });
        issue.push({ pid: 1, iid: 11 });
        issue.push({ pid: 1, iid: 12 });
        issue.push({ pid: 1, iid: 13 });
        issue.push({ pid: 1, iid: 14 });
        issue.push({ pid: 1, iid: 15 });
        issue.push({ pid: 1, iid: 16 });
        issue.push({ pid: 1, iid: 17 });
        issue.push({ pid: 1, iid: 1017 });

        // FILTERKAFFEE
        issue.push({ pid: 2, iid: 18 });
        issue.push({ pid: 2, iid: 19 });
        issue.push({ pid: 2, iid: 20 });
        issue.push({ pid: 2, iid: 21 });
        issue.push({ pid: 2, iid: 22 });
        issue.push({ pid: 2, iid: 2022 });
        issue.push({ pid: 2, iid: 2023 });

        // SENSEO
        issue.push({ pid: 3, iid: 23 });
        issue.push({ pid: 3, iid: 3023 });
        issue.push({ pid: 3, iid: 24 });
        issue.push({ pid: 3, iid: 25 });
        issue.push({ pid: 3, iid: 26 });
        issue.push({ pid: 3, iid: 27 });
        issue.push({ pid: 3, iid: 28 });
        issue.push({ pid: 3, iid: 29 });
        issue.push({ pid: 3, iid: 30 });
        issue.push({ pid: 3, iid: 31 });

        // AIR FRYER
        issue.push({ pid: 4, iid: 32 });
        issue.push({ pid: 4, iid: 33 });
        issue.push({ pid: 4, iid: 34 });
        issue.push({ pid: 4, iid: 35 });
        issue.push({ pid: 4, iid: 4036 });

        // Mixer
        issue.push({ pid: 5, iid: 5001 });

        // FLOOR CARE
        issue.push({ pid: 6, iid: 36 });
        issue.push({ pid: 6, iid: 37 });
        issue.push({ pid: 6, iid: 38 });
        issue.push({ pid: 6, iid: 39 });
        issue.push({ pid: 6, iid: 40 });
        issue.push({ pid: 6, iid: 6001 });

        // IRONING
        issue.push({ pid: 7, iid: 41 });
        issue.push({ pid: 7, iid: 42 });
        issue.push({ pid: 7, iid: 43 });
        issue.push({ pid: 7, iid: 44 });
        issue.push({ pid: 7, iid: 45 });
        issue.push({ pid: 7, iid: 7001 });
        issue.push({ pid: 7, iid: 7002 });

        // AIR CLEANING
        issue.push({ pid: 8, iid: 46 });
        issue.push({ pid: 8, iid: 47 });
        issue.push({ pid: 8, iid: 48 });
        issue.push({ pid: 8, iid: 49 });
        issue.push({ pid: 8, iid: 50 });
        issue.push({ pid: 8, iid: 8001 });
        issue.push({ pid: 8, iid: 8002 });

        // UGROW APP
        issue.push({ pid: 9, iid: 51 });
        issue.push({ pid: 9, iid: 52 });
        issue.push({ pid: 9, iid: 53 });
        issue.push({ pid: 9, iid: 54 });

        // Avent
        issue.push({ pid: 10, iid: 10001 });
        issue.push({ pid: 11, iid: 11001 });
        issue.push({ pid: 12, iid: 12001 });
        issue.push({ pid: 14, iid: 14001 });
        issue.push({ pid: 14, iid: 900000 });
        issue.push({ pid: 14, iid: 900001 });
        issue.push({ pid: 14, iid: 900002 });
        issue.push({ pid: 15, iid: 15001 });
        issue.push({ pid: 15, iid: 15002 });
        issue.push({ pid: 15, iid: 15003 });
        issue.push({ pid: 15, iid: 900000 });
        issue.push({ pid: 15, iid: 900001 });
        issue.push({ pid: 15, iid: 900002 });

        // SPARE PARTS
        issue.push({ pid: 32, iid: 900000 });

        // ALL
        issue.push({ pid: 31, iid: 61 });

        // SHAVER
        issue.push({ pid: 16, iid: 62 });
        issue.push({ pid: 16, iid: 63 });
        issue.push({ pid: 16, iid: 64 });
        issue.push({ pid: 16, iid: 65 });
        issue.push({ pid: 16, iid: 16001 });
        issue.push({ pid: 17, iid: 17001 });

        // Hair Removal
        issue.push({ pid: 18, iid: 18001 });
        issue.push({ pid: 18, iid: 999999 });

        // Hair Care
        issue.push({ pid: 19, iid: 19001 });

        // SONICARE
        issue.push({ pid: 20, iid: 68 });
        issue.push({ pid: 20, iid: 69 });
        issue.push({ pid: 20, iid: 20001 });
        issue.push({ pid: 20, iid: 900001 });
        issue.push({ pid: 20, iid: 900002 });

        // SONICARE Heads
        issue.push({ pid: 21, iid: 69 });
        issue.push({ pid: 21, iid: 71 });
        issue.push({ pid: 21, iid: 66 });
        issue.push({ pid: 21, iid: 67 });

        // Allgemein
        issue.push({ pid: 33, iid: 3300 });

        // Online Shop
        issue.push({ pid: 34, iid: 9001 });
        issue.push({ pid: 34, iid: 9002 });
        issue.push({ pid: 34, iid: 9003 });
        issue.push({ pid: 34, iid: 9004 });
        issue.push({ pid: 34, iid: 9005 });
        issue.push({ pid: 34, iid: 9006 });
        issue.push({ pid: 34, iid: 9007 });
        issue.push({ pid: 34, iid: 9008 });

        return issue;
    }
}