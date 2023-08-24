# rastreador
Sistema de rastreamento de veículos
## Setup 
❯ sudo npm install -g @nestjs/cli
❯ nest new nestjs
❯ npm run start:dev
❯ docker-compose up
❯ docker compose exec app bash

## Commands NEST
node ➜ ~/app (master) $ npm install @prisma/client
node ➜ ~/app (master) $ npx prisma init
node ➜ ~/app (master) $ npx prisma generate
node ➜ ~/app (master) $ npx nest generate module prisma
node ➜ ~/app (master) $ npx nest generate resource
node ➜ ~/app (master) $ npx prisma studio
node ➜ ~/app (master) $ npm install @nestjs/config
node ➜ ~/app (master) $ npx nest generate module maps
node ➜ ~/app (master) $ npx nest generate controller maps/places
node ➜ ~/app (master) $ npx nest generate service maps/places
node ➜ ~/app (master) $ npx nest generate controller maps/directions
node ➜ ~/app (master) $ npx nest generate service maps/directions
node ➜ ~/app (master) $ npx nest generate service routes/routes-driver
node ➜ ~/app (master) $ npx prisma generate
## Setup Google
node ➜ ~/app (master) $ npm install @googlemaps/google-maps-services-js
