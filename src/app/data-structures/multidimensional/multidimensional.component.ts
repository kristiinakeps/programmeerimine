import {Component} from '@angular/core';
import {TestAnswer} from "../../models/test-answer.model";
import {CategorizeTestCategory} from "../../models/categorize-test-category.model";
import {CategorizeTestItem} from "../../models/categorize-test-item.model";
import {ExerciseHint} from "../../models/exercise-hint.model";

@Component({
  selector: 'app-multidimensional',
  templateUrl: './multidimensional.component.html',
  styleUrls: ['./multidimensional.component.scss']
})
export class MultidimensionalComponent {

  nestedListTestCode = 'arvud = [[1, 5, 6], [3, 2], [5, 2, 9, 5]]\n' +
    '\n' +
    'for i in range(len(arvud)):\n' +
    '    for j in range(len(arvud[i])):\n' +
    '        if j > i:\n' +
    '            print(arvud[i][j])';
  nestedListTestItems = [new TestAnswer('5, 6, 5', true, 'Õige! Ekraanile väljastakse sellised arvud, mille veeru indeks on suurem kui rea indeks.'),
  new TestAnswer('3, 5, 2', false, 'See oleks õige vastus, kui väljastaksime arve, mille veeru indeks on väiksem kui rea indeks.'),
  new TestAnswer('1, 2, 9', false, 'See vastus oleks õige, kui otsiksime neid arve, mille veeru indeks on võrdne rea indeksiga.'),
  new TestAnswer('Mitte ühtegi', false, 'Mõned arvud siiski väljastatakse ekraanile.'),
  new TestAnswer('5, 6, 3, 5, 2, 5', false, 'See oleks õige vastus, kui otsiksime neid arve, mille veeru indeks on kas väiksem või suurem rea indeksist.')];

  LIST_CATEGORY = 'LIST';
  DICTIONARY_CATEGORY = 'DICTIONARY';
  SET_CATEGORY = 'SET';
  TUPLE_CATEGORY = 'TUPLE';

  listCategory = new CategorizeTestCategory('Järjend', null, this.LIST_CATEGORY, []);
  dictionaryCategory = new CategorizeTestCategory('Sõnastik', null, this.DICTIONARY_CATEGORY, []);
  setCategory = new CategorizeTestCategory('Hulk', null, this.SET_CATEGORY, []);
  tupleCategory = new CategorizeTestCategory('Ennik', null, this.TUPLE_CATEGORY, []);
  testCategories = [this.listCategory, this.dictionaryCategory, this.setCategory, this.tupleCategory];
  testItems = [new CategorizeTestItem('tühi = {}', this.DICTIONARY_CATEGORY),
  new CategorizeTestItem('tühi = set()', this.SET_CATEGORY), new CategorizeTestItem('tühi = []', this.LIST_CATEGORY),
  new CategorizeTestItem('tühi = list()', this.LIST_CATEGORY), new CategorizeTestItem('tühi = dict()', this.DICTIONARY_CATEGORY),
  new CategorizeTestItem('tühi = ()', this.TUPLE_CATEGORY), new CategorizeTestItem('tühi = tuple()', this.TUPLE_CATEGORY),
  new CategorizeTestItem('tühi.append(5)', this.LIST_CATEGORY), new CategorizeTestItem('tühi.add(5)', this.SET_CATEGORY),
  new CategorizeTestItem('tühi["a"] = 5', this.DICTIONARY_CATEGORY), new CategorizeTestItem('täidetud = [1, 4, 5]', this.LIST_CATEGORY),
  new CategorizeTestItem('täidetud = {4, 8}', this.SET_CATEGORY), new CategorizeTestItem('täidetud = (3, 5, 7)', this.TUPLE_CATEGORY),
  new CategorizeTestItem('täidetud = {"a": 5, "b": 4}', this.DICTIONARY_CATEGORY)];
  testCorrectAnswer = 'Tubli! Kõik tegevused leidsid õige andmestruktuuri.';

