import {Component} from '@angular/core';
import {TestAnswer} from "../models/test-answer.model";
import {ExerciseHint} from "../models/exercise-hint.model";

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.scss']
})
export class LoopsComponent {

  loopOutputLinesTestCode = 'i = <span class="code-number">6</span><br>' +
    '<span class="code-bold">while</span> i &gt; <span class="code-number">0</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(i)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;i -= <span class="code-number">1</span>'
  loopOutputLinesTestAnswers = [new TestAnswer('0', false, 'Tsükli sisu täidetakse vähemalt üks kord.'),
    new TestAnswer('4', false, 'Kas tsükli tingimus on peale nelja iteratsiooni väär?'),
    new TestAnswer('5', false, 'Kas tsükli sisu ei täideta mitte üks kord veel?'),
    new TestAnswer('6', true, 'Jah, see tsükkel väljastab 6 rida.'),
    new TestAnswer('7', false, 'Seitse on ehk natuke liiga palju.')]

  loopOutputChangeTestCode = 'i = <span class="code-number">0</span><br>' +
    '<span class="code-bold">while</span> i &lt; <span class="code-number">5</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(i)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;i = i + <span class="code-number">1</span>'
  loopOutputChangeTestAnswers = [new TestAnswer('Kui tsükli tingimus oleks i != 5', false, 'Tingimused i != 5 ja i < 5 muutuvad mõlemad vääraks kui i saab väärtuseks 5.'),
    new TestAnswer('Kui i = i + 1 asemel kirjutaksime muutuja suurendamiseks i += 1', false, 'Tehted i = i + 1 ja i += 1 teevad täpselt sama asja.'),
    new TestAnswer('Kui tsükli tingimus oleks i <= 5', true, 'Kui tsükli tingimus oleks i <= 5, siis täidetaks tsükli sisu üks kord rohkem.'),
    new TestAnswer('Kui asendada muutuja i muutujaga j', false, 'Kui igal pool asendada muutuja i muutujaga j, siis programmi töö sellest ei sõltu.'),
    new TestAnswer('Kui i = i + 1 asemel kirjutaksime i = i - 1', true, 'Kui i = i + 1 asemel oleks i = i - 1, siis muutuks i väärtus iga tsükli sisu täitmisega väiksemaks ja programm jääks lõpmatuse tsüklisse.')]

  loopOutputTestCode = 'i = <span class="code-number">1</span><br>' +
    'a = <span class="code-number">0</span><br>' +
    '<span class="code-bold">while</span> i &lt;= <span class="code-number">10</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">if</span> i == 2 <span class="code-bold">or</span> i &gt; 7:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a += <span class="code-number">1</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;i = i + <span class="code-number">1</span><br>' +
    '<span class="code-function">print</span>(a)'
  loopOutputTestAnswers = [new TestAnswer('0', false, 'Mõnel korral on tingimuslause tingimus tõene ja muutuja a väärtust suurendatakse.'),
    new TestAnswer('1', false, 'Muutuja a väärtust suurendatakse rohkem kui üks kord.'),
    new TestAnswer('4', true, 'Tubli! Programmi lõpus on tõesti a väärtuseks 4.'),
    new TestAnswer('5', false, 'Tingimuslause tingimus ei ole päris viiel korral tõene.'),
    new TestAnswer('10', false, 'Tsükli sisu täidetakse tõesti 10 korda, aga muutuja a väärtust ei suurendata iga kord.')]

