parser grammar drama;

options {
	tokenVocab = DRAMA_Lexer;
}

@parser::header {
//@ts-nocheck
}

// We are assuming that the last instruction ends in EOL (we enforce that by manually adding EOL if
// needed) significantly reduces complexity
start: line* EOF;

line:
	(label? instr? EOL); // each EOL is a line, label only lines are allowed

instr: (INSTR_MODE arguments) | var | str | EINDPR;

// other vspI: VSP CD COMMA adr;
var: RESGR number?;
str: STR;

arguments: double_arg | single_arg | no_arg;
double_arg: (reg | cd) COMMA anr;
single_arg: anr;
no_arg:;

reg: REGISTER;
cd: CD;
sign: PLUS | MINUS;

anr: (REGISTER | adr);
//ATM DOES NOT SUPPORT -1+s and its derivates 
adr: (
		ID index?
		| MINUS? INT index?
		| ID sign INT
		| ID sign INT index?
		| INT sign ID
		| INT sign ID index?
	);
index: LP ( (sign REGISTER) | (REGISTER sign) | (REGISTER)) RP;

label: ID COLON;
number: sign? INT;