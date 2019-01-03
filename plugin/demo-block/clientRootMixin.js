function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".vuepress-plugin-demo-block__wrapper {\n  margin-top: 10px;\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  transition: all 0.2s; }\n  .vuepress-plugin-demo-block__wrapper:hover {\n    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2); }\n  .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__code {\n    overflow: hidden;\n    height: 0;\n    padding: 0 !important;\n    background-color: #282c34;\n    border-radius: 0 !important;\n    transition: height 0.5s; }\n    .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__code pre {\n      margin: 0 !important; }\n  .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__display {\n    padding: 20px;\n    border-bottom: 1px solid #ebebeb; }\n  .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer {\n    position: relative;\n    text-align: center; }\n    .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer.vuepress-plugin-demo-block__show-link .vuepress-plugin-demo-block__jsfiddle,\n    .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer.vuepress-plugin-demo-block__show-link .vuepress-plugin-demo-block__codepen {\n      opacity: 1; }\n    .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer.vuepress-plugin-demo-block__show-link .vuepress-plugin-demo-block__expand::before {\n      border-top: none;\n      border-right: 6px solid transparent;\n      border-bottom: 6px solid #ccc;\n      border-left: 6px solid transparent; }\n    .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__jsfiddle,\n    .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__codepen,\n    .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__expand span,\n    .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__expand {\n      opacity: 1; }\n    .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__expand::before {\n      border-top-color: #3eaf7c !important;\n      border-bottom-color: #3eaf7c !important; }\n    .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__expand-text {\n      opacity: 0;\n      transition: all 0.5s; }\n    .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer form:nth-last-child(2) {\n      right: 80px; }\n    .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer form:last-child {\n      right: 10px; }\n    .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__button {\n      margin: 0;\n      border-color: transparent;\n      background-color: transparent;\n      color: #3eaf7c;\n      cursor: pointer;\n      font-size: 14px;\n      outline: none; }\n    .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__jsfiddle,\n    .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__codepen {\n      position: absolute;\n      top: 10px;\n      transition: all 0.5s; }\n    .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__expand {\n      position: relative;\n      width: 100px;\n      height: 40px;\n      margin: 0;\n      border-color: transparent;\n      background-color: transparent;\n      color: #3eaf7c;\n      cursor: pointer;\n      font-size: 14px;\n      outline: none;\n      transition: all 0.5s; }\n      .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__expand::before {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 0;\n        height: 0;\n        border-top: 6px solid #ccc;\n        border-right: 6px solid transparent;\n        border-left: 6px solid transparent;\n        content: \"\";\n        transform: translate(-50%, -50%); }\n";
styleInject(css);

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {
  version: '2.5.7'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var document$1 = _global.document; // typeof document.createElement is 'object' in old IE


var is = _isObject(document$1) && _isObject(document$1.createElement);

var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
 // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;
var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;

var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();

var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
var SRC = _uid('src');

var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

_core.inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === _global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    _hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    _hide(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding


var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out; // extend global

    if (target) _redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) _hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

_global.core = _core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

var _export = $export;

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
 // eslint-disable-next-line no-prototype-builtins


var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings




var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength


var min = Math.min;

var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;

var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes






var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var _library = false;

var _shared = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core.version,
  mode: _library ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});
});

var shared = _shared('keys');



var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);

var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key); // Don't enum bug & hidden keys


  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }

  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)




var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$1
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$2
};

// 7.1.13 ToObject(argument)


var _toObject = function (it) {
  return Object(_defined(it));
};

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;

  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  }

  return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', {
  assign: _objectAssign
});

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function (fn, args, that) {
  var un = that === undefined;

  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);

    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);

    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }

  return fn.apply(that, args);
};

var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']'; // eslint-disable-next-line no-new-func


    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }

  return factories[len](F, args);
};

var _bind = Function.bind || function bind(that
/* , ...args */
) {
  var fn = _aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);

  var bound = function ()
  /* args... */
  {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : _invoke(fn, args, that);
  };

  if (_isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)


_export(_export.P, 'Function', {
  bind: _bind
});

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');



var Symbol = _global.Symbol;

var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');

var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});

var _addToUnscopables = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

var _iterators = {};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);

  return O;
};

var document$2 = _global.document;

var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])






var IE_PROTO$1 = _sharedKey('IE_PROTO');

var Empty = function () {
  /* empty */
};

