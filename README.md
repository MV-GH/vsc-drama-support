# vsc-drama-support

This extension adds support for the DRAMA language (Decimale RekenAutomaat met Meerdere Accumulatoren) or (Decimal Calculator with Multiple Accumulators).
At the moment it only does syntax highlighting.

## Features

- syntax highlighting for .dra files


![syntax highlighting example with multiple themes](media/syntax-highlighting-example.gif)



---
## Release Notes

Initial release of

### 0.0.1

---
## Notes self
linter: rules: resgr, empty lines
## quirks in DRAMA:
 - Allows RESGR with negative numbers (acts as positive), no arguments (does not reserve any memory space)
 - Allows empty lines to be compiled, errors ofc at runtime, should skip or error at compile time
 - Allows numbers to prefixed with a plus sign
 - doens't check the dot for the mode thus allows you to put any character there (except space)
 - Allows labels to defined as keywords, thus allowing labels to shadow keywords, 
 this has some major implications as register now can be defined as label/symbol
 and now either functions as register, in a context that only register is as allowed or as as symbol if a symbol is allowed
 this allows for some crazy constructs, see the following:
 ```
 HIA.a: NWL
 SPRxD r1+69(-R1)
 spr HIA.a 
 STP
 R1: RESGR -99
 ```
 OR
 ```
HIA.w r1, 5
HIA.W R0, r1+0(R1) | who needs addition if you can do this?
DRU | 10
NWL
STP
R1: RESGR 
 ```



