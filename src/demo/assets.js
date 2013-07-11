function describe(desc, func) {
    console.group(desc);
    func.call();
    console.groupEnd();
}

function it(desc, func, needTime) {
    console.log("<strong>" + "ø™ º≤‚ ‘: " + desc + "</strong>");
    needTime ? console.time("test time") : '';
    func.call(this);
    needTime ? console.timeEnd("test time") : '';

}

function expect(desc, flag, id) {
    if (flag) {
        console.warn(" ≤‚ ‘≥…π¶£°    " + "<br>√Ë ˆ£∫" + desc);
    } else {
        console.error(" ≤‚ ‘ ß∞‹£°   " + desc);
    }
}