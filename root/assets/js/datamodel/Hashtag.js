

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
   * Get content Data
   * @param none 
   * @return Object Array with Group Data
   */
    set: function () {

        var hashtag = [];

        hashtag.push({
            id: 1,
            hashtag: " ",
        });

        hashtag.push({
            id: 2,
            hashtag: "ohne Kaufbeleg",
        });

        hashtag.push({
            id: 3,
            hashtag: "ReRep",
        });

        hashtag.push({
            id: 4,
            hashtag: "DOA",
        });

        hashtag.push({
            id: 5,
            hashtag: "Trapo",
        });

        hashtag.push({
            id: 6,
            hashtag: "Speedy",
        });


        return hashtag.sort();
    }
}