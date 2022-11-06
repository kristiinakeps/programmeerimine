import {Component} from '@angular/core';
import {FillBlankDropdownItem} from "../models/fill-blank-dropdown-item.model";
import {TestAnswer} from "../models/test-answer.model";
import {ExerciseHint} from "../models/exercise-hint.model";

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss']
})
export class ConditionsComponent{

  booleanTrue = 'True'
  booleanFalse = 'False'
  booleanValues = [this.booleanFalse, this.booleanTrue]
  logicalOperatorsTest = [new FillBlankDropdownItem('5 < 2 or 4 != 4', '', this.booleanFalse, this.booleanValues, this.booleanValues[0]),
    new FillBlankDropdownItem('"Lill".lower() == "lill"', '', this.booleanTrue, this.booleanValues, this.booleanValues[0]),
    new FillBlankDropdownItem('not (5 != 4 and 5 > 0)', '', this.booleanFalse, this.booleanValues, this.booleanValues[0]),
    new FillBlankDropdownItem('not 5 == 4 and 5 > 0', '', this.booleanTrue, this.booleanValues, this.booleanValues[0]),
    new FillBlankDropdownItem('"aed" < "puu" and not "a" == "A"', '', this.booleanTrue, this.booleanValues, this.booleanValues[0])];

  conditionsIndent = 'taane';
  conditionsNoIndent = 'taane puudub';
  conditionsIndentation = [this.conditionsNoIndent, this.conditionsIndent];
  conditionsIndentationTest = [new FillBlankDropdownItem('', 'vastus = int(input("Kui palju on 2 + 2? "))', this.conditionsNoIndent, this.conditionsIndentation, this.conditionsIndentation[0]),
    new FillBlankDropdownItem('', 'if vastus == 4:', this.conditionsNoIndent, this.conditionsIndentation, this.conditionsIndentation[0]),
      new FillBlankDropdownItem('', 'print("Sinu vastus on õige.")', this.conditionsIndent, this.conditionsIndentation, this.conditionsIndentation[0]),
    new FillBlankDropdownItem('', 'print("Tubli!")', this.conditionsIndent, this.conditionsIndentation, this.conditionsIndentation[0]),
    new FillBlankDropdownItem('', 'else:', this.conditionsNoIndent, this.conditionsIndentation, this.conditionsIndentation[0]),
    new FillBlankDropdownItem('', 'print("Sinu vastus on vale.")', this.conditionsIndent, this.conditionsIndentation, this.conditionsIndentation[0])
  ]

  conditionsOutputLinesCode = 'arv = <span class="code-number">11</span><br>' +
    '<span class="code-bold">if</span> arv &gt; <span class="code-number">0</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Arv on positiivne."</span>)<br>' +
    '<span class="code-bold">elif</span> arv == <span class="code-number">11</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Arv on 11."</span>)<br>' +
    '<span class="code-bold">if</span> arv &lt;  <span class="code-number">10</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Arv on väiksem kui 10."</span>)<br>' +
    '<span class="code-bold">else</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Arv on suurem kui 10."</span>)';
  condtionsOutputLinesTest = [new TestAnswer('Arv on positiivne.', true, 'Kas esimene tingimus <span class="fst-italic">arv &gt; 0</span> on väär?'),
    new TestAnswer('Arv on 11.', false, 'Kas <span class="fst-italic">elif</span>-tingimust ülse kontrollitakse?'),
    new TestAnswer('Arv on väiksem kui 10.', false, 'Kas tingimus <span class="fst-italic">arv &lt; 10</span> on tõene?'),
    new TestAnswer('Arv on suurem kui 10.', true, 'Kas programm ei peaks minema lõpuks ka <span class="fst-italic">else</span>-harusse?')]

