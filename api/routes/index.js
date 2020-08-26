const pessoasRoutes = require("./pessoasRoute");
const turmasRoutes = require("./turmasRoute");
const niveisRoutes = require("./niveisRoute");

module.exports = app =>{
    app.use(pessoasRoutes,turmasRoutes,niveisRoutes);
}