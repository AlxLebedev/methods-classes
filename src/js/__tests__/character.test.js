import Bowman from '../characters/Bowman';
import Swordsman from '../characters/Swordsman';
import Magician from '../characters/Magician';
import Undead from '../characters/Undead';
import Zombie from '../characters/Zombie';
import Daemon from '../characters/Daemon';
import DeadCharacter from '../characters/DeadCharacter';


test('Creating Bowman', () => {
  const received = new Bowman('Steve Gadd');
  const expected = {
    name: 'Steve Gadd',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 25,
    protection: 25,
  };
  expect(received).toEqual(expected);
});

test('Creating Swordsman', () => {
  const received = new Swordsman('Todd Sucherman');
  const expected = {
    name: 'Todd Sucherman',
    type: 'Swordsman',
    health: 50,
    level: 1,
    attack: 40,
    protection: 10,
  };
  expect(received).toEqual(expected);
});

test('Creating Magician', () => {
  const received = new Magician('Jared Falk');
  const expected = {
    name: 'Jared Falk',
    type: 'Magician',
    health: 50,
    level: 1,
    attack: 10,
    protection: 40,
  };
  expect(received).toEqual(expected);
});

test('Creating Undead', () => {
  const received = new Undead('Anika Nilles');
  const expected = {
    name: 'Anika Nilles',
    type: 'Undead',
    health: 50,
    level: 1,
    attack: 25,
    protection: 25,
  };
  expect(received).toEqual(expected);
});

test('Creating Zombie', () => {
  const received = new Zombie('Emmanuelle Caplette');
  const expected = {
    name: 'Emmanuelle Caplette',
    type: 'Zombie',
    health: 50,
    level: 1,
    attack: 40,
    protection: 10,
  };
  expect(received).toEqual(expected);
});

test('Creating Daemon', () => {
  const received = new Daemon('Elise Trouw');
  const expected = {
    name: 'Elise Trouw',
    type: 'Daemon',
    health: 50,
    level: 1,
    attack: 10,
    protection: 40,
  };
  expect(received).toEqual(expected);
});

test('Bowman Level Up', () => {
  const received = new Bowman('Steve Gadd');
  received.levelUp();
  const expected = {
    name: 'Steve Gadd',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    protection: 30,
  };
  expect(received).toEqual(expected);
});

test('Dead character Level Up', () => {
  const received = new DeadCharacter('Egor Krid');

  function returnError() {
    return received.levelUp();
  }

  expect(returnError).toThrow();
});
