import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getAllPostsData(dir) {
  const files = fs.readdirSync(path.join(`data/pages/${dir}`));
  const allPostsData = files.map((fileName) => {
    const fileContents = fs.readFileSync(path.join(`data/pages/${dir}/${fileName}`), 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: fileName.split('.')[0],
      data,
    };
  });

  return allPostsData;
}

export default getAllPostsData;
