import {Component} from '@angular/core';
import {TestAnswer} from "../../models/test-answer.model";
import {ExerciseHint} from "../../models/exercise-hint.model";
import {CategorizeTestCategory} from "../../models/categorize-test-category.model";
import {CategorizeTestItem} from "../../models/categorize-test-item.model";

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']
})
export class FunctionsComponent {

  printAdditionNoArgumentsTestCode = 'def liida():\n' +
    '    a = 2\n' +
    '    b = 3\n' +
    '    print(a + b)\n' +
    '\n' +
    'liida()';
  printAdditionNoArgumentsTestAnswers = [new TestAnswer('2', false, 'Väljastatakse liitmistehte a + b tulemus.'),
    new TestAnswer('3', false, 'Väljastatakse liitmistehte a + b tulemus.'),
    new TestAnswer('5', true, 'Õige, a + b annab tulemuseks 5, mis väljastatakse ekraanile.'),
    new TestAnswer('23', false, 'See oleks õige, kui a ja b väärtused oleksid sõned.'),
    new TestAnswer('Mitte midagi', false, 'See funktsioon siiski väljastab midagi ja põhiprogrammis kutsutakse funktsiooni välja.')];

  printSubtractionArgumentsTestCode = 'def lahuta(esimene, teine):\n' +
    '    print(teine - esimene)\n' +
    '\n' +
    'lahuta(3, 7)';
  printSubtractionArgumentsTestAnswers = [new TestAnswer('-4', false, 'Kontrolli üle, mis järjekorras on argumendid funktsiooni kirjelduses ja mis järjekorras lahtamistehtes.'),
  new TestAnswer('3', false, 'Lahtuamistehte tulemus peaks olema natuke teine.'),
  new TestAnswer('4', true, 'Just, lahutamistehte tulemus on 4 ja see väljastatakse ekraanile.'),
  new TestAnswer('10', false, 'See oleks õige vastus liitmistehte puhul.'),
  new TestAnswer('Mitte midagi', false, 'Midagi siiski ekraanile väljastatakse.')]

  FUN_2_ARG_RETURN = 'FUN_2_ARG_RETURN';
  FUN_2_ARG_PRINT = 'FUN_2_ARG_PRINT';
  FUN_1_ARG_RETURN = 'FUN_1_ARG_RETURN';

  test2ArgReturn = new CategorizeTestCategory(null, 'def korruta(a, b):\n' +
    '    return a * b', this.FUN_2_ARG_RETURN, []);
  test2ArgPrint = new CategorizeTestCategory(null, 'def korruta(a, b):\n' +
    '    print(a * b)', this.FUN_2_ARG_PRINT, []);
  test1ArgReturn = new CategorizeTestCategory(null, 'def korruta(a):\n' +
    '    return a * 10', this.FUN_1_ARG_RETURN, []);
  testCategories = [this.test2ArgReturn, this.test2ArgPrint, this.test1ArgReturn];
  testItems = [new CategorizeTestItem('korruta(3, 5) väljastab ekraanile 15', this.FUN_2_ARG_PRINT),
  new CategorizeTestItem('korruta(3, 5) ei väljasta midagi', this.FUN_2_ARG_RETURN),
  new CategorizeTestItem('print(korruta(3, 5)) väljastab 15 ja None', this.FUN_2_ARG_PRINT),
  new CategorizeTestItem('print(korruta(3, 5) + 7) väljastab ekraanile 22', this.FUN_2_ARG_RETURN),
  new CategorizeTestItem('print(korruta(3, 5) + 7) väljastab vea, sest None- ja int-tüüpi väärtuseid ei saa kokku liita', this.FUN_2_ARG_PRINT),
  new CategorizeTestItem('print(korruta(3)) väljastab ekraanile 30', this.FUN_1_ARG_RETURN),
  new CategorizeTestItem('print(korruta(3, 5) + 7) väljastab vea, sest argumentide arv pole õige', this.FUN_1_ARG_RETURN),
  new CategorizeTestItem('korruta(3) ei väljasta midagi', this.FUN_1_ARG_RETURN)];
  testCorrectAnswer = 'Tubli! Kõik väärtused on õigete andmetüüpide tulpades!';

