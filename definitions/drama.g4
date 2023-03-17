grammar drama;

options {tokenVocab=DRAMA_Lexer; }

start:  (LABEL? instr NEWLINE?)* EOF;



instr: INSTR_MODE | INSTR_NO_MODE | INSTR_NO_MODE_NO_ARG;

INSTR_MODE: HIA;




// instructions
HIA: 'HIA' WS? FULL_MODE? WS REGISTER WS? COLON WS? (REGISTER);

