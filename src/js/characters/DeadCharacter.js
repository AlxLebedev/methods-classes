import Character from './Character';

export default class DeadCharacter extends Character {
  constructor(name) {
    super(name);
    this.type = 'Dead character';
    this.health = 0;
    this.attack = 11;
    this.protection = 11;
  }
}
