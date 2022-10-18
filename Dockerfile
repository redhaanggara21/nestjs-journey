FROM node:16.14.2-alpine

# Assing variable env-variable to dotenv variable
ENV NODE_ENV=production
# Create app directory, this is in our container/in our image
WORKDIR /src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build

COPY --from=build /src/app/tsconfig*.json ./

COPY --from=build /src/app/migrations migrations

COPY --from=build /src/app/seeds seeds

COPY --from=build /src/app/data data

COPY --from=build /src/app/knexfile.ts ./

COPY --from=build /src/app/dist dist

EXPOSE 8080

CMD [ "npm", "run", "start:production" ]