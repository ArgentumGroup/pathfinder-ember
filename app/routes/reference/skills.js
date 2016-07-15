import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      acrobatics: acrobatics,
      bluff: bluff,
      climb: climb,
      diplomacy: diplomacy,
      disableDevice: disableDevice,
      disguise: disguise,
      escapeArtist: escapeArtist,
      fly: fly,
      handleAnimals: handleAnimals,
      heal: heal,
      knowledge: knowledge,
      linguistics: linguistics,
      perception: perception,
      ride: ride,
      spellcraft: spellcraft,
      survival: survival,
      swim: swim,
      survival: survival,
      useMagicDevice: useMagicDevice
    });
  }
});

let acrobatics = [
  surfaces: [
    {
      sufaceWidth: "> 3 ft",
      acrobaticsDC: 0,
    },
    {
      sufaceWidth: "1 - 3 ft",
      acrobaticsDC: 5,
    },
    {
      sufaceWidth: "7 - 11 in",
      acrobaticsDC: 10,
    },
    {
      sufaceWidth: "2 - 6 in",
      acrobaticsDC: 15,
    },
    {
      sufaceWidth: "< 2 in",
      acrobaticsDC: 20,
    }
  ],
  situations: [
    {
      situation: "Move through a threatened area",
      DC: "Opponent’s CMD"
    },
    {
      situation: "Move through an enemy’s space",
      DC: "5 + Opponent’s CMD"
    }
  ],
  longJump: [
    {
      feet: 5,
      DC: 5
    },
    {
      feet: 10,
      DC: 10
    },
    {
      feet: 10,
      DC: 15
    },
    {
      feet: 10,
      DC: 20
    },
    {
      feet: '> 20',
      DC: '+5 per ft'
    }
  ],
  HighJump: [
    {
      feet: 1,
      DC: 4
    },
    {
      feet: 2,
      DC: 8
    },
    {
      feet: 3,
      DC: 12
    },
    {
      feet: 4,
      DC: 16
    },
    {
      feet: '> 4',
      DC: '+4 per ft'
    }
  ]
];
let bluff = [
  {
    circumstances: "Target wants to believe you",
    bluffModifier: 5
  },
  {
    circumstances: "Lie is believable",
    bluffModifier: 0
  },
  {
    circumstances: "Lie is unlikely",
    bluffModifier: -5
  },
  {
    circumstances: "Lie is far-fetched",
    bluffModifier: -10
  },
  {
    circumstances: "Lie is impossible",
    bluffModifier: -20
  },
  {
    circumstances: "Target is drunk or impaired",
    bluffModifier: 5
  },
  {
    circumstances: "You possess convincing proof",
    bluffModifier: 10
  }
];
let climb = [
  DC: [
    {
      climb: 0,
      surface: "A slope too steep to walk, knotted rope + wall."
    },
    {
      climb: 5,
      surface: "Rope + wall, knotted rope, rope with rope trick."
    },
    {
      climb: 10,
      surface: "A surface with ledges (eg ship’s rigging)."
    },
    {
      climb: 15,
      surface: "Surface with handholds (eg tree/natural wall), unknotted rope, pull ups"
    },
    {
      climb: 20,
      surface: "Uneven surface with narrow handholds (eg typical wall in dungeon)."
    },
    {
      v: 25,
      surface: "A rough surface (e.g. brick wall)"
    },
    {
      climb: 30,
      surface: "An overhang or ceiling with handholds but no footholds"
    },
    {
      climb: '--',
      surface: "A perfectly smooth, flat, vertical (or inverted) surface cannot be climbed."
    }
  ]
  DCModifiers: [
    {
      climb: -10,
      surface: "Climbing a chimney (brace against two opposite walls)."
    },
    {
      climb: -5,
      surface: "Climbing a corner where you can brace against perpendicular walls."
    },
    {
      climb: 5,
      surface: "Surface is slippery."
    }
  ]
];
let diplomacy = [
  {
    attitudes: [
      {
        attitude: 'Hostile',
        modifier: 25
      },
      {
        attitude: 'Unfriendly',
        modifier: 20
      },
      {
        attitude: 'Indifferent',
        modifier: 15
      },
      {
        attitude: 'Friendly',
        modifier: 10
      },
      {
        attitude: 'Helpful',
        modifier: 0
      },
    ],
    requests: [
      {
        request: 'Give simple advice or directions',
        modifier: -5
      },
      {
        request: 'Give detailed advice',
        modifier: 0
      },
      {
        request: 'Give simple aid',
        modifier: 0
      },
      {
        request: 'Reveal an unimportant secret',
        modifier: 5
      },
      {
        request: 'Give lengthy or complicated aid',
        modifier: 5
      },
      {
        request: 'Give dangerous aid',
        modifier: 10
      },
      {
        request: 'Reveal secret knowledge',
        modifier: '10 or more'
      },
      {
        request: 'Give aid that could result in punishment',
        modifier: '15 or more'
      },
      {
        request: 'Additional requests',
        modifier: '5 per request'
      }
    ]
  }
];
let disableDevice = [
  {
    name: "City of Fire",
  }
];
let disguise = [
  {
    name: "City of Fire",
  }
];
let escapeArtist = [
  {
    name: "City of Fire",
  }
];
let fly = [
  {
    name: "City of Fire",
  }
];
let handleAnimals = [
  {
    name: "City of Fire",
  }
];
let heal = [
  {
    knowledge: "City of Fire",
  }
];
let knowledge = [
  {
    name: "City of Fire",
  }
];
let linguistics = [
  {
    name: "City of Fire",
  }
];
let perception = [
  {
    name: "City of Fire",
  }
];
let ride = [
  {
    name: "City of Fire",
  }
];
let spellcraft = [
  {
    name: "City of Fire",
  }
];
let survival = [
  {
    name: "City of Fire",
  }
];
let swim = [
  {
    name: "City of Fire",
  }
];
let useMagicDevice = [
  {
    name: "City of Fire",
  }
];
