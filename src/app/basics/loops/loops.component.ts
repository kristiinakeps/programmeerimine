import {Component} from '@angular/core';
import {TestAnswer} from "../../models/test-answer.model";
import {ExerciseHint} from "../../models/exercise-hint.model";

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.scss']
})
export class LoopsComponent {

  loopOutputLinesTestCode = 'i = 6\n' +
    'while i > 0:\n' +
    '    print(i)\n' +
    '    i -= 1'
  loopOutputLinesTestAnswers = [new TestAnswer('0', false, 'Tsükli sisu täidetakse vähemalt üks kord.'),
    new TestAnswer('4', false, 'Kas tsükli tingimus on peale nelja iteratsiooni väär?'),
    new TestAnswer('5', false, 'Kas tsükli sisu ei täideta mitte üks kord veel?'),
    new TestAnswer('6', true, 'Jah, see tsükkel väljastab 6 rida.'),
    new TestAnswer('7', false, 'Seitse on ehk natuke liiga palju.')]

  loopOutputChangeTestCode = 'i = 0\n' +
    'while i < 5:\n' +
    '    print(i)\n' +
    '    i = i + 1'
  loopOutputChangeTestAnswers = [new TestAnswer('Kui tsükli tingimus oleks i != 5', false, 'Tingimused i != 5 ja i < 5 muutuvad mõlemad vääraks kui i saab väärtuseks 5.'),
    new TestAnswer('Kui i = i + 1 asemel kirjutaksime muutuja suurendamiseks i += 1', false, 'Tehted i = i + 1 ja i += 1 teevad täpselt sama asja.'),
    new TestAnswer('Kui tsükli tingimus oleks i <= 5', true, 'Kui tsükli tingimus oleks i <= 5, siis täidetaks tsükli sisu üks kord rohkem.'),
    new TestAnswer('Kui asendada muutuja i muutujaga j', false, 'Kui igal pool asendada muutuja i muutujaga j, siis programmi töö sellest ei sõltu.'),
    new TestAnswer('Kui i = i + 1 asemel kirjutaksime i = i - 1', true, 'Kui i = i + 1 asemel oleks i = i - 1, siis muutuks i väärtus iga tsükli sisu täitmisega väiksemaks ja programm jääks lõpmatuse tsüklisse.')]

  loopOutputTestCode = 'i = 1\n' +
    'a = 0\n' +
    'while i <= 10:\n' +
    '    if i == 2 or i > 7:\n' +
    '        a += 1\n' +
    '    i = i + 1\n' +
    'print(a)'
  loopOutputTestAnswers = [new TestAnswer('0', false, 'Mõnel korral on tingimuslause tingimus tõene ja muutuja a väärtust suurendatakse.'),
    new TestAnswer('1', false, 'Muutuja a väärtust suurendatakse rohkem kui üks kord.'),
    new TestAnswer('4', true, 'Tubli! Programmi lõpus on tõesti a väärtuseks 4.'),
    new TestAnswer('5', false, 'Tingimuslause tingimus ei ole päris viiel korral tõene.'),
    new TestAnswer('10', false, 'Tsükli sisu täidetakse tõesti 10 korda, aga muutuja a väärtust ei suurendata iga kord.')]

  workoutExerciseHints = [new ExerciseHint('Alljärgnev koodijupp on meil juba olemas. Kindlaksmääratud 20 kätekõverduse asemel  tahame ' +
    'nüüd kasutajalt kätekõverduste arvu küsida. Selleks oleks vaja kasutajalt sisendit küsida ja see kuhugi muutujasse salvestada.',
    'tehtud_kätekõverdusi = 0\n' +
    '\n' +
    'while tehtud_kätekõverdusi < 20:\n' +
    '    print("Tee üks kätekõverdus!")\n' +
    '    tehtud_kätekõverdusi = tehtud_kätekõverdusi + 1'),
  new ExerciseHint('Sisendit saame küsida <span class="fst-italic">input</span>-käsuga ning sisestatud arv tuleks ka täisarvuks teisendada. ' +
    'Seda saab teha näiteks nii:', 'kätekõverduste_arv = int(input("Sisesta kätekõverduste arv: "))'),
  new ExerciseHint('Nüüd tuleks muuta tsükli tingimust. Varasema 20 asemel, peaks seal nüüd kontrollima, et tehtud kätekõverduste arv oleks ' +
    'väiksem kasutaja sisestatud kätekõverduste arvust.', null),
  new ExerciseHint('Tsükli tingimuse võime muuta näiteks selliseks:',
    'while tehtud_kätekõverdusi < kätekõverduste_arv:\n    # siin on tsükli sisu'),
  new ExerciseHint('Kokku võiks meie kood näha välja selline:',
    'kätekõverduste_arv = int(input("Sisesta kätekõverduste arv: "))\n' +
    'tehtud_kätekõverdusi = 0\n' +
    '\n' +
    'while tehtud_kätekõverdusi < kätekõverduste_arv:\n' +
    '    print("Tee üks kätekõverdus!")\n' +
    '    tehtud_kätekõverdusi = tehtud_kätekõverdusi + 1'),
  new ExerciseHint('Täpselt samamoodi saame küsida ka mõne teise harjutuse korduste arvu ja tsüklis kasutajale vastavat käsklust väljastada.', null)]

