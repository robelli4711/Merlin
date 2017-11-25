var output = "";

merlin = {

  /**
   * one of the Solution Checkboxes is clicked
   * @param 
   * @return 
   */
  onSelectSolution: function () {

    // clear the previous solution text
    var TextSearch = document.getElementById("#preview").value;
    var index = TextSearch.indexOf('Solution:');

    if (index >= 0) { // prevent to clear the text when solution is not written
      output = TextSearch.substring(0, index);
    }

    // select the text
    output += "Solution:";

    if (document.getElementById("s_1").checked) {
      output += "\n- Das Problem wurde gelöst";
    }

    if (document.getElementById("s_2").checked) {
      output += "\n- Ein Reparaturauftrag wurde aufgesetzt, der Kunde ist informiert";
    }

    if (document.getElementById("s_3").checked) {
      output += "\n- Das ERsatzteil ist im Online Shop verfügbar";
    }

    if (document.getElementById("s_4").checked) {
      output += "\n- Der Kunde bekommt eine EMail mit den notwendigen Instruktionen";
    }

    if (document.getElementById("s_5").checked) {
      output += "\n- Der Fall wurde an die Backline eskaliert.";
    }

    output += "\n- " + document.getElementById("_customSolution").value;

    // put it out
    document.getElementById("#preview").value = output;
  },

  /**
   * Initial call from the trigger
   * @param 
   * @return 
   */
  onInit: function () {

    Group.get(document.getElementById("#group"));
    Hashtag.get(document.getElementById("_hashtag"));
    Retailer.get(document.getElementById("_retailerDD"));
    this.makeOutput("");
  },

  /**
   * Hashtag Checkbox was clicked
   * @param 
   * @return 
   */
  onClickHashtag: function () {
    
       output = document.getElementById("_retailerDD").value;
       document.getElementById("#preview").value = output;
   },

  /**
   * Retailer Checkbox was clicked
   * @param 
   * @return 
   */
  onClickRetailer: function () {
       output += "Retailer: " + document.getElementById("_retailerDD").value + "\n";
       document.getElementById("_customretailer").value = document.getElementById("_retailerDD").value;
       document.getElementById("#preview").value = output;
  },


  /**
   * Group Checkbox was clicked
   * @param 
   * @return 
   */
  onClickGroup: function () {

    var e = document.getElementById("#group"); // selected element in group box
    Product.get(document.getElementById("_product"), e.options[e.selectedIndex].value);

    if(document.getElementById('_customretailer').value === "") {
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
   * Input for the Retailer lost the cursor focus
   * @param 
   * @return 
   */
  leaveRetailer: function () {

    output += "Retailer:\n" + document.getElementById("_customretailer").value + "\n";
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
        '" type="checkbox" onclick=\'merlin.selectTroubleshooting();\'><label id="label2" for="idt' + res.id + '">' + res.troubleshooting +
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
    var TextSearch = document.getElementById("#preview").value;
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
    document.getElementById("#preview").value = output;
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

    output += "\nTroubleshooting:"
    merlin.makeTroubleshooting(quest);

    // Solution
    output += "\nSolution:"

    // finally push it out
    document.getElementById("#preview").value = output;
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