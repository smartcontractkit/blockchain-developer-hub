import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPost = (pageDir) => {
  const fileContents = fs.readFileSync(path.join(`data/pages/${pageDir}`), 'utf8');
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export default getPost;
