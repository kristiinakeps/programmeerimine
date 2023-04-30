import {Component} from '@angular/core';
import {ExerciseHint} from "../../models/exercise-hint.model";

@Component({
  selector: 'app-gui',
  templateUrl: './gui.component.html',
  styleUrls: ['./gui.component.scss']
})
export class GuiComponent {

  emptyCode = 'from PyQt6.QtWidgets import QApplication, QMainWindow\n' +
    '\n' +
    'rakendus = QApplication([])\n' +
    '\n' +
    'aken = QMainWindow()\n' +
    'aken.setWindowTitle("Jalkameeskond")\n' +
    '\n' +
    'aken.show() \n' +
    '\n' +
    'rakendus.exec()';
  labelCode = 'from PyQt6.QtWidgets import QApplication, QMainWindow, QLabel\n' +
    '\n' +
    'rakendus = QApplication([])\n' +
    '\n' +
    'aken = QMainWindow()\n' +
    'aken.setWindowTitle("Jalkameeskond")\n' +
    '\n' +
    'silt = QLabel("Rakendus")\n' +
    'aken.setCentralWidget(silt)\n' +
    '\n' +
    'aken.show() \n' +
    '\n' +
    'rakendus.exec()\n';
  layoutSetCentralCode = 'paigutus = QHBoxLayout()\n' +
    '\n' +
    'vidin = QWidget()\n' +
    'vidin.setLayout(paigutus)\n' +
    '\n' +
    'aken.setCentralWidget(vidin)';
  layoutWidgetsCode = 'esimene = QLabel("Esimene")\n' +
    'teine = QLabel("Teine")\n' +
    'kolmas = QLabel("Kolmas")';
  formWidgetsCode = 'from PyQt6.QtWidgets import QApplication, QMainWindow, QCheckBox, QComboBox, QDateEdit, QLineEdit\n' +
    '\n' +
    'rakendus = QApplication([])\n' +
    '\n' +
    'aken = QMainWindow()\n' +
    'aken.setWindowTitle("Jalkameeskond")\n' +
    '\n' +
    'nimi = QLineEdit()\n' +
    '\n' +
    'sünnipäev = QDateEdit()\n' +
    '\n' +
    'sugu = QComboBox()\n' +
    'sugu.addItems(["poiss", "tüdruk"])\n' +
    '\n' +
    'põhimängija = QCheckBox()\n' +
    '\n' +
    'aken.show() \n' +
    '\n' +
    'rakendus.exec()\n';
  formLayoutCode = 'from PyQt6.QtWidgets import QApplication, QMainWindow, QCheckBox, QComboBox, QDateEdit, QLineEdit, QLabel, QGridLayout, QWidget\n' +
    '\n' +
    'rakendus = QApplication([])\n' +
    '\n' +
    'aken = QMainWindow()\n' +
    'aken.setWindowTitle("Jalkameeskond")\n' +
    '\n' +
    'nimi = QLineEdit()\n' +
    'sünnipäev = QDateEdit()\n' +
    '\n' +
    'sugu = QComboBox()\n' +
    'sugu.addItems(["poiss", "tüdruk"])\n' +
    '\n' +
    'põhimängija = QCheckBox()\n' +
    '\n' +
    'ruudustik = QGridLayout()\n' +
    '\n' +
    'ruudustik.addWidget(QLabel("Nimi"), 0, 0)\n' +
    'ruudustik.addWidget(nimi, 0, 1)\n' +
    '\n' +
    'ruudustik.addWidget(QLabel("Sünnipäev"), 1, 0)\n' +
    'ruudustik.addWidget(sünnipäev, 1, 1)\n' +
    '\n' +
    'ruudustik.addWidget(QLabel("Sugu"), 2, 0)\n' +
    'ruudustik.addWidget(sugu, 2, 1)\n' +
    '\n' +
    'ruudustik.addWidget(QLabel("Põhimängija"), 3, 0)\n' +
    'ruudustik.addWidget(põhimängija, 3, 1)\n' +
    '\n' +
    'vidin = QWidget()\n' +
    'vidin.setLayout(ruudustik)\n' +
    '\n' +
    'aken.setCentralWidget(vidin)\n' +
    '\n' +
    'aken.show() \n' +
    '\n' +
    'rakendus.exec()';
  formClassCode = 'class Vorm(QWidget):\n' +
    '    def __init__(self):\n' +
    '        super().__init__()\n' +
    '        self.ruudustik = QGridLayout()\n' +
    '\n' +
    '        self.nimi = QLineEdit()\n' +
    '        \n' +
    '        self.sünnipäev = QDateEdit()\n' +
    '        \n' +
    '        self.sugu = QComboBox()\n' +
    '        self.sugu.addItems(["poiss", "tüdruk"])\n' +
    '\n' +
    '        self.põhimängija = QCheckBox()\n' +
    '\n' +
    '        self.ruudustik.addWidget(QLabel("Nimi"), 0, 0)\n' +
    '        self.ruudustik.addWidget(self.nimi, 0, 1)\n' +
    '\n' +
    '        self.ruudustik.addWidget(QLabel("Sünnipäev"), 1, 0)\n' +
    '        self.ruudustik.addWidget(self.sünnipäev, 1, 1)\n' +
    '\n' +
    '        self.ruudustik.addWidget(QLabel("Sugu"), 2, 0)\n' +
    '        self.ruudustik.addWidget(self.sugu, 2, 1)\n' +
    '\n' +
    '        self.ruudustik.addWidget(QLabel("Põhimängija"), 3, 0)\n' +
    '        self.ruudustik.addWidget(self.põhimängija, 3, 1)\n' +
    '        \n' +
    '        self.setLayout(self.ruudustik)';
  formMainCode = 'rakendus = QApplication([])\n' +
    '\n' +
    'aken = QMainWindow()\n' +
    'aken.setWindowTitle("Jalkameeskond")\n' +
    '\n' +
    'vorm = Vorm()\n' +
    '\n' +
    'aken.setCentralWidget(vorm)\n' +
    '\n' +
    'aken.show() \n' +
    '\n' +
    'rakendus.exec()';
  playerHints = [new ExerciseHint('Alustame klassi konstruktorist. See peaks argumentideks võtma nime, sünnipäeva, soo ja tõeväärtuse, mis näitab, kas tegemist on ' +
    'põhimängijaga. Need väärtused tuleb konstruktoris vastavatele isendiväljadele omistada.', null),
  new ExerciseHint('Konstruktor võiks olla näiteks selline:', 'class Mängija:\n' +
    '    def __init__(self, nimi, sünnipäev, sugu, põhimängija):\n' +
    '        self.nimi = nimi\n' +
    '        self.sünnipäev = sünnipäev\n' +
    '        self.sugu = sugu\n' +
    '        self.põhimängija = põhimängija'),
  new ExerciseHint('Teine samm on lisada meetod <span class="fst-italic">__str__</span>. Tõeväärtuse asemel võiksime tagastatavasse sõnesse lisada ' +
    'sõnadega "põhimängija" või "varumängija", olenevalt sellest, kummaga on tegu.', null),
  new ExerciseHint('Mängija tüübi saame määrata lihtsa tingimuslause abil.', 'def __str__(self):\n' +
    '    liik = "põhimängija"\n' +
    '    if not self.põhimängija:\n' +
    '        liik = "varumängija"\n' +
    '    return self.nimi + " - " + liik + ", " + self.sugu + ", sündinud " + self.sünnipäev'),
  new ExerciseHint('Ja ongi kogu klass koos:', 'class Mängija:\n' +
    '    def __init__(self, nimi, sünnipäev, sugu, põhimängija):\n' +
    '        self.nimi = nimi\n' +
    '        self.sünnipäev = sünnipäev\n' +
    '        self.sugu = sugu\n' +
    '        self.põhimängija = põhimängija\n' +
    '    \n' +
    '    def __str__(self):\n' +
    '        liik = "põhimängija"\n' +
    '        if not self.põhimängija:\n' +
    '            liik = "varumängija"\n' +
    '        return self.nimi + " - " + liik + ", " + self.sugu + ", sündinud " + self.sünnipäev')];
  mainWindowInitCode = 'class Põhiaken(QMainWindow):\n' +
    '    def __init__(self):\n' +
    '        super().__init__()\n' +
    '        self.setWindowTitle("Jalkameeskond")\n' +
    '        self.paigutus = QVBoxLayout()\n' +
    '        \n' +
    '        self.vorm = Vorm()\n' +
    '        self.paigutus.addWidget(self.vorm)\n' +
    '        \n' +
    '        self.vidin = QWidget()\n' +
    '        self.vidin.setLayout(self.paigutus)\n' +
    '        self.setCentralWidget(self.vidin)\n' +
    '\n' +
    'rakendus = QApplication([])\n' +
    'aken = Põhiaken()\n' +
    'aken.show() \n' +
    'rakendus.exec()';
  buttonCode = 'self.lisa_nupp = QPushButton()\n' +
    'self.lisa_nupp.setText("Lisa mängija")\n' +
    'self.paigutus.addWidget(self.lisa_nupp)';
  dateCode = 'self.vorm.sünnipäev.date().toString("dd.MM.yyyy")';
  addPlayerCode = 'def lisa_liige(self):\n' +
    '    mängija = Mängija(self.vorm.nimi.text(), self.vorm.sünnipäev.date().toString("dd.MM.yyyy"), self.vorm.sugu.currentText(), self.vorm.põhimängija.isChecked())\n' +
    '    self.mängijad.append(mängija)';
  saveButtonHints = [new ExerciseHint('Kõigepealt võime uue nupu vidina luua ja ära paigutada. Selleks loome uue <span class="fst-italic">QPushButton</span> ' +
    'isendi.', null), new ExerciseHint('Salvestame selle nupu ka oma Põhiakna isendiväljale.', 'self.salvesta_nupp = QPushButton()'),
  new ExerciseHint('Nupule oleks vaja lisada ka tekst. Seda sai teha meetodi <span class="fst-italic">setText</sapn> abil.', null),
  new ExerciseHint('Nupu tekstiks võime panna näiteks "Salvesta".', 'self.salvesta_nupp.setText("Salvesta")'),
  new ExerciseHint('Võime kohe siduda nupuvajutuse ka uue meetodiga. Näiteks meetodiga nimega <span class="fst-italic">salvesta</span>. ' +
    'Praegu meil seda meetodit veel pole, aga kohe lisame.', null),
  new ExerciseHint('Nupuvajutuse sidumist meetodiga saab teha nii:', 'self.salvesta_nupp.clicked.connect(self.salvesta)'),
  new ExerciseHint('Lõpuks paigutame oma nupu ära ka. Selleks lisame ta lihtsalt oma <span class="fst-italic">QVBoxLayout</span> paigutusse.', null),
  new ExerciseHint('Selleks on <span class="fst-italic">QVBoxLayout</span>\'il meetod <span class="fst-italic">addWidget</span>.',
   'self.paigutus.addWidget(self.salvesta_nupp)'),
  new ExerciseHint('Nüüd jääb üle vaid see salvestamise meetod luua. Selles meetodis tahame kirjutada kõik lisatud mängijad faili. Alustame sellest, ' +
    'et avame faili kirjutamiseks. Faili nime võid ise valida.', null),
  new ExerciseHint('Siin valime faili nimeks <span class="fst-italic">mängijad.txt</span>.', 'def salvesta(self):\n' +
    '    fail = open("mängijad.txt", "w")\n' +
    '    fail.close()'), new ExerciseHint('Lisatud mängijad on meil kõik isendiväljal <span class="fst-italic">mängijad</span>. Seda ' +
      'järjendit saame tsüklis läbi käia ja sealt iga mängija faili kirjutada.', null),
  new ExerciseHint('Ei maksa unustada, et peame iga rea lõppu käsitsi reavahetussümboli lisama.', 'for mängija in self.mängijad: # mängijad isendiväljalt\n' +
    '    fail.write(mängija.__str__() + "\\n")'), new ExerciseHint('Pärast mängijate salvestamist võime tegelikult ka kogu oma programmiakna ' +
      'kinni panna. Selleks on klassis <span class="fst-italic">QMainWindow</span> olemas meetod <span class="fst-italic">close</span>. Kuna meie ' +
      'Põhiaken klass on selle klassi alamklass, siis saame siin ka seda meetodit kasutada:', 'self.close()'),
  new ExerciseHint('Kogu salvestamise meetod on lõpuks selline:', 'def salvesta(self):\n' +
    '    fail = open("mängijad.txt", "w")\n' +
    '    for mängija in self.mängijad:\n' +
    '        fail.write(mängija.__str__() + "\\n")\n' +
    '    fail.close()\n' +
    '    self.close()')];
  mainWindowStyle = 'rakendus.setStyleSheet("""\n' +
    '    QMainWindow {\n' +
    '        background-color: "#afde8e";\n' +
    '    }\n' +
    '""")';
  buttonsStyle = 'rakendus.setStyleSheet("""\n' +
    '    QMainWindow {\n' +
    '        background-color: "#afde8e";\n' +
    '    }\n' +
    '    QPushButton {\n' +
    '        background: "#41731e";\n' +
    '        color: "white";\n' +
    '    }\n' +
    '""")';
  styleFull = 'rakendus.setStyleSheet("""\n' +
    '    QMainWindow {\n' +
    '        background-color: "#afde8e";\n' +
    '    }\n' +
    '    QPushButton {\n' +
    '        background: "#41731e";\n' +
    '        color: "white";\n' +
    '    }\n' +
    '    .liige {\n' +
    '        background: "white";\n' +
    '        padding: 5px;\n' +
    '        border: 1px solid "#41731e";\n' +
    '    }\n' +
    '""")';
  styleAppliedCode = 'silt = QLabel(mängija.__str__())\n' +
    'silt.setProperty("class", "liige")\n' +
    'self.paigutus.addWidget(silt)';
  fullCode = 'from PyQt6.QtWidgets import QApplication, QMainWindow, QCheckBox, QComboBox, QDateEdit, QLabel, QLineEdit, QPushButton, QVBoxLayout, QGridLayout, QWidget\n' +
    '\n' +
    'class Mängija:\n' +
    '    def __init__(self, nimi, sünnipäev, sugu, põhimängija):\n' +
    '        self.nimi = nimi\n' +
    '        self.sünnipäev = sünnipäev\n' +
    '        self.sugu = sugu\n' +
    '        self.põhimängija = põhimängija\n' +
    '    \n' +
    '    def __str__(self):\n' +
    '        liik = "põhimängija"\n' +
    '        if not self.põhimängija:\n' +
    '            liik = "varumängija"\n' +
    '        return self.nimi + " - " + liik + ", " + self.sugu + ", sündinud " + self.sünnipäev\n' +
    '    \n' +
    'class Põhiaken(QMainWindow):\n' +
    '    def __init__(self):\n' +
    '        super().__init__()\n' +
    '        self.setWindowTitle("Jalkameeskond")\n' +
    '        self.paigutus = QVBoxLayout()\n' +
    '        \n' +
    '        self.vorm = Vorm()\n' +
    '        self.paigutus.addWidget(self.vorm)\n' +
    '        \n' +
    '        self.lisa_nupp = QPushButton()\n' +
    '        self.lisa_nupp.setText("Lisa mängija")\n' +
    '        self.lisa_nupp.clicked.connect(self.lisa_liige)\n' +
    '        self.paigutus.addWidget(self.lisa_nupp)\n' +
    '\n' +
    '        self.salvesta_nupp = QPushButton()\n' +
    '        self.salvesta_nupp.setText("Salvesta")\n' +
    '        self.salvesta_nupp.clicked.connect(self.salvesta)\n' +
    '        self.paigutus.addWidget(self.salvesta_nupp)\n' +
    '         \n' +
    '        self.vidin = QWidget()\n' +
    '        self.vidin.setLayout(self.paigutus)\n' +
    '        self.setCentralWidget(self.vidin)\n' +
    '        \n' +
    '        \n' +
    '        self.mängijad = []\n' +
    '    \n' +
    '    def lisa_liige(self):\n' +
    '        mängija = Mängija(self.vorm.nimi.text(), self.vorm.sünnipäev.date().toString("dd.MM.yyyy"), self.vorm.sugu.currentText(), self.vorm.põhimängija.isChecked())\n' +
    '        self.mängijad.append(mängija)\n' +
    '        silt = QLabel(mängija.__str__())\n' +
    '        silt.setProperty("class", "liige")\n' +
    '        self.paigutus.addWidget(silt)\n' +
    '        \n' +
    '    def salvesta(self):\n' +
    '        fail = open("mängijad.txt", "w")\n' +
    '        for mängija in self.mängijad:\n' +
    '            fail.write(mängija.__str__() + "\\n")\n' +
    '        fail.close()\n' +
    '        self.close()\n' +
    '\n' +
    'class Vorm(QWidget):\n' +
    '    def __init__(self):\n' +
    '        super().__init__()\n' +
    '        self.ruudustik = QGridLayout()\n' +
    '\n' +
    '        self.nimi = QLineEdit()\n' +
    '        \n' +
    '        self.sünnipäev = QDateEdit()\n' +
    '        \n' +
    '        self.sugu = QComboBox()\n' +
    '        self.sugu.addItems(["poiss", "tüdruk"])\n' +
    '\n' +
    '        self.põhimängija = QCheckBox()\n' +
    '\n' +
    '        self.ruudustik.addWidget(QLabel("Nimi"), 0, 0)\n' +
    '        self.ruudustik.addWidget(self.nimi, 0, 1)\n' +
    '\n' +
    '        self.ruudustik.addWidget(QLabel("Sünnipäev"), 1, 0)\n' +
    '        self.ruudustik.addWidget(self.sünnipäev, 1, 1)\n' +
    '\n' +
    '        self.ruudustik.addWidget(QLabel("Sugu"), 2, 0)\n' +
    '        self.ruudustik.addWidget(self.sugu, 2, 1)\n' +
    '\n' +
    '        self.ruudustik.addWidget(QLabel("Põhimängija"), 3, 0)\n' +
    '        self.ruudustik.addWidget(self.põhimängija, 3, 1)\n' +
    '        \n' +
    '        self.setLayout(self.ruudustik)\n' +
    '    \n' +
    '\n' +
    'rakendus = QApplication([])\n' +
    'rakendus.setStyleSheet("""\n' +
    '    QMainWindow {\n' +
    '        background-color: "#afde8e";\n' +
    '    }\n' +
    '    QPushButton {\n' +
    '        background: "#41731e";\n' +
    '        color: "white";\n' +
    '    }\n' +
    '    .liige {\n' +
    '        background: "white";\n' +
    '        padding: 5px;\n' +
    '        border: 1px solid "#41731e";\n' +
    '    }\n' +
    '""")\n' +
    'aken = Põhiaken()\n' +
    'aken.show() \n' +
    'rakendus.exec()\n' +
    '\n';

}
