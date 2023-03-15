import {Component} from '@angular/core';
import {ExerciseHint} from "../../models/exercise-hint.model";
import {ReorderTestQuestion} from "../../models/reorder-test-question.model";
import {ReorderTestItem} from "../../models/reorder-test-item.model";
import {TestAnswer} from "../../models/test-answer.model";

@Component({
  selector: 'app-inheritance',
  templateUrl: './inheritance.component.html',
  styleUrls: ['./inheritance.component.scss']
})
export class InheritanceComponent {

  classesOrderQuestion = new ReorderTestQuestion('Proovi järjestada järgmised klassid, et kõige üldisem oleks üleval ja kõige kitsam ehk täpsem klass all.',
    [
      new ReorderTestItem('Elusolend', 'Kas Elusolend ei tundu olevat kõige üldisem nendest klassidest?'),
      new ReorderTestItem('Loom', 'Loom võiks olla järgmine peale Elusolendit.'),
      new ReorderTestItem('Imetaja', 'Imetaja peaks olema peale Looma.'),
      new ReorderTestItem('Kiskja', 'Kiskja on ülidsem Koerlasest, aga kitsam Imetajast.'),
      new ReorderTestItem('Koerlane', 'Koerlased kuuluvad Kirskjate alla.'),
      new ReorderTestItem('Koer', 'Koer on natuke üldisem Taksikoerast.'),
      new ReorderTestItem('Taksikoer', 'Taksikoer peaks olema kõige madalam nendest klassidest.'),
    ],
    'Jah, see on tõesti klasside õige järjekord!');

  inheritedMethodsTestCode = 'class Maja:\n' +
    '    def kuulutus(self):\n' +
    '        print("Müüa maja!")\n' +
    '\n' +
    'class Kortermaja(Maja):\n' +
    '    def kuulutus(self):\n' +
    '        print("Müüa kortermaja!")\n' +
    '\n' +
    'class Suvila(Maja):\n' +
    '    def pane_müüki(self):\n' +
    '        print("Müüa suvila!")\n' +
    '        \n' +
    'maja = Maja()\n' +
    'kortermaja = Kortermaja()\n' +
    'suvila = Suvila()\n' +
    '\n' +
    'maja.kuulutus()\n' +
    'kortermaja.kuulutus()\n' +
    'suvila.kuulutus()\n';
  inheritedMethodsTestItems = [new TestAnswer('Müüa maja!\nMüüa kortermaja!\nMüüa suvila!', false, 'Jägi, mis meetodit suvila puhul rakendatakse.'),
    new TestAnswer('Müüa maja!\nMüüa kortermaja!\nMüüa maja!', true, 'Õige! Suvilal pole endal meetodit <span class="fst-italic">kuuluta</span>, seega rakendatakse ülemklassi oma.'),
    new TestAnswer('Müüa maja!\nMüüa kortermaja!\nVeateade', false, 'Veateadet siin ei teki, kas mäletad, et alamklassid said kasutada ülemklasside meetodeid?'),
    new TestAnswer('Müüa maja!\nMüüa maja!\nMüüa maja!\n', false, 'Kas kortermaja isendi puhul ei väljastata midagi teistsugust?'),
    new TestAnswer('Müüa kortermaja!\nMüüa kortermaja!\nMüüa kortermaja!', false, 'Maja ja suvila isendi puhul väljastatakse midagi muud.'),
    new TestAnswer('Mitte midagi', false, 'Midagi siiski väljastatakse.')];

