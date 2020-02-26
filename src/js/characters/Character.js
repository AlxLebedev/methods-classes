export default class Character {
  constructor(name) {
    this.name = name;
    this.health = 50;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.protection += this.protection * 0.2;
      this.health = 100;
    } else {
      throw new Error(`${this.name} is dead - can't level up a dead character`);
    }
  }
}
