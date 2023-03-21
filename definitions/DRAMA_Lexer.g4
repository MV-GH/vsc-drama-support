lexer grammar DRAMA_Lexer;

options {
	caseInsensitive = true;
}

// deliberary chosen to not include EOL, comment cant consume EOL as it is needed to match lines
COMMENT: PIPELINE (~[\r\n])* -> channel(HIDDEN);

STR: '"' ~["\r\n]* '"';

INSTR_MODE: INSTR MODE?;
MODE: WS? DOT WS? (~[ \t\f\r\n])+; // Verify mode later, TODO: EOF

WS: [ \t\f]+ -> skip;

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

INSTR:
	HIA
	| BIG
	| OPT
	| AFT
	| DEL
	| VER
	| MOD
	| VSP
	| VGL
	| BST
	| HST
	| SBR
	| SPR
	| DRU
	| NWL
	| LEZ
	| DRS
	| KTG
	| STP;

EINDPR: 'EINDPR';
RESGR: 'RESGR';

REGISTER: 'R' D;

NUMBER: SIGN? INT;
//TODO seperate sign from this
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

ID: (A | UNDERSCORE) (W | DOT)*;
// cant start with numbers or dots but they can be in the body
EOL: '\r'? '\n';
INT: D+;
DOT: '.';
COMMA: ',';
PIPELINE: '|';
UNDERSCORE: '_';
SIGN: PLUS | MINUS;
MINUS: '-';
PLUS: '+';
COLON: ':';
LP: '(';
RP: ')';

OTHER: .+?;
// GARBAGE collecting token, not sure about this approach, to be seen

// REGEX CLASS RULES
fragment W: (A | D | UNDERSCORE);
//Note since caseInsensitivity, a-z is implicitly included
fragment D: [0-9];
fragment A: [A-Z];