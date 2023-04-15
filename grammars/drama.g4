parser grammar drama;

options {
	tokenVocab = DRAMA_Lexer;
}

// We are assuming that the last instruction ends in EOL (we enforce that by manually adding a EOL 
// significantly reduces complexity
start: line* EOF;

line:
	(label? instr? EOL);

instr: (INSTR_MODE arguments) | var | arr | EINDPR;

var: RESGR number?;

arguments: double_arg | single_arg | no_arg;
double_arg: (reg | cd) COMMA anr;
single_arg: anr;
no_arg:;

reg: REGISTER;
cd: CD;
sign: PLUS | MINUS;

anr: (REGISTER | adr);


adr: (
		ID index?
		| number index?
		| number sign INT
		| ID sign INT index?
		| number sign ID
		| number sign ID index?
	);

index: LP ( (sign REGISTER) | (REGISTER sign) | (REGISTER)) RP;

label: ID COLON;
number: sign? INT;

arr: (number | STR) (SEMI_COLON (number | STR))*;