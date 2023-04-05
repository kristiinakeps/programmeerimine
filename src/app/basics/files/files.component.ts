import {Component} from '@angular/core';
import {ExerciseHint} from "../../models/exercise-hint.model";
import {TestAnswer} from "../../models/test-answer.model";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {

  fileOpenReadTestTitle = 'Millised järgmistest ridadest sobivad faili "tulemused.txt" avamiseks, kui soovitakse failist lugeda?'
  fileOpenReadTest = [new TestAnswer('fail = open("tulemused.txt", "r")', true, 'Lugemiseks võib anda funktsioonile ka teise argumendina viisi.'),
  new TestAnswer('fail = open("tulemused.txt", r)', false, 'Teine argument peab olema sõne.'),
  new TestAnswer('fail = open(tulemused.txt)', false, 'Faili nimi peab olema sõne.'),
  new TestAnswer('fail = open("tulemused.txt", "w")', false, 'Teine argument "w" tähendab, et fail avatakse kirjutamiseks.'),
  new TestAnswer('fail = open("tulemused.txt")', true, 'Kui faili avamise funktsioonile anda ainult üks argument, siis vaikimisi avatakse fail lugemiseks.')]

  fileReadTestCode = 'fail = open("tulemused.txt")\n' +
    'tekst = fail.read()\n' +
    'print(tekst)'
  fileReadTestFile = 'Maris Maarikas - 1:34<br>Kadi Kuusk - 1:45<br>Karl Lumi - 1:25'
  fileReadTest = [new TestAnswer('Väljastab kogu faili sisu ekraanile.', true, 'Jah, see koodijupp loeb kogu faili sisu ja väljastab selle ekraanile.'),
  new TestAnswer('Väljastab kogu faili sisu ekraanile nii, et iga rea vahel on tühi rida.', false, 'Selles näites tühje ridu ei teki.'),
  new TestAnswer('Väljastab faili esimese rea ekraanile.', false, 'See koodijupp väljastab midagi muud kui ainult esimese rea.'),
  new TestAnswer('Väljastab faili viimase rea ekraanile.', false, 'See koodijupp väljastab midagi muud kui ainult viimase rea.'),
  new TestAnswer('See kood ei väljasta midagi, sest faili lugemiseks on vaja tsüklit.', false, 'Tsükliga on küll väga mugav faili lugeda, aga see pole ainus variant faili sisu kätte saamiseks.')]

  barchartExerciseHints = [new ExerciseHint('Esimene samm võiks olla kasutajalt faili nime küsimine. Selleks saab kasutada vana tuttavat ' +
    '<span class="fst-italic">input</span>-funktsiooni.', null),
  new ExerciseHint('Faili nime küsimine:', 'faili_nimi = input("Sisesta faili nimi: ")'),
  new ExerciseHint('Nüüd on faili nimi olemas ja võime selle avada <span class="fst-italic">open</span>-funktsiooniga.', null),
  new ExerciseHint('Avatud fail tuleks ka kuhugi muutujasse salvestada:', 'fail = open(faili_nimi)'),
  new ExerciseHint('Järgmine samm on hakata failist ridu lugema ja iga rea peaks teisendama täisarvuks.', null),
  new ExerciseHint('Ridade lugemiseks võib kasutada nii <span class="fst-italic">while</span>- kui ka <span class="fst-italic">for</span>-tsüklit.' +
    ' Siin kasutame <span class="fst-italic">for</span>-tsüklit:',
    'for rida in fail:\n' +
    '    temperatuur = int(rida)'),
  new ExerciseHint('Nüüd on meil täisarvuna temperatuur olemas ja järgmiseks on vaja väljastada vastav arv tärne. Kuidas seda tärnidest sõnet kokku panna? ' +
    'Üks variant on teha seda <span class="fst-italic">while</span>-tsükliga. Teine variant on sõne korrutamine täisarvuga, mille näide oli andmetüüpide peatükis.', null),
  new ExerciseHint('<span class="fst-italic">While</span>-tsükliga tärnidest koosneva sõne kokkupanemine:',
    'tärnid = ""\n' +
    'i = 0\n' +
    'while i < temperatuur:\n' +
    '    tärnid += "*"\n' +
    '    i += 1\n' +
    'print(tärnid)'),
  new ExerciseHint('Sama asja saab sõne korrutamisel arvuga teha vaid ühe reaga:',
    'print("*" * temperatuur)'),
  new ExerciseHint('Viimase sammuna võiks ka faili sulgeda.', 'fail.close()'),
  new ExerciseHint('Üks võimalik lahendus kokkupanduna oleks selline:',
    'faili_nimi = input("Sisesta faili nimi: ")\n' +
    'fail = open(faili_nimi)\n' +
    'for rida in fail:\n' +
    '    temperatuur = int(rida)\n' +
    '    print("*" * temperatuur)\n' +
    'fail.close()'
  )];

  ordersExerciseHints = [new ExerciseHint('Alustuseks tuleks fail avada, kasutades <span class="fst-italic">open</span>-funktsiooni. Faili nime ' +
    'võid soovi korral küsida kasutajalt, aga võid ka programmi sisse kirjutada.', null),
  new ExerciseHint('Faili avamise võib teha nii:', 'fail = open("tellimused.txt")'),
  new ExerciseHint('Enne kui hakata faili reahaaval lugema, võiks luua muutujad erinevate pitsasuuruste tellimuste arvude jaoks. Alguses ' +
    'on kõiki tellimusi 0, aga iga failist loetava rea puhul suurendame vastavat muutujat.', null),
  new ExerciseHint('Muutujad võib luua nii:', 'tellimused_20 = 0 # alguses on kõiki tellimusi 0\n' +
    'tellimused_28 = 0\n' +
    'tellimused_38 = 0'),
  new ExerciseHint('Nüüd võib hakata failist ridu lugema. Seda on mugav teha näiteks <span class="fst-italic">for</span>-tsükliga.', null),
  new ExerciseHint('Näide <span class="fst-italic">for</span>-tsüklist:', 'for rida in fail:\n    # tsükli sisu'),
  new ExerciseHint('Soovi korral võib loetud rea ka täisarvuks teisendada ja siis kontrollida, kas real olev arv on 20, 28 või 38. Vastavalt sellele teame, ' +
    'millist tellimuste arvu muutujat suurendada.', null),
  new ExerciseHint('Tsükli sisus tellimuste arvude leidmine:', 'suurus = int(rida)\n' +
    'if suurus == 20:\n' +
    '    tellimused_20 += 1\n' +
    'elif suurus == 28:\n' +
    '    tellimused_28 += 1\n' +
    'else:\n' +
    '    tellimused_38 += 1'),
  new ExerciseHint('Lõpuks tuleb pärast tsükli töö lõppu ka saadud tellimuste arvud väljastada.', null),
  new ExerciseHint('Tellimuste arvude väljastamine:',
    'print("20 cm läbimõõduga pitsasid on vaja " + str(tellimused_20))\n' +
    'print("28 cm läbimõõduga pitsasid on vaja " + str(tellimused_28))\n' +
    'print("38 cm läbimõõduga pitsasid on vaja " + str(tellimused_38))'),
  new ExerciseHint('Kogu kood võib lõpuks välja näha selline:',
    'fail = open("tellimused.txt")\n' +
    'tellimused_20 = 0\n' +
    'tellimused_28 = 0\n' +
    'tellimused_38 = 0\n' +
    'for rida in fail:\n' +
    '    suurus = int(rida)\n' +
    '    if suurus == 20:\n' +
    '        tellimused_20 += 1\n' +
    '    elif suurus == 28:\n' +
    '        tellimused_28 += 1\n' +
    '    else:\n' +
    '        tellimused_38 += 1\n' +
    'print("20 cm läbimõõduga pitsasid on vaja " + str(tellimused_20))\n' +
    'print("28 cm läbimõõduga pitsasid on vaja " + str(tellimused_28))\n' +
    'print("38 cm läbimõõduga pitsasid on vaja " + str(tellimused_38))\n' +
    'fail.close()'
  )];

  shoppingListExerciseHints = [new ExerciseHint('Alustame näiteks faili avamisega. Tahame hakata faili kirjutama ja kui fail oli olemas, ' +
    'siis tahame vana sisu lihtsalt üle kirjutada. Selleks peame täpsustama faili avades õige avamise viisi. Samuti peame määrama kodeeringu.', null),
  new ExerciseHint('Faili avamiseks sobiv viis on <span class="fst-italic">"w"</span> ja koodis võiks viisi ja kodeeringuga faili avamine välja näha selline:',
    'fail = open("ostunimekiri.txt", "w", encoding="utf-8")'),
  new ExerciseHint('Järgmisena võime sinna automaatselt faili lisatavad tooted juba ära kirjutada. Siinkohal ei tohi unustada reavahetuse sümbolit iga toote lõppu lisamast.', null),
  new ExerciseHint('Kolm automaatselt lisatavat toodet võib kirjutada ka ühe korraga faili. Pärast kirjutamist võime kasutajale väljastada, et need tooted on nüüd ' +
    'ostunimekirja lisatud:', 'fail.write("piim\\nmunad\\nleib\\n")\n' +
    'print("Ostunimekirja on lisatud piim, munad ja leib.")\n'),
  new ExerciseHint('Nüüd tuleb hakata kasutajalt tsüklis küsima, mida ta veel lisada soovib. Siin sobib kõige paremini kasutada <span class="fst-italic">while</span>-tsüklit.', null),
  new ExerciseHint('Me kasutame siin <span class="fst-italic">while True</span> konstruktsiooni. Tsükli sees küsime kasutajalt sisendit ja kui sisend on tühi sõne, siis ' +
    'lõpetame tsükli <span class="fst-italic">break</span>-käsuga.',
    'while True:\n' +
    '    toode = input("Lisa uus toode: ")\n' +
    '    if toode == "":\n' +
    '        break'),
  new ExerciseHint('Kui kasutaja lisatud toode ei olnud tühi sõne, siis tahame selle ka faili kirjutada. Selleks on failidel ' +
    '<span class="fst-italic">write</span>-meetod. Jällegi peame ise käsitsi lisama ka reavahetuse sümboli.', null),
    new ExerciseHint('Toote faili kirjutamine:', 'fail.write(toode + "\\n")'),
  new ExerciseHint('Kõige lõpus, kui tsükkel on oma töö lõpetanud, siis sulgeme ka faili ja teavitame kasutajat ostunimekirja loomisest.', null),
  new ExerciseHint('Seda saab teha nii:', 'fail.close()\n' +
    'print("Ostunimekiri loodud!")'),
  new ExerciseHint('Näide lõplikust koodist:',
    'fail = open("ostunimekiri.txt", "w", encoding="utf-8")\n' +
    'fail.write("piim\\nmunad\\nleib\\n")\n' +
    'print("Ostunimekirja on lisatud piim, munad ja leib.")\n' +
    'while True:\n' +
    '    toode = input("Lisa uus toode: ")\n' +
    '    if toode == "":\n' +
    '        break\n' +
    '    fail.write(toode + "\\n")\n' +
    'fail.close()\n' +
    'print("Ostunimekiri loodud!")')];

  fileOpenCloseCode = 'fail = open("nimekiri.txt")\n' +
    'fail.close()';
  fileReadWholeContentsCode = 'fail = open("nimekiri.txt")\n' +
    'sisu = fail.read()\n' +
    'print(sisu)\n' +
    'fail.close()';
  fileReadWhileLoopCode = 'fail = open("nimekiri.txt")\n' +
    'rida = fail.readline()\n' +
    'while rida != "":\n' +
    '    print(rida)\n' +
    '    rida = fail.readline()\n' +
    'fail.close()';
  printNewLineCode = 'print("Tere tere!\\nKuidas sul läheb?")';
  fileReadStripCode = 'fail = open("nimekiri.txt")\n' +
    'rida = fail.readline()\n' +
    'while rida != "":\n' +
    '    print(rida.strip())\n' +
    '    rida = fail.readline()\n' +
    'fail.close()';
  fileForLoopCode = 'fail = open("nimekiri.txt")\n' +
    'for rida in fail:\n' +
    '    print(rida.strip())\n' +
    'fail.close()';
  expensesCode = 'fail = open("kulutused.txt")\n' +
    'kulutused = 0\n' +
    'teenitud = 0\n' +
    'for rida in fail:\n' +
    '    arv = float(rida)\n' +
    '    if arv > 0:\n' +
    '        teenitud += arv\n' +
    '    else:\n' +
    '        kulutused += arv\n' +
    'print("Kuu jooksul teenitud raha: " + str(teenitud))\n' +
    'print("Kuu jooksul tehtud kulutused: " + str(-kulutused))\n' +
    'fail.close()';
  fileOpenWritingCode = 'fail = open("andmed.txt", "w")';
  fileWriteWithoutNewLinesCode = 'fail = open("andmed.txt", "w")\n' +
    'fail.write("Faili")\n' +
    'fail.write("kirjutamine")\n' +
    'fail.write("reavahetusteta")\n' +
    'fail.close()';
  fileWriteNewLinesCode = 'fail = open("andmed.txt", "w")\n' +
    'fail.write("Faili\\n")\n' +
    'fail.write("kirjutamine\\n")\n' +
    'fail.write("reavahetustega\\n")\n' +
    'fail.close()';
  fileNoEncodingCode = 'fail = open("nimekiri.txt")\n' +
    'print(fail.read())\n' +
    'fail.close()';
  fileEncodingCode = 'fail = open("nimekiri.txt", encoding="utf-8")\n' +
    'print(fail.read())\n' +
    'fail.close()';

}