  guessNumberExerciseHints = [new ExerciseHint('Selle ülesande lahendamiseks on mitmeid erinevaid variante. Siin vihjetes teeme läbi ' +
    'ainult ühe võimalikest lahendustest. Alustame sellest, et valime välja salajase arvu ja salvestame selle muutujasse.', null),
  new ExerciseHint('Näiteks valime salajaseks arvuks 17 nagu ka näidetes. Siin võid muidugi valida ka ükskõik mis teise arvu, ülejäänud ' +
    'kood sellest ei muutu.', 'salajane_arv = 17 # valime siin kindla salajase arvu'),
  new ExerciseHint('Järgmine samm on mõelda tsükli struktuuri peale. Tsükkel peaks käima kuni kasutaja leiab õige arvu. Selle tingimuse võib ' +
    'panna kohe tsüklitingimuseks või siis hoopis teha lõpmatu tsükkel ja lisada tsükli sisusse tingimuslause <span class="fst-italic">break</span>-käsuga. ' +
    'Samuti tuleb tsüklis küsida kasutajalt arvu pakkumist.', null),
    new ExerciseHint('Siin kasutame lõpmatu tsükli ja <span class="fst-italic">break</span>-käsuga varianti.',
      'while True:\n' +
      '    pakkumine = int(input("Paku arvu vahemikus 1-100: "))\n' +
      '    if salajane_arv == pakkumine:\n' +
      '        print("Leidsid õige arvu!")\n' +
      '        break'),
  new ExerciseHint('Nüüd on meil juba toimiv tsükkel olemas, aga programm ei väljasta veel kasutajale tagasisidet iga pakkumise kohta. Alles õige ' +
    'pakkumise korral öeldakse "Leidsid õige arvu!". Järgmisena tulekski kasutajale väljastada, kas pakutud arv oli suurem või väiksem salajasest arvust.',
    null),
  new ExerciseHint('Seda saab teha ilusti tingimuslausetega. Me juba lisasime tingimuslause, mis kontrollis, kas arvud on võrdsed. Nüüd tuleks ' +
    'sarnanste tingimuslausetega kontrollida, kas pakkumine oli suurem kui salajane arv või kas pakkumine oli väiksem kui salajane arv.', null),
  new ExerciseHint('Vahet ei ole kumba pidi me kontrollid teeme. Lihtsalt väljastatav teade peab olema vastav. Siin kontrollime kõigepealt, kas ' +
    'pakkumine oli väiksem kui salajane arv. Lisame selle <span class="fst-italic">elif</span>-tingimusena. Teistpidi kontrolli meil polegi otseselt vaja teha, ' +
    'saame lihtsalt lisada <span class="fst-italic">else</span>-haru.',
    'elif pakkumine < salajane_arv:\n' +
    '    print("Salajane arv on suurem")\n' +
    'else:\n' +
    '    print("Salajane arv on väiksem")'),
  new ExerciseHint('Kui nüüd kõik see kokku panna, siis peakski meil lahendus käes olema:',
    'salajane_arv = 17\n' +
    'while True:\n' +
    '    pakkumine = int(input("Paku arvu vahemikus 1-100: "))\n' +
    '    if salajane_arv == pakkumine:\n' +
    '        print("Leidsid õige arvu!")\n' +
    '        break\n' +
    '    elif pakkumine < salajane_arv:\n' +
    '        print("Salajane arv on suurem")\n' +
    '    else:\n' +
    '        print("Salajane arv on väiksem")')]

