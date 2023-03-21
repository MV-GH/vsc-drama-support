import { promisify } from 'util';
import { exec } from 'child_process'
const exec_promise = promisify(exec);
import { readdir } from 'fs';

const rootTests = "./testfiles/"
const validTests = rootTests + "valid/"
const invalidTests = rootTests + "invalid/";//These tests should fail to parse

readdir(validTests, (err, files) => {
    if (err) {
        throw Error(`couldn't read contents of ${validTests}}\n ${err}`)
    }
    Promise.all(
        files.map(file => {
            const prom = exec_promise(`antlr4-parse -v 4.12.0 ./definitions/DRAMA_Lexer.g4 ./definitions/drama.g4 start -token ${validTests + file}`);

            prom.child.stdout.on("data", stdout => {
                if (stdout.length != 0) {
                    console.log(stdout)
                    throw Error(`Test "${file}" failed (should be valid)`)
                }
            })
            return prom;
        }))
        .then(_ => { console.log("All valid tests succeeded 👍"); })

});


readdir(invalidTests, (err, files) => {
    if (err) {
        throw Error(`couldn't read contents of ${invalidTests}}\n ${err}`)
    }
    Promise.all(
        files.map(file => {
            const prom = exec_promise(`antlr4-parse -v 4.12.0 ./definitions/DRAMA_Lexer.g4 ./definitions/drama.g4 start -token ${invalidTests + file}`);

            prom.child.stdout.on("data", stdout => {
                if (stdout.length === 0) {
                    throw Error(`Test "${file}" failed (should be invalid)`)
                }
            })
            return prom;
        }))
        .then(_ => { console.log("All invalid tests succeeded 👍"); })

});
