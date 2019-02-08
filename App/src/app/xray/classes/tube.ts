import { Inspection } from 'src/app/shared/classes/inspection';

export class Tube {
  classOther: string;
  classification: string;
  comments: string;
  controlLetter: string;
  controlNumber: string;
  createdBy: string;
  deleteDate: Date;
  globalId: string;
  id: number;
  initialInspection: Date;
  inspections: Inspection[];
  maxVoltage: number;
  originalPossession: Date;
  possessionDate: Date;
  registrationDate: Date;
  registrationType: string;
  replacementTube: boolean;
  room: string;
  status: string;
  tubeManufact: string;
  tubeNumber: 1;
  tubeSerial: string;

  constructor(options: {
    classOther?: string;
    classification?: string;
    comments?: string;
    controlLetter?: string;
    controlNumber?: string;
    createdBy?: string;
    deleteDate?: Date;
    globalId?: string;
    id?: number;
    initialInspection?: Date;
    inspections?: Inspection[];
    maxVoltage?: number;
    originalPossession?: Date;
    possessionDate?: Date;
    registrationDate?: Date;
    registrationType?: string;
    replacementTube?: boolean;
    room?: string;
    status?: string;
    tubeManufact?: string;
    tubeNumber?: 1;
    tubeSerial?: string;
  }) {
    this.classOther = options.classOther || '';
    this.classification = options.classification || '';
    this.comments = options.comments || '';
    this.controlLetter = options.controlLetter || '';
    this.controlNumber = options.controlNumber || '';
    this.createdBy = options.createdBy || '';
    this.deleteDate = options.deleteDate || new Date();
    this.globalId = options.globalId || '';
    this.id = options.id || null;
    this.initialInspection = options.initialInspection || new Date();
    this.inspections = options.inspections || [];
    this.maxVoltage = options.maxVoltage || null;
    this.originalPossession = options.originalPossession || new Date();
    this.possessionDate = options.possessionDate || new Date();
    this.registrationDate = options.registrationDate || new Date();
    this.registrationType = options.registrationType || '';
    this.replacementTube = options.replacementTube || false;
    this.room = options.room || '';
    this.status = options.status || '';
    this.tubeManufact = options.tubeManufact || '';
    this.tubeNumber = options.tubeNumber || 1;
    this.tubeSerial = options.tubeSerial || '';
  }
}
