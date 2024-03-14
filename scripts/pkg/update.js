import fs from "fs";

const update = (dir, value) => {
  fs.writeFileSync(`${dir}/package.json`, JSON.stringify(value, null, 2));
};

export default update;
