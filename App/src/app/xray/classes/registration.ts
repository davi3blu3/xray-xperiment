import { Possessor } from './possessor';
import { Owner } from './owner';

export class Registration {
  possessor: Possessor;
  owner: Owner;

  constructor(
    options: {
      possessor?: Possessor;
      owner?: Owner;
    } = {}
  ) {
    this.possessor = options.possessor || new Possessor();
    this.owner = options.owner || new Owner();
  }
}
