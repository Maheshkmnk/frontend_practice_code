var i = 0;
console.log(i + 3 + 'a' + 5 + 5)
var i = 2
let x = 5

function app() {
    console.log(i + x)
}
app()

function app1() {
    return i + x
}

const z = app1();

console.log("z", z)

let a = () => {
    return 2 + 2
}
console.log("a", a())


