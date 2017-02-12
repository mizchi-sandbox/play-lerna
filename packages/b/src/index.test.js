/* @flow */
import test from 'ava'
import b from './index'
test('b() is b', t => {
  t.is(b(), 'b')
})
