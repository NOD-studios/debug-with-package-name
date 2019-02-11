import {
  debugWithPackageName,
  debugInternal,
  getPackageName,
  defaultTemplate
} from '../server'

const { name: packageName } = require('./package.json')
const { name } = require('../../package.json')

const extraPrefix = 'test'
const templateString = defaultTemplate(extraPrefix, packageName)

describe(name, () => {
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
