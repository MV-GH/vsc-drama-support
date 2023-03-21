parser grammar drama;

// TODO: write tests for this grammar
options {
	tokenVocab = DRAMA_Lexer;
}

start: line* label? instr? EOF;

line:
	(label? instr? EOL); // each EOL is a line, label only lines are allowed

instr: INSTR_MODE arguments | var | str | EINDPR;

// other vspI: VSP CD COMMA adr;
var: RESGR NUMBER?;
str: STR;

arguments: double_arg | single_arg | no_arg;
double_arg: (reg | cd) COMMA anr;
single_arg: (anr);
no_arg:;

reg: REGISTER;
cd: CD;
sign: PLUS | MINUS;

// TODO: redo as SYMBOL + Number is valid too
anr: (REGISTER | adr);
adr: (
		ID
		| NUMBER
		| NUMBER index
		|  ID sign INT
	);
index: LP (
			(sign REGISTER)
			| (REGISTER  sign)
			| (REGISTER)
		) RP;


label: ID COLON;