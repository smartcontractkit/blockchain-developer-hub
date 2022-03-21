import fs from 'fs';
import path from 'path';

const getPaths = (dir) => {
  const slugs = fs.readdirSync(path.join(`data/pages/${dir}`));
  return slugs.map((slug) => slug.split('.')[0]);
};

export default getPaths;
