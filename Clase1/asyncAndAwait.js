aync function foo() {
    try {
        var a = await f();
        var b = await f1();
        return a + b;
    } catch {

    }
}