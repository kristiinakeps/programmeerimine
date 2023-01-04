import { Component, OnInit } from '@angular/core';
import {TestQuestion} from "../../models/test-question.model";
import {TestAnswer} from "../../models/test-answer.model";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  programmingLanguagesTest!: TestQuestion;
  programmingLanguagesTests: TestQuestion[];

  readonly machineCodeFalseAnswer = new TestAnswer('Masinkood', false, 'Siin pole tegemist masinkoodiga. Masinkood on inimesele praktiliselt loetamatu. Proovi uuesti!')
  readonly assemblyFalseAnswer = new TestAnswer('Assembler', false, 'See kood on ühes teises keeles. Assembleris on võrreldes masinkoodiga juba inimesele natuke loetavamad käsud, kuid sellest on ikka üsna keeruline aru saada. Proovi uuesti!')
  readonly cFalseAnswer = new TestAnswer('C', false, 'See pole paraku C. C ja C++ on väga sarnased ning nad tunneb ära näiteks #include võtmesõna järgi koodi alguses. Proovi uuesti!')
  readonly cPlusPlusFalseAnswer = new TestAnswer('C++', false, 'See pole paraku C++. C ja C++ on väga sarnased ning nad tunneb ära näiteks #include võtmesõna järgi koodi alguses. Proovi uuesti!')
  readonly javaFalseAnswer = new TestAnswer('Java', false, 'Siin pole tegemist Javaga. Proovi mõnda teist varianti!')
  readonly javaScriptFalseAnswer = new TestAnswer('JavaScript', false, 'See pole JavaScript. JavaScriptis saab ekraanile väljastamist teha ühe reaga. Proovi uuesti!')
  readonly pythonFalseAnswer = new TestAnswer('Python', false, 'See pole paraku Python. Python on siin välja toodud keeltest kõige lihtsam. Proovi uuesti!')

  readonly machineCodeTrueAnswer = new TestAnswer('Masinkood', true, 'Jah! See meie jaoks loetamatu kood on tõesti arvuti jaoks loetav masinkood.')
  readonly assemblyTrueAnswer = new TestAnswer('Assembler', true, 'Õige! See meie jaoks üsna keeruline keel on assembler.')
  readonly cTrueAnswer = new TestAnswer('C', true, 'Jah! See on tõesti laialdaselt levinud ja populaarne keel C.')
  readonly cPlusPlusTrueAnswer = new TestAnswer('C++', true, 'Õige! See on C keele järeltulija C++.')
  readonly javaTrueAnswer = new TestAnswer('Java', true, 'Jah! See kood on kirjutatud Javas.')
  readonly javaScriptTrueAnswer = new TestAnswer('JavaScript', true, 'Õige! JavaScriptis saab tõesti nii "Tere!" väljastada.')
  readonly pythonTrueAnswer = new TestAnswer('Python', true, 'Tõepoolest! Siin on tegemist Pythoniga, millega hakkame edaspidi lähedamalt tutvust tegema.')

  readonly machineCodeText = '401126\t55\n' +
    '401127\t48 89e5\n' +
    '40112a\tbf 04 20 40 00\n' +
    '40112f\tb8 00 00 00 00\n' +
    '401134\te8 f7 fe ff ff\n' +
    '401139\tb8 00 00 00 00\n' +
    '40113e\t5d\n' +
    '40113f\tc3\n' +
    '...\n' +
    '402004\t54 65 72 65 21 10 00';
  readonly assemblyText = '.LC0:\n' +
    '\t.string "Tere!"\n' +
    'main:\n' +
    '\tpush rbp\n' +
    '\tmov rbp, rsp\n' +
    '\tmov edi, OFFSET FLAT:.LC0\n' +
    '\tmov eax, 0\n' +
    '\tcall printf\n' +
    '\tmov eax, 0\n' +
    '\tpop rbp\n' +
    '\tret';
  readonly cText = '#include <stdio.h>\n' +
    '\n' +
    'int main(void)\n' +
    '{\n' +
    '\tprintf("Tere!\\n");\n' +
    '}';
  readonly cPlusPlusText = '#include <iostream>\n' +
    '\n' +
    'int main()\n' +
    '{\n' +
    '\tstd::cout << "Tere!\\n";\n' +
    '\treturn 0;\n' +
    '}';
  readonly javaText = 'class Tere {\n' +
    '\tpublic static void main(String[] args) {\n' +
    '\t\tSystem.out.println("Tere!");\n' +
    '\t}\n' +
    '}';
  readonly javaScriptText = 'console.log("Tere!");';
  readonly pythonText = 'print("Tere!")';

  constructor() {
    const question = 'Kas mäletad, millise programmeerimiskeele koodijupp see on?';

    const machineCodeQuestion = new TestQuestion(question, this.machineCodeText,
      [this.machineCodeTrueAnswer, this.assemblyFalseAnswer, this.cFalseAnswer, this.cPlusPlusFalseAnswer, this.javaFalseAnswer, this.javaScriptFalseAnswer, this.pythonFalseAnswer]);
    const assemblyQuestion = new TestQuestion(question, this.assemblyText,
      [this.machineCodeFalseAnswer, this.assemblyTrueAnswer, this.cFalseAnswer, this.cPlusPlusFalseAnswer,
        this.javaFalseAnswer, this.javaScriptFalseAnswer, this.pythonFalseAnswer]);
    const cQuestion = new TestQuestion(question, this.cText, [this.machineCodeFalseAnswer, this.assemblyFalseAnswer, this.cTrueAnswer, this.cPlusPlusFalseAnswer,
      this.javaFalseAnswer, this.javaScriptFalseAnswer, this.pythonFalseAnswer]);
    const cPlusPlusQuestion = new TestQuestion(question, this.cPlusPlusText,
      [this.machineCodeFalseAnswer, this.assemblyFalseAnswer, this.cFalseAnswer, this.cPlusPlusTrueAnswer,
        this.javaFalseAnswer, this.javaScriptFalseAnswer, this.pythonFalseAnswer]);
    const javaQuestion = new TestQuestion(question, this.javaText,
      [this.machineCodeFalseAnswer, this.assemblyFalseAnswer, this.cFalseAnswer, this.cPlusPlusFalseAnswer,
        this.javaTrueAnswer, this.javaScriptFalseAnswer, this.pythonFalseAnswer]);
    const javaScriptQuestion = new TestQuestion(question, this.javaScriptText,
      [this.machineCodeFalseAnswer, this.assemblyFalseAnswer, this.cFalseAnswer, this.cPlusPlusFalseAnswer,
        this.javaFalseAnswer, this.javaScriptTrueAnswer, this.pythonFalseAnswer]);
    const pythonQuestion = new TestQuestion(question, this.pythonText,
      [this.machineCodeFalseAnswer, this.assemblyFalseAnswer, this.cFalseAnswer, this.cPlusPlusFalseAnswer,
        this.javaFalseAnswer, this.javaScriptFalseAnswer, this.pythonTrueAnswer]);

    this.programmingLanguagesTests = [machineCodeQuestion, assemblyQuestion, cQuestion, cPlusPlusQuestion, javaQuestion,
      javaScriptQuestion, pythonQuestion];
  }

  ngOnInit(): void {
    this.selectProgrammingLanguagesTest();
  }

  selectProgrammingLanguagesTest(): void {
    const filteredQuestions = this.programmingLanguagesTests.filter(el =>
      !this.programmingLanguagesTest || el.text != this.programmingLanguagesTest.text);
    this.programmingLanguagesTest = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
  }

}
