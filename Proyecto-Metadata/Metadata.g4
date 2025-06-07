grammar Metadata;

inicio: campo+ EOF;

campo: nombreCampo ':' valorCampo ';';

nombreCampo:
      'tipo'
    | 'tamaño'
    | 'orden'
    | 'modificado'
    | 'autor'
    | 'descripcion'
    | 'etiqueta';

valorCampo: TEXTO | NUMERO | FECHA;

TEXTO: '"' CADENA '"';

NUMERO: DIGITO+;

FECHA: DIGITO DIGITO DIGITO DIGITO '-' DIGITO DIGITO '-' DIGITO DIGITO;

fragment CADENA: (LETRA | DIGITO | ' ' | ',' | '.' | ';' | ':' | '-' | '_')+;

fragment DIGITO: [0-9];
fragment LETRA: [a-zA-Z];

WS: [ \t\r\n]+ -> skip;