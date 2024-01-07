import * as dotenv from 'dotenv';
import { emptyOrRows, getOffset } from '../..';

dotenv.config();

const { Sequelize, DataTypes, Model } = require('sequelize');

const MYSQL_HOST: string = process.env.MYSQL_HOST || 'localhost';

const MYSQL_PORT: number = parseInt(String(`${process.env.MYSQL_PORT}`)) || 3600;

const MYSQL_USER: string = process.env.MYSQL_USER || 'root';

const MYSQL_PASSWORD: string = process.env.MYSQL_PASSWORD || '';

const MYSQL_DATABASE: string = process.env.MYSQL_DATABASE || 'web3defi';

export class MySQLTableCls extends Model{

    mySQLInstance: any;

    tableName: string = '';

    constructor() {

        super();

        this.mySQLInstance = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
            host: MYSQL_HOST,
            dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
          });

          this.connect();

    }

    async connect(){
        
          try {
            await this.mySQLInstance.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }

    }

    async createTable(schemaName:string): Promise<any> {
        const db:any = this.mySQLInstance;
        db.schema.hasTable(schemaName).then(function(exists:boolean) {
            if (!exists) {
              return db.schema.createTable(schemaName, function(t:any) {
                t.increments('id').primary();
                t.string('first_name', 100);
                t.string('last_name', 100);
                t.text('bio');
              });
            }
          });

    }

    /*
    Read rows
    To read rows in tbl_mining_sessions, use the select method.
    */


    async readAllRows(): Promise<any> {
        // simple query
        return this.mySQLInstance
            .select()
            .from(this.tableName);

    }


    async readSpecificColumns(specifiedColumns: any): Promise<any> {
        // query database
        return this.mySQLInstance
            .column(specifiedColumns)
            .select()
            .from(this.tableName);
    }


    async readSpecificColumnsWithFiltering(specifiedColumns: any, filters: any): Promise<any> {
        return this.mySQLInstance
            .column(specifiedColumns)
            .select()
            .from(this.tableName);

    }


    async readForeignTables(localArray: string[], foreignArray: any): Promise<any> {

        const result: any = await this.mySQLInstance
            .from(this.tableName)
            .select(`
                ${localArray.map((column: string) => `${column}`)}, 
                ${foreignArray.map((tableSet: any) => ` ${tableSet.joinTable}(${tableSet.columns.map((foreignColumn: string) => `'${foreignColumn}'`)})`)}
                `);

        return result;

    }


    async exe(localArray: string[], foreignArray: any, filters: any): Promise<any> {

        let query = this.mySQLInstance
            .from(this.tableName)
            .select(`
                ${localArray.map((column: string) => `${column}`)}, 
                ${foreignArray.map((tableSet: any) => ` ${tableSet.joinTable}(${tableSet.columns.map((foreignColumn: string) => `'${foreignColumn}'`)})`)}
                `);

        query = this.withFiltering(query, filters);

        const result: any = await query;

        return result;

    }


    async withPagination(): Promise<any> {
        const result: any = await this.mySQLInstance
            .from(this.tableName)
            .select('*')
            .range(0, 9);
        return result;
    }

    /*
    Filtering
    MySQL provides a wide range of filters.
    */


    withFiltering(query: any, filters: any): any {

        // Filters
        if ('eq' in filters) { query = query.eq(filters.eq.column, filters.eq.value); } //'Equal to'
        if ('gt' in filters) { query = query.gt(filters.gt.column, filters.gt.value); } //'Greater than'
        if ('is' in filters) { query = query.is(filters.is.column, filters.is.value); } //'value'
        if ('in' in filters) { query = query.in(filters.in.column, filters.in.value); } //'array_column', ['Array', 'Values']
        if ('cs' in filters) { query = query.cs(filters.cs.column, filters.cs.value); } //'array_column', ['Array', 'Values']
        if ('cd' in filters) { query = query.cd(filters.cd.column, filters.cd.value); } //'array_column', ['Array', 'Values']
        if ('lt' in filters) { query = query.lt(filters.lt.column, filters.lt.value); } //'Less than'
        if ('gte' in filters) { query = query.gte(filters.gte.column, filters.gte.value); } //'Greater than or equal to'
        if ('lte' in filters) { query = query.lte(filters.lte.column, filters.lte.value); } //'Less than or equal to'
        if ('neq' in filters) { query = query.neq(filters.neq.column, filters.neq.value); } //'Not equal to'
        if ('like' in filters) { query = query.like(filters.like.column, filters.like.value); } //'%CaseSensitive%'
        if ('ilike' in filters) { query = query.ilike(filters.ilike.column, filters.ilike.value); } //'%CaseInsensitive%'
        if ('filter' in filters) { query = query.filter(filters.filter.columns, filters.filter.operator, filters.filter.value); }

        return query;

    }

    /*
    Insert rows
    insert lets you insert into your tables. You can also insert in bulk and do UPSERT.
    
    insert will also return the replaced values for UPSERT.
    */


    async insertARow(insertPayload: any): Promise<any> {

        return this.mySQLInstance(this.tableName)
            .returning('id')
            .insert(insertPayload);
    }

    async insertManyRows(batchData: any): Promise<any> {
        return this.mySQLInstance(this.tableName)
            .insert(batchData);
    }

    async upsertMatchingRows(upsertPayload: any): Promise<any> {
        return this.mySQLInstance(this.tableName)
            .insert(upsertPayload);
    }

    /*
    Update rows
    update lets you update rows. update will match all rows by default. You can update specific rows using horizontal filters, e.g. eq, lt, and is.
    
    update will also return the replaced values for UPDATE.
    */


    async updateMatchingRows(updatePayload: any, columnValue: any, columnName: string): Promise<any> {
        return this.mySQLInstance(this.tableName)
            .where('published_date', '<', 2000)
            .where({ id: 42 })
            .where(columnName, columnValue)
            .update(updatePayload);
    }

    /*
    Delete rows
    delete lets you delete rows. delete will match all rows by default, so remember to specify your filters!
    */

    async deleteMatchingRows(columnName: string, columnValue: any): Promise<any> {
        return this.mySQLInstance(this.tableName)
            .where(columnName, columnValue)
            .del();
    }

    /*
    Subscribe to changes
    MySQL provides realtime functionality and broadcasts database changes to authorized users depending on Row Level Security (RLS) policies.
    */


    async subscribeToAllEvents(callbackFunction: any): Promise<any> {
        const subscription: any = this.mySQLInstance.channel('custom-all-channel')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: this.tableName },
                (payload: any) => {
                    typeof callbackFunction === 'function' && callbackFunction(payload)
                }
            )
            .subscribe();
        return subscription;
    }

    async subscribeToInserts(callbackFunction: any): Promise<any> {
         
    }

    async subscribeToUpdates(callbackFunction: any): Promise<any> {
         
    }

    async subscribeToDeletes(callbackFunction: any): Promise<any> {
         
    }

    async subscribeToSpecificRows(callbackFunction: any): Promise<any> {
         
    }

}
