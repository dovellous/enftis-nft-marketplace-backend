import * as fs from 'fs';

let data: string = fs.readFileSync('./types/supabase.ts', 'utf-8');

const lines = data.split('\n');
let fileContents = lines.slice(8).join('\n');

fileContents = fileContents.replace(/\s\|\snull/g, "");
fileContents = fileContents.replace(/\?:\s/g, " : 0_|");
fileContents = fileContents.replace(/:\s/g, " : 1_|");
fileContents = fileContents.replace(/1_\|0_\|/g, "0_|");
fileContents = fileContents.replace(": 1_|{", "{");
fileContents = fileContents.replace(/:\s1_\|\{/g, "{");
fileContents = fileContents.replace(/\:\snumber(.*)/g, ": number',");
fileContents = fileContents.replace(/string(.*)/g, "string',");
fileContents = fileContents.replace(/boolean(.*)/g, "boolean',");
fileContents = fileContents.replace(/Json(.*)/g, "any',");
fileContents = fileContents.replace(/\[\](.*)/g, "[]',");
fileContents = fileContents.replace(/array(.*)/g, "array',");
fileContents = fileContents.replace(/0_\|"/g, "\"");
fileContents = fileContents.replace(/0_\|\[/g, "[");
fileContents = fileContents.replace(/1_\|"/g, "\"");
fileContents = fileContents.replace(/1_\|\[/g, "[");
fileContents = fileContents.replace(/:\s0_/g, ": '0_");
fileContents = fileContents.replace(/:\s1_/g, ": '1_");
fileContents = fileContents.replace(/\s{/g, ": {");
fileContents = fileContents.replace(/}/g, "},");
fileContents = fileContents.replace(/         : /g, "          ");
fileContents = fileContents.replace(/\,\,/g, ",");
fileContents = fileContents.replace(/"$/g, "\",");
fileContents = fileContents.replace(/"\]$/g, "\"],");
fileContents = fileContents.replace(/\[\]'\,/g, "[]");
fileContents = fileContents.replace(/_\|number/g, "_|number',");
fileContents = fileContents.replace(/"\n/g, "\",\n");
fileContents = fileContents.replace(/"\]\n/g, "\"],\n") + 'EOF';
fileContents = fileContents.replace(/\,\nEOF/g, "\n\n//END_TYPES");
fileContents = fileContents.replace(/\[_\sin\snever\]\s:\s'1_\|never/g, "foo: 'bar'");
fileContents = fileContents.replace(/\export\sinterface\sDatabase:\s/g, "export const Database = ");

fs.writeFile('./types/database-schema.ts', fileContents, 'utf8', (err: any) => {
    if (err) {
        console.log(`File error [ ./types/database-schema.ts ]`);
        console.error(err);
        return;
    }
    console.log(`File created [ ./types/database-schema.ts ]`);
});