  playerClassesExerciseHints = [new ExerciseHint('Esimene samm on kopeerida oma koodi teegi <span class="fst-italic">random</span> ' +
    'import ja stiilide järjend. Seejärel võiks ette võtta Mängija klassi loomise.', null),
    new ExerciseHint('Klassi Mängija konstruktor peaks võtma kaks argumenti &ndash; kasutajanime ja taseme &ndash; ning omistama need isendiväljadele.', null),
    new ExerciseHint('Konstruktori meetodi nimi on <span class="fst-italic">__init__</span> ja esimene argument peab olema <span class="fst-italic">self</span>.',
      'class Mängija:\n' +
      '    \n' +
      '    def __init__(self, kasutajanimi, tase):\n' +
      '        self.kasutajanimi = kasutajanimi\n' +
      '        self.tase = tase'),
    new ExerciseHint('Lisaks on klassis meetod <span class="fst-italic">liigu_järgmisele_tasemele</span>, mis ei võta ühtegi ' +
      'argumenti, suurendab kasutaja taset ühe võrra ja väljastab teate kasutaja uue tasemega.', null),
    new ExerciseHint('Kuigi meie meetod ei võta ühtegi argumenti, siis meetodit kirjeldades tuleb üks argument ikka alati anda ' +
      '&ndash; <span class="fst-italic">self</span>.', 'def liigu_järgmisele_tasemele(self):\n' +
      '    self.tase += 1\n' +
      '    print(self.kasutajanimi + " liikus tasemele " + str(self.tase))'),
    new ExerciseHint('Sellega saame tõmmata joone alla Mängija klassile ja liikuda Supermängija juurde. Siin on igaühe enda otsustada, kas ' +
      'ta tahab anda stiilide hulga argumendina konstruktorile või väärtustada isendiväli konstruktoris tühja hulgaga.', null),
    new ExerciseHint('Me valime siin tühja hulgaga väärtustamise variandi. Siiski peame konstruktorile argumentideks andma ülemklassi ' +
      'isendiväljad ja kutsuma välja ka ülemklassi konstruktorit.', 'class Supermängija(Mängija):\n' +
      '    \n' +
      '    def __init__(self, kasutajanimi, tase):\n' +
      '        super().__init__(kasutajanimi, tase)\n' +
      '        self.stiilid = set()'),
    new ExerciseHint('Supermängija klassis tuleb üle katta meetod <span class="fst-italic">liigu_järgmisele_tasemele</span>. See meetod ' +
      'peaks jätkuvalt kasutaja taset suurendama ja uue taseme väljastama, aga nüüd peaks lisaks kasutajale ka uue stiili lisama. Siin oleks hea, kui ' +
      'saaks kõigepealt välja kutsuda ülemklassi meetodit <span class="fst-italic">liigu_järgmisele_tasemele</span>, mis tõstaks taset ja väljastaks teate, ' +
      'ning seejärel lisada uus loogika. Kas suudad välja mõelda, kuidas ülemklassi meetodit kasutada?', null),
    new ExerciseHint('Ülemklassi meetodile saame siit ligi funktsiooni <span class="fst-italic">super</span> abil. Kutsume kõigepealt seda välja, ' +
      'siis loosime uue stiili ja lisame selle isendiväljale stiilide hulka. Anname teada, mis stiili kasutaja sai ja millised stiilid tal nüüd kokku on.',
      'def liigu_järgmisele_tasemele(self):\n' +
      '    super().liigu_järgmisele_tasemele()\n' +
      '    uus_stiil = choice(stiilid)\n' +
      '    self.stiilid.add(uus_stiil)\n' +
      '    print(self.kasutajanimi + " sai uue stiili: " + uus_stiil)\n' +
      '    print(self.kasutajanimi + " kõik stiilid: " + str(self.stiilid))'),
    new ExerciseHint('Nüüd on meil klassid valmis, jääb üle vaid neid katsetada.',
      'from random import *\n' +
      '\n' +
      'stiilid = ["metall", "roosa", "rebane", "soomused", "vampiir", "zombie",\n' +
      '           "roheline", "võlur", "karu", "hunt", "libahunt", "nõid",\n' +
      '           "tume", "draakon", "haldjas", "läbipaistev", "näkk", "sinine",\n' +
      '           "tuli", "jää", "madu", "tulnukas", "vesi"]\n' +
      '\n' +
      'class Mängija:\n' +
      '    \n' +
      '    def __init__(self, kasutajanimi, tase):\n' +
      '        self.kasutajanimi = kasutajanimi\n' +
      '        self.tase = tase\n' +
      '    \n' +
      '    def liigu_järgmisele_tasemele(self):\n' +
      '        self.tase += 1\n' +
      '        print(self.kasutajanimi + " liikus tasemele " + str(self.tase))\n' +
      '        \n' +
      'class Supermängija(Mängija):\n' +
      '    \n' +
      '    def __init__(self, kasutajanimi, tase):\n' +
      '        super().__init__(kasutajanimi, tase)\n' +
      '        self.stiilid = set()\n' +
      '        \n' +
      '    def liigu_järgmisele_tasemele(self):\n' +
      '        super().liigu_järgmisele_tasemele()\n' +
      '        uus_stiil = choice(stiilid)\n' +
      '        self.stiilid.add(uus_stiil)\n' +
      '        print(self.kasutajanimi + " sai uue stiili: " + uus_stiil)\n' +
      '        print(self.kasutajanimi + " kõik stiilid: " + str(self.stiilid))\n'),
    new ExerciseHint('Katsetamiseks võime luua ühe mängija ja supermängija isendi ja proovida mõlemal taset tõsta:',
      'mängija = Mängija("merike9", 10)\n' +
      'supermängija = Supermängija("taavi", 1501)\n' +
      'mängija.liigu_järgmisele_tasemele()\n' +
      'supermängija.liigu_järgmisele_tasemele()\n' +
      'supermängija.liigu_järgmisele_tasemele()')];

