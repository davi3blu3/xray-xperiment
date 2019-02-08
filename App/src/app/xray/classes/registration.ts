import { Machine } from './machine';
import { Possessor } from './possessor';
import { Owner } from './owner';
import { RadSafety } from './rad-safety';
import { Document } from '../../shared/classes/document';

export class Registration {
  activityId: number;
  approval: Date;
  billingStatus: string;
  certify: boolean;
  comment: string;
  counter: number;
  createdBy: string;
  customerId: string;
  date: Date;
  documents: Document[];
  giaNumber: number;
  globalId: string;
  id: number;
  machines: Machine[];
  owner: Owner;
  possessor: Possessor;
  progress: string;
  publicSafety: boolean;
  radSafety: RadSafety;
  registrationNumber: number;
  signature: string;
  status: string;

  constructor(
    options: {
      activityId?: number;
      approval?: Date;
      billingStatus?: string;
      certify?: boolean;
      comment?: string;
      counter?: number;
      createdBy?: string;
      customerId?: string;
      date?: Date;
      documents?: Document[];
      giaNumber?: number;
      globalId?: string;
      id?: number;
      machines?: Machine[];
      owner?: Owner;
      possessor?: Possessor;
      progress?: string;
      publicSafety?: boolean;
      radSafety?: RadSafety;
      registrationNumber?: number;
      signature?: string;
      status?: string;
    } = {}
  ) {
    this.activityId = options.activityId || null;
    this.approval = options.approval || new Date();
    this.billingStatus = options.billingStatus || '';
    this.certify = options.certify || false;
    this.comment = options.comment || '';
    this.counter = options.counter || null;
    this.createdBy = options.createdBy || '';
    this.customerId = options.customerId || '';
    this.date = options.date || new Date();
    this.documents = options.documents || [];
    this.giaNumber = options.giaNumber || null;
    this.globalId = options.globalId || '';
    this.id = options.id || null;
    this.machines = options.machines || [];
    this.owner = options.owner || new Owner();
    this.possessor = options.possessor || new Possessor();
    this.progress = options.progress || '';
    this.publicSafety = options.publicSafety || false;
    this.radSafety = options.radSafety || new RadSafety();
    this.registrationNumber = options.registrationNumber || null;
    this.signature = options.signature || '';
    this.status = options.status || '';
  }
}
