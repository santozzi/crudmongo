import app from './app';
import { ExpressConfig,expressConf } from './config/express.config';
import { mongooseConnection } from './db/mongo.db';


async function main() {
  try {

    await mongooseConnection();
    //userSchema.createCollection();
    app.listen(expressConf.PORT_EXPRESS || 3001 , () => {
    console.log(`Server is running on http://localhost:${expressConf.PORT_EXPRESS}`);
    });
  } catch (error) {
    console.log(error);
    
  }
}
main();
