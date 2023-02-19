import {Component} from '@angular/core';
import {ExerciseHint} from "../../models/exercise-hint.model";
import {TestAnswer} from "../../models/test-answer.model";

@Component({
  selector: 'app-tuples',
  templateUrl: './tuples.component.html',
  styleUrls: ['./tuples.component.scss']
})
export class TuplesComponent {

  immutableTestCode = 'kuud = ("oktoober", "märts", "aprill", "september")\n' +
    'kuud[2] = "mai"\n' +
    'print(kuud)';
  immutableTestItems = [new TestAnswer('("oktoober", "märts", "mai", "september")', false, 'See oleks õige vastus, kui ennikud oleksid muudetavad.'),
  new TestAnswer('("oktoober", "märts", "aprill", "september")', false, 'Kas programm jõuab üldse print-käsu täitmiseni?'),
  new TestAnswer('("oktoober", "mai", "aprill", "september")', false, 'Siin on ära muudetud element indeksiga 1, kuid kas ennikus üldse saab elemente muuta?'),
  new TestAnswer('("oktoober", "märts", "aprill", "mai")', false, 'Siin on ära muudetud element indeksiga 3, kuid kas ennikus üldse saab elemente muuta?'),
  new TestAnswer('Veateade', true, 'Õige! Ennikus ei saa elemente muuta ja kui üritame seda teha, siis saame veateate.')];

  operationsTestCode = 'marjad = ("maasikas", "vaarikas", "mustikas")\n' +
    'if marjad == ("vaarikas", "maasikas", "mustikas"):\n' +
    '    print("On võrdsed")\n' +
    'if marjad.index("vaarikas") == 1:\n' +
    '    print("Vaarikas")\n' +
    'väiksed_marjad = marjad[:2]\n' +
    'if len(väiksed_marjad) == 1:\n' +
    '    print("Üks")\n' +
    'elif len(väiksed_marjad) == 2:\n' +
    '    print("Kaks")\n' +
    'else:\n' +
    '    print("Kolm")';
  operationsTestItems = [new TestAnswer('On võrdsed', false, 'Kas ennikute puhul oli võrdsuse kontrollimisel elementide järjekord oluline või mitte?'),
  new TestAnswer('Vaarikas', true, 'Kas enniku teine element "vaarikas" ei ole indeksiga 1?'),
  new TestAnswer('Üks', false, 'Enniku viilutamisel ilma algusindeksita võetakse tulemusse kõik elemendid alates algusest kuni etteantud lõpuindeksini. ' +
    'Kui lõpuindeks on 2, siis peaks tulemuses olema elemendid indeksitega 0 ja 1.'),
  new TestAnswer('Kaks', true, 'Enniku viilutamisel ilma algusindeksita võetakse tulemusse kõik elemendid alates algusest kuni etteantud lõpuindeksini. ' +
    'Kui lõpuindeks on 2, siis peaks tulemuses olema elemendid indeksitega 0 ja 1.'),
  new TestAnswer('Kolm', false, 'Kas enniku viilutamisel tekib rohkem kui kaheelemendiline ennik?')]

