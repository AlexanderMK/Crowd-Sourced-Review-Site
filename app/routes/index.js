import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('restaurant');
  },

  actions: {
    destroyRestaurant(restaurant) {
      restaurant.destroyRecord();
      this.transitionTo('index');
    }
  }
});
