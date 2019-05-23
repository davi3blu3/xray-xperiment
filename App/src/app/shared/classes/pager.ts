export class Pager {
  totalItems: number;
  displayMax: number;
  totalPages: number;
  currentPage: number;
  sliceStart: number;
  sliceEnd: number;

  constructor(totalItems: number, displayMax: number = 10) {
    this.totalItems = totalItems;
    this.displayMax = displayMax;
    this.totalPages = Math.ceil(this.totalItems / this.displayMax);
    this.currentPage = 1;
    this.setSlice(this.currentPage);
  }

  setSlice(currentPage: number) {
    this.sliceStart = currentPage * 10 - 10;
    this.sliceEnd =
      this.totalItems - 1 < currentPage * 10 - 1
        ? this.totalItems - 1
        : currentPage * 10 - 1;
  }

  changePage(increment: number) {
    console.log('changePage detected. current:', this.currentPage);
    if (
      this.currentPage + increment <= this.totalPages &&
      this.currentPage + increment > 0
    ) {
      this.currentPage = this.currentPage + increment;
      this.setSlice(this.currentPage);
      console.log('new currentPage:', this.currentPage);
    }
  }
}
