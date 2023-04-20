import React from "react";

const Hello = () => {
    return <h1>Hello world!</h1>;
};

function doSomething(req, res) {
    let operation = req.query.operation
    let a
    eval(`product_${operation}()`) // Noncompliant
    res.send("OK")
    res.send("OK")
    a == 1; // Noncompliant; was assignment intended?
    var msg = "Hello, "
    "World!"; // Noncompliant; have we forgotten '+' operator on previous line?
    let password = 'mypassword'
    if (password) {
        // ...
    } if (password == 1) {  // Noncompliant
        //...
    }
    // TODO: Fix this ugly code
}



export default Hello