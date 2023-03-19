parser grammar drama;

// TODO: write tests for this grammar
options {
	tokenVocab = DRAMA_Lexer;
}

start: line* EOF;

line: (label)? instr? EOL; // each EOL is a line, label only lines are allowed

instr:
	hiaI
	| bigI
	| optI
	| aftI
	| delI
	| verI
	| modI
	| vspI
	| vglI
	| sprI
	| sbrI
	| hstI
	| bstI
	| DRU | NWL | LEZ | DRS | KTG | STP
	| var
	| EINDPR;
	//INSTR_NO_MODE_NO_ARG:

// instructions instructions with two args and a mode
hiaI: HIA MODE? REGISTER COMMA anr;
bigI: BIG MODE? REGISTER COMMA anr;
optI: OPT MODE? REGISTER COMMA anr;
aftI: AFT MODE? REGISTER COMMA anr;
delI: DEL MODE? REGISTER COMMA anr;
verI: VER MODE? REGISTER COMMA anr;
modI: MOD MODE? REGISTER COMMA anr;
vglI: VGL MODE? REGISTER COMMA anr;

// instructions with 1 arg and default mode
sprI: SPR MODE? adr;
sbrI: SBR MODE? adr;
// instructions with 1 arg no mode
bstI: BST REGISTER;
hstI: HST REGISTER;
// other
vspI: VSP CD COMMA adr;
var: RESGR NUMBER?;
// These are only valid after STP, number optional, defaults to 0 and then doesn't reserve any space

anr: (REGISTER | adr);
adr: (
		ID
		| NUMBER
		| NUMBER LEFT_PAREN (
			(SIGN REGISTER)
			| (REGISTER SIGN)
			| (REGISTER)
		) RIGHT_PAREN
	);

label: ID COLON;