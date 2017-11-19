var output = "";
var isClicked = false;

phimail = {

  onInit: function () {

    Group.get(document.getElementById("#group"));
    this.makeOutput("");
  },

  onClickGroup: function () {

    var e = document.getElementById("#group"); // selected element in group box
    Product.get(document.getElementById("_product"), e.options[e.selectedIndex].value);
  },

  onClickProduct: function () {

    // remove the old selection
    $(issues).children().remove();
    $(_troubleshooting).children().remove();

    var e = document.getElementById("_product"); // selected element in product box
    ProductToIssue.get(document.getElementById("_product"), document.getElementById("issues"), e.options[e.selectedIndex].value);
  },

  leaveRetailer: function () {

    output += "Retailer:\n" + document.getElementById("#retailer").value + "\n";
  },


  makeIssue: function (id) {

    id.forEach(function (element) {

      output += Issue.getQuestion(element) + "\n";
    });

    // additional custom comments
    output += document.getElementById("_customIssue").value + '\n';
  },


  makeTroubleshooting: function (arr) {

    $(_troubleshooting).children().remove(); // remove the old selection

    arr.forEach(function (element) {

      var res = Issue.getTroubleshooting(element);

      var line = '<div class="col-md-4"><div id="div2" class="checkbox"><input id="idt' + res.id +
        '" type="checkbox" onclick=\'phimail.selectTroubleshooting();\'><label id="label2" for="idt' + res.id + '">' + res.troubleshooting +
        '</label></div></div>';

      $(_troubleshooting).append(line);
    });

    // additional custom comments
    output += document.getElementById("_customTroubleshooting").value + '\n';
  },


  //-----------------------
  // select troubleshooting
  selectTroubleshooting: function () {

    isClicked = true;
    var arr = [];

    // remove the last ts steps
    var TextSearch = document.getElementById("#preview").value;
    var index = TextSearch.indexOf('Troubleshooting:');
    output = TextSearch.substring(0, index + 20);

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


  //------------
  // make OUTPUT
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

    phimail.makeIssue(quest);

    // make TROUBLESHOOTING
    jQuery(_troubleshooting).find('*').each(function (index, value) {

      if (value.className === 'checkbox') {
        if (value.children[0].checked) {
          quest.push(value.children[0].id.substring(2));

          console.log(value.children[0].checked);
        }
      }
    });

    output += "\nTroubleshooting:\n"
    // if (!isClicked) {
    phimail.makeTroubleshooting(quest);
    isClicked = false;
    // }

    // finally push it out
    document.getElementById("#preview").value = output;
  }
}