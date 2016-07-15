import Ember from 'ember';

let conditions = [
  {
    condition: "Blinded",
    description: "Creature takes a -2 penalty to AC, loses Dex bonus to AC, and takes a -4 penalty on most Str- and Dex-based skill checks and on opposed Perception skill checks. All opponents are considered to have total concealment (50% miss chance) against the blinded character. Creatures must make a DC 10 Acrobatics skill check to move faster than half speed or fall prone.",
  },
  {
    condition: "Broken",
    description: "	Weapons suffer a -2 penalty on attack and damage rolls and only score a critical hit on a natural 20 and only deal X2 damage. Armor and shields grant half AC bonus and double armor check penalty. Broken wands or staves use twice as many chages."},
  {
    condition: "Confused",
    description: "01-25: Act normally, 26-50: Babble for one round, 51-75: Deal 1d8 + Str damage to self, 76-100: Attack nearest creature.",
  },
  {
    condition: "Dazed",
    description: "Can take no actions (no penalties to AC)",
  },
  {
    condition: "Dazzled",
    description: "-1 to attack and sight-based checks",
  },
  {
    condition: "Deafened",
    description: "–4 penalty on initiative, opposed Perception checks (automatically fails checks based on sound), and 20% chance of spell failure (verbal)",
  },
  {
    condition: "Disabled",
    description: "Typically at or below 0 hp. Take only standard or move action. Standard action causes 1 pt of damage (typically causes dying condition)",
  },
  {
    condition: "Entangled",
    description: "No movement if bonds are anchored, otherwise move at half speed. Creature takes a -2 penalty on all attack rolls and a -4 penalty to Dex. Must make concentration check to cast spells.",
  },
  {
    condition: "Exhausted",
    description: "Creature moves at half speed. -6 penalty to Str and Dex. Rest 1 hour to become fatigued.",
  },
  {
    condition: "Facinated",
    description: "Takes no actions. -4 to checks made as reactions. Potential threats allow new save, obvious threats break effect.",
  },
  {
    condition: "Fatgued",
    description: "Creature cannot run or charge. -2 penalty to Str and Dex. Rest 8 hours to remove.",
  },
  {
    condition: "Flat-Footed",
    description: "Loses Dex bonus to AC and CMD.",
  },
  {
    condition: "Frightened",
    description: "As shaken, except creature must flee from source.",
  },
  {
    condition: "Grappled",
    description: "Creature cannot move or take action that requires 2 hands. -4 penalty to Dex. -2 penalty to attacks and combat maneuvers (except checks made to maintain or escape). Must make concentration check to cast spells. Cannot take attacks of opportunity.",
  },
  {
    condition: "Helpless",
    description: "Typically paralyzed, held, bound, pinned, sleeping, unconscious, etc. Effective Dex = 0, melee attacks get +4. Allows coup de grace.",
  },
  {
    condition: "Incorporeal",
    description: "Immune to all nonmagical attack forms. Takes half damage (50%) from magic weapons, spells, spell-like effects, and supernatural effects. Full damage from other incorporeal or force effects.",
  },
  {
    condition: "Invisible",
    description: "Gains a +2 on attack rolls, target loses Dex bonus to AC.",
  },
  {
    condition: "Nauseated",
    description: "Creature can only take a move action and cannot attack, cast spells, or concentrate.",
  },
  {
    condition: "Panicked",
    description: "As Frightened, except creature drops held items.",
  },
  {
    condition: "Paralyzed",
    description: "Creature's Str and Dex reduced to 0. Fliers using wings fall. Creature is helpless.",
  },
  {
    condition: "Pinned",
    description: "As grappled, except creature is flat-footed, takes a -4 penalty to AC, and can only take verbal or mental actions (except checks made to escape).",
  },
  {
    condition: "Prone",
    description: "On ground. -4 to melee attacks (can't use ranged except crossbows). -4 to melee AC, +4 to ranged AC. Move + AoO to stand.",
  },
  {
    condition: "Shaken",
    description: "Creature takes a -2 penalty on attack rolls, saving throws, skill checks, and ability checks.",
  },
  {
    condition: "Sickened",
    description: "Creature takes a -2 penalty on all attack rolls, weapon damage rolls, saving throws, skill checks, and ability checks.",
  },
  {
    condition: "Staggered",
    description: "Creature can only take a move action or standard action (plus swift and immediate).",
  },
  {
    condition: "Stunned",
    description: "Creature cannot take actions, drops everything held, takes a -2 penalty to AC, and loses its Dex bonus to AC (if any).",
  }
];

export default Ember.Route.extend({
  model(){
    return conditions;
  }
});
