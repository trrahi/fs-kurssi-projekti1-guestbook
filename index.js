let http = require("http");
let fs = require("fs");

const server = http.createServer(function(req, res) {
   

     if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        let html = fs.readFileSync('./views/index.html');
        res.write(html);
        } else if (req.url === "/guestbook"){
            res.writeHead(200, { "Content-Type": "text/html" });
            let html = fs.readFileSync('./views/guestbook.html');
            res.write(html);
        } else if (req.url === "/newmessage"){
            res.writeHead(200, { "Content-Type": "text/html" });
            let html = fs.readFileSync('./views/newmessage.html');
            res.write(html);
        } else if (req.url === "/ajaxmessage"){
            res.writeHead(200, { "Content-Type": "text/html" });
            let html = fs.readFileSync('./views/ajaxmessage.html');
            res.write(html);
        }
        res.end()
  })
  .listen(8000);
