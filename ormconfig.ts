const settings = require("./config/settings/default.ts");

module.exports = {
    type: "postgres",
    migrations: ["migrations/*.ts"],
    url: process.env.DATABASE_URL || settings.databaseUrl,
    cli: {
        "migrationsDir": "migrations"
    },
    database: "tsikTok"
};