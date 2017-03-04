# Promise with Queue

## Use
```javascript
var Promise = require("promise-with-queue")

var func = new Promise.queue([
    new Promise((resolve, reject) => { resolve(1) }),
    data => new Promise((resolve, reject) => { resolve(++data) }),
    data => new Promise((resolve, reject) => { resolve(++data) }),
])

func.then(data => console.log(data), err => console.error(err))

```
