import { Injectable } from '@angular/core';
import { Habitat } from '../models/habitat.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  saveHabitat(habitat: Habitat) {
    let habitats: Habitat[] = this.getHabitats();
    habitats.push(habitat);
    localStorage.setItem('habitats',JSON.stringify(habitats));
  }

  getHabitats() {
    const habitatsString = localStorage.getItem('habitats');
    if (!habitatsString) {
      return [];
    }
    return JSON.parse(habitatsString);
  }

  constructor() {}
}
