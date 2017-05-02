import { moduleForModel, test } from 'ember-qunit';

moduleForModel('serie-detail', 'Unit | Serializer | serie detail', {
  // Specify the other units that are required for this test.
  needs: ['serializer:serie-detail']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
