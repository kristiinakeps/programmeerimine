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

  printAdditionNoArgumentsTestCode = '<span class="code-bold">def</span><span class="code-def"> liida</span>():<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;a = <span class="code-number">2</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;b = <span class="code-number">3</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(a + b)<br><br>' +
    'liida()';
  printAdditionNoArgumentsTestAnswers = [new TestAnswer('2', false, 'Väljastatakse liitmistehte a + b tulemus.'),
    new TestAnswer('3', false, 'Väljastatakse liitmistehte a + b tulemus.'),
    new TestAnswer('5', true, 'Õige, a + b annab tulemuseks 5, mis väljastatakse ekraanile.'),
    new TestAnswer('23', false, 'See oleks õige, kui a ja b väärtused oleksid sõned.'),
    new TestAnswer('Mitte midagi', false, 'See funktsioon siiski väljastab midagi ja põhiprogrammis kutsutakse funktsiooni välja.')];

  printSubtractionArgumentsTestCode = '<span class="code-bold">def</span><span class="code-def"> lahuta</span>(a, b):<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(b - a)<br><br>' +
    'lahuta(<span class="code-number">3</span>, <span class="code-number">7</span>)';
  printSubtractionArgumentsTestAnswers = [new TestAnswer('-4', false, 'Kontrolli üle, mis järjekorras on argumendid funktsiooni kirjelduses ja mis järjekorras lahtamistehtes.'),
  new TestAnswer('3', false, 'Lahtuamistehte tulemus peaks olema natuke teine.'),
  new TestAnswer('4', true, 'Just, lahutamistehte tulemus on 4 ja see väljastatakse ekraanile.'),
  new TestAnswer('10', false, 'See oleks õige vastus liitmistehte puhul.'),
  new TestAnswer('Mitte midagi', false, 'Midagi siiski ekraanile väljastatakse.')]

  FUN_2_ARG_RETURN = 'FUN_2_ARG_RETURN';
  FUN_2_ARG_PRINT = 'FUN_2_ARG_PRINT';
  FUN_1_ARG_RETURN = 'FUN_1_ARG_RETURN';

  test2ArgReturn = new CategorizeTestCategory(null, '<span class="code-bold">def</span> <span class="code-def">korruta</span>(a, b):<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">return</span> a * b', this.FUN_2_ARG_RETURN, []);
  test2ArgPrint = new CategorizeTestCategory(null, '<span class="code-bold">def</span> <span class="code-def">korruta</span>(a, b):<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(a * b)', this.FUN_2_ARG_PRINT, []);
  test1ArgReturn = new CategorizeTestCategory(null, '<span class="code-bold">def</span> <span class="code-def">korruta</span>(a):<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">return</span> a * 10', this.FUN_1_ARG_RETURN, []);
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
    '<span class="code-bold">def</span> <span class="code-def"> pitsatainas</span>(läbimõõt, mitu):'),
  new ExerciseHint('Nüüd saame uut argumenti funktsiooni sees kasutada. Selleks, et ühe pitsa taignakoguse asemel tagastada ' +
    'etteantud arvu pitsade jaoks vajalik taignakogus, tuleb üksiku pitsa kogus korrutada argumendiks antud pitsade arvuga.', null),
  new ExerciseHint('Õige koguse saame arvutada nüüd nii:', 'taigna_kogus = <span class="code-function">round</span>(pindala * <span class="code-number">2.3</span> * mitu, <span class="code-number">1</span>)'),
  new ExerciseHint('Järgmise sammuna võiks kasutajalt kõikide suurust jaoks küsida, mitu sellist pitsat ta plaanib teha.', null),
  new ExerciseHint('Selleks kasutame funktsiooni <span class="fst-italic">input</span>. Näiteks 20 cm läbimõõduga pitsade arvu küsimine võiks välja näha nii:',
    'mitu_20 = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Mitu 20 cm läbimõõduga pitsat plaanid täna teha? "</span>))'),
  new ExerciseHint('Nüüd saame leida 20 cm läbimõõduga pitsade jaoks kuluva koguse kutsudes välja oma täiendatud funktsiooni:',
    'kogus_20 = pitsatainas(<span class="code-number">20</span>, mitu_20)'),
  new ExerciseHint('Sarnaselt saame küsida ka 28 ja 38 cm läbimõõduga pitsade arvu ja arvutada kogused.', null),
  new ExerciseHint('Viimaks tuleb nüüd saadud kogused kokku liita, teisendada grammideks ja ümardada. Kuna ühes kilogrammis on 1000 grammi, siis ' +
    'saame oma taignakoguse teisendada kilogrammidesse kui jagama selle 1000-ga. Ümardamiseks saame kasutada funktsiooni <span class="fst-italic">round</span>.', null),
  new ExerciseHint('Seda kõike saame teha nii:', 'kokku = <span class="code-function">round</span>((kogus_20 + kogus_28 + kogus_38) / ' +
    '<span class="code-number">1000</span>, <span class="code-number">1</span>)'),
  new ExerciseHint('Kogu programm võiks kokku välja näha selline:',
    '<span class="code-bold">def</span> <span class="code-def">pitsatainas</span>(läbimõõt, mitu):<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;pindala = (läbimõõt / <span class="code-number">2</span>)**<span class="code-number">2</span> * 3.14<br></span>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;taigna_kogus = <span class="code-function">round</span>(pindala * <span class="code-number">2.3</span> * mitu, <span class="code-number">1</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">return </span> taigna_kogus<br><br>' +
    'mitu_20 = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Mitu 20 cm läbimõõduga pitsat plaanid täna teha? "</span>))<br>' +
    'kogus_20 = pitsatainas(<span class="code-number">20</span>, mitu_20)<br><br>' +
    'mitu_28 = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Mitu 28 cm läbimõõduga pitsat plaanid täna teha? "</span>))<br>' +
    'kogus_28 = pitsatainas(<span class="code-number">28</span>, mitu_28)<br><br>' +
    'mitu_38 = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Mitu 38 cm läbimõõduga pitsat plaanid täna teha? "</span>))<br>' +
    'kogus_38 = pitsatainas(<span class="code-number">38</span>, mitu_38)<br><br>' +
    'kokku = <span class="code-function">round</span>((kogus_20 + kogus_28 + kogus_38) / <span class="code-number">1000</span>, <span class="code-number">1</span>)<br>' +
    '<span class="code-function">print</span>(<span class="code-string">"Kokku kulub täna pitsadele " + </span><span class="code-function">str</span>(kokku) + <span class="code-string">" kg tainast."</span>)</span>')];

  pizzaMoreFunctionsHints = [new ExerciseHint('Esimese edasiarendusena loome funktsiooni, mis küsiks kasutajalt pitsade arvu, arvutaks vastava taignakoguse ' +
    'funktsiooni <span class="fst-italic">pitsatainas()</span> abil, ja tagastaks selle tulemuse.', null),
  new ExerciseHint('Paneme selle uue funktsiooni nimeks näiteks <span class="fst-italic">mitme_pitsa_tainas</span>. Koodis võiks see välja näha selline:',
    '<span class="code-bold">def</span> <span class="code-def">mitme_pitsa_tainas</span>(läbimõõt):<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;mitu = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Mitu "</span> ' +
    '+ <span class="code-function">str</span>(läbimõõt) + <span class="code-string">" cm läbimõõduga pitsat plaanid täna teha? "</span>))<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">return</span> pitsatainas(läbimõõt, mitu)'),
  new ExerciseHint('Järgmise funktsiooni eesmärk on teisendada grammid kilogrammideks ja ümardada tulemus ühe komakohani. Argumendiks peaks olema ' +
    'kogus grammides.', null),
  new ExerciseHint('Loome näiteks funktsiooni nimega <span class="fst-italic">grammid_kilogrammideks</span>.',
    '<span class="code-bold">def</span> <span class="code-def">grammid_kilogrammideks</span>(kogus):<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">return</span> <span class="code-function">round</span>(kogus / <span class="code-number">1000</span>,' +
    ' <span class="code-number">1</span>)'),
    new ExerciseHint('Viimane samm on muuta põhiprogrammi, et seal kasutataks meie äsja loodud uusi funktsioone:',
      '<span class="code-bold">def</span> <span class="code-def">pitsatainas</span>(läbimõõt, mitu):<br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;pindala = (läbimõõt / <span class="code-number">2</span>)**<span class="code-number">2</span> * 3.14<br></span>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;taigna_kogus = <span class="code-function">round</span>(pindala * <span class="code-number">2.3</span> * mitu, <span class="code-number">1</span>)<br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">return </span> taigna_kogus<br><br>' +
      '<span class="code-bold">def</span> <span class="code-def">mitme_pitsa_tainas</span>(läbimõõt):<br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;mitu = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Mitu "</span> ' +
      '+ <span class="code-function">str</span>(läbimõõt) + <span class="code-string">" cm läbimõõduga pitsat plaanid täna teha? "</span>))<br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">return</span> pitsatainas(läbimõõt, mitu)<br><br>' +
      '<span class="code-bold">def</span> <span class="code-def">grammid_kilogrammideks</span>(kogus):<br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">return</span> <span class="code-function">round</span>(kogus / <span class="code-number">1000</span>,' +
      ' <span class="code-number">1</span>)<br><br>' +
      'kogus_20 = mitme_pitsa_tainas(<span class="code-number">20</span>)<br>' +
      'kogus_28 = mitme_pitsa_tainas(<span class="code-number">28</span>)<br>' +
      'kogus_38 = mitme_pitsa_tainas(<span class="code-number">38</span>)<br>' +
      'kokku = grammid_kilogrammideks(kogus_20 + kogus_28 + kogus_38)<br>' +
      '<span class="code-function">print</span>(<span class="code-string">"Kokku kulub täna pitsadele " + </span><span class="code-function">str</span>(kokku) + <span class="code-string">" kg tainast."</span>)</span>')]

  cinemaHints = [new ExerciseHint('Alustame funktsiooni kirjeldamisest. Funktsiooni nimeks paneme <span class="fst-italic">kinokülastuse_maksumus</span> ' +
    'ja see funktsioon peaks võtma ühe argumendi &ndash; külastajate arvu.', null),
  new ExerciseHint('Funktsiooni algus võiks välja näha selline:', '<span class="code-bold">def</span> <span class="code-def">kinokülastuse_maksumus</span>(külastajate_arv):'),
  new ExerciseHint('Kinokülastuse maksumus koosneb piletite hindadest ja söögi hinnast. Söögi hind külastaja kohta on alati sama, aga pileti hind' +
    'oleneb sellest, kas külastajaid on rohkem või vähem kui kümme. Kogu maksumuse arvutamist võib näiteks alustada söögile kuluva summa leidmisest.', null),
  new ExerciseHint('Söögi maksumuse saab leida nii:', 'maksumus = külastajate_arv * <span class="code-number">6</span>'),
  new ExerciseHint('Selleks, et teada palju piletid maksma lähevad, peame kontrollima tingimuslausega külastajate arvu. Kui see on suurem kui 10, siis ' +
    'arvutame piletite peale kuluva summa piletihinnaga 4 ja kui külastajaid on vähem kui 10, siis piletihinnaga 5,8.', null),
  new ExerciseHint('Piletite peale kuluva summa lisamine maksumusele:', '<span class="code-bold">if</span> külastajate_arv &lt; <span class="code-number">10</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;maksumus += külastajate_arv * <span class="code-number">5.8</span><br>' +
    '<span class="code-bold">else</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;maksumus += külastajate_arv * <span class="code-number">4</span>'),
  new ExerciseHint('Funktsiooni lõpus tuleb maksumus ka tagastada. Seda saab teha võtmesõnaga <span class="fst-italic">return</span>.', null),
  new ExerciseHint('Kogu funktsioon võiks välja näha selline:', '<span class="code-bold">def</span> <span class="code-def">kinokülastuse_eelarve</span>(külastajate_arv):<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;maksumus = külastajate_arv * <span class="code-number">6</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">if</span> külastajate_arv &lt; <span class="code-number">10</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maksumus += külastajate_arv * <span class="code-number">5.8</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">else</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maksumus += külastajate_arv * <span class="code-number">4</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">return</span> maksumus'),
  new ExerciseHint('Põhiprogrammis peaks kasutajalt külastajate arvu küsima, et sellega siis funktsiooni välja kutsuda.', null),
  new ExerciseHint('Külastajate arvu küsime funktsiooniga <span class="fst-italic">input</span> ja täisarvuks teisendamiseks kasutame funktsiooni <span class="fst-italic">int</span>.',
    'külastajaid = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Mitu külastajat on kinno tulemas? "</span>))'),
  new ExerciseHint('Funktsiooni välja kutsudes võib tagastatava maksumuse salvestada muutujasse ja siis kasutajale väljastada, aga funktsiooni ' +
    'võib ka otse <span class="fst-italic">print</span>-käsus välja kutsuda:',
    '<span class="code-function">print</span>(<span class="code-string">"Kinokülastus läheb maksma "</span> + ' +
    '<span class="code-function">str</span>(kinokülastuse_maksumus(külastajaid)) + <span class="code-string">" eurot."</span>)'),
  new ExerciseHint('Kogu programm võiks välja näha selline:',
    '<span class="code-bold">def</span> <span class="code-def">kinokülastuse_maksumus</span>(külastajate_arv):<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;maksumus = külastajate_arv * <span class="code-number">6</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">if</span> külastajate_arv &lt; <span class="code-number">10</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maksumus += külastajate_arv * <span class="code-number">5.8</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">else</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maksumus += külastajate_arv * <span class="code-number">4</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">return</span> maksumus<br><br>' +
    'külastajaid = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Mitu külastajat on kinno tulemas? "</span>))<br>' +
    '<span class="code-function">print</span>(<span class="code-string">"Kinokülastus läheb maksma "</span> + ' +
    '<span class="code-function">str</span>(kinokülastuse_maksumus(külastajaid)) + <span class="code-string">" eurot."</span>)')]
}

//todo: vaikeparameetrid, parameetri nime järgi funktsiooni väljakutses argumendi andmine
