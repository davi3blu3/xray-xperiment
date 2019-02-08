import { Address } from '../../shared/classes/address';

export class Possessor {
  billingAddress: Address;
  billingLocationId: number;
  billingLocationVersion: number;
  businessPhone: string;
  createdBy: string;
  email: string;
  fax: string;
  globalId: string;
  id: string;
  locationId: number;
  locationVersion: number;
  medOther: string;
  medSpecialty: string;
  name: string;
  physicalAddress: Address;
  tdecId: number;
  tdecVersion: number;

  constructor(
    options: {
      billingAddress?: Address;
      billingLocationId?: number;
      billingLocationVersion?: number;
      businessPhone?: string;
      createdBy?: string;
      email?: string;
      fax?: string;
      globalId?: string;
      id?: string;
      locationId?: number;
      locationVersion?: number;
      medOther?: string;
      medSpecialty?: string;
      name?: string;
      physicalAddress?: Address;
      tdecId?: number;
      tdecVersion?: number;
    } = {}
  ) {
    this.billingAddress = options.billingAddress || new Address();
    this.billingLocationId = options.billingLocationId || null;
    this.billingLocationVersion = options.billingLocationVersion || null;
    this.businessPhone = options.businessPhone || '';
    this.createdBy = options.createdBy || '';
    this.email = options.email || '';
    this.fax = options.fax || '';
    this.globalId = options.globalId || '';
    this.id = options.id || '';
    this.locationId = options.locationId || null;
    this.locationVersion = options.locationVersion || null;
    this.medOther = options.medOther || '';
    this.medSpecialty = options.medSpecialty || '';
    this.name = options.name || '';
    this.physicalAddress = options.physicalAddress || new Address();
    this.tdecId = options.tdecId || null;
    this.tdecVersion = options.tdecVersion || null;
  }
}
