import Ember from 'ember';

let cities = [
  {
    name: "City of Fire",
    location: "fire land",
    population: "520,000",
    dominantSpecies: "Human",
    majorExports: "Advanced Technology"
  },
  {
    name: "City of Air",
    location: "On top a mountain",
    population: "320,000",
    dominantSpecies: "Elven",
    majorExports: "Airships"
  },
  {
    name: "City of Earth",
    location: "America",
    population: "723,000",
    dominantSpecies: "Dwarves"
  },
  {
    name: "City of Water",
    location: "Middle of the Pacific, Ocean Floor",
    population: "322,000",
    dominantSpecies: "Undine and Water-Elf",
    majorExports: "Water"
  },
  {
    name: "City of Angels",
    location: "South Pole",
    population: "124,000",
    dominantSpecies: "Aasimar",
    majorExports: "Services"
  },
  {
    name: "City of Devils",
    location: "North Pole",
    dominantSpecies: "Human and Tiefling",
    majorExports: "Financial Services and Insurance"
  }
];


export default Ember.Route.extend({
  model(){
    return cities;
  }
});
