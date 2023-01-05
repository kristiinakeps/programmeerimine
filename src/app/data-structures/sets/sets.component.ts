import {Component} from '@angular/core';
import {ExerciseHint} from "../../models/exercise-hint.model";
import {TestAnswer} from "../../models/test-answer.model";

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent {

  symmetricDifferenceTestCode = 'arvud = {7, 5, 3, 8} ^ {5, 8, 12}\nprint(arvud)';
  symmetricDifferenceTestItems = [new TestAnswer('{7, 5, 3, 8, 5, 8, 12}', false, 'Hulgas ei tohiks olla korduvaid elemente.'),
  new TestAnswer('{7, 5, 3, 8, 12}', false, 'See vastus sobiks hulkade ühendi korral, aga me otsime praegu hulkade sümmeetrilist vahet.'),
  new TestAnswer('{5, 8}', false, 'See vastus sobiks hulkade ühisosa korral, aga siin otsime hulkade sümmeetrilist vahet.'),
  new TestAnswer('{7, 3, 12}', true, 'Õige! Hulkade sümmeetrilises vahes on kõik elemendid, mis esimevad ainult ühes hulkadest.'),
  new TestAnswer('{7, 3}', false, 'See oleks õige vastus, kui küsitaks hulkade vahet, kuid siin otsime sümmeetrilist vahet.')];

  methodsTestCode = 'loomad = {"põder", "hunt", "rebane","ilves"}\n' +
    'loomad.add("karu")\n' +
    'loomad.add("rebane")\n' +
    'loomad.remove("ilves")\n' +
    'print(loomad)';
  methodsTestItems = [new TestAnswer('{"põder", "hunt", "rebane", "ilves", "karu", "rebane"}', false, 'Hulgas ei tohiks olla korduvaid elemente.'),
  new TestAnswer('{"põder", "hunt", "rebane", "ilves"}', false, 'Algsesse hulka lisatakse mõni element juurde ja ka eemdaldatakse mõni.'),
  new TestAnswer('{"põder", "hunt", "rebane", "karu", "ilves"}', false, 'Selles hulgas on üks üleliigne element'),
  new TestAnswer('{"põder, "hunt", "rebane", "karu"}', true, 'Õige! Elementide lisamise ja eemdalamise järel näeb hulk välja selline.'),
  new TestAnswer('{"põder", "hunt", "rebane"}', false, 'Üks element on hulgast puudu.')];

  backpackHints = [new ExerciseHint('See ülesanne koosneb põhiliselt hulga operatsioonide tundmises. Esimese asjana on meil vaja saada kätte hulk, kus oleksid ' +
    'olemas nii kõik Meeli kui ka kõik Mihkli asjad. Millist hulga operatsiooni saaks selleks kasutada?', null),
  new ExerciseHint('Selleks sobiks hästi kahe hulga ühend. Ühendi saab leida kas operaatori <span class="fst-italic">|</span> abil või meetodiga ' +
    '<span class="fst-italic">union()</span>.', 'print("Meelil ja Mihklil kokku on: " + str(meeli | mihkel))'),
  new ExerciseHint('Järgmiseks on meil vaja leida kõik asjad, mis on nii Meeli kui ka Mihkli koolikotis. Selleks kasutame hulkade ühisosa. Võib kasutada ' +
    'kas operaatorit <span class="fst-italic">&</span> või meetodit <span class="fst-italic">intersection()</span>.',
    'print("Meelil ja Mihlil mõlemal on: " + str(meeli & mihkel))'),
  new ExerciseHint('Kui tahame leida sellised esemes, mis on vaid Meelil või ainult Mihklil, siis saame kasutada hulkade vahet. Kõigepealt leiame vahe ühtepidi ja siis teistpidi. ' +
    'Vahe jaoks sobib operaator <span class="fst-italic">-</span> või meetod <span class="fst-italic">difference()</span>.',
    'print("Ainult Meelil on: " + str(meeli - mihkel))\n' +
    'print("Ainult Mihklil on: " + str(mihkel - meeli))'),
  new ExerciseHint('Kokku näeb programm välja selline: ',
    'meeli = {"eesti keele õpik", "matemaatika õpik", "matemaatika vihik", "joonlaud", "sirkel", "akvarellvärvid", "värvipliiatsid", "pastakas", "ajaloo õpik", "bioloogia töövihik"}\n' +
    'mihkel = {"nätsupakk", "matemaatika õpik", "geograafia õpik", "joonlaud", "sirkel", "matemaatika vihik", "harilik pliiats", "pastakas", "ajaloo õpik"}\n' +
    'print("Meelil ja Mihklil kokku on: " + str(meeli | mihkel))\n' +
    'print("Meelil ja Mihlil mõlemal on: " + str(meeli & mihkel))\n' +
    'print("Ainult Meelil on: " + str(meeli - mihkel))\n' +
    'print("Ainult Mihklil on: " + str(mihkel - meeli))')];

  setsExamplesCode = 'arvud = {1, 5, 3, 1} # kuigi luues paneme sõnastikku kaks number 1, siis jääb sinna neist ainult üks\n' +
    'värvid = {"sinine", "punane", "kollane"}\n' +
    'segamini = {1, "esmaspäev", 14.5, True}\n' +
    'tühi = set() # tühi = {} loob tühja sõnastiku';
  uniqueElementsCode = 'print({4, 7, 7, 5, 9, 2, 3, 2, 7})';
  forLoopCode = 'nädalapäevad = {"esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev", "pühapäev"}\n' +
    'for päev in nädalapäevad:\n' +
    '    print(päev)';
  packpacksCode = 'meeli = {"eesti keele õpik", "matemaatika õpik", "matemaatika vihik", "joonlaud", "sirkel", "akvarellvärvid", "värvipliiatsid", "pastakas", "ajaloo õpik", "bioloogia töövihik"}\n' +
    'mihkel = {"nätsupakk", "matemaatika õpik", "geograafia õpik", "joonlaud", "sirkel", "matemaatika vihik", "harilik pliiats", "pastakas", "ajaloo õpik"}';

}
