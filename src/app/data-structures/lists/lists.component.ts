import {Component} from '@angular/core';
import {TestAnswer} from "../../models/test-answer.model";
import {ExerciseHint} from "../../models/exercise-hint.model";

@Component({
  selector: 'app-data-structures',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent{

  indexTestCode = 'koeratõud = [<span class="code-string">"spanjel"</span>, <span class="code-string">"terjer"</span>, ' +
    '<span class="code-string">"buldog"</span>, <span class="code-string">"taks"</span>, <span class="code-string">"mops"</span>]<br>' +
    '<span class="code-function">print</span>(koeratõud[<span class="code-number">3</span>])';
  indexTestItems = [new TestAnswer('spanjel', false, 'Spanjel asub indeksil 0.'),
    new TestAnswer('terjer', false, 'Terjer vastab hoopis indeksile 1.'),
    new TestAnswer('buldog', false, 'Buldog on küll järjendi kolmas element, aga hoopis indeksiga 2.'),
    new TestAnswer('taks', true, 'Õige! Indeksile 3 vastab tõesti taks.'),
    new TestAnswer('mops', false, 'Mopsil on järjendis hoopis indeks 4.')];

  negativeIndexTestCode = 'koeratõud = [<span class="code-string">"spanjel"</span>, <span class="code-string">"terjer"</span>, ' +
    '<span class="code-string">"buldog"</span>, <span class="code-string">"taks"</span>, <span class="code-string">"mops"</span>]<br>' +
    'koeratõud[<span class="code-number">-4</span>] = <span class="code-string">"lambakoer"</span><br>' +
    '<span class="code-function">print</span>(koeratõud)';
  negativeIndexTestItems = [new TestAnswer('["spanjel", "terjer", "buldog", "taks", "mops"]', false, 'Koodijupi teine rida muudab ühe elemendi järjendis ära.'),
    new TestAnswer('["spanjel", "lambakoer", "buldog", "taks", "mops"]', true, 'Õige! Negatiivsele indeksile -4 vastab selles järjendis teine element.'),
    new TestAnswer('["spanjel", "terjer", "buldog", "lambakoer", "mops"]', false, 'Indeksile -4 vastab üks teine element.'),
    new TestAnswer('["lambakoer", "terjer", "buldog", "taks", "mops"]', false, 'Negatiivse indeksi puhul tuleks hakata loendama elemente tagantpoolt ettepoole ja viimase elemendi indeks on -1.'),
    new TestAnswer('["spanjel", "terjer", "lambakoer", "taks", "mops"]', false, 'Selles järjendis on muudetud element indeksiga -3.')];

  splicingAndFunctionsTestCode = 'koostisosad = [<span class="code-string">"suhkur"</span>, <span class="code-string">"muna"</span>, ' +
    '<span class="code-string">"piim"</span>, <span class="code-string">"nisujahu"</span>, <span class="code-string">"sool"</span>]<br>' +
    'vähendatud_koostisosad = koostisosad[<span class="code-number">1</span>:<span class="code-number">3</span>]<br>' +
    '<span class="code-bold">if</span><span class="code-string"> "nisujahu" </span><span class="code-bold">in</span> vähendatud_koostisosad:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Retsept sisaldab nisujahu."</span>)<br>' +
    '<span class="code-bold">if</span><span class="code-string"> "suhkur" </span><span class="code-bold">not in</span> vähendatud_koostisosad:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Retseptis pole suhkrut."</span>)<br>' +
    '<span class="code-bold">if </span><span class="code-function">len</span>(vähendatud_koostisosad) &lt <span class="code-number">5</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Vaja läheb alla viie koostisosa."</span>)<br>' +
    '<span class="code-bold">else</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Koostisosasid on rohkem kui viis."</span>)<br>';
  splicingAndFunctionsTestItems = [new TestAnswer('Retsept sisaldab nisujahu.', false, 'Kas element "nisujahu" on olemas ka alamjärjendis?'),
    new TestAnswer('Retseptis pole suhkrut.', true, 'Kas pärast viilutamist jääb uude järjendisse element "suhkur"?'),
    new TestAnswer('Vaja läheb alla viie koostisosa.', true, 'Mitu elementi on alamjärjendis?'),
    new TestAnswer('Koostisosasid on rohkem kui viis.', false, 'Mitu elementi on alamjärjendis?'),
    new TestAnswer('Veateade', false, 'See programm töötab ilusti ilma vigadeta.')];

  methodsTestCode = 'vanused = [<span class="code-number">12</span>, <span class="code-number">12</span>, <span class="code-number">14</span>, ' +
    '<span class="code-number">13</span>, <span class="code-number">14</span>]<br>' +
    'vanused.append(<span class="code-number">13</span>)<br>' +
    'vanused.append(<span class="code-number">12</span>)<br>' +
    '<span class="code-function">print</span>(vanused.count(<span class="code-number">12</span>))';
  methodsTestItems = [new TestAnswer('0', false, 'Koodijupp peaks väljastama, mitu korda esineb element 12 järjendis. See arv on suurem kui 0.'),
    new TestAnswer('1', false, 'Koodijupp peaks väljastama, mitu korda esineb element 12 järjendis. See arv on suurem kui 1.'),
    new TestAnswer('2', false, 'Algses järjendis oli kaks elementi väärtusega 12. Siis aga lisati sinna veel elemente juurde.'),
    new TestAnswer('3', true, 'Õige! Pärast uute elementide lisamist on järjendis kolm elementi väärtusega 12.'),
    new TestAnswer('4', false, 'Järjendis pole päris nii palju elemente, mille väärtus oleks 12.')];

  rangeTestCode = '<span class="code-function">print</span>(<span class="code-function">list</span>(<span class="code-function">range</span>(<span class="code-number">4</span>, <span class="code-number">12</span>,  <span class="code-number">2</span>)))';
  rangeTestItems = [new TestAnswer('[4, 5, 6, 7, 8, 9, 10, 11, 12]', false, 'Funktsiooni väljakutses on määratud samm 2.'),
  new TestAnswer('[4, 6, 8, 10]', true, 'Õige! Just selline jada genereeritakse nende argumentidega.'),
  new TestAnswer('[4, 6, 8, 10, 12]', false, 'Peaaegu õige, kuid lõpparv ei ole kaasaarvatud.'),
  new TestAnswer('[12, 10, 8, 6 4]', false, 'Nende argumentidega on 4 algusarv, 12 lõpparv ja liigutakse sammuga 2. Arvud peaksid muutuma järjest suuremaks.'),
  new TestAnswer('[5, 7, 9, 11]', false, 'Algusarv on kaasaarvatud, seega jada peaks algama arvuga 4.')];

  wordChainHints = [new ExerciseHint('Kõigepealt peame enda jaoks välja mõtlema programmi struktuuri. Kuna peame kasutajalt järjest sõnu küsima, ' +
    'siis ilmselt läheb meil vaja tsüklit. Enne tsükliga alustamist on aga vaja teha eeltöö. Luua muutuja punktide jaoks, järjend pakutud sõnade jaoks ja ' +
    'küsida juba esimene sõna, mis mängu alustaks.', null),
  new ExerciseHint('Järjend võib alguses tühi olla. Punktideks võime panna alguses 1 kui tahame ka esimese sõna eest punkti anda (kes tahab, võib ka alustada punktide lugemist 0-st).',
    'pakutud_sõnad = []<br>' +
    'punktid = <span class="code-number">1</span><br>' +
    'sõna = <span class="code-function">input</span>(<span class="code-string">"Sisesta sõna: "</span>)'),
  new ExerciseHint('Võime ka mängu alustuseks sisestatud sõna lisada pakutud sõnede järjendisse. Selleks saab kasutada näiteks <span class="fst-italic">append</span>-meetodit.',
    'pakutud_sõnad.append(sõna)'),
  new ExerciseHint('Nüüd tuleks alustada tsükliga. Tsüklis on meil vaja küsida ka uue sõna pakkumine. Tsükkel lõpetatakse, kui uue sõna esimene täht' +
    ' ei ole sama, mis eelmise sõna viimane täht, või kui uus sõna on juba pakutud sõnade järjendis. Esimene samm, enne kui saame neid tingimusi kontrollida, on ' +
    'kasutajalt uus sõna küsida. Võime talle ka teada anda, mis tähega sõna algama peab.', null),
  new ExerciseHint('Kasutame siin näiteks lõpmatut tsüklit. Tsüklis küsime kõigepealt uut sõna. Eelmise sõna saame kätte pakutud sõnade järjendist, see peaks olema seal' +
    ' viimane element ja kõige lihtsam viis seda kätte saada, on indeksiga -1. Samamoodi saame kätte ka viimase sõna viimase tähe.',
    '<span class="code-bold">while True</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;sõna = <span class="code-function">input</span>(<span class="code-string">"Sisesta sõna, mis algab "</span> + ' +
    'sõna[<span class="code-number">-1</span>] + <span class="code-string">"-tähega: "</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;eelmine_sõna = pakutud_sõnad[<span class="code-number">-1</span>]'),
  new ExerciseHint('Järgmiseks paneme kirja tsükli lõpetamistingimuse. Me juba nägime, kuidas saada kätte eelmise sõna viimane täht. Nüüd uue sõna esimese ' +
    'tähe jaoks saame samuti indeksit kasutada, aga seekord indeksit 0. Siis saame neid tähti võrrelda. Samuti tuleb kasuks võtmesõna <span class="fst-italic">in</span>, ' +
    'millega saame kontrollida, kas sõna on juba pakutud sõnade järjendis olemas.', null),
  new ExerciseHint('Kui tsükli lõpetamistingimus on tõene, siis kasutame <span class="fst-italic">break</span>-käsku tsükli lõpetamiseks. Soovi korral ' +
    'võime ka enne tsükli lõpetamist kasutajale väljastada, et mäng on läbi ja mitu punkti ta teenis.',
    '<span class="code-bold">if</span> sõna[<span class="code-number">0</span>] != eelmine_sõna[<span class="code-number">-1</span>] ' +
    '<span class="code-bold">or</span> sõna <span class="code-bold">in</span> pakutud_sõnad:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Mäng läbi! Teenisid "</span> + ' +
    '<span class="code-function">str</span>(punktid) + <span class="code-string">" punkti."</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">break</span>'),
  new ExerciseHint('Kui lõpetamistingimus ei ole tõene, siis peame uuendama nii punkte kui pakutud sõnade järjendit.',
    'punktid += <span class="code-number">1</span><br>' +
    'pakutud_sõnad.append(sõna)'),
  new ExerciseHint('Kokkupandult näeb see kood välja nii:',
    'pakutud_sõnad = []<br>' +
    'punktid = <span class="code-number">1</span><br>' +
    'sõna = <span class="code-function">input</span>(<span class="code-string">"Sisesta sõna: "</span>)<br>' +
    'pakutud_sõnad.append(sõna)<br>' +
    '<span class="code-bold">while True</span>:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;sõna = <span class="code-function">input</span>(<span class="code-string">"Sisesta sõna, mis algab "</span> + ' +
    'sõna[<span class="code-number">-1</span>] + <span class="code-string">"-tähega: "</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;eelmine_sõna = pakutud_sõnad[<span class="code-number">-1</span>]<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">if</span> sõna[<span class="code-number">0</span>] != eelmine_sõna[<span class="code-number">-1</span>] ' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">or</span> sõna <span class="code-bold">in</span> pakutud_sõnad:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(<span class="code-string">"Mäng läbi! Teenisid "</span> + ' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">str</span>(punktid) + <span class="code-string">" punkti."</span>)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">break</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;punktid += <span class="code-number">1</span><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;pakutud_sõnad.append(sõna)')];

  classListHints = [new ExerciseHint('Esimene pool ülesandest on perekonnanimed failist järjendisse lugeda. Keeruliseks teeb asja aga see, et' +
    ' failis on kirjas täispikad nimed, millest me peame perenimed eraldama.', null),
  new ExerciseHint('Meile on juba tuttav kood, millega saab failist andmed järjendisse lugeda. Nüüd aga peame terve rea asemel lisama ainult osa reast.',
    'perenimed = []<br>' +
    'fail = <span class="code-function">open</span>(<span class="code-string">"nimed.txt"</span>, encoding=<span class="code-string">"utf-8"</span>)<br>' +
    '<span class="code-bold">for</span> rida <span class="code-bold">in</span> fail:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;perenimed.append(rida)<br>' +
    'fail.close()'), new ExerciseHint('Nime tükeldamiseks sobib hästi meetod <span class="fst-italic">split()</span>, mis tekitab meile järjendi. Sellele' +
      ' meetodile saab argumendiks anda sõne, mille kohalt tahame tükeldada, vaikimisi tükeldatakse tühikute, taanete ja reavahetuste juurest. Me soovimegi just tühikute ' +
      'juurest rida tükeldada, seega me võime kasutada seda meetodit ilma argumentideta.',
      'nimetükid = rida.split()'),
  new ExerciseHint('Perekonnanimi on nimetükkide järjendis viimane element, seega saame selle kätte indeksiga -1.',
    'perenimi = nimetükid[<span class="code-number">-1</span>]'),
  new ExerciseHint('Nüd võime asendada aldses failist järjendisse lugemise koodis järjendisse lisamise rea:',
    'perenimed.append(perenimi)'),
  new ExerciseHint('Nüüd on meil perekonnanimede järjend olemas. Kuna seda taheti väljastada sorteeritud kujul, siis võimegi järgmiseks selle sorteerida. ' +
    'Siinkohal on kõige lihtsam kasutada juba kas vastavat funktsiooni või meetodit. Kasutame siin näiteks järjendite meetodit <span class="fst-italic">sort()</span>.' +
    'See meetod lihtsalt sorteerib järjendi, mille peal teda välja kutsutakse, ega tagasta midagi.',
    'perenimed.sort()'),
  new ExerciseHint('Sorteeritud nimekirja väljastamiseks võime näiteks <span class="fst-italic">for</span>-tsükliga järjendi läbi käia ja iga elemendi ' +
    'väljastada. Võime sama tsüklit kasutada ühtlasi ära selleks, et leida pikim perekonnanimi.', null),
  new ExerciseHint('Pikima nime leidmiseks oleks hea, kui enne tsüklit looksime uue muutuja seni leitud pikima ' +
    'perekonnanime jaoks.', 'pikim = <span class="code-string">""</span><br>' +
    '<span class="code-bold">for</span> nimi <span class="code-bold">in</span> perenimed:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(nimi)'),
  new ExerciseHint('Lisaks nime väljastamisele, tahame tsüklis iga elemendi puhul kontrollida, kas hetkel vaadeldav perekonnanimi on pikem,' +
    ' kui seni leitud pikim perekonnanimi. Sõnede pikkuste leidmiseks kasutame funktsiooni <span class="fst-italic">len</span.',
    '<span class="code-bold">if </span><span class="code-function">len</span>(nimi) &gt; <span class="code-function">len</span>(pikim):<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;pikim = nimi'),
  new ExerciseHint('Viimaks jääbki väljastada veel vaid pikim leitud perekonnanimi. Seda tuleks teha pärast tsüklit.',
    '<span class="code-function">print</span>(<span class="code-string">"Pikim perenimi on: "</span> + pikim)'),
  new ExerciseHint('Näide tervest lahendusest:',
    'perenimed = []<br>' +
    'fail = <span class="code-function">open</span>(<span class="code-string">"nimed.txt"</span>, encoding=<span class="code-string">"utf-8"</span>)<br>' +
    '<span class="code-bold">for</span> rida <span class="code-bold">in</span> fail:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;nimetükid = rida.split()<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;perenimi = nimetükid[<span class="code-number">-1</span>]<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;perenimed.append(perenimi)<br>' +
    'fail.close()<br><br>' +
    'perenimed.sort()<br>' +
    'pikim = <span class="code-string">""</span><br><br>' +
    '<span class="code-bold">for</span> nimi <span class="code-bold">in</span> perenimed:<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-function">print</span>(nimi)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-bold">if </span><span class="code-function">len</span>(nimi) &gt; <span class="code-function">len</span>(pikim):<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pikim = nimi<br><br>' +
    '<span class="code-function">print</span>(<span class="code-string">"Pikim perenimi on: "</span> + pikim)')];

}
