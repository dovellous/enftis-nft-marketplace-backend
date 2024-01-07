import * as fs from 'fs';
import * as path from 'path';

const directoryPath = './src/sbt'; // replace with your directory path
const startTag = '<start>'; // replace with your start tag
const endTag = '<end>'; // replace with your end tag

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            const regex = new RegExp(`_Cls_`, 'gs');
            if (regex.test(data)) {
                const classNameText = getClassNameText(data);
                const newData = data.replace(regex, classNameText);

                const newFilePath = path.join(directoryPath, `${classNameText}.ts`);
                fs.rename(filePath, newFilePath, (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log(`File ${file} processed successfully.`);
                });

                fs.writeFile(newFilePath, newData, 'utf8', (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log(`File ${newFilePath} saved successfully.`);
                });
            }
        });
    });
});

function getClassNameText(data: string): string {
    const regex = new RegExp(`${startTag}(.*?)${endTag}`, 'gs');
    const match = regex.exec(data);
    if (match) {
        const className = match[1].replace(/_/g, ' ');
        const classNameText = className
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
        return classNameText;
    } else {
        throw new Error('Class name not found.');
    }
}
