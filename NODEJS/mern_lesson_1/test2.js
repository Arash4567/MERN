const fs = require('fs');
let erkak = '';
let ayol = '';
fs.readFile('./pupil.txt', 'utf-8', (err, peoples) => {
    peoples.split(",").forEach(
        (inson) => {
            let kk = inson.split(" ");
            if (kk[1] === "erkak") {
                erkak += kk[0]
            } else ayol += kk[0];
        }
    );
    fs.writeFileSync('./erkak.txt', erkak);
    fs.writeFileSync('./ayol.txt', ayol);
});
