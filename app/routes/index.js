import Ember from 'ember';

var restaurants = [{
  id: 1,
  name: "Cafe Deli",
  city: "Nairobi CBD",
  type: "Coffee House",
  rating: 5,
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
}, {
  id: 2,
  name: "Brew Bistro",
  city: "Westlands, Nairobi",
  type: "Brasery",
  rating: 1,
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"
}, {
  id: 3,
  name: "Arte Caffe",
  city: "Adams Arcade, Nairobi",
  type: "Restaurant",
  rating: 3,
  image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
}];

export default Ember.Route.extend({
  model() {
    return restaurants;
  },
});