  gameExerciseHints = [new ExerciseHint('Eelmises harjutuses lõime mängijate klassid. Selles ülesandes loome vaid ühe uue klassi Mäng, ' +
    'mis kasutab ka mängijate klasse, ja põhiprogrammi, mis küsib kasutajalt tegevusi. Alustame klassist Mäng, mille konstruktor ei ' +
    'pea küll ühtegi argumenti võtma, aga konstruktori sees tuleks isendiväljale omistada tühi sõnastik.', null),
    new ExerciseHint('Selle klassi konstruktor on üsna lihtne:', 'class Mäng:\n' +
      '    \n' +
      '    def __init__(self):\n' +
      '        self.mängijad = {}'),
    new ExerciseHint('Edasi tuleb meil luua kaks meetodit. Alustame meetodist <span class="fst-italic">lisa_mängija</span>, mis ' +
      'peaks küsima kasutajalt mängija kasutajanime ja taseme, looma õiget tüüpi kasutaja ja lisama selle sõnastikku. Juhul kui ' +
      'kasutajanimi on juba sõnastikus, siis peaks lihtsalt väljastama vastava teate ja uut mängijat mitte looma.', null),
    new ExerciseHint('Alustame kasutajanime küsimisest ja kontrollist, kas selline nimi on meil juba sõnastikus.',
      'def lisa_mängija(self):\n' +
      '    kasutajanimi = input("Sisesta kasutajanimi: ")\n' +
      '    if (kasutajanimi in self.mängijad):\n' +
      '        print("Sellise nimega kasutaja on juba olemas. Ei saa lisada...")\n'),
    new ExerciseHint('Kui kasutajanime polnud sõnastikus, siis peame lisaks küsima ka mängija taseme. Selle põhjal saame otsustada, kas ' +
      'luua uus Mängija või Supermängija. Kui tase on suurem või võrdne kui 1000, siis peaks olema tegu Supermängijaga. Loodud mängija tuleks ka sõnastikku lisada.', null),
    new ExerciseHint('Mängija tüübi otsustamiseks läheb meil vaja teist tingimuslauset.',
      'else:\n' +
      '    tase = int(input("Sisesta tase: "))\n' +
      '    if tase >= 1000:\n' +
      '        self.mängijad[kasutajanimi] = Supermängija(kasutajanimi, tase)\n' +
      '    else:\n' +
      '        self.mängijad[kasutajanimi] = Mängija(kasutajanimi, tase)'),
    new ExerciseHint('Nüüd peaks uue mängija lisamine toimima. Järgmiseks on meil vaja meetodit mängija taseme tõstmiseks. Selles meetodis tuleb ' +
      'samuti alustada kasutajanime küsimisest ja sõnastikus olemise kontrollist. Kui sellist kasutajanime pole, siis ei saa me taset tõsta ja ' +
      'väljastame vastava teate.', null),
    new ExerciseHint('Me kirjutame siin tingimuse hoopis selliselt, et kui kasutajanime pole sõnastikus, siis väljastame teate ja hiljem ' +
      '<span class="fst-italic">else</span>-harus kirjutame ülejäänud loogika.', 'def liiguta_järgmisele_tasemele(self):\n' +
      '    kasutajanimi = input("Sisesta kasutajanimi: ")\n' +
      '    if (kasutajanimi not in self.mängijad):\n' +
      '        print("Sellise nimega kasutajat pole. Ei saa järgmisele tasemele liigutada...")'),
    new ExerciseHint('Kui kasutajanimi oli olemas, siis saame sõnastikust selle kaudu kätte ka vastava mängija isendi. Isendil saame välja ' +
      'kutsuda meetodit <span class="fst-italic">liigu_järgmisele_tasemele</span>.', null),
    new ExerciseHint('Sõnastikust mängija leidmise ja ta taseme tõstmise saame kõik ühe reaga teha:', 'else:\n' +
      '    self.mängijad[kasutajanimi].liigu_järgmisele_tasemele()'),
    new ExerciseHint('Nüüd on meil klass Mäng valmis. Järgmine samm on seda klassi kasutada ja luua põhiprogramm.', null),
    new ExerciseHint('Põhiprogrammis luuakse kõigepealt uus Mängu isend ja seejärel alustatakse tsükliga, kus kasutaja saab igal ' +
      'iteratsioonil valida kahe tegevuse vahel (mängija lisamiseks "l" ja järgmisele tasemele liigutamiseks "j"). ' +
      'Mõlema tegevuse puhul tuleb välja kutsuda vastavat Mängu meetodit. Kui tegevus pole "l" ega "j", siis tuleks tsükkel lõpetada.', null),
    new ExerciseHint('Kõigepealt uue mängu loomiseks kutsume välja Mängu konstruktorit ja salvestame isendi muutujasse.', 'mäng = Mäng()'),
    new ExerciseHint('Tsükliks valime siin <span class="fst-italic">while True</span> tsükli (kes tahab võib ka jätkamistingimusega tsüklit kasutada). ' +
      'Igal tsükli tätimise korral tuleks kasutajalt tegevus küsida.', 'while True:\n' +
      '    tegevus = input("Kas soovid mängijat lisada (l) või järgmisele tasemele liigutada (j)? ")'),
    new ExerciseHint('Tegevuse põhjal saame otsustada, mida teha. Ei tasu unustada, et mingil juhul peame ka tsükli lõpetama. Siin on selleks ' +
      'tingimuseks, et sisend on midagi muud kui "l" või "j".', 'if tegevus == "l":\n' +
      '    # uus mängija tuleb lisada\n' +
      'elif tegevus == "j":\n' +
      '    # üks mängija tuleb liigutada järgmisele tasemele\n' +
      'else:\n' +
      '    break'),
    new ExerciseHint('Kui tegevus on "l", siis tuleks lisada uus mängija. Selleks pole vaja teha muud kui kutsuda välja vastavat Mängu meetodit.', null),
    new ExerciseHint('Mängija lisamine Mängu isendi kaudu:', 'mäng.lisa_mängija()'),
    new ExerciseHint('Sarnaselt tuleb tegevuse "j" puhul välja kutsuda vastavat Mängu meetodit.', null),
    new ExerciseHint('Mängija järgmisele tasemele liigutamiseks on selleks meetodiks <span class="fst-italic">liiguta_järgmisele_tasemele</span>.',
      'mäng.liiguta_järgmisele_tasemele()'),
    new ExerciseHint('Nii eelmise kui selle harjutuse peale kokku tuleb päris pikk kood:',
      'from random import *\n' +
      '\n' +
      'stiilid = ["metall", "roosa", "rebane", "soomused", "vampiir", "zombie",\n' +
      '           "roheline", "võlur", "karu", "hunt", "libahunt", "nõid",\n' +
      '           "tume", "draakon", "haldjas", "läbipaistev", "näkk", "sinine",\n' +
      '           "tuli", "jää", "madu", "tulnukas", "vesi"]\n' +
      '\n' +
      'class Mängija:\n' +
      '    \n' +
      '    def __init__(self, kasutajanimi, tase):\n' +
      '        self.kasutajanimi = kasutajanimi\n' +
      '        self.tase = tase\n' +
      '    \n' +
      '    def liigu_järgmisele_tasemele(self):\n' +
      '        self.tase += 1\n' +
      '        print(self.kasutajanimi + " liikus tasemele " + str(self.tase))\n' +
      '        \n' +
      'class Supermängija(Mängija):\n' +
      '    \n' +
      '    def __init__(self, kasutajanimi, tase):\n' +
      '        super().__init__(kasutajanimi, tase)\n' +
      '        self.stiilid = set()\n' +
      '        \n' +
      '    def liigu_järgmisele_tasemele(self):\n' +
      '        super().liigu_järgmisele_tasemele()\n' +
      '        uus_stiil = choice(stiilid)\n' +
      '        self.stiilid.add(uus_stiil)\n' +
      '        print(self.kasutajanimi + " sai uue stiili: " + uus_stiil)\n' +
      '        print(self.kasutajanimi + " kõik stiilid: " + str(self.stiilid))\n' +
      '        \n' +
      'class Mäng:\n' +
      '    \n' +
      '    def __init__(self):\n' +
      '        self.mängijad = {}\n' +
      '        \n' +
      '    def lisa_mängija(self):\n' +
      '        kasutajanimi = input("Sisesta kasutajanimi: ")\n' +
      '        if (kasutajanimi in self.mängijad):\n' +
      '            print("Sellise nimega kasutaja on juba olemas. Ei saa lisada...")\n' +
      '        else:\n' +
      '            tase = int(input("Sisesta tase: "))\n' +
      '            if tase >= 1000:\n' +
      '                self.mängijad[kasutajanimi] = Supermängija(kasutajanimi, tase)\n' +
      '            else:\n' +
      '                self.mängijad[kasutajanimi] = Mängija(kasutajanimi, tase)\n' +
      '    \n' +
      '    def liiguta_järgmisele_tasemele(self):\n' +
      '        kasutajanimi = input("Sisesta kasutajanimi: ")\n' +
      '        if (kasutajanimi not in self.mängijad):\n' +
      '            print("Sellise nimega kasutajat pole. Ei saa järgmisele tasemele liigutada...")\n' +
      '        else:\n' +
      '            self.mängijad[kasutajanimi].liigu_järgmisele_tasemele()\n' +
      '\n' +
      'mäng = Mäng()\n' +
      'while True:\n' +
      '    tegevus = input("Kas soovid mängijat lisada (l) või järgmisele tasemele liigutada (j)? ")\n' +
      '    if tegevus == "l":\n' +
      '        mäng.lisa_mängija()\n' +
      '    elif tegevus == "j":\n' +
      '        mäng.liiguta_järgmisele_tasemele()\n' +
      '    else:\n' +
      '        break')];

