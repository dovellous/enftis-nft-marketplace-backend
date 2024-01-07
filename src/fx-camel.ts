const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '/sbtx');
function toTitleCase(str:any) {
    return str
        .toLowerCase()
        .split('_')
        .map((word:any) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

fs.readdir(directoryPath, function (err: any, files: any) {
    if (err) {
        return console.log('Unable  to scan directory: ' + err);
    }

    // Iterate through each file in the directory
    files.forEach(function (file:any) {
        // Read the contents of the file
        const filePath = path.join(directoryPath, file);
        fs.readFile(filePath, 'utf8', function (err:any, data:any) {
            if (err) {
                return console.log('Unable to read file: ' + err);
            }

            // Look for async arrow functions with underscore case names and convert them to mael case
            const newData = data.replace(/async\s+(.*)\(/g, function (match:any, p1:any, p2:any) {
                console.log([p1, toTitleCase(p1)]);
                const newName = toTitleCase(p1);
                return 'async ' + newName + '(';
            });

            // Save the updated file
            fs.writeFile(filePath, newData, 'utf8', function (err:any) {
                if (err) {
                    return console.log('Unable to write file: ' + err);
                }
            });
        });
    });
});