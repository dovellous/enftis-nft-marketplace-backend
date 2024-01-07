import {generateCertificates as InitializeServerCertificates} from "../../utils/Cryptography";
import DatabaseManager from "../../utils/DatabaseManager";
import {Logger} from "../../utils/LoggerHelper";

const startServer = (app:any, port:any) => {
	
	/* MongoDB Database Connector */
	const MongoDBConnection = new DatabaseManager();
	
	try{
		
		// Connect DB
		MongoDBConnection.connect(startServer);
		
		Logger.log(`Database ready!`);
		
		// Generate server certificate if they don't exists
		InitializeServerCertificates();
		
	}catch (e) {
		
		Logger.error(`Error connecting DB`);
		
		startServer(app, port);
		
	} finally {
		
		try{
			
			app.listen(port, () => {
				
				Logger.log(`Server started. Listening on port ${port}`);
				
			});
			
		} catch (e) {
			
			Logger.error(`Error starting SERVER`);
			
			startServer(app, port);
			
		}
		
	}
	
}

module.exports = {startServer}
