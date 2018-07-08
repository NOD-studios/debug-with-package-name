/* eslint import/no-commonjs:0, fp/no-mutation:0, fp/no-unused-expression:0, better/explicit-return:0, fp/no-nil:0 */

import {
  debugWithPackageName,
  debugInternal,
  getPackageName,
  defaultTemplate
} from '../src'
import { name as packageName } from './package.json'

const extraPrefix = 'test'
const templateString = defaultTemplate(extraPrefix, packageName)

test('getPackageName', () =>
  expect(packageName).toBe(getPackageName(__dirname)))

test('should prefix properly', t =>
  debugWithPackageName(extraPrefix, packageName, defaultTemplate, debugName => {
    debugInternal({ debugName, templateString })
    return expect(debugName).toBe(templateString)
  }))