  workoutExerciseHints = [new ExerciseHint('Alljärgnev koodijupp on meil juba olemas. Kindlaksmääratud 20 kätekõverduse asemel  tahame ' +
    'nüüd kasutajalt kätekõverduste arvu küsida. Selleks oleks vaja kasutajalt sisendit küsida ja see kuhugi muutujasse salvestada.',
    'tehtud_kätekõverdusi = <span class="code-number">0</span><br><br>' +
    '<span class="code-bold">while</span> tehtud_kätekõverdusi &lt; <span class="code-number">20</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Tee üks kätekõverdus!"</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;tehtud_kätekõverdusi = tehtud_kätekõverdusi + <span class="code-number">1</span>'),
  new ExerciseHint('Sisendit saame küsida <span class="fst-italic">input</span>-käsuga ning sisestatud arv tuleks ka täisarvuks teisendada. ' +
    'Seda saab teha näiteks nii:', 'kätekõverduste_arv = <span class="code-function">int</span>(<span class="code-function">input</span>(' +
    '<span class="code-string">"Sisesta kätekõverduste arv: "</span>))'),
  new ExerciseHint('Nüüd tuleks muuta tsükli tingimust. Varasema 20 asemel, peaks seal nüüd kontrollima, et tehtud kätekõverduste arv oleks ' +
    'väiksem kasutaja sisestatud kätekõverduste arvust.', null),
  new ExerciseHint('Tsükli tingimuse võime muuta näiteks selliseks:',
    '<span class="code-bold">while</span> tehtud_kätekõverdusi &lt; kätekõverduste_arv:'),
  new ExerciseHint('Kokku võiks meie kood näha välja selline:',
    'kätekõverduste_arv = <span class="code-function">int</span>(<span class="code-function">input</span>(' +
    '<span class="code-string">"Sisesta kätekõverduste arv: "</span>))<br>' +
    'tehtud_kätekõverdusi = <span class="code-number">0</span><br><br>' +
    '<span class="code-bold">while</span> tehtud_kätekõverdusi &lt; kätekõverduste_arv:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Tee üks kätekõverdus!"</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;tehtud_kätekõverdusi = tehtud_kätekõverdusi + <span class="code-number">1</span>'),
  new ExerciseHint('Täpselt samamoodi saame küsida ka mõne teise harjutuse korduste arvu ja tsüklis kasutajale vastavat käsklust väljastada.', null)]

  guessNumberExerciseHints = [new ExerciseHint('Selle ülesande lahendamiseks on mitmeid erinevaid variante. Siin vihjetes teeme läbi ' +
    'ainult ühe võimalikest lahendustest. Alustame sellest, et valime välja salajase arvu ja salvestame selle muutujasse.', null),
  new ExerciseHint('Näiteks valime salajaseks arvuks 17 nagu ka näidetes. Siin võid muidugi valida ka ükskõik mis teise arvu, ülejäänud ' +
    'kood sellest ei muutu.', 'salajane_arv = <span class="code-number">17</span>'),
  new ExerciseHint('Järgmine samm on mõelda tsükli struktuuri peale. Tsükkel peaks käima kuni kasutaja leiab õige arvu. Selle tingimuse võib ' +
    'panna kohe tsüklitingimuseks või siis hoopis teha lõpmatu tsükkel ja lisada tsükli sisusse tingimuslause <span class="fst-italic">break</span>-käsuga. ' +
    'Samuti tuleb tsüklis küsida kasutajalt arvu pakkumist.', null),
    new ExerciseHint('Siin kasutame lõpmatu tsükli ja <span class="fst-italic">break</span>-käsuga varianti.',
      '<span class="code-bold">while True</span>:<br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;pakkumine = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Paku arvu vahemikus 1-100: "</span>))<br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">if</span> salajane_arv == pakkumine:<br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Leidsid õige arvu!"</span>)<br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">break</span>'),
  new ExerciseHint('Nüüd on meil juba toimiv tsükkel olemas, aga programm ei väljasta veel kasutajale tagasisidet iga pakkumise kohta. Alles õige ' +
    'pakkumise korral öeldakse "Leidsid õige arvu!". Järgmisena tulekski kasutajale väljastada, kas pakutud arv oli suurem või väiksem salajasest arvust.',
    null),
  new ExerciseHint('Seda saab teha ilusti tingimuslausetega. Me juba lisasime tingimuslause, mis kontrollis, kas arvud on võrdsed. Nüüd tuleks ' +
    'sarnanste tingimuslausetega kontrollida, kas pakkumine oli suurem kui salajane arv või kas pakkumine oli väiksem kui salajane arv.', null),
  new ExerciseHint('Vahet ei ole kumba pidi me kontrollid teeme. Lihtsalt väljastatav teade peab olema vastav. Siin kontrollime kõigepealt, kas ' +
    'pakkumine oli väiksem kui salajane arv. Lisame selle <span class="fst-italic">elif</span>-tingimusena. Teistpidi kontrolli meil polegi otseselt vaja teha, ' +
    'saame lihtsalt lisada <span class="fst-italic">else</span>-haru.',
    '<span class="code-bold">elif</span> pakkumine &lt; salajane_arv:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Salajane arv on suurem"</span>)<br>' +
    '<span class="code-bold">else</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Salajane arv on väiksem"</span>)'),
  new ExerciseHint('Kui nüüd kõik see kokku panna, siis peakski meil lahendus käes olema:',
    'salajane_arv = <span class="code-number">17</span><br>' +
    '<span class="code-bold">while True</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;pakkumine = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Paku arvu vahemikus 1-100: "</span>))<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">if</span> salajane_arv == pakkumine:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Leidsid õige arvu!"</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">break</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">elif</span> pakkumine &lt; salajane_arv:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Salajane arv on suurem"</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">else</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Salajane arv on väiksem"</span>)')]

