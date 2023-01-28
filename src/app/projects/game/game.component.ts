import {Component} from '@angular/core';
import {ExerciseHint} from "../../models/exercise-hint.model";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  giftsHints = [new ExerciseHint('Alustame sellest, et proovime liigutada suure osa koodist klassist Lumepall uude ülemklassi. Võime selle ülemklassi nimeks ' +
    'panna näiteks Lendav, kuna meie koodis koonsab see enda alla lendavd lumepallid ja lendavad kingitused. Tõstame ta ka eraldi faili nimega <span class="fst-italic">lendav.py</span>.' +
    'Alamklasse eristavad üksteisest vaid pildid, mille seast isendi pilt valida.', null),
  new ExerciseHint('Kopeerime kõik klassist Lumepall, kuid lisame konstruktorile veel ühe lisaargumenti &ndash; pilt. Alamklassid saavad siis oma piltide järjendist ühe juhuslikult valida ja ' +
    'anda kaasa ülemklassi konstruktorile.', 'import pygame\n' +
    'import random\n' +
    '\n' +
    'class Lendav(pygame.sprite.Sprite):\n' +
    '    \n' +
    '    def __init__(self, akna_laius, akna_kõrgus, pilt):\n' +
    '        pygame.sprite.Sprite.__init__(self)\n' +
    '        self.image = pygame.image.load(pilt)\n' +
    '        self.rect = self.image.get_rect()\n' +
    '        self.akna_laius = akna_laius\n' +
    '        self.akna_kõrgus = akna_kõrgus\n' +
    '        self.määra_asukoht()\n' +
    '    \n' +
    '    \n' +
    '    def määra_asukoht(self):\n' +
    '        self.rect.x = random.randint(0, self.akna_laius)\n' +
    '        self.rect.y = random.randint(-150, -50)\n' +
    '        self.kiirusy = random.randint(1, 8)\n' +
    '        self.kiirusx = random.randint(-3, 3)\n' +
    '        \n' +
    '    def update(self):\n' +
    '        self.rect.x += self.kiirusx\n' +
    '        self.rect.y += self.kiirusy\n' +
    '        if self.rect.top > self.akna_kõrgus or self.rect.right < 0 or self.rect.left > self.akna_laius:\n' +
    '            self.määra_asukoht()\n'),
  new ExerciseHint('Meie klass Lumepall on peale seda muudatust üsna pisike. Valime konstruktoris kõigepealt suvalise pildi välja ja siis kutsume ' +
    'välja ülemklassi konstruktorit koos selle pildiga. Ei tasu ka unustada, et nüüd peame importima ka ülemklassi faili. Kuna nüüd sai kõik ' +
    '<span class="fst-italic">pygame</span> teegi kood liigutatud ülemklassi, siis see klass ei pea enam seda teeki importima.', 'import random\n' +
    'import lendav\n' +
    '\n' +
    'class Lumepall(lendav.Lendav):\n' +
    '    \n' +
    '    def __init__(self, akna_laius, akna_kõrgus):\n' +
    '        võimalikud_pildid = ["lumepall_1.png", "lumepall_2.png", "lumepall_3.png", "lumepall_4.png", "lumepall_5.png"]\n' +
    '        pilt = random.choice(võimalikud_pildid)\n' +
    '        super().__init__(akna_laius, akna_kõrgus, pilt)\n'),
  new ExerciseHint('Klass Kingitus on väga sarnane klassiga Lumepall, vaid piltide nimed on teised.', 'import random\n' +
    'import lendav\n' +
    '\n' +
    'class Kingitus(lendav.Lendav):\n' +
    '    \n' +
    '    def __init__(self, akna_laius, akna_kõrgus):\n' +
    '        võimalikud_pildid = ["kingitus_1.png", "kingitus_2.png", "kingitus_3.png", "kingitus_4.png", "kingitus_5.png"]\n' +
    '        pilt = random.choice(võimalikud_pildid)\n' +
    '        super().__init__(akna_laius, akna_kõrgus, pilt)\n'),
  new ExerciseHint('Kuna mängus tahame hakata nüüd peategelase elusid ka suurendama, siis tasub Päkapikk klassi lisada ka vastav meetod.', null),
  new ExerciseHint('Selle meetodi loogika on üsna sarnane elude vähendamise loogikale.', 'def suurenda_elusid(self):\n' +
    '    self.elud += 1\n' +
    '    if self.elud > self.täiselud:\n' +
    '        self.elud = self.täiselud'),
  new ExerciseHint('Peaklassis peame kõigepealt lisama impordi oma uue <span class="fst-italic">kingitus.py</span> faili jaoks. Seejärel võime sarnaselt ' +
    'lumepallidele luua ka kaheksa kingitust ja lisada nad oma gruppi. Kingituste gruppi tuleb siis samuti tsüklis uuendada ja joonistada ning tahame ka ' +
    'peategelase kokkupõrkeid kingitustega jälgida.', null),
  new ExerciseHint('Peaklass koos kingitustega on selline:', 'import pygame\n' +
    'import päkapikk\n' +
    'import lumepall\n' +
    'import kingitus\n' +
    '\n' +
    'def joonista_elud(aken, palju_täidetud):\n' +
    '    riba_laius = 250\n' +
    '    riba_kõrgus = 20\n' +
    '    x = 15\n' +
    '    y = 15\n' +
    '    täidise_laius = palju_täidetud * riba_laius\n' +
    '    piirjoon = pygame.Rect(x, y, riba_laius, riba_kõrgus)\n' +
    '    täidis = pygame.Rect(x, y, täidise_laius, riba_kõrgus)\n' +
    '    pygame.draw.rect(aken, (0, 255, 0), täidis)\n' +
    '    pygame.draw.rect(aken, (255, 255, 255), piirjoon, 2)\n' +
    '\n' +
    'pygame.init()\n' +
    '\n' +
    '# akna loomine\n' +
    'laius =  1262# laius ja pikkus on pikslites\n' +
    'kõrgus = 845\n' +
    'aken = pygame.display.set_mode((laius, kõrgus))\n' +
    'pygame.display.set_caption("Jõulumäng")\n' +
    '\n' +
    '# taustapilt\n' +
    'taustapilt = pygame.image.load("taust.png")\n' +
    '\n' +
    '# peategelane\n' +
    'tegelane_päkapikk = päkapikk.Päkapikk(laius // 2, kõrgus - 30, laius, 10)\n' +
    'peategelane = pygame.sprite.Group()\n' +
    'peategelane.add(tegelane_päkapikk)\n' +
    '\n' +
    '# lumepallid ja kingitused\n' +
    'lumepallid = pygame.sprite.Group()\n' +
    'kingitused = pygame.sprite.Group()\n' +
    'for i in range(8):\n' +
    '    lumepallid.add(lumepall.Lumepall(laius, kõrgus))\n' +
    '    kingitused.add(kingitus.Kingitus(laius, kõrgus))\n' +
    '\n' +
    '# mängu tsükkel\n' +
    'käib = True\n' +
    'while käib:\n' +
    '    \n' +
    '    #kontrollime akna sulgemist\n' +
    '    for event in pygame.event.get():\n' +
    '        if event.type == pygame.QUIT:\n' +
    '            käib = False\n' +
    '    \n' +
    '    # joonistame tausta\n' +
    '    aken.blit(taustapilt, (0, 0))\n' +
    '    \n' +
    '    # uuendame ja joonistame sprite\'ide grupid\n' +
    '    peategelane.update()\n' +
    '    lumepallid.update()\n' +
    '    kingitused.update()\n' +
    '    \n' +
    '    # jälgime kokkupõrkeid\n' +
    '    kokkupuutuvad_lumepallid = pygame.sprite.spritecollide(tegelane_päkapikk, lumepallid, False)\n' +
    '    for pall in kokkupuutuvad_lumepallid:\n' +
    '        pall.määra_asukoht()\n' +
    '        tegelane_päkapikk.vähenda_elusid()\n' +
    '        if tegelane_päkapikk.elud == 0:\n' +
    '            käib = False\n' +
    '            \n' +
    '    kokkupuutuvad_kingitused = pygame.sprite.spritecollide(tegelane_päkapikk, kingitused, False)\n' +
    '    for kink in kokkupuutuvad_kingitused:\n' +
    '        kink.määra_asukoht()\n' +
    '        tegelane_päkapikk.suurenda_elusid()\n' +
    '        \n' +
    '    peategelane.draw(aken)\n' +
    '    lumepallid.draw(aken)\n' +
    '    kingitused.draw(aken)\n' +
    '    \n' +
    '    # elud\n' +
    '    joonista_elud(aken, tegelane_päkapikk.elud / tegelane_päkapikk.täiselud)\n' +
    '    \n' +
    '    # uuendame kasutaja jaoks vaadet\n' +
    '    pygame.display.flip()\n' +
    '\n' +
    'pygame.quit()\n')];

  recordHints = [new ExerciseHint('Kohe lõpuakna funktsiooni alguses võime proovida failist varasemat rekordit lugeda. Kuid kuna seda faili ei pruugi olemas olla, ' +
    'siis oleks hea failist lugemine panna <span class="fst-italic">try</span>-bloki sisse. Kui faili avamine õnnestub, siis proovime sealt sisu lugeda ja teisendada ujukomaarvuks. ' +
    'Kui failist lugemisel tekib mingi probleem, siis määrame rekordiks lihtsalt 0.0.', null),
  new ExerciseHint('Failile võime ise nime mõelda. Kasutame näiteks nime <span class="fst-italic">rekord.txt</span>.', 'try:\n' +
    '    fail = open("rekord.txt")\n' +
    '    rekord = float(fail.read())\n' +
    '    fail.close()\n' +
    'except:\n' +
    '    rekord = 0.0'),
  new ExerciseHint('Sellega saame kätte varasema rekordi. Kui nüüd meie mängija saadud tulemus oli suurem kui see rekord, siis peame ka faili sisu uuendama. ' +
    'Selleks saame sama faili avada kirjutamiseks (teine argument peab olema <span class="fst-italic">"w"</span>.', null),
  new ExerciseHint('Lõpus võiks ka faili sulgeda.', 'if tulemus > rekord:\n' +
    '    fail = open("rekord.txt", "w")\n' +
    '    fail.write(str(tulemus))\n' +
    '    fail.close()'),
  new ExerciseHint('Nüüd peaksime veel varasemat rekordit ekraanil kuvama. Kuvame ta näiteks tulemuse järel, enne uuesti mängimise linki. Peame natuke ' +
    'ilmselt "Mängi uuesti" asukohta allapoole nihutama, et meie varasem rekord ka ära mahuks.', null),
  new ExerciseHint('Rekordi kuvamine on väga sarnane tulemuse kuvamisele, vaid koordinaadid on teised.', 'def lõpuaken(aken, taustapilt, tulemus):\n' +
    '    \n' +
    '    # varasem rekord\n' +
    '    try:\n' +
    '        fail = open("rekord.txt")\n' +
    '        rekord = float(fail.read())\n' +
    '        fail.close()\n' +
    '    except:\n' +
    '        rekord = 0.0\n' +
    '        \n' +
    '    if tulemus > rekord:\n' +
    '        fail = open("rekord.txt", "w")\n' +
    '        fail.write(str(tulemus))\n' +
    '        fail.close()\n' +
    '    \n' +
    '    # fondid\n' +
    '    suur_font = pygame.font.SysFont(\'Cooper Black\', 120)\n' +
    '    väike_font = pygame.font.SysFont(\'Cooper Black\', 80)\n' +
    '    \n' +
    '    punane = (195, 20, 20)\n' +
    '    roheline = (50, 150, 0)\n' +
    '    tumeroheline = (30, 90, 0)\n' +
    '    \n' +
    '    mäng_läbi = suur_font.render("MÄNG LÄBI", True, punane)\n' +
    '    saadud_tulemus = väike_font.render("Tulemus: " + str(tulemus), True, punane)\n' +
    '    varasem_rekord = väike_font.render("Varasem rekord: " + str(rekord), True, punane)\n' +
    '    \n' +
    '    # uuesti mängimise tekst, peale liikudes muudab värvi\n' +
    '    mängi_uuesti_asukoht = (360, 640)\n' +
    '    mängi_uuesti_roheline = väike_font.render("Mängi uuesti", True, roheline)\n' +
    '    mängi_uuesti_tumeroheline = väike_font.render("Mängi uuesti", True, tumeroheline)\n' +
    '    \n' +
    '    # vajalik, et kontrollida, kas hiir on "Mängi uuesti" peal\n' +
    '    mängi_uuesti_rect = mängi_uuesti_roheline.get_rect()\n' +
    '    mängi_uuesti_rect.x = mängi_uuesti_asukoht[0]\n' +
    '    mängi_uuesti_rect.y = mängi_uuesti_asukoht[1]\n' +
    '    \n' +
    '    while True:\n' +
    '        hiire_asukoht = pygame.mouse.get_pos()\n' +
    '        for event in pygame.event.get():\n' +
    '            if event.type == pygame.QUIT:\n' +
    '                return False\n' +
    '            if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1 and mängi_uuesti_rect.collidepoint(hiire_asukoht):\n' +
    '                return True\n' +
    '        aken.blit(taustapilt, (0, 0))\n' +
    '        aken.blit(mäng_läbi, (260, 200))\n' +
    '        aken.blit(saadud_tulemus, (340, 440))\n' +
    '        aken.blit(varasem_rekord, (200, 540))\n' +
    '\n' +
    '        if mängi_uuesti_rect.collidepoint(hiire_asukoht):\n' +
    '            aken.blit(mängi_uuesti_tumeroheline, mängi_uuesti_asukoht)\n' +
    '        else:\n' +
    '            aken.blit(mängi_uuesti_roheline, mängi_uuesti_asukoht)\n' +
    '        pygame.display.flip()')];


  initCode = 'import pygame\n' +
    '\n' +
    '# teegi laadimine ja seadistamine\n' +
    'pygame.init()\n' +
    '\n' +
    '# akna loomine\n' +
    'laius = 1262 # laius ja pikkus on pikslites\n' +
    'pikkus = 845\n' +
    'aken = pygame.display.set_mode((laius, pikkus))\n' +
    '\n' +
    '# aknale pealkirja lisamine\n' +
    'pygame.display.set_caption("Jõulumäng")\n' +
    '\n' +
    '# mängu tsükkel, kus kõik tegevused toimuvad\n' +
    'käib = True\n' +
    'while käib:\n' +
    '    \n' +
    '    #igal tsükli iteratsioonil kontrollime kasutaja tegevusi\n' +
    '    for event in pygame.event.get():\n' +
    '        # kontrollime, kas kasutaja sulges ülevalt ristist akna\n' +
    '        if event.type == pygame.QUIT:\n' +
    '            käib = False\n' +
    '     \n' +
    '    # uuendame kasutaja jaoks vaadet\n' +
    '    pygame.display.flip()\n' +
    '\n' +
    '# kui mängu tsükkel lõppeb, siis sulgeme ka pygame\'i\n' +
    'pygame.quit()\n';
  backgroundLoadCode = 'taustapilt = pygame.image.load("taust.png")'
  backgroundCode = 'import pygame\n' +
    'from päkapikk import *\n' +
    '\n' +
    '# teegi laadimine ja seadistamine\n' +
    'pygame.init()\n' +
    '\n' +
    '# akna loomine\n' +
    'laius = 1262 # laius ja pikkus on pikslites\n' +
    'pikkus = 845\n' +
    'aken = pygame.display.set_mode((laius, pikkus))\n' +
    '\n' +
    '# aknale pealkirja lisamine\n' +
    'pygame.display.set_caption("Jõulumäng")\n' +
    '\n' +
    'taustapilt = pygame.image.load("taust.png")\n' +
    '\n' +
    '# mängu tsükkel, kus kõik tegevused toimuvad\n' +
    'käib = True\n' +
    'while käib:\n' +
    '    \n' +
    '    #igal tsükli iteratsioonil kontrollime kasutaja tegevusi\n' +
    '    for event in pygame.event.get():\n' +
    '        # kontrollime, kas kasutaja sulges ülevalt ristist akna\n' +
    '        if event.type == pygame.QUIT:\n' +
    '            käib = False\n' +
    '    \n' +
    '    aken.blit(taustapilt, (0, 0))\n' +
    '    # uuendame kasutaja jaoks vaadet\n' +
    '    pygame.display.flip()\n' +
    '\n' +
    '# kui mängu tsükkel lõppeb, siis sulgeme ka pygame\'i\n' +
    'pygame.quit()\n';
  elfInitCode = 'import pygame\n' +
    '\n' +
    'class Päkapikk(pygame.sprite.Sprite):\n' +
    '    def __init__(self):\n' +
    '        super().__init__(self)';
  elfFieldsCode = 'import pygame\n\nclass Päkapikk(pygame.sprite.Sprite):\n' +
    '    def __init__(self, x, y):\n' +
    '        pygame.sprite.Sprite.__init__(self)\n' +
    '        self.image = pygame.image.load("päkapikk.png")\n' +
    '        self.rect = self.image.get_rect()\n' +
    '        self.rect.centerx = x\n' +
    '        self.rect.bottom = y';
  gameWithElfCode = 'import pygame\n' +
    'import päkapikk\n' +
    '\n' +
    '# teegi laadimine ja seadistamine\n' +
    'pygame.init()\n' +
    '\n' +
    '# akna loomine\n' +
    'laius = 1262 # laius ja pikkus on pikslites\n' +
    'kõrgus = 845\n' +
    'aken = pygame.display.set_mode((laius, kõrgus))\n' +
    '\n' +
    '# aknale pealkirja lisamine\n' +
    'pygame.display.set_caption("Jõulumäng")\n' +
    '\n' +
    'taustapilt = pygame.image.load("taust.png")\n' +
    '# loome peategelase, x-koordinaat on ekraani keskel, y-koordinaat peaaegu ekraani allservas\n' +
    'tegelane_päkapikk = päkapikk.Päkapikk(laius // 2, kõrgus - 30)\n' +
    '# tekitame tegelase jaoks Group objekti ja lisame ta sinna\n' +
    'peategelane = pygame.sprite.Group()\n' +
    'peategelane.add(tegelane_päkapikk)\n' +
    '\n' +
    '# mängu tsükkel, kus kõik tegevused toimuvad\n' +
    'käib = True\n' +
    'while käib:\n' +
    '    \n' +
    '    #igal tsükli iteratsioonil kontrollime kasutaja tegevusi\n' +
    '    for event in pygame.event.get():\n' +
    '        # kontrollime, kas kasutaja sulges ülevalt ristist akna\n' +
    '        if event.type == pygame.QUIT:\n' +
    '            käib = False\n' +
    '    \n' +
    '    # joonistame tausta\n' +
    '    aken.blit(taustapilt, (0, 0))\n' +
    '    # joonistame sprite\'ide grupid\n' +
    '    peategelane.draw(aken)\n' +
    '    # uuendame kasutaja jaoks vaadet\n' +
    '    pygame.display.flip()\n' +
    '\n' +
    '# kui mängu tsükkel lõppeb, siis sulgeme ka pygame\'i\n' +
    'pygame.quit()\n';

  elfUpdateInitialCode = 'def update(self):\n' +
    '    kiirus = 5\n' +
    '    klahvid = pygame.key.get_pressed()\n' +
    '    if klahvid[pygame.K_LEFT]:\n' +
    '        self.rect.centerx -= kiirus\n' +
    '    if klahvid[pygame.K_RIGHT]:\n' +
    '        self.rect.centerx += kiirus';

  elfConstructorWithWidthCode = 'def __init__(self, x, y, akna_laius):\n' +
    '    pygame.sprite.Sprite.__init__(self)\n' +
    '    self.image = pygame.image.load("päkapikk.png")\n' +
    '    self.rect = self.image.get_rect()\n' +
    '    self.rect.centerx = x\n' +
    '    self.rect.bottom = y\n' +
    '    self.akna_laius = akna_laius';
  elfUpdateWithWidthCheckCode = 'def update(self):\n' +
    '    kiirus = 5\n' +
    '    klahvid = pygame.key.get_pressed()\n' +
    '    if klahvid[pygame.K_LEFT]:\n' +
    '        self.rect.centerx -= kiirus\n' +
    '    if klahvid[pygame.K_RIGHT]:\n' +
    '        self.rect.centerx += kiirus\n' +
    '    if self.rect.left < 0:\n' +
    '        self.rect.left = 0\n' +
    '    if self.rect.right > self.akna_laius:\n' +
    '        self.rect.right = self.akna_laius';
  snowballInitCode = 'import pygame\n' +
    'import random\n' +
    '\n' +
    'class Lumepall(pygame.sprite.Sprite):\n' +
    '    \n' +
    '    def __init__(self, akna_laius, akna_kõrgus):\n' +
    '        pygame.sprite.Sprite.__init__(self)\n' +
    '        võimalikud_pildid = ["lumepall_1.png", "lumepall_2.png", "lumepall_3.png", "lumepall_4.png", "lumepall_5.png"]\n' +
    '        self.image = random.choice(võimalikud_pildid)\n' +
    '        self.rect = self.image.get_rect()\n' +
    '        self.akna_laius = akna_laius\n' +
    '        self.akna_kõrgus = akna_kõrgus\n' +
    '        self.rect.x = random.randint(0, self.akna_laius)\n' +
    '        self.rect.y = random.randint(0, self.akna_kõrgus)';
  snowballMainClassCode = 'import pygame\n' +
    'import päkapikk\n' +
    'import lumepall\n' +
    '\n' +
    'pygame.init()\n' +
    '\n' +
    '# akna loomine\n' +
    'laius = 1262 # laius ja pikkus on pikslites\n' +
    'kõrgus = 845\n' +
    'aken = pygame.display.set_mode((laius, kõrgus))\n' +
    'pygame.display.set_caption("Jõulumäng")\n' +
    '\n' +
    '# taustapilt\n' +
    'taustapilt = pygame.image.load("taust.png")\n' +
    '\n' +
    '# peategelane\n' +
    'tegelane_päkapikk = päkapikk.Päkapikk(laius // 2, kõrgus - 30, laius)\n' +
    'peategelane = pygame.sprite.Group()\n' +
    'peategelane.add(tegelane_päkapikk)\n' +
    '\n' +
    '# lumepallid\n' +
    'lumepallid = pygame.sprite.Group()\n' +
    'for i in range(8):\n' +
    '    lumepallid.add(lumepall.Lumepall(laius, kõrgus))\n' +
    '\n' +
    '# mängu tsükkel\n' +
    'käib = True\n' +
    'while käib:\n' +
    '    \n' +
    '    #kontrollime akna sulgemist\n' +
    '    for event in pygame.event.get():\n' +
    '        if event.type == pygame.QUIT:\n' +
    '            käib = False\n' +
    '    \n' +
    '    # joonistame tausta\n' +
    '    aken.blit(taustapilt, (0, 0))\n' +
    '    \n' +
    '    # uuendame ja joonistame sprite\'ide grupid\n' +
    '    peategelane.update()\n' +
    '    lumepallid.update()\n' +
    '    \n' +
    '    peategelane.draw(aken)\n' +
    '    lumepallid.draw(aken)\n' +
    '    \n' +
    '    # uuendame kasutaja jaoks vaadet\n' +
    '    pygame.display.flip()\n' +
    '\n' +
    'pygame.quit()\n';
  snowballUpdateInitCode = 'def __init__(self, akna_laius, akna_kõrgus):\n' +
    '        pygame.sprite.Sprite.__init__(self)\n' +
    '        self.image = random.choice(võimalikud_pildid)\n' +
    '        self.rect = self.image.get_rect()\n' +
    '        self.akna_laius = akna_laius\n' +
    '        self.akna_kõrgus = akna_kõrgus\n' +
    '        self.rect.x = random.randint(0, self.akna_laius)\n' +
    '        self.rect.y = random.randint(-150, -50)\n' +
    '        \n' +
    '    def update(self):\n' +
    '        self.rect.y += 5';
  snowballUpdateCode = 'import pygame\n' +
    'import random\n' +
    '\n' +
    'class Lumepall(pygame.sprite.Sprite):\n' +
    '    \n' +
    '    def __init__(self, akna_laius, akna_kõrgus):\n' +
    '        pygame.sprite.Sprite.__init__(self)\n' +
    '        võimalikud_pildid = ["lumepall_1.png", "lumepall_2.png", "lumepall_3.png", "lumepall_4.png", "lumepall_5.png"]\n' +
    '        self.image = random.choice(võimalikud_pildid)\n' +
    '        self.rect = self.image.get_rect()\n' +
    '        self.akna_laius = akna_laius\n' +
    '        self.akna_kõrgus = akna_kõrgus\n' +
    '        self.määra_asukoht()\n' +
    '    \n' +
    '    \n' +
    '    def määra_asukoht(self):\n' +
    '        self.rect.x = random.randint(0, self.akna_laius)\n' +
    '        self.rect.y = random.randint(-150, -50)\n' +
    '        self.kiirusy = random.randint(1, 8)\n' +
    '        self.kiirusx = random.randint(-3, 3)\n' +
    '        \n' +
    '    def update(self):\n' +
    '        self.rect.x += self.kiirusx\n' +
    '        self.rect.y += self.kiirusy\n' +
    '        if self.rect.top > self.akna_kõrgus or self.rect.right < 0 or self.rect.left > self.akna_laius:\n' +
    '            self.määra_asukoht()\n' +
    '        \n';
  elfLivesCode = '    def __init__(self, x, y, akna_laius, täiselud):\n' +
    '        pygame.sprite.Sprite.__init__(self)\n' +
    '        self.image = pygame.image.load("päkapikk.png")\n' +
    '        self.rect = self.image.get_rect()\n' +
    '        self.rect.centerx = x\n' +
    '        self.rect.bottom = y\n' +
    '        self.akna_laius = akna_laius\n' +
    '        self.täiselud = täiselud\n' +
    '        self.elud = täiselud';
  livesBarInitCode = 'def joonista_elud(aken, palju_täidetud):\n' +
    '    riba_laius = 250\n' +
    '    riba_kõrgus = 20\n' +
    '    x = 15\n' +
    '    y = 15';
  livesBarCode = 'def joonista_elud(aken, palju_täidetud):\n' +
    '    riba_laius = 250\n' +
    '    riba_kõrgus = 20\n' +
    '    x = 15\n' +
    '    y = 15\n' +
    '    täidise_laius = palju_täidetud * riba_laius\n' +
    '    piirjoon = pygame.Rect(x, y, riba_laius, riba_kõrgus)\n' +
    '    täidis = pygame.Rect(x, y, täidise_laius, riba_kõrgus)\n' +
    '    pygame.draw.rect(aken, (0, 255, 0), täidis)\n' +
    '    pygame.draw.rect(aken, (255, 255, 255), piirjoon, 2)';
  deductLivesCode = 'def vähenda_elusid(self):\n' +
    '    self.elud -= 1\n' +
    '    if self.elud < 0:\n' +
    '        self.elud = 0';
  deductLivesMainCode = '# uuendame ja joonistame sprite\'ide grupid\n' +
    'peategelane.update()\n' +
    'lumepallid.update()\n' +
    '\n' +
    '# jälgime kokkupõrkeid\n' +
    'kokkupuutuvad_lumepallid = pygame.sprite.spritecollide(tegelane_päkapikk, lumepallid, False)\n' +
    'for pall in kokkupuutuvad_lumepallid:\n' +
    '    pall.määra_asukoht()\n' +
    '    tegelane_päkapikk.vähenda_elusid()\n' +
    '    if tegelane_päkapikk.elud == 0:\n' +
    '        käib = False\n' +
    '    \n' +
    'peategelane.draw(aken)\n' +
    'lumepallid.draw(aken)';
  timeDifficultyCode = '# arvutame aja ja vajadusel lisame lumepalle ja kingitusi\n' +
    'aeg = round((pygame.time.get_ticks() - algusaeg) / 1000, 1) # aeg sekundites\n' +
    'if aeg % 5 == 0 and len(lumepallid) < 8 + aeg // 5:\n' +
    '    lumepallid.add(lumepall.Lumepall(laius, kõrgus))\n' +
    'if aeg % 10 == 0 and len(kingitused) < 8 + aeg // 10:\n' +
    '    kingitused.add(kingitus.Kingitus(laius, kõrgus))';
  gameInFunctionCode = 'import pygame\n' +
    'import päkapikk\n' +
    'import lumepall\n' +
    'import kingitus\n' +
    '\n' +
    'def joonista_elud(aken, palju_täidetud):\n' +
    '    riba_laius = 250\n' +
    '    riba_kõrgus = 20\n' +
    '    x = 15\n' +
    '    y = 15\n' +
    '    täidise_laius = palju_täidetud * riba_laius\n' +
    '    piirjoon = pygame.Rect(x, y, riba_laius, riba_kõrgus)\n' +
    '    täidis = pygame.Rect(x, y, täidise_laius, riba_kõrgus)\n' +
    '    pygame.draw.rect(aken, (0, 255, 0), täidis)\n' +
    '    pygame.draw.rect(aken, (255, 255, 255), piirjoon, 2)\n' +
    '    \n' +
    'def mäng(laius, kõrgus, aken, taustapilt):\n' +
    '    # font\n' +
    '    font = pygame.font.SysFont(\'Cooper Black\', 40)\n\n' +
    '    # peategelane\n' +
    '    tegelane_päkapikk = päkapikk.Päkapikk(laius // 2, kõrgus - 30, laius, 10)\n' +
    '    peategelane = pygame.sprite.Group()\n' +
    '    peategelane.add(tegelane_päkapikk)\n' +
    '\n' +
    '    # lumepallid ja kingitused\n' +
    '    lumepallid = pygame.sprite.Group()\n' +
    '    kingitused = pygame.sprite.Group()\n' +
    '    for i in range(8):\n' +
    '        lumepallid.add(lumepall.Lumepall(laius, kõrgus))\n' +
    '        kingitused.add(kingitus.Kingitus(laius, kõrgus))\n' +
    '\n' +
    '    algusaeg = pygame.time.get_ticks()  # mängu algusaeg\n' +
    '\n' +
    '    # mängu tsükkel\n' +
    '    while True:    \n' +
    '        #kontrollime akna sulgemist\n' +
    '        for event in pygame.event.get():\n' +
    '            if event.type == pygame.QUIT:\n' +
    '                return None\n' +
    '        \n' +
    '        # uuendame sprite\'ide grupid\n' +
    '        peategelane.update()\n' +
    '        lumepallid.update()\n' +
    '        kingitused.update()\n' +
    '        \n' +
    '        # jälgime kokkupõrkeid\n' +
    '        kokkupuutuvad_lumepallid = pygame.sprite.spritecollide(tegelane_päkapikk, lumepallid, False)\n' +
    '        for pall in kokkupuutuvad_lumepallid:\n' +
    '            pall.määra_asukoht()\n' +
    '            tegelane_päkapikk.vähenda_elusid()\n' +
    '                \n' +
    '        kokkupuutuvad_kingitused = pygame.sprite.spritecollide(tegelane_päkapikk, kingitused, False)\n' +
    '        for kink in kokkupuutuvad_kingitused:\n' +
    '            kink.määra_asukoht()\n' +
    '            tegelane_päkapikk.suurenda_elusid()\n' +
    '            \n' +
    '        # arvutame aja ja vajadusel lisame lumepalle ja kingitusi\n' +
    '        aeg = round((pygame.time.get_ticks() - algusaeg) / 1000, 1) # aeg sekundites\n' +
    '        if aeg % 5 == 0 and len(lumepallid) < 8 + aeg // 5:\n' +
    '            lumepallid.add(lumepall.Lumepall(laius, kõrgus))\n' +
    '        if aeg % 10 == 0 and len(kingitused) < 8 + aeg // 10:\n' +
    '            kingitused.add(kingitus.Kingitus(laius, kõrgus))\n' +
    '            \n' +
    '        if tegelane_päkapikk.elud == 0:\n' +
    '            return aeg\n' +
    '\n' +
    '        # joonistame tausta\n' +
    '        aken.blit(taustapilt, (0, 0))\n' +
    '            \n' +
    '        peategelane.draw(aken)\n' +
    '        lumepallid.draw(aken)\n' +
    '        kingitused.draw(aken)\n' +
    '        \n' +
    '        # elud ja aeg\n' +
    '        joonista_elud(aken, tegelane_päkapikk.elud / tegelane_päkapikk.täiselud)\n' +
    '        aken.blit(font.render(str(aeg), True, (255, 255, 255)), (300, 10))\n' +
    '        \n' +
    '        # uuendame kasutaja jaoks vaadet\n' +
    '        pygame.display.flip()\n' +
    '        \n' +
    'pygame.init()\n' +
    '\n' +
    '# akna loomine\n' +
    'laius = 1262 # laius ja pikkus on pikslites\n' +
    'kõrgus = 845\n' +
    'aken = pygame.display.set_mode((laius, kõrgus))\n' +
    'pygame.display.set_caption("Jõulumäng")\n' +
    '\n' +
    '# taustapilt\n' +
    'taustapilt = pygame.image.load("taust.png")\n' +
    '\n' +
    'tulemus = mäng(laius, kõrgus, aken, taustapilt)\n' +
    '\n' +
    'pygame.quit()\n';

  endScreenInitialCode = 'def lõpuaken(aken, taustapilt, tulemus):\n' +
    '    # fondid\n' +
    '    suur_font = pygame.font.SysFont(\'Cooper Black\', 120)\n' +
    '    väike_font = pygame.font.SysFont(\'Cooper Black\', 80)\n' +
    '    \n' +
    '    punane = (195, 20, 20)\n' +
    '    \n' +
    '    mäng_läbi = suur_font.render("MÄNG LÄBI", True, punane)\n' +
    '    saadud_tulemus = väike_font.render("Tulemus: " + str(tulemus), True, punane)\n' +
    '    \n' +
    '    while True:\n' +
    '        for event in pygame.event.get():\n' +
    '            if event.type == pygame.QUIT:\n' +
    '                return False\n' +
    '        aken.blit(taustapilt, (0, 0))\n' +
    '        aken.blit(mäng_läbi, (260, 200))\n' +
    '        aken.blit(saadud_tulemus, (340, 440))\n' +
    '\n' +
    '        pygame.display.flip()';

  playAgainCode = 'roheline = (50, 150, 0)\n' +
    'mängi_uuesti_asukoht = (360, 600)\n' +
    'mängi_uuesti = väike_font.render("Mängi uuesti", True, roheline)';
  playAgainMouseClickCode = 'hiire_asukoht = pygame.mouse.get_pos()\n' +
    'for event in pygame.event.get():\n' +
    '    if event.type == pygame.QUIT:\n' +
    '        return False\n' +
    '    if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1 and mängi_uuesti_rect.collidepoint(hiire_asukoht):\n' +
    '        return True';
  mainMethodCode = 'tulemus = mäng(laius, kõrgus, aken, taustapilt)\n' +
    'while tulemus != None:\n' +
    '    uus_mäng = lõpuaken(aken, taustapilt, tulemus)\n' +
    '    if uus_mäng:\n' +
    '        tulemus = mäng(laius, kõrgus, aken, taustapilt)\n' +
    '    else:\n' +
    '        tulemus = None';
  endScreenWithPlayAgainCode = 'def lõpuaken(aken, taustapilt, tulemus):\n' +
    '    # fondid\n' +
    '    suur_font = pygame.font.SysFont(\'Cooper Black\', 120)\n' +
    '    väike_font = pygame.font.SysFont(\'Cooper Black\', 80)\n' +
    '    \n' +
    '    punane = (195, 20, 20)\n' +
    '    roheline = (50, 150, 0)\n' +
    '    tumeroheline = (30, 90, 0)\n' +
    '    \n' +
    '    mäng_läbi = suur_font.render("MÄNG LÄBI", True, punane)\n' +
    '    saadud_tulemus = väike_font.render("Tulemus: " + str(tulemus), True, punane)\n' +
    '    \n' +
    '    # uuesti mängimise tekst, peale liikudes muudab värvi\n' +
    '    mängi_uuesti_asukoht = (360, 600)\n' +
    '    mängi_uuesti_roheline = väike_font.render("Mängi uuesti", True, roheline)\n' +
    '    mängi_uuesti_tumeroheline = väike_font.render("Mängi uuesti", True, tumeroheline)\n' +
    '    \n' +
    '    # vajalik, et kontrollida, kas hiir on "Mängi uuesti" peal\n' +
    '    mängi_uuesti_rect = mängi_uuesti_roheline.get_rect()\n' +
    '    mängi_uuesti_rect.x = mängi_uuesti_asukoht[0]\n' +
    '    mängi_uuesti_rect.y = mängi_uuesti_asukoht[1]\n' +
    '    \n' +
    '    while True:\n' +
    '        hiire_asukoht = pygame.mouse.get_pos()\n' +
    '        for event in pygame.event.get():\n' +
    '            if event.type == pygame.QUIT:\n' +
    '                return False\n' +
    '            if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1 and mängi_uuesti_rect.collidepoint(hiire_asukoht):\n' +
    '                return True\n' +
    '        aken.blit(taustapilt, (0, 0))\n' +
    '        aken.blit(mäng_läbi, (260, 200))\n' +
    '        aken.blit(saadud_tulemus, (340, 440))\n' +
    '\n' +
    '        if mängi_uuesti_rect.collidepoint(hiire_asukoht):\n' +
    '            aken.blit(mängi_uuesti_tumeroheline, mängi_uuesti_asukoht)\n' +
    '        else:\n' +
    '            aken.blit(mängi_uuesti_roheline, mängi_uuesti_asukoht)\n' +
    '        pygame.display.flip()';

  soundLoadCode = 'kokkupõrke_heli = pygame.mixer.Sound("vuhin.mp3")';
  soundUseCode = 'kokkupuutuvad_lumepallid = pygame.sprite.spritecollide(tegelane_päkapikk, lumepallid, False)\n' +
    'for pall in kokkupuutuvad_lumepallid:\n' +
    '    pall.määra_asukoht()\n' +
    '    tegelane_päkapikk.vähenda_elusid()\n' +
    '    kokkupõrke_heli.play()\n' +
    '                \n' +
    'kokkupuutuvad_kingitused = pygame.sprite.spritecollide(tegelane_päkapikk, kingitused, False)\n' +
    'for kink in kokkupuutuvad_kingitused:\n' +
    '    kink.määra_asukoht()\n' +
    '    tegelane_päkapikk.suurenda_elusid()\n' +
    '    kokkupõrke_heli.play()';
  musicCode = 'heli = pygame.mixer.music.load("vuhin.mp3")\n' +
    'pygame.mixer.music.play(-1)';

}
