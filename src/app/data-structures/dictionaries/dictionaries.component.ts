import {Component} from '@angular/core';
import {ExerciseHint} from "../../models/exercise-hint.model";
import {TestAnswer} from "../../models/test-answer.model";

@Component({
  selector: 'app-dictionaries',
  templateUrl: './dictionaries.component.html',
  styleUrls: ['./dictionaries.component.scss']
})
export class DictionariesComponent  {

  keyTestCode = 'jooksuajad = {"Mait": 16.5, "Kadi": 18.6, "Pille": 17.9}\n' +
    'print(jooksuajad[1])';
  keyTestItems = [new TestAnswer('18.6', false, 'See väärtus vastaks võtmele "Kadi", kuid mis vastab võtmele 1?'),
  new TestAnswer('16.5', false, 'Võtmele "Mait" vastab väärtus 16.5, kuid mida väljastatakse võtme 1 puhul?'),
  new TestAnswer('17.9', false, 'See väärtus vastab võtmele "Pille", kas sõnastikus on olemas võti 1?'),
  new TestAnswer('"Kadi": 17.9', false, 'See paar on küll teine kirje sõnastikus, aga sõnastikuga ei saa kasutada indekseid. Saame kasutada vaid võtmeid. Kas sõnastikus on olemas võti 1?'),
  new TestAnswer('Veateade', true, 'Õige! Sõnastikust minnakse otsima võtit 1, kuid sellist ei ole seal, seega tekib hoopis viga.')];

  getTestCode = 'jooksuajad = {"Mait": 16.5, "Kadi": 18.6, "Pille": 17.9}\n' +
    'print(jooksuajad.get("Olev", 17.5))';

  getTestItems = [new TestAnswer('17.5', true, 'Õige! Kuna võtit "Olev" ei ole sõnastikus, siis tagastatab <span class="fst-italic">get</span>-meetod teise argumendina antud vaikeväärtuse'),
  new TestAnswer('Veateade', false, 'Võtit "Olev" sõnastikus ei leidu, kuid sellisel juhul tagastab <span class="fst-italic">get</span>-meetod vaikeväärtuse' +
    ', kui see on teise argumendina antud. Kui vaikeväärtust pole, siis tagastaks <span class="fst-italic">None</span>.'),
  new TestAnswer('16.5', false, '16.5 vastab võtmele "Mait", kuid küsime väärtust, mis vastaks võtmele "Olev".'),
  new TestAnswer('18.6', false, '18.6 vastab võtmele "Kadi", kuid me küsime väärtust, mis vastaks võtmele "Olev".'),
  new TestAnswer('17.9', false, 'See väärtus vastab võtmele "Pille", kuid küsime hoopis võtmele "Olev" vastavat väärtust.'),
  new TestAnswer('None', false, '<span class="fst-italic">None</span> on tagastatav väärtus, kui <span class="fst-italic">get</span>-meetodile ' +
    'ei ole ette antud vaikeväärtust ja küsitud võtit pole sõnastikus. Siin on aga vaikeväärtus ette antud.')];

