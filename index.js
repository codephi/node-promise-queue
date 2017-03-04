Promise.queue = function(promises){
    var _next = (data, resolve, reject) => {
        if (!this.promises) {
            this.promises = data;
            this.pointer = 0;
            this.reject = reject
            this.resolve = resolve
        } else if (!this.promises[++this.pointer]) {
            return this.resolve(data)
        }

        var promise = (this.promises[this.pointer] instanceof Promise) ? this.promises[this.pointer] : this.promises[this.pointer](data);

        promise.then(result => {
            _next.call(this, result)
        }, err => {
            this.reject(err)
        })
    }

    return new Promise((resolve, reject) => {
        _next(promises, resolve, reject)
    })
}


module.exports = Promise;