  gradingExerciseHints = [new ExerciseHint("Alustada tuleb saadud punktide arvu küsimisest. Selleks sobib <span class='fst-italic'>input</span>-käsk.", null),
  new ExerciseHint("Punktide arv tuleks teisendada täisarvuks ning salvestada kuhugi muutujasse. Seda võib teha kohe samal real sisendi küsimisega.", null),
  new ExerciseHint("Variant punktide küsimiseks ja teisendamiseks:", "punkte = <span class='code-function'>int</span>(<span class='code-function'>input</span>(<span class='code-string'>\"Sisesta saadud punktide arv: \"</span>))"),
  new ExerciseHint("Nüüd on vaja hakata tingimusi koostama. Esimese tingimuse jaoks kasuta võtmesõna <span class='fst-italic'>if</span>.", null),
  new ExerciseHint("Esimese tingimuse võid vabalt ise valida. Võid alustada kontrollimist sellest, et kas äkki sisestatud punktide arv on lubatud piiridest väljas. Või kas see vastab näiteks ühele hinnetest.", null),
  new ExerciseHint("Kui tahaksime kontrollida esimese asjana, kas punktide arv on lubatud piiridest väljas, siis võiksime seda teha nii:",
    "<span class='code-bold'>if</span> punkte &lt; <span class='code-number'>0</span> <span class='code-bold'>or</span> punkte &gt; <span class='code-number'>30</span>:<br>" +
    "&nbsp;&nbsp;&nbsp;&nbsp;<span class='code-function'>print</span>(<span class='code-string'>\"Selline punktide arv pole võimalik.\"</span>)"),
  new ExerciseHint("Teise tingimuse jaoks peame valima mõne hinnetest. Hea on alustada kas kõige kõrgemast või kõige madalamast hindest. Teise tingimuse jaoks võime kasutada <span class='fst-italic'>elif</span>-tingimust.", null),
  new ExerciseHint("Kui tahame teiseks kontrollida näiteks punktide vastavust hindele 5, võime kontrolli kirjutada nii:",
    "<span class='code-bold'>elif</span> punkte &gt;=  <span class='code-number'>25</span>:<br>" +
    "&nbsp;&nbsp;&nbsp;&nbsp;<span class='code-function'>print</span>(<span class='code-string'>\"Saadud hinne on 5.\"</span>)"),
  new ExerciseHint("Sarnaselt eelmisele <span class='fst-italic'>elif</span>-harule, võime nüüd koostada ka järgmised harud. Hinde 4 jaoks peame kontrollima, " +
    "kas punktide arv on &gt;= 20.", null),
  new ExerciseHint("Kõige viimase hinde jaoks pole enam <span class='fst-italic'>elif</span>-haru vaja, piisab ka lihtsalt <span class='fst-italic'>else</span>-harust.", null),
  new ExerciseHint("Allpool on näide ühest lõplikust lahendusest. Tegelikult on seda ülesannet võimalik mitmel erinevad moel lahendada, siin on toodud vaid üks variant.",
    "punkte = <span class='code-function'>int</span>(<span class='code-function'>input</span>(<span class='code-string'>\"Sisesta saadud punktide arv: \"</span>))<br>" +
    "<span class='code-bold'>if</span> punkte &lt; <span class='code-number'>0</span> <span class='code-bold'>or</span> punkte &gt; <span class='code-number'>30</span>:<br>" +
    "&nbsp;&nbsp;&nbsp;&nbsp;<span class='code-function'>print</span>(<span class='code-string'>\"Selline punktide arv pole võimalik.\"</span>)<br>" +
    "<span class='code-bold'>elif</span> punkte &gt;=  <span class='code-number'>25</span>:<br>" +
    "&nbsp;&nbsp;&nbsp;&nbsp;<span class='code-function'>print</span>(<span class='code-string'>\"Saadud hinne on 5.\"</span>)<br>" +
    "<span class='code-bold'>elif</span> punkte &gt;=  <span class='code-number'>20</span>:<br>" +
    "&nbsp;&nbsp;&nbsp;&nbsp;<span class='code-function'>print</span>(<span class='code-string'>\"Saadud hinne on 4.\"</span>)<br>" +
    "<span class='code-bold'>elif</span> punkte &gt;=  <span class='code-number'>10</span>:<br>" +
    "&nbsp;&nbsp;&nbsp;&nbsp;<span class='code-function'>print</span>(<span class='code-string'>\"Saadud hinne on 3.\"</span>)<br>" +
    "<span class='code-bold'>else</span>:<br>" +
    "&nbsp;&nbsp;&nbsp;&nbsp;<span class='code-function'>print</span>(<span class='code-string'>\"Saadud hinne on 2.\"</span>)<br>")];

