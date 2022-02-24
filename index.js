function receivesAFunction(morningRountine) {
morningRountine();
}

function returnsANamedFunction() {
    return function add() {
        return 2 + 2;
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        return 2 + 2;
    }
}