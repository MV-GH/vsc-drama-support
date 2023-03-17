lexer grammar DRAMA_Lexer;

options {
	caseInsensitive = true;
}

COMMENT: PIPELINE (~NEWLINE)* NEWLINE;
STR: '"' ~["\r\n]* '"';

INSTR_NO_MODE: BST | HST | SBR | SPR;

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

LABEL: ID WS? ':';
REGISTER: 'R' D;
FULL_MODE: DOT WS? [IADW];
HALF_MODE: DOT WS? [AD];

ID: (A | D) W*;
NEWLINE: [\r\n]+;
INT: [0-9]+;
DOT: '.';
COLON: ',';
PIPELINE: '|';
UNDERSCORE: '_';
WS: [ \t\f]+ -> skip;

// REGEX CLASS RULES
fragment W: (A | D | UNDERSCORE); //Note since caseInsensitivity, a-z is implicitly included
fragment D: [0-9];
fragment A: [A-Z];