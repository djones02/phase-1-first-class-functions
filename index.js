function receivesAFunction(callback) {
    callback('Spy')
}
callback(() => console.log('Spy'))

function returnsANamedFunction() {
    return function returnsANamedFunction() {
    }
}

function returnsAnAnonymousFunction() {
    return function () {
    }
}