  guessNumberLimitedTriesExerciseHints = [new ExerciseHint('Eelmine programm lasi kasutajal pakkuda täpselt nii kaua kui tal kulus, et õige arv leida. ' +
    'Nüüd teeme kasutaja elu natuke raskemaks ja ütleme, et ta peab viie pakkumisega õige arvu leidma, või kaotab mängu.<br>Nüüd ei sõltu meie tsükkel enam ainult sellest kas kasutaja arvas sõna ära või mitte, vaid ka järele jäänud katsete arvust. ' +
    'Ka siin võid vabalt ise valida, kas soovid lisada katsete tingimuse tsüklitingimusse või tsükli sisusse koos <span class="fst-italic">break</span>-käsuga.', null),
  new ExerciseHint('Alustame võib-olla sellest, et lisame muutuja katsete arvu jaoks.', 'katseid = <span class="code-number">5</span>'),
  new ExerciseHint('Pärast iga pakkumist tahame hakata seda katsete arvu vähendama. Tsükli tahame lõpetada kui katsete arv jõuab nullini.', null),
  new ExerciseHint('Lisame seekord siin katsete tingimuse tsüklitingimusse. Tsükli sees lõpetab <span class="fst-italic">break</span>-käsk ' +
    'tsükli kui kasutaja pakub arvu õigest ning tsüklitingimus lõpetab tsükli juhul kui katsed saavad otsa. Muidugi võib lisada mõlemad tingimused ka kas ' +
    'tsüklitingimusse või tsükli sisse. Tsüklitingimuses tahame tsüklit jätkata seni kuni katsete arv on suurem kui null.',
    '<span class="code-bold">while</span> katseid &gt; <span class="code-number">0</span>:'),
  new ExerciseHint('Tsükli sees tahame kõige lõpus vähendada katsete arvu ning siis väljastada järele jäänud katsete arvu ka kasutajale.', null),
  new ExerciseHint('Seda võime teha nii:', 'katseid -= <span class="code-number">1</span><br>' +
    '<span class="code-function">print</span>(<span class="code-string">"Jäänud katseid: "</span> + <span class="code-function">str</span>(katseid))'),
  new ExerciseHint('Kogu kood võiks kokku näha välja selline:',
    'salajane_arv = <span class="code-number">17</span><br>' +
    'katseid = <span class="code-number">5</span><br>' +
    '<span class="code-bold">while</span> katseid &gt; <span class="code-number">0</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;pakkumine = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Paku arvu vahemikus 1-100: "</span>))<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">if</span> salajane_arv == pakkumine:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Leidsid õige arvu!"</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">break</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">elif</span> pakkumine &lt; salajane_arv:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Salajane arv on suurem"</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">else</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Salajane arv on väiksem"</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;katseid -= <span class="code-number">1</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Jäänud katseid: "</span> + <span class="code-function">str</span>(katseid))')]

  guessNumberRandomExerciseHints = [new ExerciseHint('Siin ei olegi vaja teha muud, kui võtta eelmise ülesande lahendus ja lisada eeltoodud read.', null),
  new ExerciseHint('Kogu kood võiks lõpuks välja näha selline:',
    '<span class="code-bold">from</span> random <span class="code-bold">import</span> *<br><br>' +
    'salajane_arv = randint(<span class="code-number">0</span>, <span class="code-number">100</span>)<br>' +
    'katseid = <span class="code-number">5</span><br>' +
    '<span class="code-bold">while</span> katseid &gt; <span class="code-number">0</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;pakkumine = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Paku arvu vahemikus 1-100: "</span>))<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">if</span> salajane_arv == pakkumine:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Leidsid õige arvu!"</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">break</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">elif</span> pakkumine &lt; salajane_arv:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Salajane arv on suurem"</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">else</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Salajane arv on väiksem"</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;katseid -= <span class="code-number">1</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Jäänud katseid: "</span> + <span class="code-function">str</span>(katseid))')]
}

//todo: tsüklite teema jaoks harjutuse idee: mäng, mis küsib järjest sõnu ja iga sõna peab algama selle tähega, millega eelmine lõppes.
//todo: mäng lõppeb kui kasutaja sisestab ebasobiva sõna. Võiks ka kokku lugeda, mitu punkti kasutaja teenis. Lisaks siis kui saab sõnedest natuke rääkida?