  gameHints = [new ExerciseHint('Alustame sellest, et mõtleme, mida peame kontrollima võitja selgitamiseks. Kõigepealt peame vaatama' +
    ' maatriksi ridu. Neid on kokku kolm ja igas read on kolm elementi. Kui mõnes ridadest on kolm elementi samasugused, siis on meil võitja. Tasub ka ' +
    'tähele panna, et need kolm elementi peavad olema kas "X" või "O", kui tegemist on tühja sõnega "", siis see tähendab, et sinna pole veel käidud ' +
    'ja võitjat pole. Samamoodi kontrollime ka kolme veergu ja kahte diagonaali.', null),
  new ExerciseHint('Paneme esmalt kirja funktsiooni kirjelduse. Funktsiooni nimi on <span class="fst-italic">võitja</span> ja ' +
    'see võtab argumendiks mängulaua kahemõõtmelise järjendina.', 'def võitja(mäng):\n    # funktsiooni sisu'),
  new ExerciseHint('Järgmiseks peame hakkama kontrolle tegema. Alustame ridadest. Neid on meil kokku kolm ja loogika on nende kõigi puhul ' +
    'sarnane, seega proovime siin kasutada tsüklit. Mugav on kasutada <span class="fst-italic">for</span>-tsüklit koos <span class="fst-italic">range</span>-funktsiooniga. ' +
    '<span class="fst-italic">Range</span>-funktsioonile võib anda argumendiks lihtsalt arvu 3, sest teame, et alati peab täpselt kolm rida olema.',
    'for i in range(3):\n    # kontroll ühe rea jaoks'),
  new ExerciseHint('Ühes reas on kolm elementi ja meil on vaja kontrollida, kas nad on kõik võrdsed. Maatriksist üksiku elemendi kättesaamiseks on ' +
    'meil vaja kahte indeksit. Rea indeksi saame praegu tsüklist ja see on muutujas <span class="fst-italic">i</span>. Veergude indeksid võime ' +
    'käsitsi kontrolli sisse kirjutada.', null),
  new ExerciseHint('Nii saame kontrollida, kas kõik elemendid reas on samad:', 'if mäng[i][0] == mäng[i][1] and mäng[i][1] == mäng[i][2]:\n    # tingimuse sisu'),
  new ExerciseHint('Lisaks sellele, et kontrollida, kas kõik elemendid reas on võrdsed, peame vaatama ka, et nad oleks "X" või "O". Kui me juba ' +
    'teame, et nad kõik on võrdsed, siis piisab sellest kui ainult ühte nendest elementidest kontrollime. Näiteks elementi indeksitega ' +
    '<span class="fst-italic">i</span> ja 0.', null),
  new ExerciseHint('Elemendi kontrolliks võib panna sobivad tähised mõnda andmestruktuuri (hästi sobivad järjend, hulk ja ennik) ja kontrollida ' +
    'elemendi sobivust <span class="fst-italic">in</span> võtmesõna abil', 'if mäng[i][0] == mäng[i][1] and mäng[i][1] == mäng[i][2] and mäng[i][0] in ("X", "O"):\n    # tingimuse sisu'),
  new ExerciseHint('Kuna mängija tähise kontrolli peame ka hiljem tegema, siis selleks, et vältida sama enniku mitu korda kirjutamist, võime selle ' +
    'kuhugi funktsiooni algusesse muutujasse tõsta.', 'mängijad = ("X", "O") # võib olla funktsiooni esimene rida'),
  new ExerciseHint('Siis muudame ka oma kontrolli ära, et see kasutaks äsja loodud muutujat:',
    'if mäng[i][0] == mäng[i][1] and mäng[i][1] == mäng[i][2] and mäng[i][0] in mängijad:\n    # tingimuse sisu'),
  new ExerciseHint('Mida teha kui kirja pandud tingimus on tõene? Siis teame, et meil on võitja olemas ja võime tagastada ta tähise. ' +
    'See ühtlasi lõpetab funktsiooni töö.', 'return mäng[i][0] # vahet pole, millise kontrollitud elemendi tagastame, nad on võrdsed'),
  new ExerciseHint('Ridade kontroll kokku näeb välja selline:', '# kontrollime ridu\n' +
    'for i in range(3):\n' +
    '    if mäng[i][0] == mäng[i][1] and mäng[i][1] == mäng[i][2] and mäng[i][0] in mängijad:\n' +
    '        return mäng[i][0]'),
  new ExerciseHint('Järgmiseks võtame ette veerud. Nende loogika on väga sarnane ridade kontrollimise loogikale, nüüd aga kasutame ' +
    '<span class="fst-italic">for</span>-tsüklit veergude indeksiteks ja ridade indeksid määrame käsitsi kontrollis.', null),
  new ExerciseHint('Veergude kontrollis on siis esimene indeks kindlalt kas 0, 1 või 2 ja teine indeks ehk veeru indeks on muutuja.',
    '# kontrollime veerge\n' +
    'for j in range(3):\n' +
    '    if mäng[0][j] == mäng[1][j] and mäng[1][j] == mäng[2][j] and mäng[0][j] in mängijad:\n' +
    '        return mäng[0][j]'),
  new ExerciseHint('Diagonaalide kontrollid on natuke keerulisemad. Nende puhul on lihtsam panna kummagi jaoks kirja üks kontroll, ilma ' +
    'tsüklit kasutamata. Esimeses diagonaalis (vasakult ülevalt alla paremale) on kolm elementi, iga elemendi rea ja veeru indeks peavad võrdsed olema', null),
  new ExerciseHint('Esimese diagonaali kontroll:', '# kontrollime esimest diagonaali\n' +
    'if mäng[0][0] == mäng[1][1] and mäng[1][1] == mäng[2][2] and mäng[0][0] in mängijad:\n' +
    '    return mäng[0][0]'),
  new ExerciseHint('Teise diagonaali jaoks peame nüüd mõtlema välja, mis indeksitega elemendid seal peaks olema. Keskmine element indeksitega ' +
    '1 ja 1 on ka selles diagonaalis. Parempoolse ülemise elemendi rea indeks on 0 ja veeru indeks 2. Vasakpoolsel alumisel elemendil on vastupidi ' +
    'rea indeks 2 ja veeru indeks 0.', null),
  new ExerciseHint('Seda saab kirja panna nii:', '# kontrollime teist diagonaali\n' +
    'if mäng[0][2] == mäng[1][1] and mäng[1][1] == mäng[2][0] and mäng[0][2] in mängijad:\n' +
    '  return mäng[0][2]'),
  new ExerciseHint('Kui kuskil leidus mõni võitja, siis oleme ta nüüdseks leidnud. Kui võitjat ei olnud, siis pidime tagastama "?". Selle võimegi ' +
    'lisada oma funktsiooni viimaseks reaks', '# võitjat ei leidu\nreturn "?"'),
  new ExerciseHint('Allpool on toodud lõplik funktsioon. Võid seda nüüd erinevate mängulaudadega katsetada.',
    'def võitja(mäng):\n' +
    '    mängijad = ("X", "O")\n' +
    '    # kontrollime ridu\n' +
    '    for i in range(3):\n' +
    '        if mäng[i][0] == mäng[i][1] and mäng[i][1] == mäng[i][2] and mäng[i][0] in mängijad:\n' +
    '            return mäng[i][0]\n' +
    '    \n' +
    '    # kontrollime veerge\n' +
    '    for j in range(3):\n' +
    '        if mäng[0][j] == mäng[1][j] and mäng[1][j] == mäng[2][j] and mäng[0][j] in mängijad:\n' +
    '            return mäng[0][j]   \n' +
    '                \n' +
    '    # kontrollime esimest diagonaali\n' +
    '    if mäng[0][0] == mäng[1][1] and mäng[1][1] == mäng[2][2] and mäng[0][0] in mängijad:\n' +
    '        return mäng[0][0]\n' +
    '    \n' +
    '    # kontrollime teist diagonaali\n' +
    '    if mäng[0][2] == mäng[1][1] and mäng[1][1] == mäng[2][0] and mäng[0][2] in mängijad:\n' +
    '      return mäng[0][2]\n' +
    '         \n' +
    '    # võitjat ei leidu\n' +
    '    return "?"')];

