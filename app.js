/*first create a server and tell it to
 start listening on a certain port*/

// require a library called http to start the server
const http = require('http')

// to read html file
const fs = require('fs')

//create a variable that tells our code what port we will be listening to
const port = 3000

// create server function takes a single function
// that has two parameters which is the request and response parameters
const server = http.createServer(function(req, res) {
    // to render html file
    res.writeHead(200, { 'Content-Type': 'text/html' })
        // call read file function
    fs.readFile('index.html', function(error, data) {
            if (error) {
                res.writeHead(404)
                res.write('Error: File Not Found')
            } else {
                res.write(data)
            }
        })
        // end response
    res.end()
})

// set up server so it will listen on the port that we want it to
server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})