  pizzaHints = [new ExerciseHint('Meil on juba olemas funktsioon, mis arvutab pitsataigna koguse grammides ühe etteantud läbimõõduga pitsa jaoks. ' +
    'Nüüd tahame, et saaksime anda oma funktsioonile ette ka pitsade arvu. Selleks tuleb lisada funktsioonile uus argument.', null),
  new ExerciseHint('Uue argumendi nimeks võime panna näiteks <span class="fst-italic">mitu</span>.',
    'def  pitsatainas(läbimõõt, mitu):\n    # siia tuleb funktsiooni sisu'),
  new ExerciseHint('Nüüd saame uut argumenti funktsiooni sees kasutada. Selleks, et ühe pitsa taignakoguse asemel tagastada ' +
    'etteantud arvu pitsade jaoks vajalik taignakogus, tuleb üksiku pitsa kogus korrutada argumendiks antud pitsade arvuga.', null),
  new ExerciseHint('Õige koguse saame arvutada nüüd nii:', 'taigna_kogus = round(pindala * 2.3 * mitu, 1)'),
  new ExerciseHint('Järgmise sammuna võiks kasutajalt kõikide suuruste jaoks küsida, mitu sellist pitsat ta plaanib teha.', null),
  new ExerciseHint('Selleks kasutame funktsiooni <span class="fst-italic">input</span>. Näiteks 20 cm läbimõõduga pitsade arvu küsimine võiks välja näha nii:',
    'mitu_20 = int(input("Mitu 20 cm läbimõõduga pitsat plaanid täna teha? "))'),
  new ExerciseHint('Nüüd saame leida 20 cm läbimõõduga pitsade jaoks kuluva koguse kutsudes välja oma täiendatud funktsiooni:',
    'kogus_20 = pitsatainas(20, mitu_20) # funktsiooni väljakutse'),
  new ExerciseHint('Sarnaselt saame küsida ka 28 ja 38 cm läbimõõduga pitsade arvu ja arvutada kogused.', null),
  new ExerciseHint('Viimaks tuleb nüüd saadud kogused kokku liita, teisendada grammideks ja ümardada. Kuna ühes kilogrammis on 1000 grammi, siis ' +
    'saame oma taignakoguse teisendada kilogrammidesse kui jagame selle 1000-ga. Ümardamiseks saame kasutada funktsiooni <span class="fst-italic">round</span>.', null),
  new ExerciseHint('Seda kõike saame teha nii:', 'kokku = round((kogus_20 + kogus_28 + kogus_38) / 1000, 1)'),
  new ExerciseHint('Kogu programm võiks kokku välja näha selline:',
    'def pitsatainas(läbimõõt, mitu):\n' +
    '    pindala = (läbimõõt / 2)**2 * 3.14\n' +
    '    taigna_kogus = round(pindala * 2.3 * mitu, 1)\n' +
    '    return  taigna_kogus\n' +
    '\n' +
    'mitu_20 = int(input("Mitu 20 cm läbimõõduga pitsat plaanid täna teha? "))\n' +
    'kogus_20 = pitsatainas(20, mitu_20)\n' +
    '\n' +
    'mitu_28 = int(input("Mitu 28 cm läbimõõduga pitsat plaanid täna teha? "))\n' +
    'kogus_28 = pitsatainas(28, mitu_28)\n' +
    '\n' +
    'mitu_38 = int(input("Mitu 38 cm läbimõõduga pitsat plaanid täna teha? "))\n' +
    'kogus_38 = pitsatainas(38, mitu_38)\n' +
    '\n' +
    'kokku = round((kogus_20 + kogus_28 + kogus_38) / 1000, 1)\n' +
    'print("Kokku kulub täna pitsadele " + str(kokku) + " kg tainast.")')];