  tupleExamplesCode = 'arvud = (16, 18, 3, 9)\n' +
    'aastaajad = ("talv", "kevad", "sügis", "suvi")\n' +
    'aastaajad_sulgudeta = "talv", "kevad", "sügis", "suvi" # see on täpselt samaväärne eelmise reaga\n' +
    'segamini = (1, "kaks", 3.0, False)\n' +
    'tühi = ()\n' +
    'teine_tühi = tuple()';
  oneElementTupleCode = 'arv = (3)\n' +
    'ennik = (3,)\n' +
    'print(type(arv))\n' +
    'print(type(ennik))';
  elementFromTupleCode = 'aastaajad = ("talv", "kevad", "sügis", "suvi")\n' +
    'print(aastaajad[2])';
  changeElementCode = 'aastaajad = ("talv", "kevad", "sügis", "suvi")\n' +
    'aastaajad[1] = "suvi"';
  splicingCode = 'arvud = (4, 7, 2, 1, 9, 8, 7)\n' +
    'print(arvud[:5])\n' +
    'print(arvud[4:])\n' +
    'print(arvud[2:4])\n' +
    'print(arvud[:])';
  forLoopCode = 'marjad = ("maasikas", "vaarikas", "mustikas", "pohl", "jõhvikas")\n' +
    'for mari in marjad:\n' +
    '    print(mari)';
  forRangeLoopCode = 'marjad = ("maasikas", "vaarikas", "mustikas", "pohl", "jõhvikas")\n' +
    'for i in range(len(marjad)):\n' +
    '    print(marjad[i])';
  whileLoopCode = 'marjad = ("maasikas", "vaarikas", "mustikas", "pohl", "jõhvikas")\n' +
    'i = 0\n' +
    'while i < len(marjad):\n' +
    '    print(marjad[i])\n' +
    '    i += 1';
  functionReturnTupleCode = 'def sagedaseim_sümbol(sõne):\n' +
    '    sagedaseim = ("", 0)\n' +
    '    for sümbol in sõne:\n' +
    '        sagedus = sõne.count(sümbol)\n' +
    '        if sagedus > sagedaseim[1]:\n' +
    '            sagedaseim = (sümbol, sagedus)\n' +
    '    return sagedaseim\n' +
    '\n' +
    'tulemus = sagedaseim_sümbol("Ennik on mittemuudetav andmestruktuur.")\n' +
    'print(tulemus)\n' +
    'täht, sagedus = tulemus\n' +
    'print("Kõige sagedasem sümbol on \'" + täht + "\', sagedusega " + str(sagedus))\n';
  assignmentsCode = 'täht, arv = "a", 5\n' +
    '(täht, arv) = ("a", 5) # samaväärne esimese reaga\n' +
    'esimene, teine, kolmas = (1, 2, 3)\n' +
    'x, y, z = ["X", "Y", "Z"]\n' +
    'a, b = {"a", 6}\n' +
    'print(arv)\n' +
    'print(y)\n' +
    'print(teine)\n';

  dictionaryFromFileCode = 'def tulemused_failist(failinimi):\n' +
    '    tulemused = {}\n' +
    '    fail = open(failinimi)\n' +
    '    for rida in fail:\n' +
    '        õpilane, punktid = rida.strip().split(",")\n' +
    '        tulemused[õpilane] = int(punktid)\n' +
    '    fail.close()\n' +
    '    return tulemused';

  bestResultFromDictionaryCode = 'def parim_tulemus(tulemused):\n' +
    '    parim = ("", 0)\n' +
    '    for õpilane in tulemused:\n' +
    '        tulemus = tulemused[õpilane]\n' +
    '        if tulemus > parim[1]:\n' +
    '            parim = (õpilane, tulemus)\n' +
    '    return parim';

  mainProgramCode = 'tulemused = tulemused_failist("mälumäng.txt")\n' +
    'võitja, punktid = parim_tulemus(tulemused)\n' +
    'print("Võitis " + võitja + ", kes sai " + str(punktid) + " punkti.")';

  emptyLine = '\n\n';

  quizHints = [new ExerciseHint('Kõigepealt võime alustada sõnastiku koostamisega. Selleks võime luua kohe eraldi meetodi, mis võtab argumendiks faili nime ja ' +
  'tagastab tulemuste sõnastiku, kus võtmed on õpilaste nimed ja väärtused punktid.', null),
  new ExerciseHint('Sarnast asja saime juba sõnastike peatükis teha. Nüüd aga nägime, kuidas ennikuid saab omistamises mugavalt kasutada, seega kuna teame, ' +
    'et rea tükeldamisel peaks meil alati tekkima kaks elementi, siis võime need kohe muutujate ennikusse salvestada. Nii on meil lihtsam neid hiljem kasutada.', this.dictionaryFromFileCode),
  new ExerciseHint('Järgmiseks võime kirjutada valmis funktsiooni, mis sõnastiku põhjal tagastaks suurima punktisummaga õpilase nime ja punktide arvu. ' +
    'Siin võime kasutada abimuutujat, kus hoiame seni leitud parima tulemuse saanud õpilase andmeid, ja käia järjest sõnastikku läbi. Kui oleme kõik ' +
    'sõnastiku kirjed läbi vaadanud, siis võime tagastada abimuutujasse salvestatud õpilase nime ja punktid.', null),
  new ExerciseHint('Parima tulemuse leidmise funktsioon:', this.bestResultFromDictionaryCode),
  new ExerciseHint('Nüüd jääb üle vaid põhiprogrammis funktsioone välja kutsuda ja ka tulemus väljastada.', null),
  new ExerciseHint('Kõigepealt kasutame funktsiooni sõnastiku saamiseks, siis leiame teise funktsiooni abil sõnastikust parima tulemuse ja ' +
    'kõige lõpuks väljastame selle.', this.mainProgramCode),
  new ExerciseHint('Kogu kood kokkupandult:',
    this.dictionaryFromFileCode + this.emptyLine + this.bestResultFromDictionaryCode + this.emptyLine + this.mainProgramCode)];

}
