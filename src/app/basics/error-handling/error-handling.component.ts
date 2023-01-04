import {Component} from '@angular/core';
import {ExerciseHint} from "../../models/exercise-hint.model";
import {TestAnswer} from "../../models/test-answer.model";

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.scss']
})
export class ErrorHandlingComponent {

  tryTestCode = '<span class="code-bold">try</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;a = <span class="code-function">int</span>(<span class="code-string">"kolm"</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;b = <span class="code-function">int</span>(<span class="code-string">"14"</span>)<br>' +
    '<span class="code-bold">except </span><span class="code-function">ValueError</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;a = <span class="code-number">0</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;b = <span class="code-number">0</span><br>' +
    '<span class="code-function">print</span>(a)<br>' +
    '<span class="code-function">print</span>(b)';
  tryTestItems = [new TestAnswer('0, 14', false, 'Kui <span class="fst-italic">try</span>-osas tekib viga, siis ülejäänud ridu sealt ei täideta. ' +
    'Minnakse kohe <span class="fst-italic">except</span>-osa juurde ja täidetakse sealsed read.'),
  new TestAnswer('0, 0', true, 'Jah, <span class="fst-italic">try</span>-osas tekib erind, mis püütakse kinni. Püünises omistatakse uus väärtus nii muutujale <span class="fst-italic">a</span> kui ka <span. class="fst-italic">b</span.>'),
  new TestAnswer('0, 14', false, 'Kas <span class="fst-italic">b</span> väärtus saab olla 14?'),
  new TestAnswer('kolm, 14', false, 'Sõne <span class="fst-italic">"kolm"</span> proovitakse teisendada täisarvuks ja see tekitab erindi. Kui erind kinni püütakse, ' +
    'siis omistatakse muutujatele teised väärtused.'),
  new TestAnswer('Veateade', false, 'Siin küll tekib erind, kuid see erind püütakse ka kinni.')]

  errorLinesCode = '<span class="code-comment">1&nbsp;&nbsp;&nbsp;&nbsp;</span>vanus = <span class="code-number">17</span><br>' +
    '<span class="code-comment">2&nbsp;&nbsp;&nbsp;&nbsp;</span> <span class="code-bold">if</span> vanus &gt;= <span class="code-number">18</span>:<br>' +
    '<span class="code-comment">3&nbsp;&nbsp;&nbsp;&nbsp;</span> &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Oled täisealine"</span>)<br>' +
    '<span class="code-comment">4&nbsp;&nbsp;&nbsp;&nbsp;</span> <span class="code-bold">elif</span>:<br>' +
    '<span class="code-comment">5&nbsp;&nbsp;&nbsp;&nbsp;</span> &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Oled alla 18"</span>)<br>' +
    '<span class="code-comment">6&nbsp;&nbsp;&nbsp;&nbsp;</span> <span class="code-bold">else</span>:<br>' +
    '<span class="code-comment">7&nbsp;&nbsp;&nbsp;&nbsp;</span> &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(Oled alaealine)<br>';
  errorLinesItems = [new TestAnswer('1', false, 'Muutujale <span class="fst-italic">vanus</span> väärtuse omistamine peaks toimima vigadeta.'),
  new TestAnswer('2', false, 'Tingimuslause <span class="fst-italic">if</span>-haru tingimus 2. real ei ole vigane.'),
  new TestAnswer('3', false, '3. rida ei tekita probleeme. Taane on olemas ja <span class="fst-italic">print</span>-funktsioonile antakse argumendiks sõne.'),
  new TestAnswer('4', true, 'Tingimuslause <span class="fst-italic">elif</span>-harul peab ka tingimus olema.'),
  new TestAnswer('5', false, '5. read väljastus ei tohiks probleeme tekitada. Taane on olemas ja <span class="fst-italic">print</span>-funktsiooni kutsutakse korrektselt välja.'),
  new TestAnswer('6', false, '6. real on kõik korras, <span class="fst-italic">else</span>-harul ei pea tingimust olema.'),
  new TestAnswer('7', true, 'Jälgi mida <span class="fst-italic">print</span>-funktsioonidele argumentideks antakse, kas need väärtused on igalpool korrektsed?')]

