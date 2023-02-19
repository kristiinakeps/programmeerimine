import {Component} from '@angular/core';
import {ExerciseHint} from "../../models/exercise-hint.model";
import {TestAnswer} from "../../models/test-answer.model";

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.scss']
})
export class ErrorHandlingComponent {

  tryTestCode = 'try:\n' +
    '    a = int("kolm")\n' +
    '    b = int("14")\n' +
    'except ValueError:\n' +
    '    a = 0\n' +
    '    b = 0\n' +
    'print(a)\n' +
    'print(b)';
  tryTestItems = [new TestAnswer('0, 14', false, 'Kui <span class="fst-italic">try</span>-osas tekib viga, siis ülejäänud ridu sealt ei täideta. ' +
    'Minnakse kohe <span class="fst-italic">except</span>-osa juurde ja täidetakse sealsed read.'),
    new TestAnswer('0, 0', true, 'Jah, <span class="fst-italic">try</span>-osas tekib erind, mis püütakse kinni. Püünises omistatakse uus väärtus nii muutujale <span class="fst-italic">a</span> kui ka <span. class="fst-italic">b</span.>'),
    new TestAnswer('0, 14', false, 'Kas <span class="fst-italic">b</span> väärtus saab olla 14?'),
    new TestAnswer('kolm, 14', false, 'Sõne <span class="fst-italic">"kolm"</span> proovitakse teisendada täisarvuks ja see tekitab erindi. Kui erind kinni püütakse, ' +
      'siis omistatakse muutujatele teised väärtused.'),
    new TestAnswer('Veateade', false, 'Siin küll tekib erind, kuid see erind püütakse ka kinni.')]

  errorLinesCode = 'vanus = 17\n' +
    'if vanus >= 18:\n' +
    '    print("Oled täisealine")\n' +
    'elif:\n' +
    '    print("Oled alla 18")\n' +
    'else:\n' +
    '    print(Oled alaealine)';
  errorLinesItems = [new TestAnswer('vanus = 17', false, 'Muutujale <span class="fst-italic">vanus</span> väärtuse omistamine peaks toimima vigadeta.'),
    new TestAnswer('if vanus >= 18:', false, 'Tingimuslause <span class="fst-italic">if</span>-haru tingimus 2. real ei ole vigane.'),
    new TestAnswer('print("Oled täisealine")', false, '3. rida ei tekita probleeme. Taane on olemas ja <span class="fst-italic">print</span>-funktsioonile antakse argumendiks sõne.'),
    new TestAnswer('elif:', true, 'Tingimuslause <span class="fst-italic">elif</span>-harul peab ka tingimus olema.'),
    new TestAnswer('print("Oled alla 18")', false, '5. read väljastus ei tohiks probleeme tekitada. Taane on olemas ja <span class="fst-italic">print</span>-funktsiooni kutsutakse korrektselt välja.'),
    new TestAnswer('else:', false, '6. real on kõik korras, <span class="fst-italic">else</span>-harul ei pea tingimust olema.'),
    new TestAnswer('print(Oled alaealine)', true, 'Jälgi mida <span class="fst-italic">print</span>-funktsioonidele argumentideks antakse, kas need väärtused on igalpool korrektsed?')]

