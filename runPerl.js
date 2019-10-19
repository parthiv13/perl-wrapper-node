const util = require('util'),
    spawn = require('child_process').spawn,
    carrier = require('carrier'),
    pl_proc = spawn('perl', ['./hello.pl']),

my_carrier = carrier.carry(pl_proc.stdout);

my_carrier.on('line', (line) => {
    console.log('line: ' + line)
})