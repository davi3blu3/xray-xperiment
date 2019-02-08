import { CpType } from './cp-type';

export class ControlPanel {
  createdBy: string;
  globalId: string;
  id: number;
  manufacturer: string;
  replacementDate: null;
  room: string;
  serialNumber: string;
  status: null;
  type: {
    category: string;
    subCategory: string;
  };
  category: string;
  subCategory: string;

  constructor(options: {
    createdBy?: string;
    globalId?: string;
    id?: number;
    manufacturer?: string;
    replacementDate?: null;
    room?: string;
    serialNumber?: string;
    status?: null;
    type: CpType;
    category?: string;
    subCategory?: string;
  }) {
    this.createdBy = options.createdBy || '';
    this.globalId = options.globalId || '';
    this.id = options.id || null;
    this.manufacturer = options.manufacturer || '';
    this.replacementDate = options.replacementDate || null;
    this.room = options.room || '';
    this.serialNumber = options.serialNumber || '';
    this.status = options.status || null;
    this.type = options.type || new CpType();
    this.category = options.category || '';
    this.subCategory = options.subCategory || '';
  }
}
