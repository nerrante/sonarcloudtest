import React from 'react';

import {doSomething} from "../Hello";

test('getting test coverage', () => {
  let a = {
    query: {
      operation: 'a'
    }
  }
  doSomething(a, 'b')

});
