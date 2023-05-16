import React from 'react';

import {doSomething} from "../HelloAgain";

test('getting test coverage', () => {
  let a = {
    query: {
      operation: 'a',
      cmd: 'test'
    }
  }
  doSomething(a, 'b')

});
