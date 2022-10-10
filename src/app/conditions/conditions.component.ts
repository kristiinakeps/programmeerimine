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
}

//tsüklite teema jaoks harjutuse idee: mäng, mis küsib järjest sõnu ja iga sõna peab algama selle tähega, millega eelmine lõppes.
//mäng lõppeb kui kasutaja sisestab ebasobiva sõna. Võiks ka kokku lugeda, mitu punkti kasutaja teenis.
