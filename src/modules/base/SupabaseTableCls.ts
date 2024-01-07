import { SupabaseClient, createClient } from '@supabase/supabase-js';

import { DbResult } from './DataTypes';

import * as dotenv from 'dotenv';

dotenv.config();

const SUPABASE_PROJECT_SUBDOMAIN: string = process.env.SUPABASE_PROJECT_SUBDOMAIN || '';

const SUPABASE_ANON_KEY: string = process.env.SUPABASE_ANON_KEY || '';

const SUPABASE_SERVICE_ROLE_KEY: string = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const SUPABASE_PROJECT_URL: string = `https://${SUPABASE_PROJECT_SUBDOMAIN}.supabase.co`;

console.log(":::::SUPABASE_PROJECT_URL:::::", SUPABASE_PROJECT_URL);

//const SUPABASE_JWT: string = process.env.SUPABASE_JWT || '';

export class SupabaseTableCls {

    supabaseInstance: SupabaseClient;

    supabaseAdminInstance: SupabaseClient;

    tableName: string = '';

    constructor() {

        this.supabaseInstance = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

        this.supabaseAdminInstance = createClient(SUPABASE_PROJECT_URL, SUPABASE_SERVICE_ROLE_KEY, {
            auth: {
                autoRefreshToken: false,
                persistSession: false
            }
        })

    }

    /*
    Read rows
    To read rows in tbl_mining_sessions, use the select method.
    */


    async readAllRows(): Promise<any> {
        const result: DbResult<any> = await this.supabaseInstance
            .from(this.tableName)
            .select('*');
        return result;
    }


    async readSpecificColumns(specifiedColumns: any): Promise<any> {
        const result: DbResult<any> = await this.supabaseInstance
            .from(this.tableName)
            .select(specifiedColumns);
        return result;
    }


    async readSpecificColumnsWithFiltering(specifiedColumns: any, filters: any): Promise<any> {
        let query = this.supabaseInstance
            .from(this.tableName)
            .select(specifiedColumns);

        query = this.withFiltering(query, filters);

        const result: DbResult<any> = await query;

        return result;

    }


    async readForeignTables(localArray: string[], foreignArray: any): Promise<any> {

        const result: DbResult<any> = await this.supabaseInstance
            .from(this.tableName)
            .select(`
                ${localArray.map((column: string) => `${column}`)}, 
                ${foreignArray.map((tableSet: any) => ` ${tableSet.joinTable}(${tableSet.columns.map((foreignColumn: string) => `'${foreignColumn}'`)})`)}
                `);

        return result;

    }


    async exe(localArray: string[], foreignArray: any, filters: any): Promise<any> {

        let query = this.supabaseInstance
            .from(this.tableName)
            .select(`
                ${localArray.map((column: string) => `${column}`)}, 
                ${foreignArray.map((tableSet: any) => ` ${tableSet.joinTable}(${tableSet.columns.map((foreignColumn: string) => `'${foreignColumn}'`)})`)}
                `);

        query = this.withFiltering(query, filters);

        const result: DbResult<any> = await query;

        return result;

    }


    async withPagination(): Promise<any> {
        const result: DbResult<any> = await this.supabaseInstance
            .from(this.tableName)
            .select('*')
            .range(0, 9);
        return result;
    }

    /*
    Filtering
    Supabase provides a wide range of filters.
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

        const result: DbResult<any> = await this.supabaseInstance
            .from(this.tableName)
            .insert(insertPayload)
            .select();
        return result;
    }

    async insertManyRows(batchData: any): Promise<any> {
        const result: DbResult<any> = await this.supabaseInstance
            .from(this.tableName)
            .insert(batchData)
            .select();
        return result;
    }

    async upsertMatchingRows(upsertPayload: any, columnValue: any, columnName?: string): Promise<any> {
        const result: DbResult<any> = await this.supabaseInstance
            .from(this.tableName)
            .upsert(upsertPayload)
            .select();
        return result;
    }

    /*
    Update rows
    update lets you update rows. update will match all rows by default. You can update specific rows using horizontal filters, e.g. eq, lt, and is.
    
    update will also return the replaced values for UPDATE.
    */


    async updateMatchingRows(updatePayload: any, columnValue: any, columnName: string): Promise<any> {
        const result: DbResult<any> = await this.supabaseInstance
            .from(this.tableName)
            .update(updatePayload)
            .eq(columnName, columnValue)
            .select();
        return result;
    }

    /*
    Delete rows
    delete lets you delete rows. delete will match all rows by default, so remember to specify your filters!
    */

    async deleteMatchingRows(columnName: string, columnValue: any): Promise<any> {
        const { error } = await this.supabaseInstance
            .from(this.tableName)
            .delete()
            .eq(columnName, columnValue);
        return { error };
    }

    /*
    Subscribe to changes
    Supabase provides realtime functionality and broadcasts database changes to authorized users depending on Row Level Security (RLS) policies.
    */


    async subscribeToAllEvents(callbackFunction: any): Promise<any> {
        const subscription: any = this.supabaseInstance.channel('custom-all-channel')
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
        const subscription: any = this.supabaseInstance.channel('custom-insert-channel')
            .on(
                'postgres_changes',
                { event: 'INSERT', schema: 'public', table: this.tableName },
                (payload: any) => {
                    typeof callbackFunction === 'function' && callbackFunction(payload)
                }
            )
            .subscribe();
        return subscription;
    }

    async subscribeToUpdates(callbackFunction: any): Promise<any> {
        const subscription: any = this.supabaseInstance.channel('custom-update-channel')
            .on(
                'postgres_changes',
                { event: 'UPDATE', schema: 'public', table: this.tableName },
                (payload: any) => {
                    typeof callbackFunction === 'function' && callbackFunction(payload)
                }
            )
            .subscribe();
        return subscription;
    }

    async subscribeToDeletes(callbackFunction: any): Promise<any> {
        const subscription: any = this.supabaseInstance.channel('custom-delete-channel')
            .on(
                'postgres_changes',
                { event: 'DELETE', schema: 'public', table: this.tableName },
                (payload: any) => {
                    typeof callbackFunction === 'function' && callbackFunction(payload)
                }
            )
            .subscribe();
        return subscription;
    }

    async subscribeToSpecificRows(callbackFunction: any): Promise<any> {
        const subscription: any = this.supabaseInstance.channel('custom-filter-channel')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: this.tableName, filter: 'column_name=eq.someValue' },
                (payload: any) => {
                    typeof callbackFunction === 'function' && callbackFunction(payload)
                }
            )
            .subscribe();
        return subscription;
    }

}