  conversionsCode = 'järjend = [1, 5, 3, 6, 1]\n' +
    'hulk = {4, 6, 7}\n' +
    'ennik = (1, 2)\n' +
    'sõnastik = {"a": 2, "b": 3}\n' +
    'sõne = "maasikas"\n' +
    '\n' +
    'h1 = set(järjend) # {1, 5, 3, 6}\n' +
    'h2 = set(ennik) # {1, 2}\n' +
    'h3 = set(sõnastik) # {\'a\', \'b\'}\n' +
    'h4 = set(sõne) # {\'m\', \'a\', \'s\', \'i\', \'k\'}\n' +
    '\n' +
    'j1 = list(hulk) # [4, 6, 7]\n' +
    'j2 = list(ennik) # [1, 2]\n' +
    'j3 = list(sõnastik) # [\'a\', \'b\']\n' +
    'j4 = list(sõne) # [\'m\', \'a\', \'a\', \'s\', \'i\', \'k\', \'a\', \'s\']\n' +
    '\n' +
    'e1 = tuple(järjend) # (1, 5, 3, 6, 1)\n' +
    'e2 = tuple(hulk) # (4, 6, 7)\n' +
    'e3 = tuple(sõnastik) # (\'a\', \'b\')\n' +
    'e4 = tuple(sõne) # (\'m\', \'a\', \'a\', \'s\', \'i\', \'k\', \'a\', \'s\')\n' +
    '\n' +
    'ennikute_järjend = [(\'a\', 1), (\'b\', 2)]\n' +
    'ennikute_ennik = ((\'c\', 3), (\'d\', 4))\n' +
    'järjendite_järjend = [[4, 5], [5, 6]]\n' +
    'ennikute_hulk = {(\'x\', \'y\'), (\'a\', \'b\')}\n' +
    'hulkade_järjend = [{1, 2}, {3, 4}]\n' +
    '\n' +
    's1 = dict(ennikute_järjend) # {\'a\': 1, \'b\': 2}\n' +
    's2 = dict(ennikute_ennik) # {\'c\': 3, \'d\': 4}\n' +
    's3 = dict(järjendite_järjend) # {4: 5, 5: 6}\n' +
    's4 = dict(ennikute_hulk) # {\'x\': \'y\', \'a\': \'b\'}\n' +
    's5 = dict(hulkade_järjend) # {1: 2, 3: 4}\n';

