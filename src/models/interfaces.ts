interface Event {
    roundNum: number;
    title: string;
    description: string;
  }
  
  interface Player {
    name: string;
    faction: string;
    hero: string;
    startingBonus: string;
  }
 
  interface Scenario {
    name: string;
    rounds: number;
    events: Event[];
    players: Player[];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Campaign {
    name: string;
    faction: Faction[];
    scenarios: Scenario[];
  }

  interface Faction {
    name: string;
    color: string;
    heroes: Hero[];
    creatures: Creature[];
  }

  interface Creature {
    name: string;
    fewSkills: {
      attack: number;
      defense: number;
      hitpoints: number;
      speed: number;
      ability: string;
    }
    packSkills: {
      attack: number;
      defense: number;
      hitpoints: number;
      speed: number;
      ability: string;
    }
    description: string;
    upgraded: boolean
  }

  interface Hero {
    name: string;
    specialty: Specialty;
    startingSkill: Skill;
  }

  interface Specialty {
    name: string;
    description: string;
  }

  interface Skill {
    name: string;
    description: string;
  }
