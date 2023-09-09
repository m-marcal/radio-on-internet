import { Injectable } from '@angular/core';
import { Radio } from '../model/radio.model';

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  private readonly STORAGE_KEY = 'radios';

  constructor() {}

  private getRadiosFromStorage(): Radio[] {
    const radiosJson = localStorage.getItem(this.STORAGE_KEY);
    return radiosJson ? JSON.parse(radiosJson) : [];
  }

  private saveRadiosToStorage(radios: Radio[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(radios));
  }

  getAllRadios(): Radio[] {
    return this.getRadiosFromStorage();
  }

  getRadioById(id: number): Radio | undefined {
    const radios = this.getRadiosFromStorage();
    return radios.find(radio => radio.id === id);
  }

  addRadio(radio: Radio): void {
    const radios = this.getRadiosFromStorage();
    
    const lastId = radios.length > 0 ? radios[radios.length - 1].id : 0;
    radio.id = lastId + 1;

    radios.push(radio);
    this.saveRadiosToStorage(radios);
  }

  editRadio(updatedRadio: Radio): void {
    let radios = this.getRadiosFromStorage();
    const index = radios.findIndex(radio => radio.id === updatedRadio.id);
    if (index !== -1) {
      radios[index] = updatedRadio;
      this.saveRadiosToStorage(radios);
    }
  }
}
