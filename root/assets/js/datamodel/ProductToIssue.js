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
                    '" type="checkbox" onclick=\'phiwiz.makeOutput("' + element.iid + '");\'><label id="label1" for="id' + element.iid + '">' + result[0].issue +
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

        issue.push({
            pid: 1,
            iid: 1
        });
        issue.push({
            pid: 1,
            iid: 6
        });
        issue.push({
            pid: 1,
            iid: 7
        });
        issue.push({
            pid: 1,
            iid: 8
        });
        issue.push({
            pid: 2,
            iid: 1
        });
        issue.push({
            pid: 2,
            iid: 3
        });
        issue.push({
            pid: 2,
            iid: 6
        });
        issue.push({
            pid: 2,
            iid: 7
        });
        issue.push({
            pid: 2,
            iid: 8
        });
        issue.push({
            pid: 3,
            iid: 1
        });
        issue.push({
            pid: 3,
            iid: 4
        });
        issue.push({
            pid: 3,
            iid: 8
        });
        issue.push({
            pid: 3,
            iid: 3
        });
        issue.push({
            pid: 4,
            iid: 1
        });
        issue.push({
            pid: 4,
            iid: 2
        });
        issue.push({
            pid: 4,
            iid: 3
        });
        issue.push({
            pid: 4,
            iid: 4
        });
        issue.push({
            pid: 4,
            iid: 7
        });
        issue.push({
            pid: 4,
            iid: 8
        });
        issue.push({
            pid: 5,
            iid: 1
        });
        issue.push({
            pid: 5,
            iid: 3
        });
        issue.push({
            pid: 5,
            iid: 4
        });
        issue.push({
            pid: 5,
            iid: 6
        });
        issue.push({
            pid: 5,
            iid: 8
        });
        issue.push({
            pid: 6,
            iid: 3
        });
        issue.push({
            pid: 6,
            iid: 9
        });
        issue.push({
            pid: 7,
            iid: 3
        });
        issue.push({
            pid: 7,
            iid: 9
        });
        issue.push({
            pid: 7,
            iid: 10
        });
        issue.push({
            pid: 8,
            iid: 1
        });
        issue.push({
            pid: 8,
            iid: 8
        });
        issue.push({
            pid: 9,
            iid: 1
        });
        issue.push({
            pid: 9,
            iid: 1
        });

        return issue;
    }
}