  nestedListExamples = 'ühemõõtmeline = [1, 5, 9, 3]\n' +
    'kahemõõtmeline = [[1, 2], [3, 4], [5, 6]] # järjendi elementideks on teised järjendid\n' +
    'kolmemõõtmeline = [[[1], [2]], [[3], [4]], [[5], [6]]]\n' +
    'neljamõõtmeline = [[[[1], [2]]], [[[3]]]]\n' +
    '...';
  nestedIndexesExamples = 'kahemõõtmeline = [[1, 2], [3, 4], [5, 6]]\n' +
    'print(kahemõõtmeline[1])\n' +
    'print(kahemõõtmeline[1][0])\n' +
    'print(kahemõõtmeline[0][1])';

  twoDimensionalForLoopCode = 'kahemõõtmeline = [[2, 1], [5, 3], [4, 6]]\n' +
    '\n' +
    'for välimine in kahemõõtmeline:\n' +
    '    for sisemine in välimine:\n' +
    '        print(sisemine)\n';

  twoDimensionalForLoopRangeCode = 'kahemõõtmeline = [[1, 2], [3, 4], [5, 6]]\n' +
    '\n' +
    'for i in range(len(kahemõõtmeline)):\n' +
    '    for j in range(len(kahemõõtmeline[i])):\n' +
    '        print(kahemõõtmeline[i][j])';
  matrixCode = '# esimeses read on elemendid 1, 2 ja 3 ning esimeses veerus elemendid 1, 4 ja 7\n' +
    'maatriks = [[1, 2, 3],\n' +
    '                     [4, 5, 6],\n' +
    '                     [7, 8, 9]]';
  ticTacToeCode = '# trips-traps-trulli seis\n' +
    'maatriks = [["X", "O", ""],\n' +
    '                     ["O", "X", ""],\n' +
    '                     ["", "O", "X"]]';
  ticTacToeDiagonalCode = 'maatriks = [["X", "O", ""],\n' +
    '                     ["O", "X", ""],\n' +
    '                     ["", "O", "X"]]\n' +
    '\n' +
    'for i in range(len(maatriks)):\n' +
    '    for j in range(len(maatriks[i])):\n' +
    '        if i == j:\n' +
    '            print(maatriks[i][j])';
  gradesCode = 'hinded = {"Katrin": [5, 5, 4],\n' +
    '          "Merilin": [3, 5, 4],\n' +
    '          "Karl": [5, 4, 5],\n' +
    '          "Merit": [3, 3, 4]}\n' +
    'ained = ("eesti keel", "matemaatika", "inglise keel")\n' +
    'for õpilane in hinded:\n' +
    '    print(õpilane + " sai järgmised hinded:")\n' +
    '    for i in range(len(ained)):\n' +
    '        print(ained[i] + ": " + str(hinded[õpilane][i]))\n' +
    '    print("-------------------") # see on lihtsalt õpilaste eraldamiseks';
  gradesOutput = 'Katrin sai järgmised hinded:\n' +
    'eesti keel: 5\n' +
    'matemaatika: 5\n' +
    'inglise keel: 4\n' +
    '-------------------\n' +
    'Merilin sai järgmised hinded:\n' +
    'eesti keel: 3\n' +
    'matemaatika: 5\n' +
    'inglise keel: 4\n' +
    '-------------------\n' +
    'Karl sai järgmised hinded:\n' +
    'eesti keel: 5\n' +
    'matemaatika: 4\n' +
    'inglise keel: 5\n' +
    '-------------------\n' +
    'Merit sai järgmised hinded:\n' +
    'eesti keel: 3\n' +
    'matemaatika: 3\n' +
    'inglise keel: 4\n' +
    '-------------------';

