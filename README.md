# Queue Promise
Execute a function queue to receive value passed in resolving of the last call function.

You can override the default Promise or use a unique variable for this module. In any of the options you will have all the other standard Promise methods available.

## Use
```javascript
var queue = require("queue-promise")

var func = queue([
    new Promise((resolve, reject) => { resolve(1) }),
    data => new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(--data)
        }, 3000) 
    }),
    data => new Promise((resolve, reject) => { resolve(++data) }),
])

func.then(data => console.log(data), err => console.error(err))

```