  guessNumberLimitedTriesExerciseHints = [new ExerciseHint('Eelmine programm lasi kasutajal pakkuda täpselt nii kaua kui tal kulus, et õige arv leida. ' +
    'Nüüd teeme kasutaja elu natuke raskemaks ja ütleme, et ta peab viie pakkumisega õige arvu leidma, või kaotab mängu.<br>Nüüd ei sõltu meie tsükkel enam ainult sellest kas kasutaja arvas sõna ära või mitte, vaid ka järele jäänud katsete arvust. ' +
    'Ka siin võid vabalt ise valida, kas soovid lisada katsete tingimuse tsüklitingimusse või tsükli sisusse koos <span class="fst-italic">break</span>-käsuga.', null),
  new ExerciseHint('Alustame võib-olla sellest, et lisame muutuja katsete arvu jaoks.', 'katseid = 5 # määrame katsete arvu'),
  new ExerciseHint('Pärast iga pakkumist tahame hakata seda katsete arvu vähendama. Tsükli tahame lõpetada kui katsete arv jõuab nullini.', null),
  new ExerciseHint('Lisame seekord siin katsete tingimuse tsüklitingimusse. Tsükli sees lõpetab <span class="fst-italic">break</span>-käsk ' +
    'tsükli kui kasutaja pakub arvu õigest ning tsüklitingimus lõpetab tsükli juhul kui katsed saavad otsa. Muidugi võib lisada mõlemad tingimused ka kas ' +
    'tsüklitingimusse või tsükli sisse. Tsüklitingimuses tahame tsüklit jätkata seni kuni katsete arv on suurem kui null.',
    'while katseid > 0:\n    # siia tuleb tsükli sisu'),
  new ExerciseHint('Tsükli sees tahame kõige lõpus vähendada katsete arvu ning siis väljastada järele jäänud katsete arvu ka kasutajale.', null),
  new ExerciseHint('Seda võime teha nii:', 'katseid -= 1\n' +
    'print("Jäänud katseid: " + str(katseid))'),
  new ExerciseHint('Kogu kood võiks kokku näha välja selline:',
    'salajane_arv = 17\n' +
    'katseid = 5\n' +
    'while katseid > 0:\n' +
    '    pakkumine = int(input("Paku arvu vahemikus 1-100: "))\n' +
    '    if salajane_arv == pakkumine:\n' +
    '        print("Leidsid õige arvu!")\n' +
    '        break\n' +
    '    elif pakkumine < salajane_arv:\n' +
    '        print("Salajane arv on suurem")\n' +
    '    else:\n' +
    '        print("Salajane arv on väiksem")\n' +
    '    katseid -= 1\n' +
    '    print("Jäänud katseid: " + str(katseid))')]

  guessNumberRandomExerciseHints = [new ExerciseHint('Siin ei olegi vaja teha muud, kui võtta eelmise ülesande lahendus ja lisada eeltoodud read.', null),
  new ExerciseHint('Kogu kood võiks lõpuks välja näha selline:',
    'from random import *\n' +
    '\n' +
    'salajane_arv = randint(0, 100)\n' +
    'katseid = 5\n' +
    'while katseid > 0:\n' +
    '    pakkumine = int(input("Paku arvu vahemikus 1-100: "))\n' +
    '    if salajane_arv == pakkumine:\n' +
    '        print("Leidsid õige arvu!")\n' +
    '        break\n' +
    '    elif pakkumine < salajane_arv:\n' +
    '        print("Salajane arv on suurem")\n' +
    '    else:\n' +
    '        print("Salajane arv on väiksem")\n' +
    '    katseid -= 1\n' +
    '    print("Jäänud katseid: " + str(katseid))')];

  pushUpsWithoutLoopCode = 'print("Tee üks kätekõverdus!")\n' +
    'print("Tee üks kätekõverdus!")\n' +
    'print("Tee üks kätekõverdus!")\n' +
    'print("Tee üks kätekõverdus!")\n' +
    'print("Tee üks kätekõverdus!")\n' +
    '...';
  pushUpsWithLoopCode = 'tehtud_kätekõverdusi = 0\n' +
    '\n' +
    'while tehtud_kätekõverdusi < 20:\n' +
    '    print("Tee üks kätekõverdus!")\n' +
    '    tehtud_kätekõverdusi = tehtud_kätekõverdusi + 1';
  secretWordCode = 'salajane_sõna = "ploom"\n' +
    'pakkumine = input("Mis on sügisel valmiv lilla puuvili? ")\n' +
    '\n' +
    'while pakkumine != salajane_sõna:\n' +
    '    pakkumine = input("See ei ole õige. Paku uuesti: ")\n' +
    '\n' +
    'print("Tubli! Arvasid õigesti!")'
  infiniteLoopCode = 'tehtud_kätekõverdusi = 0\n' +
    '\n' +
    'while tehtud_kätekõverdusi < 20:\n' +
    '    print("Tee üks kätekõverdus!")';
  secretWordWithConditionCode = 'salajane_sõna = "ploom"\n' +
    'pakkumine = input("Mis on sügisel valmiv lilla puuvili? ")\n' +
    '\n' +
    'while pakkumine != salajane_sõna:\n' +
    '    pakkumine = input("See ei ole õige. Paku uuesti: ")\n' +
    '\n' +
    'print("Tubli! Arvasid õigesti!")';
  secretWordWithBreakCode = 'salajane_sõna = "ploom"\n' +
    'pakkumine = input("Mis on sügisel valmiv lilla puuvili? ")\n' +
    '\n' +
    'while True:\n' +
    '    if pakkumine == salajane_sõna:\n' +
    '        break\n' +
    '    pakkumine = input("See ei ole õige. Paku uuesti: ")\n' +
    '\n' +
    'print("Tubli! Arvasid õigesti!")';

}
