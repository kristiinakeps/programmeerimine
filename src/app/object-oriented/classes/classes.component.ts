import {Component} from '@angular/core';
import {ExerciseHint} from "../../models/exercise-hint.model";
import {TestAnswer} from "../../models/test-answer.model";
import {FillBlankDropdownItem} from "../../models/fill-blank-dropdown-item.model";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {

  basicClassTestCode = 'class Maja:\n' +
    '    \n' +
    '    def __init__(korruseid, ehitusaasta):\n' +
    '        self.korruste_arv = korruseid\n' +
    '        self.ehitusaasta = ehitusaasta';
  basicClassTestItems = [new TestAnswer('Konstruktori esimene argument peab olema <span class="fst-italic">self</span>.', true, 'Mis peaks olema konstruktori esimene argument?'),
    new TestAnswer('Klassi nime lõpus peaksid olema tühjad sulud.', false, 'Sulud järgnevad vaid funktsioonide ja meetodite nimedele.'),
    new TestAnswer('Argumendi nimi peab olema sama, mis isendivälja nimi. Ei saa omistada <span class="fst-italic">korruseid</span> argumenti isendiväljale <span class="fst-italic">korruste_arv</span>.',
      false, 'Argumentide nimed ei pea tingimata olema samad, mis isendiväljade nimed.'),
    new TestAnswer('Konstruktori nimi peaks olema hoopis <span class="fst-italic">__const__.', false, 'Konstruktori nimi on <span class="fst-italic">__init__</span>.'),
  ];

  classFieldsTestCode = 'class Maja:\n' +
    '    \n' +
    '    def __init__(self, korruseid, ehitusaasta, tüüp):\n' +
    '        self.korruste_arv = korruseid\n' +
    '        self.ehitusaasta = ehitusaasta\n' +
    '        self.tüüp = tüüp\n' +
    '        self.müügiks = False\n' +
    '        \n' +
    'esimene = Maja(2, 1995, "eramaja")\n' +
    'teine = Maja(5, 2019, "kortermaja")';
  classFieldTestItemsOptions = ['2', '5', '1995', '2019', '"eramaja"', '"kortermaja"', 'False', 'True', 'Mitte midagi', 'Veateade'];
  classFieldsTestItems = [
    new FillBlankDropdownItem('esimene.korruste_arv', '', '2', this.classFieldTestItemsOptions, this.classFieldTestItemsOptions[0]),
    new FillBlankDropdownItem('teine.tüüp', '', '"kortermaja"', this.classFieldTestItemsOptions, this.classFieldTestItemsOptions[0]),
    new FillBlankDropdownItem('teine.korruseid', '', 'Veateade', this.classFieldTestItemsOptions, this.classFieldTestItemsOptions[0]),
    new FillBlankDropdownItem('teine.ehistusaasta', '', '2019', this.classFieldTestItemsOptions, this.classFieldTestItemsOptions[0]),
    new FillBlankDropdownItem('esimene.müügiks', '', 'False', this.classFieldTestItemsOptions, this.classFieldTestItemsOptions[0])
  ];

  methodsTestCode = 'class Maja:\n' +
    '    \n' +
    '    def __init__(self, korruseid, tüüp, aadress):\n' +
    '        self.korruseid = korruseid\n' +
    '        self.tüüp = tüüp\n' +
    '        self.aadress = aadress\n' +
    '        self.müügiks = False\n' +
    '        \n' +
    '    def pane_müüki(self):\n' +
    '        self.müügiks = True\n' +
    '        print("Müüki tuli " + self.__str__())\n' +
    '        \n' +
    '    def ehita_uus_korrus(self):\n' +
    '        self.korruseid += 1\n' +
    '        \n' +
    '    def __str__(self):\n' +
    '        return str(self.korruseid) + "-korruseline " + self.tüüp + " aadressil " + self.aadress\n' +
    '        \n' +
    'maja = Maja(2, "eramaja", "Püütoni tee 5, Tartu")\n' +
    'maja.pane_müüki()\n' +
    'maja.ehita_uus_korrus()\n' +
    'print(maja)\n' +
    '\n';
  methodsTestItems = [new TestAnswer('Müüki tuli 2-korruseline eramaja aadressil Püütoni tee 5, Tartu', true, 'Mida väljastatakse kui maja pannakse müüki?'),
  new TestAnswer('3-korruseline eramaja aadressil Püütoni tee 5, Tartu', true, 'Mis ilmub ekraanile kui lõpus isend väljastatakse?'),
  new TestAnswer('<__main__.Maja object at 0x03CCED10>', false, 'Kuna klassis on olemas meetod <span class="fst-italic">__str__</span>, ' +
    'siis rakendatakse seda isendi väljastamisel ning tüüp ja mäluaadress ei tohiks ekraanile ilmuda.'),
  new TestAnswer('2-korruseline eramaja aadressil Püütoni tee 5, Tartu', false, 'Mitu korrust on majal isendi väljastamise hetkeks?'),
  new TestAnswer('Müüki tuli 3-korruseline eramaja aadressil Püütoni tee 5, Tartu', false, 'Mitu korrust on majal müükipaneku hetkel?'),
  new TestAnswer('Veateade', false, 'Selles koodis toimib kõik ilusti ja veateadet ei tule.')];

  classExerciseHints = [new ExerciseHint('Alustame klasside loomisest ja võtame kõigepealt klassi Õpilane. Õpilasel peaks olema kolm isendivälja: nimi, ' +
    'sugu ja keskmine hinne, mis kõik konstruktoris väärtustatakse', null),
    new ExerciseHint('Klass Õpilane koos konstruktoriga näeb välja selline:', 'class Õpilane:\n' +
      '    \n' +
      '    def __init__(self, nimi, sugu, keskmine_hinne):\n' +
      '        self.nimi = nimi;\n' +
      '        self.sugu = sugu;\n' +
      '        self.keskmine_hinne = keskmine_hinne'),
    new ExerciseHint('Lisaks konstruktorile peaksime lisama ka meetodi <span class="fst-italic">__str__</span>. See meetod peaks tagastama õpilase andmed ' +
      'sõnena sellisel kujul nagu programmi väljundi näites', null),
    new ExerciseHint('Rohkem argumente peale <span class="fst-italic">self</span>\'i see meetod ei võta.',
      'def __str__(self):\n' +
      '    return self.nimi + " (" + self.sugu + "), keskmine hinne: " + str(self.keskmine_hinne)'),
    new ExerciseHint('Sellega peaks meil klass Õpilane valmis olema. Liigume nüüd klassi Klass juurde. Sellel klassil peaks olema kaks isendivälja. Üks klassi numbri ' +
      'jaoks, mis antakse ka konstruktorile argumendina ette, ja teine õpilaste jaoks, mis on algselt lihtsalt tühi järjend.', null),
    new ExerciseHint('Seda võib kirja panna nii:', 'class Klass:\n' +
      '    \n' +
      '    def __init__(self, number):\n' +
      '        self.number = number\n' +
      '        self.õpilased = []'),
    new ExerciseHint('Lisaks konstruktorile peaks sellel klassile olema veel kaks isendimeetodit. Võtame kõigepealt meetodi <span class="fst-italic">lisa_õpilane()</span>,' +
      'mis võtab argumendiks õpilase ja lisab selle vastavale isendiväljale järjendisse.', null),
    new ExerciseHint('Kuna tegemist on isendimeetodiga, siis peab esimene argument olema jällegi <span class="fst-italic">self</span>. Teine argument on õpilase isend. ' +
      'Järjendisse lisamiseks kasutame meetodit <span class="fst-italic">append</span>.',
      'def lisa_õpilane(self, õpilane):\n' +
      '    self.õpilased.append(õpilane)'),
    new ExerciseHint('Teine meetod on nimega <span class="fst-italic">kuva()</span> ja see meetod peaks väljastama kõigepealt info, mis klassi õpilastega on tegu ja ' +
      'seejärel väljastama kõik klassi õpilased.', null),
    new ExerciseHint('Õpilaste väljastamiseks sobib hästi <span class="fst-italic">for</span>-tsükkel. Lõpus võime lisada ka tühja <span class="fst-italic">print</span>-käsu, ' +
      'et tekidada lõppu veel üks tühi rida. Nii on hiljem väljund paremini loetav.', 'def kuva(self):\n' +
      '    print(self.number + " klassis õpivad:")\n' +
      '    for õpilane in self.õpilased:\n' +
      '        print(õpilane)\n' +
      '    print() # lisame paremaks loetavuseks tühja rea'),
    new ExerciseHint('Sellega peaks meie klassid valmis olema. Nüüd on vaja kokku panna põhiprogramm. Esiteks tasub mõelda, et kus me hakkame loodud klasside isendeid ' +
      'hoidma? ', null),
    new ExerciseHint('Selleks sobiks hästi sõnastik, kus võtmed on klasside numbrid ja väärtused on vastavad klasside isendid. Siis kui uut õpilast lisame, saame ' +
      'kontrollida, kas sellise klassinumbriga klass on juba sõnastikus või mitte. Kui ei ole, siis loome Klassi isendi ja lisame selle sõnastikku. Seejärel saame ' +
      'ka õpilase klassi lisada.', null),
    new ExerciseHint('Alustamegi sellest, et loome klasside jaoks tühja sõnastiku. Seejärel võime faili avada ja hakata sealt ridu lugema. Määrame failile ka ' +
      'kodeeringu, kuna meie failis võib olla täpitähti.', 'klassid = {} \n' +
      'fail = open("õpilased.txt", encoding="utf8")\n' +
      'for rida in fail:\n' +
      '    # tsükli sisu\n' +
      'fail.close()'),
    new ExerciseHint('Tsükli sees tuleb rida kõigepealt tükeldada. Saadud järjendi võime salvestada muutujatesse ja siis indeksitega sealt väärtused võtta, kuid ' +
      'võime ka kasutada ennikute juures õpitud kiiremat varianti, kus saab mitu väärtust korraga mitmesse muutujasse salvestada. Tasub ka meeles pidada, et rea ' +
      'lõpus on reavahetusmärk, mis tuleks eemaldada.', null),
    new ExerciseHint('Failireast erinevad andmed saab kätte näiteks nii:', 'nimi, sugu, keskmine_hinne, klassi_number = rida.strip().split(",")'),
    new ExerciseHint('Nende andmete põhjal saame juba Õpilase isendi ära luua ja kuhugi muutujasse salvestada.', null),
    new ExerciseHint('Uue Õpilase isendi loomine failist loetud andmete põhjal:', 'õpilane = Õpilane(nimi, sugu, float(keskmine_hinne))'),
    new ExerciseHint('Nüüd tulebki vaadata, millisesse klassi õpilane paigutada ja kas selline klassi isend on juba olemas. Võibki alustada kontrollist, kas' +
      ' klassinumbri võti on sõnastikus. Kui ei ole, siis loome uue Klassi isendi ja lisame selle sõnastikku.', null),
    new ExerciseHint('Siin ongi tegelikult lihtsam kontrollida, kas võtit pole sõnastikus, sest just sellisel juhul tahame sinna uue võti-väärtus paari lisada.',
      'if klassi_number not in klassid:\n' +
      '        klassid[klassi_number] = Klass(klassi_number) # loome uue Klassi isendi ja lisame ta kohe sõnastikku'),
    new ExerciseHint('Nüüd me teame, et failist loetud klassi numbrile vastav kirje peab sõnasikus olemas olema. Me tahame selle sealt kätte saada ja Klassi ' +
      'isendile lisada uue õpilase.', null),
    new ExerciseHint('Küsime sõnastikust klassi numbrile vastava Klassi isendi ja rakendame selle meetodit <span class="fst-italic">lisa_õpilane()</span>.',
      'klassid[klassi_number].lisa_õpilane(õpilane)'),
    new ExerciseHint('Sellega saamegi kõik õpilased klassidesse ära jaotatud. Lõpus jääb veel üle klasside andmed väljastada. Selleks saame tsüklis kõik ' +
      'klassid läbi käia ja kutsuda välja nende meetodit <span class="fst-italic">kuva()</span>.', null),
    new ExerciseHint('Näiteks võime kasutada tavalist <span class="fst-italic">for</span>-tsüklit, mis käib läbi kõik sõnastiku võtmed. Võtme abil saame kätte ka väärtuse.',
      'for klassi_number in klassid:\n' +
      '    klassid[klassi_number].kuva() # kutsume välja isendimeetodit'),
    new ExerciseHint('Kogu kood näeb lõpuks välja selline:',
      'class Õpilane:\n' +
      '    \n' +
      '    def __init__(self, nimi, sugu, keskmine_hinne):\n' +
      '        self.nimi = nimi;\n' +
      '        self.sugu = sugu;\n' +
      '        self.keskmine_hinne = keskmine_hinne\n' +
      '    \n' +
      '    def __str__(self):\n' +
      '        return self.nimi + " (" + self.sugu + "), keskmine hinne: " + str(self.keskmine_hinne)\n' +
      '    \n' +
      '    \n' +
      'class Klass:\n' +
      '    \n' +
      '    def __init__(self, number):\n' +
      '        self.number = number\n' +
      '        self.õpilased = []\n' +
      '        \n' +
      '    def lisa_õpilane(self, õpilane):\n' +
      '        self.õpilased.append(õpilane)\n' +
      '    \n' +
      '    def kuva(self):\n' +
      '        print(self.number + " klassis õpivad:")\n' +
      '        for õpilane in self.õpilased:\n' +
      '            print(õpilane)\n' +
      '        print() # lisame paremaks loetavuseks tühja rea\n' +
      ' \n' +
      'klassid = {} \n' +
      'fail = open("õpilased.txt", encoding="utf8")\n' +
      'for rida in fail:\n' +
      '    nimi, sugu, keskmine_hinne, klassi_number = rida.strip().split(",")\n' +
      '    õpilane = Õpilane(nimi, sugu, float(keskmine_hinne))\n' +
      '    if klassi_number not in klassid:\n' +
      '        klassid[klassi_number] = Klass(klassi_number)\n' +
      '    klassid[klassi_number].lisa_õpilane(õpilane)\n' +
      'fail.close()\n' +
      'for klassi_number in klassid:\n' +
      '    klassid[klassi_number].kuva()\n')];

  rccExerciseHints = [new ExerciseHint('Alustada võime jällegi klassi kirjutamisest. Konstruktor peaks võtma kaks argumenti &ndash; ' +
    'maksimaalse sõiduulatuse ja laadimiskiiruse. Konstruktori sees tuleb need omistada vastavatele isendiväljadele. Maksimaalne sõiduulatus tuleks ' +
    'omistada ka allesjäänud sõiduulatuse isendiväljale.', null),
  new ExerciseHint('Klassi ja konstruktori saame kirja panna järgmiselt. Kuigi me tahame konstruktorisse isendiväljade määramiseks anda ainult ' +
    'kahte argumenti, siis ei tasu unustada, et lisaks tuleb esimese argumendina anda konstruktorile ka <span class="fst-italic">self</span>.',
    'class Puldiauto:\n' +
    '    \n' +
    '    def __init__(self, maksimaalne, laadimiskiirus):\n' +
    '        self.maksimaalne = maksimaalne\n' +
    '        self.allesjäänud = maksimaalne\n' +
    '        self.laadimiskiirus = laadimiskiirus'),
  new ExerciseHint('Järgmiseks võtame ette isendimeetodid. Esimene neist on meetod nimega <span class="fst-italic">sõida()</span>. ' +
    'See meetod peaks argumendiks võtma vahemaa meetrites ja meetodi sees tuleks allesjäänud sõiduulatust selle võrra vähendada. Kuid ' +
    'negatiivseks ei saa allesjäänud sõiduulatus minna. Peaks ka väljastama, mitu meetrit sõideti.', null),
  new ExerciseHint('Tingimuslausega saame kontrollida, kas etteantud vahemaa on suurem kui allesjäänud sõiduulatus. Kui on, siis ' +
    'järelikult saab meil aku enne tühjaks, kui jõuame soovitud vahemaa ära sõita. Seega väljastame kasutajale, et aku sai tühjaks ja palju ' +
    'jõudsime ära sõita (allesjäänud sõiduulatus). Seejärel paneme sõiduulatuse nulliks. Kui soovitud vahemaa oli väiksem, siis saame ' +
    'kasutajale lihtsalt teada anda, et sõitsime nii palju ja vähendada allesjäänud sõiduulatust selle võrra.', null),
  new ExerciseHint('Üks variant meetodi <span class="fst-italic">sõida()</span> kirjutamiseks:',
    'def sõida(self, meetrit):\n' +
    '    if meetrit > self.allesjäänud:\n' +
    '        print("Aku sai enne tühjaks, sõitsin " + str(self.allesjäänud) + " meetrit.")\n' +
    '        self.allesjäänud = 0\n' +
    '    else:\n' +
    '        print("Sõitsin " + str(meetrit) + " meetrit.")\n' +
    '        self.allesjäänud -= meetrit'),
  new ExerciseHint('Nüüd on meil jäänud veel meetod <span class="fst-italic">lae()</span>. See meetod võtab argumendiks minutid ja ' +
    'peab arvutama, mitu meetrit sellise laadimisajaga juurde saame. Allesjäänud sõiduulatust tuleb selle võrra suurendada, ' +
    'kuid üle maksimaalse sõiduulatuse me minna ei saa. Kasutajale peaks ka teada andma, mitu meetrit ta laadimise lõppedes sõita saab.', null),
  new ExerciseHint('Kõigepealt võime siin teha ära teisenduse laadimisminutitest saadud meetriteks. Selleks korrutame minutid laadimiskiirusega. ' +
    'Seejärel peame kontrollima, kui lisaksime saadud meetrid allesjäänud sõiduulatusele, kas me siis ületame maksimaalset sõiduulatust? Kui jah, ' +
    'siis muudame allesjäänud sõiduulatuse lihtsalt võrdseks maksimaalse sõiduulatusega. Kui me ei ületa maksimaalset sõiduulatust, siis võime lihtsalt ' +
    'liita meetrid allesjäänud sõiduulatusele. Lõpus väljastame allesjäänud sõiduulatuse ka kasutajale.', null),
  new ExerciseHint('Meetod <span class="fst-italic">lae()</span> võib välja näha selline:',
    'def lae(self, minutit):\n' +
    '    meetreid = minutit * self.laadimiskiirus\n' +
    '    if self.allesjäänud + meetreid > self.maksimaalne:\n' +
    '        self.allesjäänud = self.maksimaalne\n' +
    '    else:\n' +
    '        self.allesjäänud += meetreid\n' +
    '    print("Nüüd saad sõita kuni " + str(self.allesjäänud) + " meetrit.")'),
  new ExerciseHint('Nüüd on meil klass valmis ja vaja minna põhiprogrammi juurde. Alustame sellest, et küsime kasutajalt ' +
    'puldiauto loomiseks vajalikku maksimaalset sõiduulatust ja laadimiskiirust.', null),
  new ExerciseHint('Tsaub ka mõelda, mis tüüpi need võiks olla. Kindlasti mingid arvud, kas ujukomaarvud või täisarvud &ndash; seda ' +
    'saab igaüks ise otsustada.', 'maksimaalne = int(input("Sisesta puldiauto maksimaalne sõiduulatus: "))\n' +
    'laadimiskiirus = int(input("Sisesta puldiauto laadimiskiirus: "))'),
  new ExerciseHint('Seejärel on vaja luua puldiauto isend. Selleks anname Puldiauto klassi konstruktorile ette sobivad argumendid ja ' +
    'salvestame loodud isendi muutujasse.', null),
  new ExerciseHint('Konstruktorile anname argumentideks kõigepealt maksimaalse sõiduulatuse ja siis laadimiskiiruse. Argumenti ' +
    '<span class="fst-italic">self</span> me käsitsi lisama ei pea.', 'puldiauto = Puldiauto(maksimaalne, laadimiskiirus)'),
  new ExerciseHint('Seejärel tuleb mõelda, millist tsükli konstruktsiooni tahame kasutada. Kuna korduste arv pole määratud, siis ' +
    'sobib siia <span class="fst-italic">while</span>-tsükkel. Tsüklis peame kasutajalt küsima tegevust ja tsükkel lõppeb, kui kasutaja sisestab ' +
    '"l".', null),
  new ExerciseHint('Me teeme siin läbi <span class="fst-italic"> while True</span> tsükli näite. Tsükli sees küsime esimese asjana kasutajalt tegevust ' +
    'ja lisame ka kontrolli, et kui see on "l", siis katkestame tsükli.', 'while True:\n' +
    '    tegevus = input("Kas soovid sõita (s), akut laadida (a) või lõpetada (l)? ")\n' +
    '    if tegevus == "l":\n' +
    '        break'),
  new ExerciseHint('Tegevus võib olla ka "s" või "a". Kirjutame järgmiseks juhu kui see on "s". Siis peaksime küsima kasutajalt ka ' +
    'sõitmiseks soovitud vahemaad ja kutsuma välja Puldiauto meetodit <span class="fst-italic">sõida()</span>.', null),
  new ExerciseHint('Selleks lisame uue haru oma tingimuslause konstruktsiooni. Kasutajalt küsitud meetrite arv tuleks ka ' +
    'arvuks teisendada.', 'elif tegevus == "s":\n' +
    '    meetreid = int(input("Sisesta, mitu meetrit soovid sõita: "))\n' +
    '    puldiauto.sõida(meetreid)'),
  new ExerciseHint('Viimaseks on jäänud tegevus "a". Selle tegevuse puhul tahame kasutajalt küsida laadimisminutite arvu ja kutsuda ' +
    'välja Puldiauto meetodit <span class="fst-italic">lae()</span>.', null),
  new ExerciseHint('Sarnaselt eelmisele tegevusele, saame lisada uue tingimuslause haru.', 'elif tegevus == "a":\n' +
    '    minuteid = int(input("Sisesta, mitu minutit akut laed: "))\n' +
    '    puldiauto.lae(minuteid)'),
  new ExerciseHint('Sellega peakski meie kood valmis olema ja lõpptulemus näeb välja selline:',
    'class Puldiauto:\n' +
    '    \n' +
    '    def __init__(self, maksimaalne, laadimiskiirus):\n' +
    '        self.maksimaalne = maksimaalne\n' +
    '        self.allesjäänud = maksimaalne\n' +
    '        self.laadimiskiirus = laadimiskiirus\n' +
    '        \n' +
    '    def sõida(self, meetrit):\n' +
    '        if meetrit > self.allesjäänud:\n' +
    '            print("Aku sai enne tühjaks, sõitsin " + str(self.allesjäänud) + " meetrit.")\n' +
    '            self.allesjäänud = 0\n' +
    '        else:\n' +
    '            print("Sõitsin " + str(meetrit) + " meetrit.")\n' +
    '            self.allesjäänud -= meetrit\n' +
    '    \n' +
    '    def lae(self, minutit):\n' +
    '        meetreid = minutit * self.laadimiskiirus\n' +
    '        if self.allesjäänud + meetreid > self.maksimaalne:\n' +
    '            self.allesjäänud = self.maksimaalne\n' +
    '        else:\n' +
    '            self.allesjäänud += meetreid\n' +
    '        print("Nüüd saad sõita kuni " + str(self.allesjäänud) + " meetrit.")\n' +
    '\n' +
    'maksimaalne = int(input("Sisesta puldiauto maksimaalne sõiduulatus: "))\n' +
    'laadimiskiirus = int(input("Sisesta puldiauto laadimiskiirus: "))\n' +
    'puldiauto = Puldiauto(maksimaalne, laadimiskiirus)\n' +
    '\n' +
    'while True:\n' +
    '    tegevus = input("Kas soovid sõita (s), akut laadida (a) või lõpetada (l)? ")\n' +
    '    if tegevus == "l":\n' +
    '        break\n' +
    '    elif tegevus == "s":\n' +
    '        meetreid = int(input("Sisesta, mitu meetrit soovid sõita: "))\n' +
    '        puldiauto.sõida(meetreid)\n' +
    '    elif tegevus == "a":\n' +
    '        minuteid = int(input("Sisesta, mitu minutit akut laed: "))\n' +
    '        puldiauto.lae(minuteid)\n')];

  classStartCode = 'class Koer:\n    # klassi sisu';
  basicDogClassCode = 'class Koer:\n' +
    '    def __init__(self, tõug, nimi, sünniaasta):\n' +
    '        self.tõug = tõug\n' +
    '        self.nimi = nimi\n' +
    '        self.sünniaasta = sünniaasta';
  dogClassWithObjectsCode = 'class Koer:\n' +
    '    def __init__(self, tõug, nimi, sünniaasta):\n' +
    '        self.tõug = tõug\n' +
    '        self.nimi = nimi\n' +
    '        self.sünniaasta = sünniaasta\n' +
    '    \n' +
    'taks = Koer("taks", "Paula", 2015)\n' +
    'hundikoer = Koer("hundikoer", "Pallike", 2019)\n' +
    '\n' +
    'print(taks.tõug)\n' +
    'print(taks.sünniaasta)\n' +
    'print(hundikoer.nimi)\n' +
    'print(hundikoer.sünniaasta)';
  dogClassWithObjectsOutput = 'taks\n' +
    '2015\n' +
    'Pallike\n' +
    '2019';
  dogClassDefaultFieldCode = 'class Koer:\n' +
    '    def __init__(self, tõug, nimi, sünniaasta):\n' +
    '        self.tõug = tõug\n' +
    '        self.nimi = nimi\n' +
    '        self.sünniaasta = sünniaasta\n' +
    '        self.häälitsus = "Auh!"\n' +
    '    \n' +
    'taks = Koer("taks", "Paula", 2015)\n' +
    'hundikoer = Koer("hundikoer", "Pallike", 2019)\n' +
    '\n' +
    'print(taks.tõug)\n' +
    'print(taks.häälitsus)\n' +
    'print(hundikoer.tõug)\n' +
    'print(hundikoer.häälitsus)';
  dogClassDefaultFieldOutput = 'taks\n' +
    'Auh!\n' +
    'hundikoer\n' +
    'Auh!';
  dogClassMethodsCode = 'class Koer:\n' +
    '    def __init__(self, tõug, nimi, sünniaasta):\n' +
    '        self.tõug = tõug\n' +
    '        self.nimi = nimi\n' +
    '        self.sünniaasta = sünniaasta\n' +
    '        self.häälitsus = "Auh!"\n' +
    '    \n' +
    '    def tervita(self):\n' +
    '        print("Tere! Mina olen " + self.tõug + " nimega " + self.nimi + ".")\n' +
    '        \n' +
    '    def täida_käsklust(self, käsklus):\n' +
    '        print(self.nimi + " täidab käsklust \\"" + käsklus + "\\"!")\n' +
    '        \n' +
    '    def vanus(self, aasta):\n' +
    '        return aasta - self.sünniaasta\n' +
    '    \n' +
    'taks = Koer("taks", "Paula", 2015)\n' +
    'hundikoer = Koer("hundikoer", "Pallike", 2019)\n' +
    '\n' +
    'taks.tervita()\n' +
    'taks.täida_käsklust("istu")\n' +
    'hundikoer.täida_käsklust("lama")\n' +
    'print(hundikoer.vanus(2023))';
  dogClassMethodsOutput = 'Tere! Mina olen taks nimega Paula.\n' +
    'Paula täidab käsklust "istu"!\n' +
    'Pallike täidab käsklust "lama"!\n' +
    '4';
  dateTimeYearCode = 'from datetime import *\n' +
    '\n' +
    'aasta = date.today().year';
  dogNoStrCode = 'taks = Koer("taks", "Paula", 2015)\n' +
    'hundikoer = Koer("hundikoer", "Pallike", 2019)\n' +
    'print(taks)\n' +
    'print(hundikoer)';
  dogNoStrOutput = '<__main__.Koer object at 0x037ED290>\n' +
    '<__main__.Koer object at 0x037ED2B0>';
  dogStrCode = 'class Koer:\n' +
    '    \n' +
    '    def __init__(self, tõug, nimi, sünniaasta):\n' +
    '        self.tõug = tõug\n' +
    '        self.nimi = nimi\n' +
    '        self.sünniaasta = sünniaasta\n' +
    '        self.häälitsus = "Auh!"\n' +
    '    \n' +
    '    def tervita(self):\n' +
    '        print("Tere! Mina olen " + self.tõug + " nimega " + self.nimi + ".")\n' +
    '        \n' +
    '    def täida_käsklust(self, käsklus):\n' +
    '        print(self.nimi + " täidab käsklust \\"" + käsklus + "\\"!")\n' +
    '        \n' +
    '    def vanus(self, aasta):\n' +
    '        return aasta - self.sünniaasta\n' +
    '    \n' +
    '    def __str__(self):\n' +
    '        return self.tõug.capitalize() + " " + self.nimi + ", sündinud " + str(self.sünniaasta) + ", ütleb \\"" + self.häälitsus + "\\""\n' +
    '    \n' +
    'taks = Koer("taks", "Paula", 2015)\n' +
    'hundikoer = Koer("hundikoer", "Pallike", 2019)\n' +
    'print(taks)\n' +
    'print(hundikoer)\n';
  dogStrOutput = 'Taks Paula, sündinud 2015, ütleb "Auh!"\n' +
    'Hundikoer Pallike, sündinud 2019, ütleb "Auh!"';
  objectsInDataStructuresCode = 'taks = Koer("taks", "Paula", 2015)\n' +
    'hundikoer = Koer("hundikoer", "Pallike", 2019)\n' +
    'lambakoer = Koer("lambakoer", "Moona", 2014)\n' +
    '\n' +
    'koerad = [taks, hundikoer]\n' +
    'koerad.append(lambakoer)\n' +
    'koerad[1].tervita()\n' +
    'for koer in koerad:\n' +
    '    print(koer)\n' +
    '    \n' +
    'koerad_hulgas = {taks, hundikoer, lambakoer}\n' +
    'koerad_ennikus = (taks, hundikoer, lambakoer)\n' +
    '\n' +
    'elukohad = {taks: "maja", hundikoer: "korter"} # siin tegelikult võiks elukoha muuta uueks isendiväljaks ja hoida seda infot isendi küljes\n' +
    'suuruste_järgi = {"väike": [taks], "suur": [hundikoer, lambakoer]} # suurus võib samuti olla isendiväli\n' +
    '\n';
  objectsInDataStructuresOutput = 'Tere! Mina olen hundikoer nimega Pallike.\n' +
    'Taks Paula, sündinud 2015, ütleb "Auh!"\n' +
    'Hundikoer Pallike, sündinud 2019, ütleb "Auh!"\n' +
    'Lambakoer Moona, sündinud 2014, ütleb "Auh!"';
  setExampleCode = 'taks = Koer("taks", "Paula", 2015)\n' +
    'hundikoer = Koer("hundikoer", "Pallike", 2019)\n' +
    'lambakoer = Koer("lambakoer", "Moona", 2014)\n' +
    '    \n' +
    'koerad_hulgas = {taks, hundikoer, lambakoer, taks}\n' +
    'for koer in koerad_hulgas:\n' +
    '    print(koer)';
  setExampleOutput = 'Taks Paula, sündinud 2015, ütleb "Auh!"\n' +
    'Lambakoer Moona, sündinud 2014, ütleb "Auh!"\n' +
    'Hundikoer Pallike, sündinud 2019, ütleb "Auh!"';
  setExampleExtraCode = 'taks = Koer("taks", "Paula", 2015)\n' +
    'teine_taks = Koer("taks", "Paula", 2015)\n' +
    'hundikoer = Koer("hundikoer", "Pallike", 2019)\n' +
    'lambakoer = Koer("lambakoer", "Moona", 2014)\n' +
    '    \n' +
    'koerad_hulgas = {taks, hundikoer, lambakoer, teine_taks}\n' +
    'for koer in koerad_hulgas:\n' +
    '    print(koer)';
  setExampleExtraOutput = 'Hundikoer Pallike, sündinud 2019, ütleb "Auh!"\n' +
    'Taks Paula, sündinud 2015, ütleb "Auh!"\n' +
    'Taks Paula, sündinud 2015, ütleb "Auh!"\n' +
    'Lambakoer Moona, sündinud 2014, ütleb "Auh!"';
  classExerciseFile = 'Mari Metson,N,4.9,6C\n' +
    'Kalle Sarapuu,M,3.5,5A\n' +
    'Signe Aaslaid,N,4.2,5A\n' +
    'Peeter Pohl,M,3.9,6A\n' +
    'Mihkel Eha,M,4.8,5C\n' +
    'Arne Tarvastu,M,4.9,5C\n' +
    'Karin Uuspõld,N,4.0,6C';
  classExerciseOutput = '6C klassis õpivad:\n' +
    'Mari Metson (N), keskmine hinne: 4.9\n' +
    'Karin Uuspõld (N), keskmine hinne: 4.0\n' +
    '\n' +
    '5A klassis õpivad:\n' +
    'Kalle Sarapuu (M), keskmine hinne: 3.5\n' +
    'Signe Aaslaid (N), keskmine hinne: 4.2\n' +
    '\n' +
    '6A klassis õpivad:\n' +
    'Peeter Pohl (M), keskmine hinne: 3.9\n' +
    '\n' +
    '5C klassis õpivad:\n' +
    'Mihkel Eha (M), keskmine hinne: 4.8\n' +
    'Arne Tarvastu (M), keskmine hinne: 4.9';


}
