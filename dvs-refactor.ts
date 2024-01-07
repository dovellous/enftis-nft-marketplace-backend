
import { Database } from './types/database-schema';
import * as fs from 'fs';
import * as path from 'path';

function toCamelCase(str: string): string {
    return str.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
}
const tempPath: string = './src/app/hmvc/v1/template/';

const tmpController0: string = `${tempPath}____MODEL_ALL_CAMEL_CASE____Controller.ts`;
const tmpMiddleware0: string = `${tempPath}____MODEL_ALL_CAMEL_CASE____Middleware.ts`;
const tmpRouter0: string = `${tempPath}____MODEL_ALL_CAMEL_CASE____Router.ts`;

const _sDTO: string = `${tempPath}models/____MODEL_ALL_CAMEL_CASE____DTO.ts`;
const _sFBC: string = `${tempPath}models/____MODEL_ALL_CAMEL_CASE____FirebaseCls.ts`;
const _sMGO: string = `${tempPath}models/____MODEL_ALL_CAMEL_CASE____MongoDBCls.ts`;
const _sMYS: string = `${tempPath}models/____MODEL_ALL_CAMEL_CASE____MySQLDBCls.ts`;
const _sSBC: string = `${tempPath}models/____MODEL_ALL_CAMEL_CASE____SupabaseCls.ts`;
const _sTYP: string = `${tempPath}models/____MODEL_ALL_CAMEL_CASE____TypesDefinition.ts`;

