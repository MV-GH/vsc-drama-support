import { exec } from "child_process";
import { readdir } from 'fs';
const rootTests = "./testfiles/"
const validTests = rootTests + "valid/"
const invalidTests = rootTests + "invalid/";//These tests should fail to parse

readdir(validTests, (err, files) => {
    if (err) {
        throw Error(`Couldnt read contents of ${validTests}}\n ${err}`)
    }
    files.forEach(file => {
        exec(`antlr4-parse ./definitions/DRAMA_Lexer.g4 ./definitions/drama.g4 start -token ${validTests + file}`, (error, stdout, stderr) => {
            if (error) {
                throw Error(error.message)
            }
            if (stdout.length != 0) {
                console.log(stdout)
                console.log(stderr)
                console.log(error)
                throw Error(`Test "${file}" failed (should be valid)`)
            }
        })
    });
    console.log("All valid tests succeded 👍");
});


readdir(invalidTests, (err, files) => {
    if (err) {
        throw Error(`Couldnt read contents of ${invalidTests}\n ${err}`)
    }
    files.forEach(file => {
        exec(`antlr4-parse ./definitions/DRAMA_Lexer.g4 ./definitions/drama.g4 start -token ${invalidTests + file}`, (error, stdout, stderr) => {
            if (error) {
                throw Error(error.message)
            }
            if (stdout.length == 0) {
                console.log(stdout)
                console.log(stderr)
                console.log(error)
                throw Error(`Test "${file}" failed (should be invalid)`)
            }
        })
    });
    console.log("All invalid tests succeded 👍");
});

