import { ControlPanel } from './control-panel';
import { Document } from 'src/app/shared/classes/document';
import { Tube } from './tube';

export class Machine {
  controlNumber: number;
  controlPanel: ControlPanel;
  createdBy: string;
  deleteDate: null;
  documents: Document[];
  globalId: string;
  id: number;
  inStorage: null;
  motility: string;
  possessionDate: Date;
  status: string;
  storageLocation: null;
  tubes: Tube[];

  constructor(options: {
    controlNumber?: number;
    controlPanel?: ControlPanel;
    createdBy?: string;
    deleteDate?: null;
    documents?: Document[];
    globalId?: string;
    id?: number;
    inStorage?: null;
    motility?: string;
    possessionDate?: Date;
    status?: string;
    storageLocation?: null;
    tubes?: Tube[];
  }) {
    this.controlNumber = options.controlNumber || null;
    this.controlPanel = options.controlPanel;
    this.createdBy = options.createdBy || '';
    this.deleteDate = options.deleteDate || null;
    this.documents = options.documents || [];
    this.globalId = options.globalId || '';
    this.id = options.id || null;
    this.inStorage = options.inStorage || null;
    this.motility = options.motility || '';
    this.possessionDate = options.possessionDate || new Date();
    this.status = options.status || '';
    this.storageLocation = options.storageLocation || null;
    this.tubes = options.tubes || [];
  }
}
