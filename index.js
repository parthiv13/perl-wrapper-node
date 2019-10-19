const express = require('express'),
    util = require('util'),
    spawn = require('child_process').spawn,
    carrier = require('carrier'),
    pl_proc = spawn('perl', ['hello.pl']),
    app = express();

app.get('', (req, res) => {
    res.send("yo")
})

app.get('/run', (req, res) => {
    res.send('ran the script')
})

app.listen(8080, () => {
    console.log('http://localhost:8080');
    my_carrier = carrier.carry(pl_proc.stdout);

    my_carrier.on('line', (line) => {
        console.log('line: ' + line)
    })
})