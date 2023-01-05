import {Component} from '@angular/core';
import {FillBlankDropdownItem} from "../../models/fill-blank-dropdown-item.model";
import {TestAnswer} from "../../models/test-answer.model";
import {ExerciseHint} from "../../models/exercise-hint.model";

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

  conditionsOutputLinesCode = 'arv = 11\n' +
    'if arv > 0:\n' +
    '    print("Arv on positiivne.")\n' +
    'elif arv == 11:\n' +
    '    print("Arv on 11.")\n' +
    'if arv <  10:\n' +
    '    print("Arv on väiksem kui 10.")\n' +
    'else:\n' +
    '    print("Arv on suurem kui 10.")';
  condtionsOutputLinesTest = [new TestAnswer('Arv on positiivne.', true, 'Kas esimene tingimus <span class="fst-italic">arv &gt; 0</span> on väär?'),
    new TestAnswer('Arv on 11.', false, 'Kas <span class="fst-italic">elif</span>-tingimust ülse kontrollitakse?'),
    new TestAnswer('Arv on väiksem kui 10.', false, 'Kas tingimus <span class="fst-italic">arv &lt; 10</span> on tõene?'),
    new TestAnswer('Arv on suurem kui 10.', true, 'Kas programm ei peaks minema lõpuks ka <span class="fst-italic">else</span>-harusse?')]

  gradingExerciseHints = [new ExerciseHint("Alustada tuleb saadud punktide arvu küsimisest. Selleks sobib <span class='fst-italic'>input</span>-käsk.", null),
  new ExerciseHint("Punktide arv tuleks teisendada täisarvuks ning salvestada kuhugi muutujasse. Seda võib teha kohe samal real sisendi küsimisega.", null),
  new ExerciseHint("Variant punktide küsimiseks ja teisendamiseks:", 'punkte = int(input("Sisesta saadud punktide arv: "))'),
  new ExerciseHint("Nüüd on vaja hakata tingimusi koostama. Esimese tingimuse jaoks kasuta võtmesõna <span class='fst-italic'>if</span>.", null),
  new ExerciseHint("Esimese tingimuse võid vabalt ise valida. Võid alustada kontrollimist sellest, et kas äkki sisestatud punktide arv on lubatud piiridest väljas. Või kas see vastab näiteks ühele hinnetest.", null),
  new ExerciseHint("Kui tahaksime kontrollida esimese asjana, kas punktide arv on lubatud piiridest väljas, siis võiksime seda teha nii:",
    'if punkte < 0 or punkte > 30:\n' +
    '    print("Selline punktide arv pole võimalik.")'),
  new ExerciseHint("Teise tingimuse jaoks peame valima mõne hinnetest. Hea on alustada kas kõige kõrgemast või kõige madalamast hindest. Teise tingimuse jaoks võime kasutada <span class='fst-italic'>elif</span>-tingimust.", null),
  new ExerciseHint("Kui tahame teiseks kontrollida näiteks punktide vastavust hindele 5, võime kontrolli kirjutada nii:",
    'elif punkte >=  25:\n' +
    '    print("Saadud hinne on 5.")'),
  new ExerciseHint("Sarnaselt eelmisele <span class='fst-italic'>elif</span>-harule, võime nüüd koostada ka järgmised harud. Hinde 4 jaoks peame kontrollima, " +
    "kas punktide arv on &gt;= 20.", null),
  new ExerciseHint("Kõige viimase hinde jaoks pole enam <span class='fst-italic'>elif</span>-haru vaja, piisab ka lihtsalt <span class='fst-italic'>else</span>-harust.", null),
  new ExerciseHint("Allpool on näide ühest lõplikust lahendusest. Tegelikult on seda ülesannet võimalik mitmel erinevad moel lahendada, siin on toodud vaid üks variant.",
    'punkte = int(input("Sisesta saadud punktide arv: "))\n' +
    'if punkte < 0 or punkte > 30:\n' +
    '    print("Selline punktide arv pole võimalik.")\n' +
    'elif punkte >=  25:\n' +
    '    print("Saadud hinne on 5.")\n' +
    'elif punkte >=  20:\n' +
    '    print("Saadud hinne on 4.")\n' +
    'elif punkte >=  10:\n' +
    '    print("Saadud hinne on 3.")\n' +
    'else:\n' +
    '    print("Saadud hinne on 2.")')];

  busExerciseHints = [new ExerciseHint('Esimese asjana tuleks kasutajalt küsida õpilaste ja bussi istekohtade arv. Vajadusel tuleb need ka teisendada sobivaks tüübiks.', null),
  new ExerciseHint('Nii õpilaste arv kui bussi istekohtade arv peaksid olema täisarvud.', 'õpilasi = int(input("Sisesta õpilaste arv: "))\n' +
    'istekohti = int(input("Sisesta bussi istekohtade arv: "))'),
  new ExerciseHint('Nüüd on vaja välja arvutada, mitu bussi tellida. Selleks on meil vaja teada, kas õpilased mahuvad bussidesse täpselt või jääb mõni buss poolikult täidetuks.', null),
  new ExerciseHint('Kuidas leida kas õpilased mahuvad bussidesse täpselt? Selleks saame kasutada jääki. Kui meil on 25 õpilast ja 20 istekohta bussis, siis ' +
    'õpilaste arvu jagamisel istekohtade arvuga tekib meil jääk 5, sest 5 õpilast jääb üle. Kui jääk on 0, siis järelikult kedagi üle ei jäänud ja õpilased mahtusid täpselt bussidesse ära. Jäägi leidmiseks saab Pythonis kasutada tehet %. Kuidas see tingimus kirja panna?', null),
  new ExerciseHint('Leiame jäägi õpilaste arvu jagamisel istekohtade arvuga ja kontrollime kas see on 0.', 'if õpilasi % istekohti == 0:\n' +
    '    # siin tuleb leida busside arv'),
  new ExerciseHint('Nüüd järgmiseks peame mõtlema, kuidas siis sellisel juhul busside arvu leida. Siin sobib hästi lihtsalt täisarvuline jagamine.', null ),
  new ExerciseHint('Busside arvu leidmine, kui õpilased mahuvad bussidesse täpselt ära:', 'busside_arv = õpilasi // istekohti'),
  new ExerciseHint('Kui õpilased ei mahtunud bussi täpselt ära, siis järelikult peame tellima ühe lisabussi. Siin meil pole vaja uut tingimust kirjutada, saame kasutada lihtsalt ' +
    '<span class="fst-italic">else</span>-haru. Busside arvu saame leida sarnaselt eelmisele olukorrale, aga nüüd liidame ise veel ühe bussi juurde.', null),
  new ExerciseHint('Busside arvu leidmine <span class="fst-italic">else</span>-harus, kui õpilasi jäi üle:', 'else:\n' +
    '    busside_arv = õpilasi // istekohti + 1'),
  new ExerciseHint('Kõige lõpuks jääb tulemuse väljastamine. Väljastuse tahame teha olenemata sellest, mis harus busside arv välja arvutati, ' +
    'seega selle võime lisada pärast tingimuslause konstruktsiooni:', 'print("Vaja läheb " + str(busside_arv) + " bussi.")'),
  new ExerciseHint('Lõpptulemus võiks välja näha näiteks selline:', 'õpilasi = int(input("Sisesta õpilaste arv: "))\n' +
    'istekohti = int(input("Sisesta bussi istekohtade arv: "))\n' +
    'if õpilasi % istekohti == 0:\n' +
    '    busside_arv = õpilasi // istekohti\n' +
    'else:\n' +
    '    busside_arv = õpilasi // istekohti + 1\n' +
    'print("Vaja läheb " + str(busside_arv) + " bussi.")\n')];

  temperatureIfCode = 'temperatuur = int(input("Sisesta temperatuur: "))\n' +
    'if temperatuur < 15:\n' +
    '    print("Pane jope selga!")';
  temperatureAfterIfCode = 'temperatuur = int(input("Sisesta temperatuur: "))\n' +
    'if temperatuur < 15:\n' +
    '    print("Pane jope selga!")\n' +
    'print("Ilusat päeva!")';
  booleanCombineCode2 = 'False and True or not False and True';
  booleanCombineCode3 = 'False and True or True and True';
  booleanCombineCode4 = 'False or True';
  booleanCombineCode5 = 'True';
  booleanOrderCode2 = 'False and (True or not False and True)';

  temperatureIfElseCode = 'temperatuur = int(input("Sisesta temperatuur: "))\n' +
    'if temperatuur < 15:\n' +
    '    print("Pane jope selga!")\n' +
    'else:\n' +
    '    print("Jopet pole vaja!")\n' +
    'print("Ilusat päeva!")';
  temperatureNestedCode = 'temperatuur = int(input("Sisesta temperatuur: "))\n' +
    'if temperatuur < 15:\n' +
    '    if temperatuur < 0:\n' +
    '        print("Pane kasukas selga!")\n' +
    '    else:\n' +
    '        print("Pane jope selga!")\n' +
    'else:\n' +
    '    print("Jopet pole vaja!")\n' +
    'print("Ilusat päeva!")';
  temperatureElifCode = 'temperatuur = int(input("Sisesta temperatuur: "))\n' +
    'if temperatuur < 0:\n' +
    '    print("Pane kasukas selga!")\n' +
    'elif temperatuur < 15:\n' +
    '    print("Pane jope selga!")\n' +
    'else:\n' +
    '    print("Jopet pole vaja!")\n' +
    'print("Ilusat päeva!")';
  ifsCode = 'arv = 4\n' +
    'if arv > 0:\n' +
    '    print("Tegemist on positiivse arvuga.")\n' +
    'if arv != 5:\n' +
    '    print("Arv ei ole 5.")\n' +
    'if arv == 4:\n' +
    '    print("Arv on 4.")\n' +
    'if arv % 2 != 0:\n' +
    '    print("Tegemist on paaritu arvuga.")\n' +
    'else:\n' +
    '    print("Tegemist on paarisarvuga.")'
  elifsCode = 'arv = 4\n' +
    'if arv > 0:\n' +
    '    print("Tegemist on positiivse arvuga.")\n' +
    'elif arv != 5:\n' +
    '    print("Arv ei ole 5.")\n' +
    'elif arv == 4:\n' +
    '    print("Arv on 4.")\n' +
    'elif arv % 2 != 0:\n' +
    '    print("Tegemist on paaritu arvuga.")\n' +
    'else:\n' +
    '    print("Tegemist on paarisarvuga.")';
}
