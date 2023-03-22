import {Component} from '@angular/core';
import {TestAnswer} from "../../models/test-answer.model";
import {ExerciseHint} from "../../models/exercise-hint.model";

@Component({
  selector: 'app-data-structures',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent{

  indexTestCode = 'koeratõud = ["spanjel", "terjer", "buldog", "taks", "mops"]\n' +
    'print(koeratõud[3])';
  indexTestItems = [new TestAnswer('spanjel', false, 'Spanjel asub indeksil 0.'),
    new TestAnswer('terjer', false, 'Terjer vastab hoopis indeksile 1.'),
    new TestAnswer('buldog', false, 'Buldog on küll järjendi kolmas element, aga hoopis indeksiga 2.'),
    new TestAnswer('taks', true, 'Õige! Indeksile 3 vastab tõesti taks.'),
    new TestAnswer('mops', false, 'Mopsil on järjendis hoopis indeks 4.')];

  negativeIndexTestCode = 'koeratõud = ["spanjel", "terjer", "buldog", "taks", "mops"]\n' +
    'koeratõud[-4] = "lambakoer"\n' +
    'print(koeratõud)';
  negativeIndexTestItems = [new TestAnswer('["spanjel", "terjer", "buldog", "taks", "mops"]', false, 'Koodijupi teine rida muudab ühe elemendi järjendis ära.'),
    new TestAnswer('["spanjel", "lambakoer", "buldog", "taks", "mops"]', true, 'Õige! Negatiivsele indeksile -4 vastab selles järjendis teine element.'),
    new TestAnswer('["spanjel", "terjer", "buldog", "lambakoer", "mops"]', false, 'Indeksile -4 vastab üks teine element.'),
    new TestAnswer('["lambakoer", "terjer", "buldog", "taks", "mops"]', false, 'Negatiivse indeksi puhul tuleks hakata loendama elemente tagantpoolt ettepoole ja viimase elemendi indeks on -1.'),
    new TestAnswer('["spanjel", "terjer", "lambakoer", "taks", "mops"]', false, 'Selles järjendis on muudetud element indeksiga -3.')];

  splicingAndFunctionsTestCode = 'koostisosad = ["suhkur", "muna", "piim", "nisujahu", "sool"]\n' +
    'vähendatud_koostisosad = koostisosad[1:3]\n' +
    'if "nisujahu" in vähendatud_koostisosad:\n' +
    '    print("Retsept sisaldab nisujahu.")\n' +
    'if "suhkur" not in vähendatud_koostisosad:\n' +
    '    print("Retseptis pole suhkrut.")\n' +
    'if len(vähendatud_koostisosad) < 5:\n' +
    '    print("Vaja läheb alla viie koostisosa.")\n' +
    'else:\n' +
    '    print("Koostisosasid on rohkem kui viis.")';
  splicingAndFunctionsTestItems = [new TestAnswer('Retsept sisaldab nisujahu.', false, 'Kas element "nisujahu" on olemas ka alamjärjendis?'),
    new TestAnswer('Retseptis pole suhkrut.', true, 'Kas pärast viilutamist jääb uude järjendisse element "suhkur"?'),
    new TestAnswer('Vaja läheb alla viie koostisosa.', true, 'Mitu elementi on alamjärjendis?'),
    new TestAnswer('Koostisosasid on rohkem kui viis.', false, 'Mitu elementi on alamjärjendis?'),
    new TestAnswer('Veateade', false, 'See programm töötab ilusti ilma vigadeta.')];

  methodsTestCode = 'vanused = [12, 12, 14, 13, 14]\n' +
    'vanused.append(13)\n' +
    'vanused.append(12)\n' +
    'print(vanused.count(12))';
  methodsTestItems = [new TestAnswer('0', false, 'Koodijupp peaks väljastama, mitu korda esineb element 12 järjendis. See arv on suurem kui 0.'),
    new TestAnswer('1', false, 'Koodijupp peaks väljastama, mitu korda esineb element 12 järjendis. See arv on suurem kui 1.'),
    new TestAnswer('2', false, 'Algses järjendis oli kaks elementi väärtusega 12. Siis aga lisati sinna veel elemente juurde.'),
    new TestAnswer('3', true, 'Õige! Pärast uute elementide lisamist on järjendis kolm elementi väärtusega 12.'),
    new TestAnswer('4', false, 'Järjendis pole päris nii palju elemente, mille väärtus oleks 12.')];

  rangeTestCode = 'print(list(range(4, 12,  2)))';
  rangeTestItems = [new TestAnswer('[4, 5, 6, 7, 8, 9, 10, 11, 12]', false, 'Funktsiooni väljakutses on määratud samm 2.'),
  new TestAnswer('[4, 6, 8, 10]', true, 'Õige! Just selline jada genereeritakse nende argumentidega.'),
  new TestAnswer('[4, 6, 8, 10, 12]', false, 'Peaaegu õige, kuid lõpparv ei ole kaasaarvatud.'),
  new TestAnswer('[12, 10, 8, 6 4]', false, 'Nende argumentidega on 4 algusarv, 12 lõpparv ja liigutakse sammuga 2. Arvud peaksid muutuma järjest suuremaks.'),
  new TestAnswer('[5, 7, 9, 11]', false, 'Algusarv on kaasaarvatud, seega jada peaks algama arvuga 4.')];

  wordChainHints = [new ExerciseHint('Kõigepealt peame enda jaoks välja mõtlema programmi struktuuri. Kuna peame kasutajalt järjest sõnu küsima, ' +
    'siis ilmselt läheb meil vaja tsüklit. Enne tsükliga alustamist on aga vaja teha eeltöö. Luua muutuja punktide jaoks, järjend pakutud sõnade jaoks ja ' +
    'küsida juba esimene sõna, mis mängu alustaks.', null),
  new ExerciseHint('Järjend võib alguses tühi olla. Punktideks võime panna alguses 1, kui tahame ka esimese sõna eest punkti anda (kes tahab, võib ka alustada punktide lugemist 0-st).',
    'pakutud_sõnad = []\n' +
    'punktid = 1\n' +
    'sõna = input("Sisesta sõna: ")'),
  new ExerciseHint('Võime ka mängu alustuseks sisestatud sõna lisada pakutud sõnede järjendisse. Selleks saab kasutada näiteks <span class="fst-italic">append</span>-meetodit.',
    'pakutud_sõnad.append(sõna)'),
  new ExerciseHint('Nüüd tuleks alustada tsükliga. Tsüklis on meil vaja küsida uue sõna pakkumine. Tsükkel lõpetatakse, kui uue sõna esimene täht' +
    ' ei ole sama, mis eelmise sõna viimane täht, või kui uus sõna on juba pakutud sõnade järjendis. Esimene samm, enne kui saame neid tingimusi kontrollida, on ' +
    'kasutajalt uus sõna küsida. Võime talle ka teada anda, mis tähega sõna algama peab.', null),
  new ExerciseHint('Kasutame siin näiteks lõpmatut tsüklit. Eelmise sõna saame kätte pakutud sõnade järjendist, see peaks olema seal' +
    ' viimane element ja kõige lihtsam viis seda kätte saada, on indeksiga -1. Samamoodi saame kätte ka viimase sõna viimase tähe. Seejärel saame ' +
    'kasutajalt küsida uut sõna, andes vihjena teada, mis tähega uus sõna algama peab.',
    'while True:\n' +
    '    eelmine_sõna = pakutud_sõnad[-1]\n' +
    '    sõna = input("Sisesta sõna, mis algab " + eelmine_sõna[-1] + "-tähega: ")'),
  new ExerciseHint('Järgmiseks paneme kirja tsükli lõpetamistingimuse. Me juba nägime, kuidas saada kätte eelmise sõna viimane täht. Nüüd uue sõna esimese ' +
    'tähe jaoks saame samuti indeksit kasutada, aga seekord indeksit 0. Siis saame neid tähti võrrelda. Samuti tuleb kasuks võtmesõna <span class="fst-italic">in</span>, ' +
    'millega saame kontrollida, kas sõna on juba pakutud sõnade järjendis olemas.', null),
  new ExerciseHint('Kui tsükli lõpetamistingimus on tõene, siis kasutame <span class="fst-italic">break</span>-käsku tsükli lõpetamiseks. Soovi korral ' +
    'võime ka enne tsükli lõpetamist kasutajale väljastada, et mäng on läbi ja mitu punkti ta teenis.',
    'if sõna[0] != eelmine_sõna[-1] or sõna in pakutud_sõnad:\n' +
    '    print("Mäng läbi! Teenisid " + str(punktid) + " punkti.")\n' +
    '    break'),
  new ExerciseHint('Kui lõpetamistingimus ei ole tõene, siis peame uuendama nii punkte kui pakutud sõnade järjendit.',
    'punktid += 1 # suurendame punkte 1 võrra\n' +
    'pakutud_sõnad.append(sõna) # lisame sõna pakutud sõnadesse'),
  new ExerciseHint('Kokkupandult näeb see kood välja nii:',
    'pakutud_sõnad = []\n' +
    'punktid = 1\n' +
    'sõna = input("Sisesta sõna: ")\n' +
    'pakutud_sõnad.append(sõna)\n' +
    'while True:\n' +
    '    eelmine_sõna = pakutud_sõnad[-1]\n' +
    '    sõna = input("Sisesta sõna, mis algab " + eelmine_sõna[-1] + "-tähega: ")\n' +
    '    if sõna[0] != eelmine_sõna[-1] or sõna in pakutud_sõnad:\n' +
    '        print("Mäng läbi! Teenisid " + str(punktid) + " punkti.")\n' +
    '        break\n' +
    '    punktid += 1\n' +
    '    pakutud_sõnad.append(sõna)')];

  classListHints = [new ExerciseHint('Esimene pool ülesandest on perekonnanimed failist järjendisse lugeda. Keeruliseks teeb asja aga see, et' +
    ' failis on kirjas täispikad nimed, millest me peame perenimed eraldama.', null),
  new ExerciseHint('Meile on juba tuttav kood, millega saab failist andmed järjendisse lugeda. Selles näites lisatakse järjendisse terve rida.',
    'perenimed = []\n' +
    'fail = open("nimed.txt", encoding="utf-8")\n' +
    'for rida in fail:\n' +
    '    perenimed.append(rida)\n' +
    'fail.close()'), new ExerciseHint('Nüüd oleks meil vaja lisada vaid osa sellest reast. Nime tükeldamiseks sobib hästi meetod <span class="fst-italic">split</span>, mis tekitab meile järjendi. Sellele' +
      ' meetodile saab argumendiks anda sõne, mille kohalt tahame tükeldada. Vaikimisi tükeldatakse tühikute, taanete ja reavahetuste juurest. Me soovimegi just tühikute ' +
      'juurest rida tükeldada, seega võime kasutada seda meetodit ilma argumentideta.',
      'nimetükid = rida.split()'),
  new ExerciseHint('Perekonnanimi on nimetükkide järjendis viimane element, saame selle kätte indeksiga -1.',
    'perenimi = nimetükid[-1] # saame kätte viimase elemendi'),
  new ExerciseHint('Nüüd võime asendada algses failist järjendisse lugemise koodis järjendisse lisamise rea:',
    'perenimed.append(perenimi)'),
  new ExerciseHint('Nüüd on meil perekonnanimede järjend olemas. Kuna seda taheti väljastada sorteeritud kujul, siis võimegi järgmiseks selle sorteerida. ' +
    'Siinkohal on kõige lihtsam kasutada vastavat funktsiooni või meetodit. Kasutame siin näiteks järjendite meetodit <span class="fst-italic">sort</span>. ' +
    'See meetod lihtsalt sorteerib järjendi, millel teda välja kutsutakse, ega tagasta midagi.',
    'perenimed.sort()'),
  new ExerciseHint('Sorteeritud nimekirja väljastamiseks võime näiteks <span class="fst-italic">for</span>-tsükliga järjendi läbi käia ja iga elemendi ' +
    'väljastada. Võime sama tsüklit kasutada ühtlasi ära selleks, et leida pikim perekonnanimi.', null),
  new ExerciseHint('Pikima nime leidmiseks oleks hea, kui enne tsüklit looksime uue muutuja seni leitud pikima ' +
    'perekonnanime jaoks.', 'pikim = ""\n' +
    'for nimi in perenimed:\n' +
    '    print(nimi)'),
  new ExerciseHint('Lisaks nime väljastamisele, tahame tsüklis iga elemendi puhul kontrollida, kas hetkel vaadeldav perekonnanimi on pikem,' +
    ' kui seni leitud pikim perekonnanimi. Sõnede pikkuste leidmiseks kasutame funktsiooni <span class="fst-italic">len</span>.',
    'if len(nimi) > len(pikim):\n' +
    '    pikim = nimi'),
  new ExerciseHint('Viimaks jääbki väljastada veel vaid pikim leitud perekonnanimi. Seda tuleks teha pärast tsüklit.',
    'print("Pikim perenimi on: " + pikim)'),
  new ExerciseHint('Näide tervest lahendusest:',
    'perenimed = []\n' +
    'fail = open("nimed.txt", encoding="utf-8")\n' +
    'for rida in fail:\n' +
    '    nimetükid = rida.split()\n' +
    '    perenimi = nimetükid[-1]\n' +
    '    perenimed.append(perenimi)\n' +
    'fail.close()\n' +
    '\n' +
    'perenimed.sort()\n' +
    'pikim = ""\n' +
    '\n' +
    'for nimi in perenimed:\n' +
    '    print(nimi)\n' +
    '    if len(nimi) > len(pikim):\n' +
    '        pikim = nimi\n' +
    '\n' +
    'print("Pikim perenimi on: " + pikim)')];

  listExamplesCode = 'arvud = [2, 7, 4, 11, 2]\n' +
    'sõned = ["ploom", "õun", "banaan"]\n' +
    'segamini = ["a", 2.7, 8, True]\n' +
    'tühi = []\n' +
    'teine_tühi = list()';
  elemntsByIndexesCode = 'arvud = [2, 7, 4, 11, 2]\n' +
    'esimene_element = arvud[0]\n' +
    'kolmas_element = arvud[2]\n' +
    'print(esimene_element)\n' +
    'print(kolmas_element)';
  modifyElementByIndexCode = 'arvud = [2, 7, 4, 11, 2]\n' +
    'arvud[0] = 5\n' +
    'print(arvud)';
  indexOutOfRangeCode = 'arvud = [2, 7, 4, 11, 2]\n' +
    'print(arvud[7])';
  negativeIndexesCode = 'arvud = [2, 7, 4, 11, 5]\n' +
    'print(arvud[-1])\n' +
    'print(arvud[-3])';
  splicingCode = 'arvud = [2, 7, 4, 11, 2]\n' +
  'print(arvud[1:3])\n' +
  'print(arvud[:3])\n' +
  'print(arvud[:-2])\n' +
  'print(arvud[2:])\n' +
  'print(arvud[1:2])\n' +
  'print(arvud[:])';
  forLoopCode = 'puuviljad = ["ploom", "õun", "pirn", "kirss"]\n' +
    'for puuvili in puuviljad:\n' +
    '    print(puuvili)';
  whileLoopCode = 'puuviljad = ["ploom", "õun", "pirn", "kirss"]\n' +
    'i = 0\n' +
    'while i < len(puuviljad):\n' +
    '    print(puuviljad[i])\n' +
    '    i += 1';
  stringSplicingCode = 'tervitus = "Tervitus!"\n' +
    'print(tervitus[1])\n' +
    'print(tervitus[2:6])';
  stringLoopCode = 'tervitus = "Tere!"\n' +
    'for täht in tervitus:\n' +
    '    print(täht)';
  listFromFileCode = 'hinnad = []\n' +
    'fail = open("hinnad.txt")\n' +
    'for rida in fail:\n' +
    '    hinnad.append(float(rida))\n' +
    'fail.close()\n' +
    'print("Failis olid " + str(len(hinnad)) + " toote hinnad.")\n' +
    'print("Kõrgeim hind oli " + str(max(hinnad)) + " eurot.")\n' +
    'print("Madalaim hind oli " + str(min(hinnad)) + " eurot.")';
  rangeOneArgumentCode = 'print(list(range(5)))';
  rangeTwoArgumentsCode = 'print(list(range(2, 5)))';
  rangeThreeArgumentsCode = 'print(list(range(1, 7, 2)))';
  rangeThreeArgumentsNegativeStepCode = 'print(list(range(15, 5, -3)))';
  rangeLoopCode = 'nädalapäevad = ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev", "pühapäev"]\n' +
    'for i in range(len(nädalapäevad)):\n' +
    '    print(str(i + 1) + ". nädalapäev on " + nädalapäevad[i])';

}
