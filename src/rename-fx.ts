import * as fs from 'fs';
import * as path from 'path';

const folderPath = './src/sbt'; // replace with your folder path
const startTag = '<delete>'; // replace with your start tag
const endTag = '</delete>'; // replace with your end tag

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      const regex = new RegExp(`${startTag}(.*?)${endTag}`, 'gs');
      const newData = data.replace(regex, (match, p1) => {
        return `}\r\n\r\n// End class`;
      });

      fs.writeFile(filePath, newData, 'utf8', (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`File ${file} processed successfully.`);
      });
    });
  });
});