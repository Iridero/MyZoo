import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Habitat } from '../../models/habitat.model';

@Component({
  selector: 'app-habitat-list',
  templateUrl: './habitat-list.component.html',
  styleUrls: ['./habitat-list.component.css']
})
export class HabitatListComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService) { 
    this.habitats=this.localStorageService.getHabitats();
  }

  habitats: Habitat[];

  ngOnInit() {
    
  }

}
