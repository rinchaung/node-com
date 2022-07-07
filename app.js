const express = require('express');
const bodyParser = require('body-parser');
const path   = require('path');
const exphbs = require('express-handlebars');

const app     = express();

app.engine('hbs', exphbs.engine({
    layoutsDir : 'views/layouts',
    defaultLayout : 'main-layouts.hbs'
}));

//View Engine 
app.set('view engine', 'hbs'); //global configuration value
app.set('views','views');

const adminData = require('./routes/admin');
const shopRouter  = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

//Admin Router
app.use('/admin',adminData.routes);

//Shop Router
app.use(shopRouter);

//Error Router
app.use((req, res, next) =>{
    res.status(404).render('404', { errorTitle : 'Error Page', errorCSS: true});
});

app.listen(3000, () =>{
    console.log('Server is running at port 3000!');
});