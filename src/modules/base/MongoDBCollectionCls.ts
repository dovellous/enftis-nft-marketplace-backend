import { MongoDBChange, MongoDBHelper } from "../../utils/MongoDBHelper";
import { Snippets } from "../../utils/Snippets";
import { DbResult } from "./DataTypes";

export class MongoDBCollectionCls {

    modelName: string = '';

    collectionModel: any;

    collectionModelStream: any;

    constructor() {



    }

    setupModel(model: any) {

        this.collectionModel = model;

        this.collectionModelStream = model.watch();

    }

    /*
    Read rows
    To read rows in tbl_mining_sessions, use the select method.
    */


    async readAllRows(): Promise<any> {
        return await this.collectionModel.find();
    }


    async readSpecificColumns(specifiedColumns: any, columnName?: string, columnValue?: any): Promise<any> {
        const filter: any = Snippets.objects.getWhereClause(columnName, columnValue);
        return await this.collectionModel.findOne(filter);
    }


    async readWithFiltering(filter: any): Promise<any> {
        return await this.collectionModel.findOne(filter);
    }

    async readSpecificColumnsWithFiltering(specifiedColumns: any, columnName?: string, columnValue?: any): Promise<any> {
        const filter: any = Snippets.objects.getWhereClause(columnName, columnValue);
        return await this.collectionModel.findOne(filter);

    }


    async readForeignTables(localArray: string[], foreignArray: any): Promise<any> {

        return new Promise(() => { });

    }


    async exe(localArray: string[], foreignArray: any, filters: any): Promise<any> {

        let query = await this.collectionModel.find();

        query = this.withFiltering(query, filters);

        const result: DbResult<any> = await query.exec();

        return result;

    }


    async withPagination(): Promise<any> {
        return new Promise(() => { });
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

        await this.collectionModel.create(insertPayload);

        return insertPayload;

    }

    async insertManyRows(batchData: any): Promise<any> {

        await this.collectionModel.create(batchData);

        return batchData;

    }

    async upsertMatchingRows(upsertPayload: any, columnValue: any, columnName: string): Promise<any> {
        const filter: any = Snippets.objects.getWhereClause(columnName, columnValue);
        await this.collectionModel.findOneAndUpdate(filter, upsertPayload);
    }

    /*
    Update rows
    update lets you update rows. update will match all rows by default. You can update specific rows using horizontal filters, e.g. eq, lt, and is.
    
    update will also return the replaced values for UPDATE.
    */


    async updateMatchingRows(updatePayload: any, columnValue: any, columnName: string): Promise<any> {
        const filter: any = Snippets.objects.getWhereClause(columnName, columnValue);
        await this.collectionModel.updateOne(filter, updatePayload);
    }

    /*
    Delete rows
    delete lets you delete rows. delete will match all rows by default, so remember to specify your filters!
    */

    async deleteMatchingRows(columnName: string, columnValue: any): Promise<any> {
        const filter: any = Snippets.objects.getWhereClause(columnName, columnValue);
        await this.collectionModel.deleteOne(filter);
    }

    /*
    Subscribe to changes
    Supabase provides realtime functionality and broadcasts database changes to authorized users depending on Row Level Security (RLS) policies.
    */


    async subscribeToAllEvents(callbackFunction: any): Promise<any> {

        this.collectionModel?.on('change', (payload: MongoDBChange) => {

            typeof callbackFunction === 'function' && callbackFunction(payload);

            MongoDBHelper.logChange(this.modelName, 'insert', payload);

        });

    }

    async subscribeToInserts(callbackFunction: any): Promise<any> {

        this.collectionModel.on('change', (payload: MongoDBChange) => {

            payload.operationType === 'insert' && typeof callbackFunction === 'function' && callbackFunction(payload);

        });

    }

    async subscribeToUpdates(callbackFunction: any): Promise<any> {

        this.collectionModel.on('change', (payload: MongoDBChange) => {

            payload.operationType === 'update' && typeof callbackFunction === 'function' && callbackFunction(payload);

        });

    }

    async subscribeToDeletes(callbackFunction: any): Promise<any> {

        this.collectionModel.on('change', (payload: MongoDBChange) => {

            payload.operationType === 'delete' && typeof callbackFunction === 'function' && callbackFunction(payload);

        });

    }

    async subscribeToSpecificRows(column: string, value: any, callbackFunction: any): Promise<any> {

        this.collectionModel.on('change', (payload: MongoDBChange) => {

            payload.operationType === 'delete' && typeof callbackFunction === 'function' && callbackFunction(payload);

        });

    }

}