var PROTOTYPE$1 = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');

  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  _html.appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;

  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];

  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO$1] = O;
  } else result = createDict();

  return Properties === undefined ? result : _objectDps(result, Properties);
};

var def = _objectDp.f;



var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

_hide(IteratorPrototype, _wks('iterator'), function () {
  return this;
});

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, {
    next: _propertyDesc(1, next)
  });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)




var IE_PROTO$2 = _sharedKey('IE_PROTO');

var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto : null;
};

var ITERATOR = _wks('iterator');

var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () {
  return this;
};

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);

  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  } // Plug for library


  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }

  return methods;
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()


var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target

  this._i = 0; // next index

  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;

  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }

  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

_iterators.Arguments = _iterators.Array;
_addToUnscopables('keys');
_addToUnscopables('values');
_addToUnscopables('entries');

var ITERATOR$1 = _wks('iterator');
var TO_STRING_TAG = _wks('toStringTag');
var ArrayValues = _iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  var key;

  if (proto) {
    if (!proto[ITERATOR$1]) _hide(proto, ITERATOR$1, ArrayValues);
    if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
    _iterators[NAME] = ArrayValues;
    if (explicit) for (key in es6_array_iterator) if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
  }
}

// 7.2.2 IsArray(argument)


var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

var SPECIES = _wks('species');

var _arraySpeciesConstructor = function (original) {
  var C;

  if (_isArray(original)) {
    C = original.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;

    if (_isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array : C;
};

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


var _arraySpeciesCreate = function (original, length) {
  return new (_arraySpeciesConstructor(original))(length);
};

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex










var _arrayMethods = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || _arraySpeciesCreate;
  return function ($this, callbackfn, that) {
    var O = _toObject($this);
    var self = _iobject(O);
    var f = _ctx(callbackfn, that, 3);
    var length = _toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);

      if (TYPE) {
        if (IS_MAP) result[index] = res; // map
        else if (res) switch (TYPE) {
            case 3:
              return true;
            // some

            case 5:
              return val;
            // find

            case 6:
              return index;
            // findIndex

            case 2:
              result.push(val);
            // filter
          } else if (IS_EVERY) return false; // every
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

var _strictMethod = function (method, arg) {
  return !!method && _fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {
      /* empty */
    }, 1) : method.call(null);
  });
};

var $forEach = _arrayMethods(0);

var STRICT = _strictMethod([].forEach, true);

_export(_export.P + _export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

var _fixReWks = function (KEY, length, exec) {
  var SYMBOL = _wks(KEY);
  var fns = exec(_defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];

  if (_fails(function () {
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  })) {
    _redefine(String.prototype, KEY, strfn);
    _hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    } // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};

// @@match logic
_fixReWks('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {

    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

// 7.2.8 IsRegExp(argument)




var MATCH = _wks('match');

var _isRegexp = function (it) {
  var isRegExp;
  return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
};

// @@split logic
_fixReWks('split', 2, function (defined, SPLIT, $split) {

  var isRegExp = _isRegexp;

  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';

  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it

    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i; // Doesn't need flags gy, but they don't hurt

      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);

      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index)); // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func

          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }

        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }

      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    }; // Chakra, V8

  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  } // 21.1.3.17 String.prototype.split(separator, limit)


  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

// most Object methods by ES6 should accept primitives






var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () {
    fn(1);
  }), 'Object', exp);
};

// 19.1.2.14 Object.keys(O)




_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

