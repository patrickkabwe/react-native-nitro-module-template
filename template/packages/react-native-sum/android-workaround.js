
const path = require('node:path')
const { writeFile, readFile } = require('node:fs/promises')

const androidWorkaround = async () => {
  const androidOnLoadFile = path.join(
    process.cwd(),
    'nitrogen/generated/android',
    'SumOnLoad.cpp'
  )

  const str = await readFile(androidOnLoadFile, { encoding: 'utf8' })
  await writeFile(androidOnLoadFile, str.replace('margelo/nitro/', ''))
}
androidWorkaround()