  pizzaMoreFunctionsHints = [new ExerciseHint('Esimese edasiarendusena loome funktsiooni, mis küsiks kasutajalt pitsade arvu, arvutaks vastava taignakoguse ' +
    'funktsiooni <span class="fst-italic">pitsatainas</span> abil ja tagastaks selle tulemuse.', null),
  new ExerciseHint('Paneme selle uue funktsiooni nimeks näiteks <span class="fst-italic">mitme_pitsa_tainas</span>. Koodis võiks see välja näha selline:',
    'def mitme_pitsa_tainas(läbimõõt):\n' +
    '    mitu = int(input("Mitu " + str(läbimõõt) + " cm läbimõõduga pitsat plaanid täna teha? "))\n' +
    '    return pitsatainas(läbimõõt, mitu)'),
  new ExerciseHint('Järgmise funktsiooni eesmärk on teisendada grammid kilogrammideks ja ümardada tulemus ühe komakohani. Argumendiks peaks olema ' +
    'kogus grammides.', null),
  new ExerciseHint('Loome näiteks funktsiooni nimega <span class="fst-italic">grammid_kilogrammideks</span>.',
    'def grammid_kilogrammideks(kogus):\n' +
    '    return round(kogus / 1000, 1)'),
    new ExerciseHint('Viimane samm on muuta põhiprogrammi, et seal kasutataks meie äsja loodud uusi funktsioone:',
      'def pitsatainas(läbimõõt, mitu):\n' +
      '    pindala = (läbimõõt / 2)**2 * 3.14\n' +
      '    taigna_kogus = round(pindala * 2.3 * mitu, 1)\n' +
      '    return  taigna_kogus\n' +
      '\n' +
      'def mitme_pitsa_tainas(läbimõõt):\n' +
      '    mitu = int(input("Mitu " + str(läbimõõt) + " cm läbimõõduga pitsat plaanid täna teha? "))\n' +
      '    return pitsatainas(läbimõõt, mitu)\n' +
      '\n' +
      'def grammid_kilogrammideks(kogus):\n' +
      '    return round(kogus / 1000, 1)\n' +
      '\n' +
      'kogus_20 = mitme_pitsa_tainas(20)\n' +
      'kogus_28 = mitme_pitsa_tainas(28)\n' +
      'kogus_38 = mitme_pitsa_tainas(38)\n' +
      'kokku = grammid_kilogrammideks(kogus_20 + kogus_28 + kogus_38)\n' +
      'print("Kokku kulub täna pitsadele " + str(kokku) + " kg tainast.")')]

  cinemaHints = [new ExerciseHint('Alustame funktsiooni kirjeldamisest. Funktsiooni nimeks paneme <span class="fst-italic">kinokülastuse_maksumus</span> ' +
    'ja see funktsioon peaks võtma ühe argumendi &ndash; külastajate arvu.', null),
  new ExerciseHint('Funktsiooni algus võiks välja näha selline:', 'def kinokülastuse_maksumus(külastajate_arv):\n    # siia tuleb funktsiooni sisu'),
  new ExerciseHint('Kinokülastuse maksumus koosneb piletite hindadest ja söögi hinnast. Söögi hind külastaja kohta on alati sama, aga pileti hind ' +
    'oleneb sellest, kas külastajaid on rohkem või vähem kui kümme. Kogu maksumuse arvutamist võib näiteks alustada söögile kuluva summa leidmisest.', null),
  new ExerciseHint('Söögi maksumuse saab leida nii:', 'maksumus = külastajate_arv * 6 # söögi maksumus'),
  new ExerciseHint('Selleks, et teada palju piletid maksma lähevad, peame kontrollima tingimuslausega külastajate arvu. Kui see on suurem kui 10, siis ' +
    'arvutame piletite peale kuluva summa piletihinnaga 4 ja kui külastajaid on vähem kui 10, siis piletihinnaga 5,8.', null),
  new ExerciseHint('Piletite peale kuluva summa lisamine maksumusele:', 'if külastajate_arv < 10:\n' +
    '    maksumus += külastajate_arv * 5.8\n' +
    'else:\n' +
    '    maksumus += külastajate_arv * 4'),
  new ExerciseHint('Funktsiooni lõpus tuleb maksumus ka tagastada. Seda saab teha võtmesõnaga <span class="fst-italic">return</span>.', null),
  new ExerciseHint('Kogu funktsioon võiks välja näha selline:', 'def kinokülastuse_eelarve(külastajate_arv):\n' +
    '    maksumus = külastajate_arv * 6\n' +
    '    if külastajate_arv < 10:\n' +
    '        maksumus += külastajate_arv * 5.8\n' +
    '    else:\n' +
    '       maksumus += külastajate_arv * 4\n' +
    '    return maksumus'),
  new ExerciseHint('Põhiprogrammis peaks kasutajalt külastajate arvu küsima, et sellega siis funktsiooni välja kutsuda.', null),
  new ExerciseHint('Külastajate arvu küsime funktsiooniga <span class="fst-italic">input</span> ja täisarvuks teisendamiseks kasutame funktsiooni <span class="fst-italic">int</span>.',
    'külastajaid = int(input("Mitu külastajat on kinno tulemas? "))'),
  new ExerciseHint('Funktsiooni välja kutsudes võib tagastatava maksumuse salvestada muutujasse ja siis kasutajale väljastada, aga funktsiooni ' +
    'võib ka otse <span class="fst-italic">print</span>-käsus välja kutsuda:',
    'print("Kinokülastus läheb maksma " + str(kinokülastuse_maksumus(külastajaid)) + " eurot.")'),
  new ExerciseHint('Kogu programm võiks välja näha selline:',
    'def kinokülastuse_maksumus(külastajate_arv):\n' +
    '    maksumus = külastajate_arv * 6\n' +
    '    if külastajate_arv < 10:\n' +
    '        maksumus += külastajate_arv * 5.8\n' +
    '    else:\n' +
    '        maksumus += külastajate_arv * 4\n' +
    '    return maksumus\n' +
    '\n' +
    'külastajaid = int(input("Mitu külastajat on kinno tulemas? "))\n' +
    'print("Kinokülastus läheb maksma " + str(kinokülastuse_maksumus(külastajaid)) + " eurot.")')];

