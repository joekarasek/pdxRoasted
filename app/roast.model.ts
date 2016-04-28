import { Vendor } from './vendor.model';

export class Roast {
  constructor(
    public name: string,
    public vendor: Vendor,
    public process: string,
    public flavors: string[],
    public varietal: string,
    public species: string,
    public url: string,
    public img: string
  ) {}
}
