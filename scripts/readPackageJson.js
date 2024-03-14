import fs from "fs";

const getPackageJson = async (dir) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`${dir}/package.json`, "utf8", (err, data) => {
      if (data) {
        resolve(JSON.parse(data));
      }

      if (err) {
        reject(err);
      }
    });
  });
};

export default getPackageJson;
