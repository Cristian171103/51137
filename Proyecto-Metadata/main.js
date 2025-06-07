const antlr4 = require('antlr4');
const fs = require('fs');
const MetadataLexer = require('./parser/MetadataLexer').MetadataLexer;
const MetadataParser = require('./parser/MetadataParser').MetadataParser;

const input = fs.readFileSync('ejemplo.txt', 'utf8');
const chars = new antlr4.InputStream(input);
const lexer = new MetadataLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MetadataParser(tokens);

parser.buildParseTrees = true;
const tree = parser.inicio();

// Árbol de análisis sintáctico
console.log("Árbol sintáctico:");
console.log(tree.toStringTree(parser.ruleNames));