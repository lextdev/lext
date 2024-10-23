import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';

const PACKAGES_DIR = path.join(process.cwd(), 'packages');
const EXAMPLE_DIR = path.join(process.cwd(), 'scripts', 'example');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askPackageName(): Promise<string> {
  return new Promise((resolve) => {
    rl.question('Package name: ', (answer) => {
      resolve(answer.trim());
    });
  });
}

function copyDirectory(src: string, dest: string) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function createPackage() {
  const packageName = await askPackageName();
  const packagePath = path.join(PACKAGES_DIR, packageName);

  if (fs.existsSync(packagePath)) {
    console.error(`Error: Package '${packageName}' already exists.`);
    rl.close();
    return;
  }

  if (!fs.existsSync(EXAMPLE_DIR)) {
    console.error(`Error: Example directory '${EXAMPLE_DIR}' not found.`);
    rl.close();
    return;
  }

  try {
    copyDirectory(EXAMPLE_DIR, packagePath);
    console.log(`Package '${packageName}' created successfully.`);
  } catch (error) {
    console.error('An error occurred while creating the package:', error);
  }

  rl.close();
}

createPackage();
