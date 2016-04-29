import { Vendor } from './vendor.model';

export class Roast {
  constructor(
    public name: string,
    public vendor: Vendor,
    public flavors: string[],
    public description: string,
    public img: string,
    public url: string,
    public process?: string,
    public varietal?: string,
    public species?: string) {

    }
}
