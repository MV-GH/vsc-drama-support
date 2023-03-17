grammar drama;

options {
	tokenVocab = DRAMA_Lexer;
}

start: (label? instr NEWLINE?)* EOF;

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
	| INSTR_NO_MODE_NO_ARG
	| var
	| EINDPR;

// instructions instructions with two args and a mode
hiaI: HIA FULL_MODE? REGISTER COMMA anr;
bigI: BIG FULL_MODE? REGISTER COMMA anr;
optI: OPT FULL_MODE? REGISTER COMMA anr;
aftI: AFT FULL_MODE? REGISTER COMMA anr;
delI: DEL FULL_MODE? REGISTER COMMA anr;
verI: VER FULL_MODE? REGISTER COMMA anr;
modI: MOD FULL_MODE? REGISTER COMMA anr;
vglI: VGL FULL_MODE? REGISTER COMMA anr;

// instructions with 1 arg and default mode
sprI: SPR LIMITED_MODE? adr;
sbrI: SBR LIMITED_MODE? adr;
// instructions with 1 arg no mode
bstI: BST REGISTER;
hstI: HST REGISTER;
// other
vspI: VSP CD COMMA adr;
var: label RESGR NUMBER;


anr: (REGISTER | adr);
adr: (
		ID
		| NUMBER
		| NUMBER LEFT_PAREN ((SIGN REGISTER) | (REGISTER SIGN) | (REGISTER)) RIGHT_PAREN
	);

label: ID COLON;