async function main() {

    const databaseTables: any = Database.public.Tables;

    for (const tableName in databaseTables) {

        const _underscore: string = tableName.replace('tbl_', '').toLowerCase();

        const _hyphenated: string = _underscore.replace(/_/g, '-');

        const _dotCase: string = _underscore.replace(/_/g, '.');

        const _camelCase: string = toCamelCase(_underscore);

        const _allCamelCase: string = _camelCase.substr(0, 1).toUpperCase() + _camelCase.substr(1);

        console.log({
            _underscore, _hyphenated, _allCamelCase, _camelCase
        })

        const templatePath: string = `./src/app/hmvc/v1/${_hyphenated}/`;

        // Paths for module destination
        const modulePath: string = `./src/app/hmvc/v1/${_hyphenated}/models/${_allCamelCase}`;

        const _mDTO: string = `${modulePath}DTO.ts`;
        const _mFBC: string = `${modulePath}FirebaseCls.ts`;
        const _mMGO: string = `${modulePath}MongoDBCls.ts`;
        const _mMYS: string = `${modulePath}MySQLDBCls.ts`;
        const _mSBC: string = `${modulePath}SupabaseCls.ts`;
        const _mTYP: string = `${modulePath}TypesDefinition.ts`;

        //

        const templateController: string = `${templatePath}${_allCamelCase}Controller.ts`;
        const templateMiddleware: string = `${templatePath}${_allCamelCase}Middleware.ts`;
        const templateRouter: string = `${templatePath}${_allCamelCase}Router.ts`;
        
        let _uuid_key: string = '____uuiKey____';

        for (const col in databaseTables[tableName]["Insert"]) {

            if (col.includes('uuid')) {
                _uuid_key = col;
            }

        }

        let _col_def: string = '';
        let _interface: string = '';
        let _schema: string = '';

        let _properties: string = '';
        let _data: string = '';
        let _constructor_args: Array<string> = [];
        let _constructor_assignment: string = '';
        let _constructor_string: string = '';
        let _data_vars: Array<string> = [];
        
        let _insert_params: string = '';
        let _update_params: string = '';

        for (const col in databaseTables[tableName]["Insert"]) {

            const _colValue: any = databaseTables[tableName]["Insert"];

            const _colCamelCase: string = toCamelCase(col);

            const _colAllCamelCase: string = _colCamelCase.substr(0, 1).toUpperCase() + _colCamelCase.substr(1);

            console.log(_colValue, col, _colValue[col]);

            const isRequired: boolean = String(`${_colValue[col]}`).includes("1_|");
            
            let _colValueRequiredValue: Array<any> = String(`${_colValue[col]}`).split("|");

            _interface += String(`\t${col}${isRequired ? '?' : ''} : ${_colValueRequiredValue[1].substr(0, 1) + _colValueRequiredValue[1].substr(1)};\n\t`);

            _schema += String(`\t${col}: {\n         type: ${String(_colValueRequiredValue[1].substr(0, 1).toUpperCase() + _colValueRequiredValue[1].substr(1)).replace('Any','Object')},\n         required: ${isRequired ? 'true' : 'false'},\n         trim: true\n\t\t},\n\t`);

            if (col === "_id") {
                continue;
            }

            _col_def += String(`
            // Begin column ${_colAllCamelCase}

            /*
             * Retrieves the value of the column ${col} from the database
             *
             @Column:   ${col}
             @Required: ${isRequired ? 'true' : 'false'}
             @Type:     ${_colValueRequiredValue[1]}
             @Return:   ${_colValueRequiredValue[1]} value, probably all records with only the ${col} column values
             *
             */

            async get${_colAllCamelCase}(): Promise<any> {

                try {

                    const result: any = this.readSpecificColumns(['${col}']);
                        
                    Promise.resolve(result);

                } catch (error: any ) {

                    Promise.reject(error);

                }

            }

            /*
             * Retrieves the value of the column ${col} from the database base on the filters specified
             *
             @Column:   ${col}
             @Required: ${isRequired ? 'true' : 'false'}
             @Type:     ${_colValueRequiredValue[1]}
             @Return:   ${_colValueRequiredValue[1]} ${col} column values, depending on the filters
             *
             */

            async get${_colAllCamelCase}WithFilters(filters: any): Promise<any> {

                try {

                    const result: any = this.readSpecificColumnsWithFiltering(['${col}'], filters);

                    Promise.resolve(result);

                } catch (error: any ) {

                    Promise.reject(error);

                }

            }

            /*
             * Updates the value of the column ${col} in the database
             *
             @Column:   ${col}
             @Required: ${isRequired ? 'true' : 'false'}
             @Type:     ${_colValueRequiredValue[1]}
             @Return:   Updated data
             *
             */

            async update${_colAllCamelCase}(value:${_colValueRequiredValue[1]}, uuid: string): Promise<any> {

                try {

                    const result: any = this.updateMatchingRows({ ${col}: value }, uuid, '${_uuid_key}');

                    Promise.resolve(result);

                } catch (error: any ) {

                    Promise.reject(error);

                }

            }

            // End column ${_colAllCamelCase}
            `);

            _properties += String(`\n\t${col}: ${_colValueRequiredValue[1]};`);

            _data += String(`\n\t\t${col}: ____MODEL_CAMEL_CASE____Data.${col},`);

            _constructor_args.push(`\n\t_${col}: ${_colValueRequiredValue[1]}`);

            _constructor_assignment += String(`\n\tthis.${col} = _${col};`);

            _constructor_string += String(`\n\t\t${col}='\${this.${col}\}'; `);

            _data_vars.push(`\n\t\tdata.${col}`);

            _insert_params += String(`\n\t\t\t\t${col}: payload.${col},`);
            _update_params += String(`\n\t\t\t\tif('${col}' in payload){ ____MODEL_ALL_CAMEL_CASE____Data.${col} = payload.${col}; }`);

        }

        // Create dir: templatePath
        fs.mkdirSync(templatePath, { recursive: true });
        
        //Begin Controller

        let fileContents: string = fs.readFileSync(tmpController0, 'utf-8');

        fileContents = fileContents.replace(/\/\/____INSERT_PARAMS_OJECT____/g, _insert_params);
        fileContents = fileContents.replace(/\/\/____UPDATE_PARAMS_OJECT____/g, _update_params);

        fileContents = fileContents.replace(/____MODEL_CAMEL_CASE____/g, _camelCase);
        fileContents = fileContents.replace(/____MODEL_ALL_CAMEL_CASE____/g, _allCamelCase);
        fileContents = fileContents.replace(/____MODEL_ALL_HYPHENATED_CASE____/g, _hyphenated);
        fileContents = fileContents.replace(/____MODEL_ALL_UNDERSCORE_CASE____/g, _underscore);
        fileContents = fileContents.replace(/____UUID_KEY____/g, _uuid_key);

        fs.writeFile(templateController, fileContents, 'utf8', (err: any) => {
            if (err) {
                console.log(`File error [ ${templateRouter} ]`);
                console.error(err);
                return;
            }
            console.log(`File created [ ${templateRouter} ]`);
        });
        //End controller

        //Begin Middleware

        fileContents = fs.readFileSync(tmpMiddleware0, 'utf-8');

        fileContents = fileContents.replace(/____MODEL_CAMEL_CASE____/g, _camelCase);
        fileContents = fileContents.replace(/____MODEL_ALL_CAMEL_CASE____/g, _allCamelCase);
        fileContents = fileContents.replace(/____MODEL_ALL_HYPHENATED_CASE____/g, _hyphenated);
        fileContents = fileContents.replace(/____MODEL_ALL_UNDERSCORE_CASE____/g, _underscore);
        fileContents = fileContents.replace(/____UUID_KEY____/g, _uuid_key);

        fs.writeFile(templateMiddleware, fileContents, 'utf8', (err: any) => {
            if (err) {
                console.log(`File error [ ${templateRouter} ]`);
                console.error(err);
                return;
            }
            console.log(`File created [ ${templateRouter} ]`);
        });
        //End Middleware

        //Begin Router

        fileContents = fs.readFileSync(tmpRouter0, 'utf-8');

        fileContents = fileContents.replace(/____MODEL_CAMEL_CASE____/g, _camelCase);
        fileContents = fileContents.replace(/____MODEL_ALL_CAMEL_CASE____/g, _allCamelCase);
        fileContents = fileContents.replace(/____MODEL_ALL_HYPHENATED_CASE____/g, _hyphenated);
        fileContents = fileContents.replace(/____MODEL_ALL_UNDERSCORE_CASE____/g, _underscore);
        fileContents = fileContents.replace(/____UUID_KEY____/g, _uuid_key);

        fs.writeFile(templateRouter, fileContents, 'utf8', (err:any) => {
            if (err) {
                console.log(`File error [ ${templateRouter} ]`);
                console.error(err);
                return;
            }
            console.log(`File created [ ${templateRouter} ]`);
        });
        //End Router

        // Models
        // Create dir: templatePath
        fs.mkdirSync(`./src/app/hmvc/v1/${_hyphenated}/models`, { recursive: true });
        /*

        const _mDTO: string = `${modulePath}DTO.ts`;
        const _mFBC: string = `${modulePath}FirebaseCls.ts`;
        const _mMGO: string = `${modulePath}MongoDBCls.ts`;
        const _mMYS: string = `${modulePath}MySQLDBCls.ts`;
        const _mSBC: string = `${modulePath}SupabaseCls.ts`;
        const _mTYP: string = `${modulePath}TypesDefinition.ts`;

        */

        const _tableName: any = _allCamelCase;

        //Begin Supabase

        fileContents = fs.readFileSync(_sSBC, 'utf-8');

        fileContents = fileContents.replace(/\/\/____TBL_NAME____/g, _tableName);

        fileContents = fileContents.replace(/\/\/____COL_DEF____/g, _col_def);

        fileContents = fileContents.replace(/\/\/____SCHEMA____/g, _schema);

        fileContents = fileContents.replace(/\/\/____INTERFACE____/g, _interface);

        fileContents = fileContents.replace(/            /g, '\t\t');

        fileContents = fileContents.replace(/____MODEL_DOT_CASE____/g, _dotCase);
        fileContents = fileContents.replace(/____MODEL_CAMEL_CASE____/g, _camelCase);
        fileContents = fileContents.replace(/____MODEL_ALL_CAMEL_CASE____/g, _allCamelCase);
        fileContents = fileContents.replace(/____MODEL_ALL_HYPHENATED_CASE____/g, _hyphenated);
        fileContents = fileContents.replace(/____MODEL_ALL_UNDERSCORE_CASE____/g, _underscore);
        fileContents = fileContents.replace(/____UUID_KEY____/g, _uuid_key);

        fs.writeFile(_mSBC, fileContents, 'utf8', (err: any) => {
            if (err) {
                console.log(`File error [ ${_mSBC} ]`);
                console.error(err);
                return;
            }
            console.log(`File created [ ${_mSBC} ]`);
        });
        //End Supabase

        //Begin MongoDB

        fileContents = fs.readFileSync(_sMGO, 'utf-8');

        fileContents = fileContents.replace(/\/\/____TBL_NAME____/g, _tableName);

        fileContents = fileContents.replace(/\/\/____COL_DEF____/g, _col_def);

        fileContents = fileContents.replace(/\/\/____SCHEMA____/g, _schema);

        fileContents = fileContents.replace(/\/\/____INTERFACE____/g, _interface);

        fileContents = fileContents.replace(/            /g, '\t\t');

        fileContents = fileContents.replace(/____MODEL_DOT_CASE____/g, _dotCase);
        fileContents = fileContents.replace(/____MODEL_CAMEL_CASE____/g, _camelCase);
        fileContents = fileContents.replace(/____MODEL_ALL_CAMEL_CASE____/g, _allCamelCase);
        fileContents = fileContents.replace(/____MODEL_ALL_HYPHENATED_CASE____/g, _hyphenated);
        fileContents = fileContents.replace(/____MODEL_ALL_UNDERSCORE_CASE____/g, _underscore);
        fileContents = fileContents.replace(/____UUID_KEY____/g, _uuid_key);

        fs.writeFile(_mMGO, fileContents, 'utf8', (err: any) => {
            if (err) {
                console.log(`File error [ ${_mMGO} ]`);
                console.error(err);
                return;
            }
            console.log(`File created [ ${_mMGO} ]`);
        });
        //End MongoDB


        //Begin Firebase

        fileContents = fs.readFileSync(_sFBC, 'utf-8');

        fileContents = fileContents.replace(/\/\/____PROPERTIES____/g, `\n${_properties}\n`);

        fileContents = fileContents.replace(/\/\/____DATA____/g, _data);

        fileContents = fileContents.replace(/\/\/____COLLECTION_CONSTRUCTOR_ARGS____/g, _constructor_args.join(', '));

        fileContents = fileContents.replace(/\/\/____COLLECTION_CONSTRUCTOR_VAR_ASSIGNMENT____/g, _constructor_assignment);

        fileContents = fileContents.replace(/\/\/____COLLECTION_CONSTRUCTOR_VAR_TO_STRING____/g, _constructor_string);

        fileContents = fileContents.replace(/\/\/____COLLECTION_DATA_VARS____/g, _data_vars.join(', '));

        fileContents = fileContents.replace(/\/\/____COL_DEF____/g, _col_def);

        fileContents = fileContents.replace(/\/\/____SCHEMA____/g, _schema);

        fileContents = fileContents.replace(/\/\/____INTERFACE____/g, _interface);

        fileContents = fileContents.replace(/            /g, '\t\t');

        fileContents = fileContents.replace(/____MODEL_DOT_CASE____/g, _dotCase);
        fileContents = fileContents.replace(/____MODEL_CAMEL_CASE____/g, _camelCase);
        fileContents = fileContents.replace(/____MODEL_ALL_CAMEL_CASE____/g, _allCamelCase);
        fileContents = fileContents.replace(/____MODEL_ALL_HYPHENATED_CASE____/g, _hyphenated);
        fileContents = fileContents.replace(/____MODEL_ALL_UNDERSCORE_CASE____/g, _underscore);
        fileContents = fileContents.replace(/____UUID_KEY____/g, _uuid_key);

        fs.writeFile(_mFBC, fileContents, 'utf8', (err: any) => {
            if (err) {
                console.log(`File error [ ${_mFBC} ]`);
                console.error(err);
                return;
            }
            console.log(`File created [ ${_mFBC} ]`);
        });
        //End Firebase


        //Begin MySQL

        fileContents = fs.readFileSync(_sMYS, 'utf-8');

        fileContents = fileContents.replace(/____TBL_NAME____/g, _tableName);

        fileContents = fileContents.replace(/\/\/____COL_DEF____/g, _col_def);

        fileContents = fileContents.replace(/\/\/____SCHEMA____/g, _schema);

        fileContents = fileContents.replace(/\/\/____INTERFACE____/g, _interface);

        fileContents = fileContents.replace(/            /g, '\t\t');

        fileContents = fileContents.replace(/____MODEL_DOT_CASE____/g, _dotCase);
        fileContents = fileContents.replace(/____MODEL_CAMEL_CASE____/g, _camelCase);
        fileContents = fileContents.replace(/____MODEL_ALL_CAMEL_CASE____/g, _allCamelCase);
        fileContents = fileContents.replace(/____MODEL_ALL_HYPHENATED_CASE____/g, _hyphenated);
        fileContents = fileContents.replace(/____MODEL_ALL_UNDERSCORE_CASE____/g, _underscore);
        fileContents = fileContents.replace(/____UUID_KEY____/g, _uuid_key);

        fs.writeFile(_mMYS, fileContents, 'utf8', (err: any) => {
            if (err) {
                console.log(`File error [ ${_mMYS} ]`);
                console.error(err);
                return;
            }
            console.log(`File created [ ${_mMYS} ]`);
        });
        //End MySQL

    }

}

main();


