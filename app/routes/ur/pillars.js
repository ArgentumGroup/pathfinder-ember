import Ember from 'ember';

let pillars = [
  {
    name: "Pillar of Earth",
    accessiblePlanes: "Elemental Planes of Earth, Fire and Water, the Astral Plane, the Material Plane, the Fae Realm, and Shadowfel"
  },
  {
    name: "Pillar of Fire",
    accessiblePlanes: " Elemental Planes of Fire, Air and Earth, the Astral Plane, the Material Plane, the Fae Realm, and Shadowfel"
  },
  {
    name: "Pillar of Air",
    accessiblePlanes: "Elemental Planes of Air, Water and Fire, the Astral Plane, the Material Plane, the Fae Realm, and Shadowfel"
  },
  {
    name: "Pillar of Water",
    accessiblePlanes: "Elemental Planes of Water, Earth, and Air, the Astral Plane, the Material Plane, the Fae Realm, and Shadowfel"
  },
  {
    name: "Celestial Pillar",
    accessiblePlanes: "Elysium, The Abyss, the Material Plane, and the Fae Realm"
  },
  {
    name: "Diabolical Pillar",
    accessiblePlanes: "The Nine Hells, The Abyss, the Material Plane, and the Fae Realm"
  }
];

export default Ember.Route.extend({
  model() {
    return pillars;
  }
});
