import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string')
  price: DS.attr('decimal')
  published: DS.attr('boolean')
  user_id: DS.attr('integer')
  created_at: DS.attr('datetime')
  updated_at: DS.attr('datetime')
  quantity: DS.attr('integer')
});
