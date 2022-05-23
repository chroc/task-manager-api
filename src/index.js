const app = require('./app');
const port = process.env.PORT;

// Run Server
app.listen(port, () => {
    console.log('Server is up on port ' + port);
});