  carCounterHints = [new ExerciseHint('Kõigepealt võiks mõelda, mida meil siin ülesandes vaja on. Meil on vaja loendada erinevatest automarkidest autosid.' +
    'Selleks sobiks hästi sõnastik, kus võtmed on automargid ja väärtused on selle automargi esinemiste arvud. Lisaks näeme, et peame kasutajalt korduvalt ' +
    'automarki küsima, seega läheb meil vaja tsüklit. Siia sobiks hästi <span class="fst-italic">while</span>-tsükkel, kas jätkamistingimusega või lõpmatu, ' +
    'on juba igaühe enda otsustada.', null),
  new ExerciseHint('Enne tsükli juurde minekut võiks luua tühja sõnastiku, kuhu hakkame automarke lisama.',  'autod = {}'),
  new ExerciseHint('Me teeme siin läbi jätkamistingimusega tsükli variandi. Selleks küsime juba enne tsükli alustamist kasutajalt esimese ' +
    'automargi, et saaksime tsüklitingimuses seda automarki kasutada.', 'auto = input("Mis marki auto just möödus? ")\n' +
    '\n' +
    'while auto != "":\n    # tsükli sisu'),
  new ExerciseHint('Tsüklis tuleks kõigepealt sõnastikus vastava automargi väärtust suurendada ja seejärel uus automark küsida (seda saab teha samamoodi nagu enne tsüklit). Sõnastiku muutmiseks on kaks varianti.' +
    ' Esiteks võib <span class="fst-italic">in</span> võtmesõnaga kontrollida, kas võti on juba sõnastikus või mitte. Kui on, siis võtame sõnastikust automargi väärtuse, ' +
    'suurendame seda ühe võrra ja paneme tagasi sõnastikku. Kui võtit pole sõnastikus, siis järelikult pole me sellist automarki varem näinud ja lisame selle sõnastikku ' +
    'väärtusega 1. Teine variant on kasutada <span class="fst-italic">get</span>-meetodit. Sellele meetodile saame anda vaikeväärtuse, mis tagastatakse siis, kui võtit pole sõnastikus.',
    'autod[auto] = autod.get(auto, 0) + 1 # suurendame väärtust'),
  new ExerciseHint('Kui tsükkel lõppeb, siis peame kasutajale väljastama natuke statistikat nähtud autode kohta. Kõigepealt tahame teada, mitut erinevat ' +
    'automarki kasutaja nägi. Selleks tasub meenutada <span class="fst-italic">len</span>-funktsiooni. Kõigi nähtud autode arvu jaoks tuleks sõnastikus olevad väärtused kokku liita. ' +
    'Seda saab teha näiteks abimuutuja ja tsükli abil, või siis kasutada sõnastiku meetodit <span class="fst-italic">values()</span>, et saada kätte sõnastiku väärtused, ning ' +
    'siis kasutada funktsiooni <span class="fst-italic">sum()</span>, mis summeerib arvude järjendis olevad elemendid.', null),
  new ExerciseHint('Automarkide arvu ja autode arvu võib leida nii:', 'marke = len(autod)\n' +
    'autosid = sum(autod.values())'),
  new ExerciseHint('Need väärtused saame kasutajale ka väljastada: ', 'print("Kokku nägid täna " + str(marke) + " erinevat automarki, " + str(autosid) + " autot.")'),
  new ExerciseHint('Viimaks tuleb väljastada ka sõnastiku sisu ehk mitu autot igast margist nähti. Seda saab teha tavalise <span class="fst-italic">for</span>-tsükliga.', null),
  new ExerciseHint('Tsükkel käib läbi sõnastiku võtmete ja väärtuse saame kätte sõnastiku kaudu.',
    'for mark in autod:\n' +
    '    print(mark + ": " + str(autod[mark]))'),
  new ExerciseHint('Näide lõplikust koodist:',
    'autod = {}\n' +
    'auto = input("Mis marki auto just möödus? ")\n' +
    '\n' +
    'while auto != "":\n' +
    '    autod[auto] = autod.get(auto, 0) + 1\n' +
    '    auto = input("Mis marki auto just möödus? ")\n' +
    '\n' +
    'marke = len(autod)\n' +
    'autosid = sum(autod.values())\n' +
    'print("Kokku nägid täna " + str(marke) + " erinevat automarki, " + str(autosid) + " autot.")\n' +
    '\n' +
    'for mark in autod:\n' +
    '    print(mark + ": " + str(autod[mark]))'
  )];

  carCountriesListFunction = 'def koodid_failist(failinimi):\n' +
    '    koodid = []\n' +
    '    fail = open(failinimi)\n' +
    '    for rida in fail:\n' +
    '        koodid.append(rida.strip())\n' +
    '    fail.close()\n' +
    '    return koodid';

  carCountriesDictionaryFunction = 'def riigid_failist(failinimi):\n' +
    '    riigid = {}\n' +
    '    fail = open(failinimi)\n' +
    '    for rida in fail:\n' +
    '        tükid = rida.strip().split()\n' +
    '        riigid[tükid[0]] = tükid[1]\n' +
    '    fail.close()\n' +
    '    return riigid';

