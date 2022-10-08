import {Component} from '@angular/core';
import {CategorizeTestCategory} from "../models/categorize-test-category.model";
import {CategorizeTestItem} from "../models/categorize-test-item.model";
import {FillBlankDropdownItem} from "../models/fill-blank-dropdown-item.model";
import {ExerciseHint} from "../models/exercise-hint.model";
import {TestAnswer} from "../models/test-answer.model";

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html'
})
export class VariablesComponent {

  readonly TYPE_STR = 'str';
  readonly TYPE_INT = 'int';
  readonly TYPE_FLOAT = 'float';
  readonly TYPE_BOOLEAN = 'boolean';

  testInt = new CategorizeTestCategory('Täisarv (int)', this.TYPE_INT, []);
  testFloat = new CategorizeTestCategory('Ujukomaarv (float)', this.TYPE_FLOAT, []);
  testStr = new CategorizeTestCategory("Sõne (str)", this.TYPE_STR, []);
  testBoolean = new CategorizeTestCategory('Tõeväärtus (boolean)', this.TYPE_BOOLEAN, []);
  testCategories = [this.testInt, this.testFloat, this.testStr, this.testBoolean];
  testItems = [new CategorizeTestItem('"Täna on ilus ilm"', this.TYPE_STR), new CategorizeTestItem('5', this.TYPE_INT),
  new CategorizeTestItem('4.3', this.TYPE_FLOAT), new CategorizeTestItem('True', this.TYPE_BOOLEAN), new CategorizeTestItem('False', this.TYPE_BOOLEAN),
  new CategorizeTestItem('23', this.TYPE_INT), new CategorizeTestItem('"45.2"', this.TYPE_STR), new CategorizeTestItem('"Arbuus"', this.TYPE_STR),
  new CategorizeTestItem('1.67', this.TYPE_FLOAT), new CategorizeTestItem('7', this.TYPE_INT), new CategorizeTestItem('5.0', this.TYPE_FLOAT),
  new CategorizeTestItem('12.99', this.TYPE_FLOAT), new CategorizeTestItem('100', this.TYPE_INT), new CategorizeTestItem('"a"', this.TYPE_STR)];
  testCorrectAnwser = 'Tubli! Kõik väärtused on õigete andmetüüpide tulpades!';

  operatorsNumbers = ['+', '-', '*', '/', '//'];
  operatorsStrings = ['+', '*', '.upper()', '.capitalize()']
  operatorsTest = [new FillBlankDropdownItem('2', '4 = 6', '+', this.operatorsNumbers, this.operatorsNumbers[0]),
                  new FillBlankDropdownItem('9', '2 = 4.5', '/', this.operatorsNumbers, this.operatorsNumbers[0]),
                  new FillBlankDropdownItem('"Õpime tehteid"', '= "ÕPIME TEHTEID"', '.upper()', this.operatorsStrings, this.operatorsStrings[0]),
                  new FillBlankDropdownItem('7', '3 = 2', '//', this.operatorsNumbers, this.operatorsNumbers[0]),
                  new FillBlankDropdownItem('"Muutujad"', '" ja andmetüübid" = "Muutujad ja andmetüübid"', '+', this.operatorsStrings, this.operatorsStrings[0])];

  greetingExerciseHints = [new ExerciseHint("Kõigepealt on vaja kasutajalt tema nime küsida, selleks sobiks näiteks <span class='fst-italic'>input</span>-käsk.", null),
  new ExerciseHint("Kasutaja nime küsimist ja salvestamist muutujasse saab teha nii:", "nimi = <span class='code-function'>input</span>(<span class='code-string'>\"Sisesta oma nimi: \"</span>)"),
  new ExerciseHint("Kasutaja nime korrastamiseks sobib sõne meetod <span class='fst-italic'>title()</span>.", null),
  new ExerciseHint("Nime korrastamist saab teha näiteks nii:", "nimi = nimi.title()"),
  new ExerciseHint("Nime korrastamise järel on vaja kokku panna sõne, mida kasutajale väljastada tahame.", null),
  new ExerciseHint("Tervituse saab kokku panna sõnesid liites: ", "<span class='code-string'>\"Tere tulemast programmeerimise kursusele, \"</span> + nimi + <span class='code-string'>\"!\"</span>"),
  new ExerciseHint("Viimase sammuna tuleb tervitus kasutajale väljastada, kasutades <span class='fst-italic'>print</span>-käsku.", null),
  new ExerciseHint("Väljastamist saab teha nii:", "<span class='code-function'>print</span>(<span class='code-string'>\"Tere tulemast programmeerimise kursusele, \"</span> + nimi + <span class='code-string'>\"!\"</span>)")];

  sandwichCakeExerciseHints = [new ExerciseHint("Alustada võiks kasutajalt sisendi küsimisega. Iga sisendi puhul tasuks ka mõelda, mis tüüpi väärtust me tahame " +
    "ja kas on vaja teha tüübiteisendus.", null),
  new ExerciseHint("Kõik kolm sisendit võiks olla täisarvud ja kuna <span class='fst-italic'>input</span>-käsk tagastab meile kõik sõnena, peame " +
    "need ise muutma <span class='fst-italic'>int</span>-tüübiks.", null),
  new ExerciseHint("Sisendi küsimise ja tüübiteisenduse võib teha näiteks nii:", "pakid = <span class='code-function'>int</span>(<span class='code-function'>input</span>(<span class='code-string'>\"Sisesta röstsaiapakkide arv: \"</span>))<br>" +
    "viilud_pakis = <span class='code-function'>int</span>(<span class='code-function'>input</span>(<span class='code-string'>\"Sisesta viilude arv ühes pakis: \"</span>))<br>" +
    "sööjad = <span class='code-function'>int</span>(<span class='code-function'>input</span>(<span class='code-string'>\"Sisesta sööjate arv: \"</span>))"),
  new ExerciseHint("Meil on vaja teada, mitu röstsaiaviilu meil kokku on. Selleks saame korrutada pakkide arvu igas pakis olevate viilude arvuga.", null),
  new ExerciseHint("Programmis näeks see välja nii:", "kokku_viilud = pakid * viilud_pakis"),
  new ExerciseHint("Nüüd on meil olemas ka kõikide viilude arv. Kihtide arvu saame kui jagame viilud tordisööjate arvuga. Kuid paneme tähele, et " +
    "tavalise jagamise puhul võime saada komakohaga arvu, kuid me tahame alati alla ümardatud täisarvu.", null),
  new ExerciseHint("Kihtide arvu leidmiseks saame kasutada jagamisel täisosa leidmist: ", "kihte = kokku_viilud // sööjad"),
  new ExerciseHint("Viimaks tuleb leitud kihtide arv ka kasutajale väljastada, kasutades <span class='fst-italic'>print</span>-käsku.", null),
  new ExerciseHint("Väljastuse saame teha nii:", "<span class='code-function'>print</span>(<span class='code-string'>\"Röstsaia on piisavalt \"</span> + <span class='code-function'>str</span>(kihte) + <span class='code-string'>\"-kihilise tordi jaoks.\"</span>)")]

  variableNamesTest = [new TestAnswer("3põrsakest", false, "Muutuja nimi ei tohi alata numbriga"),
  new TestAnswer("keskmine_pikkus", true, "Alakriipsu võib kasutada tühiku asemel"),
  new TestAnswer("&nimi", false, "Muutuja nimi ei tohi alata &-sümboliga"),
  new TestAnswer("inimeste arv", false, "Muutuja nimi ei tohi sisaldada tühikut"),
  new TestAnswer("_nimi", true, "Muutuja nimi tohib alata alakriipsuga")]

}
