import React from "react";

const Hello = () => {
    return <h1>Hello world!</h1>;
};

export function doSomething(req, res) {
    let operation = req.query.operation
    let a
   // eval(`product_${operation}()`) // Noncompliant
   // res.send("OK")
   // res.send("OK")
    a == 1; // Noncompliant; was assignment intended?
    const msg = "Hello, "
    "World!"; // Noncompliant; have we forgotten '+' operator on previous line?
    let password = 'mypassword'
    const password2 = 'anotherpassword'
    if (password == 'mypassword') {
        // ...
    } if (password == 1) {  // Noncompliant
        //...
    }
    // TODO: Fix this ugly code
    // let cmd = req.query.cmd
    // execSync(cmd) // Noncompliant
    let apple = 'apple'
}



export default Hello
