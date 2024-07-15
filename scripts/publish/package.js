import { exec } from "child_process"
import fs from "fs"

// eslint-disable-next-line no-undef
const tag = process.argv[2]

async function bootsrap() {
  try {
    const packages = fs.readdirSync("./packages")
    const spTag = tag.split(":")
    packages.forEach((packageName) => {
      if (spTag[0] !== packageName) {
        return
      }
      const packagePath = `./packages/${packageName}`

      exec(
        `npm publish ${packagePath} --access public --tag ${spTag[1]}`,
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
