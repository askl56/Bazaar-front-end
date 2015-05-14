import DS from 'ember-data';

export default DS.Model.extend({
  user_id: DS.attr('integer')
  total: DS.attr('decimal')
  created_at: DS.attr('datetime')
  updated_at: DS.attr('datetime')
});
