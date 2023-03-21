import { exec } from "child_process";
import { readdir } from 'fs';
const rootTests = "./testfiles/"
const validTests = rootTests + "valid/"
const invalidTests = rootTests + "invalid";//These tests should fail to parse

readdir(validTests, (err, files) => {
    if (err) {
        throw Error(`Couldnt not read contents of ${rootTests + "valid/"}\n ${err}`)
    }
    files.forEach(file => {
        exec(`antlr4-parse ./definitions/DRAMA_Lexer.g4 ./definitions/drama.g4 start -gui ${validTests + file}`, (error, stdout, stderr) => {
            if (error){
                
            }
        })
        console.log(file);
    });
});


// exec("ls -la", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });
