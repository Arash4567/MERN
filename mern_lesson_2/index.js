const fs = require('fs');

let boys = '';
let girls = '';
fs.readFile("./pupilsdfsdf.txt", "utf-8", (err, pupils) => {
    // if (err) return console.log(`Fileni o'qishda xatolik yuz berdi!: ${err}`);
    pupils.split(",").forEach((person) => {
        person.split(" ")[1] === "erkak" ? boys += person : girls += person;
    });
    fs.writeFile(
        "/sorted_pupil.txt",
        `|---------O'gil bolalar-----------| \n${boys}
        \n|---------Qiz bolalar-----------| \n ${girls}`,
        "utf-8",
        err => {
            // if (err) return console.log(`File yaratilishida xatolik yuz berdi: ${err}`);
        });
});
console.log("Shart muvaffaqiyatli bajarildi!");
console.log("-------------------------");

