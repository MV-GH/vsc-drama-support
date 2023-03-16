grammar drama;

options { caseInsensitive=true; }

program: (LABEL? instr NEWLINE)* EOF;



instr: INSTR_MODE | INSTR_NO_MODE | INSTR_NO_MODE_NO_ARG;

INSTR_MODE: HIA;


INSTR_NO_MODE: 'BST' | 'HST' | 'SBR' | 'SPR';

INSTR_NO_MODE_NO_ARG:
	'DRU'
	| 'NWL'
	| 'LEZ'
	| 'DRS'
	| 'KTG'
	| 'STP';

// instructions
HIA: 'HIA' FULL_MODE? (REGISTER) COLON REGISTER;

LABEL: W+ ':';
REGISTER: 'R' D;
FULL_MODE: DOT [IADW];
HALF_MODE: DOT [AD];
NEWLINE: [\r?\n]+;


INT: [0-9]+;

DOT: '.';
COLON: ',';
WS: [ \t\f]+ -> skip;

// REGEX CLASS RULES
//TODO
fragment W: ( 'A' ..'Z' | '0' ..'9' | '_');
fragment D: [0-9];