  classPersonCode = 'class Isik:\n' +
    '    \n' +
    '    def __init__(self, nimi, sünniaasta, elukoht):\n' +
    '        self.nimi = nimi\n' +
    '        self.sünniaasta = sünniaasta\n' +
    '        self.elukoht = elukoht\n' +
    '        \n' +
    '    def tervita(self):\n' +
    '        print("Tere! Minu nimi on " + self.nimi + ".")';
  classStudentStartCode = 'class Õpilane(Isik):\n    # klassi sisu';
  classStudentsNoConstructorCode = 'class Õpilane(Isik):\n' +
    '    \n' +
    '    def mine_kooli(self):\n' +
    '        print(self.nimi + " käis täna koolis.")';
  classStudentNoConstructorObjectsCode = 'isik = Isik("Mait Roosaar", 1987, "Tartu")\n' +
    'õpilane = Õpilane("Keit Viik", 2010, "Viljandi")\n' +
    'isik.tervita()\n' +
    'õpilane.mine_kooli()';
  classStudentNoConstructorOutput = 'Tere! Minu nimi on Mait Roosaar.\n' +
    'Keit Viik käis täna koolis.';
  classStudentConstructorCode = 'class Õpilane(Isik):\n' +
    '    \n' +
    '    def __init__(self, nimi, sünniaasta, elukoht, klass):\n' +
    '        super().__init__(nimi, sünniaasta, elukoht)\n' +
    '        self.klass = klass\n' +
    '    \n' +
    '    def mine_kooli(self):\n' +
    '        print(self.nimi + " käis täna koolis.")\n' +
    '        \n' +
    'õpilane = Õpilane("Keit Viik", 2010, "Viljandi", 5)\n';
  classTeacherCode = 'class Õpetaja(Isik):\n' +
    '    \n' +
    '    def __init__(self, nimi, sünniaasta, elukoht, aine):\n' +
    '        super().__init__(nimi, sünniaasta, elukoht)\n' +
    '        self.aine = aine\n' +
    '        \n' +
    '    def anna_tundi(self, klass):\n' +
    '        print(self.nimi + " andis tundi " + str(klass) + ". klassile.")\n' +
    '\n' +
    'õpetaja = Õpetaja("Marit Saar", 1994, "Paide", "matemaatika")\n' +
    'õpetaja.anna_tundi(4)';
  classTeacherOutput = 'Marit Saar andis tundi 4. klassile.';
  greetingCode = 'isik = Isik("Mait Roosaar", 1987, "Tartu")\n' +
    'õpilane = Õpilane("Keit Viik", 2010, "Viljandi", 5)\n' +
    'õpetaja = Õpetaja("Marit Saar", 1994, "Paide", "matemaatika")\n' +
    '\n' +
    'isik.tervita()\n' +
    'õpilane.tervita()\n' +
    'õpetaja.tervita()';
  greetingOutput = 'Tere! Minu nimi on Mait Roosaar.\n' +
    'Tere! Minu nimi on Keit Viik.\n' +
    'Tere! Minu nimi on Marit Saar.';
  classTeacherOverrideCode = 'class Õpetaja(Isik):\n' +
    '    \n' +
    '    def __init__(self, nimi, sünniaasta, elukoht, aine):\n' +
    '        super().__init__(nimi, sünniaasta, elukoht)\n' +
    '        self.aine = aine\n' +
    '        \n' +
    '    def anna_tundi(self, klass):\n' +
    '        print(self.nimi + " andis tundi " + str(klass) + ". klassile.")\n' +
    '        \n' +
    '    def tervita(self):\n' +
    '        print("Tere! Mina olen " + self.nimi + " ja õpetan ainet " + self.aine + ".")';
  greetingOutputOverride = 'Tere! Minu nimi on Mait Roosaar.\n' +
    'Tere! Minu nimi on Keit Viik.\n' +
    'Tere! Mina olen Marit Saar ja õpetan ainet matemaatika.';
  superHasNoAccessCode = 'isik = Isik("Mait Roosaar", 1987, "Tartu")\n' +
    'isik.mine_kooli()';
  superHasNoAccessOutput = 'Traceback (most recent call last):\n' +
    'File "C:\\Users\\test.py", line 33, in <module>\n' +
    'isik.mine_kooli()\n' +
    'AttributeError: \'Isik\' object has no attribute \'mine_kooli\''
  superHasNoAccessFieldCode = 'isik = Isik("Mait Roosaar", 1987, "Tartu")\n' +
    'print(isik.aine)';
  superHasNoAccessFieldOutput = 'Traceback (most recent call last):\n' +
    'File "C:\\Users\\test.py", line 33, in <module>\n' +
    'print(isik.aine)\n' +
    'AttributeError: \'Isik\' object has no attribute \'aine\'';
  gameExerciseGivenStylesCode = 'stiilid = ["metall", "roosa", "rebane", "soomused", "vampiir", "zombie",\n' +
    '           "roheline", "võlur", "karu", "hunt", "libahunt", "nõid",\n' +
    '           "tume", "draakon", "haldjas", "läbipaistev", "näkk", "sinine",\n' +
    '           "tuli", "jää", "madu", "tulnukas", "vesi"]';
  gameExerciseGivenChoiceCode = 'from random import *\n' +
    '\n' +
    'loositud_stiil = choice(stiilid)';

}
