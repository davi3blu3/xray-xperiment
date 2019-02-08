export class Document {
  createdBy: string;
  fileName: string;
  fileNetId: string;
  globalId: string;
  id: number;
  isEmployee: boolean;
  mimeType: string;
  tubeId: number;

  constructor(
    options: {
      createdBy?: string;
      fileName?: string;
      fileNetId?: string;
      globalId?: string;
      id?: number;
      isEmployee?: boolean;
      mimeType?: string;
      tubeId?: number;
    } = {}
  ) {
    this.createdBy = options.createdBy || '';
    this.fileName = options.fileName || '';
    this.fileNetId = options.fileNetId || '';
    this.globalId = options.globalId || '';
    this.id = options.id || null;
    this.isEmployee = options.isEmployee || false;
    this.mimeType = options.mimeType || '';
    this.tubeId = options.tubeId || null;
  }
}