  colorsCode = 'lemmikvärvid = [{"roosa", "lilla", "punane"},\n' +
    '                {"lilla", "kollane", "sinine", "roheline", "punane"},\n' +
    '                {"punane", "roosa", "lilla", "must"},\n' +
    '                {"valge", "roheline", "lilla", "punane"}]\n' +
    '\n' +
    'ühised = lemmikvärvid[0]\n' +
    'for värvid in lemmikvärvid:\n' +
    '    ühised = ühised & värvid\n' +
    '\n' +
    'if (len(värvid) == 0): # ühtegi ühist värvi ei leidunud\n' +
    '    print("Pole ühtegi sellist värvi, mis meeldiks kõigile.")\n' +
    'else:\n' +
    '    print("Kõigile õpilastele meeldivad värvid:")\n' +
    '    for värv in ühised:\n' +
    '        print(värv)';
  colorsOutput = 'Kõigile õpilastele meeldivad värvid:\n' +
    'lilla\n' +
    'punane';

  gameOutput = '# tagastab X\n' +
    'print(võitja([["X", "", ""],\n' +
    '              ["O", "X", ""],\n' +
    '              ["", "O", "X"]]))\n' +
    '\n' +
    '# tagastab O\n' +
    'print(võitja([["X", "O", "X"],\n' +
    '              ["", "O", ""],\n' +
    '              ["", "O", "X"]]))\n' +
    '\n' +
    '# tagastab ?\n' +
    'print(võitja([["X", "O", "X"],\n' +
    '              ["", "", ""],\n' +
    '              ["", "O", "X"]]))';
}
