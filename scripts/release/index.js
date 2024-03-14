import fs from "fs";
import getPkgWithDir from "../pkg/index";
import path from "path";
import semver from "semver";
import updatePkgWithDir from "../pkg/update";

// eslint-disable-next-line no-undef
const versionType = process.argv[2];

const getSemverType = () => {
  switch (versionType) {
    case "major":
      return "major";
    case "minor":
      return "minor";
    case "patch":
      return "patch";
    default:
      throw new Error("Invalid version type");
  }
};

const updatePackagesVersion = (packagesDir, newVersion) => {
  fs.readdir(packagesDir, { withFileTypes: true }, (err, data) => {
    if (err) {
      console.error("An error occurred while reading the folder:", err);
      return;
    }

    const projects = data.filter((project) => project.isDirectory());

    projects.forEach(async (project) => {
      const projectPath = `${packagesDir}/${project.name}`;
      const getProjectPkg = await getPkgWithDir(projectPath);
      getProjectPkg.version = newVersion;
      await updatePkgWithDir(projectPath, getProjectPkg);
    });
  });
};

async function bootsrap() {
  const type = getSemverType();
  // eslint-disable-next-line no-undef
  const rootDir = path.resolve(__dirname, "../../");
  const rootPkgDir = `${rootDir}/package.json`;

  try {
    const hasPkg = await fs.existsSync(rootPkgDir);
    if (!hasPkg) {
      throw new Error("Package.json file was not found in the root directory.");
    }

    const rootPkg = await getPkgWithDir(rootDir);
    const version = rootPkg.version;
    const newVersion = semver.inc(version, type);

    rootPkg.version = newVersion;

    updatePkgWithDir(rootDir, rootPkg);
    updatePackagesVersion(`${rootDir}/packages`, newVersion);

    console.log("Last version:", version);
  } catch (error) {
    console.error(error);
  }
}

bootsrap();
