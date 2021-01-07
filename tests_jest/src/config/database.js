module.exports = {
  host: '127.0.0.1',
  port: 3306,
  username:'root',
  password:null,
  database:'nodeauth',
  dialect:'postgres',
  operatorsAlises:false,
  loggin: false,
  define:{
    timestamps:true,
    underscored:true,
    underscoredAll:true,
  }
};
// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
