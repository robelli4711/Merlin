Issue = {

    /**
     * setup Issue Combo
     * @param 
     * @return Array - Alle Products Datas
     */
    get: function () {

        return this.set();
    },


    /**
     * get question from issue
     * @param int - product id
     * @return String - the question
     */
    getQuestion: function (id) {
        var x = this.set();

        var result = $.grep(x, function (e) {
            return e.id == id;
        });

        try {
            return result[0].question;            
        } catch (error) {
            return "";
        }
    },


    /**
     *  get troubleshooting from issue
     * @param int - product id
     * @return String - the troubleshooting
     */
    getTroubleshooting: function (id) {
        var x = this.set();

        var result = $.grep(x, function (e) {
            return e.id == id;
        });

        try {
            return result[0];            
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

        issue = [];

        issue.push({
            id: 1,
            issue: "Brühgruppe geht nicht rein.",
            question: "Ist die Brühgruppe auf Grundposition?\nIst der Hebel an der Hinterseite oben?",
            troubleshooting: "Brühgruppe auf Grundposition eingestellt\nHebel nach oben gezogen",
            solution: "Problem behoben und erfolgreich neu versucht."
        });

        issue.push({
            id: 2,
            issue: "Brühgruppe geht nicht rein.",
            question: "Ist der Hebel an der Hinterseite oben?",
            troubleshooting: "Hebel nach oben gezogen",
            solution: "Problem behoben und erfolgreich neu versucht."
        });

        issue.push({
            id: 3,
            issue: "Brührgruppe geht nicht raus.",
            question: "Wurde das Gerät bereits neugestartet?",
            troubleshooting: "Alle Teile entfernt, Gerät vom Strom genommen und neugestartet.",
            solution: "Problem behoben und erfolgreich neu versucht."
        });

        issue.push({
            id: 4,
            issue: "Brühgruppe geht nicht raus (Nach neustart)",
            question: "Gibt die Maschine Geräusche von sich? Ja/Nein",
            troubleshooting: "N/A",
            solution: "Gerät zur Reparatur eingesendet."
        });

        issue.push({
            id: 5,
            issue: "Abtropfschale lässt sich nicht mehr einsetzen",
            question: "N/A",
            troubleshooting: "Alle Teile entfernt, Gerät vom Strom genommen Mikroschalter betätigt und neugestartet.",
            solution: "Problem behoben und Abtropfschale erfolgreich eingesetzt."
        });

        issue.push({
            id: 6,
            issue: "Fehlermeldung",
            question: "Welche Fehlermeldung wird angezeigt",
            troubleshooting: "Troubleshooting laut Bediennungsanleitung (Seite?) durchgeführt.\nTroubleshooting nach Rücksprache mit TBL",
            solution: "Problem behoben und erfolgreich neu versucht. Problem nicht behoben Gerät zur Reparatur eingesendet"
        });

        issue.push({
            id: 7,
            issue: "Gerät ist laut",
            question: "Seit Wann? Woher kommt das Geräusch? Was wurde zuletzt gemacht?",
            troubleshooting: "Troubleshooting laut Bediennungsanleitung (Seite?) durchgeführt.\nTroubleshooting nach Rücksprache mit TBL",
            solution: "Problem behoben und erfolgreich neu versucht. Problem nicht behoben Gerät zur Reparatur eingesendet"
        });

        issue.push({
            id: 8,
            issue: "Kaffeebohnen werden nicht gemahlen (Mahlgrad)",
            question: "Ist der Mahlgrad richtig eingestellt?",
            troubleshooting: "Mahlgrad neu eingestellt",
            solution: "Problem behoben und erfolgreich neu versucht.\nKunden darauf hingewiesen, dass nach Veränderung der Mahlgradeinstellung die Maschine\nbis zu 10 Tassen benötigt um ein optimales Ergebnis zu erzielen."
        });

        issue.push({
            id: 9,
            issue: "Kaffeebohnen werden nicht gemahlen (blockiert)",
            question: "Ist das Mahlwerk blockiert?",
            troubleshooting: "Mahlwerk gereinigt",
            solution: "Problem behoben und erfolgreich neu versucht."
        });

        issue.push({
            id: 10,
            issue: "Kaffeebohnen werden nicht gemahlen (keine Reaktion)",
            question: "Startet der Mahlvorgang?",
            troubleshooting: "Mahlvorgang nicht möglich",
            solution: "Gerät zur Reparatur eingesendet."
        });

        issue.push({
            id: 11,
            issue: "Die Maschine verliert Wasser",
            question: "Wieviel Wasser? Wo genau? Seit Wann? Welche Farbe hat das Wasser?",
            troubleshooting: "Troubleshooting laut Bediennungsanleitung (Seite?) durchgeführt.\nTroubleshooting nach Rücksprache mit TBL (Welches troubleshooting?)",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        });

        issue.push({
            id: 12,
            issue: "Das Gerät zieht kein Wasser?",
            question: "Wurde die Maschine entlüftet? Benutzt der Kunde einen Wasserfilter? Wann wurde das gerät zuletzt entkalkt?",
            troubleshooting: "Gerät entlüftet / entkalkt / Wasserfilter entfernt und neu versucht",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben, Gerät zur Werkstatt eingesendet.\nKunde meldet sich sollte das Problem nach dem Troubleshooting weiterbestehen"
        });

        issue.push({
            id: 13,
            issue: "Entkalkung (Wann?)",
            question: "Wann wurde das letzte mal entkalkt?",
            troubleshooting: "Kunden durch Entkalkungsvorgang geleitet",
            solution: "Erfolgreich mit Kunden Gerät entkalkt."
        });

        issue.push({
            id: 14,
            issue: "Entkalkung (Vorteile)",
            question: "Kunden über Vorteile einer regelmäßigen Entkalkung informiert?",
            troubleshooting: "Kunden durch Entkalkungsvorgang geleitet",
            solution: "Erfolgreich mit Kunden Gerät entkalkt."
        });

        issue.push({
            id: 15,
            issue: "Brühgruppe reinigen und fetten (Wie?/Warum?)",
            question: "Kunden über Vorteile einer regelmäßigen Reinigung/Wartung informiert?",
            troubleshooting: "Kunden durch Reinigungsvorgang geleitet. Kunden auf BDA verwiesen.",
            solution: "N/A"
        });

        issue.push({
            id: 16,
            issue: "Allgemeine Wartung",
            question: "Kunden über Vorteile einer regelmäßigen Reinigung informiert? Kunden über Reinigungszyklen informiert",
            troubleshooting: "Kunden durch Reinigungsvorgang / Wartungsvorgang geleitet. Kunden auf BDA verwiesen.",
            solution: "N/A"
        });

        issue.push({
            id: 17,
            issue: "Gerät geht nicht an",
            question: "Ist die Maschine am Strom angeschlossen?",
            troubleshooting: "Gerät an Strom angeschlossen.",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        });

        issue.push({
            id: 18,
            issue: "Das Gerät zieht kein Wasser?",
            question: "Wann wurde das Gerät zuletzt entkalkt/entlüftet?",
            troubleshooting: "Gerät entkalkt/entlüftet und neu versucht",
            solution: "Problem behoben und erfolgreich neu versucht. Gerät zur Werkstatt eingesendet.\nKunde meldet sich sollte das Problem nach dem Troubleshooting weiterbestehen"
        });

        issue.push({
            id: 19,
            issue: "Entkalkung (Wann?)",
            question: "Wann wurde das letzte mal entkalkt?",
            troubleshooting: "Kunden durch Entkalkungsvorgang geleitet",
            solution: "Erfolgreich mit Kunden Gerät entkalkt."
        });

        issue.push({
            id: 20,
            issue: "Entkalkung (Wie?)",
            question: "Kunden über Vorteile einer regelmäßigen Entkalkung informiert?",
            troubleshooting: "Kunden durch Entkalkungsvorgang geleitet",
            solution: "Erfolgreich mit Kunden Gerät entkalkt."
        });

        issue.push({
            id: 21,
            issue: "Allgemeine Wartung",
            question: "Kunden über Vorteile einer regelmäßigen Reinigung informiert? Kunden über Reinigungszyklen informiert",
            troubleshooting: "Kunden durch Reinigungsvorgang / Wartungsvorgang geleitet. Kunden auf BDA verwiesen.",
            solution: "N/A"
        });

        issue.push({
            id: 22,
            issue: "Gerät geht nicht an",
            question: "Ist die Maschine am Strom angeschlossen?",
            troubleshooting: "Gerät an Strom angeschlossen.",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        });

        issue.push({
            id: 23,
            issue: "Der Ein/Ausschalter blinkt schnell",
            question: "Wurde die Maschine bereits neu gestartet?",
            troubleshooting: "Wassertank entnommen, Schwimmer (falls vorhanden) überprüft/entklemmt, Wassertank neu eingefügt",
            solution: "Problem behoben und neu versucht. Gerät ist innerhalb der Garantie neuen Wassertank (Nummer: xxxxxxx) über Parts bestellt.\nGerät ist außerhalb der Garantie, Ersatzteil herausgesucht und Kunden über Kaufmöglichkeiten informiert"
        });

        issue.push({
            id: 24,
            issue: "Maschine gibt keinen Kaffee aus",
            question: "Ist der Padhalter verstopft? Wurde die Maschine regelmäßig entkalkt?",
            troubleshooting: "Anderen Padhalter verwendet. Gerät entkalkt und padhalter gereinigt.",
            solution: "Problem behoben und erfolgreich neu versucht. Problem nicht behoben, Gerät zur Werkstatt eingesendet.\nKunde meldet sich sollte das Problem nach dem Troubleshooting weiterbestehen"
        });

        issue.push({
            id: 25,
            issue: "Die Entkalkungsanzeige erlischt nicht nach der Entkalkung",
            question: "hat der Kunde die Entkalkung nach BDA durchgeführt?",
            troubleshooting: "Kunden durch den Entkalkungsvorgang geleitet. Kunden auf BDA verwiesen.",
            solution: "Problem behoben und erfolgreich neu versucht. Problem nicht behoben, Gerät zur Werkstatt eingesendet.\nKunde meldet sich sollte das Problem nach dem Troubleshooting weiterbestehen"
        });

        issue.push({
            id: 26,
            issue: "Die Maschine verliert Wasser",
            question: "Wieviel Wasser? Wo genau? Seit Wann? Welche Farbe hat das Wasser?",
            troubleshooting: "Troubleshooting laut Bediennungsanleitung (Seite?) durchgeführt.\nTroubleshooting nach Rücksprache mit TBL (Welches troubleshooting?)",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        });

        issue.push({
            id: 27,
            issue: "Das Gerät zieht kein Wasser?",
            question: "Wann wurde das Gerät zuletzt entkalkt/entlüftet?",
            troubleshooting: "Gerät entkalkt/entlüftet und neu versucht",
            solution: "Problem behoben und erfolgreich neu versucht. Gerät zur Werkstatt eingesendet.\nKunde meldet sich sollte das Problem nach dem Troubleshooting weiterbestehen"
        });

        issue.push({
            id: 28,
            issue: "Entkalkung (Wann?)",
            question: "Wann wurde das letzte mal entkalkt?",
            troubleshooting: "Kunden durch Entkalkungsvorgang geleitet",
            solution: "Erfolgreich mit Kunden Gerät entkalkt."
        });

        issue.push({
            id: 29,
            issue: "Entkalkung (Wie?)",
            question: "Kunden über Vorteile einer regelmäßigen Entkalkung informiert?",
            troubleshooting: "Kunden durch Entkalkungsvorgang geleitet",
            solution: "Erfolgreich mit Kunden Gerät entkalkt."
        });

        issue.push({
            id: 30,
            issue: "Allgemeine Wartung",
            question: "Kunden über Vorteile einer regelmäßigen Reinigung informiert? Kunden über Reinigungszyklen informiert",
            troubleshooting: "Kunden durch Reinigungsvorgang / Wartungsvorgang geleitet. Kunden auf BDA verwiesen.",
            solution: "N/A"
        });

        issue.push({
            id: 31,
            issue: "Gerät geht nicht an",
            question: "Ist die Maschine am Strom angeschlossen?",
            troubleshooting: "Gerät an Strom angeschlossen.",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        });

        issue.push({
            id: 32,
            issue: "Gerät geht nicht an",
            question: "Ist die Maschine am Strom angeschlossen?",
            troubleshooting: "Gerät an Strom angeschlossen.",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        });

        issue.push({
            id: 33,
            issue: "Gerät geht spontan aus",
            question: "Ist der Airfryer überhitzt",
            troubleshooting: "Airfryer abkühlen lassen",
            solution: "Problem behoben und erfolgreich neu versucht. Problem nicht behoben Gerät zur Reparatur eingesendet"
        });

        issue.push({
            id: 34,
            issue: "Allgemeine Wartung",
            question: "Kunden über Vorteile einer regelmäßigen Reinigung informiert?\nKunden über Reinigungszyklen informiert",
            troubleshooting: "Kunden durch Reinigungsvorgang / Wartungsvorgang geleitet.\nKunden auf BDA verwiesen.",
            solution: "N/A"
        });

        issue.push({
            id: 35,
            issue: "Das Gerät gibt weißen Rauch ab",
            question: "Warum raucht das Gerät?",
            troubleshooting: "Kunden informiert, dass dies normal ist (zuviel Oel wird zu heiß)",
            solution: "Oel wird zu heiss"
        });

        issue.push({
            id: 36,
            issue: "Gerät geht nicht an",
            question: "Ist die Maschine am Strom angeschlossen?",
            troubleshooting: "Gerät an Strom angeschlossen.",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        });

        issue.push({
            id: 37,
            issue: "Wasser läuft aus",
            question: "Ist der Wassertank beschädigt? Ist der Wassertank richtig eingesetzt? Wo läuft das Wasser aus? Seit wann läuft das Wasser aus?",
            troubleshooting: "Wassertank richtig eingesetzt. Wassertank auf Beschädigung überprüft?",
            solution: "Problem behoben und neu versucht.\nGerät ist innerhalb der Garantie neuen Wassertank (Nummer: xxxxxxx) über Parts bestellt.\nGerät ist außerhalb der Garantie, Ersatzteil herausgesucht und Kunden über Kaufmöglichkeiten informiert"
        });

        issue.push({
            id: 38,
            issue: "Entkalkung (Wie?)",
            question: "Wann wurde das letzte mal entkalkt?",
            troubleshooting: "Kunden durch Entkalkungsvorgang geleitet",
            solution: "Erfolgreich mit Kunden Gerät entkalkt."
        });

        issue.push({
            id: 39,
            issue: "Reinigungsbürste geht nicht",
            question: "Ist die Bürste verklemmt? Muss die Bürste getauscht werden?",
            troubleshooting: "N/A",
            solution: "N/A"
        });

        issue.push({
            id: 40,
            issue: "Mein Staubsauger hat an Saugkraft verloren",
            question: "Seit wann besteht dass Problem?\nIst der Beutel/Auffangbehälter voll?\nSind die Filter verstopft? Ist der Schlauch/die Bürste verstopft?",
            troubleshooting: "Troubleshooting laut Bediennungsanleitung (Seite?) durchgeführt.\nTroubleshooting nach Rücksprache mit TBL (Welches troubleshooting?)",
            solution: "Problem behoben und erfolgreich neu versucht.\nGerät zur Werkstatt eingesendet.\nKunde meldet sich sollte das Problem nach dem Troubleshooting weiterbestehen"
        }); 

        issue.push({
            id: 41,
            issue: "Gerät geht nicht an",
            question: "Ist die Maschiene am Strom angeschlossen?",
            troubleshooting: "Gerät an Strom angeschlossen.",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        }); 

        issue.push({
            id: 42,
            issue: "Gerät geht spontan aus",
            question: "Ist das Gerät überhitzt?",
            troubleshooting: "Gerät abkühlen lassen",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        }); 

        issue.push({
            id: 43,
            issue: "Entkalkung (Wie?)",
            question: "Wann wurde das letzte mal entkalkt?",
            troubleshooting: "Kunden durch Entkalkungsvorgang geleitet",
            solution: "Erfolgreich mit Kunden Gerät entkalkt."
        }); 

        issue.push({
            id: 44,
            issue: "Die Maschine verliert Wasser",
            question: "Wieviel Wasser? Wo genau? Seit Wann? Welche Farbe hat das Wasser?",
            troubleshooting: "Troubleshooting laut Bediennungsanleitung (Seite?) durchgeführt.\nTroubleshooting nach Rücksprache mit TBL (Welches troubleshooting?)",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        }); 

        issue.push({
            id: 45,
            issue: "Wofür steht welcher Modus?",
            question: "N/A",
            troubleshooting: "Kunden über verschiedene Modi informiert (BDA Seite: *****)",
            solution: "N/A"
        }); 

        issue.push({
            id: 46,
            issue: "Gerät geht nicht an",
            question: "Ist die Maschiene am Strom angeschlossen?",
            troubleshooting: "Gerät an Strom angeschlossen.",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        }); 

        issue.push({
            id: 47,
            issue: "Gerät geht spontan aus",
            question: "Ist das Gerät überhitzt?",
            troubleshooting: "Gerät abkühlen lassen",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        }); 

        issue.push({
            id: 48,
            issue: "Wofür steht welcher Modus?",
            question: "N/A",
            troubleshooting: "Kunden über verschiedene Modi informiert (BDA Seite: *****)",
            solution: "N/A"
        }); 

        issue.push({
            id: 49,
            issue: "Gerät ist laut",
            question: "Seit Wann? Woher kommt das Geräusch? Was wurde zuletzt gemacht?",
            troubleshooting: "Troubleshooting laut Bediennungsanleitung (Seite?) durchgeführt. Troubleshooting nach Rücksprache mit TBL",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        }); 

        issue.push({
            id: 50,
            issue: "Fehlermeldung",
            question: "Welche Fehlermeldung wird angezeigt",
            troubleshooting: "Troubleshooting laut Bediennungsanleitung (Seite?) durchgeführt.\nTroubleshooting nach Rücksprache mit TBL",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        }); 

        issue.push({
            id: 51,
            issue: "Die Verbindung zum Philips Avent\nSmart-Babyphone bricht ständig ab",
            question: "N/A",
            troubleshooting: "Überprüfen Sie, ob Ihr Wi-Fi-Signal im Raum,\nin dem das Babyphone positioniert ist, stark genug und stabil ist.\nDie Download- und Upload-Geschwindigkeit am Standort des Philips Avent Smart-Babyphones\nsollte über 2 Mbit/s liegen, damit eine stabile Verbindung gewährleistet ist.\nBeträgt Ihre WLAN-Verbindung unter 2 Mbit/s?\nEin WLAN-Repeater ist eine gute Lösung, um Ihre WLAN-Signalstärke zu verbessern.\nWenn die WLAN-Verbindung auf Ihrem Smartgerät nicht stabil ist,\nüberprüfen Sie, ob Ihre mobile Verbindung (3G oder 4G) ordnungsgemäß funktioniert,\num die Verbindung mit dem Philips Avent Smart-Babyphone herzustellen.",
            solution: "N/A"
        }); 

        issue.push({
            id: 52,
            issue: "Woher bekomme ich die App?",
            question: "N/A",
            troubleshooting: " https://www.philips.de/c-m-mo/ugrow-babyentwicklungstracker",
            solution: "Kunden auf die Webseite geleitet und von dort in Apple App Store / Google Play"
        }); 

        issue.push({
            id: 53,
            issue: "Ist mein Smartphone kompatibel mit der uGrow App?",
            question: "Welches Betriebssystem ist installiert",
            troubleshooting: "N/A",
            solution: "Die uGrow App ist kompatibel mit Apple iPhones (Version 5S oder höher) und Android-Smartphones.\nWenn du ein iPhone nutzt, muss iOS 8.1 oder höher installiert sein.\nAndroid-Nutzer benötigen Android 4.4 oder höher."
        }); 

        issue.push({
            id: 54,
            issue: "Ich sehe zwei uGrow Apps im App Store. Welche soll ich herunterladen?",
            question: "N/A",
            troubleshooting: "N/A",
            solution: "Du kannst zwei Apps sehen: eine App für den uGrow Smart Baby Monitor und die App\n'uGrow - Gesunde Entwicklung deines Babys'.\nDie zweite ist die, die du brauchst.\nWenn du auch die uGrow Smart Baby Monitor App nutzen willst,\nlade bitte beide Apps herunter."
        }); 

        issue.push({
            id: 55,
            issue: "Gerät ist laut.",
            question: "Seit Wann? Woher kommt das Geräusch? Was wurde zuletzt gemacht?",
            troubleshooting: "Troubleshooting laut Bediennungsanleitung (Seite?) durchgeführt.\nTroubleshooting nach Rücksprache mit TBL",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        }); 

        issue.push({
            id: 56,
            issue: "Gerät geht nicht an.",
            question: "Ist die Maschiene am Strom angeschlossen?",
            troubleshooting: "Gerät an Strom angeschlossen.",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        }); 

        issue.push({
            id: 57,
            issue: "Gerät geht spontan aus.",
            question: "Ist das Gerät überhitzt?",
            troubleshooting: "Gerät abkühlen lassen",
            solution: "Problem behoben und erfolgreich neu versucht.\nProblem nicht behoben Gerät zur Reparatur eingesendet"
        }); 

        issue.push({
            id: 58,
            issue: "Wofür steht welcher Modus?",
            question: "N/A",
            troubleshooting: "Kunden über verschiedene Modi informiert (BDA Seite: *****)",
            solution: "N/A"
        }); 

        issue.push({
            id: 59,
            issue: "Gerät lädt nicht mehr",
            question: "Haben Sie bereits ein anderes Ladeteil benutzt?\nHaben Sie bereits eine andere Steckdose benutzt?\nBlinkt die Ladelampe?",
            troubleshooting: "N/A",
            solution: "Problem behoben und neu versucht.\nGerät ist innerhalb der Garantie neues Ladegerät (Nummer: xxxxxxx)über Parts bestellt.\nGerät ist außerhalb der Garantie, Ersatzteil herausgesucht und Kunden über Kaufmöglichkeiten informiert"
        }); 

        issue.push({
            id: 60,
            issue: "Allgemeine Wartung",
            question: "Kunden über Vorteile einer regelmäßigen Reinigung informiert? Kunden über Reinigungszyklen informiert",
            troubleshooting: "Kunden durch Reinigungsvorgang / Wartungsvorgang geleitet. Kunden auf BDA verwiesen.",
            solution: "N/A"
        }); 

        issue.push({
            id: 61,
            issue: "Kunde hat Gerät aus Promotion nicht erhalten.",
            question: "Um Welche Promo Aktion handlet es sich? Wann haben Sie sich registiriert?",
            troubleshooting: "Kunde ist in AYS vorhanden und vollständig registriert. Kunde ist in AYS aber Adresse fehlt. Kunde ist in AYS aber Rechnung fehlt.",
            solution: "< 2 Wochen: Fehlende Daten, Kunde gebeten sich erneut zu registrieren, da Registrierung. \n>2 Wochen: Fehlende Daten aufgenommen und an CBL eskaliert.\n>4 Wochen: Daten erneut abgeglichen und an CBL eskaliert"
        }); 


        /*        issue.push({
            id: 25,
            issue: "",
            question: "",
            troubleshooting: "",
            solution: ""
        }); */

        return issue.sort();
    }
}