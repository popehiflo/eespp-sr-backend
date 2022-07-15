# EESPP SR - BACKEND 🏫

## BACKEND - API REST 

### Create - Read - Update - Delete 🚀

- Users
- Careers
- Students

### Construido con 🛠️

- [MongoDB](https://www.mongodb.com/es) - Base de datos distribuida, basada en documentos y de uso general
- [Express](https://expressjs.com/es/) - Infraestructura web rápida, minimalista y flexible para Node.js
- [Mongoose](https://mongoosejs.com/) - Solución sencilla basada en esquemas para modelar los datos
- [NodeJS](https://nodejs.org/es/) - Entorno de ejecucion para JavaScript
- [nodemon](https://www.npmjs.com/package/nodemon) - Herramienta que reinicia automáticamente la app al detectar cambios
- [JWT](https://jwt.io/) - Permite decodificar, verificar y generar JWT

### Intalación 📌

- Clone el repositorio y dirijase a `cd /eespp-sr-backend`
- Entonces, instale las dependencias/paquetes con `npm install` o `yarn`.
  - Luego cree un archivo `.env`(tiene ejmeplo a .env.example) y declare `MONGO_DB_URI=<Your database uri>`
    - Nota: La api usa MongoDB y mongoose, debes escribir tu url de MongoDB, ejemplo: `mongodb://<Your hosted db>/<Your database>`
  - Luego ejecuta `npm run start:dev` o `yarn start:dev`.
- run para Producción:
  - Despues de clonar el repositorio, ejecuta el comando `npm run lint && npm run prettier && npm run buid` or `yarn lint && yarn prettier && yarn buid`
  - Luego ejecuta `npm start` or `yarn start`