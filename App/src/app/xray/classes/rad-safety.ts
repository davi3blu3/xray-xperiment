export class RadSafety {
  businessPhone: string;
  createdBy: string;
  email: string;
  globalId: string;
  id: string;
  name: string;

  constructor(
    options: {
      businessPhone?: string;
      createdBy?: string;
      email?: string;
      globalId?: string;
      id?: string;
      name?: string;
    } = {}
  ) {
    this.businessPhone = options.businessPhone || '';
    this.createdBy = options.createdBy || '';
    this.email = options.email || '';
    this.globalId = options.globalId || '';
    this.id = options.id || '';
    this.name = options.name || '';
  }
}