// @@replace logic
_fixReWks('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {

    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var space = '[' + _stringWs + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = _fails(function () {
    return !!_stringWs[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  _export(_export.P + _export.F * FORCE, 'String', exp);
}; // 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim


var trim = exporter.trim = function (string, TYPE) {
  string = String(_defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;

_stringTrim('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

var CLASS_WRAPPER = 'vuepress-plugin-demo-block__wrapper';
var CLASS_DISPLAY = 'vuepress-plugin-demo-block__display';
var CLASS_CODE = 'vuepress-plugin-demo-block__code';
var CLASS_FOOTER = 'vuepress-plugin-demo-block__footer';
var CLASS_APP = 'vuepress-plugin-demo-block__app';
var CLASS_SHOW_LINK = 'vuepress-plugin-demo-block__show-link';
var CLASS_EXPAND = 'vuepress-plugin-demo-block__expand';
var CLASS_CODEPEN = 'vuepress-plugin-demo-block__codepen';
var CLASS_JSFIDDLE = 'vuepress-plugin-demo-block__jsfiddle';
var CLASS_BUTTON = 'vuepress-plugin-demo-block__button';
var DEFAULT_SETTINGS = {
  jsLib: [],
  cssLib: [],
  jsfiddle: true,
  codepen: true,
  codepenLayout: 'left',
  codepenJsProcessor: 'babel',
  codepenEditors: '101',
  vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js',
  react: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js',
  reactDOM: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js'
};
var SETTINGS_KEY = '$VUEPRESS_DEMO_BLOCK';

var _once = {};

var getHtmlTpl = function getHtmlTpl(html) {
  return "<div id=\"app\">\n".concat(html, "\n</div>");
};

var getVueJsTpl = function getVueJsTpl(js) {
  var jsContent = js.replace(/export\s+default\s*?\{\n*/, '').replace(/\n*\}\s*$/, '').trim();
  return "new Vue({\n  el: '#app',\n  ".concat(jsContent, "\n})");
};

var toArray = function toArray(value) {
  return Array.prototype.slice.call(value);
};

var getSettings = function getSettings(key) {
  return window[SETTINGS_KEY] && window[SETTINGS_KEY][key] !== undefined ? window[SETTINGS_KEY][key] : DEFAULT_SETTINGS[key];
};
var h = function h(tag, attrs, children) {
  var node = document.createElement(tag);
  attrs && Object.keys(attrs).forEach(function (key) {
    node[key] = attrs[key];
  });
  children && children.forEach(function (_ref) {
    var tag = _ref.tag,
        attrs = _ref.attrs,
        children = _ref.children;
    node.appendChild(h(tag, attrs, children));
  });
  return node;
};
var $ = function $(parent, node, returnArray) {
  var result = toArray(parent.querySelectorAll(".".concat(node)));
  return result.length === 1 && !returnArray ? result[0] : result;
};

var getVueScript = function getVueScript(js, html) {
  var scripts = js.split(/export\s+default/);
  var scriptStrOrg = "(function() {".concat(scripts[0], " ; return ").concat(scripts[1], ";})()");
  var scriptStr = window.Babel ? window.Babel.transform(scriptStrOrg, {
    presets: ['es2015']
  }).code : scriptStrOrg;
  var scriptObj = [eval][0](scriptStr);
  scriptObj.template = html;
  return scriptObj;
};

var getVueDetail = function getVueDetail(code, config) {
  var cssBlock = code.match(/<style>([\s\S]+)<\/style>/);
  var htmlBlock = code.match(/<template>([\s\S]+)<\/template>/);
  var jsBlock = code.match(/<script>([\s\S]+)<\/script>/);
  var result = {
    css: cssBlock && cssBlock[1].replace(/^\n|\n$/g, ''),
    html: htmlBlock && htmlBlock[1].replace(/^\n|\n$/g, ''),
    js: jsBlock && jsBlock[1].replace(/^\n|\n$/g, ''),
    jsLib: config.jsLib || [],
    cssLib: config.cssLib || []
  };
  result.htmlTpl = getHtmlTpl(result.html);
  result.jsTpl = getVueJsTpl(result.js);
  result.script = getVueScript(result.js, result.html);
  var vueResource = getSettings('vue');
  result.jsLib.unshift(vueResource);
  return result;
};

var getReactTpl = function getReactTpl(code) {
  code = code.replace('export default ', '').replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, '');
  code += 'ReactDOM.render(React.createElement(App), document.getElementById("app"))';
  return code;
};

var getReactDetail = function getReactDetail(code, config) {
  var transform = window.Babel.transform;
  var ins = transform(code, {
    presets: ['es2015', 'react']
  }).code;
  var script = "(function(exports){var module={};module.exports=exports;".concat(ins, ";return module.exports.__esModule?module.exports.default:module.exports;})({})");
  var scriptObj = new Function("return ".concat(script))();
  var result = {
    js: scriptObj,
    css: scriptObj.__style__ || '',
    jsLib: config.jsLib || [],
    cssLib: config.cssLib || [],
    jsTpl: getReactTpl(code),
    htmlTpl: getHtmlTpl('')
  };
  var reactResource = getSettings('react');
  var reactDOMResource = getSettings('reactDOM');
  result.jsLib.unshift(reactResource, reactDOMResource);
  return result;
};
var injectCss = function injectCss(css) {
  if (_once[css]) {
    return;
  }

  var style = h('style', {
    innerHTML: css
  });
  document.body.appendChild(style);
  _once[css] = true;
};

function getJsfiddleBtn(_ref) {
  var css = _ref.css,
      htmlTpl = _ref.htmlTpl,
      jsTpl = _ref.jsTpl,
      jsLib = _ref.jsLib,
      cssLib = _ref.cssLib;
  var resource = jsLib.concat(cssLib).concat(getSettings('cssLib')).concat(getSettings('jsLib')).join(',');
  var form = h('form', {
    className: CLASS_JSFIDDLE,
    target: '_blank',
    action: 'https://jsfiddle.net/api/post/library/pure/',
    method: 'post'
  }, [{
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'css',
      value: css
    }
  }, {
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'html',
      value: htmlTpl
    }
  }, {
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'js',
      value: jsTpl
    }
  }, {
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'panel_js',
      value: 3
    }
  }, {
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'wrap',
      value: 1
    }
  }, {
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'resources',
      value: resource
    }
  }, {
    tag: 'button',
    attrs: {
      type: 'submit',
      className: CLASS_BUTTON,
      innerHTML: 'JSFiddle'
    }
  }]);
  return form;
}

