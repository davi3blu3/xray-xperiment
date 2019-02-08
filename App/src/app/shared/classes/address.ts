export class Address {
  city: string;
  country: string;
  county: string;
  createdBy: string;
  globalId: string;
  id: number;
  plusFour: number;
  postalCode: string;
  state: string;
  street1: string;
  street2: string;

  constructor(
    options: {
      city?: string;
      country?: string;
      county?: string;
      createdBy?: string;
      globalId?: string;
      id?: number;
      plusFour?: number;
      postalCode?: string;
      state?: string;
      street1?: string;
      street2?: string;
    } = {}
  ) {
    this.city = options.city || '';
    this.country = options.country || '';
    this.county = options.county || '';
    this.createdBy = options.createdBy || '';
    this.globalId = options.globalId || '';
    this.id = options.id || null;
    this.plusFour = options.plusFour || null;
    this.postalCode = options.postalCode || '';
    this.state = options.state || '';
    this.street1 = options.street1 || '';
    this.street2 = options.street2 || '';
  }
}