  carCountriesConversionFunction = 'def koodid_riikideks(koodid, riigid):\n' +
    '    teisendatud = []\n' +
    '    for kood in koodid:\n' +
    '        riik = riigid.get(kood, "Tundmatu")\n' +
    '        teisendatud.append(riik)\n' +
    '    return teisendatud';

  carCountriesOutputFunction = 'def väljasta(teisendatud):\n' +
    '    print("Autod on järgmistest riikidest:")\n' +
    '    for riik in teisendatud:\n' +
    '        print(riik)';

  carCountriesMainProgram = 'koodid = koodid_failist("koodid.txt")\n' +
    'riigid = riigid_failist("riigid.txt")\n' +
    'teisendatud = koodid_riikideks(koodid, riigid)\n' +
    'väljasta(teisendatud)';

  emptyLine = '\n\n';

  carCountriesHints = [new ExerciseHint('Selle ülesande saab jagada neljaks alamosaks: koodide lugemine failist järjendisse, riikide lugemine failist ' +
    'sõnastikku, koodide teisendamine riikide nimedeks ja viimaks andmete väljastamine kasutajale. Võime nende alamülesannete jaoks teha eraldi funktsioonid, et ' +
    'kood oleks paremini loetav ja taaaskasutatav.', null),
  new ExerciseHint('Võtamegi alustuseks ette koodide lugemise failist järjendisse ja loome selle jaoks vastava funktsiooni. Funktsioon võiks võtta argumendiks failinime ' +
    'ja tagastada järjendi failis olevatest riigikoodidest.', null),
  new ExerciseHint('Paneme oma funktsiooni nimeks <span class="fst-italic">koodid_failist</span>. Failist ridu lugeda me juba oskame. Enne failist lugemist ' +
    'võiks luua tühja järjendi, kuhu saame hakata koode lisama. Tasub meeles pidada, et ridade lõpust võiks reavahetusmärgid eemaldada. Lõpus tuleks loodud järjend ka tagastada.', null),
  new ExerciseHint('Funktsiooni koodide järjendi loomiseks:',this.carCountriesListFunction),
  new ExerciseHint('Järgmiseks võime luua funktsiooni riigikoodide ja -nimede sõnastiku loomiseks. Need tuleb samamoodi failist lugeda ning kood ja nimi ' +
    'on failis ühel real tühikuga eraldatult. Loodavas sõnastikus võiks kood olla võti ja vastava riigi nimi võtmele vastav väärtus. Rea tükeldamiseks tasub ' +
    'meenutada sõnede <span class="fst-italic">split</span>-meetodit.', null),
  new ExerciseHint('Funktsioon faili põhjal sõnastiku koostamiseks võiks välja näha selline:',this.carCountriesDictionaryFunction),
  new ExerciseHint('Seejärel võime luua funktsiooni, mis sõnastiku abiga loob koodide järjendi põhjal uue järjendi, kus on sees koodidele vastavad riikide nimed. ' +
    'See funktsioon võiks argumentideks võtta koodide järjendi ning koodide ja nimede sõnastiku. Tagastatavaks väärtuseks võiks olla riiginimede järjend.', null),
  new ExerciseHint('Kui riigikoodi pole sõnastikus, siis peaks teisendatud järjendisse lisama "Tundmatu". Sõnastikust väärtuse küsimist on mugav teha ' +
    ' <span class="fst-italic">get</span>-meetodiga, ' +
    'millele saab anda teiseks argumendiks vaikeväärtuse, mis tagastatakse, kui võtit pole sõnastikus.',this.carCountriesConversionFunction),
  new ExerciseHint('Viimaseks funktsiooniks võime teha teisendatud riikide väljastamise. Sellel funktsioonil tagastusväärtust ei ole, sest selle tööks on lihtsalt ' +
    'andmed ilusal kujul ekraanile väljastada. Argumendiks võiks see funktsioon võtta riiginimede järjendi.', null),
  new ExerciseHint('Kõigepealt anname kasutajale teada, mida väljastama hakkame. Seejärel väljastame järjendist kõik riiginimed eraldi ridadel.',this.carCountriesOutputFunction),
  new ExerciseHint('Nüüd on meil kõik alamülesannete lahendamiseks vajalikud funktsioonid olemas, jääb üle ainult kokku panna põhiprogramm, mis neid' +
    ' funktsioone kasutab. Kõigepealt tuleks kasutada failidest lugemise funktsioone ja salvestada tagastatud järjend ja sõnastik muutujatesse. Seejärel ' +
    'teisendada koodid vastava funktsiooni abil riiginimedeks ning lõpuks kutsuda välja väljastamise funktsiooni.', null),
  new ExerciseHint('Põhiprogramm on tänu funktsioonidele üsna lühike.',this.carCountriesMainProgram),
  new ExerciseHint('Kogu kood koos funktsioonide ja põhiprogrammiga.',
    this.carCountriesListFunction + this.emptyLine + this.carCountriesDictionaryFunction + this.emptyLine + this.carCountriesConversionFunction +
  this.emptyLine + this.carCountriesOutputFunction + this.emptyLine + this.carCountriesMainProgram)];

