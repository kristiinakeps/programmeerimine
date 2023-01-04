import {Component} from '@angular/core';
import {ExerciseHint} from "../../models/exercise-hint.model";
import {TestAnswer} from "../../models/test-answer.model";

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent {

  symmetricDifferenceTestCode = 'arvud = {<span class="code-number">7</span>, <span class="code-number">5</span>, <span class="code-number">3</span>, <span class="code-number">8</span>} ^ ' +
    '{<span class="code-number">5</span>, <span class="code-number">8</span>, <span class="code-number">12</span>}';
  symmetricDifferenceTestItems = [new TestAnswer('{7, 5, 3, 8, 5, 8, 12}', false, 'Hulgas ei tohiks olla korduvaid elemente.'),
  new TestAnswer('{7, 5, 3, 8, 12}', false, 'See vastus sobiks hulkade ühendi korral, aga me otsime praegu hulkade sümmeetrilist vahet.'),
  new TestAnswer('{5, 8}', false, 'See vastus sobiks hulkade ühisosa korral, aga siin otsime hulkade sümmeetrilist vahet.'),
  new TestAnswer('{7, 3, 12}', true, 'Õige! Hulkade sümmeetrilises vahes on kõik elemendid, mis esimevad ainult ühes hulkadest.'),
  new TestAnswer('{7, 3}', false, 'See oleks õige vastus, kui küsitaks hulkade vahet, kuid siin otsime sümmeetrilist vahet.')];

  methodsTestCode = 'loomad = {<span class="code-string">"põder"</span>, <span class="code-string">"hunt"</span>, <span class="code-string">"rebane"</span>,' +
    '<span class="code-string">"ilves"</span>}<br>' +
    'loomad.add(<span class="code-string">"karu"</span>)<br>' +
    'loomad.add(<span class="code-string">"rebane"</span>)<br>' +
    'loomad.remove(<span class="code-string">"ilves"</span>)';
  methodsTestItems = [new TestAnswer('{"põder", "hunt", "rebane", "ilves", "karu", "rebane"}', false, 'Hulgas ei tohiks olla korduvaid elemente.'),
  new TestAnswer('{"põder", "hunt", "rebane", "ilves"}', false, 'Algsesse hulka lisatakse mõni element juurde ja ka eemdaldatakse mõni.'),
  new TestAnswer('{"põder", "hunt", "rebane", "karu", "ilves"}', false, 'Selles hulgas on üks üleliigne element'),
  new TestAnswer('{"põder, "hunt", "rebane", "karu"}', true, 'Õige! Elementide lisamise ja eemdalamise järel näeb hulk välja selline.'),
  new TestAnswer('{"põder", "hunt", "rebane"}', false, 'Üks element on hulgast puudu.')];

  backpackHints = [new ExerciseHint('See ülesanne koosneb põhiliselt hulga operatsioonide tundmises. Esimese asjana on meil vaja saada kätte hulk, kus oleksid ' +
    'olemas nii kõik Meeli kui ka kõik Mihkli asjad. Millist hulga operatsiooni saaks selleks kasutada?', null),
  new ExerciseHint('Selleks sobiks hästi kahe hulga ühend. Ühendi saab leida kas operaatori <span class="fst-italic">|</span> abil või meetodiga ' +
    '<span class="fst-italic">union()</span>.', '<span class="code-function">print</span>(<span class="code-string">"Meelil ja Mihklil kokku on: "</span> + ' +
    '<span class="code-function">str</span>(meeli | mihkel))'),
  new ExerciseHint('Järgmiseks on meil vaja leida kõik asjad, mis on nii Meeli kui ka Mihkli koolikotis. Selleks kasutame hulkade ühisosa. Võib kasutada ' +
    'kas operaatorit <span class="fst-italic">&</span> või meetodit <span class="fst-italic">intersection()</span>.',
    '<span class="code-function">print</span>(<span class="code-string">"Meelil ja Mihlil mõlemal on: "</span> + ' +
    '<span class="code-function">str</span>(meeli & mihkel))'),
  new ExerciseHint('Kui tahame leida sellised esemes, mis on vaid Meelil või ainult Mihklil, siis saame kasutada hulkade vahet. Kõigepealt leiame vahe ühtepidi ja siis teistpidi. ' +
    'Vahe jaoks sobib operaator <span class="fst-italic">-</span> või meetod <span class="fst-italic">difference()</span>.',
    '<span class="code-function">print</span>(<span class="code-string">"Ainult Meelil on: "</span> + ' +
    '<span class="code-function">str</span>(meeli - mihkel))<br>' +
    '<span class="code-function">print</span>(<span class="code-string">"Ainult Mihklil on: "</span> + ' +
    '<span class="code-function">str</span>(mihkel - meeli))'),
  new ExerciseHint('Kokku näeb programm välja selline: ',
    'meeli = {<span class="code-string">"eesti keele õpik"</span>, <span class="code-string">"matemaatika õpik"</span>, ' +
    '<span class="code-string">"matemaatika vihik"</span>, <span class="code-string">"joonlaud"</span>, <span class="code-string">"sirkel"</span>, ' +
    '<span class="code-string">"akvarellvärvid"</span>, <span class="code-string">"värvipliiatsid"</span>, ' +
    '<span class="code-string">"pastakas"</span>, <span class="code-string">"ajaloo õpik"</span>, <span class="code-string">"bioloogia töövihik"</span>}<br>' +
    'mihkel = {<span class="code-string">"nätsupakk"</span>, <span class="code-string">"matemaatika õpik"</span>, ' +
    '<span class="code-string">"geograafia õpik"</span>, <span class="code-string">"joonlaud"</span>, <span class="code-string">"sirkel"</span>, ' +
    '<span class="code-string">"matemaatika vihik"</span>, <span class="code-string">"harilik pliiats"</span>, ' +
    '<span class="code-string">"pastakas"</span>, <span class="code-string">"ajaloo õpik"</span>}<br>' +
    '<span class="code-function">print</span>(<span class="code-string">"Meelil ja Mihklil kokku on: "</span> + ' +
    '<span class="code-function">str</span>(meeli | mihkel))<br>' +
    '<span class="code-function">print</span>(<span class="code-string">"Meelil ja Mihlil mõlemal on: "</span> + ' +
    '<span class="code-function">str</span>(meeli & mihkel))<br>' +
    '<span class="code-function">print</span>(<span class="code-string">"Ainult Meelil on: "</span> + ' +
    '<span class="code-function">str</span>(meeli - mihkel))<br>' +
    '<span class="code-function">print</span>(<span class="code-string">"Ainult Mihklil on: "</span> + ' +
    '<span class="code-function">str</span>(mihkel - meeli))' )];

}
