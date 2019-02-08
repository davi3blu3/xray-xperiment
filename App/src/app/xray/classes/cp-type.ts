export class CpType {
  category: string;
  subCategory: string;

  constructor(
    options: {
      category?: string;
      subCategory?: string;
    } = {}
  ) {
    this.category = options.category || '';
    this.subCategory = options.subCategory || '';
  }
}
