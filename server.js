const express = require('express');
const path = require('path');
const handlebars = require('express-handlbars');
const session = require('express-session');
const sequelize = require('sequelize');
const SequelizeStore = require('connect-sessions-sequelize')(session.Store);

const PORT = process.env.PORT || 3000;
const app = express();

const sess = {
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({ 
        db: sequelize,
    })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
});