  greetingCode = 'def tervita():\n' +
    '    print("Tere-tere, vanakere!")\n' +
    '    print("Kuidas läheb?")';
  greetingCallCode = 'def tervita():\n' +
    '    print("Tere-tere, vanakere!")\n' +
    '    print("Kuidas läheb?")\n' +
    '\n' +
    'tervita()';
  pizzaDoughCode = 'def pitsatainas():\n' +
    '    pindala = (20 / 2)**2 * 3.14\n' +
    '    taigna_kogus = pindala * 2.3\n' +
    '    print("20 cm läbimõõduga pitsa jaoks kulub " + str(taigna_kogus) + " g tainast.")\n' +
    '\n' +
    'pitsatainas()';
  pizzaDoughWithArgumentCode = 'def pitsatainas(läbimõõt):\n' +
    '    pindala = (läbimõõt / 2)**2 * 3.14\n' +
    '    taigna_kogus = pindala * 2.3\n' +
    '    print(str(läbimõõt) + " cm läbimõõduga pitsa jaoks kulub " + str(taigna_kogus) + " g tainast.")';
  pizzaDoughWithArgumentCallsCode = 'def pitsatainas(läbimõõt): # üks funktsiooni kirjeldus erinevate väljakutsete jaoks\n' +
    '    pindala = (läbimõõt / 2)**2 * 3.14\n' +
    '    taigna_kogus = pindala * 2.3\n' +
    '    print(str(läbimõõt) + " cm läbimõõduga pitsa jaoks kulub " + str(taigna_kogus) + " g tainast.")\n' +
    '\n' +
    'pitsatainas(20)\n' +
    'pitsatainas(28)\n' +
    'pitsatainas(38)';
  roundCode = 'round(722.1999999999999, 1)';
  pizzaDoughWithRoundCode = 'def pitsatainas(läbimõõt):\n' +
    '    pindala = (läbimõõt / 2)**2 * 3.14\n' +
    '    taigna_kogus = round(pindala * 2.3, 1)\n' +
    '    print(str(läbimõõt) + " cm läbimõõduga pitsa jaoks kulub " + str(taigna_kogus) + " g tainast.")';
  pizzaDoughAccessCode = 'def pitsatainas(läbimõõt):\n' +
    '    pindala = (läbimõõt / 2)**2 * 3.14\n' +
    '    taigna_kogus = round(pindala * 2.3, 1)\n' +
    '    print(str(läbimõõt) + " cm läbimõõduga pitsa jaoks kulub " + str(taigna_kogus) + " g tainast.")\n' +
    '\n' +
    'pitsatainas(20)\n' +
    'print(taigna_kogus)';
  pizzaDoughReturnCode = 'def pitsatainas(läbimõõt):\n' +
    '    pindala = (läbimõõt / 2)**2 * 3.14\n' +
    '    taigna_kogus = round(pindala * 2.3, 1)\n' +
    '    return  taigna_kogus\n' +
    '\n' +
    'pitsatainas(20)';
  pizzaDoughPrintCallCode = 'print(pitsatainas(20))';
  pizzaDoughDifferentSizesCode = 'def pitsatainas(läbimõõt):\n' +
    '    pindala = (läbimõõt / 2)**2 * 3.14\n' +
    '    taigna_kogus = round(pindala * 2.3, 1)\n' +
    '    return  taigna_kogus\n' +
    '\n' +
    'kogus_20 = pitsatainas(20)\n' +
    'kogus_28 = pitsatainas(28)\n' +
    'kogus_38 = pitsatainas(38)\n' +
    'kokku = kogus_20 + kogus_28 + kogus_38\n' +
    'print("Kokku kulub 20 cm, 28 cm ja 38 cm pitsa peale " + str(kokku) + " g tainast.")';
  returnNoneCode = 'def liida(esimene, teine):\n' +
    '    print(esimene + teine)\n' +
    '\n' +
    'print(liida(4, 3))';
}

//todo: vaikeparameetrid, parameetri nime järgi funktsiooni väljakutses argumendi andmine
