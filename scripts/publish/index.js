import { exec } from "child_process"
import fs from "fs"

// eslint-disable-next-line no-undef
const tag = process.argv[2]
// eslint-disable-next-line no-undef
const tagNumber = process.argv[3]

async function bootsrap() {
  try {
    const packages = fs.readdirSync("./packages")
    packages.forEach((packageName) => {
      const packagePath = `./packages/${packageName}`
      const _tag = `${tag}${typeof tagNumber === "undefined" ? "" : `.${tagNumber}`}`
      exec(
        `npm publish ${packagePath} --access public --tag ${_tag}`,
        (err, stdout) => {
          if (err) {
            console.error(err)
            return
          }
          console.log(stdout)
        },
      )
    })
  } catch (error) {
    console.error(error)
  }
}

bootsrap()