  pizzaExerciseHints = [new ExerciseHint('Alustada võib nii põhiprogrammi kui funktsiooni muutmisest. Alustame siin näiteks funktsioonist. ' +
    'Sinna võib kohe algusesse lisada tingimuslause, mis kontrolliks, ega läbimõõt pole 20, 28 või 38 seas. Kui ei ole, siis saame tõstatada uue erindi.', null),
    new ExerciseHint('Tingimuslauses saame teha kolm võrdlust ja siduda need omavahel tehtega <span class="fst-italic">and</span>. Erindi tõstatamiseks kasutame ' +
      'võtmesõna <span class="fst-italic">raise</span> ja võime lisada ka väikse teate.', 'if läbimõõt != 20 and läbimõõt != 28 and läbimõõt != 38:\n' +
      '    raise ValueError("läbimõõt peab olema 20, 28 või 38")'),
    new ExerciseHint('Järgmiseks tuleks kirjutada põhiprogramm. Alustuseks võib ilma erindite püüdmiseta prgrammi valmis kirjutada ja seejärel lisada <span class="fst-italic">try-excepi</span>. ' +
      'Põhiprogrammis peaks kõigepealt kasutajalt läbimõõdu küsima, selle täisarvuks teisendama ning seejärel funktsiooni välja kutsuma ja väljastama funktsiooni tagastatud väärtuse.', null),
    new ExerciseHint('Kasutajalt saadud läbimõõdu võime salvestada muutujasse ja seejärel kasutada seda muutujat funktsiooni argumendina.',
      'läbimõõt = int(input("Sisesta pitsa läbimõõt: "))\n' +
      'print("Vajaminev taignakogus grammides: " + str(pitsatainas(läbimõõt)))'),
    new ExerciseHint('Nüüd on põhiprogrammi sisu ka olemas, vaja ainult lisada erindi püüdmine. Erind võib tekkida nii sisendi teisendamisel täisarvuks kui ka funktsiooni väljakutsel. Mõlemal ' +
      'juhul võib tekkida <span class="fst-italic">ValueError</span>, seega võime lisada mõlemad read sama <span class="fst-italic">try</span>-bloki sisse ja kirjutada sama püünise ' +
      'mõlema rea jaoks.', null),
    new ExerciseHint('Erindi püüdmise ja teate väljastamise saab teha nii:',
      'try:\n' +
      '    läbimõõt = int(input("Sisesta pitsa läbimõõt: "))\n' +
      '    print("Vajaminev taignakogus grammides: " + str(pitsatainas(läbimõõt)))\n' +
      'except ValueError:\n' +
      '    print("Sisend ei ole 20, 28 ega 38!")'),
    new ExerciseHint('Kogu kood kokkupandult näeb välja selline:',
      'def  pitsatainas(läbimõõt):\n' +
      '    if läbimõõt != 20 and läbimõõt != 28 and läbimõõt != 38:\n' +
      '        raise ValueError("läbimõõt peab olema 20, 28 või 38")\n' +
      '    pindala = (läbimõõt / 2)**2 * 3.14\n' +
      '    taigna_kogus = round(pindala * 2.3, 1)\n' +
      '    return  taigna_kogus\n' +
      '\n' +
      'try:\n' +
      '    läbimõõt = int(input("Sisesta pitsa läbimõõt: "))\n' +
      '    print("Vajaminev taignakogus grammides: " + str(pitsatainas(läbimõõt)))\n' +
      'except ValueError:\n' +
      '    print("Sisend ei ole 20, 28 ega 38!")')];