  busExerciseHints = [new ExerciseHint('Esimese asjana tuleks kasutajalt küsida õpilaste ja bussi istekohtade arv. Vajadusel tuleb need ka teisendada sobivaks tüübiks.', null),
  new ExerciseHint('Nii õpilaste arv kui bussi istekohtade arv peaksid olema täisarvud.', 'õpilasi = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Sisesta õpilaste arv: "</span>))<br>' +
    'istekohti = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Sisesta bussi istekohtade arv: "</span>))'),
  new ExerciseHint('Nüüd on vaja välja arvutada, mitu bussi tellida. Selleks on meil vaja teada, kas õpilased mahuvad bussidesse täpselt või jääb mõni buss poolikult täidetuks.', null),
  new ExerciseHint('Kuidas leida kas õpilased mahuvad bussidesse täpselt? Selleks saame kasutada jääki. Kui meil on 25 õpilast ja 20 istekohta bussis, siis ' +
    'õpilaste arvu jagamisel istekohtade arvuga tekib meil jääk 5, sest 5 õpilast jääb üle. Kui jääk on 0, siis järelikult kedagi üle ei jäänud ja õpilased mahtusid täpselt bussidesse ära. Jäägi leidmiseks saab Pythonis kasutada tehet %. Kuidas see tingimus kirja panna?', null),
  new ExerciseHint('Leiame jäägi õpilaste arvu jagamisel istekohtade arvuga ja kontrollime kas see on 0.', '<span class="code-bold">if</span> õpilasi % istekohti == <span class="code-number">0</span>:'),
  new ExerciseHint('Nüüd järgmiseks peame mõtlema, kuidas siis sellisel juhul busside arvu leida. Siin sobib hästi lihtsalt täisarvuline jagamine.', null ),
  new ExerciseHint('Busside arvu leidmine, kui õpilased mahuvad bussidesse täpselt ära:', 'busside_arv = õpilasi // istekohti'),
  new ExerciseHint('Kui õpilased ei mahtunud bussi täpselt ära, siis järelikult peame tellima ühe lisabussi. Siin meil pole vaja uut tingimust kirjutada, saame kasutada lihtsalt ' +
    '<span class="fst-italic">else</span>-haru. Busside arvu saame leida sarnaselt eelmisele olukorrale, aga nüüd liidame ise veel ühe bussi juurde.', null),
  new ExerciseHint('Busside arvu leidmine <span class="fst-italic">else</span>-harus, kui õpilasi jäi üle:', '<span class="code-bold">else</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;busside_arv = õpilasi // istekohti + 1'),
  new ExerciseHint('Kõige lõpuks jääb tulemuse väljastamine. Väljastuse tahame teha olenemata sellest, mis harus busside arv välja arvutati, ' +
    'seega selle võime lisada pärast tingimuslause konstruktsiooni:', '<span class="code-function">print</span>(<span class="code-string">"Vaja läheb "</span> + ' +
    '<span class="code-function">str</span>(busside_arv) + <span class="code-string">" bussi."</span>)'),
  new ExerciseHint('Lõpptulemus võiks välja näha näiteks selline:', 'õpilasi = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Sisesta õpilaste arv: "</span>))<br>' +
    'istekohti = <span class="code-function">int</span>(<span class="code-function">input</span>(<span class="code-string">"Sisesta bussi istekohtade arv: "</span>))<br>' +
    '<span class="code-bold">if</span> õpilasi % istekohti == <span class="code-number">0</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;busside_arv = õpilasi // istekohti<br>' +
    '<span class="code-bold">else</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;busside_arv = õpilasi // istekohti + 1<br>' +
    '<span class="code-function">print</span>(<span class="code-string">"Vaja läheb "</span> + ' +
    '<span class="code-function">str</span>(busside_arv) + <span class="code-string">" bussi."</span>)')];
}
