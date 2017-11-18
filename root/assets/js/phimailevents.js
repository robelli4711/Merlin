var output = "";

phimail = {

  onInit: function () {

    Group.get(document.getElementById("#group"));
  },

  onClickGroup: function () {

    var e = document.getElementById("#group"); // selected element in group box
    Product.get(document.getElementById("#product"), e.options[e.selectedIndex].value);
  },

  onClickProduct: function () {

    var e = document.getElementById("#product"); // selected element in product box
    ProductToIssue.get(document.getElementById("#product"), document.getElementById("#issues"), e.options[e.selectedIndex].value);
  },

  leaveRetailer: function () {

    var output = "Retailer:\n" + document.getElementById("#retailer").value + "\n";
    document.getElementById("#preview").value += output;
  },








  /**
   * Show "not implemented" Notification
   */
  notImplemented: function () {

    this.showNotification("Sorry, not implemented yet", 'top', 'center', 'warning', 500);
  },

  /**
   * Get a Cookie Value
   * @param Cookie Member Name 
   * @return Cookie Member Value
   */
  getCookie: function (cname) {

    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },

  /**
   * Set a Cookie Member Value
   * @param Cookie Member Name 
   * @param Cookie Member Value 
   */
  setCookie: function (cookiename, cookievalue) {

    var d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();

    document.cookie = cookiename + "=" + cookievalue + "; " + expires + "; path=/";
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
  },

  /**
   * Create the Country depending stuff
   */
  makeCountryAddress: function () {

    switch (document.getElementById("#country").value) {
      case "Germany":
        output += "\nSC Schlagmich zTod"
        output += "\nBlumenweg 1010"
        output += "\n47111 Heinrichstein"
        output += "\n\nPhone: +49 123 456 789"
        break;

      case "Austria":
        output += "\nSC AllesGut"
        output += "\nBaumstrasse 1111"
        output += "\n47111 Fritztal"
        output += "\n\nPhone: +43 987 654 321"
        break;

      case "Switzerland":
        output += "\nSC BienATout"
        output += "\nRue de Fleur 1212"
        output += "\n47111 Romont"
        output += "\n\nPhone: +41 987 654 321"
        break;
    }
  },

  /**
   * Create the Technical depending stuff
   */
  makeTechnicalReason: function () {

    switch (document.getElementById("#reason").value) {
      case "Repair":
        output += "\n\nRepair Address";
        this.makeCountryAddress();
        break;

      case "Spare Parts":
        output += "\n\nSpare Parts Address";
        this.makeCountryAddress();
        break;

      case "Exchange":
        output += "\n\nExchange Address";
        this.makeCountryAddress();
        break;
    }
  },

  /**
   * Create the Salutation depending stuff
   */
  makeSalutation: function () {

    var salut = document.getElementById("#salutation");
    var cname = document.getElementById("#customername").value;

    switch (salut.options[salut.selectedIndex].value) {
      case "Herr":
        output = "Guten Tag Herr " + cname + ",\n\n";
        break;

      case "Frau":
        output = "Guten Tag Frau " + cname + ",\n\n";
        break;

      case "Neutral":
        output = "Sehr geehrte Damen und Herren,\n\n";
        break;

      default:
        break;
    }
  },


  /**
   * Create the Empathy depending stuff
   */
  makeEmpathy: function () {

    var empat = document.getElementById("#empathy");

    switch (empat.options[empat.selectedIndex].value) {
      case "Freuen":
        output += "Wir freuen uns sehr, dass Sie unser Produkt so sehr mögen.\n";
        break;

      case "Unannehmlichkeiten":
        output += "Wir bedauern die Unannehmlichkeiten die Sie bezueglich ######## Ihres Philips ##### festgestellt haben sehr.\n";
        break;

      case "Bedauern":
        output += "Wir bedauern Ihren Umut bezüglich ######## sehr.\n";
        break;

      case "Bezug":
        output += "Bezugnehmend auf Ihre EMail vom ##### möchten wir uns wie folgt dazu äussern.\n";
        break;

      default:
        break;
    }
  },

  /**
   * Create the Closing depending stuff
   */
  makeByebye: function () {

    output += "\n\n\nMit freundlichen Grüssen\n";
    output += document.getElementById("#agentname").value;
  },

  makeBody: function () {

    output += "\n\n";
    output += "!!! REMOVE or REPLACE this lines with your text\n";
    output += "############\n";
    output += "############\n";
    output += "############\n";

  },


  /**
   * Create the the Preview Pane depending stuff (Main Entry Point)
   */
  makePreview: function () {

    this.makeSalutation();
    this.makeEmpathy();

    this.makeBody();
    this.makeTechnicalReason();
    this.makeByebye();
    document.getElementById("#preview").value = output;

    // info for missing agents name
    if (document.getElementById("#agentname").value === "") {

      this.showNotification("Fill in your Agents Name. It makes life easier...", 'top', 'center', 'info', 500);
    } else {

      this.setCookie("AgentName", document.getElementById("#agentname").value);
    }
  }
}