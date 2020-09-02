const fs = require('fs-extra')
const path = require('path')

const rootPath = path.dirname(__dirname)
const appFolder = path.join(rootPath, '/node_modules/@app')

async function createLinks() {

    await recreateAppFolder()

    const moduleNames = await getLocalModulesNames()

    moduleNames.forEach(async moduleName => await createLink(moduleName))

}

async function recreateAppFolder() {
    await fs.remove(appFolder)
    await fs.mkdirs(appFolder)
}

async function getLocalModulesNames() {

    const excludedPaths = [
        'node_modules',
        'install',
        'index.js',
        'test'
    ]

    const modules = fs.readdirSync(rootPath, {withFileTypes: true})
        .filter(file => file.name[0] !== ".")
        .filter(file => !excludedPaths.includes(file.name))
        .filter(file => file.name.match(/^.+\.js$/) || file.isDirectory())
        .map(file => file.name)

    return modules
}

async function createLink(moduleName) {
    const existingPath = path.join(rootPath, moduleName)
    const newPath = path.join(appFolder, moduleName)
    await fs.ensureSymlink(existingPath, newPath)
}

createLinks().then(() => console.log('links created')).catch(err => console.error(err))
