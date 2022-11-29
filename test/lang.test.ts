import assert from 'assert'
import { isHTMLString, isNotEmptyArray } from '../src/lang'

describe('type:', () => {
  /**
   * isNotEmptyArray
   */
  describe('isNotEmptyArray', () => {
    test(' 1 => false ', () => {
      assert.strictEqual(isNotEmptyArray(1), false)
    })

    test(' NaN => false ', () => {
      assert.strictEqual(isNotEmptyArray(NaN), false)
    })

    test(" '2' => false ", () => {
      assert.strictEqual(isNotEmptyArray('2'), false)
    })
    test(' {} => false ', () => {
      assert.strictEqual(isNotEmptyArray({}), false)
    })
    test(' [] => false ', () => {
      assert.strictEqual(isNotEmptyArray([]), false)
    })
    test(' [1] => true ', () => {
      assert.strictEqual(isNotEmptyArray([1]), true)
    })
  })
  /**
   * isHTMLString
   */
  describe('isHTMLString', () => {
    test(' "" => false ', () => {
      assert.strictEqual(isHTMLString(''), false)
    })
    test(' "<div>asdf" => true ', () => {
      assert.strictEqual(isHTMLString('<div>asdf'), true)
    })
    test(' "<div>asdf</div>" => true ', () => {
      assert.strictEqual(isHTMLString('<div>asdf</div>'), true)
    })
  })
})
