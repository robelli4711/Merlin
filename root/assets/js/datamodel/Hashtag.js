

Hashtag = {

   /**
   * setup Porduct GROUP Combo
   * @param Selection Box 
   * @return none
   */
    get: function (obj) {

        x = this.set();
        x.forEach(function (element) {
            var option = document.createElement('option');
            option.text = element.hashtag;
            option.value = element.hashtag;
            obj.add(option, 0);
        });
    },


   /**
   * Get Hashtag Description
   * @param String - Hashtag
   * @return STRING - Hastag Description
   */
    getDescription: function (obj) {

       if(obj === " ") { return; }

       var x = this.set();

       var result = $.grep(x, function (e) {
           return e.hashtag == obj;
       });

       try {
           return result[0].description;            
       } catch (error) {
           return "";
       }
    },

  
    /**
   * Get content Data
   * @param none 
   * @return Object Array with Group Data
   */
    set: function () {

        var hashtag = [];

        hashtag.push({
            id: 1,
            hashtag: " ",
            description: ""
        });

        hashtag.push({
            id: 2,
            hashtag: "ohne Kaufbeleg",
            description: "Auftrag als Serviceleistung ohne Kaufbeleg mit Prüfung der Seriennummer"
        });

        hashtag.push({
            id: 3,
            hashtag: "ReRep",
            description: "Das Gerät wird wiederholt kostenfrei repariert / ausgetauscht"
        });

        hashtag.push({
            id: 5,
            hashtag: "Trapo",
            description: "Aufgrund eines Transportschadens erneute Einsendung"
        });

        hashtag.push({
            id: 6,
            hashtag: "Speedy",
            description: "Kunde beauftragt den Express-Service für 35 EUR  "
        });


        return hashtag.sort();
    }
}