  pizzaExerciseHints = [new ExerciseHint('Alustada võib nii põhiprogrammi kui funktsiooni muutmisest. Alustame siin näiteks funktsioonist. ' +
    'Sinna võib kohe algusesse lisada tingimuslause, mis kontrolliks, ega läbimõõt pole 20, 28 ja 38 seas. Kui ei ole, siis saame tõstatada uue erindi.', null),
  new ExerciseHint('Tingimuslauses saame teha kolm võrdlust ja siduda need omavahel tehtega <span class="fst-italic">and</span>. Erindi tõstatamiseks kasutame ' +
    'võtmesõna <span class="fst-italic">raise</span> ja võime lisada ka väikse teate.', '<span class="code-bold">if</span> läbimõõt != <span class="code-number">20 </span>' +
    '<span class="code-bold">and</span> läbimõõt != <span class="code-number">28 </span><span class="code-bold">and</span> läbimõõt != <span class="code-number">38</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">raise </span><span class="code-function">ValueError</span>(<span class="code-string">"läbimõõt peab olema 20, 28 või 38"</span>)'),
  new ExerciseHint('Järgmiseks tuleks kirjutada põhiprogramm. Alustuseks võib ilma erindite püüdmiseta prgrammi valmis kirjutada ja seejärel lisada <span class="fst-italic">try-excepi</span>. ' +
    'Põhiprogrammis peaks kõigepealt kasutajalt läbimõõdu küsima, selle täisarvuks teisendama ning seejärel funktsiooni välja kutsuma ja väljastama funktsiooni tagastatud väärtuse.', null),
  new ExerciseHint('Kasutajalt saadud läbimõõdu võime salvestada muutujasse ja seejärel kasutada seda muutujat funktsiooni argumendina.',
    'läbimõõt = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Sisesta pitsa läbimõõt: "</span>))<br>' +
    '<span class="code-function">print</span>(<span class="code-string">"Vajaminev taignakogus grammides: "</span> + <span class="code-function">str</span>(pitsatainas(läbimõõt)))'),
  new ExerciseHint('Nüüd on põhiprogrammi sisu ka olemas, vaja ainult lisada erindi püüdmine. Erind võib tekkida nii sisendi teisendamisel täisarvuks kui ka funktsiooni väljakutsel. Mõlemal ' +
    'juhul võib tekkida <span class="fst-italic">ValueError</span>, seega võime lisada mõlemad read sama <span class="fst-italic">try</span>-bloki sisse ja kirjutada sama püünise ' +
    'mõlema rea jaoks.', null),
  new ExerciseHint('Erindi püüdmise ja teate väljastamise saab teha nii:',
    '<span class="code-bold">try</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;läbimõõt = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Sisesta pitsa läbimõõt: "</span>))<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Vajaminev taignakogus grammides: "</span> + <span class="code-function">str</span>(pitsatainas(läbimõõt)))<br>' +
    '<span class="code-bold">except </span><span class="code-function">ValueError</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Sisend ei ole 20, 28 ega 38!"</span>)'),
  new ExerciseHint('Kogu kood kokkupandult näeb välja selline:',
    '<span class="code-bold">def</span> <span class="code-def"> pitsatainas</span>(läbimõõt):<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">if</span> läbimõõt != <span class="code-number">20 </span>' +
    '<span class="code-bold">and</span> läbimõõt != <span class="code-number">28 </span><span class="code-bold">and</span> läbimõõt != <span class="code-number">38</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">raise </span><span class="code-function">ValueError</span>(<span class="code-string">"läbimõõt peab olema 20, 28 või 38"</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;pindala = (läbimõõt / <span class="code-number">2</span>)**<span class="code-number">2</span> * 3.14<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;taigna_kogus = <span class="code-function">round</span>(pindala * <span class="code-number">2.3</span>, <span class="code-number">1</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">return </span> taigna_kogus<br><br>' +
    '<span class="code-bold">try</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;läbimõõt = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Sisesta pitsa läbimõõt: "</span>))<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Vajaminev taignakogus grammides: "</span> + <span class="code-function">str</span>(pitsatainas(läbimõõt)))<br>' +
    '<span class="code-bold">except </span><span class="code-function">ValueError</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Sisend ei ole 20, 28 ega 38!"</span>)')];

