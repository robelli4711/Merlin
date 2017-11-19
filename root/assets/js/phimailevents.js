var output = "";

phimail = {

  onInit: function () {

    Group.get(document.getElementById("#group"));
    this.makeOutput("");
  },

  onClickGroup: function () {

    var e = document.getElementById("#group"); // selected element in group box
    Product.get(document.getElementById("#product"), e.options[e.selectedIndex].value);
  },

  onClickProduct: function () {

    var e = document.getElementById("#product"); // selected element in product box
    ProductToIssue.get(document.getElementById("#product"), document.getElementById("issues"), e.options[e.selectedIndex].value);
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

  // make RETAILER
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

    output += "\nIssue:\n"
    phimail.makeIssue(quest);

    // make TROUBLESHOOTING
    output += "\nTroubleshooting:\n"


    // finally push it out
    document.getElementById("#preview").value = output;

  }
}