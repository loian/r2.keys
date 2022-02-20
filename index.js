import robotjs from "robotjs"

class Test {
    constructor() {
    }

    do(action, data) {
        console.log("aafff")
        robotjs.keyTap("w", ["command"]);
    }
}

const plugin = new Test();
export {
    plugin
}