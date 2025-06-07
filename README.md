Analizador de Metadata - Proyecto Node.js con ANTLR4 Este proyecto implementa un analizador léxico y sintáctico para archivos de metadata.
El analizador ha sido desarrollado utilizando ANTLR4 y ejecutado en un entorno Node.js. Campos válidos: • Titulo • Tipo • tamano → número entero • modificado → fecha en formato YYYY-MM-DD • autor • descripción • etiquetas Reglas:

• Cada línea debe terminar con “; “. • Los campos deben aparecer como mínimo una vez (el orden es libre). • Los campos no válidos provocarán un error de análisis.

Requisitos • Tener Node.js instalado. • Tener Java instalado (para generar el parser con ANTLR). • Tener instalada la extensión ANTLR4 en Visual Studio Code

Ejemplo de ejecución correcta título: Documento de pruebas; tipo: documento; tamano: 1024; modificado: 2025-06-06; autor: Vedia Cristian; descripcion: Documento de ejemplo para pruebas del analizador; etiquetas: test prueba antlr;
