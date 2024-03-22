// Initialize Express app and dependencies
const express = require("express")
const app = express()
// Assign the public directory accessible to the browser using the express.static() middleware
app.use(express.static('public'));

// Set EJS as the view engine
app.set("view engine", "ejs")



app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/views/index.html');
    res.render("index")
});

app.get('/guestbook', (req, res) => {
    // res.sendFile(__dirname + '/views/guestbook.html');
    res.render("guestbook")
});

app.get('/newmessage', (req, res) => {
    // res.sendFile(__dirname + '/views/newmessage.html');
    res.render("newmessage")
});

app.get('/ajaxmessage', (req, res) => {
    // res.sendFile(__dirname + '/views/ajaxmessage.html');
    res.render("ajaxmessage")
});
// Set up a 404 page
app.use((req, res) => {
    // res.status(404).sendFile(__dirname + '/views/404.html');
    res.render("404")
})

app.listen(8888, () => {
    console.log('Server is running on port 8888');
});