  competitionExerciseHints = [new ExerciseHint('Selle ülesande puhul võime alustada faili nime küsimisest ja faili avamisest. See peaks toimuma tsüklis koos faili avamisel ' +
    'tekkiva <span class="fst-italic">FileNotFoundError</span>-erindi püüdmisega. Kui fail õnnestub vigadeta avada, siis võib tsükli lõpetada ja programmiga edasi minna.', null),
  new ExerciseHint('Faili avamise tsüklis saab korraldada nii:',
    '<span><span class="code-bold">while True</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">try</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;faili_nimi = <span class="code-function">input</span>(<span class="code-string">"Sisesta teatejooksu tulemuste faili nimi: "</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fail = <span class="code-function">open</span>(faili_nimi)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">break</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">except </span><span class="code-function">FileNotFoundError</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Sellist faili ei õnnestu avada!"</span>)'),
  new ExerciseHint('Kuna me teame, et tsüklist ei saa me enne edasi, kui fail on leitud ja avatud, siis võime julgelt põhiprogrammi kirjutada koodi, mis loeb faili sisu.', null),
  new ExerciseHint('Kuna iga rea kohta on meil vaja küsida õpilaste arvu, siis sobiks siin kõige paremini faili rida rea kaupa läbimine, mitte kogu sisu korraga sisse lugemine.', null),
  new ExerciseHint('Samuti tuleks mõelda sellele, et faili rida rea haaval tsüklis lugedes, peame kokku liitma kasutajalt küsitud õpilaste arvud. Selle õpilaste arvu hoiustamiseks võiks enne tsüklit luua muutuja.', null),
  new ExerciseHint('Õpilaste arvu muutuja ja tsükli algus:', 'õpilaste_arv = <span class="code-number">0</span><br>' +
    '<span class="code-bold">for</span> klass <span class="code-bold">in</span> fail:'),
  new ExerciseHint('Tsükli sees tuleks kasutajalt küsida õpilaste arvu ja see täisarvuks teisendada. Seda peaks nüüd jälle tegema tsüklis ja küsima seda arvu nii kaua, kuni ' +
    'kasutaja sisend õnnestub täisarvuks teisendada.', null),
  new ExerciseHint('Ei tasu ka unustada, et kui soovime klassi nime väljastada, siis võiks sealt lõpust reavahetuse sümboli eemaldada:',
    '<span class="code-bold">while True</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">try</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;klassi_õpilaste_arv = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Mitu õpilast on "</span> + klass.strip() + <span class="code-string">" klassis? "</span>))<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">break</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">except </span><span class="code-function">ValueError</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Vigane arv!"</span>)'),
  new ExerciseHint('Kui klassi õpilaste arv on kätte saadud, siis tuleks ka kogu õpilaste arvu selle võrra suurendada:', 'õpilaste_arv += klassi_õpilaste_arv'),
  new ExerciseHint('Kõige lõpus tuleks kasutajale väljastada, mitu kingitust on vaja teha:', '<span class="code-function">print</span>(<span class="code-string">"Kokku on vaja teha "</span> + ' +
    '<span class="code-function">str</span>(õpilaste_arv) + <span class="code-string">" kingitust."</span>)'),
  new ExerciseHint('Kogu lahendus:',
    '<span><span class="code-bold">while True</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">try</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;faili_nimi = <span class="code-function">input</span>(<span class="code-string">"Sisesta teatejooksu tulemuste faili nimi: "</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fail = <span class="code-function">open</span>(faili_nimi)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">break</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">except </span><span class="code-function">FileNotFoundError</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Sellist faili ei õnnestu avada!"</span>)<br>' +
    'õpilaste_arv = <span class="code-number">0</span><br>' +
    '<span class="code-bold">for</span> klass <span class="code-bold">in</span> fail:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">while True</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">try</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;klassi_õpilaste_arv = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Mitu õpilast on "</span> + klass.strip() + <span class="code-string">" klassis? "</span>))<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">break</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">except </span><span class="code-function">ValueError</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Vigane arv!"</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;õpilaste_arv += klassi_õpilaste_arv<br>' +
    '<span class="code-function">print</span>(<span class="code-string">"Kokku on vaja teha "</span> + ' +
    '<span class="code-function">str</span>(õpilaste_arv) + <span class="code-string">" kingitust."</span>)')];

}
