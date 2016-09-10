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
    name: "Pneumos",
    description: "Noise, noise, noise. It didn’t matter which way one turned, Pneumos was awash with noise. Noisy traffic, noisy industry, street musicians, the cries of street-sellers and street collectors echoed through Pneumos. From morning till night, the costermongers could be heard crying their wares and music whether just the organ-grinder, or the full brass band seemed to surround one night and day. Traffic in Pneumos was extreme as much of the city was created long before written history. Streets were narrow and paved with cobblestones. In the streets horses and pedestrians mingled.",
    location: "Pneumos was build into the elemental bone of air. For years the were simple traders but as time went on they developed a respect for the air elements that would drift up through the bone. ",
    population: "420,000",
    dominantSpecies: "Elven",
    majorExports: "The most expensive and fanciful of things with origins in the City of Air are the glorious sky breaking Airships. Families of Noble blood or high-ranking merchant guilds will enter into a contract with an Air Elemental to power these ships of wonder. "
  },
  {
    name: "City of Earth",
    location: "America",
    population: "723,000",
    dominantSpecies: "Dwarves",
    majorExports: "Literally everything, central trade hub of Ur, it is said all roads lead to Earth."
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
    majorExports: "Medical services, and research."
  },
  {
    name: "City of Devils",
    location: "North Pole",
    population: "400,000",
    dominantSpecies: "Human and Tiefling",
    majorExports: "Financial Services and Insurance"
  }
];


export default Ember.Route.extend({
  model(){
    return cities;
  }
});
