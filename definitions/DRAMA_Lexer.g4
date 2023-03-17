lexer grammar DRAMA_Lexer;

options {
	caseInsensitive = true;
}

COMMENT:
	PIPELINE (~[\r\n])* (NEWLINE | EOF) -> channel(HIDDEN);
STR: '"' ~["\r\n]* '"';

INSTR_NO_MODE_NO_ARG: DRU | NWL | LEZ | DRS | KTG | STP;

//KEYWORDS

//INSTRUCTIONS
HIA: 'HIA';
BIG: 'BIG';
OPT: 'OPT';
AFT: 'AFT';
DEL: 'DEL';
VER: 'VER';
MOD: 'MOD';
VSP: 'VSP';
VGL: 'VGL';

BST: 'BST';
HST: 'HST';
SBR: 'SBR';
SPR: 'SPR';

DRU: 'DRU';
NWL: 'NWL';
LEZ: 'LEZ';
DRS: 'DRS';
KTG: 'KTG';
STP: 'STP';

EINDPR: 'EINDPR';
RESGR: 'RESGR';

REGISTER: 'R' D;
FULL_MODE: DOT WS? [IADW] WS;
HALF_MODE: DOT WS? [AD] WS;
LIMITED_MODE: DOT WS? A WS;
NUMBER: MINUS? INT;
CD:
	NUL
	| NNUL
	| POS
	| NPOS
	| NEG
	| NNEG
	| GEL
	| NGEL
	| GR
	| KLG
	| KL
	| GRG;

// Conditions

NUL: 'NUL';
NNUL: 'NNUL';
POS: 'POS';
NPOS: 'NPOS';
NEG: 'NEG';
NNEG: 'NNEG';
GEL: 'GEL';
NGEL: 'NGEL';
GR: 'GR';
KLG: 'KLG';
KL: 'KL';
GRG: 'GRG';

ID: (A | D) W*;
NEWLINE: [\r\n]+;
INT: D+;
DOT: '.';
COMMA: ',';
PIPELINE: '|';
UNDERSCORE: '_';
MINUS: '-';
COLON: ':';

WS: [ \t\f]+ -> skip;
OTHER: .+?;

// REGEX CLASS RULES
fragment W: (A | D | UNDERSCORE); //Note since caseInsensitivity, a-z is implicitly included
fragment D: [0-9];
fragment A: [A-Z];