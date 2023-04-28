# TO DO APPLICATION
TOOLS: EXPRESS, MYSQL, SEQUELISE,

### TO RUN THE APPLICATION
1. Set up MYSQL with:
```
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "anthonyJ5",
  DB: "app_academy",
  dialet: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
```

2. Set up the JWT_SECRET:
```
JWT = anyrandomstring
```
3. then run:
```
npm start
```
