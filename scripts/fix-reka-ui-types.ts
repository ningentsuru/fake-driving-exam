import { glob } from 'glob'
import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'

async function fixVueTypes() {
  try {
    const files = await glob('src/components/ui/**/*.vue')

    const rekaImportRegex = /import\s+type\s+\{([^}]+)\}\s+from\s+["']reka-ui["']/

    let fixedCount = 0

    for (const file of files) {
      const filePath = join(process.cwd(), file)
      let content = await readFile(filePath, 'utf-8')

      const importMatch = content.match(rekaImportRegex)

      if (!importMatch) {
        continue
      }

      const importsStr = importMatch[1]
      const typeNames = importsStr
        .split(',')
        .map((name) => name.trim())
        .filter((name) => name.length > 0)

      if (typeNames.length === 0) continue

      let fileChanged = false
      let newContent = content

      for (const typeName of typeNames) {
        const safeTypeName = typeName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

        const regex = new RegExp(
          `(?<!\\{\\s*)(?<!,\\s*)(?<!/\\* @vue-ignore \\*/\\s*)\\b(${safeTypeName})\\b`,
          'g',
        )

        if (regex.test(newContent)) {
          regex.lastIndex = 0
          newContent = newContent.replace(regex, '/* @vue-ignore */ $1')
          fileChanged = true
        }
      }

      if (fileChanged) {
        await writeFile(filePath, newContent, 'utf-8')
        console.log(`✅ Fixed: ${file}`)
        fixedCount++
      }
    }

    console.log(`\n🎉 Successfully fixed ${fixedCount} file(s).`)
  } catch (error) {
    console.error('❌ Error occurred:', error)
    process.exit(1)
  }
}

fixVueTypes()
