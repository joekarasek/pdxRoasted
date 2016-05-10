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
    console.log("isPaletteEmpty called on Palette Service!");
    var answer;
    this.palette.length === 0 ? answer = true : answer = false;
    console.log("The answer is: "+answer);
    return answer;
  }

  updatePalette(palette) {
    console.log("updatePalette on Palette Service called!")
    this.palette = palette;
  }

}
