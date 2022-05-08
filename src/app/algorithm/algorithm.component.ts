import {Component, OnInit} from '@angular/core';
import {ReorderTestQuestion} from "../models/reorder-test-question.model";
import {ReorderTestItem} from "../models/reorder-test-item.model";

@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.scss']
})
export class AlgorithmComponent implements OnInit {

  teaAnswerIsShown = false;
  pancakeAnswerIsShown = false;

  constructor() { }

  ngOnInit() {}

  markTestQuestion = new ReorderTestQuestion('Proovi järjestada Marki päevased tegevused.',
    [new ReorderTestItem('Ärkab üles', 'Kas ärkamine ei peaks olema tegevustest esimene?'),
      new ReorderTestItem('Käib pesus', 'Mark käis pesus kohe peale ärkamist.'),
      new ReorderTestItem('Paneb riidesse', 'Riidesse pani Mark peale pesus käimist.'),
      new ReorderTestItem('Sööb hommikust','Mida tegi Mark enne kooli minekut ja peale riietumist?'),
      new ReorderTestItem('Jalutab kooli','Enne kooli jalutamist sõi Mark hommikul kõhu täis.'),
      new ReorderTestItem('On koolis','Selleks, et olla koolis, pidi Mark kooli minema.'),
      new ReorderTestItem('Jalutab trenni','Trenni läheb Mark pärast kooli.'),
      new ReorderTestItem('On trennis','Selleks, et olla trennis, pidi Mark trenni minema.'),
      new ReorderTestItem('Sõidab isaga trennist koju','Mark sõidab trennist koju peale trennis olemist.'),
      new ReorderTestItem('Sööb õhtust','Õhtusöök oli Markil koos kogu perega kui nad isaga trennist koju jõudsid.'),
      new ReorderTestItem('Teeb koduseid ülesandeid','Koduseid ülesandeid teeb Mark siis kui õhtusöök on söödud.'),
      new ReorderTestItem('Vaatab telekat ja mängib arvutis','Enne magamaminekut meeldib Markile natuke lõõgastuda.'),
      new ReorderTestItem('Läheb magama','Kas magama minek ei peaks olema päeva viimane tegevus?')],
    'Jah, see on tõesti Marki tegevuste õige järjekord!');

}