  competitionExerciseHints = [new ExerciseHint('Selle ülesande puhul võime alustada faili nime küsimisest ja faili avamisest. See peaks toimuma tsüklis koos faili avamisel ' +
    'tekkiva <span class="fst-italic">FileNotFoundError</span>-erindi püüdmisega. Kui fail õnnestub vigadeta avada, siis võib tsükli lõpetada ja programmiga edasi minna.', null),
    new ExerciseHint('Faili avamise tsüklis saab korraldada nii:',
      'while True:\n' +
      '    try:\n' +
      '        faili_nimi = input("Sisesta teatejooksu tulemuste faili nimi: ")\n' +
      '        fail = open(faili_nimi)\n' +
      '        break\n' +
      '    except FileNotFoundError:\n' +
      '        print("Sellist faili ei õnnestu avada!")'),
    new ExerciseHint('Kuna me teame, et tsüklist ei saa me enne edasi, kui fail on leitud ja avatud, siis võime julgelt põhiprogrammi kirjutada koodi, mis loeb faili sisu.', null),
    new ExerciseHint('Kuna iga rea kohta on meil vaja küsida õpilaste arvu, siis sobiks siin kõige paremini faili reakaupa läbimine, mitte kogu sisu korraga sisse lugemine.', null),
    new ExerciseHint('Samuti tuleks mõelda sellele, et faili reahaaval tsüklis lugedes, peame kokku liitma kasutajalt küsitud õpilaste arvud. Selle õpilaste arvu hoiustamiseks võiks enne tsüklit luua muutuja.', null),
    new ExerciseHint('Õpilaste arvu muutuja ja tsükli algus:', 'õpilaste_arv = 0\n' +
      'for klass in fail:\n    # tsükli sisu'),
    new ExerciseHint('<span class="fst-italic">For</span>-tsükli sees tuleks kasutajalt küsida õpilaste arvu ja see täisarvuks teisendada. Seda peaks nüüd jälle tegema tsüklis ja küsima seda arvu nii kaua, kuni ' +
      'kasutaja sisend õnnestub täisarvuks teisendada.', null),
    new ExerciseHint('Ei tasu ka unustada, et kui soovime klassi nime väljastada, siis võiks sealt lõpust reavahetuse sümboli eemaldada:',
      'while True:\n' +
      '    try:\n' +
      '        klassi_õpilaste_arv = int(input("Mitu õpilast on " + klass.strip() + " klassis? "))\n' +
      '        break\n' +
      '    except ValueError:\n' +
      '        print("Vigane arv!")'),
    new ExerciseHint('Kui klassi õpilaste arv on kätte saadud, siis tuleks ka kogu õpilaste arvu selle võrra suurendada:', 'õpilaste_arv += klassi_õpilaste_arv'),
    new ExerciseHint('Kõige lõpus tuleks kasutajale väljastada, mitu kingitust on vaja teha:', 'print("Kokku on vaja teha " + str(õpilaste_arv) + " kingitust.")'),
    new ExerciseHint('Kogu lahendus:',
      'while True:\n' +
      '    try:\n' +
      '        faili_nimi = input("Sisesta teatejooksu tulemuste faili nimi: ")\n' +
      '        fail = open(faili_nimi)\n' +
      '        break\n' +
      '    except FileNotFoundError:\n' +
      '        print("Sellist faili ei õnnestu avada!")\n' +
      'õpilaste_arv = 0\n' +
      'for klass in fail:\n' +
      '    while True:\n' +
      '        try:\n' +
      '            klassi_õpilaste_arv = int(input("Mitu õpilast on " + klass.strip() + " klassis? "))\n' +
      '            break\n' +
      '        except ValueError:\n' +
      '            print("Vigane arv!")\n' +
      '    õpilaste_arv += klassi_õpilaste_arv\n' +
      'print("Kokku on vaja teha " + str(õpilaste_arv) + " kingitust.")')];

