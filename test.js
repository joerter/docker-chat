var greeting = require('./greeting');
var test = require('tape');

test('greeting', function (t) {
  t.plan(1);
  var expected = 'Welcome to the chat! Here are the messages you missed...';
  var actual = greeting();

  t.equal(actual, expected);
});
