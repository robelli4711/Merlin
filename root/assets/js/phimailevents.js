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


  makeTroubleshooting: function (arr) {
   
    arr.forEach(function (element) {

      var res = Issue.getTroubleshooting(element);
      
      var line = '<div class="col-md-4"><div id="div1" class="checkbox"><input id="id' + res.troubleshooting +
        '" type="checkbox" onclick=\'phimail.makeOutput("' + res.id + '");\'><label id="label1" for="id' + res.id + '">' + res.troubleshooting +
        '</label></div></div>';

      $(_troubleshooting).append(line);
      output += Issue.getTroubleshooting(element).troubleshooting + "\n";     // TODO: should be removed after testing
    });

    // additional custom comments
    output += document.getElementById("_customTroubleshooting").value + '\n';
  },


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

    output += "\nIssue:\n"
    phimail.makeIssue(quest);

    // make TROUBLESHOOTING
    output += "\nTroubleshooting:\n"
    phimail.makeTroubleshooting(quest);
    

    // finally push it out
    document.getElementById("#preview").value = output;

  }
}