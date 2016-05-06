import { Injectable } from 'angular2/core';


@Injectable()
export class PaletteService {
  palette: string[];

  constructor() {
    this.palette = [];
  }

  getPalette() {
    return this.palette;
  }

  isPaletteEmpty() {
    this.palette.length === 0 ? true : false;
  }

  updatePalette(palette) {
    this.palette = palette;
  }

}