  wrongIndentationCode = 'arv = int(input("Sisesta arv: "))\n' +
    'if arv > 0:\n' +
    'print("Positiivne arv")';
  noColonCode = 'arv = int(input("Sisesta arv: "))\n' +
    'if arv > 0\n' +
    '    print("Positiivne arv")';
  wrongVariableNameCode = 'arv = int(input("Sisesta arv: "))\n' +
    'print(ar)';
  typeConversionCode = 'arv = int("Tere!")';
  tryExceptCode = 'try:\n' +
    '    arv = int(input("Sisesta arv: "))\n' +
    'except:\n' +
    '    print("Sisestatud väärtus ei ole täisarv! Vaikimisi määratakse arvuks 1.")\n' +
    '    arv = 1\n' +
    'print("Sisestatud arv on: " + str(arv))';
  tryExceptsCode = 'try:\n' +
    '    lugeja = int(input("Sisesta lugeja: "))\n' +
    '    nimetaja = int(input("Sisesta nimetaja: "))\n' +
    '    print("Tulemus on: " + str(lugeja / nimetaja))\n' +
    'except ValueError:\n' +
    '    print("Sisestatud arv ei ole täisarv!")\n' +
    'except ZeroDivisionError:\n' +
    '    print("Nimetaja ei tohi olla 0!")';
  tryOneExceptCode = 'try:\n' +
    '    lugeja = int(input("Sisesta lugeja: "))\n' +
    '    nimetaja = int(input("Sisesta nimetaja: "))\n' +
    '    print("Tulemus on: " + str(lugeja / nimetaja))\n' +
    'except (ValueError, ZeroDivisionError):\n' +
    '    print("Sisestatud väärtused ei sobi!")';
  tryNoSuitableExceptCode = 'try:\n' +
    '    lugeja = int(input("Sisesta lugeja: "))\n' +
    '    nimetaja = int(input("Sisesta nimetaja: "))\n' +
    '    print("Tulemus on: " + str(lugeja / nimetaja))\n' +
    'except ValueError:\n' +
    '    print("Sisestatud arv ei ole täisarv!")';
  loopTryCode = 'while True:\n' +
    '    try:\n' +
    '        arv = int(input("Sisesta arv: "))\n' +
    '        break\n' +
    '    except ValueError:\n' +
    '        print("Sisestatud arv ei ole täisarv!")\n' +
    'print("Sisestatud arv on: " + str(arv))';
  loopOpenFileCode = 'while True:\n' +
    '    try:\n' +
    '        faili_nimi = input("Sisesta faili nimi: ")\n' +
    '        fail = open(faili_nimi)\n' +
    '        break\n' +
    '    except FileNotFoundError:\n' +
    '        print("Sellist faili ei leidu!")\n' +
    'sisu = fail.read()\n' +
    'print(sisu)';
  tryExceptNoTypeCode = 'try:\n' +
    '    arv = int(input("Sisesta arv: "))\n' +
    '    print("Sisestatud arv on: " + str(ar))\n' +
    'except:\n' +
    '    print("Sisestatud arv ei ole täisarv!")';
  tryExceptValueErrorCode = 'try:\n' +
    '    arv = int(input("Sisesta arv: "))\n' +
    '    print("Sisestatud arv on: " + str(ar))\n' +
    'except ValueError:\n' +
    '    print("Sisestatud arv ei ole täisarv!")';
  tryLinesAfterCode = 'try:\n' +
    '    arv = int(input("Sisesta arv: "))\n' +
    'except:\n' +
    '    print("Sisestatud arv ei ole täisarv!")\n' +
    'print("Sisestatud arv on: " + str(arv))';
  tryExceptElseCode = 'try:\n' +
    '    arv = int(input("Sisesta arv: "))\n' +
    'except:\n' +
    '    print("Sisestatud arv ei ole täisarv!")\n' +
    'else:\n' +
    '    print("Sisestatud arv on: " + str(arv))';
  defRaiseValueErrorCode = 'def täisarvu_küsimine():\n' +
    '    arv = int(input("Sisesta täisav vahemikus 1-10: "))\n' +
    '    if arv < 1 or arv > 10:\n' +
    '        raise ValueError\n' +
    '    return arv\n' +
    '\n' +
    'arv = täisarvu_küsimine()';
  defRaiseErrorMessageCode = 'def täisarvu_küsimine():\n' +
    '    arv = int(input("Sisesta täisav vahemikus 1-10: "))\n' +
    '    if arv < 1 or arv > 10:\n' +
    '        raise ValueError("vahemik peab olema 1-10")\n' +
    '    return arv\n' +
    '\n' +
    'arv = täisarvu_küsimine()';
  raiseErrorExceptCode = 'try:\n' +
    '    arv = täisarvu_küsimine()\n' +
    'except ValueError:\n' +
    '    print("Sisestatud arv ei ole täisarv vahemikus 1-10!")';
  defPizzaDoughCode = 'def pitsatainas(läbimõõt):\n' +
    '    pindala = (läbimõõt / 2)**2 * 3.14\n' +
    '    taigna_kogus = round(pindala * 2.3, 1)\n' +
    '    return  taigna_kogus';

}
