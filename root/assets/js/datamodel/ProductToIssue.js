ProductToIssue = {

    /**
     * setup Issue Combo
     * @param Selection Box 
     * @return Array
     */
    get: function (obj, target, index) {

        var x = this.set();
        var i = 0;
        var issue = Issue.get();

        x.forEach(function (element) {

            if (element.pid === parseInt(index)) {

                var result = $.grep(issue, function (e) {
                    return e.id == element.iid;
                });

                var line = '<div class="col-md-4"><div id="div1" class="checkbox"><input id="id' + element.iid +
                    '" type="checkbox" onclick=\'merlin.makeOutput("' + element.iid + '");\'><label id="label1" for="id' + element.iid + '">' + result[0].issue +
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
    set: function () {

        issue = [];

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

        issue.push({ pid: 2, iid: 18 });
        issue.push({ pid: 2, iid: 19 });
        issue.push({ pid: 2, iid: 20 });
        issue.push({ pid: 2, iid: 21 });
        issue.push({ pid: 2, iid: 22 });

        issue.push({ pid: 3, iid: 23 });
        issue.push({ pid: 3, iid: 24 });
        issue.push({ pid: 3, iid: 25 });
        issue.push({ pid: 3, iid: 26 });
        issue.push({ pid: 3, iid: 27 });
        issue.push({ pid: 3, iid: 28 });
        issue.push({ pid: 3, iid: 29 });
        issue.push({ pid: 3, iid: 30 });
        issue.push({ pid: 3, iid: 31 });

        issue.push({ pid: 4, iid: 32 });
        issue.push({ pid: 4, iid: 33 });
        issue.push({ pid: 4, iid: 34 });
        issue.push({ pid: 4, iid: 35 });

        return issue;
    }
}

