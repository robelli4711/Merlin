var output = "";

phiwiz = {

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
      output += "\n- The problem is solved :-)";
    }

    if (document.getElementById("s_2").checked) {
      output += "\n- A Repair Order is created, the cusotmer is informed";
    }

    if (document.getElementById("s_3").checked) {
      output += "\n- The Spare Part is available in the Online Shop";
    }

    if (document.getElementById("s_4").checked) {
      output += "\n- The customer will get a EMail with the necessary instructions";
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
    this.makeOutput("");
  },

  /**
   * Group Checkbox was clicked
   * @param 
   * @return 
   */
  onClickGroup: function () {

    var e = document.getElementById("#group"); // selected element in group box
    Product.get(document.getElementById("_product"), e.options[e.selectedIndex].value);
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

    output += "Retailer:\n" + document.getElementById("#retailer").value + "\n";
  },


  /**
   * Create a IssueList
   * @param Array - List with all Issues for this Product
   * @return 
   */
  makeIssue: function (id) {

    id.forEach(function (element) {

      output += "- " + Issue.getQuestion(element);
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
        '" type="checkbox" onclick=\'phiwiz.selectTroubleshooting();\'><label id="label2" for="idt' + res.id + '">' + res.troubleshooting +
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
      output += Issue.getTroubleshooting(element).troubleshooting + " = OK\n"; // TODO: should be removed after testing
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

    phiwiz.makeIssue(quest);

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
    phiwiz.makeTroubleshooting(quest);

    // Solution
    output += "\nSolution:"

    // finally push it out
    document.getElementById("#preview").value = output;
  }
}