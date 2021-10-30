import moongose from "mongoose";
const dbconnection = async () => {
  try {
    await moongose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB: ON");
  } catch (e) {
    console.log("Error connecting to MongoDB: \n" + e);
  }
};
export default { dbconnection };