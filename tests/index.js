var test = require('tape');


test('works at all', function(t) {
    t.plan(1);

    var denullify = require('../'),
        data = {
            foo: 'bar',
            thing: null,
            asdf: undefined,
            stuff: {
                majigger: null,
                boop: 'diddly',
                meh: undefined,
            }
        },
        expectedResult = {
            foo: 'bar',
            stuff: {
                boop: 'diddly',
            }
        };

    t.deepEqual(denullify(data), expectedResult, 'works first time');
});
