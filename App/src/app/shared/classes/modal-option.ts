export class ModalOption {
  message: string;
  btn1Txt: string;
  btn2Txt: string;
  modalType: string;

  constructor(options: {
    message: string;
    btn1Txt: string;
    btn2Txt: string;
    modalType: string;
  }) {
    this.message = options.message || '';
    this.btn1Txt = options.btn1Txt || '';
    this.btn2Txt = options.btn2Txt || '';
    this.modalType = options.modalType || '';
  }
}
