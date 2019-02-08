import { Address } from '../../shared/classes/address';

export class Owner {
  address: Address;
  businessPhone: string;
  createdBy: string;
  email: string;
  globalId: string;
  id: string;
  name: string;

  constructor(
    options: {
      address?: Address;
      businessPhone?: string;
      createdBy?: string;
      email?: string;
      globalId?: string;
      id?: string;
      name?: string;
    } = {}
  ) {
    this.address = options.address || new Address();
    this.businessPhone = options.businessPhone || '';
    this.createdBy = options.createdBy || '';
    this.email = options.email || '';
    this.globalId = options.globalId || '';
    this.id = options.id || '';
    this.name = options.name || '';
  }
}
