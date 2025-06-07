// Generated from Metadata.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MetadataListener from './MetadataListener.js';
import MetadataVisitor from './MetadataVisitor.js';

const serializedATN = [4,1,13,25,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,4,0,
10,8,0,11,0,12,0,11,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,0,0,
4,0,2,4,6,0,2,1,0,3,9,1,0,10,12,21,0,9,1,0,0,0,2,15,1,0,0,0,4,20,1,0,0,0,
6,22,1,0,0,0,8,10,3,2,1,0,9,8,1,0,0,0,10,11,1,0,0,0,11,9,1,0,0,0,11,12,1,
0,0,0,12,13,1,0,0,0,13,14,5,0,0,1,14,1,1,0,0,0,15,16,3,4,2,0,16,17,5,1,0,
0,17,18,3,6,3,0,18,19,5,2,0,0,19,3,1,0,0,0,20,21,7,0,0,0,21,5,1,0,0,0,22,
23,7,1,0,0,23,7,1,0,0,0,1,11];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MetadataParser extends antlr4.Parser {

    static grammarFileName = "Metadata.g4";
    static literalNames = [ null, "':'", "';'", "'tipo'", "'tama\\u00C3\\u00B1o'", 
                            "'orden'", "'modificado'", "'autor'", "'descripcion'", 
                            "'etiqueta'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "TEXTO", "NUMERO", "FECHA", "WS" ];
    static ruleNames = [ "inicio", "campo", "nombreCampo", "valorCampo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MetadataParser.ruleNames;
        this.literalNames = MetadataParser.literalNames;
        this.symbolicNames = MetadataParser.symbolicNames;
    }



	inicio() {
	    let localctx = new InicioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MetadataParser.RULE_inicio);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 8;
	            this.campo();
	            this.state = 11; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1016) !== 0));
	        this.state = 13;
	        this.match(MetadataParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	campo() {
	    let localctx = new CampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MetadataParser.RULE_campo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this.nombreCampo();
	        this.state = 16;
	        this.match(MetadataParser.T__0);
	        this.state = 17;
	        this.valorCampo();
	        this.state = 18;
	        this.match(MetadataParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreCampo() {
	    let localctx = new NombreCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MetadataParser.RULE_nombreCampo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1016) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valorCampo() {
	    let localctx = new ValorCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MetadataParser.RULE_valorCampo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7168) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MetadataParser.EOF = antlr4.Token.EOF;
MetadataParser.T__0 = 1;
MetadataParser.T__1 = 2;
MetadataParser.T__2 = 3;
MetadataParser.T__3 = 4;
MetadataParser.T__4 = 5;
MetadataParser.T__5 = 6;
MetadataParser.T__6 = 7;
MetadataParser.T__7 = 8;
MetadataParser.T__8 = 9;
MetadataParser.TEXTO = 10;
MetadataParser.NUMERO = 11;
MetadataParser.FECHA = 12;
MetadataParser.WS = 13;

MetadataParser.RULE_inicio = 0;
MetadataParser.RULE_campo = 1;
MetadataParser.RULE_nombreCampo = 2;
MetadataParser.RULE_valorCampo = 3;

class InicioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_inicio;
    }

	EOF() {
	    return this.getToken(MetadataParser.EOF, 0);
	};

	campo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CampoContext);
	    } else {
	        return this.getTypedRuleContext(CampoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterInicio(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitInicio(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MetadataVisitor ) {
	        return visitor.visitInicio(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_campo;
    }

	nombreCampo() {
	    return this.getTypedRuleContext(NombreCampoContext,0);
	};

	valorCampo() {
	    return this.getTypedRuleContext(ValorCampoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MetadataVisitor ) {
	        return visitor.visitCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_nombreCampo;
    }


	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterNombreCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitNombreCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MetadataVisitor ) {
	        return visitor.visitNombreCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_valorCampo;
    }

	TEXTO() {
	    return this.getToken(MetadataParser.TEXTO, 0);
	};

	NUMERO() {
	    return this.getToken(MetadataParser.NUMERO, 0);
	};

	FECHA() {
	    return this.getToken(MetadataParser.FECHA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterValorCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitValorCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MetadataVisitor ) {
	        return visitor.visitValorCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MetadataParser.InicioContext = InicioContext; 
MetadataParser.CampoContext = CampoContext; 
MetadataParser.NombreCampoContext = NombreCampoContext; 
MetadataParser.ValorCampoContext = ValorCampoContext; 
