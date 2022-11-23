const path = require('path');
const cors = require('cors');
const route = require('../src/routes');
const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const graphqlSchema = require('./app/graphql/schema');
const graphqlResolvers = require('./app/graphql/resolvers');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const db = require('./config/db');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'public/')));

app.use(cors({origin: true}));

// HTTP Logger
app.use(morgan('combined'));

// Template Engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// express-graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
  }),
);

// Connect to DB
db.connect();

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

// Route Init
route(app);

app.listen(port, (error) => {
  console.log(`App listening at http://localhost:${port}`);
});
