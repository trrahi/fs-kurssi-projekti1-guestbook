// Initialize Express app
const express = require("express")
const app = express()
// Fix static files not working
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/guestbook', (req, res) => {
    res.sendFile(__dirname + '/views/guestbook.html');
});

app.get('/newmessage', (req, res) => {
    res.sendFile(__dirname + '/views/newmessage.html');
});

app.get('/ajaxmessage', (req, res) => {
    res.sendFile(__dirname + '/views/ajaxmessage.html');
});
// Set up a 404 page
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
})

app.listen(8888, () => {
    console.log('Server is running on port 8888');
});
