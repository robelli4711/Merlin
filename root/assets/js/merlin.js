var output = "";

merlin = {

  createOutput: function () {

    output = ""

    // hastag
    try {
      output = '#' + JSON.parse(localStorage.getItem("hashtag")) + '\n';

      if (JSON.parse(localStorage.getItem("hashtag")) === ' ') {
        output = JSON.parse(localStorage.getItem("hashtag")) + '\n';
      } else {
        output = '#' + JSON.parse(localStorage.getItem("hashtag")) + '\n';
      }
    } catch (error) {}

    // retailer (!!!is combined with _customretailer)
    try {
      output += 'Retailer: ' + JSON.parse(localStorage.getItem("retailer")) + '\n';
    } catch (error) {
      output += 'Retailer: N/A\n';
    }

    // issues
    output += "\nIssue: "
    var e = document.getElementById("_product");
    var prod;
    try {
      prod = e.options[e.selectedIndex].innerHTML;
      output += e.options[e.selectedIndex].innerHTML + "\n";
    } catch (error) {

      prod = "";
    }

    try {
      var id = JSON.parse(localStorage.getItem("issues"))
      id.forEach(function (element) {
        output += "- " + element + '\n';
      });
    } catch (error) {}

    if(document.getElementById('_customIssue').value) {
      output += document.getElementById('_customIssue').value + '\n';
    }

    // troubleshooting
    output += "\n\nTroubleshooting:\n"

    try {
      var id = JSON.parse(localStorage.getItem("troubleshooting"))
      id.forEach(function (element) {
        output += "- " + element + '\n';
      });
    } catch (error) {}

    if(document.getElementById('_customTroubleshooting').value) {
      output += document.getElementById('_customTroubleshooting').value + '\n';
    }

    // Solution
    output += "\nSolution:";
    try {
      var id = JSON.parse(localStorage.getItem("solution"))
      id.forEach(function (element) {
        output += element + '\n';
      });
    } catch (error) {}

    if(document.getElementById('_customSolution').value) {
      output += document.getElementById('_customSolution').value + '\n';
    }
    
    // finally push it out
    document.getElementById("_preview").value = output;
  },



  clear: function () {

    localStorage.setItem("hashtag", "");
    localStorage.setItem("retailer", "N/A");
    localStorage.setItem("issues", "");
    localStorage.setItem("troubleshooting", "");
    localStorage.setItem("solution", "");
  },


  /**
   * Copy Buttonis clicked
   * @param 
   * @return 
   */
  onClickCopy: function () {
    $(_preview).select();
    document.execCommand('copy');
    merlin.showNotification("The RITS is copied.\nPaste it in Salesforce (Ctrl + v)", "top", "center", "success");
  },


  /**
   * one of the Solution Checkboxes is clicked
   * @param 
   * @return 
   */
  onSelectSolution: function () {

    var quest = []; // lists all selected issue Text

    if (document.getElementById("s_1").checked) {
      quest.push("\n- Das Problem wurde geloest");
    }
    if (document.getElementById("s_2").checked) {
      quest.push("\n- Ein Reparaturauftrag wurde aufgesetzt, der Kunde ist informiert");
    }
    if (document.getElementById("s_3").checked) {
      quest.push("\n- Das Ersatzteil ist im Online Shop verfügbar");
    }
    if (document.getElementById("s_4").checked) {
      quest.push("\n- Der Kunde bekommt eine EMail mit den notwendigen Instruktionen");
    }
    if (document.getElementById("s_5").checked) {
      quest.push("\n- Der Fall wurde an die Backline eskaliert.");
    }

    localStorage.setItem("solution", JSON.stringify(quest));
    this.createOutput();
  },

  /**
   * Initial call from the trigger
   * @param 
   * @return 
   */
  onInit: function () {

    this.clear();

    Group.get(document.getElementById("_group"));
    Hashtag.get(document.getElementById("_hashtag"));
    Retailer.get(document.getElementById("_retailerDD"));
    this.createOutput();
  },

  /**
   * Hashtag Checkbox was clicked
   * @param 
   * @return 
   */
  onClickHashtag: function () {

    localStorage.setItem("hashtag", JSON.stringify(document.getElementById('_hashtag').value));
    this.createOutput();
  },

  /**
   * Retailer Checkbox was clicked
   * @param 
   * @return 
   */
  onClickRetailer: function () {

    localStorage.setItem("retailer", JSON.stringify(document.getElementById('_retailerDD').value));
    document.getElementById("_customretailer").value = document.getElementById("_retailerDD").value;
    this.createOutput();
  },


  /**
   * Group Checkbox was clicked
   * @param 
   * @return 
   */
  onClickGroup: function () {

    var e = document.getElementById("_group"); // selected element in group box
    Product.get(document.getElementById("_product"), e.options[e.selectedIndex].value);

    // plausi retailer
    if (document.getElementById('_customretailer').value === "") {
      merlin.showNotification("Don't forget the Retailer", "top", "center", "warning");
    }
  },


  /**
   * Product Checkbox was clicked
   * @param 
   * @return 
   */
  onClickProduct: function () {

    // remove the old selection
    $(issues).children().remove();
    $(_troubleshooting).children().remove();

    var e = document.getElementById("_product"); // selected element in product box
    ProductToIssue.get(document.getElementById("_product"), document.getElementById("issues"), e.options[e.selectedIndex].value);
  },

  /**
   * Issue Checkbox was clicked
   * @param 
   * @return 
   */
  onClickIssue: function (id) {

    var quest = []; // lists all selected issue Text
    var ts = []; // lists all selected issue ID's

    jQuery(issues).find('*').each(function (index, value) {

      if (value.className === 'checkbox') {
        if (value.children[0].checked) {
          quest.push(value.children['label1'].innerHTML);
          ts.push(value.children[0].id.substring(2));
        }
      }
    });

    localStorage.setItem("issues", JSON.stringify(quest));
    this.createOutput();

    merlin.makeTroubleshooting(ts); // set the possible ts steps   
  },


  /**
   * Troubleshooting Checkbox was clicked
   * @param 
   * @return 
   */
  onClickTroubleshooting: function (id) {

    var quest = []; // lists all selected TS Text
    var ts = []; // lists all selected TS ID's

    jQuery(_troubleshooting).find('*').each(function (index, value) {

      if (value.className === 'checkbox') {
        if (value.children[0].checked) {
          quest.push(value.children['label2'].innerHTML);
          ts.push(value.children[0].id.substring(2));
        }
      }
    });

    localStorage.setItem("troubleshooting", JSON.stringify(quest));
    this.createOutput();
  },


  /**
   * Input for the Retailer lost the cursor focus
   * @param 
   * @return 
   */
  leaveRetailer: function () {

    // retailer is mandatory
    if (document.getElementById('_customretailer').value === "") {
      merlin.showNotification("Don't forget the Retailer", "top", "center", "warning");
      return;
    }

    localStorage.setItem("retailer", JSON.stringify(document.getElementById('_customretailer').value));
    this.createOutput();
  },


  /**
   * Create a IssueList
   * @param Array - List with all Issues for this Product
   * @return 
   */
  makeIssue: function (id) {

    id.forEach(function (element) {

      output += "- " + Issue.getQuestion(element) + '\n';
    });

    // additional custom comments
    output += document.getElementById("_customIssue").value + '\n';
  },


  /**
   * Create a Troubleshooting Step List
   * @param Array - List with all TS Steps for this Product
   * @return 
   */
  makeTroubleshooting: function (arr) {

    $(_troubleshooting).children().remove(); // remove the old selection

    arr.forEach(function (element) {

      var res = Issue.getTroubleshooting(element);

      var line = '<div class="col-md-4"><div id="div2" class="checkbox"><input id="idt' + res.id +
        '" type="checkbox" onclick=\'merlin.onClickTroubleshooting();\'><label id="label2" for="idt' + res.id + '">' + res.troubleshooting +
        '</label></div></div>';

      $(_troubleshooting).append(line);
    });

    // additional custom comments
    output += document.getElementById("_customTroubleshooting").value + '\n';
  },


  /**
   * Troubleshooting Step is choosen
   * @param 
   * @return 
   */
  selectTroubleshooting: function () {

    isClicked = true;
    var arr = [];

    // remove the last ts steps
    var TextSearch = document.getElementById("_preview").value;
    var index = TextSearch.indexOf('Troubleshooting:');
    output = TextSearch.substring(0, index + 17);

    // go trough the selected checkboxes
    jQuery(_troubleshooting).find('*').each(function (index, value) {

      if (value.className === 'checkbox') {
        if (value.children[0].checked) {
          arr.push(value.children[0].id.substring(3)); // get issue id out from control-id
        }
      }
    });

    // write out the ts steps
    arr.forEach(function (element) {
      output += '-' + Issue.getTroubleshooting(element).troubleshooting + " = OK\n"; // TODO: should be removed after testing
    });

    // additional custom comments
    output += document.getElementById("_customTroubleshooting").value + '\n';
    document.getElementById("_preview").value = output;
  },


  /**
   * Create the Preview Output
   * @param String - Control ID
   * @return 
   */
  makeOutput: function (txt) {

    output = "";
    this.leaveRetailer();

    // make ISSUES
    var i = 0; // counter 
    var quest = []; // lists all selected issues

    jQuery(issues).find('*').each(function (index, value) {

      if (value.className === 'checkbox') {
        if (value.children[0].checked) {
          quest.push(value.children[0].id.substring(2));
        }
      }
    });

    var e = document.getElementById("_product");
    var prod;
    try {

      prod = e.options[e.selectedIndex].innerHTML;
    } catch (error) {

      prod = "";
    }

    output += "\nIssue: "
    output += prod + "\n";

    merlin.makeIssue(quest);

    // make TROUBLESHOOTING
    jQuery(_troubleshooting).find('*').each(function (index, value) {

      if (value.className === 'checkbox') {
        if (value.children[0].checked) {
          quest.push(value.children[0].id.substring(2));

          console.log(value.children[0].checked);
        }
      }
    });

    output += "\n\nTroubleshooting:"
    merlin.makeTroubleshooting(quest);

    // Solution
    output += "\nSolution:"

    // finally push it out
    document.getElementById("_preview").value = output;
  },


  /**
   * Show "not implemented" Notification
   */
  notImplemented: function () {

    merlin.showNotification("Sorry, not implemented yet", 'top', 'center', 'warning', 500);
  },


  /**
   * Show a Notification
   * @param txt - Text to Show 
   * @param from - from where the Notification is showing (top, bottom) 
   * @param align - from where the Notification is aligning (center, left, right) 
   * @param color - Color ('', 'info', 'success', 'warning', 'danger') 
   * @param time - Time to show the notification ('', 'info', 'success', 'warning', 'danger') 
   */
  showNotification: function (txt, from, align, color, time) {

    $.notify({
      icon: "pe-7s-info",
      message: txt
    }, {
      type: color,
      timer: time,
      placement: {
        from: from,
        align: align
      }
    });
  }
}