export default {
  PORT: process.env.PORT || 8080,
  fileSystem: {
    path: "./DB",
  },
  mongoLocal: {
    client: "mongodb",
    cnxStr: "mongodb://localhost:27017/ecommerce",
  },
  mongoRemote: {
    client: "mongodb",
    cnxStr: "mongodb+srv://coderdesafio:coderdesafio@cluster0.jvssboo.mongodb.net/ecommerce",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // serverSelectionTimeoutMS: 5000,
    },
  },  
sqlite3: {
  client: "sqlite3",
  connection: {
      filename: `./DB/ecommerce.sqlite`
   },
  useNullAsDefault: true
 }
}