  dictionariesExamplesCode = 'pikkused = {"Madis": 140.8, "Kadri": 135.3, "Ants": 146.7}\n' +
    'silmavärvid = {"Kerttu": "sinine", "Katriin": "pruun"}\n' +
    'grupihinnad = {10: 30.0, 20: 45.0, 30: 55.0}\n' +
    'segamini = {"sünniaasta": 2010, "nimi": "Gustav", "pikkus": 153.9, "poiss": True}\n' +
    'tühi = {}\n' +
    'teine_tühi = dict()';
  valueByKeyCode = 'pikkused = {"Madis": 140.8, "Kadri": 135.3, "Ants": 146.7}\n' +
    'pikkus = pikkused["Kadri"]\n' +
    'print(pikkus)\n' +
    'print(pikkused["Ants"])';
  nonExistingKeyCode = 'pikkused = {"Madis": 140.8, "Kadri": 135.3, "Ants": 146.7}\n' +
    'print(pikkused["Kati"])';
  addingValueCode = 'pikkused = {"Madis": 140.8, "Kadri": 135.3, "Ants": 146.7}\n' +
    'pikkused["Kati"] = 138.6\n' +
    'pikkused["Kadri"] = 132.4\n' +
    'print(pikkused)';
  forLoopCode = 'ostukorv = {"piim": 1, "leib": 1, "õun": 5, "porgand": 8}\n' +
    '\n' +
    'for toode in  ostukorv:\n' +
    '    print(toode + " - " + str(ostukorv[toode]) + " tk")';
  forLoopValuesCode = 'ostukorv = {"piim": 1, "leib": 1, "õun": 5, "porgand": 8}\n' +
    '\n' +
    'for kogus in  ostukorv.values():\n' +
    '    print(str(kogus) + " tk")';
  forLoopItemsCode = 'ostukorv = {"piim": 1, "leib": 1, "õun": 5, "porgand": 8}\n' +
    '\n' +
    'for toode, kogus in  ostukorv.items():\n' +
    '    print(toode + " - " + str(kogus) + " tk")';
  shoppingCartCode = 'ostukorv = {}\n' +
    '\n' +
    'fail = open("ostukorv.txt")\n' +
    'for rida in fail:\n' +
    '    tükid = rida.split(",") # tükeldame rea koma kohalt ja saame kahe elemendiga järjendi\n' +
    '    ostukorv[tükid[0]] = int(tükid[1]) # esimene element on toode ja teine element kogus (kogus on vaja teha täisarvuks)\n' +
    '\n' +
    'toode = input("Sisesta toode: ")\n' +
    '\n' +
    'while toode != "":\n' +
    '    if toode in ostukorv: # kontrollime, kas toode on juba ostukorvis\n' +
    '        ostukorv[toode] = ostukorv[toode] + 1 # suurendame hetkel ostukorvis olevat kogust ühe võrra\n' +
    '    else:\n' +
    '        ostukorv[toode] = 1\n' +
    '    toode = input("Sisesta toode: ")\n' +
    '\n' +
    'print("Ostutšekk:")\n' +
    'for toode in ostukorv:\n' +
    '    print(toode + " - " + str(ostukorv[toode]))';
  shoppingCartGetCode = 'ostukorv[toode] = ostukorv.get(toode, 0) + 1 # väärtuse suurendamine ühe võrra';

}
