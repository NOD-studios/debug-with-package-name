// @flow
import debug from 'debug'
import { sync as readPkgSync } from 'read-pkg-up'
import { join } from 'path'

const packageName = '@nod/debug-with-package-name'

export const debugInternal = (
  variable: ?any,
  description: ?string = ' %O'
): any => [debug(packageName)(description, variable), variable][1]

export const getPackageName = (dir?: string = process.cwd()): string => {
  const pkg = readPkgSync({ cwd: dir })
  const {
    pkg: { name }
  } = pkg
  return name
}

export const defaultTemplate = (
  extraPrefix?: string = '',
  packagePrefix?: string = getPackageName()
): string => debugInternal(join(packagePrefix, extraPrefix), 'defaultTemplate')
