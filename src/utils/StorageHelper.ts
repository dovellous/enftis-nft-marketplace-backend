const NodeStorage = require('node-storage');

// this will synchronously create storage file and any necessary directories
// or just load an existing file
const store = new NodeStorage('../storage/data.json');

const getItem = (key:string) => {

	return store.get(key);

}

const setItem = (key:string, value:any) => {
	
	store.put(key, value);
	
}

const delItem = (key:string, value:any) => {
	
	store.remove(key, value);
	
}

export {store, setItem, getItem, delItem}
