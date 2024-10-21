import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL!, {
  models: [__dirname + "/../models/**/*.ts"],
  logging: false,
  dialectOptions: {
    ssl: {
      require: true, // Esto asegura que SSL sea requerido
      rejectUnauthorized: false, // Esto evita que rechace certificados autofirmados (solo usar si es necesario)
    },
  },
});

export default db;
