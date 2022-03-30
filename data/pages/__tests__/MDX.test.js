import fs from 'fs';
import path from 'path';

describe('MDX content', () => {
  const blockchain101files = fs.readdirSync(path.join(`data/pages/blockchain101`));
  const files = ['ship.md', ...blockchain101files.map((filename) => `blockchain101/${filename}`)];

  test.each(files)(`%s does not have a h1`, (file) => {
    const filePath = path.join(`data/pages/${file}`);
    const content = fs.readFileSync(filePath, 'utf8');

    const h1Regex = /<h1>.*<\/h1>/g;
    const markdownH1Regex = /^#[^#].*/gm;

    expect(content).not.toMatch(h1Regex);
    expect(content).not.toMatch(markdownH1Regex);
  });
});
