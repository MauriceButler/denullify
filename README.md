# denullify

Removes nulls and undefineds from an object


## Example

``` javascript

    var denullify = require('denullify'),

    var data = {
            foo: 'bar',
            thing: null,
            asdf: undefined,
            stuff: {
                majigger: null,
                boop: 'diddly',
                meh: undefined,
            }
        };

    denullify(data)

    /*
    {
        foo: 'bar',
        stuff: {
            boop: 'diddly',
        }
    }
    */

```