import { Component, OnInit } from '@angular/core';
import { Habitat } from '../../models/habitat.model';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-add-habitat',
  templateUrl: './add-habitat.component.html',
  styleUrls: ['./add-habitat.component.css']
})
export class AddHabitatComponent implements OnInit {

  newHabitat:Habitat = new Habitat(0,'','');

  constructor(private localStorageService:LocalStorageService) { }

  addHabitat(){
    this.localStorageService.saveHabitat(this.newHabitat);
    this.newHabitat = new Habitat(0,'','')
  }

  ngOnInit() {
  }

}