function getCodepenBtn(_ref) {
  var css = _ref.css,
      htmlTpl = _ref.htmlTpl,
      jsTpl = _ref.jsTpl,
      jsLib = _ref.jsLib,
      cssLib = _ref.cssLib;
  var value = JSON.stringify({
    css: css,
    html: htmlTpl,
    js: jsTpl,
    js_external: jsLib.concat(getSettings('jsLib')).join(';'),
    css_external: cssLib.concat(getSettings('cssLib')).join(';'),
    layout: getSettings('codepenLayout'),
    js_pre_processor: getSettings('codepenJsProcessor'),
    editors: getSettings('codepenEditors')
  });
  var form = h('form', {
    className: CLASS_CODEPEN,
    target: '_blank',
    action: 'https://codepen.io/pen/define',
    method: 'post'
  }, [{
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'data',
      value: value
    }
  }, {
    tag: 'button',
    attrs: {
      type: 'submit',
      innerHTML: 'Codepen',
      className: CLASS_BUTTON
    }
  }]);
  return form;
}

function webController(context) {
  debugger;
  console.log(context.$el);
  var nodes = $(document, CLASS_WRAPPER, true);
  nodes.length && nodes.forEach(function (node) {
    if (node.dataset.created === 'true') {
      return;
    }

    node.style.display = 'block';
    var codeNode = $(node, CLASS_CODE);
    var displayNode = $(node, CLASS_DISPLAY);
    var footerNode = $(node, CLASS_FOOTER);
    var appNode = $(displayNode, CLASS_APP);
    var code = decodeURIComponent(node.dataset.code);
    var config = decodeURIComponent(node.dataset.config);
    var type = decodeURIComponent(node.dataset.type);
    config = config ? JSON.parse(config) : {};
    var height = codeNode.querySelector('div').clientHeight;
    var detail = type === 'react' ? getReactDetail(code, config) : getVueDetail(code, config);
    var expandNode = createExpandNode();
    footerNode.appendChild(expandNode);
    expandNode.addEventListener('click', expandHandler.bind(null, expandNode, height, codeNode, footerNode));

    if (getSettings('jsfiddle')) {
      footerNode.appendChild(getJsfiddleBtn(detail));
    }

    if (getSettings('codepen')) {
      footerNode.appendChild(getCodepenBtn(detail));
    }

    detail.css && injectCss(detail.css);

    if (type === 'react') {
      ReactDOM.render(React.createElement(detail.js), appNode);
    } else {
      new Vue(Object.assign({
        el: appNode
      }, detail.script));
    }

    node.dataset.created = 'true';
  });
}

function createExpandNode() {
  return h('button', {
    className: "".concat(CLASS_EXPAND)
  });
}

function expandHandler(expandNode, height, codeNode, footerNode) {
  var isExpand = expandNode.dataset.isExpand !== '1';
  codeNode.style.height = isExpand ? "".concat(height, "px") : 0;

  if (isExpand) {
    footerNode.classList.add(CLASS_SHOW_LINK);
  } else {
    footerNode.classList.remove(CLASS_SHOW_LINK);
  }

  expandNode.dataset.isExpand = isExpand ? '1' : '0';
}

var clientRootMixin = {
  // 根节点的mounted的时机
  mounted: function mounted() {
    window[SETTINGS_KEY] = SETTINGS;
    webController(this);
  },
  updated: function updated() {
    webController(this);
  }
};

export default clientRootMixin;
