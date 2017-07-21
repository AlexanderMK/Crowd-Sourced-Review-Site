import Ember from 'ember';

export default Ember.Component.extend({
  addNewRestaurant: false,
  actions: {
    restaurantFormShow() {
      this.set('addNewRestaurant', true);
    },

    saveRestaurant1() {
      var params = {
        name: this.get('name'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        rating: this.get('rating'),
      };
      this.set('addNewRestaurant', false);
      this.sendAction('saveRestaurant2', params);
  }
});
