/* eslint import/no-commonjs:0, fp/no-mutation:0, fp/no-unused-expression:0, better/explicit-return:0, fp/no-nil:0 */

import {
  debugWithPackageName,
  debugInternal,
  getPackageName,
  defaultTemplate
} from '../server'
import { name as packageName } from './package.json'

const extraPrefix = 'test'
const templateString = defaultTemplate(extraPrefix, packageName)

describe('debug-with-package-name', () => {
  test('getPackageName', () =>
    expect(packageName).toBe(getPackageName(__dirname)))

  test('should prefix properly', () =>
    debugWithPackageName(
      extraPrefix,
      packageName,
      defaultTemplate,
      debugName => {
        debugInternal({ debugName, templateString })
        return expect(debugName).toBe(templateString)
      }
    ))
})
