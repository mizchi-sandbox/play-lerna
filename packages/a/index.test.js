/* @flow */
import test from 'ava'
import a from './index'
test('a() is a', t => {
  t.is(a(), 'a')
})
