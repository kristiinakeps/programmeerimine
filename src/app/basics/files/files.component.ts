import {Component} from '@angular/core';
import {ExerciseHint} from "../../models/exercise-hint.model";
import {TestAnswer} from "../../models/test-answer.model";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {

  fileOpenReadTestTitle = 'Millised järgmistest ridadest sobivad faili "tulemused.txt" avamiseks, kui soovitakse failist lugeda?'
  fileOpenReadTest = [new TestAnswer('fail = open("tulemused.txt", "r")', true, 'Lugemiseks võib anda funktsioonile ka teise argumendina viisi.'),
  new TestAnswer('fail = open("tulemused.txt", r)', false, 'Teine argument peab olema sõne.'),
  new TestAnswer('fail = open(tulemused.txt)', false, 'Faili nimi peab olema sõne.'),
  new TestAnswer('fail = open("tulemused.txt", "w")', false, 'Teine argument "w" tähendab, et fail avatakse kirjutamiseks.'),
  new TestAnswer('fail = open("tulemused.txt")', true, 'Kui faili avamise funktsioonile anda ainult üks argument, siis vaikimisi avatakse fail lugemiseks.')]

  fileReadTestCode = 'fail = <span class="code-function">open</span>(<span class="code-string">"tulemused.txt"</span>)<br>' +
    'tekst = fail.read()<br>' +
    '<span class="code-function">print</span>(text)'
  fileReadTestFile = 'Maris Maarikas - 1:34<br>Kadi Kuusk - 1:45<br>Karl Lumi - 1:25'
  fileReadTest = [new TestAnswer('Väljastab kogu faili sisu ekraanile.', true, 'Jah, see koodijupp loeb kogu faili sisu ja väljastab selle ekraanile.'),
  new TestAnswer('Väljastab kogu faili sisu ekraanile nii, et iga rea vahel on tühi rida.', false, 'Selles näites tühje ridu ei teki.'),
  new TestAnswer('Väljastab faili esimese rea ekraanile.', false, 'See koodijupp väljastab midagi muud kui ainult esimese rea.'),
  new TestAnswer('Väljastab faili viimase rea ekraanile.', false, 'See koodijupp väljastab midagi muud kui ainult viimase rea.'),
  new TestAnswer('See kood ei väljasta midagi, sest faili lugemiseks on vaja tsüklit.', false, 'Tsükliga on küll väga mugav faili lugeda, aga see pole ainus variant faili sisu kätte saamiseks.')]

  barchartExerciseHints = [new ExerciseHint('Esimene samm võiks olla kasutajalt faili nime küsimine. Selleks saab kasutada vana tuttavat ' +
    '<span class="fst-italic">input</span>-funktsiooni.', null),
  new ExerciseHint('Faili nime küsimine:', 'faili_nimi = <span class="code-function">input</span>(<span class="code-string">"Sisesta faili nimi: "</span>)'),
  new ExerciseHint('Nüüd on faili nimi olemas ja võime selle avada <span class="fst-italic">open</span>-funktsiooniga.', null),
  new ExerciseHint('Avatud fail tuleks ka kuhugi muutujasse salvestada:', 'fail = <span class="code-function">open</span>(faili_nimi)'),
  new ExerciseHint('Järgmine samm on hakata failist ridu lugema ja iga rea peaks teisendama täisarvuks.', null),
  new ExerciseHint('Ridade lugemiseks võib kasutada nii <span class="fst-italic">while</span>- või <span class="fst-italic">for</span>-tsüklit.' +
    ' Siin kasutame <span class="fst-italic">for</span>-tsüklit:',
    '<span class="code-bold">for</span> rida <span class="code-bold">in</span> fail:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;temperatuur = <span class="code-function">int</span>(rida)'),
  new ExerciseHint('Nüüd on meil täisarvuna temperatuur olemas ja järgmiseks on vaja väljastada vastav arv tärne. Kuidas seda tärnidest sõnet kokku panna? ' +
    'Üks variant on teha seda <span class="fst-italic">while</span>-tsükliga. Teine variant on sõne korrutamine täisarvuga, mille näide oli andmetüüpide peatükis.', null),
  new ExerciseHint('<span class="fst-italic">While</span>-tsükliga tärnidest koosneva sõne kokkupanemine:',
    'tärnid = <span class="code-string">""</span><br>' +
    'i = <span class="code-number">0</span><br>' +
    '<span class="code-bold">while</span> i &lt; temperatuur:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;tärnid += <span class="code-string">"*"</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;i += <span class="code-number">1</span><br>' +
    '<span class="code-function">print</span>(tärnid)'),
  new ExerciseHint('Sama asja saab sõne korrutamisel arvuga teha vaid ühe reaga:',
    '<span class="code-function">print</span>(<span class="code-string">"*"</span> * temperatuur)'),
  new ExerciseHint('Viimase sammuna võiks ka faili sulgeda.', 'fail.close()'),
  new ExerciseHint('Üks võimalik lahendus kokkupanduna oleks selline:',
    'faili_nimi = <span class="code-function">input</span>(<span class="code-string">"Sisesta faili nimi: "</span>)<br>' +
    'fail = <span class="code-function">open</span>(faili_nimi)<br>' +
    '<span class="code-bold">for</span> rida <span class="code-bold">in</span> fail:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;temperatuur = <span class="code-function">int</span>(rida)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"*"</span> * temperatuur)<br>' +
    'fail.close()'
  )];

  ordersExerciseHints = [new ExerciseHint('Alustuseks tuleks fail avada, kasutades <span class="fst-italic">open</span>-funktsiooni. Faili nime ' +
    'võid soovi korral küsida kasutajalt, aga võid ka programmi sisse kirjutada.', null),
  new ExerciseHint('Faili avamise võib teha nii:', 'fail = <span class="code-function">open</span>(<span class="code-string">"tellimused.txt"</span>)'),
  new ExerciseHint('Enne kui hakata faili rida rea haaval lugema, võiks luua muutujad erinevate pitsasuuruste tellimuste arvude jaoks. Alguses ' +
    'on kõiki tellimusi 0, aga iga failist loetava rea puhul suurendame vastavat muutujat.', null),
  new ExerciseHint('Muutujad võib luua nii:', 'tellimused_20 = <span class="code-number">0</span><br>' +
    'tellimused_28 = <span class="code-number">0</span><br>tellimused_38 = <span class="code-number">0</span>'),
  new ExerciseHint('Nüüd võib hakata failist ridu lugema. Seda on mugav teha näiteks <span class="fst-italic">for</span>-tsükliga.', null),
  new ExerciseHint('Näide <span class="fst-italic">for</span>-tsüklist:', '<span class="code-bold">for</span> rida <span class="code-bold">in</span> fail:'),
  new ExerciseHint('Soovi korral võib loetud rea ka täisarvuks teisendada ja siis kontrollida, kas real olev arv on 20, 28 või 38. Vastavalt sellele teame, ' +
    'millist tellimuste arvu muutujat suurendada', null),
  new ExerciseHint('Tsükli sisus tellimuste arvude leidmine:', 'suurus = <span class="code-function">int</span>(rida)<br>' +
    '<span class="code-bold">if</span> suurus == <span class="code-number">20</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;tellimused_20 += <span class="code-number">1</span><br>' +
    '<span class="code-bold">elif</span> suurus == <span class="code-number">28</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;tellimused_28 += <span class="code-number">1</span><br>' +
    '<span class="code-bold">else</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;tellimused_38 += <span class="code-number">1</span>'),
  new ExerciseHint('Lõpuks tuleb pärast tsükli töö lõppu ka saadud tellimuste arvud väljastada.', null),
  new ExerciseHint('Tellimuste arvude väljastamine:',
    '<span class="code-function">print</span>(<span class="code-string">"20 cm läbimõõduga pitsasid on vaja "</span> + <span class="code-function">str</span>(tellimused_20))<br>' +
    '<span class="code-function">print</span>(<span class="code-string">"28 cm läbimõõduga pitsasid on vaja "</span> + <span class="code-function">str</span>(tellimused_28))<br>' +
    '<span class="code-function">print</span>(<span class="code-string">"38 cm läbimõõduga pitsasid on vaja "</span> + <span class="code-function">str</span>(tellimused_38))'),
  new ExerciseHint('Kogu kood võib lõpuks välja näha selline:',
    'fail = <span class="code-function">open</span>(<span class="code-string">"tellimused.txt"</span>)<br>' +
    'tellimused_20 = <span class="code-number">0</span><br>' +
    'tellimused_28 = <span class="code-number">0</span><br>tellimused_38 = <span class="code-number">0</span><br>' +
    '<span class="code-bold">for</span> rida <span class="code-bold">in</span> fail:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;suurus = <span class="code-function">int</span>(rida)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">if</span> suurus == <span class="code-number">20</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tellimused_20 += <span class="code-number">1</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">elif</span> suurus == <span class="code-number">28</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tellimused_28 += <span class="code-number">1</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">else</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tellimused_38 += <span class="code-number">1</span><br>' +
    '<span class="code-function">print</span>(<span class="code-string">"20 cm läbimõõduga pitsasid on vaja "</span> + <span class="code-function">str</span>(tellimused_20))<br>' +
    '<span class="code-function">print</span>(<span class="code-string">"28 cm läbimõõduga pitsasid on vaja "</span> + <span class="code-function">str</span>(tellimused_28))<br>' +
    '<span class="code-function">print</span>(<span class="code-string">"38 cm läbimõõduga pitsasid on vaja "</span> + <span class="code-function">str</span>(tellimused_38))<br>' +
    'fail.close()'
  )];

  shoppingListExerciseHints = [new ExerciseHint('Alustame näiteks faili avamisega. Tahame hakata faili kirjutama ja kui fail oli olemas, ' +
    'siis tahame vana sisu lihtsalt üle kirjutada. Selleks peame täpsustama faili avades õige avamise viisi. Samuti peame määrama kodeeringu.', null),
  new ExerciseHint('Faili avamiseks sobiv viis on <span class="fst-italic">"w"</span> ja koodis võiks viisi ja kodeeringuga faili avamine välja näha selline:',
    'fail = <span class="code-function">open</span>(<span class="code-string">"ostunimekiri.txt"</span>, <span class="code-string">"w"</span>, encoding=<span class="code-string">"utf-8"</span>)'),
  new ExerciseHint('Järgmisena võime sinna automaatselt faili lisatavad tooted juba ära kirjutada. Siinkohal ei tohi unustada reavahetuse sümbolit iga toote lõppu lisamast.', null),
  new ExerciseHint('Kolm automaatselt lisatavat toodet võib kirjutada ka ühe korraga faili. Pärast kirjutamist võime kasutajale väljastada, et need tooted on nüüd ' +
    'ostunimekirja lisatud:', 'fail.write(<span class="code-string">"piim\\nmunad\\nleib\\n"</span>)<br>' +
    '<span class="code-function">print</span>(<span class="code-string">"Ostunimekirja on lisatud piim, munad ja leib."</span>)'),
  new ExerciseHint('Nüüd tuleb hakata kasutajalt tsüklis küsima, mida ta veel lisada soovib. Siin sobib kõige paremini kasutada <span class="fst-italic">while</span>-tsüklit, ' +
    'võib vabalt valida, millist tsükli konstruktsiooni kasutada.', null),
  new ExerciseHint('Me kasutame siin <span class="fst-italic">while True</span> konstuktsiooni. Tsükli sees küsime kasutajalt sisendit ja kui sisend on tühi sõne, siis ' +
    'lõpetame tsükli <span class="fst-italic">break</span>.käsuga.',
    '<span class="code-bold">while True</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;toode = <span class="code-function">input</span>(<span class="code-string">"Lisa uus toode: "</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">if</span> toode == <span class="code-string">""</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">break</span>'),
  new ExerciseHint('Kui kasutaja lisatud toode ei olnud tühi sõne, siis tahame selle ka faili kirjutada. Selleks on failidel ' +
    '<span class="fst-italic">write</span>-meetod. Jällegi peame ise käsitsi lisama ka reavahetuse sümboli.', null),
    new ExerciseHint('Toote faili kirjutamine:', 'fail.write(toode + <span class="code-string">"\\n"</span>)'),
  new ExerciseHint('Kõige lõpus, kui tsükkel on oma töö lõpetanud, siis sulgeme ka faili ja teavitame kasutajat ostunimekirja loomisest', null),
  new ExerciseHint('Seda saab teha nii:', 'fail.close()<br><span class="code-function">print</span>(<span class="code-string">"Ostunimekiri loodud!"</span>)'),
  new ExerciseHint('Näide lõplikust koodist:',
    'fail = <span class="code-function">open</span>(<span class="code-string">"ostunimekiri.txt"</span>, <span class="code-string">"w"</span>, encoding=<span class="code-string">"utf-8"</span>)<br>' +
    'fail.write(<span class="code-string">"piim\\nmunad\\nleib\\n"</span>)<br>' +
    '<span class="code-function">print</span>(<span class="code-string">"Ostunimekirja on lisatud piim, munad ja leib."</span>)<br>' +
    '<span class="code-bold">while True</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;toode = <span class="code-function">input</span>(<span class="code-string">"Lisa uus toode: "</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">if</span> toode == <span class="code-string">""</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">break</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;fail.write(toode + <span class="code-string">"\\n"</span>)<br>' +
    'fail.close()<br><span class="code-function">print</span>(<span class="code-string">"Ostunimekiri loodud!"</span>)')]

}
