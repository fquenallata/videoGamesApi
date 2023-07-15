require("dotenv").config();
const app = require("./src/app.js");
const { conn } = require("./src/db.js");
const PORT = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`server raised in port: http://localhost:${PORT}`); // eslint-disable-line no-console
  });
});
