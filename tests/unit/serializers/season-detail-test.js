import { moduleForModel, test } from 'ember-qunit';

moduleForModel('season-detail', 'Unit | Serializer | season detail', {
  // Specify the other units that are required for this test.
  needs: ['serializer:season-detail']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
