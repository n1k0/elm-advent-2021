(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.i.ag === region.g.ag)
	{
		return 'on line ' + region.i.ag;
	}
	return 'on lines ' + region.i.ag + ' through ' + region.g.ag;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.cn,
		impl.cR,
		impl.cN,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		F: func(record.F),
		a6: record.a6,
		a2: record.a2
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.F;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.a6;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.a2) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.cn,
		impl.cR,
		impl.cN,
		function(sendToApp, initialModel) {
			var view = impl.cT;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.cn,
		impl.cR,
		impl.cN,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.a4 && impl.a4(sendToApp)
			var view = impl.cT;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.bk);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.bW) && (_VirtualDom_doc.title = title = doc.bW);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.cv;
	var onUrlRequest = impl.cw;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		a4: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.cD === next.cD
							&& curr.ck === next.ck
							&& curr.cA.a === next.cA.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		cn: function(flags)
		{
			return A3(impl.cn, flags, _Browser_getUrl(), key);
		},
		cT: impl.cT,
		cR: impl.cR,
		cN: impl.cN
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { cj: 'hidden', b6: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { cj: 'mozHidden', b6: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { cj: 'msHidden', b6: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { cj: 'webkitHidden', b6: 'webkitvisibilitychange' }
		: { cj: 'hidden', b6: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		bQ: _Browser_getScene(),
		b_: {
			N: _Browser_window.pageXOffset,
			D: _Browser_window.pageYOffset,
			b$: _Browser_doc.documentElement.clientWidth,
			bt: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		b$: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		bt: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			bQ: {
				b$: node.scrollWidth,
				bt: node.scrollHeight
			},
			b_: {
				N: node.scrollLeft,
				D: node.scrollTop,
				b$: node.clientWidth,
				bt: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			bQ: _Browser_getScene(),
			b_: {
				N: x,
				D: y,
				b$: _Browser_doc.documentElement.clientWidth,
				bt: _Browser_doc.documentElement.clientHeight
			},
			cd: {
				N: x + rect.left,
				D: y + rect.top,
				b$: rect.width,
				bt: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.ce.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.ce.b, xhr)); });
		$elm$core$Maybe$isJust(request.bX) && _Http_track(router, xhr, request.bX.a);

		try {
			xhr.open(request.cs, request.cS, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.cS));
		}

		_Http_configureRequest(xhr, request);

		request.bk.a && xhr.setRequestHeader('Content-Type', request.bk.a);
		xhr.send(request.bk.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.bs; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.cO.a || 0;
	xhr.responseType = request.ce.d;
	xhr.withCredentials = request.b2;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		cS: xhr.responseURL,
		cL: xhr.status,
		cM: xhr.statusText,
		bs: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			cK: event.loaded,
			bS: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			cF: event.loaded,
			bS: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}



// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.ct) { flags += 'm'; }
	if (options.b5) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;


function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}var $elm$core$Maybe$Nothing = {$: 1};
var $orus_io$elm_spa$Spa$PublicPage = function (a) {
	return {$: 0, a: a};
};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $orus_io$elm_spa$Spa$Current = function (a) {
	return {$: 1, a: a};
};
var $orus_io$elm_spa$Spa$CurrentMsg = function (a) {
	return {$: 0, a: a};
};
var $orus_io$elm_spa$Spa$NoPage = {$: 0};
var $orus_io$elm_spa$Spa$PageMsg = function (a) {
	return {$: 1, a: a};
};
var $orus_io$elm_spa$Spa$Previous = function (a) {
	return {$: 2, a: a};
};
var $orus_io$elm_spa$Spa$SharedMsg = function (a) {
	return {$: 0, a: a};
};
var $orus_io$elm_spa$Spa$UrlChange = function (a) {
	return {$: 3, a: a};
};
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.m) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.o),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.o);
		} else {
			var treeLen = builder.m * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.q) : builder.q;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.m);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.o) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.o);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{q: nodeList, m: (len / $elm$core$Array$branchFactor) | 0, o: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $orus_io$elm_spa$Spa$currentPageModel = function (page) {
	if (page.$ === 1) {
		var model = page.a;
		return $elm$core$Maybe$Just(model);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {ch: fragment, ck: host, bF: path, cA: port_, cD: protocol, bJ: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$Navigation$load = _Browser_load;
var $elm$core$Platform$Cmd$map = _Platform_map;
var $elm$core$Platform$Sub$map = _Platform_map;
var $orus_io$elm_spa$Spa$PreviousMsg = function (a) {
	return {$: 1, a: a};
};
var $orus_io$elm_spa$Spa$UrlRequest = function (a) {
	return {$: 2, a: a};
};
var $orus_io$elm_spa$Spa$mapPreviousMsg = function (msg) {
	switch (msg.$) {
		case 0:
			var sharedMsg = msg.a;
			return $orus_io$elm_spa$Spa$SharedMsg(sharedMsg);
		case 1:
			var previousMsg = msg.a;
			return $orus_io$elm_spa$Spa$PageMsg(
				$orus_io$elm_spa$Spa$PreviousMsg(previousMsg));
		case 2:
			var request = msg.a;
			return $orus_io$elm_spa$Spa$UrlRequest(request);
		default:
			var url = msg.a;
			return $orus_io$elm_spa$Spa$UrlChange(url);
	}
};
var $orus_io$elm_spa$Spa$previousPageModel = function (page) {
	switch (page.$) {
		case 2:
			var previous = page.a;
			return previous;
		case 1:
			return $orus_io$elm_spa$Spa$NoPage;
		default:
			return $orus_io$elm_spa$Spa$NoPage;
	}
};
var $orus_io$elm_spa$Spa$modelPrevious = function (_v0) {
	var core = _v0.a;
	var page = _v0.b;
	return _Utils_Tuple2(
		core,
		$orus_io$elm_spa$Spa$previousPageModel(page));
};
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var $elm$browser$Browser$Navigation$replaceUrl = _Browser_replaceUrl;
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $orus_io$elm_spa$Internal$pageDefinition = function (_v0) {
	var def = _v0;
	return def;
};
var $orus_io$elm_spa$Spa$setupPage = F3(
	function (extractIdentity, shared, page) {
		if (!page.$) {
			var setup = page.a;
			return $elm$core$Maybe$Just(
				$orus_io$elm_spa$Internal$pageDefinition(
					setup(shared)));
		} else {
			var setup = page.a;
			return A2(
				$elm$core$Maybe$map,
				A2(
					$elm$core$Basics$composeR,
					setup(shared),
					$orus_io$elm_spa$Internal$pageDefinition),
				extractIdentity(shared));
		}
	});
var $orus_io$elm_spa$Effect$toCmd = F2(
	function (_v0, effect) {
		var fromSharedMsg = _v0.a;
		var fromSubMsg = _v0.b;
		switch (effect.$) {
			case 0:
				return $elm$core$Platform$Cmd$none;
			case 1:
				var cmd = effect.a;
				return A2($elm$core$Platform$Cmd$map, fromSubMsg, cmd);
			case 2:
				var cmd = effect.a;
				return A2($elm$core$Platform$Cmd$map, fromSharedMsg, cmd);
			case 3:
				var msg = effect.a;
				return A2(
					$elm$core$Task$perform,
					fromSharedMsg,
					$elm$core$Task$succeed(msg));
			default:
				var list = effect.a;
				return $elm$core$Platform$Cmd$batch(
					A2(
						$elm$core$List$map,
						$orus_io$elm_spa$Effect$toCmd(
							_Utils_Tuple2(fromSharedMsg, fromSubMsg)),
						list));
		}
	});
var $elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 1) {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + $elm$core$String$fromInt(port_));
		}
	});
var $elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 1) {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var $elm$url$Url$toString = function (url) {
	var http = function () {
		var _v0 = url.cD;
		if (!_v0) {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		$elm$url$Url$addPrefixed,
		'#',
		url.ch,
		A3(
			$elm$url$Url$addPrefixed,
			'?',
			url.bJ,
			_Utils_ap(
				A2(
					$elm$url$Url$addPort,
					url.cA,
					_Utils_ap(http, url.ck)),
				url.bF)));
};
var $orus_io$elm_spa$Spa$addPage = F4(
	function (_v0, matchRoute, page, builder) {
		var viewMap1 = _v0.a;
		var viewMap2 = _v0.b;
		var setupCurrentPage = function (_v27) {
			var _v28 = _v27.a;
			var core = _v28.a;
			var currentPage = _v28.b;
			var previousCmd = _v27.b;
			var _v22 = function () {
				if (!currentPage.$) {
					var _v24 = matchRoute(core.B);
					if (!_v24.$) {
						var pageFlags = _v24.a;
						var _v25 = A3($orus_io$elm_spa$Spa$setupPage, builder.cg, core.y, page);
						if (!_v25.$) {
							var setup = _v25.a;
							var _v26 = setup.cn(pageFlags);
							var newCurrentPage = _v26.a;
							var newCurrentPageEffect = _v26.b;
							return _Utils_Tuple2(
								$orus_io$elm_spa$Spa$Current(newCurrentPage),
								A2(
									$orus_io$elm_spa$Effect$toCmd,
									_Utils_Tuple2(
										$orus_io$elm_spa$Spa$SharedMsg,
										A2($elm$core$Basics$composeR, $orus_io$elm_spa$Spa$CurrentMsg, $orus_io$elm_spa$Spa$PageMsg)),
									newCurrentPageEffect));
						} else {
							return _Utils_Tuple2(
								$orus_io$elm_spa$Spa$NoPage,
								A2(
									$elm$browser$Browser$Navigation$replaceUrl,
									core.aV,
									builder.cC(core.B)));
						}
					} else {
						return _Utils_Tuple2($orus_io$elm_spa$Spa$NoPage, $elm$core$Platform$Cmd$none);
					}
				} else {
					var prevPage = currentPage;
					return _Utils_Tuple2(
						$orus_io$elm_spa$Spa$Previous(prevPage),
						$elm$core$Platform$Cmd$none);
				}
			}();
			var pageModel = _v22.a;
			var cmd = _v22.b;
			return _Utils_Tuple2(
				_Utils_Tuple2(core, pageModel),
				$elm$core$Platform$Cmd$batch(
					_List_fromArray(
						[
							A2($elm$core$Platform$Cmd$map, $orus_io$elm_spa$Spa$mapPreviousMsg, previousCmd),
							cmd
						])));
		};
		return {
			cg: builder.cg,
			cn: F3(
				function (flags, url, key) {
					return setupCurrentPage(
						A3(builder.cn, flags, url, key));
				}),
			cC: builder.cC,
			cN: function (_v1) {
				var core = _v1.a;
				var currentPage = _v1.b;
				return $elm$core$Platform$Sub$batch(
					_List_fromArray(
						[
							function () {
							if (currentPage.$ === 1) {
								var current = currentPage.a;
								var _v3 = A3($orus_io$elm_spa$Spa$setupPage, builder.cg, core.y, page);
								if (!_v3.$) {
									var setup = _v3.a;
									return A2(
										$elm$core$Platform$Sub$map,
										A2($elm$core$Basics$composeR, $orus_io$elm_spa$Spa$CurrentMsg, $orus_io$elm_spa$Spa$PageMsg),
										setup.cN(current));
								} else {
									return $elm$core$Platform$Sub$none;
								}
							} else {
								return $elm$core$Platform$Sub$none;
							}
						}(),
							A2(
							$elm$core$Platform$Sub$map,
							$orus_io$elm_spa$Spa$mapPreviousMsg,
							builder.cN(
								$orus_io$elm_spa$Spa$modelPrevious(
									_Utils_Tuple2(core, currentPage))))
						]));
			},
			cQ: builder.cQ,
			cR: F2(
				function (msg, _v4) {
					var core = _v4.a;
					var currentPage = _v4.b;
					switch (msg.$) {
						case 1:
							if (!msg.a.$) {
								var pageMsg = msg.a.a;
								var _v6 = $orus_io$elm_spa$Spa$currentPageModel(currentPage);
								if (!_v6.$) {
									var pageModel = _v6.a;
									var _v7 = A3($orus_io$elm_spa$Spa$setupPage, builder.cg, core.y, page);
									if (!_v7.$) {
										var setup = _v7.a;
										var _v8 = A2(setup.cR, pageMsg, pageModel);
										var pageModelNew = _v8.a;
										var pageEffect = _v8.b;
										return _Utils_Tuple2(
											_Utils_Tuple2(
												core,
												$orus_io$elm_spa$Spa$Current(pageModelNew)),
											A2(
												$orus_io$elm_spa$Effect$toCmd,
												_Utils_Tuple2(
													$orus_io$elm_spa$Spa$SharedMsg,
													A2($elm$core$Basics$composeR, $orus_io$elm_spa$Spa$CurrentMsg, $orus_io$elm_spa$Spa$PageMsg)),
												pageEffect));
									} else {
										return _Utils_Tuple2(
											_Utils_Tuple2(core, $orus_io$elm_spa$Spa$NoPage),
											A2(
												$elm$browser$Browser$Navigation$replaceUrl,
												core.aV,
												builder.cC(core.B)));
									}
								} else {
									return _Utils_Tuple2(
										_Utils_Tuple2(core, currentPage),
										$elm$core$Platform$Cmd$none);
								}
							} else {
								var pageMsg = msg.a.a;
								var _v9 = A2(
									builder.cR,
									$orus_io$elm_spa$Spa$PageMsg(pageMsg),
									$orus_io$elm_spa$Spa$modelPrevious(
										_Utils_Tuple2(core, currentPage)));
								var _v10 = _v9.a;
								var previousCore = _v10.a;
								var previousPage = _v10.b;
								var previousCmd = _v9.b;
								return _Utils_Tuple2(
									_Utils_Tuple2(
										core,
										$orus_io$elm_spa$Spa$Previous(previousPage)),
									A2($elm$core$Platform$Cmd$map, $orus_io$elm_spa$Spa$mapPreviousMsg, previousCmd));
							}
						case 0:
							var sharedMsg = msg.a;
							var _v11 = A2(
								builder.cR,
								$orus_io$elm_spa$Spa$SharedMsg(sharedMsg),
								$orus_io$elm_spa$Spa$modelPrevious(
									_Utils_Tuple2(core, currentPage)));
							var _v12 = _v11.a;
							var previousCore = _v12.a;
							var previousPage = _v12.b;
							var previousCmd = _v11.b;
							var _v13 = function () {
								var _v14 = _Utils_Tuple2(previousPage, currentPage);
								if (!_v14.a.$) {
									if (_v14.b.$ === 1) {
										var _v15 = _v14.a;
										var _v16 = A3($orus_io$elm_spa$Spa$setupPage, builder.cg, previousCore.y, page);
										if (!_v16.$) {
											var setup = _v16.a;
											return _Utils_Tuple2(currentPage, $elm$core$Platform$Cmd$none);
										} else {
											return _Utils_Tuple2(
												$orus_io$elm_spa$Spa$NoPage,
												A2(
													$elm$browser$Browser$Navigation$replaceUrl,
													core.aV,
													builder.cC(core.B)));
										}
									} else {
										var _v17 = _v14.a;
										return _Utils_Tuple2($orus_io$elm_spa$Spa$NoPage, $elm$core$Platform$Cmd$none);
									}
								} else {
									var previous = _v14.a;
									return _Utils_Tuple2(
										$orus_io$elm_spa$Spa$Previous(previous),
										$elm$core$Platform$Cmd$none);
								}
							}();
							var newPage = _v13.a;
							var newPageEffect = _v13.b;
							return _Utils_Tuple2(
								_Utils_Tuple2(
									_Utils_update(
										previousCore,
										{B: core.B}),
									newPage),
								$elm$core$Platform$Cmd$batch(
									_List_fromArray(
										[
											A2($elm$core$Platform$Cmd$map, $orus_io$elm_spa$Spa$mapPreviousMsg, previousCmd),
											A2(
											$elm$core$Platform$Cmd$map,
											A2($elm$core$Basics$composeR, $orus_io$elm_spa$Spa$CurrentMsg, $orus_io$elm_spa$Spa$PageMsg),
											newPageEffect)
										])));
						case 2:
							var urlRequest = msg.a;
							if (!urlRequest.$) {
								var url = urlRequest.a;
								return _Utils_Tuple2(
									_Utils_Tuple2(core, currentPage),
									A2(
										$elm$browser$Browser$Navigation$pushUrl,
										core.aV,
										$elm$url$Url$toString(url)));
							} else {
								var url = urlRequest.a;
								return _Utils_Tuple2(
									_Utils_Tuple2(core, currentPage),
									$elm$browser$Browser$Navigation$load(url));
							}
						default:
							var url = msg.a;
							return setupCurrentPage(
								A2(
									builder.cR,
									$orus_io$elm_spa$Spa$UrlChange(url),
									$orus_io$elm_spa$Spa$modelPrevious(
										_Utils_Tuple2(core, currentPage))));
					}
				}),
			cT: function (_v19) {
				var core = _v19.a;
				var currentPage = _v19.b;
				if (currentPage.$ === 1) {
					var pageModel = currentPage.a;
					var _v21 = A3($orus_io$elm_spa$Spa$setupPage, builder.cg, core.y, page);
					if (!_v21.$) {
						var setup = _v21.a;
						return A2(
							viewMap1,
							A2($elm$core$Basics$composeR, $orus_io$elm_spa$Spa$CurrentMsg, $orus_io$elm_spa$Spa$PageMsg),
							setup.cT(pageModel));
					} else {
						return A2(
							viewMap2,
							$orus_io$elm_spa$Spa$mapPreviousMsg,
							builder.cT(
								$orus_io$elm_spa$Spa$modelPrevious(
									_Utils_Tuple2(core, currentPage))));
					}
				} else {
					return A2(
						viewMap2,
						$orus_io$elm_spa$Spa$mapPreviousMsg,
						builder.cT(
							$orus_io$elm_spa$Spa$modelPrevious(
								_Utils_Tuple2(core, currentPage))));
				}
			}
		};
	});
var $orus_io$elm_spa$Spa$addPublicPage = F3(
	function (mappers, matchRoute, page) {
		return A3(
			$orus_io$elm_spa$Spa$addPage,
			mappers,
			matchRoute,
			$orus_io$elm_spa$Spa$PublicPage(page));
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$browser$Browser$application = _Browser_application;
var $orus_io$elm_spa$Spa$modelShared = function (_v0) {
	var core = _v0.a;
	return core.y;
};
var $orus_io$elm_spa$Spa$application = F2(
	function (_v0, builder) {
		var toDocument = _v0.cP;
		return {
			cn: builder.cn,
			cv: $orus_io$elm_spa$Spa$UrlChange,
			cw: $orus_io$elm_spa$Spa$UrlRequest,
			cN: builder.cN,
			cR: builder.cR,
			cT: function (model) {
				return A2(
					toDocument,
					$orus_io$elm_spa$Spa$modelShared(model),
					builder.cT(model));
			}
		};
	});
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$View$defaultView = {
	bk: _List_fromArray(
		[
			$elm$html$Html$text('You should not see this page unless you forgot to add pages to your application')
		]),
	bW: 'No page'
};
var $author$project$Shared$init = F2(
	function (_v0, key) {
		return _Utils_Tuple2(
			{b8: $elm$core$Maybe$Nothing, ae: $elm$core$Maybe$Nothing, aV: key},
			$elm$core$Platform$Cmd$none);
	});
var $orus_io$elm_spa$Spa$initModel = F3(
	function (route, key, shared) {
		return _Utils_Tuple2(
			{B: route, aV: key, y: shared},
			$orus_io$elm_spa$Spa$NoPage);
	});
var $orus_io$elm_spa$Spa$builderInit = F5(
	function (toRoute, sharedInit, flags, url, key) {
		var _v0 = A2(sharedInit, flags, key);
		var shared = _v0.a;
		var sharedCmd = _v0.b;
		return _Utils_Tuple2(
			A3(
				$orus_io$elm_spa$Spa$initModel,
				toRoute(url),
				key,
				shared),
			A2($elm$core$Platform$Cmd$map, $orus_io$elm_spa$Spa$SharedMsg, sharedCmd));
	});
var $orus_io$elm_spa$Spa$builderRootUpdate = F4(
	function (toRoute, sharedUpdate, msg, _v0) {
		var core = _v0.a;
		var page = _v0.b;
		switch (msg.$) {
			case 0:
				var sharedMsg = msg.a;
				var _v2 = A2(sharedUpdate, sharedMsg, core.y);
				var sharedNew = _v2.a;
				var sharedCmd = _v2.b;
				return _Utils_Tuple2(
					_Utils_Tuple2(
						_Utils_update(
							core,
							{y: sharedNew}),
						page),
					A2($elm$core$Platform$Cmd$map, $orus_io$elm_spa$Spa$SharedMsg, sharedCmd));
			case 3:
				var url = msg.a;
				return _Utils_Tuple2(
					_Utils_Tuple2(
						_Utils_update(
							core,
							{
								B: toRoute(url)
							}),
						$orus_io$elm_spa$Spa$NoPage),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					_Utils_Tuple2(core, page),
					$elm$core$Platform$Cmd$none);
		}
	});
var $orus_io$elm_spa$Spa$init = function (shared) {
	return {
		cg: shared.cg,
		cn: A2($orus_io$elm_spa$Spa$builderInit, shared.cQ, shared.cn),
		cC: shared.cC,
		cN: function (_v0) {
			var core = _v0.a;
			return A2(
				$elm$core$Platform$Sub$map,
				$orus_io$elm_spa$Spa$SharedMsg,
				shared.cN(core.y));
		},
		cQ: shared.cQ,
		cR: A2($orus_io$elm_spa$Spa$builderRootUpdate, shared.cQ, shared.cR),
		cT: $elm$core$Basics$always(shared.ca)
	};
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $author$project$View$map = F2(
	function (tomsg, view) {
		return {
			bk: A2(
				$elm$core$List$map,
				$elm$html$Html$map(tomsg),
				view.bk),
			bW: view.bW
		};
	});
var $author$project$Main$mappers = _Utils_Tuple2($author$project$View$map, $author$project$View$map);
var $author$project$Route$matchDay = function (r) {
	if (r.$ === 1) {
		var day = r.a;
		return $elm$core$Maybe$Just(day);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Route$Home = {$: 0};
var $author$project$Route$matchAny = F2(
	function (any, r) {
		return _Utils_eq(any, r) ? $elm$core$Maybe$Just(0) : $elm$core$Maybe$Nothing;
	});
var $author$project$Route$matchHome = function (r) {
	return A2($author$project$Route$matchAny, $author$project$Route$Home, r);
};
var $orus_io$elm_spa$Internal$Page = $elm$core$Basics$identity;
var $orus_io$elm_spa$Spa$Page$element = function (_v0) {
	var init = _v0.cn;
	var update = _v0.cR;
	var view = _v0.cT;
	var subscriptions = _v0.cN;
	return {cn: init, cN: subscriptions, cR: update, cT: view};
};
var $orus_io$elm_spa$Effect$Batch = function (a) {
	return {$: 4, a: a};
};
var $orus_io$elm_spa$Effect$batch = $orus_io$elm_spa$Effect$Batch;
var $orus_io$elm_spa$Effect$add = F2(
	function (nextEffect, _v0) {
		var model = _v0.a;
		var effect = _v0.b;
		return _Utils_Tuple2(
			model,
			$orus_io$elm_spa$Effect$batch(
				_List_fromArray(
					[effect, nextEffect])));
	});
var $orus_io$elm_spa$Effect$Cmd = function (a) {
	return {$: 1, a: a};
};
var $orus_io$elm_spa$Effect$fromCmd = $orus_io$elm_spa$Effect$Cmd;
var $orus_io$elm_spa$Effect$addCmd = A2($elm$core$Basics$composeR, $orus_io$elm_spa$Effect$fromCmd, $orus_io$elm_spa$Effect$add);
var $author$project$Pages$Day$CodeSourceReceived = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 2};
var $elm$http$Http$Receiving = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$Timeout_ = {$: 1};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Maybe$isJust = function (maybe) {
	if (!maybe.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === -1) {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === -1) {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 4, a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 3, a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$NetworkError = {$: 2};
var $elm$http$Http$Timeout = {$: 1};
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (!result.$) {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 0:
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 1:
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 2:
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 3:
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.cL));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectString = function (toMsg) {
	return A2(
		$elm$http$Http$expectStringResponse,
		toMsg,
		$elm$http$Http$resolve($elm$core$Result$Ok));
};
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$http$Http$Request = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {bM: reqs, bU: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (!cmd.$) {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 1) {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.bX;
							if (_v4.$ === 1) {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.bM));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.bU)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (!cmd.$) {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					b2: r.b2,
					bk: r.bk,
					ce: A2(_Http_mapExpect, func, r.ce),
					bs: r.bs,
					cs: r.cs,
					cO: r.cO,
					bX: r.bX,
					cS: r.cS
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{b2: false, bk: r.bk, ce: r.ce, bs: r.bs, cs: r.cs, cO: r.cO, bX: r.bX, cS: r.cS}));
};
var $elm$http$Http$get = function (r) {
	return $elm$http$Http$request(
		{bk: $elm$http$Http$emptyBody, ce: r.ce, bs: _List_Nil, cs: 'GET', cO: $elm$core$Maybe$Nothing, bX: $elm$core$Maybe$Nothing, cS: r.cS});
};
var $author$project$Pages$Day$githubSourceCode = function (day) {
	return 'https://raw.githubusercontent.com/n1k0/elm-advent-2021/main/src/Days/Day' + ($elm$core$String$fromInt(day) + '.elm');
};
var $author$project$Pages$Day$requestSourceCode = function (day) {
	return $elm$http$Http$get(
		{
			ce: $elm$http$Http$expectString($author$project$Pages$Day$CodeSourceReceived),
			cS: $author$project$Pages$Day$githubSourceCode(day)
		});
};
var $author$project$Shared$SetCurrentDay = function (a) {
	return {$: 0, a: a};
};
var $author$project$Shared$setCurrentDay = $author$project$Shared$SetCurrentDay;
var $orus_io$elm_spa$Effect$Shared = function (a) {
	return {$: 3, a: a};
};
var $orus_io$elm_spa$Effect$fromShared = $orus_io$elm_spa$Effect$Shared;
var $orus_io$elm_spa$Effect$withShared = F2(
	function (shared, model) {
		return _Utils_Tuple2(
			model,
			$orus_io$elm_spa$Effect$fromShared(shared));
	});
var $author$project$Pages$Day$init = function (day) {
	return A2(
		$orus_io$elm_spa$Effect$addCmd,
		$author$project$Pages$Day$requestSourceCode(day),
		A2(
			$orus_io$elm_spa$Effect$withShared,
			$author$project$Shared$setCurrentDay(
				$elm$core$Maybe$Just(day)),
			{aO: day, aj: ''}));
};
var $orus_io$elm_spa$Effect$None = {$: 0};
var $orus_io$elm_spa$Effect$none = $orus_io$elm_spa$Effect$None;
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$String$lines = _String_lines;
var $elm$core$Basics$not = _Basics_not;
var $elm$core$String$trim = _String_trim;
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Pages$Day$parseSourceCode = function (string) {
	return A2(
		$elm$core$Maybe$withDefault,
		'Error: couldn\'t parse source code',
		$elm$core$List$head(
			A2(
				$elm$core$String$split,
				'-- Answer',
				$elm$core$String$trim(
					A2(
						$elm$core$String$join,
						'\n',
						A2(
							$elm$core$List$filter,
							A2(
								$elm$core$Basics$composeL,
								$elm$core$Basics$not,
								$elm$core$String$startsWith('import ')),
							A2(
								$elm$core$List$filter,
								A2(
									$elm$core$Basics$composeL,
									$elm$core$Basics$not,
									$elm$core$String$startsWith('module ')),
								$elm$core$String$lines(string))))))));
};
var $author$project$Pages$Day$update = F2(
	function (msg, model) {
		if (!msg.$) {
			return _Utils_Tuple2(model, $orus_io$elm_spa$Effect$none);
		} else {
			if (msg.a.$ === 1) {
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{aj: 'Error while fetching source code.'}),
					$orus_io$elm_spa$Effect$none);
			} else {
				var sourceCode = msg.a.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							aj: $author$project$Pages$Day$parseSourceCode(sourceCode)
						}),
					$orus_io$elm_spa$Effect$none);
			}
		}
	});
var $elm$html$Html$a = _VirtualDom_node('a');
var $author$project$Pages$Day$adventOfCodeSource = function (day) {
	return 'https://adventofcode.com/2021/day/' + $elm$core$String$fromInt(day);
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$code = _VirtualDom_node('code');
var $elm$html$Html$div = _VirtualDom_node('div');
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode = $elm$core$Basics$identity;
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (!ra.$) {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {bn: col, cB: problem, cJ: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.cJ, p.bn, p.cB);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 0:
					return list;
				case 1:
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0;
		var _v1 = parse(
			{bn: 1, f: _List_Nil, h: 1, d: 0, cJ: 1, a5: src});
		if (!_v1.$) {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (!_v0.$) {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style1 = 2;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2 = 3;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3 = 4;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4 = 5;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5 = 6;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style6 = 7;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$syntaxToStyle = function (syntax) {
	switch (syntax) {
		case 0:
			return _Utils_Tuple2(3, 'elm-s');
		case 1:
			return _Utils_Tuple2(4, 'elm-bs');
		case 2:
			return _Utils_Tuple2(5, 'elm-gs');
		case 3:
			return _Utils_Tuple2(7, 'elm-c');
		case 4:
			return _Utils_Tuple2(4, 'elm-k');
		case 5:
			return _Utils_Tuple2(6, 'elm-f');
		case 6:
			return _Utils_Tuple2(5, 'elm-ts');
		default:
			return _Utils_Tuple2(2, 'elm-n');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$newLine = function (fragments) {
	return {ci: fragments, P: $elm$core$Maybe$Nothing};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak = {$: 2};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Comment = 1;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default = 0;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toFragment = F2(
	function (toStyle, _v0) {
		var syntax = _v0.a;
		var text = _v0.b;
		switch (syntax.$) {
			case 0:
				return {b1: '', cG: 0, j: text};
			case 1:
				return {b1: '', cG: 1, j: text};
			case 2:
				return {b1: '', cG: 0, j: text};
			default:
				var c = syntax.a;
				var _v2 = toStyle(c);
				var requiredStyle = _v2.a;
				var additionalClass = _v2.b;
				return {b1: additionalClass, cG: requiredStyle, j: text};
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLinesHelp = F3(
	function (toStyle, _v0, _v1) {
		var syntax = _v0.a;
		var text = _v0.b;
		var lines = _v1.a;
		var fragments = _v1.b;
		var maybeLastSyntax = _v1.c;
		if (_Utils_eq(syntax, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak)) {
			return _Utils_Tuple3(
				A2(
					$elm$core$List$cons,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$newLine(fragments),
					lines),
				_List_fromArray(
					[
						A2(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toFragment,
						toStyle,
						_Utils_Tuple2(syntax, text))
					]),
				$elm$core$Maybe$Nothing);
		} else {
			if (_Utils_eq(
				$elm$core$Maybe$Just(syntax),
				maybeLastSyntax)) {
				if (fragments.b) {
					var headFrag = fragments.a;
					var tailFrags = fragments.b;
					return _Utils_Tuple3(
						lines,
						A2(
							$elm$core$List$cons,
							_Utils_update(
								headFrag,
								{
									j: _Utils_ap(text, headFrag.j)
								}),
							tailFrags),
						maybeLastSyntax);
				} else {
					return _Utils_Tuple3(
						lines,
						A2(
							$elm$core$List$cons,
							A2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toFragment,
								toStyle,
								_Utils_Tuple2(syntax, text)),
							fragments),
						maybeLastSyntax);
				}
			} else {
				return _Utils_Tuple3(
					lines,
					A2(
						$elm$core$List$cons,
						A2(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toFragment,
							toStyle,
							_Utils_Tuple2(syntax, text)),
						fragments),
					$elm$core$Maybe$Just(syntax));
			}
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLines = F2(
	function (toStyle, revTokens) {
		return function (_v0) {
			var lines = _v0.a;
			var frags = _v0.b;
			return A2(
				$elm$core$List$cons,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$newLine(frags),
				lines);
		}(
			A3(
				$elm$core$List$foldl,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLinesHelp(toStyle),
				_Utils_Tuple3(_List_Nil, _List_Nil, $elm$core$Maybe$Nothing),
				revTokens));
	});
var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0;
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (!step.$) {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return function (s) {
			return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
		};
	});
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					func(a),
					s1);
			} else {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 1, a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$toAdvancedStep = function (step) {
	if (!step.$) {
		var s = step.a;
		return $elm$parser$Parser$Advanced$Loop(s);
	} else {
		var a = step.a;
		return $elm$parser$Parser$Advanced$Done(a);
	}
};
var $elm$parser$Parser$loop = F2(
	function (state, callback) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			state,
			function (s) {
				return A2(
					$elm$parser$Parser$map,
					$elm$parser$Parser$toAdvancedStep,
					callback(s));
			});
	});
var $elm$parser$Parser$Done = function (a) {
	return {$: 1, a: a};
};
var $elm$parser$Parser$Loop = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0;
		return function (s0) {
			var _v1 = parseA(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				var _v2 = callback(a);
				var parseB = _v2;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
				}
			}
		};
	});
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment = {$: 1};
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					A2(
						func,
						A3($elm$core$String$slice, s0.d, s1.d, s0.a5),
						a),
					s1);
			}
		};
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak = function (c) {
	return c === '\n';
};
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 8, a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {bn: col, b7: contextStack, cB: problem, cJ: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 0};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.cJ, s.bn, x, s.f));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.d, s.cJ, s.bn, s.a5);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{bn: newCol, f: s.f, h: s.h, d: newOffset, cJ: newRow, a5: s.a5});
	};
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $elm$parser$Parser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.a5);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.d, offset) < 0,
					0,
					{bn: col, f: s0.f, h: s0.h, d: offset, cJ: row, a5: s0.a5});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return function (s) {
		return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.d, s.cJ, s.bn, s);
	};
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0;
		var parseB = _v1;
		return function (s0) {
			var _v2 = parseA(s0);
			if (_v2.$ === 1) {
				var p = _v2.a;
				var x = _v2.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v2.a;
				var a = _v2.b;
				var s1 = _v2.c;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p1 || p2,
						A2(func, a, b),
						s2);
				}
			}
		};
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile = F2(
	function (isNotRelevant, previousParser) {
		return A2(
			$elm$parser$Parser$ignorer,
			previousParser,
			$elm$parser$Parser$chompWhile(isNotRelevant));
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$inlineComment = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _List_fromArray(
			[
				_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment, b)
			]);
	},
	$elm$parser$Parser$getChompedString(
		A2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak),
			$elm$parser$Parser$symbol('--'))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$addThen = F3(
	function (f, list, plist) {
		return A2(
			$elm$parser$Parser$andThen,
			function (n) {
				return f(
					_Utils_ap(n, list));
			},
			plist);
	});
var $elm$parser$Parser$UnexpectedChar = {$: 11};
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.d, s.a5);
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{bn: 1, f: s.f, h: s.h, d: s.d + 1, cJ: s.cJ + 1, a5: s.a5}) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{bn: s.bn + 1, f: s.f, h: s.h, d: newOffset, cJ: s.cJ, a5: s.a5}));
		};
	});
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen = F3(
	function (f, list, pn) {
		return A2(
			$elm$parser$Parser$andThen,
			function (n) {
				return f(
					A2($elm$core$List$cons, n, list));
			},
			pn);
	});
var $elm$parser$Parser$ExpectingEnd = {$: 10};
var $elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			$elm$core$String$length(s.a5),
			s.d) ? A3($elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (!_v1.$) {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable = F2(
	function (options, revAList) {
		var defaultMap = options.bo;
		var isNotRelevant = options.bA;
		var end = options.g;
		var innerParsers = options.bx;
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(
						A2(
							$elm$core$List$cons,
							defaultMap(end),
							revAList)),
					$elm$parser$Parser$symbol(end)),
					A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(revAList),
					$elm$parser$Parser$end),
					A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$addThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable(options),
					revAList,
					$elm$parser$Parser$oneOf(innerParsers)),
					A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable(options),
					revAList,
					A2(
						$elm$parser$Parser$map,
						defaultMap,
						$elm$parser$Parser$getChompedString(
							A2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
								isNotRelevant,
								$elm$parser$Parser$chompIf(
									$elm$core$Basics$always(true))))))
				]));
	});
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable = F3(
	function (nestLevel, options, revAList) {
		var defaultMap = options.bo;
		var isNotRelevant = options.bA;
		var start = options.i;
		var end = options.g;
		var innerParsers = options.bx;
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$andThen,
					function (n) {
						return (nestLevel === 1) ? $elm$parser$Parser$succeed(n) : A3($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable, nestLevel - 1, options, n);
					},
					A2(
						$elm$parser$Parser$map,
						$elm$core$Basics$always(
							A2(
								$elm$core$List$cons,
								defaultMap(end),
								revAList)),
						$elm$parser$Parser$symbol(end))),
					A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen,
					A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable, nestLevel + 1, options),
					revAList,
					A2(
						$elm$parser$Parser$map,
						defaultMap,
						$elm$parser$Parser$getChompedString(
							A2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
								isNotRelevant,
								$elm$parser$Parser$symbol(start))))),
					A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$addThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable(options),
					revAList,
					$elm$parser$Parser$oneOf(innerParsers)),
					A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(revAList),
					$elm$parser$Parser$end),
					A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen,
					A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable, nestLevel, options),
					revAList,
					A2(
						$elm$parser$Parser$map,
						defaultMap,
						$elm$parser$Parser$getChompedString(
							A2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
								isNotRelevant,
								$elm$parser$Parser$chompIf(
									$elm$core$Basics$always(true))))))
				]));
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$parser$Parser$Problem = function (a) {
	return {$: 12, a: a};
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return function (s) {
		return A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedHelp = F2(
	function (options, revAList) {
		var start = options.i;
		var end = options.g;
		var isNotRelevant = options.bA;
		var _v0 = _Utils_Tuple2(
			$elm$core$String$uncons(options.i),
			$elm$core$String$uncons(options.g));
		if (_v0.a.$ === 1) {
			var _v1 = _v0.a;
			return $elm$parser$Parser$problem('Trying to parse a delimited helper, but the start token cannot be an empty string!');
		} else {
			if (_v0.b.$ === 1) {
				var _v2 = _v0.b;
				return $elm$parser$Parser$problem('Trying to parse a delimited helper, but the end token cannot be an empty string!');
			} else {
				var _v3 = _v0.a.a;
				var startChar = _v3.a;
				var _v4 = _v0.b.a;
				var endChar = _v4.a;
				return options.bz ? A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable,
					1,
					_Utils_update(
						options,
						{
							bA: function (c) {
								return isNotRelevant(c) && ((!_Utils_eq(c, startChar)) && (!_Utils_eq(c, endChar)));
							}
						}),
					revAList) : A2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable,
					_Utils_update(
						options,
						{
							bA: function (c) {
								return isNotRelevant(c) && (!_Utils_eq(c, endChar));
							}
						}),
					revAList);
			}
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited = function (options) {
	var start = options.i;
	var isNotRelevant = options.bA;
	var defaultMap = options.bo;
	return A2(
		$elm$parser$Parser$andThen,
		function (n) {
			return A2(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedHelp,
				options,
				_List_fromArray(
					[n]));
		},
		A2(
			$elm$parser$Parser$map,
			$elm$core$Basics$always(
				defaultMap(start)),
			$elm$parser$Parser$symbol(start)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreakList = A2(
	$elm$parser$Parser$map,
	function (_v0) {
		return _List_fromArray(
			[
				_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak, '\n')
			]);
	},
	$elm$parser$Parser$symbol('\n'));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$multilineComment = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	{
		bo: function (b) {
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment, b);
		},
		g: '-}',
		bx: _List_fromArray(
			[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreakList]),
		bz: true,
		bA: function (c) {
			return !$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c);
		},
		i: '{-'
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$comment = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$inlineComment, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$multilineComment]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$BasicSymbol = 1;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C = function (a) {
	return {$: 3, a: a};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Capitalized = 3;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$GroupSymbol = 2;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword = 4;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal = {$: 0};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Number = 7;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile = function (isNotRelevant) {
	return A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(0),
			$elm$parser$Parser$chompIf(isNotRelevant)),
		$elm$parser$Parser$chompWhile(isNotRelevant));
};
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$basicSymbols = $elm$core$Set$fromList(
	_List_fromArray(
		['|', '.', '=', '\\', '/', '(', ')', '-', '>', '<', ':', '+', '!', '$', '%', '&', '*']));
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$member, key, dict);
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isBasicSymbol = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$basicSymbols);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$basicSymbol = $elm$parser$Parser$getChompedString(
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isBasicSymbol));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$groupSymbols = $elm$core$Set$fromList(
	_List_fromArray(
		[',', '[', ']', '{', '}']));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isGroupSymbol = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$groupSymbols);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isStringLiteralChar = function (c) {
	return (c === '\"') || (c === '\'');
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace = function (c) {
	return (c === ' ') || (c === '\t');
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace = function (c) {
	return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isVariableChar = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isBasicSymbol(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isGroupSymbol(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isStringLiteralChar(c))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$capitalized = $elm$parser$Parser$getChompedString(
	A2(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isVariableChar,
		$elm$parser$Parser$chompIf($elm$core$Char$isUpper)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$groupSymbol = $elm$parser$Parser$getChompedString(
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isGroupSymbol));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Function = 5;
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0;
	return function (s0) {
		var _v1 = parse(s0);
		if (_v1.$ === 1) {
			var x = _v1.b;
			return A2($elm$parser$Parser$Advanced$Bad, false, x);
		} else {
			var a = _v1.b;
			var s1 = _v1.c;
			return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
		}
	};
};
var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixSet = $elm$core$Set$fromList(
	_List_fromArray(
		['+', '-', '/', '*', '=', '.', '$', '<', '>', ':', '&', '|', '^', '?', '%', '#', '@', '~', '!', ',']));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isInfixChar = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixParser = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(5),
			b);
	},
	$elm$parser$Parser$getChompedString(
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(0),
					$elm$parser$Parser$backtrackable(
						$elm$parser$Parser$symbol('('))),
				$elm$parser$Parser$backtrackable(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isInfixChar))),
			$elm$parser$Parser$backtrackable(
				$elm$parser$Parser$symbol(')')))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$keywordSet = $elm$core$Set$fromList(
	_List_fromArray(
		['as', 'where', 'let', 'in', 'if', 'else', 'then', 'case', 'of', 'type', 'alias']));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isKeyword = function (str) {
	return A2($elm$core$Set$member, str, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$keywordSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isNumber = function (c) {
	return $elm$core$Char$isDigit(c) || (c === '.');
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$positiveNumber = A2(
	$elm$parser$Parser$ignorer,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed(0),
		$elm$parser$Parser$chompIf($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isNumber)),
	$elm$parser$Parser$chompWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isNumber));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$negativeNumber = A2(
	$elm$parser$Parser$ignorer,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed(0),
		$elm$parser$Parser$backtrackable(
			$elm$parser$Parser$symbol('-'))),
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$positiveNumber);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$number = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$positiveNumber, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$negativeNumber]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$variable = $elm$parser$Parser$getChompedString(
	A2(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isVariableChar,
		$elm$parser$Parser$chompIf($elm$core$Char$isLower)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$weirdText = $elm$parser$Parser$getChompedString(
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isVariableChar));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBodyContent = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(7),
					b);
			},
			$elm$parser$Parser$getChompedString($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$number)),
			A2(
			$elm$parser$Parser$map,
			$elm$core$Basics$always(
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(3),
					'()')),
			$elm$parser$Parser$symbol('()')),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixParser,
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(1),
					b);
			},
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$basicSymbol),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(2),
					b);
			},
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$groupSymbol),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(3),
					b);
			},
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$capitalized),
			A2(
			$elm$parser$Parser$map,
			function (n) {
				return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isKeyword(n) ? _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(4),
					n) : _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, n);
			},
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$variable),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
			},
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$weirdText)
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$String = 0;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapableSet = $elm$core$Set$fromList(
	_List_fromArray(
		['\'', '\"', '\\', 'n', 'r', 't', 'b', 'f', 'v']));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapableChar = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapableSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapable = A2(
	$elm$parser$Parser$ignorer,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed(0),
		$elm$parser$Parser$backtrackable(
			$elm$parser$Parser$symbol('\\'))),
	$elm$parser$Parser$chompIf($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapableChar));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$elmEscapable = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _List_fromArray(
			[
				_Utils_Tuple2(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(3),
				b)
			]);
	},
	$elm$parser$Parser$getChompedString($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapable));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapable = function (c) {
	return c === '\\';
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringDelimiter = {
	bo: function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(0),
			b);
	},
	g: '\"',
	bx: _List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreakList, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$elmEscapable]),
	bz: false,
	bA: function (c) {
		return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapable(c));
	},
	i: '\"'
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$doubleQuote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringDelimiter);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$quote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	_Utils_update(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringDelimiter,
		{g: '\'', i: '\''}));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$tripleDoubleQuote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	_Utils_update(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringDelimiter,
		{g: '\"\"\"', i: '\"\"\"'}));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringLiteral = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$tripleDoubleQuote, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$doubleQuote, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$quote]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreak = A2(
	$elm$parser$Parser$map,
	function (_v0) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak, '\n');
	},
	$elm$parser$Parser$symbol('\n'));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$space = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
	},
	$elm$parser$Parser$getChompedString(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$checkContext = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$space),
				A2(
				$elm$parser$Parser$andThen,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$checkContext,
				A2(
					$elm$parser$Parser$map,
					function (n) {
						return A2($elm$core$List$cons, n, revTokens);
					},
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreak)),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$comment)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (ns) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(ns, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringLiteral),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBodyContent),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$TypeSignature = 6;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigIsNotRelevant = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || ((c === '(') || ((c === ')') || ((c === '-') || (c === ',')))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigContentHelp = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$map,
			$elm$core$Basics$always(
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(6),
					'()')),
			$elm$parser$Parser$symbol('()')),
			A2(
			$elm$parser$Parser$map,
			$elm$core$Basics$always(
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(1),
					'->')),
			$elm$parser$Parser$symbol('->')),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
			},
			$elm$parser$Parser$getChompedString(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
					function (c) {
						return (c === '(') || ((c === ')') || ((c === '-') || (c === ',')));
					}))),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(6),
					b);
			},
			$elm$parser$Parser$getChompedString(
				A2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigIsNotRelevant,
					$elm$parser$Parser$chompIf($elm$core$Char$isUpper)))),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
			},
			$elm$parser$Parser$getChompedString(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigIsNotRelevant)))
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigContent = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigContentHelp),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionSignature = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				A2(
					$elm$parser$Parser$andThen,
					function (ns) {
						return A2($elm$parser$Parser$loop, ns, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigContent);
					},
					A2(
						$elm$parser$Parser$map,
						$elm$core$Basics$always(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(1),
									':'),
								revTokens)),
						$elm$parser$Parser$symbol(':')))),
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				A2($elm$parser$Parser$loop, revTokens, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody)),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar = function (c) {
	return (c === '-') || (c === '{');
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$commentChar = $elm$parser$Parser$getChompedString(
	$elm$parser$Parser$chompIf($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar));
var $elm$parser$Parser$ExpectingKeyword = function (a) {
	return {$: 9, a: a};
};
var $elm$parser$Parser$Advanced$keyword = function (_v0) {
	var kwd = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(kwd);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, kwd, s.d, s.cJ, s.bn, s.a5);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return (_Utils_eq(newOffset, -1) || (0 <= A3(
			$elm$parser$Parser$Advanced$isSubChar,
			function (c) {
				return $elm$core$Char$isAlphaNum(c) || (c === '_');
			},
			newOffset,
			s.a5))) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{bn: newCol, f: s.f, h: s.h, d: newOffset, cJ: newRow, a5: s.a5});
	};
};
var $elm$parser$Parser$keyword = function (kwd) {
	return $elm$parser$Parser$Advanced$keyword(
		A2(
			$elm$parser$Parser$Advanced$Token,
			kwd,
			$elm$parser$Parser$ExpectingKeyword(kwd)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecIsNotRelevant = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar(c) || (c === '(')));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpIsNotRelevant = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar(c) || ((c === '(') || ((c === ')') || ((c === ',') || (c === '.'))))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpnIsSpecialChar = function (c) {
	return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar(c) || ((c === '(') || (c === ')')));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$checkContextNested = function (_v1) {
	var nestLevel = _v1.a;
	var revTokens = _v1.b;
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStepNested(
				_Utils_Tuple2(nestLevel, revTokens)),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStepNested = function (_v0) {
	var nestLevel = _v0.a;
	var revTokens = _v0.b;
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_Tuple2(
							nestLevel,
							A2($elm$core$List$cons, n, revTokens)));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$space),
				A2(
				$elm$parser$Parser$andThen,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$checkContextNested,
				A2(
					$elm$parser$Parser$map,
					function (n) {
						return _Utils_Tuple2(
							nestLevel,
							A2($elm$core$List$cons, n, revTokens));
					},
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreak)),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_Tuple2(
							nestLevel,
							_Utils_ap(n, revTokens)));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$comment)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecParNest = function (_v0) {
	var nestLevel = _v0.a;
	var revTokens = _v0.b;
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStepNested(
				_Utils_Tuple2(nestLevel, revTokens)),
				A2(
				$elm$parser$Parser$map,
				function (ns) {
					return $elm$parser$Parser$Loop(
						_Utils_Tuple2(nestLevel + 1, ns));
				},
				A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
							revTokens)),
					$elm$parser$Parser$symbol('('))),
				A2(
				$elm$parser$Parser$map,
				function (ns) {
					return (!nestLevel) ? $elm$parser$Parser$Done(ns) : $elm$parser$Parser$Loop(
						_Utils_Tuple2(nestLevel - 1, ns));
				},
				A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, ')'),
							revTokens)),
					$elm$parser$Parser$symbol(')'))),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_Tuple2(
							nestLevel,
							A2($elm$core$List$cons, n, revTokens)));
				},
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$commentChar),
							A2(
							$elm$parser$Parser$map,
							function (s) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, s);
							},
							$elm$parser$Parser$getChompedString(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
									A2($elm$core$Basics$composeL, $elm$core$Basics$not, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpnIsSpecialChar))))
						]))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecParentheses = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, ')'),
							revTokens)),
					$elm$parser$Parser$symbol(')'))),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixParser,
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$commentChar),
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							$elm$parser$Parser$getChompedString(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
									function (c) {
										return (c === ',') || (c === '.');
									}))),
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(6),
									b);
							},
							$elm$parser$Parser$getChompedString(
								A2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpIsNotRelevant,
									$elm$parser$Parser$chompIf($elm$core$Char$isUpper)))),
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(5),
									b);
							},
							$elm$parser$Parser$getChompedString(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpIsNotRelevant)))
						]))),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					function (n) {
						return A2(
							$elm$parser$Parser$loop,
							_Utils_Tuple2(0, n),
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecParNest);
					},
					A2(
						$elm$parser$Parser$map,
						$elm$core$Basics$always(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
								revTokens)),
						$elm$parser$Parser$symbol('(')))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$moduleDeclaration = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					function (n) {
						return A2($elm$parser$Parser$loop, n, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecParentheses);
					},
					A2(
						$elm$parser$Parser$map,
						$elm$core$Basics$always(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
								revTokens)),
						$elm$parser$Parser$symbol('(')))),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$commentChar),
							A2(
							$elm$parser$Parser$map,
							$elm$core$Basics$always(
								_Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(4),
									'exposing')),
							$elm$parser$Parser$keyword('exposing')),
							A2(
							$elm$parser$Parser$map,
							$elm$core$Basics$always(
								_Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(4),
									'as')),
							$elm$parser$Parser$keyword('as')),
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							$elm$parser$Parser$getChompedString(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecIsNotRelevant)))
						]))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$portDeclarationHelp = F2(
	function (revTokens, str) {
		return (str === 'module') ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(4),
					str),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$moduleDeclaration) : A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(5),
					str),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionSignature);
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$portDeclaration = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				A2(
					$elm$parser$Parser$andThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$portDeclarationHelp(revTokens),
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$variable)),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				A2($elm$parser$Parser$loop, revTokens, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody)),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineStartVariable = F2(
	function (revTokens, n) {
		return ((n === 'module') || (n === 'import')) ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(4),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$moduleDeclaration) : ((n === 'port') ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(4),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$portDeclaration) : ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isKeyword(n) ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(4),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody) : A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(5),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionSignature)));
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mainLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$space),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreak),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$comment),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineStartVariable(revTokens),
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$variable)),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					function (s) {
						return A2(
							$elm$parser$Parser$loop,
							_Utils_ap(s, revTokens),
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody);
					},
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringLiteral)),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					function (s) {
						return A2(
							$elm$parser$Parser$loop,
							A2($elm$core$List$cons, s, revTokens),
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody);
					},
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBodyContent)),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$toRevTokens = A2($elm$parser$Parser$loop, _List_Nil, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mainLoop);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$toLines = A2(
	$elm$core$Basics$composeR,
	$elm$parser$Parser$run($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$toRevTokens),
	$elm$core$Result$map(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLines($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$syntaxToStyle)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$elm = A2(
	$elm$core$Basics$composeR,
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$toLines,
	$elm$core$Result$map($elm$core$Basics$identity));
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $author$project$Pages$Day$extractTitle = A2(
	$elm$core$Basics$composeR,
	$elm$core$String$trim,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$String$lines,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$List$head,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Maybe$map(
					A2($elm$core$String$replace, '---', '')),
				$elm$core$Maybe$withDefault('Untitled')))));
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $author$project$Days$Day1$countIncreases = function (ints) {
	return $elm$core$List$length(
		A2(
			$elm$core$List$filter,
			function (x) {
				return x > 0;
			},
			A3(
				$elm$core$List$map2,
				F2(
					function (a, b) {
						return b - a;
					}),
				ints,
				A2($elm$core$List$drop, 1, ints))));
};
var $author$project$Days$Day1$parseInts = A2(
	$elm$core$Basics$composeR,
	$elm$core$String$lines,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$List$map($elm$core$String$toInt),
		$elm$core$List$filterMap($elm$core$Basics$identity)));
var $author$project$Days$Day1$sampleData = '\n199\n200\n208\n210\n200\n207\n240\n269\n260\n263\n';
var $author$project$Days$Day1$part1 = $author$project$Days$Day1$countIncreases(
	$author$project$Days$Day1$parseInts($author$project$Days$Day1$sampleData));
var $elm$core$List$map3 = _List_map3;
var $author$project$Days$Day1$part2 = function () {
	var ints = $author$project$Days$Day1$parseInts($author$project$Days$Day1$sampleData);
	var windows = A4(
		$elm$core$List$map3,
		F3(
			function (a, b, c) {
				return (a + b) + c;
			}),
		ints,
		A2($elm$core$List$drop, 1, ints),
		A2($elm$core$List$drop, 2, ints));
	return $author$project$Days$Day1$countIncreases(windows);
}();
var $author$project$Days$Day1$answer = A2(
	$elm$core$String$join,
	'\n',
	_List_fromArray(
		[
			'Part1: ' + $elm$core$String$fromInt($author$project$Days$Day1$part1),
			'Part2: ' + $elm$core$String$fromInt($author$project$Days$Day1$part2)
		]));
var $author$project$Days$Day1$pitch = '\n--- Day 1: Sonar Sweep ---\n\nYou\'re minding your own business on a ship at sea when the overboard alarm goes off! You rush to see if you can help. Apparently, one of the Elves tripped and accidentally sent the sleigh keys flying into the ocean!\n\nBefore you know it, you\'re inside a submarine the Elves keep ready for situations like this. It\'s covered in Christmas lights (because of course it is), and it even has an experimental antenna that should be able to track the keys if you can boost its signal strength high enough; there\'s a little meter that indicates the antenna\'s signal strength by displaying 0-50 stars.\n\nYour instincts tell you that in order to save Christmas, you\'ll need to get all fifty stars by December 25th.\n\nCollect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!\n\nAs the submarine drops below the surface of the ocean, it automatically performs a sonar sweep of the nearby sea floor. On a small screen, the sonar sweep report (your puzzle input) appears: each line is a measurement of the sea floor depth as the sweep looks further and further away from the submarine.\n\nFor example, suppose you had the following report:\n\n    199\n    200\n    208\n    210\n    200\n    207\n    240\n    269\n    260\n    263\n\nThis report indicates that, scanning outward from the submarine, the sonar sweep found depths of `199`, `200`, `208`, `210`, and so on.\n\nThe first order of business is to figure out how quickly the depth increases, just so you know what you\'re dealing with - you never know if the keys will get carried into deeper water by an ocean current or a fish or something.\n\nTo do this, count the number of times a depth measurement increases from the previous measurement. (There is no measurement before the first measurement.) In the example above, the changes are as follows:\n\n    199 (N/A - no previous measurement)\n    200 (increased)\n    208 (increased)\n    210 (increased)\n    200 (decreased)\n    207 (increased)\n    240 (increased)\n    269 (increased)\n    260 (decreased)\n    263 (increased)\n\nIn this example, there are `7` measurements that are larger than the previous measurement.\n\nHow many measurements are larger than the previous measurement?\n\n--- Part Two ---\n\nConsidering every single measurement isn\'t as useful as you expected: there\'s just too much noise in the data.\n\nInstead, consider sums of a three-measurement sliding window. Again considering the above example:\n\n    199  A\n    200  A B\n    208  A B C\n    210    B C D\n    200  E   C D\n    207  E F   D\n    240  E F G\n    269    F G H\n    260      G H\n    263        H\n\nStart by comparing the first and second three-measurement windows. The measurements in the first window are marked `A (199, 200, 208)`; their sum is `199 + 200 + 208 = 607`. The second window is marked `B (200, 208, 210)`; its sum is `618`. The sum of measurements in the second window is larger than the sum of the first, so this first comparison increased.\n\nYour goal now is to count the number of times the sum of measurements in this sliding window increases from the previous sum. So, compare A with B, then compare B with C, then C with D, and so on. Stop when there aren\'t enough measurements left to create a new three-measurement sum.\n\nIn the above example, the sum of each three-measurement window is as follows:\n\n    A: 607 (N/A - no previous sum)\n    B: 618 (increased)\n    C: 618 (no change)\n    D: 617 (decreased)\n    E: 647 (increased)\n    F: 716 (increased)\n    G: 769 (increased)\n    H: 792 (increased)\n\nIn this example, there are `5` sums that are larger than the previous sum.\n\nConsider sums of a three-measurement sliding window. How many sums are larger than the previous sum?\n';
var $author$project$Days$Day1$day = {b3: $author$project$Days$Day1$answer, cz: $author$project$Days$Day1$pitch};
var $author$project$Days$Day2$executeCommand1 = F2(
	function (command, pos) {
		switch (command.$) {
			case 0:
				var _int = command.a;
				return _Utils_update(
					pos,
					{D: pos.D - _int});
			case 1:
				var _int = command.a;
				return _Utils_update(
					pos,
					{D: pos.D + _int});
			default:
				var _int = command.a;
				return _Utils_update(
					pos,
					{N: pos.N + _int});
		}
	});
var $author$project$Days$Day2$Down = function (a) {
	return {$: 1, a: a};
};
var $author$project$Days$Day2$Forward = function (a) {
	return {$: 2, a: a};
};
var $author$project$Days$Day2$Up = function (a) {
	return {$: 0, a: a};
};
var $author$project$Days$Day2$createCommand = function (_v0) {
	var dir = _v0.a;
	var maybeInt = _v0.b;
	var _v1 = _Utils_Tuple2(dir, maybeInt);
	_v1$3:
	while (true) {
		if (!_v1.b.$) {
			switch (_v1.a) {
				case 'forward':
					var _int = _v1.b.a;
					return $elm$core$Maybe$Just(
						$author$project$Days$Day2$Forward(_int));
				case 'up':
					var _int = _v1.b.a;
					return $elm$core$Maybe$Just(
						$author$project$Days$Day2$Up(_int));
				case 'down':
					var _int = _v1.b.a;
					return $elm$core$Maybe$Just(
						$author$project$Days$Day2$Down(_int));
				default:
					break _v1$3;
			}
		} else {
			break _v1$3;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $author$project$Days$Day2$parseCommand = A2(
	$elm$core$Basics$composeR,
	$elm$core$String$split(' '),
	function (res) {
		if ((res.b && res.b.b) && (!res.b.b.b)) {
			var dir = res.a;
			var _v1 = res.b;
			var len = _v1.a;
			return $author$project$Days$Day2$createCommand(
				_Utils_Tuple2(
					$elm$core$String$trim(dir),
					$elm$core$String$toInt(len)));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Days$Day2$parseCommands = A2(
	$elm$core$Basics$composeR,
	$elm$core$String$trim,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$String$lines,
		$elm$core$List$filterMap($author$project$Days$Day2$parseCommand)));
var $author$project$Days$Day2$process = F2(
	function (exec, data_) {
		return function (_v0) {
			var x = _v0.N;
			var y = _v0.D;
			return x * y;
		}(
			A3(
				$elm$core$List$foldl,
				exec,
				{Y: 0, N: 0, D: 0},
				$author$project$Days$Day2$parseCommands(data_)));
	});
var $author$project$Days$Day2$sampleData = '\nforward 5\ndown 5\nforward 8\nup 3\ndown 8\nforward 2\n';
var $author$project$Days$Day2$part1 = A2($author$project$Days$Day2$process, $author$project$Days$Day2$executeCommand1, $author$project$Days$Day2$sampleData);
var $author$project$Days$Day2$executeCommand2 = F2(
	function (command, pos) {
		var aim = pos.Y;
		switch (command.$) {
			case 0:
				var _int = command.a;
				return _Utils_update(
					pos,
					{Y: aim - _int});
			case 1:
				var _int = command.a;
				return _Utils_update(
					pos,
					{Y: aim + _int});
			default:
				var _int = command.a;
				return _Utils_update(
					pos,
					{N: pos.N + _int, D: pos.D + (aim * _int)});
		}
	});
var $author$project$Days$Day2$part2 = A2($author$project$Days$Day2$process, $author$project$Days$Day2$executeCommand2, $author$project$Days$Day2$sampleData);
var $author$project$Days$Day2$answer = A2(
	$elm$core$String$join,
	'\n',
	_List_fromArray(
		[
			'Part1: ' + $elm$core$String$fromInt($author$project$Days$Day2$part1),
			'Part2: ' + $elm$core$String$fromInt($author$project$Days$Day2$part2)
		]));
var $author$project$Days$Day2$pitch = '\n--- Day 2: Dive! ---\n\nNow, you need to figure out how to pilot this thing.\n\nIt seems like the submarine can take a series of commands like forward 1, down 2, or up 3:\n\n- `forward X` increases the horizontal position by `X` units.\n- `down X` increases the depth by `X` units.\n- `up X` decreases the depth by `X` units.\n\nNote that since you\'re on a submarine, down and up affect your depth, and so they have the opposite result of what you might expect.\n\nThe submarine seems to already have a planned course (your puzzle input). You should probably figure out where it\'s going. For example:\n\n    forward 5\n    down 5\n    forward 8\n    up 3\n    down 8\n    forward 2\n\nYour horizontal position and depth both start at 0. The steps above would then modify them as follows:\n\n- `forward 5` adds `5` to your horizontal position, a total of `5`.\n- `down 5` adds `5` to your depth, resulting in a value of `5`.\n- `forward 8` adds `8` to your horizontal position, a total of `13`.\n- `up 3` decreases your depth by `3`, resulting in a value of `2`.\n- `down 8` adds `8` to your depth, resulting in a value of `10`.\n- `forward 2` adds `2` to your horizontal position, a total of `15`.\n\nAfter following these instructions, you would have a horizontal position of `15` and a depth of `10`. (Multiplying these together produces `150`.)\n\nCalculate the horizontal position and depth you would have after following the planned course. What do you get if you multiply your final horizontal position by your final depth?\n\n--- Part Two ---\n\nBased on your calculations, the planned course doesn\'t seem to make any sense. You find the submarine manual and discover that the process is actually slightly more complicated.\n\nIn addition to horizontal position and depth, you\'ll also need to track a third value, aim, which also starts at 0. The commands also mean something entirely different than you first thought:\n\n- `down X` increases your aim by `X` units.\n- `up X` decreases your aim by `X` units.\n- `forward X` does two things:\n    - It increases your horizontal position by `X` units.\n    - It increases your depth by your aim multiplied by `X`.\n\nAgain note that since you\'re on a submarine, down and up do the opposite of what you might expect: "down" means aiming in the positive direction.\n\nNow, the above example does something different:\n\n- `forward 5` adds `5` to your horizontal position, a total of `5`. Because your aim is `0,` your depth does not change.\n- `down 5` adds `5` to your aim, resulting in a value of `5`.\n- `forward 8` adds `8` to your horizontal position, a total of `13`. Because your aim is `5,` your depth increases by `8*5=40`.\n- `up 3` decreases your aim by `3`, resulting in a value of `2`.\n- `down 8` adds `8` to your aim, resulting in a value of `10`.\n- `forward 2` adds `2` to your horizontal position, a total of `15`. Because your aim is `10`, your depth increases by `2*10=20` to a total of `60`.\n\nAfter following these new instructions, you would have a horizontal position of `15` and a depth of `60`. (Multiplying these produces `900`.)\n\nUsing this new interpretation of the commands, calculate the horizontal position and depth you would have after following the planned course. What do you get if you multiply your final horizontal position by your final depth?\n';
var $author$project$Days$Day2$day = {b3: $author$project$Days$Day2$answer, cz: $author$project$Days$Day2$pitch};
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $elm$core$Basics$pow = _Basics_pow;
var $author$project$Days$Day3$binCharsToInt = function (chars) {
	var lastIndex = $elm$core$List$length(chars);
	return function (x) {
		return (x / 2) | 0;
	}(
		A3(
			$elm$core$List$foldr,
			F2(
				function (_v0, total) {
					var index = _v0.a;
					var _char = _v0.b;
					return (_char === '1') ? (total + A2($elm$core$Basics$pow, 2, lastIndex - index)) : total;
				}),
			0,
			A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, chars)));
};
var $author$project$Days$Day3$countBits = A2(
	$elm$core$List$foldl,
	F2(
		function (x, acc) {
			return (x === '1') ? _Utils_update(
				acc,
				{U: acc.U + 1}) : ((x === '0') ? _Utils_update(
				acc,
				{T: acc.T + 1}) : acc);
		}),
	{T: 0, U: 0});
var $author$project$Days$Day3$leastCommon = function (_v0) {
	var n0 = _v0.T;
	var n1 = _v0.U;
	return (_Utils_cmp(n1, n0) < 0) ? '1' : '0';
};
var $elm$core$Basics$ge = _Utils_ge;
var $author$project$Days$Day3$mostCommon = function (_v0) {
	var n0 = _v0.T;
	var n1 = _v0.U;
	return (_Utils_cmp(n1, n0) > -1) ? '1' : '0';
};
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $author$project$Days$Day3$rotate = function (matrix) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$List$map2($elm$core$List$cons),
		A2(
			$elm$core$List$repeat,
			function () {
				if (!matrix.b) {
					return 0;
				} else {
					var m = matrix.a;
					return $elm$core$List$length(m);
				}
			}(),
			_List_Nil),
		matrix);
};
var $author$project$Days$Day3$sampleData = '\n00100\n11110\n10110\n10111\n10101\n01111\n00111\n11100\n10000\n11001\n00010\n01010\n';
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $author$project$Days$Day3$toBitRows = A2(
	$elm$core$Basics$composeR,
	$elm$core$String$trim,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$String$lines,
		$elm$core$List$map($elm$core$String$toList)));
var $author$project$Days$Day3$part1 = function () {
	var bitCounts = A2(
		$elm$core$List$map,
		$author$project$Days$Day3$countBits,
		$author$project$Days$Day3$rotate(
			$author$project$Days$Day3$toBitRows($author$project$Days$Day3$sampleData)));
	var _v0 = _Utils_Tuple2(
		$author$project$Days$Day3$binCharsToInt(
			A2($elm$core$List$map, $author$project$Days$Day3$mostCommon, bitCounts)),
		$author$project$Days$Day3$binCharsToInt(
			A2($elm$core$List$map, $author$project$Days$Day3$leastCommon, bitCounts)));
	var gamma = _v0.a;
	var epsilon = _v0.b;
	return gamma * epsilon;
}();
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $author$project$Days$Day3$columnTargetChar = function (by) {
	return A2(
		$elm$core$Basics$composeR,
		$author$project$Days$Day3$rotate,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$List$indexedMap(
				F2(
					function (index, column) {
						return _Utils_Tuple2(
							index,
							by(
								$author$project$Days$Day3$countBits(column)));
					})),
			$elm$core$Dict$fromList));
};
var $author$project$Days$Day3$getAt = function (index) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$List$drop(index),
		$elm$core$List$head);
};
var $author$project$Days$Day3$selectCandidate = F3(
	function (index, by, rows) {
		if (!rows.b) {
			return _List_Nil;
		} else {
			if (!rows.b.b) {
				var x = rows.a;
				return x;
			} else {
				var moreThanOneRow = rows;
				return A3(
					$author$project$Days$Day3$selectCandidate,
					index + 1,
					by,
					A2(
						$elm$core$List$filter,
						A2(
							$elm$core$Basics$composeR,
							$author$project$Days$Day3$getAt(index),
							$elm$core$Basics$eq(
								A2(
									$elm$core$Dict$get,
									index,
									A2($author$project$Days$Day3$columnTargetChar, by, moreThanOneRow)))),
						moreThanOneRow));
			}
		}
	});
var $author$project$Days$Day3$part2 = function () {
	var bitRows = $author$project$Days$Day3$toBitRows($author$project$Days$Day3$sampleData);
	var _v0 = _Utils_Tuple2(
		$author$project$Days$Day3$binCharsToInt(
			A3($author$project$Days$Day3$selectCandidate, 0, $author$project$Days$Day3$mostCommon, bitRows)),
		$author$project$Days$Day3$binCharsToInt(
			A3($author$project$Days$Day3$selectCandidate, 0, $author$project$Days$Day3$leastCommon, bitRows)));
	var oxygenGeneratorRating = _v0.a;
	var co2ScrubberRating = _v0.b;
	return oxygenGeneratorRating * co2ScrubberRating;
}();
var $author$project$Days$Day3$answer = A2(
	$elm$core$String$join,
	'\n',
	_List_fromArray(
		[
			'Part1: ' + $elm$core$String$fromInt($author$project$Days$Day3$part1),
			'Part2: ' + $elm$core$String$fromInt($author$project$Days$Day3$part2)
		]));
var $author$project$Days$Day3$pitch = '\n--- Day 3: Binary Diagnostic ---\n\nThe submarine has been making some odd creaking noises, so you ask it to produce a diagnostic report just in case.\n\nThe diagnostic report (your puzzle input) consists of a list of binary numbers which, when decoded properly, can tell you many useful things about the conditions of the submarine. The first parameter to check is the power consumption.\n\nYou need to use the binary numbers in the diagnostic report to generate two new binary numbers (called the gamma rate and the epsilon rate). The power consumption can then be found by multiplying the gamma rate by the epsilon rate.\n\nEach bit in the gamma rate can be determined by finding the most common bit in the corresponding position of all numbers in the diagnostic report. For example, given the following diagnostic report:\n\n    00100\n    11110\n    10110\n    10111\n    10101\n    01111\n    00111\n    11100\n    10000\n    11001\n    00010\n    01010\n\nConsidering only the first bit of each number, there are five `0` bits and seven `1` bits. Since the most common bit is `1`, the first bit of the gamma rate is `1`.\n\nThe most common second bit of the numbers in the diagnostic report is `0`, so the second bit of the gamma rate is `0`.\n\nThe most common value of the third, fourth, and fifth bits are `1`, `1`, and `0`, respectively, and so the final three bits of the gamma rate are `110`.\n\nSo, the gamma rate is the binary number `10110`, or `22` in decimal.\n\nThe epsilon rate is calculated in a similar way; rather than use the most common bit, the least common bit from each position is used. So, the epsilon rate is `01001`, or `9` in decimal. Multiplying the gamma rate (`22`) by the epsilon rate (`9`) produces the power consumption, `198`.\n\nUse the binary numbers in your diagnostic report to calculate the gamma rate and epsilon rate, then multiply them together. What is the power consumption of the submarine? (Be sure to represent your answer in decimal, not binary.)\n\n--- Part Two ---\n\nNext, you should verify the life support rating, which can be determined by multiplying the oxygen generator rating by the CO2 scrubber rating.\n\nBoth the oxygen generator rating and the CO2 scrubber rating are values that can be found in your diagnostic report - finding them is the tricky part. Both values are located using a similar process that involves filtering out values until only one remains. Before searching for either rating value, start with the full list of binary numbers from your diagnostic report and consider just the first bit of those numbers. Then:\n\n- Keep only numbers selected by the bit criteria for the type of rating value for which you are searching. Discard numbers which do not match the bit criteria.\n- If you only have one number left, stop; this is the rating value for which you are searching.\n- Otherwise, repeat the process, considering the next bit to the right.\n\nThe bit criteria depends on which type of rating value you want to find:\n\n- To find oxygen generator rating, determine the most common value (`0` or `1`) in the current bit position, and keep only numbers with that bit in that position. If `0` and `1` are equally common, keep values with a `1` in the position being considered.\n- To find CO2 scrubber rating, determine the least common value (`0` or `1`) in the current bit position, and keep only numbers with that bit in that position. If `0` and `1` are equally common, keep values with a `0` in the position being considered.\n\nFor example, to determine the oxygen generator rating value using the same example diagnostic report from above:\n\n- Start with all 12 numbers and consider only the first bit of each number. There are more `1` bits (`7`) than `0` bits (`5`), so keep only the 7 numbers with a `1` in the first position: `11110`, `10110`, `10111`, `10101`, `11100`, `10000`, and `11001`.\n- Then, consider the second bit of the 7 remaining numbers: there are more `0` bits (`4`) than `1` bits (`3`), so keep only the `4` numbers with a `0` in the second position: `10110`, `10111`, `10101`, and `10000`.\n- In the third position, three of the four numbers have a `1`, so keep those three: `10110`, `10111`, and `10101`.\n- In the fourth position, two of the three numbers have a `1`, so keep those two: `10110` and `10111`.\n- In the fifth position, there are an equal number of `0` bits and `1` bits (one each). So, to find the oxygen generator rating, keep the number with a `1` in that position: `10111`.\n- As there is only one number left, stop; the oxygen generator rating is `10111`, or `23` in decimal.\n\nThen, to determine the CO2 scrubber rating value from the same example above:\n\n- Start again with all 12 numbers and consider only the first bit of each number. There are fewer `0` bits (5) than `1` bits (7), so keep only the 5 numbers with a `0` in the first position: `00100`, `01111`, `00111`, `00010`, and `01010`.\n- Then, consider the second bit of the 5 remaining numbers: there are fewer `1` bits (2) than `0` bits (3), so keep only the 2 numbers with a `1` in the second position: `01111` and `01010`.\n- In the third position, there are an equal number of `0` bits and `1` bits (one each). So, to find the CO2 scrubber rating, keep the number with a `0` in that position: `01010`.\n- As there is only one number left, stop; the CO2 scrubber rating is `01010`, or `10` in decimal.\n\nFinally, to find the life support rating, multiply the oxygen generator rating (`23`) by the CO2 scrubber rating (`10`) to get `230`.\n\nUse the binary numbers in your diagnostic report to calculate the oxygen generator rating and CO2 scrubber rating, then multiply them together. What is the life support rating of the submarine? (Be sure to represent your answer in decimal, not binary.)\n';
var $author$project$Days$Day3$day = {b3: $author$project$Days$Day3$answer, cz: $author$project$Days$Day3$pitch};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $author$project$Days$Day4$countUnchecked = function (_v0) {
	var cells = _v0.I;
	return $elm$core$List$sum(
		$elm$core$List$concat(
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$List$filter(
						A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $elm$core$Basics$not)),
					$elm$core$List$map($elm$core$Tuple$first)),
				cells)));
};
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $author$project$Days$Day4$rotate = function (matrix) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$List$map2($elm$core$List$cons),
		A2(
			$elm$core$List$repeat,
			function () {
				if (!matrix.b) {
					return 0;
				} else {
					var m = matrix.a;
					return $elm$core$List$length(m);
				}
			}(),
			_List_Nil),
		matrix);
};
var $author$project$Days$Day4$checkWinningGrid = F3(
	function (num, grid, wins) {
		var checkLine = $elm$core$List$any(
			$elm$core$List$all($elm$core$Tuple$second));
		var winning = checkLine(grid.I) || checkLine(
			$author$project$Days$Day4$rotate(grid.I));
		return (winning && (!A2(
			$elm$core$List$member,
			grid.aC,
			A2(
				$elm$core$List$map,
				function ($) {
					return $.aQ;
				},
				wins)))) ? A2(
			$elm$core$List$cons,
			{
				aQ: grid.aC,
				a3: num * $author$project$Days$Day4$countUnchecked(grid)
			},
			wins) : wins;
	});
var $author$project$Days$Day4$fillGrid = F2(
	function (num, grid) {
		var updateCell = $elm$core$List$map(
			function (_v0) {
				var _int = _v0.a;
				var checked = _v0.b;
				return _Utils_Tuple2(
					_int,
					checked || _Utils_eq(num, _int));
			});
		return _Utils_update(
			grid,
			{
				I: A2($elm$core$List$map, updateCell, grid.I)
			});
	});
var $author$project$Days$Day4$fillGridsWithNumber = F2(
	function (num, _v0) {
		var grids = _v0.aB;
		var wins = _v0.aw;
		var filledGrids = A2(
			$elm$core$List$map,
			$author$project$Days$Day4$fillGrid(num),
			grids);
		return {
			aB: filledGrids,
			aw: A3(
				$elm$core$List$foldl,
				$author$project$Days$Day4$checkWinningGrid(num),
				wins,
				filledGrids)
		};
	});
var $elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (!maybe.$) {
			var v = maybe.a;
			return $elm$core$Result$Ok(v);
		} else {
			return $elm$core$Result$Err(err);
		}
	});
var $author$project$Days$Day4$parseInts = F2(
	function (sep, string) {
		return A2(
			$elm$core$List$filterMap,
			A2($elm$core$Basics$composeR, $elm$core$String$trim, $elm$core$String$toInt),
			A2(
				$elm$core$String$split,
				sep,
				$elm$core$String$trim(string)));
	});
var $author$project$Days$Day4$parseGrid = F2(
	function (gridId, string) {
		return {
			I: A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$author$project$Days$Day4$parseInts(' '),
					$elm$core$List$map(
						function (_int) {
							return _Utils_Tuple2(_int, false);
						})),
				$elm$core$String$lines(string)),
			aC: gridId
		};
	});
var $author$project$Days$Day4$parseInputs = function (string) {
	var lines = $elm$core$String$lines(
		$elm$core$String$trim(string));
	var numbers = A2(
		$elm$core$Maybe$withDefault,
		_List_Nil,
		A2(
			$elm$core$Maybe$map,
			$author$project$Days$Day4$parseInts(','),
			$elm$core$List$head(lines)));
	var grids = A2(
		$elm$core$List$indexedMap,
		$author$project$Days$Day4$parseGrid,
		A2(
			$elm$core$String$split,
			'\n\n',
			A2(
				$elm$core$String$join,
				'\n',
				A2(
					$elm$core$List$map,
					$elm$core$String$trim,
					A2($elm$core$List$drop, 2, lines)))));
	return _Utils_Tuple2(numbers, grids);
};
var $author$project$Days$Day4$sampleData = '\n7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1\n\n22 13 17 11  0\n 8  2 23  4 24\n21  9 14 16  7\n 6 10  3 18  5\n 1 12 20 15 19\n\n 3 15  0  2 22\n 9 18 13 17  5\n19  8  7 25 23\n20 11 10 24  4\n14 21 16 12  6\n\n14 21 17 24  4\n10 16 15  9 19\n18  8 23 26 20\n22 11 13  6  5\n 2  0 12  3  7\n';
var $author$project$Days$Day4$runBingo = function (selectWin) {
	var _v0 = $author$project$Days$Day4$parseInputs($author$project$Days$Day4$sampleData);
	var numbers = _v0.a;
	var grids = _v0.b;
	var bingo = {aB: grids, aw: _List_Nil};
	return A2(
		$elm$core$Result$fromMaybe,
		'Nobody won :(',
		A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.a3;
			},
			selectWin(
				A3($elm$core$List$foldl, $author$project$Days$Day4$fillGridsWithNumber, bingo, numbers).aw)));
};
var $author$project$Days$Day4$part1 = $author$project$Days$Day4$runBingo(
	A2($elm$core$Basics$composeR, $elm$core$List$reverse, $elm$core$List$head));
var $author$project$Days$Day4$part2 = $author$project$Days$Day4$runBingo($elm$core$List$head);
var $author$project$Days$Day4$answer = A2(
	$elm$core$String$join,
	'\n',
	_List_fromArray(
		[
			'Part1: ' + function () {
			var _v0 = $author$project$Days$Day4$part1;
			if (!_v0.$) {
				var result = _v0.a;
				return $elm$core$String$fromInt(result);
			} else {
				var error = _v0.a;
				return 'Error: ' + error;
			}
		}(),
			'Part2: ' + function () {
			var _v1 = $author$project$Days$Day4$part2;
			if (!_v1.$) {
				var result = _v1.a;
				return $elm$core$String$fromInt(result);
			} else {
				var error = _v1.a;
				return 'Error: ' + error;
			}
		}()
		]));
var $author$project$Days$Day4$pitch = '\n--- Day 4: Giant Squid ---\n\nYou\'re already almost 1.5km (almost a mile) below the surface of the ocean, already so deep that you can\'t see any sunlight. What you can see, however, is a giant squid that has attached itself to the outside of your submarine.\n\nMaybe it wants to play bingo?\n\nBingo is played on a set of boards each consisting of a 5x5 grid of numbers. Numbers are chosen at random, and the chosen number is marked on all boards on which it appears. (Numbers may not appear on all boards.) If all numbers in any row or any column of a board are marked, that board wins. (Diagonals don\'t count.)\n\nThe submarine has a bingo subsystem to help passengers (currently, you and the giant squid) pass the time. It automatically generates a random order in which to draw numbers and a random set of boards (your puzzle input). For example:\n\n    7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1\n\n    22 13 17 11  0\n     8  2 23  4 24\n    21  9 14 16  7\n    6 10  3 18  5\n     1 12 20 15 19\n\n     3 15  0  2 22\n     9 18 13 17  5\n    19  8  7 25 23\n    20 11 10 24  4\n    14 21 16 12  6\n\n    14 21 17 24  4\n    10 16 15  9 19\n    18  8 23 26 20\n    22 11 13  6  5\n     2  0 12  3  7\n\nAfter the first five numbers are drawn (`7`, `4`, `9`, `5`, and `11`), there are no winners, but the boards are marked as follows (shown here adjacent to each other to save space):\n\n    22 13  17 [11]  0          3  15   0  2  22        14  21  17 24  [4]\n     8  2  23  [4] 24         [9] 18  13  17 [5]       10  16  15 [9] 19\n    21 [9] 14  16  [7]        19   8  [7] 25 23        18   8  23 26  20\n     6 10  3   18  [5]        20 [11] 10  24 [4]       22 [11] 13  6  [5]\n     1 12  20  15  19         14  21  16  12  6         2   0  12  3  [7]\n\nAfter the next six numbers are drawn (`17`, `23`, `2`, `0`, `14`, and `21`), there are still no winners:\n\n     22  13  [17] [11]  0       3   15  [0] [2] 22     [14] [21] [17] 24  [4]\n      8  [2] [23]  [4] 24      [9]  18  13 [17]  5      10   16   15  [9] 19\n    [21] [9] [14]  16  [7]     19    8  [7] 25 [23]     18    8  [23] 26  20\n      6  10    3   18  [5]     20  [11] 10  24  [4]     22  [11]  13   6  [5]\n      1  12   20   15  19     [14] [21] 16  12   6      [2]  [0]  12   3  [7]\n\nFinally, 24 is drawn:\n\n     22  13  [17] [11]  0       3   15  [0] [2] 22     [14] [21] [17] [24] [4]\n      8  [2] [23]  [4] 24      [9]  18  13 [17]  5      10   16   15   [9] 19\n    [21] [9] [14]  16  [7]     19    8  [7] 25 [23]     18    8  [23]  26  20\n      6  10    3   18  [5]     20  [11] 10 [24] [4]     22  [11]  13    6  [5]\n      1  12   20   15  19     [14] [21] 16  12   6      [2]  [0]  12    3  [7]\n\nAt this point, the third board wins because it has at least one complete row or column of marked numbers (in this case, the entire top row is marked: `14 21 17 24 4`).\n\nThe score of the winning board can now be calculated. Start by finding the sum of all unmarked numbers on that board; in this case, the sum is `188`. Then, multiply that sum by the number that was just called when the board won, `24`, to get the final score, `188` * `24` = `4512`.\n\nTo guarantee victory against the giant squid, figure out which board will win first. What will your final score be if you choose that board?\n';
var $author$project$Days$Day4$day = {b3: $author$project$Days$Day4$answer, cz: $author$project$Days$Day4$pitch};
var $author$project$Days$Day5$moreThanOne = function (n) {
	return n >= 2;
};
var $author$project$Days$Day5$countOverlaps = A2(
	$elm$core$Basics$composeR,
	$elm$core$List$map(
		A2(
			$elm$core$Basics$composeR,
			$elm$core$List$filter($author$project$Days$Day5$moreThanOne),
			$elm$core$List$length)),
	$elm$core$List$sum);
var $author$project$Days$Day5$drawMap = function (map) {
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$List$map($elm$core$String$fromInt),
				$elm$core$String$join('')),
			map));
};
var $author$project$Days$Day5$excludeDiagonals = $elm$core$List$filter(
	function (_v0) {
		var from = _v0.ad;
		var to = _v0.at;
		return _Utils_eq(from.N, to.N) || _Utils_eq(from.D, to.D);
	});
var $author$project$Days$Day5$Point = F2(
	function (x, y) {
		return {N: x, D: y};
	});
var $author$project$Days$Day5$toVec = function (raw) {
	if ((((((((raw.b && raw.a.b) && raw.a.b.b) && (!raw.a.b.b.b)) && raw.b.b) && raw.b.a.b) && raw.b.a.b.b) && (!raw.b.a.b.b.b)) && (!raw.b.b.b)) {
		var _v1 = raw.a;
		var x1 = _v1.a;
		var _v2 = _v1.b;
		var y1 = _v2.a;
		var _v3 = raw.b;
		var _v4 = _v3.a;
		var x2 = _v4.a;
		var _v5 = _v4.b;
		var y2 = _v5.a;
		return $elm$core$Maybe$Just(
			{
				ad: A2($author$project$Days$Day5$Point, x1, y1),
				at: A2($author$project$Days$Day5$Point, x2, y2)
			});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Days$Day5$parseVecs = function (string) {
	return A2(
		$elm$core$List$filterMap,
		$author$project$Days$Day5$toVec,
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$String$split(' -> '),
				$elm$core$List$map(
					A2(
						$elm$core$Basics$composeR,
						$elm$core$String$split(','),
						$elm$core$List$filterMap($elm$core$String$toInt)))),
			$elm$core$String$lines(
				$elm$core$String$trim(string))));
};
var $author$project$Days$Day5$sampleData = '\n0,9 -> 5,9\n8,0 -> 0,8\n9,4 -> 3,4\n2,2 -> 2,1\n7,0 -> 7,4\n6,4 -> 2,0\n0,9 -> 2,9\n3,4 -> 1,4\n0,0 -> 8,8\n5,5 -> 8,2\n';
var $author$project$Days$Day5$inc = function (n) {
	return n + 1;
};
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Days$Day5$initMap = function (vecs) {
	var size = function (getter) {
		return A2(
			$elm$core$Maybe$withDefault,
			0,
			A2(
				$elm$core$Maybe$map,
				$author$project$Days$Day5$inc,
				$elm$core$List$maximum(
					$elm$core$List$concat(
						_List_fromArray(
							[
								A2(
								$elm$core$List$map,
								A2(
									$elm$core$Basics$composeR,
									function ($) {
										return $.ad;
									},
									getter),
								vecs),
								A2(
								$elm$core$List$map,
								A2(
									$elm$core$Basics$composeR,
									function ($) {
										return $.at;
									},
									getter),
								vecs)
							])))));
	};
	return A2(
		$elm$core$List$repeat,
		size(
			function ($) {
				return $.D;
			}),
		A2(
			$elm$core$List$repeat,
			size(
				function ($) {
					return $.N;
				}),
			0));
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $author$project$Days$Day5$updateMap = F2(
	function (p, update) {
		return $elm$core$List$indexedMap(
			F2(
				function (y, row) {
					return _Utils_eq(y, p.D) ? A2(
						$elm$core$List$indexedMap,
						F2(
							function (x, cell) {
								return _Utils_eq(x, p.N) ? update(cell) : cell;
							}),
						row) : row;
				}));
	});
var $author$project$Days$Day5$processVec = F2(
	function (_v0, map) {
		var from = _v0.ad;
		var to = _v0.at;
		return _Utils_eq(from.N, to.N) ? A3(
			$elm$core$List$foldl,
			function (y_) {
				return A2(
					$author$project$Days$Day5$updateMap,
					{N: from.N, D: y_},
					$author$project$Days$Day5$inc);
			},
			map,
			A2(
				$elm$core$List$range,
				A2($elm$core$Basics$min, from.D, to.D),
				A2($elm$core$Basics$max, from.D, to.D))) : (_Utils_eq(from.D, to.D) ? A3(
			$elm$core$List$foldl,
			function (x_) {
				return A2(
					$author$project$Days$Day5$updateMap,
					{N: x_, D: from.D},
					$author$project$Days$Day5$inc);
			},
			map,
			A2(
				$elm$core$List$range,
				A2($elm$core$Basics$min, from.N, to.N),
				A2($elm$core$Basics$max, from.N, to.N))) : map);
	});
var $author$project$Days$Day5$toMap = function (vecs) {
	return A3(
		$elm$core$List$foldl,
		$author$project$Days$Day5$processVec,
		$author$project$Days$Day5$initMap(vecs),
		vecs);
};
var $author$project$Days$Day5$part1 = function () {
	var map = $author$project$Days$Day5$toMap(
		$author$project$Days$Day5$excludeDiagonals(
			$author$project$Days$Day5$parseVecs($author$project$Days$Day5$sampleData)));
	var mapViz = $author$project$Days$Day5$drawMap(map);
	var result = $elm$core$String$fromInt(
		$author$project$Days$Day5$countOverlaps(map));
	return _Utils_Tuple2(result, mapViz);
}();
var $author$project$Days$Day5$answer = A2(
	$elm$core$String$join,
	'\n',
	_List_fromArray(
		['Part1: ' + $author$project$Days$Day5$part1.a, 'Map: ', $author$project$Days$Day5$part1.b, '', '---', '', 'Part2: TODO']));
var $author$project$Days$Day5$pitch = '\n--- Day 5: Hydrothermal Venture ---\n\nYou come across a field of hydrothermal vents on the ocean floor! These vents constantly produce large, opaque clouds, so it would be best to avoid them if possible.\n\nThey tend to form in lines; the submarine helpfully produces a list of nearby lines of vents (your puzzle input) for you to review. For example:\n\n    0,9 -> 5,9\n    8,0 -> 0,8\n    9,4 -> 3,4\n    2,2 -> 2,1\n    7,0 -> 7,4\n    6,4 -> 2,0\n    0,9 -> 2,9\n    3,4 -> 1,4\n    0,0 -> 8,8\n    5,5 -> 8,2\n\nEach line of vents is given as a line segment in the format `x1,y1 -> x2,y2` where `x1,y1` are the coordinates of one end the line segment and `x2,y2` are the coordinates of the other end. These line segments include the points at both ends. In other words:\n\n- An entry like `1,1 -> 1,3` covers points `1,1`, `1,2`, and `1,3`.\n- An entry like `9,7 -> 7,7` covers points `9,7`, `8,7`, and `7,7`.\n\nFor now, only consider horizontal and vertical lines: lines where either `x1 = x2` or `y1 = y2`.\n\nSo, the horizontal and vertical lines from the above list would produce the following diagram:\n\n    .......1..\n    ..1....1..\n    ..1....1..\n    .......1..\n    .112111211\n    ..........\n    ..........\n    ..........\n    ..........\n    222111....\n\nIn this diagram, the top left corner is `0,0` and the bottom right corner is `9,9`. Each position is shown as the number of lines which cover that point or `.` if no line covers that point. The top-left pair of `1`s, for example, comes from `2,2 -> 2,1`; the very bottom row is formed by the overlapping lines `0,9 -> 5,9` and `0,9 -> 2,9`.\n\nTo avoid the most dangerous areas, you need to determine the number of points where at least two lines overlap. In the above example, this is anywhere in the diagram with a `2` or larger - a total of `5` points.\n\nConsider only horizontal and vertical lines. At how many points do at least two lines overlap?\n';
var $author$project$Days$Day5$day = {b3: $author$project$Days$Day5$answer, cz: $author$project$Days$Day5$pitch};
var $author$project$Pages$Day$getDayData = function (day) {
	switch (day) {
		case 1:
			return $elm$core$Result$Ok($author$project$Days$Day1$day);
		case 2:
			return $elm$core$Result$Ok($author$project$Days$Day2$day);
		case 3:
			return $elm$core$Result$Ok($author$project$Days$Day3$day);
		case 4:
			return $elm$core$Result$Ok($author$project$Days$Day4$day);
		case 5:
			return $elm$core$Result$Ok($author$project$Days$Day5$day);
		default:
			return $elm$core$Result$Err(
				'No data could be found for day #' + $elm$core$String$fromInt(day));
	}
};
var $author$project$Pages$Day$githubSource = function (day) {
	return 'https://github.com/n1k0/elm-advent-2021/tree/main/src/Days/Day' + ($elm$core$String$fromInt(day) + '.elm');
};
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme = $elm$core$Basics$identity;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex = function (a) {
	return {$: 1, a: a};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Rgba = F4(
	function (a, b, c, d) {
		return {$: 3, a: a, b: b, c: c, d: d};
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$DefaultColor = {$: 0};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$backgroundColor = function (background) {
	return {_: background, Q: false, R: false, af: false, j: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$DefaultColor};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$italic = function (style) {
	return _Utils_update(
		style,
		{R: true});
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$noEmphasis = F2(
	function (text, background) {
		return {_: background, Q: false, R: false, af: false, j: text};
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor = function (text) {
	return {_: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$DefaultColor, Q: false, R: false, af: false, j: text};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$OneDark$requiredStyles = {
	X: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$backgroundColor(
		A4($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Rgba, 40, 124, 82, 0.4)),
	aa: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$italic(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#5c6370'))),
	ab: A2(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$noEmphasis,
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#abb2bf'),
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#282c34')),
	ac: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$backgroundColor(
		A4($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Rgba, 136, 64, 67, 0.4)),
	P: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$backgroundColor(
		A4($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Rgba, 229, 231, 235, 0.1)),
	ak: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#d19a66')),
	al: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#98c379')),
	am: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#c678dd')),
	an: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#c678dd')),
	ao: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#61aeee')),
	ap: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#d19a66')),
	aq: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#abb2bf'))
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$OneDark$theme = {b9: _List_Nil, cH: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$OneDark$requiredStyles};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleToFragment = function (a) {
	switch (a) {
		case 0:
			return _Utils_Tuple2(4, 'css-ar-i');
		case 1:
			return _Utils_Tuple2(6, 'css-ar-p');
		case 2:
			return _Utils_Tuple2(4, 'css-ar-k');
		default:
			return _Utils_Tuple2(5, 'css-ar-v');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style7 = 8;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeSelectorToFragment = function (att) {
	switch (att) {
		case 0:
			return _Utils_Tuple2(6, 'css-s-a-an');
		case 1:
			return _Utils_Tuple2(3, 'css-s-a-av');
		default:
			return _Utils_Tuple2(4, 'css-s-a-o');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$selectorToFragment = function (s) {
	switch (s.$) {
		case 0:
			return _Utils_Tuple2(4, 'css-s-e');
		case 1:
			return _Utils_Tuple2(6, 'css-s-i');
		case 2:
			return _Utils_Tuple2(6, 'css-s-cl');
		case 3:
			return _Utils_Tuple2(8, 'css-s-c');
		case 4:
			return _Utils_Tuple2(4, 'css-s-u');
		case 5:
			var att = s.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeSelectorToFragment(att);
		case 6:
			return _Utils_Tuple2(0, 'css-s-pe');
		default:
			return _Utils_Tuple2(0, 'css-s-pc');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$syntaxToStyle = function (syntax) {
	switch (syntax.$) {
		case 0:
			return _Utils_Tuple2(3, 'css-s');
		case 1:
			var a = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleToFragment(a);
		case 2:
			var s = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$selectorToFragment(s);
		case 3:
			return _Utils_Tuple2(5, 'css-p');
		case 4:
			return _Utils_Tuple2(5, 'css-pv');
		case 5:
			return _Utils_Tuple2(2, 'css-n');
		default:
			return _Utils_Tuple2(4, 'css-u');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$syntaxToStyle = function (syntax) {
	switch (syntax) {
		case 0:
			return _Utils_Tuple2(2, 'js-n');
		case 1:
			return _Utils_Tuple2(3, 'js-s');
		case 2:
			return _Utils_Tuple2(4, 'js-k');
		case 3:
			return _Utils_Tuple2(5, 'js-dk');
		case 4:
			return _Utils_Tuple2(5, 'js-fe');
		case 5:
			return _Utils_Tuple2(6, 'js-f');
		case 6:
			return _Utils_Tuple2(7, 'js-lk');
		case 7:
			return _Utils_Tuple2(8, 'js-p');
		default:
			return _Utils_Tuple2(6, 'js-ce');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$NoLang$syntaxToStyle = function (syntax) {
	return _Utils_Tuple2(0, 'nolang');
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$syntaxToStyle = function (syntax) {
	switch (syntax) {
		case 0:
			return _Utils_Tuple2(2, 'py-n');
		case 1:
			return _Utils_Tuple2(3, 'py-s');
		case 2:
			return _Utils_Tuple2(4, 'py-k');
		case 3:
			return _Utils_Tuple2(5, 'py-dk');
		case 5:
			return _Utils_Tuple2(6, 'py-f');
		case 6:
			return _Utils_Tuple2(7, 'py-lk');
		case 7:
			return _Utils_Tuple2(8, 'py-p');
		default:
			return _Utils_Tuple2(0, 'py-fe');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$syntaxToStyle = function (syntax) {
	switch (syntax) {
		case 0:
			return _Utils_Tuple2(2, 'sql-n');
		case 1:
			return _Utils_Tuple2(3, 'sql-s');
		case 2:
			return _Utils_Tuple2(4, 'sql-k');
		case 3:
			return _Utils_Tuple2(5, 'sql-o');
		case 4:
			return _Utils_Tuple2(6, 'sql-f');
		case 5:
			return _Utils_Tuple2(7, 'sql-p');
		default:
			return _Utils_Tuple2(8, 'sql-l');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$syntaxToStyle = function (syntax) {
	switch (syntax) {
		case 0:
			return _Utils_Tuple2(4, 'xml-t');
		case 1:
			return _Utils_Tuple2(6, 'xml-a');
		default:
			return _Utils_Tuple2(3, 'xlm-av');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$syntaxToSelector = function (syntax) {
	switch (syntax.$) {
		case 0:
			var elmSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$syntaxToStyle(elmSyntax).b;
		case 1:
			var xmlSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$syntaxToStyle(xmlSyntax).b;
		case 2:
			var jsSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$syntaxToStyle(jsSyntax).b;
		case 3:
			var cssSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$syntaxToStyle(cssSyntax).b;
		case 4:
			var pythonSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$syntaxToStyle(pythonSyntax).b;
		case 5:
			var sqlSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$syntaxToStyle(sqlSyntax).b;
		default:
			var noLangSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$NoLang$syntaxToStyle(noLangSyntax).b;
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$syntaxesToSelectors = function (syntaxes) {
	return $elm$core$String$concat(
		A2(
			$elm$core$List$intersperse,
			', ',
			A2(
				$elm$core$List$map,
				$elm$core$Basics$append('.elmsh-'),
				A2($elm$core$List$map, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$syntaxToSelector, syntaxes))));
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$colorToCss = F2(
	function (property, color) {
		switch (color.$) {
			case 0:
				return '';
			case 1:
				var hex = color.a;
				return property + (hex + ';');
			case 2:
				var r = color.a;
				var g = color.b;
				var b = color.c;
				return $elm$core$String$concat(
					_List_fromArray(
						[
							property,
							'rgb(',
							$elm$core$String$fromInt(r),
							', ',
							$elm$core$String$fromInt(g),
							',',
							$elm$core$String$fromInt(b),
							');'
						]));
			default:
				var r = color.a;
				var g = color.b;
				var b = color.c;
				var a = color.d;
				return $elm$core$String$concat(
					_List_fromArray(
						[
							property,
							'rgba(',
							$elm$core$String$fromInt(r),
							', ',
							$elm$core$String$fromInt(g),
							',',
							$elm$core$String$fromInt(b),
							', ',
							$elm$core$String$fromFloat(a),
							');'
						]));
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$emptyIfFalse = F2(
	function (bool, str) {
		return bool ? str : '';
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$styleToCss = function (_v0) {
	var isBold = _v0.Q;
	var isItalic = _v0.R;
	var isUnderline = _v0.af;
	var text = _v0.j;
	var background = _v0._;
	return $elm$core$String$concat(
		_List_fromArray(
			[
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$emptyIfFalse, isBold, 'font-weight: bold;'),
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$emptyIfFalse, isItalic, 'font-style: italic;'),
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$emptyIfFalse, isUnderline, 'text-decoration: underline;'),
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$colorToCss, 'color: ', text),
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$colorToCss, 'background: ', background)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$toCssClass = function (_v0) {
	var selectors = _v0.a;
	var style = _v0.b;
	return $elm$core$String$isEmpty(selectors) ? '' : (selectors + (' {' + ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$styleToCss(style) + '}')));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$toCss = function (classes) {
	return $elm$core$String$concat(
		A2($elm$core$List$map, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$toCssClass, classes));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$toCss = function (_v0) {
	var requiredStyles = _v0.cH;
	var customStyles = _v0.b9;
	return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$toCss(
		_Utils_ap(
			_List_fromArray(
				[
					_Utils_Tuple2('.elmsh', requiredStyles.ab),
					_Utils_Tuple2('.elmsh-hl', requiredStyles.P),
					_Utils_Tuple2('.elmsh-add', requiredStyles.X),
					_Utils_Tuple2('.elmsh-del', requiredStyles.ac),
					_Utils_Tuple2('.elmsh-comm', requiredStyles.aa),
					_Utils_Tuple2('.elmsh1', requiredStyles.ak),
					_Utils_Tuple2('.elmsh2', requiredStyles.al),
					_Utils_Tuple2('.elmsh3', requiredStyles.am),
					_Utils_Tuple2('.elmsh4', requiredStyles.an),
					_Utils_Tuple2('.elmsh5', requiredStyles.ao),
					_Utils_Tuple2('.elmsh6', requiredStyles.ap),
					_Utils_Tuple2('.elmsh7', requiredStyles.aq)
				]),
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$mapFirst($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$syntaxesToSelectors),
				customStyles)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$OneDark$css = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$toCss($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$OneDark$theme);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$oneDark = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$OneDark$css;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$oneDark = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$oneDark;
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$html$Html$pre = _VirtualDom_node('pre');
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (!result.$) {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$problemToString = function (problem) {
	switch (problem.$) {
		case 0:
			var string = problem.a;
			return 'Expecting ' + string;
		case 1:
			return 'Expecting int';
		case 2:
			return 'Expecting hex';
		case 3:
			return 'Expecting octal';
		case 4:
			return 'Expecting binary';
		case 5:
			return 'Expecting float';
		case 6:
			return 'Expecting number';
		case 7:
			return 'Expecting variable';
		case 8:
			var string = problem.a;
			return 'Expecting symbol ' + string;
		case 9:
			var string = problem.a;
			return 'Expecting keyword ' + string;
		case 10:
			return 'Expecting keyword end';
		case 11:
			return 'Unexpected char';
		case 12:
			var problemDescription = problem.a;
			return problemDescription;
		default:
			return 'Bad repeat';
	}
};
var $dillonkearns$elm_markdown$Markdown$Parser$deadEndToString = function (deadEnd) {
	return 'Problem at row ' + ($elm$core$String$fromInt(deadEnd.cJ) + ('\n' + $dillonkearns$elm_markdown$Markdown$Parser$problemToString(deadEnd.cB)));
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine = {$: 10};
var $dillonkearns$elm_markdown$Markdown$Block$BlockQuote = function (a) {
	return {$: 3, a: a};
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote = function (a) {
	return {$: 11, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Cdata = function (a) {
	return {$: 4, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$CodeBlock = function (a) {
	return {$: 7, a: a};
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock = function (a) {
	return {$: 5, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$CodeSpan = function (a) {
	return {$: 6, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$CompletedTask = 2;
var $dillonkearns$elm_markdown$Markdown$Block$Emphasis = function (a) {
	return {$: 3, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Inline$Emphasis = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Parser$EmptyBlock = {$: 0};
var $elm$parser$Parser$Expecting = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$HardLineBreak = {$: 8};
var $dillonkearns$elm_markdown$Markdown$Block$Heading = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$Heading = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$Html = function (a) {
	return {$: 2, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$HtmlBlock = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$HtmlComment = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Block$HtmlElement = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Block$HtmlInline = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Image = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Block$IncompleteTask = 1;
var $dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock = function (a) {
	return {$: 6, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Parser$InlineProblem = function (a) {
	return {$: 2, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Link = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Block$ListItem = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Block$NoTask = 0;
var $dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$OrderedList = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock = F6(
	function (a, b, c, d, e, f) {
		return {$: 4, a: a, b: b, c: c, d: d, e: e, f: f};
	});
var $dillonkearns$elm_markdown$Markdown$Block$Paragraph = function (a) {
	return {$: 5, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$ParsedBlockQuote = function (a) {
	return {$: 12, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction = function (a) {
	return {$: 2, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Strikethrough = function (a) {
	return {$: 5, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Strong = function (a) {
	return {$: 4, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Table = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$Table = function (a) {
	return {$: 8, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Table$Table = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Table$TableDelimiterRow = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Block$Text = function (a) {
	return {$: 7, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$ThematicBreak = {$: 8};
var $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak = {$: 7};
var $dillonkearns$elm_markdown$Markdown$Block$UnorderedList = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock = F4(
	function (a, b, c, d) {
		return {$: 3, a: a, b: b, c: c, d: d};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines = $elm$core$Basics$identity;
var $dillonkearns$elm_markdown$Markdown$Parser$addReference = F2(
	function (state, linkRef) {
		return {
			a: A2($elm$core$List$cons, linkRef, state.a),
			b: state.b
		};
	});
var $dillonkearns$elm_markdown$Whitespace$isSpaceOrTab = function (_char) {
	switch (_char) {
		case ' ':
			return true;
		case '\t':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Parser$Token$carriageReturn = A2(
	$elm$parser$Parser$Advanced$Token,
	'\r',
	$elm$parser$Parser$Expecting('a carriage return'));
var $dillonkearns$elm_markdown$Parser$Token$newline = A2(
	$elm$parser$Parser$Advanced$Token,
	'\n',
	$elm$parser$Parser$Expecting('a newline'));
var $dillonkearns$elm_markdown$Whitespace$lineEnd = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$Advanced$token($dillonkearns$elm_markdown$Parser$Token$newline),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$token($dillonkearns$elm_markdown$Parser$Token$carriageReturn),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$Advanced$token($dillonkearns$elm_markdown$Parser$Token$newline),
						$elm$parser$Parser$Advanced$succeed(0)
					])))
		]));
var $dillonkearns$elm_markdown$Markdown$Parser$blankLine = A2(
	$elm$parser$Parser$Advanced$map,
	function (_v0) {
		return $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine;
	},
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$backtrackable(
			$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab)),
		$dillonkearns$elm_markdown$Whitespace$lineEnd));
var $dillonkearns$elm_markdown$Parser$Token$space = A2(
	$elm$parser$Parser$Advanced$Token,
	' ',
	$elm$parser$Parser$Expecting('a space'));
var $dillonkearns$elm_markdown$Markdown$Parser$blockQuoteStarts = _List_fromArray(
	[
		$elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			'>',
			$elm$parser$Parser$Expecting('>'))),
		A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$backtrackable(
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$space)),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'>',
						$elm$parser$Parser$Expecting(' >'))),
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						' >',
						$elm$parser$Parser$Expecting('  >'))),
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'  >',
						$elm$parser$Parser$Expecting('   >')))
				])))
	]);
var $dillonkearns$elm_markdown$Whitespace$isLineEnd = function (_char) {
	switch (_char) {
		case '\n':
			return true;
		case '\r':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd = $elm$parser$Parser$Advanced$chompWhile(
	A2($elm$core$Basics$composeL, $elm$core$Basics$not, $dillonkearns$elm_markdown$Whitespace$isLineEnd));
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $dillonkearns$elm_markdown$Helpers$endOfFile = $elm$parser$Parser$Advanced$end(
	$elm$parser$Parser$Expecting('the end of the input'));
var $dillonkearns$elm_markdown$Helpers$lineEndOrEnd = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[$dillonkearns$elm_markdown$Whitespace$lineEnd, $dillonkearns$elm_markdown$Helpers$endOfFile]));
var $dillonkearns$elm_markdown$Markdown$Parser$blockQuote = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote),
			$elm$parser$Parser$Advanced$oneOf($dillonkearns$elm_markdown$Markdown$Parser$blockQuoteStarts)),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$space),
					$elm$parser$Parser$Advanced$succeed(0)
				]))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
		$dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString = function (deadEnds) {
	return A2(
		$elm$core$String$join,
		'\n',
		A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$deadEndToString, deadEnds));
};
var $dillonkearns$elm_markdown$HtmlParser$Cdata = function (a) {
	return {$: 3, a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$Element = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$HtmlParser$Text = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$expectTagNameCharacter = $elm$parser$Parser$Expecting('at least 1 tag name character');
var $dillonkearns$elm_markdown$HtmlParser$tagNameCharacter = function (c) {
	switch (c) {
		case ' ':
			return false;
		case '\r':
			return false;
		case '\n':
			return false;
		case '\t':
			return false;
		case '/':
			return false;
		case '<':
			return false;
		case '>':
			return false;
		case '\"':
			return false;
		case '\'':
			return false;
		case '=':
			return false;
		default:
			return true;
	}
};
var $elm$core$String$toLower = _String_toLower;
var $dillonkearns$elm_markdown$HtmlParser$tagName = A2(
	$elm$parser$Parser$Advanced$mapChompedString,
	F2(
		function (name, _v0) {
			return $elm$core$String$toLower(name);
		}),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2($elm$parser$Parser$Advanced$chompIf, $dillonkearns$elm_markdown$HtmlParser$tagNameCharacter, $dillonkearns$elm_markdown$HtmlParser$expectTagNameCharacter),
		$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$HtmlParser$tagNameCharacter)));
var $dillonkearns$elm_markdown$HtmlParser$attributeName = $dillonkearns$elm_markdown$HtmlParser$tagName;
var $dillonkearns$elm_markdown$HtmlParser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$token(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $dillonkearns$elm_markdown$HtmlParser$entities = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('amp', '&'),
			_Utils_Tuple2('lt', '<'),
			_Utils_Tuple2('gt', '>'),
			_Utils_Tuple2('apos', '\''),
			_Utils_Tuple2('quot', '\"')
		]));
var $elm$core$Char$fromCode = _Char_fromCode;
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return $elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return $elm$core$Result$Err(
							$elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $rtfeldman$elm_hex$Hex$fromString = function (str) {
	if ($elm$core$String$isEmpty(str)) {
		return $elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2($elm$core$String$startsWith, '-', str)) {
				var list = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					$elm$core$List$tail(
						$elm$core$String$toList(str)));
				return A2(
					$elm$core$Result$map,
					$elm$core$Basics$negate,
					A3(
						$rtfeldman$elm_hex$Hex$fromStringHelp,
						$elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					$rtfeldman$elm_hex$Hex$fromStringHelp,
					$elm$core$String$length(str) - 1,
					$elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2($elm$core$Result$mapError, formatError, result);
	}
};
var $dillonkearns$elm_markdown$HtmlParser$decodeEscape = function (s) {
	return A2($elm$core$String$startsWith, '#x', s) ? A2(
		$elm$core$Result$mapError,
		$elm$parser$Parser$Problem,
		A2(
			$elm$core$Result$map,
			$elm$core$Char$fromCode,
			$rtfeldman$elm_hex$Hex$fromString(
				A2($elm$core$String$dropLeft, 2, s)))) : (A2($elm$core$String$startsWith, '#', s) ? A2(
		$elm$core$Result$fromMaybe,
		$elm$parser$Parser$Problem('Invalid escaped character: ' + s),
		A2(
			$elm$core$Maybe$map,
			$elm$core$Char$fromCode,
			$elm$core$String$toInt(
				A2($elm$core$String$dropLeft, 1, s)))) : A2(
		$elm$core$Result$fromMaybe,
		$elm$parser$Parser$Problem('No entity named \"&' + (s + ';\" found.')),
		A2($elm$core$Dict$get, s, $dillonkearns$elm_markdown$HtmlParser$entities)));
};
var $dillonkearns$elm_markdown$HtmlParser$escapedChar = function (end_) {
	var process = function (entityStr) {
		var _v0 = $dillonkearns$elm_markdown$HtmlParser$decodeEscape(entityStr);
		if (!_v0.$) {
			var c = _v0.a;
			return $elm$parser$Parser$Advanced$succeed(c);
		} else {
			var e = _v0.a;
			return $elm$parser$Parser$Advanced$problem(e);
		}
	};
	var isEntityChar = function (c) {
		return (!_Utils_eq(c, end_)) && (c !== ';');
	};
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$dillonkearns$elm_markdown$HtmlParser$symbol('&')),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$andThen,
				process,
				$elm$parser$Parser$Advanced$getChompedString(
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$chompIf,
							isEntityChar,
							$elm$parser$Parser$Expecting('an entity character')),
						$elm$parser$Parser$Advanced$chompWhile(isEntityChar)))),
			$dillonkearns$elm_markdown$HtmlParser$symbol(';')));
};
var $dillonkearns$elm_markdown$HtmlParser$textStringStep = F3(
	function (closingChar, predicate, accum) {
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (soFar) {
				return $elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$Advanced$map,
							function (escaped) {
								return $elm$parser$Parser$Advanced$Loop(
									_Utils_ap(
										accum,
										_Utils_ap(
											soFar,
											$elm$core$String$fromChar(escaped))));
							},
							$dillonkearns$elm_markdown$HtmlParser$escapedChar(closingChar)),
							$elm$parser$Parser$Advanced$succeed(
							$elm$parser$Parser$Advanced$Done(
								_Utils_ap(accum, soFar)))
						]));
			},
			$elm$parser$Parser$Advanced$getChompedString(
				$elm$parser$Parser$Advanced$chompWhile(predicate)));
	});
var $dillonkearns$elm_markdown$HtmlParser$textString = function (closingChar) {
	var predicate = function (c) {
		return (!_Utils_eq(c, closingChar)) && (c !== '&');
	};
	return A2(
		$elm$parser$Parser$Advanced$loop,
		'',
		A2($dillonkearns$elm_markdown$HtmlParser$textStringStep, closingChar, predicate));
};
var $dillonkearns$elm_markdown$HtmlParser$attributeValue = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$dillonkearns$elm_markdown$HtmlParser$symbol('\"')),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$dillonkearns$elm_markdown$HtmlParser$textString('\"'),
				$dillonkearns$elm_markdown$HtmlParser$symbol('\"'))),
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$dillonkearns$elm_markdown$HtmlParser$symbol('\'')),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$dillonkearns$elm_markdown$HtmlParser$textString('\''),
				$dillonkearns$elm_markdown$HtmlParser$symbol('\'')))
		]));
var $dillonkearns$elm_markdown$HtmlParser$keepOldest = F2(
	function (_new, mValue) {
		if (!mValue.$) {
			var v = mValue.a;
			return $elm$core$Maybe$Just(v);
		} else {
			return $elm$core$Maybe$Just(_new);
		}
	});
var $dillonkearns$elm_markdown$HtmlParser$isWhitespace = function (c) {
	switch (c) {
		case ' ':
			return true;
		case '\r':
			return true;
		case '\n':
			return true;
		case '\t':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$HtmlParser$whiteSpace = $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$HtmlParser$isWhitespace);
var $dillonkearns$elm_markdown$HtmlParser$attributesStep = function (attrs) {
	var process = F2(
		function (name, value) {
			return $elm$parser$Parser$Advanced$Loop(
				A3(
					$elm$core$Dict$update,
					$elm$core$String$toLower(name),
					$dillonkearns$elm_markdown$HtmlParser$keepOldest(value),
					attrs));
		});
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(process),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$HtmlParser$attributeName, $dillonkearns$elm_markdown$HtmlParser$whiteSpace),
							$dillonkearns$elm_markdown$HtmlParser$symbol('=')),
						$dillonkearns$elm_markdown$HtmlParser$whiteSpace)),
				A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$HtmlParser$attributeValue, $dillonkearns$elm_markdown$HtmlParser$whiteSpace)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(attrs))
			]));
};
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $dillonkearns$elm_markdown$HtmlParser$attributes = A2(
	$elm$parser$Parser$Advanced$map,
	A2(
		$elm$core$Dict$foldl,
		F3(
			function (key, value, accum) {
				return A2(
					$elm$core$List$cons,
					{aZ: key, bh: value},
					accum);
			}),
		_List_Nil),
	A2($elm$parser$Parser$Advanced$loop, $elm$core$Dict$empty, $dillonkearns$elm_markdown$HtmlParser$attributesStep));
var $elm$parser$Parser$Advanced$chompUntilEndOr = function (str) {
	return function (s) {
		var _v0 = A5(_Parser_findSubString, str, s.d, s.cJ, s.bn, s.a5);
		var newOffset = _v0.a;
		var newRow = _v0.b;
		var newCol = _v0.c;
		var adjustedOffset = (newOffset < 0) ? $elm$core$String$length(s.a5) : newOffset;
		return A3(
			$elm$parser$Parser$Advanced$Good,
			_Utils_cmp(s.d, adjustedOffset) < 0,
			0,
			{bn: newCol, f: s.f, h: s.h, d: adjustedOffset, cJ: newRow, a5: s.a5});
	};
};
var $dillonkearns$elm_markdown$HtmlParser$cdata = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
		$dillonkearns$elm_markdown$HtmlParser$symbol('<![CDATA[')),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr(']]>')),
		$dillonkearns$elm_markdown$HtmlParser$symbol(']]>')));
var $dillonkearns$elm_markdown$HtmlParser$childrenStep = F2(
	function (options, accum) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (f) {
				return f(accum);
			},
			$elm$parser$Parser$Advanced$oneOf(options));
	});
var $dillonkearns$elm_markdown$HtmlParser$fail = function (str) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(str));
};
var $dillonkearns$elm_markdown$HtmlParser$closingTag = function (startTagName) {
	var closingTagName = A2(
		$elm$parser$Parser$Advanced$andThen,
		function (endTagName) {
			return _Utils_eq(startTagName, endTagName) ? $elm$parser$Parser$Advanced$succeed(0) : $dillonkearns$elm_markdown$HtmlParser$fail('tag name mismatch: ' + (startTagName + (' and ' + endTagName)));
		},
		$dillonkearns$elm_markdown$HtmlParser$tagName);
	return A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$dillonkearns$elm_markdown$HtmlParser$symbol('</'),
					$dillonkearns$elm_markdown$HtmlParser$whiteSpace),
				closingTagName),
			$dillonkearns$elm_markdown$HtmlParser$whiteSpace),
		$dillonkearns$elm_markdown$HtmlParser$symbol('>'));
};
var $dillonkearns$elm_markdown$HtmlParser$Comment = function (a) {
	return {$: 2, a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $dillonkearns$elm_markdown$HtmlParser$comment = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$Comment),
		$elm$parser$Parser$Advanced$token(
			$dillonkearns$elm_markdown$HtmlParser$toToken('<!--'))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr('-->')),
		$elm$parser$Parser$Advanced$token(
			$dillonkearns$elm_markdown$HtmlParser$toToken('-->'))));
var $dillonkearns$elm_markdown$HtmlParser$Declaration = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $dillonkearns$elm_markdown$HtmlParser$expectUppercaseCharacter = $elm$parser$Parser$Expecting('at least 1 uppercase character');
var $dillonkearns$elm_markdown$HtmlParser$allUppercase = $elm$parser$Parser$Advanced$getChompedString(
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2($elm$parser$Parser$Advanced$chompIf, $elm$core$Char$isUpper, $dillonkearns$elm_markdown$HtmlParser$expectUppercaseCharacter),
		$elm$parser$Parser$Advanced$chompWhile($elm$core$Char$isUpper)));
var $dillonkearns$elm_markdown$HtmlParser$oneOrMoreWhiteSpace = A2(
	$elm$parser$Parser$Advanced$ignorer,
	A2(
		$elm$parser$Parser$Advanced$chompIf,
		$dillonkearns$elm_markdown$HtmlParser$isWhitespace,
		$elm$parser$Parser$Expecting('at least one whitespace')),
	$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$HtmlParser$isWhitespace));
var $dillonkearns$elm_markdown$HtmlParser$docType = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$Declaration),
			$dillonkearns$elm_markdown$HtmlParser$symbol('<!')),
		A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$HtmlParser$allUppercase, $dillonkearns$elm_markdown$HtmlParser$oneOrMoreWhiteSpace)),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr('>')),
		$dillonkearns$elm_markdown$HtmlParser$symbol('>')));
var $dillonkearns$elm_markdown$HtmlParser$ProcessingInstruction = function (a) {
	return {$: 4, a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$processingInstruction = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$ProcessingInstruction),
		$dillonkearns$elm_markdown$HtmlParser$symbol('<?')),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr('?>')),
		$dillonkearns$elm_markdown$HtmlParser$symbol('?>')));
var $dillonkearns$elm_markdown$HtmlParser$isNotTextNodeIgnoreChar = function (c) {
	switch (c) {
		case '<':
			return false;
		case '&':
			return false;
		default:
			return true;
	}
};
var $dillonkearns$elm_markdown$HtmlParser$textNodeStringStepOptions = _List_fromArray(
	[
		A2(
		$elm$parser$Parser$Advanced$map,
		function (_v0) {
			return $elm$parser$Parser$Advanced$Loop(0);
		},
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$chompIf,
				$dillonkearns$elm_markdown$HtmlParser$isNotTextNodeIgnoreChar,
				$elm$parser$Parser$Expecting('is not & or <')),
			$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$HtmlParser$isNotTextNodeIgnoreChar))),
		A2(
		$elm$parser$Parser$Advanced$map,
		function (_v1) {
			return $elm$parser$Parser$Advanced$Loop(0);
		},
		$dillonkearns$elm_markdown$HtmlParser$escapedChar('<')),
		$elm$parser$Parser$Advanced$succeed(
		$elm$parser$Parser$Advanced$Done(0))
	]);
var $dillonkearns$elm_markdown$HtmlParser$textNodeStringStep = function (_v0) {
	return $elm$parser$Parser$Advanced$oneOf($dillonkearns$elm_markdown$HtmlParser$textNodeStringStepOptions);
};
var $dillonkearns$elm_markdown$HtmlParser$textNodeString = $elm$parser$Parser$Advanced$getChompedString(
	A2($elm$parser$Parser$Advanced$loop, 0, $dillonkearns$elm_markdown$HtmlParser$textNodeStringStep));
var $dillonkearns$elm_markdown$HtmlParser$children = function (startTagName) {
	return A2(
		$elm$parser$Parser$Advanced$loop,
		_List_Nil,
		$dillonkearns$elm_markdown$HtmlParser$childrenStep(
			$dillonkearns$elm_markdown$HtmlParser$childrenStepOptions(startTagName)));
};
var $dillonkearns$elm_markdown$HtmlParser$childrenStepOptions = function (startTagName) {
	return _List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$map,
			F2(
				function (_v1, accum) {
					return $elm$parser$Parser$Advanced$Done(
						$elm$core$List$reverse(accum));
				}),
			$dillonkearns$elm_markdown$HtmlParser$closingTag(startTagName)),
			A2(
			$elm$parser$Parser$Advanced$andThen,
			function (text) {
				return $elm$core$String$isEmpty(text) ? A2(
					$elm$parser$Parser$Advanced$map,
					F2(
						function (_v2, accum) {
							return $elm$parser$Parser$Advanced$Done(
								$elm$core$List$reverse(accum));
						}),
					$dillonkearns$elm_markdown$HtmlParser$closingTag(startTagName)) : $elm$parser$Parser$Advanced$succeed(
					function (accum) {
						return $elm$parser$Parser$Advanced$Loop(
							A2(
								$elm$core$List$cons,
								$dillonkearns$elm_markdown$HtmlParser$Text(text),
								accum));
					});
			},
			$dillonkearns$elm_markdown$HtmlParser$textNodeString),
			A2(
			$elm$parser$Parser$Advanced$map,
			F2(
				function (_new, accum) {
					return $elm$parser$Parser$Advanced$Loop(
						A2($elm$core$List$cons, _new, accum));
				}),
			$dillonkearns$elm_markdown$HtmlParser$cyclic$html())
		]);
};
var $dillonkearns$elm_markdown$HtmlParser$elementContinuation = function (startTagName) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(
					$dillonkearns$elm_markdown$HtmlParser$Element(startTagName)),
				$dillonkearns$elm_markdown$HtmlParser$whiteSpace),
			A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$HtmlParser$attributes, $dillonkearns$elm_markdown$HtmlParser$whiteSpace)),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return _List_Nil;
					},
					$dillonkearns$elm_markdown$HtmlParser$symbol('/>')),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$dillonkearns$elm_markdown$HtmlParser$symbol('>')),
					$dillonkearns$elm_markdown$HtmlParser$children(startTagName))
				])));
};
function $dillonkearns$elm_markdown$HtmlParser$cyclic$html() {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2($elm$parser$Parser$Advanced$map, $dillonkearns$elm_markdown$HtmlParser$Cdata, $dillonkearns$elm_markdown$HtmlParser$cdata),
				$dillonkearns$elm_markdown$HtmlParser$processingInstruction,
				$dillonkearns$elm_markdown$HtmlParser$comment,
				$dillonkearns$elm_markdown$HtmlParser$docType,
				$dillonkearns$elm_markdown$HtmlParser$cyclic$element()
			]));
}
function $dillonkearns$elm_markdown$HtmlParser$cyclic$element() {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$dillonkearns$elm_markdown$HtmlParser$symbol('<')),
		A2($elm$parser$Parser$Advanced$andThen, $dillonkearns$elm_markdown$HtmlParser$elementContinuation, $dillonkearns$elm_markdown$HtmlParser$tagName));
}
var $dillonkearns$elm_markdown$HtmlParser$html = $dillonkearns$elm_markdown$HtmlParser$cyclic$html();
$dillonkearns$elm_markdown$HtmlParser$cyclic$html = function () {
	return $dillonkearns$elm_markdown$HtmlParser$html;
};
var $dillonkearns$elm_markdown$HtmlParser$element = $dillonkearns$elm_markdown$HtmlParser$cyclic$element();
$dillonkearns$elm_markdown$HtmlParser$cyclic$element = function () {
	return $dillonkearns$elm_markdown$HtmlParser$element;
};
var $dillonkearns$elm_markdown$Parser$Token$tab = A2(
	$elm$parser$Parser$Advanced$Token,
	'\t',
	$elm$parser$Parser$Expecting('a tab'));
var $dillonkearns$elm_markdown$Markdown$Parser$exactlyFourSpaces = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$tab),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$backtrackable(
				$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$space)),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'   ',
							$elm$parser$Parser$ExpectingSymbol('Indentation'))),
						$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							' \t',
							$elm$parser$Parser$ExpectingSymbol('Indentation'))),
						$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'  \t',
							$elm$parser$Parser$ExpectingSymbol('Indentation')))
					])))
		]));
var $dillonkearns$elm_markdown$Markdown$Parser$indentedCodeBlock = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock),
		$dillonkearns$elm_markdown$Markdown$Parser$exactlyFourSpaces),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
		$dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
var $elm$core$Basics$modBy = _Basics_modBy;
var $dillonkearns$elm_markdown$Markdown$Helpers$isEven = function (_int) {
	return !A2($elm$core$Basics$modBy, 2, _int);
};
var $dillonkearns$elm_markdown$Markdown$Block$Loose = 0;
var $dillonkearns$elm_markdown$Markdown$Block$Tight = 1;
var $dillonkearns$elm_markdown$Markdown$Parser$isTightBoolToListDisplay = function (isTight) {
	return isTight ? 1 : 0;
};
var $dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith = F3(
	function (joinWith, string1, string2) {
		var _v0 = _Utils_Tuple2(string1, string2);
		if (_v0.a === '') {
			return string2;
		} else {
			if (_v0.b === '') {
				return string1;
			} else {
				return _Utils_ap(
					string1,
					_Utils_ap(joinWith, string2));
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll = F2(
	function (string1, string2) {
		return string1 + ('\n' + string2);
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $dillonkearns$elm_markdown$Markdown$Parser$innerParagraphParser = A2(
	$elm$parser$Parser$Advanced$mapChompedString,
	F2(
		function (rawLine, _v0) {
			return $dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(rawLine);
		}),
	$dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd);
var $dillonkearns$elm_markdown$Markdown$Parser$openBlockOrParagraphParser = A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$Markdown$Parser$innerParagraphParser, $dillonkearns$elm_markdown$Helpers$lineEndOrEnd);
var $dillonkearns$elm_markdown$Markdown$OrderedList$ListItem = F4(
	function (order, intended, marker, body) {
		return {bk: body, co: intended, cr: marker, cy: order};
	});
var $elm$parser$Parser$Advanced$getCol = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.bn, s);
};
var $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListEmptyItemParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	$elm$parser$Parser$Advanced$succeed(
		function (bodyStartPos) {
			return _Utils_Tuple2(bodyStartPos, '');
		}),
	A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$getCol, $dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
var $dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore = function (condition) {
	return A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$chompIf,
			condition,
			$elm$parser$Parser$Problem('Expected one or more character')),
		$elm$parser$Parser$Advanced$chompWhile(condition));
};
var $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListItemBodyParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(
				F2(
					function (bodyStartPos, item) {
						return _Utils_Tuple2(bodyStartPos, item);
					})),
			$dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab)),
		$elm$parser$Parser$Advanced$getCol),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
		$dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
var $dillonkearns$elm_markdown$Markdown$OrderedList$Dot = 0;
var $dillonkearns$elm_markdown$Markdown$OrderedList$Paren = 1;
var $dillonkearns$elm_markdown$Parser$Token$closingParen = A2(
	$elm$parser$Parser$Advanced$Token,
	')',
	$elm$parser$Parser$Expecting('a `)`'));
var $dillonkearns$elm_markdown$Parser$Token$dot = A2(
	$elm$parser$Parser$Advanced$Token,
	'.',
	$elm$parser$Parser$Expecting('a `.`'));
var $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListMarkerParser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(0),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$dot)),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(1),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$closingParen))
		]));
var $dillonkearns$elm_markdown$Parser$Extra$positiveInteger = A2(
	$elm$parser$Parser$Advanced$mapChompedString,
	F2(
		function (str, _v0) {
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(str));
		}),
	$dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore($elm$core$Char$isDigit));
var $dillonkearns$elm_markdown$Markdown$OrderedList$positiveIntegerMaxOf9Digits = A2(
	$elm$parser$Parser$Advanced$andThen,
	function (parsed) {
		return (parsed <= 999999999) ? $elm$parser$Parser$Advanced$succeed(parsed) : $elm$parser$Parser$Advanced$problem(
			$elm$parser$Parser$Problem('Starting numbers must be nine digits or less.'));
	},
	$dillonkearns$elm_markdown$Parser$Extra$positiveInteger);
var $dillonkearns$elm_markdown$Whitespace$space = $elm$parser$Parser$Advanced$token($dillonkearns$elm_markdown$Parser$Token$space);
var $dillonkearns$elm_markdown$Parser$Extra$upTo = F2(
	function (n, parser) {
		var _v0 = A2($elm$core$List$repeat, n, parser);
		if (!_v0.b) {
			return $elm$parser$Parser$Advanced$succeed(0);
		} else {
			var firstParser = _v0.a;
			var remainingParsers = _v0.b;
			return A3(
				$elm$core$List$foldl,
				F2(
					function (p, parsers) {
						return $elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									A2($elm$parser$Parser$Advanced$ignorer, p, parsers),
									$elm$parser$Parser$Advanced$succeed(0)
								]));
					}),
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							firstParser,
							$elm$parser$Parser$Advanced$succeed(0)
						])),
				remainingParsers);
		}
	});
var $dillonkearns$elm_markdown$Markdown$OrderedList$validateStartsWith1 = function (parsed) {
	if (parsed === 1) {
		return $elm$parser$Parser$Advanced$succeed(parsed);
	} else {
		return $elm$parser$Parser$Advanced$problem(
			$elm$parser$Parser$Problem('Lists inside a paragraph or after a paragraph without a blank line must start with 1'));
	}
};
var $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListOrderParser = function (previousWasBody) {
	return previousWasBody ? A2(
		$elm$parser$Parser$Advanced$andThen,
		$dillonkearns$elm_markdown$Markdown$OrderedList$validateStartsWith1,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				A2($dillonkearns$elm_markdown$Parser$Extra$upTo, 3, $dillonkearns$elm_markdown$Whitespace$space)),
			$dillonkearns$elm_markdown$Markdown$OrderedList$positiveIntegerMaxOf9Digits)) : A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			A2($dillonkearns$elm_markdown$Parser$Extra$upTo, 3, $dillonkearns$elm_markdown$Whitespace$space)),
		$dillonkearns$elm_markdown$Markdown$OrderedList$positiveIntegerMaxOf9Digits);
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $dillonkearns$elm_markdown$Markdown$OrderedList$parser = function (previousWasBody) {
	var parseSubsequentItem = F5(
		function (start, order, marker, mid, _v0) {
			var end = _v0.a;
			var body = _v0.b;
			return ((end - mid) <= 4) ? A4($dillonkearns$elm_markdown$Markdown$OrderedList$ListItem, order, end - start, marker, body) : A4(
				$dillonkearns$elm_markdown$Markdown$OrderedList$ListItem,
				order,
				(mid - start) + 1,
				marker,
				_Utils_ap(
					A2($elm$core$String$repeat, (end - mid) - 1, ' '),
					body));
		});
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(parseSubsequentItem),
						$elm$parser$Parser$Advanced$getCol),
					$elm$parser$Parser$Advanced$backtrackable(
						$dillonkearns$elm_markdown$Markdown$OrderedList$orderedListOrderParser(previousWasBody))),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$OrderedList$orderedListMarkerParser)),
			$elm$parser$Parser$Advanced$getCol),
		previousWasBody ? $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListItemBodyParser : $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[$dillonkearns$elm_markdown$Markdown$OrderedList$orderedListEmptyItemParser, $dillonkearns$elm_markdown$Markdown$OrderedList$orderedListItemBodyParser])));
};
var $dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock = function (previousWasBody) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		function (item) {
			return A6($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock, true, item.co, item.cr, item.cy, _List_Nil, item.bk);
		},
		$dillonkearns$elm_markdown$Markdown$OrderedList$parser(previousWasBody));
};
var $dillonkearns$elm_markdown$Markdown$Inline$CodeInline = function (a) {
	return {$: 2, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Inline$HardLineBreak = {$: 1};
var $dillonkearns$elm_markdown$Markdown$Inline$HtmlInline = function (a) {
	return {$: 5, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Inline$Image = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Inline$Link = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Inline$Strikethrough = function (a) {
	return {$: 7, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Inline$Text = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$matchToInline = function (_v0) {
	var match = _v0;
	var _v1 = match.k;
	switch (_v1.$) {
		case 0:
			return $dillonkearns$elm_markdown$Markdown$Inline$Text(match.j);
		case 1:
			return $dillonkearns$elm_markdown$Markdown$Inline$HardLineBreak;
		case 2:
			return $dillonkearns$elm_markdown$Markdown$Inline$CodeInline(match.j);
		case 3:
			var _v2 = _v1.a;
			var text = _v2.a;
			var url = _v2.b;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Inline$Link,
				url,
				$elm$core$Maybe$Nothing,
				_List_fromArray(
					[
						$dillonkearns$elm_markdown$Markdown$Inline$Text(text)
					]));
		case 4:
			var _v3 = _v1.a;
			var url = _v3.a;
			var maybeTitle = _v3.b;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Inline$Link,
				url,
				maybeTitle,
				$dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.p));
		case 5:
			var _v4 = _v1.a;
			var url = _v4.a;
			var maybeTitle = _v4.b;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Inline$Image,
				url,
				maybeTitle,
				$dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.p));
		case 6:
			var model = _v1.a;
			return $dillonkearns$elm_markdown$Markdown$Inline$HtmlInline(model);
		case 7:
			var length = _v1.a;
			return A2(
				$dillonkearns$elm_markdown$Markdown$Inline$Emphasis,
				length,
				$dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.p));
		default:
			return $dillonkearns$elm_markdown$Markdown$Inline$Strikethrough(
				$dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.p));
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines = function (matches) {
	return A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$InlineParser$matchToInline, matches);
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$Match = $elm$core$Basics$identity;
var $dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch = F2(
	function (parentMatch, childMatch) {
		return {g: childMatch.g - parentMatch.r, p: childMatch.p, i: childMatch.i - parentMatch.r, j: childMatch.j, u: childMatch.u - parentMatch.r, r: childMatch.r - parentMatch.r, k: childMatch.k};
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$addChild = F2(
	function (parentMatch, childMatch) {
		return {
			g: parentMatch.g,
			p: A2(
				$elm$core$List$cons,
				A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch, parentMatch, childMatch),
				parentMatch.p),
			i: parentMatch.i,
			j: parentMatch.j,
			u: parentMatch.u,
			r: parentMatch.r,
			k: parentMatch.k
		};
	});
var $elm$core$List$sortBy = _List_sortBy;
var $dillonkearns$elm_markdown$Markdown$InlineParser$organizeChildren = function (_v4) {
	var match = _v4;
	return {
		g: match.g,
		p: $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatches(match.p),
		i: match.i,
		j: match.j,
		u: match.u,
		r: match.r,
		k: match.k
	};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatches = function (matches) {
	var _v2 = A2(
		$elm$core$List$sortBy,
		function (_v3) {
			var match = _v3;
			return match.i;
		},
		matches);
	if (!_v2.b) {
		return _List_Nil;
	} else {
		var first = _v2.a;
		var rest = _v2.b;
		return A3($dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatchesHelp, rest, first, _List_Nil);
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatchesHelp = F3(
	function (remaining, _v0, matchesTail) {
		organizeMatchesHelp:
		while (true) {
			var prevMatch = _v0;
			if (!remaining.b) {
				return A2(
					$elm$core$List$cons,
					$dillonkearns$elm_markdown$Markdown$InlineParser$organizeChildren(prevMatch),
					matchesTail);
			} else {
				var match = remaining.a;
				var rest = remaining.b;
				if (_Utils_cmp(prevMatch.g, match.i) < 1) {
					var $temp$remaining = rest,
						$temp$_v0 = match,
						$temp$matchesTail = A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$InlineParser$organizeChildren(prevMatch),
						matchesTail);
					remaining = $temp$remaining;
					_v0 = $temp$_v0;
					matchesTail = $temp$matchesTail;
					continue organizeMatchesHelp;
				} else {
					if ((_Utils_cmp(prevMatch.i, match.i) < 0) && (_Utils_cmp(prevMatch.g, match.g) > 0)) {
						var $temp$remaining = rest,
							$temp$_v0 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$addChild, prevMatch, match),
							$temp$matchesTail = matchesTail;
						remaining = $temp$remaining;
						_v0 = $temp$_v0;
						matchesTail = $temp$matchesTail;
						continue organizeMatchesHelp;
					} else {
						var $temp$remaining = rest,
							$temp$_v0 = prevMatch,
							$temp$matchesTail = matchesTail;
						remaining = $temp$remaining;
						_v0 = $temp$_v0;
						matchesTail = $temp$matchesTail;
						continue organizeMatchesHelp;
					}
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$NormalType = {$: 0};
var $dillonkearns$elm_markdown$Markdown$Helpers$containsAmpersand = function (string) {
	return A2($elm$core$String$contains, '&', string);
};
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {c: index, ah: match, cu: number, a9: submatches};
	});
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{b5: false, ct: false},
		string);
};
var $elm$regex$Regex$never = _Regex_never;
var $dillonkearns$elm_markdown$Markdown$Entity$decimalRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('&#([0-9]{1,8});'));
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $dillonkearns$elm_markdown$Markdown$Entity$isBadEndUnicode = function (_int) {
	var remain_ = A2($elm$core$Basics$modBy, 16, _int);
	var remain = A2($elm$core$Basics$modBy, 131070, _int);
	return (_int >= 131070) && ((((0 <= remain) && (remain <= 15)) || ((65536 <= remain) && (remain <= 65551))) && ((remain_ === 14) || (remain_ === 15)));
};
var $dillonkearns$elm_markdown$Markdown$Entity$isValidUnicode = function (_int) {
	return (_int === 9) || ((_int === 10) || ((_int === 13) || ((_int === 133) || (((32 <= _int) && (_int <= 126)) || (((160 <= _int) && (_int <= 55295)) || (((57344 <= _int) && (_int <= 64975)) || (((65008 <= _int) && (_int <= 65533)) || ((65536 <= _int) && (_int <= 1114109)))))))));
};
var $dillonkearns$elm_markdown$Markdown$Entity$validUnicode = function (_int) {
	return ($dillonkearns$elm_markdown$Markdown$Entity$isValidUnicode(_int) && (!$dillonkearns$elm_markdown$Markdown$Entity$isBadEndUnicode(_int))) ? $elm$core$String$fromChar(
		$elm$core$Char$fromCode(_int)) : $elm$core$String$fromChar(
		$elm$core$Char$fromCode(65533));
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceDecimal = function (match) {
	var _v0 = match.a9;
	if (_v0.b && (!_v0.a.$)) {
		var first = _v0.a.a;
		var _v1 = $elm$core$String$toInt(first);
		if (!_v1.$) {
			var v = _v1.a;
			return $dillonkearns$elm_markdown$Markdown$Entity$validUnicode(v);
		} else {
			return match.ah;
		}
	} else {
		return match.ah;
	}
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceDecimals = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$Entity$decimalRegex, $dillonkearns$elm_markdown$Markdown$Entity$replaceDecimal);
var $dillonkearns$elm_markdown$Markdown$Entity$entitiesRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('&([0-9a-zA-Z]+);'));
var $dillonkearns$elm_markdown$Markdown$Entity$entities = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('quot', 34),
			_Utils_Tuple2('amp', 38),
			_Utils_Tuple2('apos', 39),
			_Utils_Tuple2('lt', 60),
			_Utils_Tuple2('gt', 62),
			_Utils_Tuple2('nbsp', 160),
			_Utils_Tuple2('iexcl', 161),
			_Utils_Tuple2('cent', 162),
			_Utils_Tuple2('pound', 163),
			_Utils_Tuple2('curren', 164),
			_Utils_Tuple2('yen', 165),
			_Utils_Tuple2('brvbar', 166),
			_Utils_Tuple2('sect', 167),
			_Utils_Tuple2('uml', 168),
			_Utils_Tuple2('copy', 169),
			_Utils_Tuple2('ordf', 170),
			_Utils_Tuple2('laquo', 171),
			_Utils_Tuple2('not', 172),
			_Utils_Tuple2('shy', 173),
			_Utils_Tuple2('reg', 174),
			_Utils_Tuple2('macr', 175),
			_Utils_Tuple2('deg', 176),
			_Utils_Tuple2('plusmn', 177),
			_Utils_Tuple2('sup2', 178),
			_Utils_Tuple2('sup3', 179),
			_Utils_Tuple2('acute', 180),
			_Utils_Tuple2('micro', 181),
			_Utils_Tuple2('para', 182),
			_Utils_Tuple2('middot', 183),
			_Utils_Tuple2('cedil', 184),
			_Utils_Tuple2('sup1', 185),
			_Utils_Tuple2('ordm', 186),
			_Utils_Tuple2('raquo', 187),
			_Utils_Tuple2('frac14', 188),
			_Utils_Tuple2('frac12', 189),
			_Utils_Tuple2('frac34', 190),
			_Utils_Tuple2('iquest', 191),
			_Utils_Tuple2('Agrave', 192),
			_Utils_Tuple2('Aacute', 193),
			_Utils_Tuple2('Acirc', 194),
			_Utils_Tuple2('Atilde', 195),
			_Utils_Tuple2('Auml', 196),
			_Utils_Tuple2('Aring', 197),
			_Utils_Tuple2('AElig', 198),
			_Utils_Tuple2('Ccedil', 199),
			_Utils_Tuple2('Egrave', 200),
			_Utils_Tuple2('Eacute', 201),
			_Utils_Tuple2('Ecirc', 202),
			_Utils_Tuple2('Euml', 203),
			_Utils_Tuple2('Igrave', 204),
			_Utils_Tuple2('Iacute', 205),
			_Utils_Tuple2('Icirc', 206),
			_Utils_Tuple2('Iuml', 207),
			_Utils_Tuple2('ETH', 208),
			_Utils_Tuple2('Ntilde', 209),
			_Utils_Tuple2('Ograve', 210),
			_Utils_Tuple2('Oacute', 211),
			_Utils_Tuple2('Ocirc', 212),
			_Utils_Tuple2('Otilde', 213),
			_Utils_Tuple2('Ouml', 214),
			_Utils_Tuple2('times', 215),
			_Utils_Tuple2('Oslash', 216),
			_Utils_Tuple2('Ugrave', 217),
			_Utils_Tuple2('Uacute', 218),
			_Utils_Tuple2('Ucirc', 219),
			_Utils_Tuple2('Uuml', 220),
			_Utils_Tuple2('Yacute', 221),
			_Utils_Tuple2('THORN', 222),
			_Utils_Tuple2('szlig', 223),
			_Utils_Tuple2('agrave', 224),
			_Utils_Tuple2('aacute', 225),
			_Utils_Tuple2('acirc', 226),
			_Utils_Tuple2('atilde', 227),
			_Utils_Tuple2('auml', 228),
			_Utils_Tuple2('aring', 229),
			_Utils_Tuple2('aelig', 230),
			_Utils_Tuple2('ccedil', 231),
			_Utils_Tuple2('egrave', 232),
			_Utils_Tuple2('eacute', 233),
			_Utils_Tuple2('ecirc', 234),
			_Utils_Tuple2('euml', 235),
			_Utils_Tuple2('igrave', 236),
			_Utils_Tuple2('iacute', 237),
			_Utils_Tuple2('icirc', 238),
			_Utils_Tuple2('iuml', 239),
			_Utils_Tuple2('eth', 240),
			_Utils_Tuple2('ntilde', 241),
			_Utils_Tuple2('ograve', 242),
			_Utils_Tuple2('oacute', 243),
			_Utils_Tuple2('ocirc', 244),
			_Utils_Tuple2('otilde', 245),
			_Utils_Tuple2('ouml', 246),
			_Utils_Tuple2('divide', 247),
			_Utils_Tuple2('oslash', 248),
			_Utils_Tuple2('ugrave', 249),
			_Utils_Tuple2('uacute', 250),
			_Utils_Tuple2('ucirc', 251),
			_Utils_Tuple2('uuml', 252),
			_Utils_Tuple2('yacute', 253),
			_Utils_Tuple2('thorn', 254),
			_Utils_Tuple2('yuml', 255),
			_Utils_Tuple2('OElig', 338),
			_Utils_Tuple2('oelig', 339),
			_Utils_Tuple2('Scaron', 352),
			_Utils_Tuple2('scaron', 353),
			_Utils_Tuple2('Yuml', 376),
			_Utils_Tuple2('fnof', 402),
			_Utils_Tuple2('circ', 710),
			_Utils_Tuple2('tilde', 732),
			_Utils_Tuple2('Alpha', 913),
			_Utils_Tuple2('Beta', 914),
			_Utils_Tuple2('Gamma', 915),
			_Utils_Tuple2('Delta', 916),
			_Utils_Tuple2('Epsilon', 917),
			_Utils_Tuple2('Zeta', 918),
			_Utils_Tuple2('Eta', 919),
			_Utils_Tuple2('Theta', 920),
			_Utils_Tuple2('Iota', 921),
			_Utils_Tuple2('Kappa', 922),
			_Utils_Tuple2('Lambda', 923),
			_Utils_Tuple2('Mu', 924),
			_Utils_Tuple2('Nu', 925),
			_Utils_Tuple2('Xi', 926),
			_Utils_Tuple2('Omicron', 927),
			_Utils_Tuple2('Pi', 928),
			_Utils_Tuple2('Rho', 929),
			_Utils_Tuple2('Sigma', 931),
			_Utils_Tuple2('Tau', 932),
			_Utils_Tuple2('Upsilon', 933),
			_Utils_Tuple2('Phi', 934),
			_Utils_Tuple2('Chi', 935),
			_Utils_Tuple2('Psi', 936),
			_Utils_Tuple2('Omega', 937),
			_Utils_Tuple2('alpha', 945),
			_Utils_Tuple2('beta', 946),
			_Utils_Tuple2('gamma', 947),
			_Utils_Tuple2('delta', 948),
			_Utils_Tuple2('epsilon', 949),
			_Utils_Tuple2('zeta', 950),
			_Utils_Tuple2('eta', 951),
			_Utils_Tuple2('theta', 952),
			_Utils_Tuple2('iota', 953),
			_Utils_Tuple2('kappa', 954),
			_Utils_Tuple2('lambda', 955),
			_Utils_Tuple2('mu', 956),
			_Utils_Tuple2('nu', 957),
			_Utils_Tuple2('xi', 958),
			_Utils_Tuple2('omicron', 959),
			_Utils_Tuple2('pi', 960),
			_Utils_Tuple2('rho', 961),
			_Utils_Tuple2('sigmaf', 962),
			_Utils_Tuple2('sigma', 963),
			_Utils_Tuple2('tau', 964),
			_Utils_Tuple2('upsilon', 965),
			_Utils_Tuple2('phi', 966),
			_Utils_Tuple2('chi', 967),
			_Utils_Tuple2('psi', 968),
			_Utils_Tuple2('omega', 969),
			_Utils_Tuple2('thetasym', 977),
			_Utils_Tuple2('upsih', 978),
			_Utils_Tuple2('piv', 982),
			_Utils_Tuple2('ensp', 8194),
			_Utils_Tuple2('emsp', 8195),
			_Utils_Tuple2('thinsp', 8201),
			_Utils_Tuple2('zwnj', 8204),
			_Utils_Tuple2('zwj', 8205),
			_Utils_Tuple2('lrm', 8206),
			_Utils_Tuple2('rlm', 8207),
			_Utils_Tuple2('ndash', 8211),
			_Utils_Tuple2('mdash', 8212),
			_Utils_Tuple2('lsquo', 8216),
			_Utils_Tuple2('rsquo', 8217),
			_Utils_Tuple2('sbquo', 8218),
			_Utils_Tuple2('ldquo', 8220),
			_Utils_Tuple2('rdquo', 8221),
			_Utils_Tuple2('bdquo', 8222),
			_Utils_Tuple2('dagger', 8224),
			_Utils_Tuple2('Dagger', 8225),
			_Utils_Tuple2('bull', 8226),
			_Utils_Tuple2('hellip', 8230),
			_Utils_Tuple2('permil', 8240),
			_Utils_Tuple2('prime', 8242),
			_Utils_Tuple2('Prime', 8243),
			_Utils_Tuple2('lsaquo', 8249),
			_Utils_Tuple2('rsaquo', 8250),
			_Utils_Tuple2('oline', 8254),
			_Utils_Tuple2('frasl', 8260),
			_Utils_Tuple2('euro', 8364),
			_Utils_Tuple2('image', 8465),
			_Utils_Tuple2('weierp', 8472),
			_Utils_Tuple2('real', 8476),
			_Utils_Tuple2('trade', 8482),
			_Utils_Tuple2('alefsym', 8501),
			_Utils_Tuple2('larr', 8592),
			_Utils_Tuple2('uarr', 8593),
			_Utils_Tuple2('rarr', 8594),
			_Utils_Tuple2('darr', 8595),
			_Utils_Tuple2('harr', 8596),
			_Utils_Tuple2('crarr', 8629),
			_Utils_Tuple2('lArr', 8656),
			_Utils_Tuple2('uArr', 8657),
			_Utils_Tuple2('rArr', 8658),
			_Utils_Tuple2('dArr', 8659),
			_Utils_Tuple2('hArr', 8660),
			_Utils_Tuple2('forall', 8704),
			_Utils_Tuple2('part', 8706),
			_Utils_Tuple2('exist', 8707),
			_Utils_Tuple2('empty', 8709),
			_Utils_Tuple2('nabla', 8711),
			_Utils_Tuple2('isin', 8712),
			_Utils_Tuple2('notin', 8713),
			_Utils_Tuple2('ni', 8715),
			_Utils_Tuple2('prod', 8719),
			_Utils_Tuple2('sum', 8721),
			_Utils_Tuple2('minus', 8722),
			_Utils_Tuple2('lowast', 8727),
			_Utils_Tuple2('radic', 8730),
			_Utils_Tuple2('prop', 8733),
			_Utils_Tuple2('infin', 8734),
			_Utils_Tuple2('ang', 8736),
			_Utils_Tuple2('and', 8743),
			_Utils_Tuple2('or', 8744),
			_Utils_Tuple2('cap', 8745),
			_Utils_Tuple2('cup', 8746),
			_Utils_Tuple2('int', 8747),
			_Utils_Tuple2('there4', 8756),
			_Utils_Tuple2('sim', 8764),
			_Utils_Tuple2('cong', 8773),
			_Utils_Tuple2('asymp', 8776),
			_Utils_Tuple2('ne', 8800),
			_Utils_Tuple2('equiv', 8801),
			_Utils_Tuple2('le', 8804),
			_Utils_Tuple2('ge', 8805),
			_Utils_Tuple2('sub', 8834),
			_Utils_Tuple2('sup', 8835),
			_Utils_Tuple2('nsub', 8836),
			_Utils_Tuple2('sube', 8838),
			_Utils_Tuple2('supe', 8839),
			_Utils_Tuple2('oplus', 8853),
			_Utils_Tuple2('otimes', 8855),
			_Utils_Tuple2('perp', 8869),
			_Utils_Tuple2('sdot', 8901),
			_Utils_Tuple2('lceil', 8968),
			_Utils_Tuple2('rceil', 8969),
			_Utils_Tuple2('lfloor', 8970),
			_Utils_Tuple2('rfloor', 8971),
			_Utils_Tuple2('lang', 9001),
			_Utils_Tuple2('rang', 9002),
			_Utils_Tuple2('loz', 9674),
			_Utils_Tuple2('spades', 9824),
			_Utils_Tuple2('clubs', 9827),
			_Utils_Tuple2('hearts', 9829),
			_Utils_Tuple2('diams', 9830)
		]));
var $dillonkearns$elm_markdown$Markdown$Entity$replaceEntity = function (match) {
	var _v0 = match.a9;
	if (_v0.b && (!_v0.a.$)) {
		var first = _v0.a.a;
		var _v1 = A2($elm$core$Dict$get, first, $dillonkearns$elm_markdown$Markdown$Entity$entities);
		if (!_v1.$) {
			var code = _v1.a;
			return $elm$core$String$fromChar(
				$elm$core$Char$fromCode(code));
		} else {
			return match.ah;
		}
	} else {
		return match.ah;
	}
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceEntities = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$Entity$entitiesRegex, $dillonkearns$elm_markdown$Markdown$Entity$replaceEntity);
var $dillonkearns$elm_markdown$Markdown$Helpers$escapableRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\+)([!\"#$%&\\\'()*+,./:;<=>?@[\\\\\\]^_`{|}~-])'));
var $dillonkearns$elm_markdown$Markdown$Helpers$replaceEscapable = A2(
	$elm$regex$Regex$replace,
	$dillonkearns$elm_markdown$Markdown$Helpers$escapableRegex,
	function (regexMatch) {
		var _v0 = regexMatch.a9;
		if (((_v0.b && (!_v0.a.$)) && _v0.b.b) && (!_v0.b.a.$)) {
			var backslashes = _v0.a.a;
			var _v1 = _v0.b;
			var escapedStr = _v1.a.a;
			return _Utils_ap(
				A2(
					$elm$core$String$repeat,
					($elm$core$String$length(backslashes) / 2) | 0,
					'\\'),
				escapedStr);
		} else {
			return regexMatch.ah;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Entity$hexadecimalRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('&#[Xx]([0-9a-fA-F]{1,8});'));
var $elm$core$String$foldl = _String_foldl;
var $dillonkearns$elm_markdown$Markdown$Entity$hexToInt = function (string) {
	var folder = F2(
		function (hexDigit, _int) {
			return ((_int * 16) + A2(
				$elm$core$Basics$modBy,
				39,
				$elm$core$Char$toCode(hexDigit))) - 9;
		});
	return A3(
		$elm$core$String$foldl,
		folder,
		0,
		$elm$core$String$toLower(string));
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimal = function (match) {
	var _v0 = match.a9;
	if (_v0.b && (!_v0.a.$)) {
		var first = _v0.a.a;
		return $dillonkearns$elm_markdown$Markdown$Entity$validUnicode(
			$dillonkearns$elm_markdown$Markdown$Entity$hexToInt(first));
	} else {
		return match.ah;
	}
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimals = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$Entity$hexadecimalRegex, $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimal);
var $dillonkearns$elm_markdown$Markdown$Helpers$formatStr = function (str) {
	var withEscapes = $dillonkearns$elm_markdown$Markdown$Helpers$replaceEscapable(str);
	return $dillonkearns$elm_markdown$Markdown$Helpers$containsAmpersand(withEscapes) ? $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimals(
		$dillonkearns$elm_markdown$Markdown$Entity$replaceDecimals(
			$dillonkearns$elm_markdown$Markdown$Entity$replaceEntities(withEscapes))) : withEscapes;
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch = function (text) {
	return {
		g: 0,
		p: _List_Nil,
		i: 0,
		j: $dillonkearns$elm_markdown$Markdown$Helpers$formatStr(text),
		u: 0,
		r: 0,
		k: $dillonkearns$elm_markdown$Markdown$InlineParser$NormalType
	};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatch = F3(
	function (rawText, _v2, parsedMatches) {
		var matchModel = _v2;
		var updtMatch = {
			g: matchModel.g,
			p: A3($dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches, matchModel.j, _List_Nil, matchModel.p),
			i: matchModel.i,
			j: matchModel.j,
			u: matchModel.u,
			r: matchModel.r,
			k: matchModel.k
		};
		if (!parsedMatches.b) {
			var finalStr = A2($elm$core$String$dropLeft, matchModel.g, rawText);
			return $elm$core$String$isEmpty(finalStr) ? _List_fromArray(
				[updtMatch]) : _List_fromArray(
				[
					updtMatch,
					$dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(finalStr)
				]);
		} else {
			var matchHead = parsedMatches.a;
			var matchesTail = parsedMatches.b;
			var _v4 = matchHead.k;
			if (!_v4.$) {
				return A2($elm$core$List$cons, updtMatch, parsedMatches);
			} else {
				return _Utils_eq(matchModel.g, matchHead.i) ? A2($elm$core$List$cons, updtMatch, parsedMatches) : ((_Utils_cmp(matchModel.g, matchHead.i) < 0) ? A2(
					$elm$core$List$cons,
					updtMatch,
					A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(
							A3($elm$core$String$slice, matchModel.g, matchHead.i, rawText)),
						parsedMatches)) : parsedMatches);
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches = F3(
	function (rawText, parsedMatches, matches) {
		parseTextMatches:
		while (true) {
			if (!matches.b) {
				if (!parsedMatches.b) {
					return $elm$core$String$isEmpty(rawText) ? _List_Nil : _List_fromArray(
						[
							$dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(rawText)
						]);
				} else {
					var matchModel = parsedMatches.a;
					return (matchModel.i > 0) ? A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(
							A2($elm$core$String$left, matchModel.i, rawText)),
						parsedMatches) : parsedMatches;
				}
			} else {
				var match = matches.a;
				var matchesTail = matches.b;
				var $temp$rawText = rawText,
					$temp$parsedMatches = A3($dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatch, rawText, match, parsedMatches),
					$temp$matches = matchesTail;
				rawText = $temp$rawText;
				parsedMatches = $temp$parsedMatches;
				matches = $temp$matches;
				continue parseTextMatches;
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketLTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)(\\<)'));
var $elm$regex$Regex$find = _Regex_findAtMost(_Regex_infinity);
var $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketOpen = {$: 4};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketLToken = function (regMatch) {
	var _v0 = regMatch.a9;
	if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var delimiter = _v1.a.a;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just(
			{c: regMatch.c + backslashesLength, aW: 1, e: $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketOpen}) : $elm$core$Maybe$Nothing;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketLTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketLToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketLTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketRTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)(\\>)'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketClose = function (a) {
	return {$: 5, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$Escaped = 0;
var $dillonkearns$elm_markdown$Markdown$InlineParser$NotEscaped = 1;
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketRToken = function (regMatch) {
	var _v0 = regMatch.a9;
	if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		return $elm$core$Maybe$Just(
			{
				c: regMatch.c + backslashesLength,
				aW: 1,
				e: $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketClose(1) : $dillonkearns$elm_markdown$Markdown$InlineParser$AngleBracketClose(0)
			});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketRTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketRToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketRTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$asteriskEmphasisTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)([^*])?(\\*+)([^*])?'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisToken = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isPunctuation = function (c) {
	switch (c) {
		case '!':
			return true;
		case '\"':
			return true;
		case '#':
			return true;
		case '%':
			return true;
		case '&':
			return true;
		case '\'':
			return true;
		case '(':
			return true;
		case ')':
			return true;
		case '*':
			return true;
		case ',':
			return true;
		case '-':
			return true;
		case '.':
			return true;
		case '/':
			return true;
		case ':':
			return true;
		case ';':
			return true;
		case '?':
			return true;
		case '@':
			return true;
		case '[':
			return true;
		case ']':
			return true;
		case '_':
			return true;
		case '{':
			return true;
		case '}':
			return true;
		case '~':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$containPunctuation = A2(
	$elm$core$String$foldl,
	F2(
		function (c, accum) {
			return accum || $dillonkearns$elm_markdown$Markdown$InlineParser$isPunctuation(c);
		}),
	false);
var $dillonkearns$elm_markdown$Markdown$InlineParser$isWhitespace = function (c) {
	switch (c) {
		case ' ':
			return true;
		case '\u000C':
			return true;
		case '\n':
			return true;
		case '\r':
			return true;
		case '\t':
			return true;
		case '\u000B':
			return true;
		case '\u00A0':
			return true;
		case '\u2028':
			return true;
		case '\u2029':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$containSpace = A2(
	$elm$core$String$foldl,
	F2(
		function (c, accum) {
			return accum || $dillonkearns$elm_markdown$Markdown$InlineParser$isWhitespace(c);
		}),
	false);
var $dillonkearns$elm_markdown$Markdown$InlineParser$getFringeRank = function (mstring) {
	if (!mstring.$) {
		var string = mstring.a;
		return ($elm$core$String$isEmpty(string) || $dillonkearns$elm_markdown$Markdown$InlineParser$containSpace(string)) ? 0 : ($dillonkearns$elm_markdown$Markdown$InlineParser$containPunctuation(string) ? 1 : 2);
	} else {
		return 0;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken = F3(
	function (_char, rawText, regMatch) {
		var _v0 = regMatch.a9;
		if ((((_v0.b && _v0.b.b) && _v0.b.b.b) && (!_v0.b.b.a.$)) && _v0.b.b.b.b) {
			var maybeBackslashes = _v0.a;
			var _v1 = _v0.b;
			var maybeLeftFringe = _v1.a;
			var _v2 = _v1.b;
			var delimiter = _v2.a.a;
			var _v3 = _v2.b;
			var maybeRightFringe = _v3.a;
			var rFringeRank = $dillonkearns$elm_markdown$Markdown$InlineParser$getFringeRank(maybeRightFringe);
			var leftFringeLength = function () {
				if (!maybeLeftFringe.$) {
					var left = maybeLeftFringe.a;
					return $elm$core$String$length(left);
				} else {
					return 0;
				}
			}();
			var mLeftFringe = ((!(!regMatch.c)) && (!leftFringeLength)) ? $elm$core$Maybe$Just(
				A3($elm$core$String$slice, regMatch.c - 1, regMatch.c, rawText)) : maybeLeftFringe;
			var backslashesLength = function () {
				if (!maybeBackslashes.$) {
					var backslashes = maybeBackslashes.a;
					return $elm$core$String$length(backslashes);
				} else {
					return 0;
				}
			}();
			var isEscaped = ((!$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength)) && (!leftFringeLength)) || function () {
				if ((!mLeftFringe.$) && (mLeftFringe.a === '\\')) {
					return true;
				} else {
					return false;
				}
			}();
			var delimiterLength = isEscaped ? ($elm$core$String$length(delimiter) - 1) : $elm$core$String$length(delimiter);
			var lFringeRank = isEscaped ? 1 : $dillonkearns$elm_markdown$Markdown$InlineParser$getFringeRank(mLeftFringe);
			if ((delimiterLength <= 0) || ((_char === '_') && ((lFringeRank === 2) && (rFringeRank === 2)))) {
				return $elm$core$Maybe$Nothing;
			} else {
				var index = ((regMatch.c + backslashesLength) + leftFringeLength) + (isEscaped ? 1 : 0);
				return $elm$core$Maybe$Just(
					{
						c: index,
						aW: delimiterLength,
						e: A2(
							$dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisToken,
							_char,
							{aE: lFringeRank, aG: rFringeRank})
					});
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$findAsteriskEmphasisTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		A2($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken, '*', str),
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$asteriskEmphasisTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$codeTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)(\\`+)'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$CodeToken = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToCodeToken = function (regMatch) {
	var _v0 = regMatch.a9;
	if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var backtick = _v1.a.a;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		return $elm$core$Maybe$Just(
			{
				c: regMatch.c + backslashesLength,
				aW: $elm$core$String$length(backtick),
				e: $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $dillonkearns$elm_markdown$Markdown$InlineParser$CodeToken(1) : $dillonkearns$elm_markdown$Markdown$InlineParser$CodeToken(0)
			});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findCodeTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToCodeToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$codeTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$hardBreakTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(?:(\\\\+)|( {2,}))\\n'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken = {$: 9};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToHardBreakToken = function (regMatch) {
	var _v0 = regMatch.a9;
	_v0$2:
	while (true) {
		if (_v0.b) {
			if (!_v0.a.$) {
				var backslashes = _v0.a.a;
				var backslashesLength = $elm$core$String$length(backslashes);
				return (!$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength)) ? $elm$core$Maybe$Just(
					{c: (regMatch.c + backslashesLength) - 1, aW: 2, e: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken}) : $elm$core$Maybe$Nothing;
			} else {
				if (_v0.b.b && (!_v0.b.a.$)) {
					var _v1 = _v0.b;
					return $elm$core$Maybe$Just(
						{
							c: regMatch.c,
							aW: $elm$core$String$length(regMatch.ah),
							e: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken
						});
				} else {
					break _v0$2;
				}
			}
		} else {
			break _v0$2;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToSoftHardBreakToken = function (regMatch) {
	var _v0 = regMatch.a9;
	_v0$2:
	while (true) {
		if (_v0.b) {
			if (!_v0.a.$) {
				var backslashes = _v0.a.a;
				var backslashesLength = $elm$core$String$length(backslashes);
				return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just(
					{c: regMatch.c + backslashesLength, aW: 1, e: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken}) : $elm$core$Maybe$Just(
					{c: (regMatch.c + backslashesLength) - 1, aW: 2, e: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken});
			} else {
				if (_v0.b.b) {
					var _v1 = _v0.b;
					var maybeSpaces = _v1.a;
					return $elm$core$Maybe$Just(
						{
							c: regMatch.c,
							aW: $elm$core$String$length(regMatch.ah),
							e: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken
						});
				} else {
					break _v0$2;
				}
			}
		} else {
			break _v0$2;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreak = false;
var $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreakTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(?:(\\\\+)|( *))\\n'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$findHardBreakTokens = function (str) {
	return $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreak ? A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToSoftHardBreakToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreakTokenRegex, str)) : A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToHardBreakToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$hardBreakTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageCloseTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)(\\])'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$SquareBracketClose = {$: 3};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageCloseToken = function (regMatch) {
	var _v0 = regMatch.a9;
	if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just(
			{c: regMatch.c + backslashesLength, aW: 1, e: $dillonkearns$elm_markdown$Markdown$InlineParser$SquareBracketClose}) : $elm$core$Maybe$Nothing;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageCloseTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageCloseToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageCloseTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageOpenTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)(\\!)?(\\[)'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$Active = 0;
var $dillonkearns$elm_markdown$Markdown$InlineParser$ImageOpenToken = {$: 2};
var $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageOpenToken = function (regMatch) {
	var _v0 = regMatch.a9;
	if (((_v0.b && _v0.b.b) && _v0.b.b.b) && (!_v0.b.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var maybeImageOpen = _v1.a;
		var _v2 = _v1.b;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		var isEscaped = !$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength);
		var index = isEscaped ? ((regMatch.c + backslashesLength) + 1) : (regMatch.c + backslashesLength);
		if (isEscaped) {
			if (!maybeImageOpen.$) {
				return $elm$core$Maybe$Just(
					{
						c: index,
						aW: 1,
						e: $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken(0)
					});
			} else {
				return $elm$core$Maybe$Nothing;
			}
		} else {
			if (!maybeImageOpen.$) {
				return $elm$core$Maybe$Just(
					{c: index, aW: 2, e: $dillonkearns$elm_markdown$Markdown$InlineParser$ImageOpenToken});
			} else {
				return $elm$core$Maybe$Just(
					{
						c: index,
						aW: 1,
						e: $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken(0)
					});
			}
		}
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageOpenTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageOpenToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageOpenTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$StrikethroughToken = function (a) {
	return {$: 10, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToStrikethroughToken = function (regMatch) {
	var _v0 = regMatch.a9;
	if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var tilde = _v1.a.a;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		var _v2 = $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? _Utils_Tuple2(
			$elm$core$String$length(tilde),
			$dillonkearns$elm_markdown$Markdown$InlineParser$StrikethroughToken(1)) : _Utils_Tuple2(
			$elm$core$String$length(tilde),
			$dillonkearns$elm_markdown$Markdown$InlineParser$StrikethroughToken(0));
		var length = _v2.a;
		var meaning = _v2.b;
		return $elm$core$Maybe$Just(
			{c: regMatch.c + backslashesLength, aW: length, e: meaning});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)(~{2,})([^~])?'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$findStrikethroughTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToStrikethroughToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$underlineEmphasisTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)([^_])?(\\_+)([^_])?'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$findUnderlineEmphasisTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		A2($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken, '_', str),
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$underlineEmphasisTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex = F2(
	function (left, right) {
		if (left.b) {
			var lfirst = left.a;
			var lrest = left.b;
			if (right.b) {
				var rfirst = right.a;
				var rrest = right.b;
				return (_Utils_cmp(lfirst.c, rfirst.c) < 0) ? A2(
					$elm$core$List$cons,
					lfirst,
					A2($dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex, lrest, right)) : A2(
					$elm$core$List$cons,
					rfirst,
					A2($dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex, left, rrest));
			} else {
				return left;
			}
		} else {
			return right;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$tokenize = function (rawText) {
	return A2(
		$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
		$dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketRTokens(rawText),
		A2(
			$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
			$dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketLTokens(rawText),
			A2(
				$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
				$dillonkearns$elm_markdown$Markdown$InlineParser$findHardBreakTokens(rawText),
				A2(
					$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
					$dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageCloseTokens(rawText),
					A2(
						$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
						$dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageOpenTokens(rawText),
						A2(
							$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
							$dillonkearns$elm_markdown$Markdown$InlineParser$findStrikethroughTokens(rawText),
							A2(
								$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
								$dillonkearns$elm_markdown$Markdown$InlineParser$findUnderlineEmphasisTokens(rawText),
								A2(
									$dillonkearns$elm_markdown$Markdown$InlineParser$mergeByIndex,
									$dillonkearns$elm_markdown$Markdown$InlineParser$findAsteriskEmphasisTokens(rawText),
									$dillonkearns$elm_markdown$Markdown$InlineParser$findCodeTokens(rawText)))))))));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$CodeType = {$: 2};
var $dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisType = function (a) {
	return {$: 7, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$HtmlType = function (a) {
	return {$: 6, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType = function (a) {
	return {$: 5, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$Inactive = 1;
var $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType = function (a) {
	return {$: 4, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$StrikethroughType = {$: 8};
var $dillonkearns$elm_markdown$Markdown$InlineParser$AutolinkType = function (a) {
	return {$: 3, a: a};
};
var $elm$regex$Regex$contains = _Regex_contains;
var $dillonkearns$elm_markdown$Markdown$InlineParser$decodeUrlRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('%(?:3B|2C|2F|3F|3A|40|26|3D|2B|24|23|25)'));
var $elm$url$Url$percentDecode = _Url_percentDecode;
var $elm$url$Url$percentEncode = _Url_percentEncode;
var $dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl = A2(
	$elm$core$Basics$composeR,
	$elm$url$Url$percentEncode,
	A2(
		$elm$regex$Regex$replace,
		$dillonkearns$elm_markdown$Markdown$InlineParser$decodeUrlRegex,
		function (match) {
			return A2(
				$elm$core$Maybe$withDefault,
				match.ah,
				$elm$url$Url$percentDecode(match.ah));
		}));
var $dillonkearns$elm_markdown$Markdown$InlineParser$urlRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^([A-Za-z][A-Za-z0-9.+\\-]{1,31}:[^<>\\x00-\\x20]*)$'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$autolinkToMatch = function (_v0) {
	var match = _v0;
	return A2($elm$regex$Regex$contains, $dillonkearns$elm_markdown$Markdown$InlineParser$urlRegex, match.j) ? $elm$core$Result$Ok(
		_Utils_update(
			match,
			{
				k: $dillonkearns$elm_markdown$Markdown$InlineParser$AutolinkType(
					_Utils_Tuple2(
						match.j,
						$dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl(match.j)))
			})) : $elm$core$Result$Err(match);
};
var $elm$regex$Regex$findAtMost = _Regex_findAtMost;
var $dillonkearns$elm_markdown$Markdown$Helpers$insideSquareBracketRegex = '[^\\[\\]\\\\]*(?:\\\\.[^\\[\\]\\\\]*)*';
var $dillonkearns$elm_markdown$Markdown$InlineParser$refLabelRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^\\[\\s*(' + ($dillonkearns$elm_markdown$Markdown$Helpers$insideSquareBracketRegex + ')\\s*\\]')));
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces = function (original) {
	return original;
};
var $dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel = A2($elm$core$Basics$composeR, $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces, $elm$core$String$toLower);
var $dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle = F2(
	function (rawUrl, maybeTitle) {
		return _Utils_Tuple2(
			$dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl(
				$dillonkearns$elm_markdown$Markdown$Helpers$formatStr(rawUrl)),
			A2($elm$core$Maybe$map, $dillonkearns$elm_markdown$Markdown$Helpers$formatStr, maybeTitle));
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$refRegexToMatch = F3(
	function (matchModel, references, maybeRegexMatch) {
		var refLabel = function (str) {
			return $elm$core$String$isEmpty(str) ? matchModel.j : str;
		}(
			A2(
				$elm$core$Maybe$withDefault,
				matchModel.j,
				A2(
					$elm$core$Maybe$withDefault,
					$elm$core$Maybe$Nothing,
					A2(
						$elm$core$Maybe$andThen,
						A2(
							$elm$core$Basics$composeR,
							function ($) {
								return $.a9;
							},
							$elm$core$List$head),
						maybeRegexMatch))));
		var _v0 = A2(
			$elm$core$Dict$get,
			$dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel(refLabel),
			references);
		if (_v0.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v1 = _v0.a;
			var rawUrl = _v1.a;
			var maybeTitle = _v1.b;
			var type_ = function () {
				var _v3 = matchModel.k;
				if (_v3.$ === 5) {
					return $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType(
						A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle, rawUrl, maybeTitle));
				} else {
					return $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType(
						A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle, rawUrl, maybeTitle));
				}
			}();
			var regexMatchLength = function () {
				if (!maybeRegexMatch.$) {
					var match = maybeRegexMatch.a.ah;
					return $elm$core$String$length(match);
				} else {
					return 0;
				}
			}();
			return $elm$core$Maybe$Just(
				_Utils_update(
					matchModel,
					{g: matchModel.g + regexMatchLength, k: type_}));
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineReferences = F3(
	function (remainText, _v0, references) {
		var tempMatch = _v0;
		var matches = A3($elm$regex$Regex$findAtMost, 1, $dillonkearns$elm_markdown$Markdown$InlineParser$refLabelRegex, remainText);
		return A3(
			$dillonkearns$elm_markdown$Markdown$InlineParser$refRegexToMatch,
			tempMatch,
			references,
			$elm$core$List$head(matches));
	});
var $dillonkearns$elm_markdown$Markdown$Helpers$lineEndChars = '\\f\\v\\r\\n';
var $dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars = ' \\t\\f\\v\\r\\n';
var $dillonkearns$elm_markdown$Markdown$InlineParser$hrefRegex = '(?:<([^<>' + ($dillonkearns$elm_markdown$Markdown$Helpers$lineEndChars + (']*)>|([^' + ($dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars + ('\\(\\)\\\\]*(?:\\\\.[^' + ($dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars + '\\(\\)\\\\]*)*))')))));
var $dillonkearns$elm_markdown$Markdown$Helpers$titleRegex = '(?:[' + ($dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars + (']+' + ('(?:\'([^\'\\\\]*(?:\\\\.[^\'\\\\]*)*)\'|' + ('\"([^\"\\\\]*(?:\\\\.[^\"\\\\]*)*)\"|' + '\\(([^\\)\\\\]*(?:\\\\.[^\\)\\\\]*)*)\\)))?'))));
var $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^\\(\\s*' + ($dillonkearns$elm_markdown$Markdown$InlineParser$hrefRegex + ($dillonkearns$elm_markdown$Markdown$Helpers$titleRegex + '\\s*\\)'))));
var $dillonkearns$elm_markdown$Markdown$Helpers$returnFirstJust = function (maybes) {
	var process = F2(
		function (a, maybeFound) {
			if (!maybeFound.$) {
				var found = maybeFound.a;
				return $elm$core$Maybe$Just(found);
			} else {
				return a;
			}
		});
	return A3($elm$core$List$foldl, process, $elm$core$Maybe$Nothing, maybes);
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegexToMatch = F2(
	function (matchModel, regexMatch) {
		var _v0 = regexMatch.a9;
		if ((((_v0.b && _v0.b.b) && _v0.b.b.b) && _v0.b.b.b.b) && _v0.b.b.b.b.b) {
			var maybeRawUrlAngleBrackets = _v0.a;
			var _v1 = _v0.b;
			var maybeRawUrlWithoutBrackets = _v1.a;
			var _v2 = _v1.b;
			var maybeTitleSingleQuotes = _v2.a;
			var _v3 = _v2.b;
			var maybeTitleDoubleQuotes = _v3.a;
			var _v4 = _v3.b;
			var maybeTitleParenthesis = _v4.a;
			var maybeTitle = $dillonkearns$elm_markdown$Markdown$Helpers$returnFirstJust(
				_List_fromArray(
					[maybeTitleSingleQuotes, maybeTitleDoubleQuotes, maybeTitleParenthesis]));
			var toMatch = function (rawUrl) {
				return _Utils_update(
					matchModel,
					{
						g: matchModel.g + $elm$core$String$length(regexMatch.ah),
						k: function () {
							var _v5 = matchModel.k;
							if (_v5.$ === 5) {
								return $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType;
							} else {
								return $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType;
							}
						}()(
							A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle, rawUrl, maybeTitle))
					});
			};
			var maybeRawUrl = $dillonkearns$elm_markdown$Markdown$Helpers$returnFirstJust(
				_List_fromArray(
					[maybeRawUrlAngleBrackets, maybeRawUrlWithoutBrackets]));
			return $elm$core$Maybe$Just(
				toMatch(
					A2($elm$core$Maybe$withDefault, '', maybeRawUrl)));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType = F3(
	function (remainText, _v0, refs) {
		var tempMatch = _v0;
		var _v1 = A3($elm$regex$Regex$findAtMost, 1, $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegex, remainText);
		if (_v1.b) {
			var first = _v1.a;
			var _v2 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegexToMatch, tempMatch, first);
			if (!_v2.$) {
				var match = _v2.a;
				return $elm$core$Maybe$Just(match);
			} else {
				return A3($dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineReferences, remainText, tempMatch, refs);
			}
		} else {
			return A3($dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineReferences, remainText, tempMatch, refs);
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping = F2(
	function (_v0, remainMatches) {
		var match = _v0;
		var overlappingMatches = $elm$core$List$filter(
			function (_v1) {
				var testMatch = _v1;
				return (_Utils_cmp(match.g, testMatch.i) > 0) && (_Utils_cmp(match.g, testMatch.g) < 0);
			});
		return ($elm$core$List$isEmpty(remainMatches) || $elm$core$List$isEmpty(
			overlappingMatches(remainMatches))) ? $elm$core$Maybe$Just(
			A2($elm$core$List$cons, match, remainMatches)) : $elm$core$Maybe$Nothing;
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$emailRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^([a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~\\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?)*)$'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$emailAutolinkTypeToMatch = function (_v0) {
	var match = _v0;
	return A2($elm$regex$Regex$contains, $dillonkearns$elm_markdown$Markdown$InlineParser$emailRegex, match.j) ? $elm$core$Result$Ok(
		_Utils_update(
			match,
			{
				k: $dillonkearns$elm_markdown$Markdown$InlineParser$AutolinkType(
					_Utils_Tuple2(
						match.j,
						'mailto:' + $dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl(match.j)))
			})) : $elm$core$Result$Err(match);
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findTokenHelp = F3(
	function (innerTokens, isToken, tokens) {
		findTokenHelp:
		while (true) {
			if (!tokens.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var nextToken = tokens.a;
				var remainingTokens = tokens.b;
				if (isToken(nextToken)) {
					return $elm$core$Maybe$Just(
						_Utils_Tuple3(
							nextToken,
							$elm$core$List$reverse(innerTokens),
							remainingTokens));
				} else {
					var $temp$innerTokens = A2($elm$core$List$cons, nextToken, innerTokens),
						$temp$isToken = isToken,
						$temp$tokens = remainingTokens;
					innerTokens = $temp$innerTokens;
					isToken = $temp$isToken;
					tokens = $temp$tokens;
					continue findTokenHelp;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$findToken = F2(
	function (isToken, tokens) {
		return A3($dillonkearns$elm_markdown$Markdown$InlineParser$findTokenHelp, _List_Nil, isToken, tokens);
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$HtmlToken = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$NotOpening = 1;
var $elm$parser$Parser$Advanced$getOffset = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.d, s);
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$htmlToToken = F2(
	function (rawText, _v0) {
		var match = _v0;
		var consumedCharacters = A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						F3(
							function (startOffset, htmlTag, endOffset) {
								return {bv: htmlTag, aW: endOffset - startOffset};
							})),
					$elm$parser$Parser$Advanced$getOffset),
				$dillonkearns$elm_markdown$HtmlParser$html),
			$elm$parser$Parser$Advanced$getOffset);
		var parsed = A2(
			$elm$parser$Parser$Advanced$run,
			consumedCharacters,
			A2($elm$core$String$dropLeft, match.i, rawText));
		if (!parsed.$) {
			var htmlTag = parsed.a.bv;
			var length = parsed.a.aW;
			var htmlToken = A2($dillonkearns$elm_markdown$Markdown$InlineParser$HtmlToken, 1, htmlTag);
			return $elm$core$Maybe$Just(
				{c: match.i, aW: length, e: htmlToken});
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Helpers$ifError = F2(
	function (_function, result) {
		if (!result.$) {
			return result;
		} else {
			var err = result.a;
			return _function(err);
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isCloseToken = F2(
	function (htmlModel, token) {
		return false;
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isCodeTokenPair = F2(
	function (closeToken, openToken) {
		var _v0 = openToken.e;
		if (!_v0.$) {
			if (!_v0.a) {
				var _v1 = _v0.a;
				return _Utils_eq(openToken.aW - 1, closeToken.aW);
			} else {
				var _v2 = _v0.a;
				return _Utils_eq(openToken.aW, closeToken.aW);
			}
		} else {
			return false;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isLinkTypeOrImageOpenToken = function (token) {
	var _v0 = token.e;
	switch (_v0.$) {
		case 1:
			return true;
		case 2:
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken = F2(
	function (closeToken, openToken) {
		var _v0 = openToken.e;
		if (_v0.$ === 7) {
			var openChar = _v0.a;
			var open = _v0.b;
			var _v1 = closeToken.e;
			if (_v1.$ === 7) {
				var closeChar = _v1.a;
				var close = _v1.b;
				return _Utils_eq(openChar, closeChar) ? ((_Utils_eq(open.aE, open.aG) || _Utils_eq(close.aE, close.aG)) ? ((!(!A2($elm$core$Basics$modBy, 3, closeToken.aW + openToken.aW))) || ((!A2($elm$core$Basics$modBy, 3, closeToken.aW)) && (!A2($elm$core$Basics$modBy, 3, openToken.aW)))) : true) : false;
			} else {
				return false;
			}
		} else {
			return false;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isStrikethroughTokenPair = F2(
	function (closeToken, openToken) {
		var _v0 = function () {
			var _v1 = openToken.e;
			if (_v1.$ === 10) {
				if (!_v1.a) {
					var _v2 = _v1.a;
					return _Utils_Tuple2(true, openToken.aW - 1);
				} else {
					var _v3 = _v1.a;
					return _Utils_Tuple2(true, openToken.aW);
				}
			} else {
				return _Utils_Tuple2(false, 0);
			}
		}();
		var openTokenIsStrikethrough = _v0.a;
		var openTokenLength = _v0.b;
		var _v4 = function () {
			var _v5 = closeToken.e;
			if (_v5.$ === 10) {
				if (!_v5.a) {
					var _v6 = _v5.a;
					return _Utils_Tuple2(true, closeToken.aW - 1);
				} else {
					var _v7 = _v5.a;
					return _Utils_Tuple2(true, closeToken.aW);
				}
			} else {
				return _Utils_Tuple2(false, 0);
			}
		}();
		var closeTokenIsStrikethrough = _v4.a;
		var closeTokenLength = _v4.b;
		return closeTokenIsStrikethrough && (openTokenIsStrikethrough && _Utils_eq(closeTokenLength, openTokenLength));
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakType = {$: 1};
var $dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch = F2(
	function (token, type_) {
		return {g: token.c + token.aW, p: _List_Nil, i: token.c, j: '', u: 0, r: 0, k: type_};
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$lineBreakTTM = F5(
	function (remaining, tokens, matches, refs, rawText) {
		lineBreakTTM:
		while (true) {
			if (!remaining.b) {
				return matches;
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v1 = token.e;
				if (_v1.$ === 9) {
					var $temp$remaining = tokensTail,
						$temp$tokens = tokens,
						$temp$matches = A2(
						$elm$core$List$cons,
						A2($dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch, token, $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakType),
						matches),
						$temp$refs = refs,
						$temp$rawText = rawText;
					remaining = $temp$remaining;
					tokens = $temp$tokens;
					matches = $temp$matches;
					refs = $temp$refs;
					rawText = $temp$rawText;
					continue lineBreakTTM;
				} else {
					var $temp$remaining = tokensTail,
						$temp$tokens = A2($elm$core$List$cons, token, tokens),
						$temp$matches = matches,
						$temp$refs = refs,
						$temp$rawText = rawText;
					remaining = $temp$remaining;
					tokens = $temp$tokens;
					matches = $temp$matches;
					refs = $temp$refs;
					rawText = $temp$rawText;
					continue lineBreakTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens = F2(
	function (_v0, tokensTail) {
		var match = _v0;
		return A2(
			$elm$core$List$filter,
			function (token) {
				return _Utils_cmp(token.c, match.g) > -1;
			},
			tokensTail);
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketsToMatch = F6(
	function (closeToken, escaped, matches, references, rawText, _v46) {
		var openToken = _v46.a;
		var remainTokens = _v46.c;
		var result = A2(
			$dillonkearns$elm_markdown$Markdown$Helpers$ifError,
			$dillonkearns$elm_markdown$Markdown$InlineParser$emailAutolinkTypeToMatch,
			$dillonkearns$elm_markdown$Markdown$InlineParser$autolinkToMatch(
				A7(
					$dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch,
					references,
					rawText,
					function (s) {
						return s;
					},
					$dillonkearns$elm_markdown$Markdown$InlineParser$CodeType,
					openToken,
					closeToken,
					_List_Nil)));
		if (result.$ === 1) {
			var tempMatch = result.a;
			if (escaped === 1) {
				var _v49 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$htmlToToken, rawText, tempMatch);
				if (!_v49.$) {
					var newToken = _v49.a;
					return $elm$core$Maybe$Just(
						_Utils_Tuple2(
							A2($elm$core$List$cons, newToken, remainTokens),
							matches));
				} else {
					return $elm$core$Maybe$Nothing;
				}
			} else {
				return $elm$core$Maybe$Nothing;
			}
		} else {
			var newMatch = result.a;
			return $elm$core$Maybe$Just(
				_Utils_Tuple2(
					remainTokens,
					A2($elm$core$List$cons, newMatch, matches)));
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM = F5(
	function (remaining, tokens, matches, references, rawText) {
		codeAutolinkTypeHtmlTagTTM:
		while (true) {
			if (!remaining.b) {
				return A5(
					$dillonkearns$elm_markdown$Markdown$InlineParser$htmlElementTTM,
					$elm$core$List$reverse(tokens),
					_List_Nil,
					matches,
					references,
					rawText);
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v38 = token.e;
				switch (_v38.$) {
					case 0:
						var isEscaped = _v38.a;
						var _v39 = A2(
							$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
							$dillonkearns$elm_markdown$Markdown$InlineParser$isCodeTokenPair(token),
							tokens);
						if (!_v39.$) {
							var code = _v39.a;
							var _v40 = A5($dillonkearns$elm_markdown$Markdown$InlineParser$codeToMatch, token, matches, references, rawText, code);
							var newTokens = _v40.a;
							var newMatches = _v40.b;
							var $temp$remaining = tokensTail,
								$temp$tokens = newTokens,
								$temp$matches = newMatches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue codeAutolinkTypeHtmlTagTTM;
						} else {
							var $temp$remaining = tokensTail,
								$temp$tokens = A2($elm$core$List$cons, token, tokens),
								$temp$matches = matches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue codeAutolinkTypeHtmlTagTTM;
						}
					case 5:
						var isEscaped = _v38.a;
						var isAngleBracketOpen = function (_v45) {
							var meaning = _v45.e;
							if (meaning.$ === 4) {
								return true;
							} else {
								return false;
							}
						};
						var _v41 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$findToken, isAngleBracketOpen, tokens);
						if (!_v41.$) {
							var found = _v41.a;
							var _v42 = A6($dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketsToMatch, token, isEscaped, matches, references, rawText, found);
							if (!_v42.$) {
								var _v43 = _v42.a;
								var newTokens = _v43.a;
								var newMatches = _v43.b;
								var $temp$remaining = tokensTail,
									$temp$tokens = A2(
									$elm$core$List$filter,
									A2($elm$core$Basics$composeL, $elm$core$Basics$not, isAngleBracketOpen),
									newTokens),
									$temp$matches = newMatches,
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue codeAutolinkTypeHtmlTagTTM;
							} else {
								var $temp$remaining = tokensTail,
									$temp$tokens = A2(
									$elm$core$List$filter,
									A2($elm$core$Basics$composeL, $elm$core$Basics$not, isAngleBracketOpen),
									tokens),
									$temp$matches = matches,
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue codeAutolinkTypeHtmlTagTTM;
							}
						} else {
							var $temp$remaining = tokensTail,
								$temp$tokens = A2(
								$elm$core$List$filter,
								A2($elm$core$Basics$composeL, $elm$core$Basics$not, isAngleBracketOpen),
								tokens),
								$temp$matches = matches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue codeAutolinkTypeHtmlTagTTM;
						}
					default:
						var $temp$remaining = tokensTail,
							$temp$tokens = A2($elm$core$List$cons, token, tokens),
							$temp$matches = matches,
							$temp$references = references,
							$temp$rawText = rawText;
						remaining = $temp$remaining;
						tokens = $temp$tokens;
						matches = $temp$matches;
						references = $temp$references;
						rawText = $temp$rawText;
						continue codeAutolinkTypeHtmlTagTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$codeToMatch = F5(
	function (closeToken, matches, references, rawText, _v34) {
		var openToken = _v34.a;
		var remainTokens = _v34.c;
		var updatedOpenToken = function () {
			var _v35 = openToken.e;
			if ((!_v35.$) && (!_v35.a)) {
				var _v36 = _v35.a;
				return _Utils_update(
					openToken,
					{c: openToken.c + 1, aW: openToken.aW - 1});
			} else {
				return openToken;
			}
		}();
		var match = A7($dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch, references, rawText, $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces, $dillonkearns$elm_markdown$Markdown$InlineParser$CodeType, updatedOpenToken, closeToken, _List_Nil);
		return _Utils_Tuple2(
			remainTokens,
			A2($elm$core$List$cons, match, matches));
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisTTM = F5(
	function (remaining, tokens, matches, references, rawText) {
		emphasisTTM:
		while (true) {
			if (!remaining.b) {
				return A5(
					$dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughTTM,
					$elm$core$List$reverse(tokens),
					_List_Nil,
					matches,
					references,
					rawText);
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v29 = token.e;
				if (_v29.$ === 7) {
					var _char = _v29.a;
					var leftFringeRank = _v29.b.aE;
					var rightFringeRank = _v29.b.aG;
					if (_Utils_eq(leftFringeRank, rightFringeRank)) {
						if ((!(!rightFringeRank)) && ((_char !== '_') || (rightFringeRank === 1))) {
							var _v30 = A2(
								$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
								$dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken(token),
								tokens);
							if (!_v30.$) {
								var found = _v30.a;
								var _v31 = A5($dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch, references, rawText, token, tokensTail, found);
								var newRemaining = _v31.a;
								var match = _v31.b;
								var newTokens = _v31.c;
								var $temp$remaining = newRemaining,
									$temp$tokens = newTokens,
									$temp$matches = A2($elm$core$List$cons, match, matches),
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue emphasisTTM;
							} else {
								var $temp$remaining = tokensTail,
									$temp$tokens = A2($elm$core$List$cons, token, tokens),
									$temp$matches = matches,
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue emphasisTTM;
							}
						} else {
							var $temp$remaining = tokensTail,
								$temp$tokens = tokens,
								$temp$matches = matches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue emphasisTTM;
						}
					} else {
						if (_Utils_cmp(leftFringeRank, rightFringeRank) < 0) {
							var $temp$remaining = tokensTail,
								$temp$tokens = A2($elm$core$List$cons, token, tokens),
								$temp$matches = matches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue emphasisTTM;
						} else {
							var _v32 = A2(
								$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
								$dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken(token),
								tokens);
							if (!_v32.$) {
								var found = _v32.a;
								var _v33 = A5($dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch, references, rawText, token, tokensTail, found);
								var newRemaining = _v33.a;
								var match = _v33.b;
								var newTokens = _v33.c;
								var $temp$remaining = newRemaining,
									$temp$tokens = newTokens,
									$temp$matches = A2($elm$core$List$cons, match, matches),
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue emphasisTTM;
							} else {
								var $temp$remaining = tokensTail,
									$temp$tokens = tokens,
									$temp$matches = matches,
									$temp$references = references,
									$temp$rawText = rawText;
								remaining = $temp$remaining;
								tokens = $temp$tokens;
								matches = $temp$matches;
								references = $temp$references;
								rawText = $temp$rawText;
								continue emphasisTTM;
							}
						}
					}
				} else {
					var $temp$remaining = tokensTail,
						$temp$tokens = A2($elm$core$List$cons, token, tokens),
						$temp$matches = matches,
						$temp$references = references,
						$temp$rawText = rawText;
					remaining = $temp$remaining;
					tokens = $temp$tokens;
					matches = $temp$matches;
					references = $temp$references;
					rawText = $temp$rawText;
					continue emphasisTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch = F5(
	function (references, rawText, closeToken, tokensTail, _v27) {
		var openToken = _v27.a;
		var innerTokens = _v27.b;
		var remainTokens = _v27.c;
		var remainLength = openToken.aW - closeToken.aW;
		var updt = (!remainLength) ? {aA: closeToken, ai: openToken, aF: remainTokens, aJ: tokensTail} : ((remainLength > 0) ? {
			aA: closeToken,
			ai: _Utils_update(
				openToken,
				{c: openToken.c + remainLength, aW: closeToken.aW}),
			aF: A2(
				$elm$core$List$cons,
				_Utils_update(
					openToken,
					{aW: remainLength}),
				remainTokens),
			aJ: tokensTail
		} : {
			aA: _Utils_update(
				closeToken,
				{aW: openToken.aW}),
			ai: openToken,
			aF: remainTokens,
			aJ: A2(
				$elm$core$List$cons,
				_Utils_update(
					closeToken,
					{c: closeToken.c + openToken.aW, aW: -remainLength}),
				tokensTail)
		});
		var match = A7(
			$dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch,
			references,
			rawText,
			function (s) {
				return s;
			},
			$dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisType(updt.ai.aW),
			updt.ai,
			updt.aA,
			$elm$core$List$reverse(innerTokens));
		return _Utils_Tuple3(updt.aJ, match, updt.aF);
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$htmlElementTTM = F5(
	function (remaining, tokens, matches, references, rawText) {
		htmlElementTTM:
		while (true) {
			if (!remaining.b) {
				return A5(
					$dillonkearns$elm_markdown$Markdown$InlineParser$linkImageTypeTTM,
					$elm$core$List$reverse(tokens),
					_List_Nil,
					matches,
					references,
					rawText);
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v23 = token.e;
				if (_v23.$ === 6) {
					var isOpen = _v23.a;
					var htmlModel = _v23.b;
					if (isOpen === 1) {
						var $temp$remaining = tokensTail,
							$temp$tokens = tokens,
							$temp$matches = A2(
							$elm$core$List$cons,
							A2(
								$dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch,
								token,
								$dillonkearns$elm_markdown$Markdown$InlineParser$HtmlType(htmlModel)),
							matches),
							$temp$references = references,
							$temp$rawText = rawText;
						remaining = $temp$remaining;
						tokens = $temp$tokens;
						matches = $temp$matches;
						references = $temp$references;
						rawText = $temp$rawText;
						continue htmlElementTTM;
					} else {
						var _v25 = A2(
							$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
							$dillonkearns$elm_markdown$Markdown$InlineParser$isCloseToken(htmlModel),
							tokensTail);
						if (_v25.$ === 1) {
							var $temp$remaining = tokensTail,
								$temp$tokens = tokens,
								$temp$matches = A2(
								$elm$core$List$cons,
								A2(
									$dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch,
									token,
									$dillonkearns$elm_markdown$Markdown$InlineParser$HtmlType(htmlModel)),
								matches),
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue htmlElementTTM;
						} else {
							var _v26 = _v25.a;
							var closeToken = _v26.a;
							var innerTokens = _v26.b;
							var newTail = _v26.c;
							var newMatch = A7(
								$dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch,
								references,
								rawText,
								function (s) {
									return s;
								},
								$dillonkearns$elm_markdown$Markdown$InlineParser$HtmlType(htmlModel),
								token,
								closeToken,
								innerTokens);
							var $temp$remaining = newTail,
								$temp$tokens = tokens,
								$temp$matches = A2($elm$core$List$cons, newMatch, matches),
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue htmlElementTTM;
						}
					}
				} else {
					var $temp$remaining = tokensTail,
						$temp$tokens = A2($elm$core$List$cons, token, tokens),
						$temp$matches = matches,
						$temp$references = references,
						$temp$rawText = rawText;
					remaining = $temp$remaining;
					tokens = $temp$tokens;
					matches = $temp$matches;
					references = $temp$references;
					rawText = $temp$rawText;
					continue htmlElementTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageTypeTTM = F5(
	function (remaining, tokens, matches, references, rawText) {
		linkImageTypeTTM:
		while (true) {
			if (!remaining.b) {
				return A5(
					$dillonkearns$elm_markdown$Markdown$InlineParser$emphasisTTM,
					$elm$core$List$reverse(tokens),
					_List_Nil,
					matches,
					references,
					rawText);
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v18 = token.e;
				if (_v18.$ === 3) {
					var _v19 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$findToken, $dillonkearns$elm_markdown$Markdown$InlineParser$isLinkTypeOrImageOpenToken, tokens);
					if (!_v19.$) {
						var found = _v19.a;
						var _v20 = A6($dillonkearns$elm_markdown$Markdown$InlineParser$linkOrImageTypeToMatch, token, tokensTail, matches, references, rawText, found);
						if (!_v20.$) {
							var _v21 = _v20.a;
							var x = _v21.a;
							var newMatches = _v21.b;
							var newTokens = _v21.c;
							var $temp$remaining = x,
								$temp$tokens = newTokens,
								$temp$matches = newMatches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue linkImageTypeTTM;
						} else {
							var $temp$remaining = tokensTail,
								$temp$tokens = tokens,
								$temp$matches = matches,
								$temp$references = references,
								$temp$rawText = rawText;
							remaining = $temp$remaining;
							tokens = $temp$tokens;
							matches = $temp$matches;
							references = $temp$references;
							rawText = $temp$rawText;
							continue linkImageTypeTTM;
						}
					} else {
						var $temp$remaining = tokensTail,
							$temp$tokens = tokens,
							$temp$matches = matches,
							$temp$references = references,
							$temp$rawText = rawText;
						remaining = $temp$remaining;
						tokens = $temp$tokens;
						matches = $temp$matches;
						references = $temp$references;
						rawText = $temp$rawText;
						continue linkImageTypeTTM;
					}
				} else {
					var $temp$remaining = tokensTail,
						$temp$tokens = A2($elm$core$List$cons, token, tokens),
						$temp$matches = matches,
						$temp$references = references,
						$temp$rawText = rawText;
					remaining = $temp$remaining;
					tokens = $temp$tokens;
					matches = $temp$matches;
					references = $temp$references;
					rawText = $temp$rawText;
					continue linkImageTypeTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$linkOrImageTypeToMatch = F6(
	function (closeToken, tokensTail, oldMatches, references, rawText, _v8) {
		var openToken = _v8.a;
		var innerTokens = _v8.b;
		var remainTokens = _v8.c;
		var removeOpenToken = _Utils_Tuple3(
			tokensTail,
			oldMatches,
			_Utils_ap(innerTokens, remainTokens));
		var remainText = A2($elm$core$String$dropLeft, closeToken.c + 1, rawText);
		var inactivateLinkOpenToken = function (token) {
			var _v16 = token.e;
			if (_v16.$ === 1) {
				return _Utils_update(
					token,
					{
						e: $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken(1)
					});
			} else {
				return token;
			}
		};
		var findTempMatch = function (isLinkType) {
			return A7(
				$dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch,
				references,
				rawText,
				function (s) {
					return s;
				},
				isLinkType ? $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType(
					_Utils_Tuple2('', $elm$core$Maybe$Nothing)) : $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType(
					_Utils_Tuple2('', $elm$core$Maybe$Nothing)),
				openToken,
				closeToken,
				$elm$core$List$reverse(innerTokens));
		};
		var _v9 = openToken.e;
		switch (_v9.$) {
			case 2:
				var tempMatch = findTempMatch(false);
				var _v10 = A3($dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType, remainText, tempMatch, references);
				if (_v10.$ === 1) {
					return $elm$core$Maybe$Just(removeOpenToken);
				} else {
					var match = _v10.a;
					var _v11 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping, match, oldMatches);
					if (!_v11.$) {
						var matches = _v11.a;
						return $elm$core$Maybe$Just(
							_Utils_Tuple3(
								A2($dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens, match, tokensTail),
								matches,
								remainTokens));
					} else {
						return $elm$core$Maybe$Just(removeOpenToken);
					}
				}
			case 1:
				if (!_v9.a) {
					var _v12 = _v9.a;
					var tempMatch = findTempMatch(true);
					var _v13 = A3($dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType, remainText, tempMatch, references);
					if (_v13.$ === 1) {
						return $elm$core$Maybe$Just(removeOpenToken);
					} else {
						var match = _v13.a;
						var _v14 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping, match, oldMatches);
						if (!_v14.$) {
							var matches = _v14.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple3(
									A2($dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens, match, tokensTail),
									matches,
									A2($elm$core$List$map, inactivateLinkOpenToken, remainTokens)));
						} else {
							return $elm$core$Maybe$Just(removeOpenToken);
						}
					}
				} else {
					var _v15 = _v9.a;
					return $elm$core$Maybe$Just(removeOpenToken);
				}
			default:
				return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughTTM = F5(
	function (remaining, tokens, matches, references, rawText) {
		strikethroughTTM:
		while (true) {
			if (!remaining.b) {
				return A5(
					$dillonkearns$elm_markdown$Markdown$InlineParser$lineBreakTTM,
					$elm$core$List$reverse(tokens),
					_List_Nil,
					matches,
					references,
					rawText);
			} else {
				var token = remaining.a;
				var tokensTail = remaining.b;
				var _v5 = token.e;
				if (_v5.$ === 10) {
					var isEscaped = _v5.a;
					var _v6 = A2(
						$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
						$dillonkearns$elm_markdown$Markdown$InlineParser$isStrikethroughTokenPair(token),
						tokens);
					if (!_v6.$) {
						var content = _v6.a;
						var _v7 = A5($dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughToMatch, token, matches, references, rawText, content);
						var newTokens = _v7.a;
						var newMatches = _v7.b;
						var $temp$remaining = tokensTail,
							$temp$tokens = newTokens,
							$temp$matches = newMatches,
							$temp$references = references,
							$temp$rawText = rawText;
						remaining = $temp$remaining;
						tokens = $temp$tokens;
						matches = $temp$matches;
						references = $temp$references;
						rawText = $temp$rawText;
						continue strikethroughTTM;
					} else {
						var $temp$remaining = tokensTail,
							$temp$tokens = A2($elm$core$List$cons, token, tokens),
							$temp$matches = matches,
							$temp$references = references,
							$temp$rawText = rawText;
						remaining = $temp$remaining;
						tokens = $temp$tokens;
						matches = $temp$matches;
						references = $temp$references;
						rawText = $temp$rawText;
						continue strikethroughTTM;
					}
				} else {
					var $temp$remaining = tokensTail,
						$temp$tokens = A2($elm$core$List$cons, token, tokens),
						$temp$matches = matches,
						$temp$references = references,
						$temp$rawText = rawText;
					remaining = $temp$remaining;
					tokens = $temp$tokens;
					matches = $temp$matches;
					references = $temp$references;
					rawText = $temp$rawText;
					continue strikethroughTTM;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$strikethroughToMatch = F5(
	function (closeToken, matches, references, rawText, _v1) {
		var openToken = _v1.a;
		var remainTokens = _v1.c;
		var updatedOpenToken = function () {
			var _v2 = openToken.e;
			if ((_v2.$ === 10) && (!_v2.a)) {
				var _v3 = _v2.a;
				return _Utils_update(
					openToken,
					{c: openToken.c + 1, aW: openToken.aW - 1});
			} else {
				return openToken;
			}
		}();
		var match = A7($dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch, references, rawText, $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces, $dillonkearns$elm_markdown$Markdown$InlineParser$StrikethroughType, updatedOpenToken, closeToken, _List_Nil);
		return _Utils_Tuple2(
			remainTokens,
			A2($elm$core$List$cons, match, matches));
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch = F7(
	function (references, rawText, processText, type_, openToken, closeToken, innerTokens) {
		var textStart = openToken.c + openToken.aW;
		var textEnd = closeToken.c;
		var text = processText(
			A3($elm$core$String$slice, textStart, textEnd, rawText));
		var start = openToken.c;
		var end = closeToken.c + closeToken.aW;
		var match = {g: end, p: _List_Nil, i: start, j: text, u: textEnd, r: textStart, k: type_};
		var matches = A2(
			$elm$core$List$map,
			function (_v0) {
				var matchModel = _v0;
				return A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch, match, matchModel);
			},
			A4($dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches, innerTokens, _List_Nil, references, rawText));
		return {g: end, p: matches, i: start, j: text, u: textEnd, r: textStart, k: type_};
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches = F4(
	function (tokens, matches, references, rawText) {
		return A5($dillonkearns$elm_markdown$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM, tokens, _List_Nil, matches, references, rawText);
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$parse = F2(
	function (refs, rawText_) {
		var rawText = $elm$core$String$trim(rawText_);
		var tokens = $dillonkearns$elm_markdown$Markdown$InlineParser$tokenize(rawText);
		return $dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(
			A3(
				$dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches,
				rawText,
				_List_Nil,
				$dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatches(
					A4($dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches, tokens, _List_Nil, refs, rawText))));
	});
var $dillonkearns$elm_markdown$Markdown$Parser$thisIsDefinitelyNotAnHtmlTag = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$Advanced$token(
			A2(
				$elm$parser$Parser$Advanced$Token,
				' ',
				$elm$parser$Parser$Expecting(' '))),
			$elm$parser$Parser$Advanced$token(
			A2(
				$elm$parser$Parser$Advanced$Token,
				'>',
				$elm$parser$Parser$Expecting('>'))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$chompIf,
					$elm$core$Char$isAlpha,
					$elm$parser$Parser$Expecting('Alpha')),
				$elm$parser$Parser$Advanced$chompWhile(
					function (c) {
						return $elm$core$Char$isAlphaNum(c) || (c === '-');
					})),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							':',
							$elm$parser$Parser$Expecting(':'))),
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'@',
							$elm$parser$Parser$Expecting('@'))),
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'\\',
							$elm$parser$Parser$Expecting('\\'))),
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'+',
							$elm$parser$Parser$Expecting('+'))),
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'.',
							$elm$parser$Parser$Expecting('.')))
					])))
		]));
var $dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock = $elm$parser$Parser$Advanced$backtrackable(
	A2(
		$elm$parser$Parser$Advanced$mapChompedString,
		F2(
			function (rawLine, _v0) {
				return $dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(rawLine);
			}),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'<',
							$elm$parser$Parser$Expecting('<'))),
					$dillonkearns$elm_markdown$Markdown$Parser$thisIsDefinitelyNotAnHtmlTag),
				$dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
			$dillonkearns$elm_markdown$Helpers$lineEndOrEnd)));
var $dillonkearns$elm_markdown$Markdown$Table$TableHeader = $elm$core$Basics$identity;
var $dillonkearns$elm_markdown$Parser$Token$parseString = function (str) {
	return $elm$parser$Parser$Advanced$token(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$Expecting(str)));
};
var $dillonkearns$elm_markdown$Markdown$TableParser$parseCellHelper = function (_v0) {
	var curr = _v0.a;
	var acc = _v0.b;
	var _return = A2(
		$elm$core$Maybe$withDefault,
		$elm$parser$Parser$Advanced$Done(acc),
		A2(
			$elm$core$Maybe$map,
			function (cell) {
				return $elm$parser$Parser$Advanced$Done(
					A2($elm$core$List$cons, cell, acc));
			},
			curr));
	var finishCell = A2(
		$elm$core$Maybe$withDefault,
		$elm$parser$Parser$Advanced$Loop(
			_Utils_Tuple2($elm$core$Maybe$Nothing, acc)),
		A2(
			$elm$core$Maybe$map,
			function (cell) {
				return $elm$parser$Parser$Advanced$Loop(
					_Utils_Tuple2(
						$elm$core$Maybe$Nothing,
						A2($elm$core$List$cons, cell, acc)));
			},
			curr));
	var addToCurrent = function (c) {
		return _Utils_ap(
			A2($elm$core$Maybe$withDefault, '', curr),
			c);
	};
	var continueCell = function (c) {
		return $elm$parser$Parser$Advanced$Loop(
			_Utils_Tuple2(
				$elm$core$Maybe$Just(
					addToCurrent(c)),
				acc));
	};
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v1) {
					return _return;
				},
				$dillonkearns$elm_markdown$Parser$Token$parseString('|\n')),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v2) {
					return _return;
				},
				$dillonkearns$elm_markdown$Parser$Token$parseString('\n')),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v3) {
					return _return;
				},
				$elm$parser$Parser$Advanced$end(
					$elm$parser$Parser$Expecting('end'))),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$backtrackable(
					$elm$parser$Parser$Advanced$succeed(
						continueCell('|'))),
				$dillonkearns$elm_markdown$Parser$Token$parseString('\\\\|')),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$backtrackable(
					$elm$parser$Parser$Advanced$succeed(
						continueCell('\\'))),
				$dillonkearns$elm_markdown$Parser$Token$parseString('\\\\')),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$backtrackable(
					$elm$parser$Parser$Advanced$succeed(
						continueCell('|'))),
				$dillonkearns$elm_markdown$Parser$Token$parseString('\\|')),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$backtrackable(
					$elm$parser$Parser$Advanced$succeed(finishCell)),
				$dillonkearns$elm_markdown$Parser$Token$parseString('|')),
				A2(
				$elm$parser$Parser$Advanced$mapChompedString,
				F2(
					function (_char, _v4) {
						return continueCell(_char);
					}),
				A2(
					$elm$parser$Parser$Advanced$chompIf,
					$elm$core$Basics$always(true),
					$elm$parser$Parser$Problem('No character found')))
			]));
};
var $dillonkearns$elm_markdown$Markdown$TableParser$parseCells = A2(
	$elm$parser$Parser$Advanced$map,
	A2(
		$elm$core$List$foldl,
		F2(
			function (cell, acc) {
				return A2(
					$elm$core$List$cons,
					$elm$core$String$trim(cell),
					acc);
			}),
		_List_Nil),
	A2(
		$elm$parser$Parser$Advanced$loop,
		_Utils_Tuple2($elm$core$Maybe$Nothing, _List_Nil),
		$dillonkearns$elm_markdown$Markdown$TableParser$parseCellHelper));
var $dillonkearns$elm_markdown$Markdown$TableParser$rowParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$dillonkearns$elm_markdown$Parser$Token$parseString('|'),
					$elm$parser$Parser$Advanced$succeed(0)
				]))),
	$dillonkearns$elm_markdown$Markdown$TableParser$parseCells);
var $dillonkearns$elm_markdown$Markdown$TableParser$parseHeader = F2(
	function (_v0, headersRow) {
		var columnAlignments = _v0.b;
		var headersWithAlignment = function (headers) {
			return A3(
				$elm$core$List$map2,
				F2(
					function (headerCell, alignment) {
						return {ax: alignment, S: headerCell};
					}),
				headers,
				columnAlignments);
		};
		var combineHeaderAndDelimiter = function (headers) {
			return _Utils_eq(
				$elm$core$List$length(headers),
				$elm$core$List$length(columnAlignments)) ? $elm$core$Result$Ok(
				headersWithAlignment(headers)) : $elm$core$Result$Err(
				'Tables must have the same number of header columns (' + ($elm$core$String$fromInt(
					$elm$core$List$length(headers)) + (') as delimiter columns (' + ($elm$core$String$fromInt(
					$elm$core$List$length(columnAlignments)) + ')'))));
		};
		var _v1 = A2($elm$parser$Parser$Advanced$run, $dillonkearns$elm_markdown$Markdown$TableParser$rowParser, headersRow);
		if (!_v1.$) {
			var headers = _v1.a;
			return combineHeaderAndDelimiter(headers);
		} else {
			return $elm$core$Result$Err('Unable to parse previous line as a table header');
		}
	});
var $dillonkearns$elm_markdown$Markdown$CodeBlock$CodeBlock = F2(
	function (language, body) {
		return {bk: body, cq: language};
	});
var $dillonkearns$elm_markdown$Markdown$CodeBlock$infoString = function (fenceCharacter) {
	var toInfoString = F2(
		function (str, _v2) {
			var _v1 = $elm$core$String$trim(str);
			if (_v1 === '') {
				return $elm$core$Maybe$Nothing;
			} else {
				var trimmed = _v1;
				return $elm$core$Maybe$Just(trimmed);
			}
		});
	var _v0 = fenceCharacter.aD;
	if (!_v0) {
		return A2(
			$elm$parser$Parser$Advanced$mapChompedString,
			toInfoString,
			$elm$parser$Parser$Advanced$chompWhile(
				function (c) {
					return (c !== '`') && (!$dillonkearns$elm_markdown$Whitespace$isLineEnd(c));
				}));
	} else {
		return A2(
			$elm$parser$Parser$Advanced$mapChompedString,
			toInfoString,
			$elm$parser$Parser$Advanced$chompWhile(
				A2($elm$core$Basics$composeL, $elm$core$Basics$not, $dillonkearns$elm_markdown$Whitespace$isLineEnd)));
	}
};
var $dillonkearns$elm_markdown$Markdown$CodeBlock$Backtick = 0;
var $dillonkearns$elm_markdown$Parser$Token$backtick = A2(
	$elm$parser$Parser$Advanced$Token,
	'`',
	$elm$parser$Parser$Expecting('a \'`\''));
var $dillonkearns$elm_markdown$Markdown$CodeBlock$backtick = {ay: '`', aD: 0, aI: $dillonkearns$elm_markdown$Parser$Token$backtick};
var $dillonkearns$elm_markdown$Markdown$CodeBlock$colToIndentation = function (_int) {
	switch (_int) {
		case 1:
			return $elm$parser$Parser$Advanced$succeed(0);
		case 2:
			return $elm$parser$Parser$Advanced$succeed(1);
		case 3:
			return $elm$parser$Parser$Advanced$succeed(2);
		case 4:
			return $elm$parser$Parser$Advanced$succeed(3);
		default:
			return $elm$parser$Parser$Advanced$problem(
				$elm$parser$Parser$Expecting('Fenced code blocks should be indented no more than 3 spaces'));
	}
};
var $dillonkearns$elm_markdown$Markdown$CodeBlock$fenceOfAtLeast = F2(
	function (minLength, fenceCharacter) {
		var builtTokens = A3(
			$elm$core$List$foldl,
			F2(
				function (t, p) {
					return A2($elm$parser$Parser$Advanced$ignorer, p, t);
				}),
			$elm$parser$Parser$Advanced$succeed(0),
			A2(
				$elm$core$List$repeat,
				minLength,
				$elm$parser$Parser$Advanced$token(fenceCharacter.aI)));
		return A2(
			$elm$parser$Parser$Advanced$mapChompedString,
			F2(
				function (str, _v0) {
					return _Utils_Tuple2(
						fenceCharacter,
						$elm$core$String$length(str));
				}),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				builtTokens,
				$elm$parser$Parser$Advanced$chompWhile(
					$elm$core$Basics$eq(fenceCharacter.ay))));
	});
var $dillonkearns$elm_markdown$Markdown$CodeBlock$Tilde = 1;
var $dillonkearns$elm_markdown$Parser$Token$tilde = A2(
	$elm$parser$Parser$Advanced$Token,
	'~',
	$elm$parser$Parser$Expecting('a `~`'));
var $dillonkearns$elm_markdown$Markdown$CodeBlock$tilde = {ay: '~', aD: 1, aI: $dillonkearns$elm_markdown$Parser$Token$tilde};
var $dillonkearns$elm_markdown$Whitespace$upToThreeSpaces = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$dillonkearns$elm_markdown$Whitespace$space,
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							$dillonkearns$elm_markdown$Whitespace$space,
							$elm$parser$Parser$Advanced$succeed(0)
						]))),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$dillonkearns$elm_markdown$Whitespace$space,
						$elm$parser$Parser$Advanced$succeed(0)
					]))),
			$elm$parser$Parser$Advanced$succeed(0)
		]));
var $dillonkearns$elm_markdown$Markdown$CodeBlock$openingFence = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(
				F2(
					function (indent, _v0) {
						var character = _v0.a;
						var length = _v0.b;
						return {az: character, aU: indent, aW: length};
					})),
			$dillonkearns$elm_markdown$Whitespace$upToThreeSpaces),
		A2($elm$parser$Parser$Advanced$andThen, $dillonkearns$elm_markdown$Markdown$CodeBlock$colToIndentation, $elm$parser$Parser$Advanced$getCol)),
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2($dillonkearns$elm_markdown$Markdown$CodeBlock$fenceOfAtLeast, 3, $dillonkearns$elm_markdown$Markdown$CodeBlock$backtick),
				A2($dillonkearns$elm_markdown$Markdown$CodeBlock$fenceOfAtLeast, 3, $dillonkearns$elm_markdown$Markdown$CodeBlock$tilde)
			])));
var $dillonkearns$elm_markdown$Whitespace$isSpace = $elm$core$Basics$eq(' ');
var $dillonkearns$elm_markdown$Markdown$CodeBlock$closingFence = F2(
	function (minLength, fenceCharacter) {
		return A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(0),
						$dillonkearns$elm_markdown$Whitespace$upToThreeSpaces),
					A2($dillonkearns$elm_markdown$Markdown$CodeBlock$fenceOfAtLeast, minLength, fenceCharacter)),
				$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpace)),
			$dillonkearns$elm_markdown$Helpers$lineEndOrEnd);
	});
var $dillonkearns$elm_markdown$Markdown$CodeBlock$codeBlockLine = function (indented) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			A2($dillonkearns$elm_markdown$Parser$Extra$upTo, indented, $dillonkearns$elm_markdown$Whitespace$space)),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$getOffset, $dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
			$dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
};
var $elm$parser$Parser$Advanced$getSource = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.a5, s);
};
var $dillonkearns$elm_markdown$Markdown$CodeBlock$remainingBlockHelp = function (_v0) {
	var fence = _v0.a;
	var body = _v0.b;
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(
					$elm$parser$Parser$Advanced$Done(body)),
				$elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd)),
				A2(
				$elm$parser$Parser$Advanced$mapChompedString,
				F2(
					function (lineEnd, _v1) {
						return $elm$parser$Parser$Advanced$Loop(
							_Utils_Tuple2(
								fence,
								_Utils_ap(body, lineEnd)));
					}),
				$dillonkearns$elm_markdown$Whitespace$lineEnd),
				$elm$parser$Parser$Advanced$backtrackable(
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						$elm$parser$Parser$Advanced$Done(body)),
					A2($dillonkearns$elm_markdown$Markdown$CodeBlock$closingFence, fence.aW, fence.az))),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(
							F3(
								function (start, end, source) {
									return $elm$parser$Parser$Advanced$Loop(
										_Utils_Tuple2(
											fence,
											_Utils_ap(
												body,
												A3($elm$core$String$slice, start, end, source))));
								})),
						$dillonkearns$elm_markdown$Markdown$CodeBlock$codeBlockLine(fence.aU)),
					$elm$parser$Parser$Advanced$getOffset),
				$elm$parser$Parser$Advanced$getSource)
			]));
};
var $dillonkearns$elm_markdown$Markdown$CodeBlock$remainingBlock = function (fence) {
	return A2(
		$elm$parser$Parser$Advanced$loop,
		_Utils_Tuple2(fence, ''),
		$dillonkearns$elm_markdown$Markdown$CodeBlock$remainingBlockHelp);
};
var $dillonkearns$elm_markdown$Markdown$CodeBlock$parser = A2(
	$elm$parser$Parser$Advanced$andThen,
	function (fence) {
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$CodeBlock$CodeBlock),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$dillonkearns$elm_markdown$Markdown$CodeBlock$infoString(fence.az),
					$dillonkearns$elm_markdown$Helpers$lineEndOrEnd)),
			$dillonkearns$elm_markdown$Markdown$CodeBlock$remainingBlock(fence));
	},
	$dillonkearns$elm_markdown$Markdown$CodeBlock$openingFence);
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$String$endsWith = _String_endsWith;
var $dillonkearns$elm_markdown$Markdown$Heading$dropTrailingHashes = function (headingString) {
	return A2($elm$core$String$endsWith, '#', headingString) ? $dillonkearns$elm_markdown$Markdown$Heading$dropTrailingHashes(
		A2($elm$core$String$dropRight, 1, headingString)) : headingString;
};
var $elm$core$String$trimRight = _String_trimRight;
var $dillonkearns$elm_markdown$Markdown$Heading$dropClosingSequence = function (headingString) {
	var droppedTrailingHashesString = $dillonkearns$elm_markdown$Markdown$Heading$dropTrailingHashes(headingString);
	return (A2($elm$core$String$endsWith, ' ', droppedTrailingHashesString) || $elm$core$String$isEmpty(droppedTrailingHashesString)) ? $elm$core$String$trimRight(droppedTrailingHashesString) : headingString;
};
var $dillonkearns$elm_markdown$Parser$Token$hash = A2(
	$elm$parser$Parser$Advanced$Token,
	'#',
	$elm$parser$Parser$Expecting('a `#`'));
var $dillonkearns$elm_markdown$Markdown$Heading$isHash = function (c) {
	if ('#' === c) {
		return true;
	} else {
		return false;
	}
};
var $elm$parser$Parser$Advanced$spaces = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return (c === ' ') || ((c === '\n') || (c === '\r'));
	});
var $dillonkearns$elm_markdown$Markdown$Heading$parser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$Heading),
				A2(
					$elm$parser$Parser$Advanced$andThen,
					function (startingSpaces) {
						var startSpace = $elm$core$String$length(startingSpaces);
						return (startSpace >= 4) ? $elm$parser$Parser$Advanced$problem(
							$elm$parser$Parser$Expecting('heading with < 4 spaces in front')) : $elm$parser$Parser$Advanced$succeed(startSpace);
					},
					$elm$parser$Parser$Advanced$getChompedString($elm$parser$Parser$Advanced$spaces))),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$hash)),
		A2(
			$elm$parser$Parser$Advanced$andThen,
			function (additionalHashes) {
				var level = $elm$core$String$length(additionalHashes) + 1;
				return (level >= 7) ? $elm$parser$Parser$Advanced$problem(
					$elm$parser$Parser$Expecting('heading with < 7 #\'s')) : $elm$parser$Parser$Advanced$succeed(level);
			},
			$elm$parser$Parser$Advanced$getChompedString(
				$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Markdown$Heading$isHash)))),
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(''),
				$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$newline)),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[
								$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$space),
								$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$tab)
							]))),
				A2(
					$elm$parser$Parser$Advanced$mapChompedString,
					F2(
						function (headingText, _v0) {
							return $dillonkearns$elm_markdown$Markdown$Heading$dropClosingSequence(
								$elm$core$String$trim(headingText));
						}),
					$dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd))
			])));
var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
var $elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var $elm$parser$Parser$Advanced$chompUntil = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$findSubString, str, s.d, s.cJ, s.bn, s.a5);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A4($elm$parser$Parser$Advanced$fromInfo, newRow, newCol, expecting, s.f)) : A3(
			$elm$parser$Parser$Advanced$Good,
			_Utils_cmp(s.d, newOffset) < 0,
			0,
			{bn: newCol, f: s.f, h: s.h, d: newOffset, cJ: newRow, a5: s.a5});
	};
};
var $dillonkearns$elm_markdown$Parser$Token$greaterThan = A2(
	$elm$parser$Parser$Advanced$Token,
	'>',
	$elm$parser$Parser$Expecting('a `>`'));
var $elm$parser$Parser$Advanced$Located = F3(
	function (row, col, context) {
		return {bn: col, f: context, cJ: row};
	});
var $elm$parser$Parser$Advanced$changeContext = F2(
	function (newContext, s) {
		return {bn: s.bn, f: newContext, h: s.h, d: s.d, cJ: s.cJ, a5: s.a5};
	});
var $elm$parser$Parser$Advanced$inContext = F2(
	function (context, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(
				A2(
					$elm$parser$Parser$Advanced$changeContext,
					A2(
						$elm$core$List$cons,
						A3($elm$parser$Parser$Advanced$Located, s0.cJ, s0.bn, context),
						s0.f),
					s0));
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					a,
					A2($elm$parser$Parser$Advanced$changeContext, s0.f, s1));
			} else {
				var step = _v1;
				return step;
			}
		};
	});
var $dillonkearns$elm_markdown$Whitespace$isWhitespace = function (_char) {
	switch (_char) {
		case ' ':
			return true;
		case '\n':
			return true;
		case '\t':
			return true;
		case '\u000B':
			return true;
		case '\u000C':
			return true;
		case '\r':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Parser$Token$lessThan = A2(
	$elm$parser$Parser$Advanced$Token,
	'<',
	$elm$parser$Parser$Expecting('a `<`'));
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$destinationParser = A2(
	$elm$parser$Parser$Advanced$inContext,
	'link destination',
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$url$Url$percentEncode),
					$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$lessThan)),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$getChompedString(
						$elm$parser$Parser$Advanced$chompUntil($dillonkearns$elm_markdown$Parser$Token$greaterThan)),
					$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$greaterThan))),
				$elm$parser$Parser$Advanced$getChompedString(
				$dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore(
					A2($elm$core$Basics$composeL, $elm$core$Basics$not, $dillonkearns$elm_markdown$Whitespace$isWhitespace)))
			])));
var $dillonkearns$elm_markdown$Parser$Token$closingSquareBracket = A2(
	$elm$parser$Parser$Advanced$Token,
	']',
	$elm$parser$Parser$Expecting('a `]`'));
var $dillonkearns$elm_markdown$Parser$Token$openingSquareBracket = A2(
	$elm$parser$Parser$Advanced$Token,
	'[',
	$elm$parser$Parser$Expecting('a `[`'));
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$labelParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel),
		$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$openingSquareBracket)),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntil($dillonkearns$elm_markdown$Parser$Token$closingSquareBracket)),
		$elm$parser$Parser$Advanced$symbol(
			A2(
				$elm$parser$Parser$Advanced$Token,
				']:',
				$elm$parser$Parser$Expecting(']:')))));
var $dillonkearns$elm_markdown$Parser$Token$doubleQuote = A2(
	$elm$parser$Parser$Advanced$Token,
	'\"',
	$elm$parser$Parser$Expecting('a double quote'));
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$hasNoBlankLine = function (str) {
	return A2($elm$core$String$contains, '\n\n', str) ? $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Expecting('no blank line')) : $elm$parser$Parser$Advanced$succeed(str);
};
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$chompWhile(
		function (c) {
			return (!$dillonkearns$elm_markdown$Whitespace$isLineEnd(c)) && $dillonkearns$elm_markdown$Whitespace$isWhitespace(c);
		}),
	$dillonkearns$elm_markdown$Helpers$lineEndOrEnd);
var $dillonkearns$elm_markdown$Whitespace$requiredWhitespace = A2(
	$elm$parser$Parser$Advanced$ignorer,
	A2(
		$elm$parser$Parser$Advanced$chompIf,
		$dillonkearns$elm_markdown$Whitespace$isWhitespace,
		$elm$parser$Parser$Expecting('Required whitespace')),
	$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isWhitespace));
var $dillonkearns$elm_markdown$Parser$Token$singleQuote = A2(
	$elm$parser$Parser$Advanced$Token,
	'\'',
	$elm$parser$Parser$Expecting('a single quote'));
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$titleParser = function () {
	var inSingleQuotes = A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Just),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$singleQuote)),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$hasNoBlankLine,
					$elm$parser$Parser$Advanced$getChompedString(
						$elm$parser$Parser$Advanced$chompUntil($dillonkearns$elm_markdown$Parser$Token$singleQuote))),
				$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$singleQuote)),
			$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline));
	var inDoubleQuotes = A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Just),
			$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$doubleQuote)),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$hasNoBlankLine,
					$elm$parser$Parser$Advanced$getChompedString(
						$elm$parser$Parser$Advanced$chompUntil($dillonkearns$elm_markdown$Parser$Token$doubleQuote))),
				$elm$parser$Parser$Advanced$symbol($dillonkearns$elm_markdown$Parser$Token$doubleQuote)),
			$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline));
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'title',
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$Advanced$backtrackable(
					A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
							$dillonkearns$elm_markdown$Whitespace$requiredWhitespace),
						$elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									inDoubleQuotes,
									inSingleQuotes,
									$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing)
								])))),
					A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing),
					$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$onlyWhitespaceTillNewline)
				])));
}();
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$parser = A2(
	$elm$parser$Parser$Advanced$inContext,
	'link reference definition',
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						F3(
							function (label, destination, title) {
								return _Utils_Tuple2(
									label,
									{cb: destination, bW: title});
							})),
					$dillonkearns$elm_markdown$Whitespace$upToThreeSpaces),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$labelParser,
							$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab)),
						$elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									$dillonkearns$elm_markdown$Whitespace$lineEnd,
									$elm$parser$Parser$Advanced$succeed(0)
								]))),
					$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab))),
			$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$destinationParser),
		$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$titleParser));
var $dillonkearns$elm_markdown$ThematicBreak$ThematicBreak = 0;
var $dillonkearns$elm_markdown$ThematicBreak$whitespace = $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab);
var $dillonkearns$elm_markdown$ThematicBreak$withChar = function (tchar) {
	var token = $dillonkearns$elm_markdown$Parser$Token$parseString(
		$elm$core$String$fromChar(tchar));
	return A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed(0),
								token),
							$dillonkearns$elm_markdown$ThematicBreak$whitespace),
						token),
					$dillonkearns$elm_markdown$ThematicBreak$whitespace),
				token),
			$elm$parser$Parser$Advanced$chompWhile(
				function (c) {
					return _Utils_eq(c, tchar) || $dillonkearns$elm_markdown$Whitespace$isSpaceOrTab(c);
				})),
		$dillonkearns$elm_markdown$Helpers$lineEndOrEnd);
};
var $dillonkearns$elm_markdown$ThematicBreak$parseThematicBreak = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$dillonkearns$elm_markdown$ThematicBreak$withChar('-'),
			$dillonkearns$elm_markdown$ThematicBreak$withChar('*'),
			$dillonkearns$elm_markdown$ThematicBreak$withChar('_')
		]));
var $dillonkearns$elm_markdown$ThematicBreak$parser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$dillonkearns$elm_markdown$Whitespace$space),
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[
								$dillonkearns$elm_markdown$Whitespace$space,
								$elm$parser$Parser$Advanced$succeed(0)
							]))),
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							$dillonkearns$elm_markdown$Whitespace$space,
							$elm$parser$Parser$Advanced$succeed(0)
						]))),
			$dillonkearns$elm_markdown$ThematicBreak$parseThematicBreak),
			$dillonkearns$elm_markdown$ThematicBreak$parseThematicBreak
		]));
var $dillonkearns$elm_markdown$Markdown$RawBlock$LevelOne = 0;
var $dillonkearns$elm_markdown$Markdown$RawBlock$LevelTwo = 1;
var $dillonkearns$elm_markdown$Markdown$RawBlock$SetextLine = F2(
	function (a, b) {
		return {$: 13, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Parser$Token$equals = A2(
	$elm$parser$Parser$Advanced$Token,
	'=',
	$elm$parser$Parser$Expecting('a `=`'));
var $dillonkearns$elm_markdown$Parser$Token$minus = A2(
	$elm$parser$Parser$Advanced$Token,
	'-',
	$elm$parser$Parser$Expecting('a `-`'));
var $dillonkearns$elm_markdown$Markdown$Parser$setextLineParser = function () {
	var setextLevel = F3(
		function (level, levelToken, levelChar) {
			return A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(level),
					$elm$parser$Parser$Advanced$token(levelToken)),
				$elm$parser$Parser$Advanced$chompWhile(
					$elm$core$Basics$eq(levelChar)));
		});
	return A2(
		$elm$parser$Parser$Advanced$mapChompedString,
		F2(
			function (raw, level) {
				return A2($dillonkearns$elm_markdown$Markdown$RawBlock$SetextLine, level, raw);
			}),
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$dillonkearns$elm_markdown$Whitespace$upToThreeSpaces),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[
								A3(setextLevel, 0, $dillonkearns$elm_markdown$Parser$Token$equals, '='),
								A3(setextLevel, 1, $dillonkearns$elm_markdown$Parser$Token$minus, '-')
							])),
					$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab)),
				$dillonkearns$elm_markdown$Helpers$lineEndOrEnd)));
}();
var $dillonkearns$elm_markdown$Markdown$RawBlock$TableDelimiter = function (a) {
	return {$: 9, a: a};
};
var $dillonkearns$elm_markdown$Markdown$TableParser$chompSinglelineWhitespace = $elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab);
var $dillonkearns$elm_markdown$Parser$Extra$maybeChomp = function (condition) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$chompIf,
				condition,
				$elm$parser$Parser$Problem('Character not found')),
				$elm$parser$Parser$Advanced$succeed(0)
			]));
};
var $dillonkearns$elm_markdown$Markdown$TableParser$requirePipeIfNotFirst = function (columns) {
	return $elm$core$List$isEmpty(columns) ? $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$dillonkearns$elm_markdown$Parser$Token$parseString('|'),
				$elm$parser$Parser$Advanced$succeed(0)
			])) : $dillonkearns$elm_markdown$Parser$Token$parseString('|');
};
var $dillonkearns$elm_markdown$Markdown$TableParser$delimiterRowHelp = function (revDelimiterColumns) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$elm$parser$Parser$Advanced$backtrackable(
				A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(revDelimiterColumns);
					},
					$dillonkearns$elm_markdown$Parser$Token$parseString('|\n'))),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v1) {
					return $elm$parser$Parser$Advanced$Done(revDelimiterColumns);
				},
				$dillonkearns$elm_markdown$Parser$Token$parseString('\n')),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v2) {
					return $elm$parser$Parser$Advanced$Done(revDelimiterColumns);
				},
				$elm$parser$Parser$Advanced$end(
					$elm$parser$Parser$Expecting('end'))),
				$elm$parser$Parser$Advanced$backtrackable(
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							$elm$parser$Parser$Advanced$Done(revDelimiterColumns)),
						$dillonkearns$elm_markdown$Parser$Token$parseString('|')),
					$elm$parser$Parser$Advanced$end(
						$elm$parser$Parser$Expecting('end')))),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (column) {
								return $elm$parser$Parser$Advanced$Loop(
									A2($elm$core$List$cons, column, revDelimiterColumns));
							}),
						$dillonkearns$elm_markdown$Markdown$TableParser$requirePipeIfNotFirst(revDelimiterColumns)),
					$dillonkearns$elm_markdown$Markdown$TableParser$chompSinglelineWhitespace),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$getChompedString(
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed(0),
									$dillonkearns$elm_markdown$Parser$Extra$maybeChomp(
										function (c) {
											return c === ':';
										})),
								$dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore(
									function (c) {
										return c === '-';
									})),
							$dillonkearns$elm_markdown$Parser$Extra$maybeChomp(
								function (c) {
									return c === ':';
								}))),
					$dillonkearns$elm_markdown$Markdown$TableParser$chompSinglelineWhitespace))
			]));
};
var $dillonkearns$elm_markdown$Markdown$Block$AlignCenter = 2;
var $dillonkearns$elm_markdown$Markdown$Block$AlignLeft = 0;
var $dillonkearns$elm_markdown$Markdown$Block$AlignRight = 1;
var $dillonkearns$elm_markdown$Markdown$TableParser$delimiterToAlignment = function (cell) {
	var _v0 = _Utils_Tuple2(
		A2($elm$core$String$startsWith, ':', cell),
		A2($elm$core$String$endsWith, ':', cell));
	if (_v0.a) {
		if (_v0.b) {
			return $elm$core$Maybe$Just(2);
		} else {
			return $elm$core$Maybe$Just(0);
		}
	} else {
		if (_v0.b) {
			return $elm$core$Maybe$Just(1);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	}
};
var $dillonkearns$elm_markdown$Markdown$TableParser$delimiterRowParser = A2(
	$elm$parser$Parser$Advanced$andThen,
	function (delimiterRow) {
		var trimmed = delimiterRow.a.bZ;
		var headers = delimiterRow.b;
		return $elm$core$List$isEmpty(headers) ? $elm$parser$Parser$Advanced$problem(
			$elm$parser$Parser$Expecting('Must have at least one column in delimiter row.')) : ((($elm$core$List$length(headers) === 1) && (!(A2($elm$core$String$startsWith, '|', trimmed) && A2($elm$core$String$endsWith, '|', trimmed)))) ? $elm$parser$Parser$Advanced$problem(
			$elm$parser$Parser$Problem('Tables with a single column must have pipes at the start and end of the delimiter row to avoid ambiguity.')) : $elm$parser$Parser$Advanced$succeed(delimiterRow));
	},
	A2(
		$elm$parser$Parser$Advanced$mapChompedString,
		F2(
			function (delimiterText, revDelimiterColumns) {
				return A2(
					$dillonkearns$elm_markdown$Markdown$Table$TableDelimiterRow,
					{
						bK: delimiterText,
						bZ: $elm$core$String$trim(delimiterText)
					},
					A2(
						$elm$core$List$map,
						$dillonkearns$elm_markdown$Markdown$TableParser$delimiterToAlignment,
						$elm$core$List$reverse(revDelimiterColumns)));
			}),
		A2($elm$parser$Parser$Advanced$loop, _List_Nil, $dillonkearns$elm_markdown$Markdown$TableParser$delimiterRowHelp)));
var $dillonkearns$elm_markdown$Markdown$Parser$tableDelimiterInOpenParagraph = A2($elm$parser$Parser$Advanced$map, $dillonkearns$elm_markdown$Markdown$RawBlock$TableDelimiter, $dillonkearns$elm_markdown$Markdown$TableParser$delimiterRowParser);
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $dillonkearns$elm_markdown$Markdown$TableParser$standardizeRowLength = F2(
	function (expectedLength, row) {
		var rowLength = $elm$core$List$length(row);
		var _v0 = A2($elm$core$Basics$compare, expectedLength, rowLength);
		switch (_v0) {
			case 0:
				return A2($elm$core$List$take, expectedLength, row);
			case 1:
				return row;
			default:
				return _Utils_ap(
					row,
					A2($elm$core$List$repeat, expectedLength - rowLength, ''));
		}
	});
var $dillonkearns$elm_markdown$Markdown$TableParser$bodyRowParser = function (expectedRowLength) {
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		function (row) {
			return ($elm$core$List$isEmpty(row) || A2($elm$core$List$all, $elm$core$String$isEmpty, row)) ? $elm$parser$Parser$Advanced$problem(
				$elm$parser$Parser$Problem('A line must have at least one column')) : $elm$parser$Parser$Advanced$succeed(
				A2($dillonkearns$elm_markdown$Markdown$TableParser$standardizeRowLength, expectedRowLength, row));
		},
		$dillonkearns$elm_markdown$Markdown$TableParser$rowParser);
};
var $dillonkearns$elm_markdown$Markdown$Parser$tableRowIfTableStarted = function (_v0) {
	var headers = _v0.a;
	var body = _v0.b;
	return A2(
		$elm$parser$Parser$Advanced$map,
		function (row) {
			return $dillonkearns$elm_markdown$Markdown$RawBlock$Table(
				A2(
					$dillonkearns$elm_markdown$Markdown$Table$Table,
					headers,
					_Utils_ap(
						body,
						_List_fromArray(
							[row]))));
		},
		$dillonkearns$elm_markdown$Markdown$TableParser$bodyRowParser(
			$elm$core$List$length(headers)));
};
var $dillonkearns$elm_markdown$Markdown$Block$H1 = 0;
var $dillonkearns$elm_markdown$Markdown$Block$H2 = 1;
var $dillonkearns$elm_markdown$Markdown$Block$H3 = 2;
var $dillonkearns$elm_markdown$Markdown$Block$H4 = 3;
var $dillonkearns$elm_markdown$Markdown$Block$H5 = 4;
var $dillonkearns$elm_markdown$Markdown$Block$H6 = 5;
var $dillonkearns$elm_markdown$Markdown$Parser$toHeading = function (level) {
	switch (level) {
		case 1:
			return $elm$core$Result$Ok(0);
		case 2:
			return $elm$core$Result$Ok(1);
		case 3:
			return $elm$core$Result$Ok(2);
		case 4:
			return $elm$core$Result$Ok(3);
		case 5:
			return $elm$core$Result$Ok(4);
		case 6:
			return $elm$core$Result$Ok(5);
		default:
			return $elm$core$Result$Err(
				$elm$parser$Parser$Expecting(
					'A heading with 1 to 6 #\'s, but found ' + $elm$core$String$fromInt(level)));
	}
};
var $dillonkearns$elm_markdown$Markdown$ListItem$EmptyItem = {$: 2};
var $dillonkearns$elm_markdown$Markdown$ListItem$PlainItem = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$ListItem$TaskItem = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$UnorderedList$getIntendedCodeItem = F4(
	function (markerStartPos, listMarker, markerEndPos, _v0) {
		var bodyStartPos = _v0.a;
		var item = _v0.b;
		var spaceNum = bodyStartPos - markerEndPos;
		if (spaceNum <= 4) {
			return _Utils_Tuple3(listMarker, bodyStartPos - markerStartPos, item);
		} else {
			var intendedCodeItem = function () {
				switch (item.$) {
					case 0:
						var completion = item.a;
						var string = item.b;
						return A2(
							$dillonkearns$elm_markdown$Markdown$ListItem$TaskItem,
							completion,
							_Utils_ap(
								A2($elm$core$String$repeat, spaceNum - 1, ' '),
								string));
					case 1:
						var string = item.a;
						return $dillonkearns$elm_markdown$Markdown$ListItem$PlainItem(
							_Utils_ap(
								A2($elm$core$String$repeat, spaceNum - 1, ' '),
								string));
					default:
						return $dillonkearns$elm_markdown$Markdown$ListItem$EmptyItem;
				}
			}();
			return _Utils_Tuple3(listMarker, (markerEndPos - markerStartPos) + 1, intendedCodeItem);
		}
	});
var $dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListEmptyItemParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	$elm$parser$Parser$Advanced$succeed(
		function (bodyStartPos) {
			return _Utils_Tuple2(bodyStartPos, $dillonkearns$elm_markdown$Markdown$ListItem$EmptyItem);
		}),
	A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$getCol, $dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
var $dillonkearns$elm_markdown$Markdown$ListItem$Complete = 1;
var $dillonkearns$elm_markdown$Markdown$ListItem$Incomplete = 0;
var $dillonkearns$elm_markdown$Markdown$ListItem$taskItemParser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(1),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'[x] ',
					$elm$parser$Parser$ExpectingSymbol('[x] ')))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(1),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'[X] ',
					$elm$parser$Parser$ExpectingSymbol('[X] ')))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(0),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'[ ] ',
					$elm$parser$Parser$ExpectingSymbol('[ ] '))))
		]));
var $dillonkearns$elm_markdown$Markdown$ListItem$parser = A2(
	$elm$parser$Parser$Advanced$keeper,
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$ListItem$TaskItem),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$dillonkearns$elm_markdown$Markdown$ListItem$taskItemParser,
					$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab))),
				$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$ListItem$PlainItem)
			])),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
		$dillonkearns$elm_markdown$Helpers$lineEndOrEnd));
var $dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListItemBodyParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(
				F2(
					function (bodyStartPos, item) {
						return _Utils_Tuple2(bodyStartPos, item);
					})),
			$dillonkearns$elm_markdown$Parser$Extra$chompOneOrMore($dillonkearns$elm_markdown$Whitespace$isSpaceOrTab)),
		$elm$parser$Parser$Advanced$getCol),
	$dillonkearns$elm_markdown$Markdown$ListItem$parser);
var $dillonkearns$elm_markdown$Markdown$UnorderedList$Asterisk = 2;
var $dillonkearns$elm_markdown$Markdown$UnorderedList$Minus = 0;
var $dillonkearns$elm_markdown$Markdown$UnorderedList$Plus = 1;
var $dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListMarkerParser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(0),
				A2($dillonkearns$elm_markdown$Parser$Extra$upTo, 3, $dillonkearns$elm_markdown$Whitespace$space)),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'-',
					$elm$parser$Parser$ExpectingSymbol('-')))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(1),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'+',
					$elm$parser$Parser$ExpectingSymbol('+')))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(2),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'*',
					$elm$parser$Parser$ExpectingSymbol('*'))))
		]));
var $dillonkearns$elm_markdown$Markdown$UnorderedList$parser = function (previousWasBody) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$UnorderedList$getIntendedCodeItem),
					$elm$parser$Parser$Advanced$getCol),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListMarkerParser)),
			$elm$parser$Parser$Advanced$getCol),
		previousWasBody ? $dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListItemBodyParser : $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[$dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListEmptyItemParser, $dillonkearns$elm_markdown$Markdown$UnorderedList$unorderedListItemBodyParser])));
};
var $dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock = function (previousWasBody) {
	var parseListItem = F3(
		function (listmarker, intended, unparsedListItem) {
			switch (unparsedListItem.$) {
				case 0:
					var completion = unparsedListItem.a;
					var body = unparsedListItem.b;
					return {
						bk: body,
						cr: listmarker,
						l: $elm$core$Maybe$Just(
							function () {
								if (completion === 1) {
									return true;
								} else {
									return false;
								}
							}())
					};
				case 1:
					var body = unparsedListItem.a;
					return {bk: body, cr: listmarker, l: $elm$core$Maybe$Nothing};
				default:
					return {bk: '', cr: listmarker, l: $elm$core$Maybe$Nothing};
			}
		});
	return A2(
		$elm$parser$Parser$Advanced$map,
		function (_v0) {
			var listmarker = _v0.a;
			var intended = _v0.b;
			var unparsedListItem = _v0.c;
			return A4(
				$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
				true,
				intended,
				_List_Nil,
				A3(parseListItem, listmarker, intended, unparsedListItem));
		},
		$dillonkearns$elm_markdown$Markdown$UnorderedList$parser(previousWasBody));
};
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (!result.$) {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$childToBlocks = F2(
	function (node, blocks) {
		switch (node.$) {
			case 0:
				var tag = node.a;
				var attributes = node.b;
				var children = node.c;
				var _v99 = $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocks(children);
				if (!_v99.$) {
					var childrenAsBlocks = _v99.a;
					var block = $dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
						A3($dillonkearns$elm_markdown$Markdown$Block$HtmlElement, tag, attributes, childrenAsBlocks));
					return $elm$core$Result$Ok(
						A2($elm$core$List$cons, block, blocks));
				} else {
					var err = _v99.a;
					return $elm$core$Result$Err(err);
				}
			case 1:
				var innerText = node.a;
				var _v100 = $dillonkearns$elm_markdown$Markdown$Parser$parse(innerText);
				if (!_v100.$) {
					var value = _v100.a;
					return $elm$core$Result$Ok(
						_Utils_ap(
							$elm$core$List$reverse(value),
							blocks));
				} else {
					var error = _v100.a;
					return $elm$core$Result$Err(
						$elm$parser$Parser$Expecting(
							A2(
								$elm$core$String$join,
								'\n',
								A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$deadEndToString, error))));
				}
			case 2:
				var string = node.a;
				return $elm$core$Result$Ok(
					A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
							$dillonkearns$elm_markdown$Markdown$Block$HtmlComment(string)),
						blocks));
			case 3:
				var string = node.a;
				return $elm$core$Result$Ok(
					A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
							$dillonkearns$elm_markdown$Markdown$Block$Cdata(string)),
						blocks));
			case 4:
				var string = node.a;
				return $elm$core$Result$Ok(
					A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
							$dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction(string)),
						blocks));
			default:
				var declarationType = node.a;
				var content = node.b;
				return $elm$core$Result$Ok(
					A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
							A2($dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration, declarationType, content)),
						blocks));
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$completeBlocks = function (state) {
	var _v84 = state.b;
	_v84$5:
	while (true) {
		if (_v84.b) {
			switch (_v84.a.$) {
				case 11:
					var body2 = _v84.a.a;
					var rest = _v84.b;
					var _v85 = A2(
						$elm$parser$Parser$Advanced$run,
						$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
						body2);
					if (!_v85.$) {
						var value = _v85.a;
						return $elm$parser$Parser$Advanced$succeed(
							{
								a: _Utils_ap(state.a, value.a),
								b: A2(
									$elm$core$List$cons,
									$dillonkearns$elm_markdown$Markdown$RawBlock$ParsedBlockQuote(value.b),
									rest)
							});
					} else {
						var error = _v85.a;
						return $elm$parser$Parser$Advanced$problem(
							$elm$parser$Parser$Problem(
								$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(error)));
					}
				case 3:
					var _v86 = _v84.a;
					var tight = _v86.a;
					var intended = _v86.b;
					var closeListItems = _v86.c;
					var openListItem = _v86.d;
					var rest = _v84.b;
					var _v87 = A2(
						$elm$parser$Parser$Advanced$run,
						$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
						openListItem.bk);
					if (!_v87.$) {
						var value = _v87.a;
						var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
						return $elm$parser$Parser$Advanced$succeed(
							{
								a: _Utils_ap(state.a, value.a),
								b: A2(
									$elm$core$List$cons,
									A4(
										$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
										tight2,
										intended,
										A2(
											$elm$core$List$cons,
											{bk: value.b, l: openListItem.l},
											closeListItems),
										openListItem),
									rest)
							});
					} else {
						var e = _v87.a;
						return $elm$parser$Parser$Advanced$problem(
							$elm$parser$Parser$Problem(
								$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
					}
				case 4:
					var _v92 = _v84.a;
					var tight = _v92.a;
					var intended = _v92.b;
					var marker = _v92.c;
					var order = _v92.d;
					var closeListItems = _v92.e;
					var openListItem = _v92.f;
					var rest = _v84.b;
					var _v93 = A2(
						$elm$parser$Parser$Advanced$run,
						$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
						openListItem);
					if (!_v93.$) {
						var value = _v93.a;
						var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
						return $elm$parser$Parser$Advanced$succeed(
							{
								a: _Utils_ap(state.a, value.a),
								b: A2(
									$elm$core$List$cons,
									A6(
										$dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock,
										tight2,
										intended,
										marker,
										order,
										A2($elm$core$List$cons, value.b, closeListItems),
										openListItem),
									rest)
							});
					} else {
						var e = _v93.a;
						return $elm$parser$Parser$Advanced$problem(
							$elm$parser$Parser$Problem(
								$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
					}
				case 10:
					if (_v84.b.b) {
						switch (_v84.b.a.$) {
							case 3:
								var _v88 = _v84.a;
								var _v89 = _v84.b;
								var _v90 = _v89.a;
								var tight = _v90.a;
								var intended = _v90.b;
								var closeListItems = _v90.c;
								var openListItem = _v90.d;
								var rest = _v89.b;
								var _v91 = A2(
									$elm$parser$Parser$Advanced$run,
									$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
									openListItem.bk);
								if (!_v91.$) {
									var value = _v91.a;
									var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
									return $elm$parser$Parser$Advanced$succeed(
										{
											a: _Utils_ap(state.a, value.a),
											b: A2(
												$elm$core$List$cons,
												A4(
													$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
													tight2,
													intended,
													A2(
														$elm$core$List$cons,
														{bk: value.b, l: openListItem.l},
														closeListItems),
													openListItem),
												rest)
										});
								} else {
									var e = _v91.a;
									return $elm$parser$Parser$Advanced$problem(
										$elm$parser$Parser$Problem(
											$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
								}
							case 4:
								var _v94 = _v84.a;
								var _v95 = _v84.b;
								var _v96 = _v95.a;
								var tight = _v96.a;
								var intended = _v96.b;
								var marker = _v96.c;
								var order = _v96.d;
								var closeListItems = _v96.e;
								var openListItem = _v96.f;
								var rest = _v95.b;
								var _v97 = A2(
									$elm$parser$Parser$Advanced$run,
									$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
									openListItem);
								if (!_v97.$) {
									var value = _v97.a;
									var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
									return $elm$parser$Parser$Advanced$succeed(
										{
											a: _Utils_ap(state.a, value.a),
											b: A2(
												$elm$core$List$cons,
												A6(
													$dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock,
													tight2,
													intended,
													marker,
													order,
													A2($elm$core$List$cons, value.b, closeListItems),
													openListItem),
												rest)
										});
								} else {
									var e = _v97.a;
									return $elm$parser$Parser$Advanced$problem(
										$elm$parser$Parser$Problem(
											$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
								}
							default:
								break _v84$5;
						}
					} else {
						break _v84$5;
					}
				default:
					break _v84$5;
			}
		} else {
			break _v84$5;
		}
	}
	return $elm$parser$Parser$Advanced$succeed(state);
};
var $dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks = F2(
	function (state, newRawBlock) {
		var _v41 = _Utils_Tuple2(newRawBlock, state.b);
		_v41$13:
		while (true) {
			if (_v41.b.b) {
				switch (_v41.b.a.$) {
					case 5:
						if (_v41.a.$ === 5) {
							var block1 = _v41.a.a;
							var _v42 = _v41.b;
							var block2 = _v42.a.a;
							var rest = _v42.b;
							return $elm$parser$Parser$Advanced$succeed(
								{
									a: state.a,
									b: A2(
										$elm$core$List$cons,
										$dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock(
											{
												bk: A2($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll, block2.bk, block1.bk),
												cq: $elm$core$Maybe$Nothing
											}),
										rest)
								});
						} else {
							break _v41$13;
						}
					case 6:
						switch (_v41.a.$) {
							case 6:
								var block1 = _v41.a.a;
								var _v43 = _v41.b;
								var block2 = _v43.a.a;
								var rest = _v43.b;
								return $elm$parser$Parser$Advanced$succeed(
									{
										a: state.a,
										b: A2(
											$elm$core$List$cons,
											$dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock(
												A2($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll, block2, block1)),
											rest)
									});
							case 10:
								var _v44 = _v41.a;
								var _v45 = _v41.b;
								var block = _v45.a.a;
								var rest = _v45.b;
								return $elm$parser$Parser$Advanced$succeed(
									{
										a: state.a,
										b: A2(
											$elm$core$List$cons,
											$dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock(
												A2($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll, block, '\n')),
											rest)
									});
							default:
								break _v41$13;
						}
					case 11:
						var _v46 = _v41.b;
						var body2 = _v46.a.a;
						var rest = _v46.b;
						switch (newRawBlock.$) {
							case 11:
								var body1 = newRawBlock.a;
								return $elm$parser$Parser$Advanced$succeed(
									{
										a: state.a,
										b: A2(
											$elm$core$List$cons,
											$dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote(
												A2($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll, body2, body1)),
											rest)
									});
							case 1:
								var body1 = newRawBlock.a;
								return $elm$parser$Parser$Advanced$succeed(
									{
										a: state.a,
										b: A2(
											$elm$core$List$cons,
											$dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote(
												A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '\n', body2, body1)),
											rest)
									});
							default:
								var _v48 = A2(
									$elm$parser$Parser$Advanced$run,
									$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
									body2);
								if (!_v48.$) {
									var value = _v48.a;
									return $elm$parser$Parser$Advanced$succeed(
										{
											a: _Utils_ap(state.a, value.a),
											b: A2(
												$elm$core$List$cons,
												newRawBlock,
												A2(
													$elm$core$List$cons,
													$dillonkearns$elm_markdown$Markdown$RawBlock$ParsedBlockQuote(value.b),
													rest))
										});
								} else {
									var e = _v48.a;
									return $elm$parser$Parser$Advanced$problem(
										$elm$parser$Parser$Problem(
											$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
								}
						}
					case 3:
						var _v49 = _v41.b;
						var _v50 = _v49.a;
						var tight = _v50.a;
						var intended1 = _v50.b;
						var closeListItems2 = _v50.c;
						var openListItem2 = _v50.d;
						var rest = _v49.b;
						switch (newRawBlock.$) {
							case 3:
								var intended2 = newRawBlock.b;
								var closeListItems1 = newRawBlock.c;
								var openListItem1 = newRawBlock.d;
								if (_Utils_eq(openListItem2.cr, openListItem1.cr)) {
									var _v52 = A2(
										$elm$parser$Parser$Advanced$run,
										$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
										openListItem2.bk);
									if (!_v52.$) {
										var value = _v52.a;
										return A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? $elm$parser$Parser$Advanced$succeed(
											{
												a: _Utils_ap(state.a, value.a),
												b: A2(
													$elm$core$List$cons,
													A4(
														$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
														false,
														intended2,
														A2(
															$elm$core$List$cons,
															{bk: value.b, l: openListItem2.l},
															closeListItems2),
														openListItem1),
													rest)
											}) : $elm$parser$Parser$Advanced$succeed(
											{
												a: _Utils_ap(state.a, value.a),
												b: A2(
													$elm$core$List$cons,
													A4(
														$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
														tight,
														intended2,
														A2(
															$elm$core$List$cons,
															{bk: value.b, l: openListItem2.l},
															closeListItems2),
														openListItem1),
													rest)
											});
									} else {
										var e = _v52.a;
										return $elm$parser$Parser$Advanced$problem(
											$elm$parser$Parser$Problem(
												$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
									}
								} else {
									var _v53 = A2(
										$elm$parser$Parser$Advanced$run,
										$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
										openListItem2.bk);
									if (!_v53.$) {
										var value = _v53.a;
										var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
										return $elm$parser$Parser$Advanced$succeed(
											{
												a: _Utils_ap(state.a, value.a),
												b: A2(
													$elm$core$List$cons,
													newRawBlock,
													A2(
														$elm$core$List$cons,
														A4(
															$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
															tight2,
															intended1,
															A2(
																$elm$core$List$cons,
																{bk: value.b, l: openListItem2.l},
																closeListItems2),
															openListItem1),
														rest))
											});
									} else {
										var e = _v53.a;
										return $elm$parser$Parser$Advanced$problem(
											$elm$parser$Parser$Problem(
												$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
									}
								}
							case 1:
								var body1 = newRawBlock.a;
								return $elm$parser$Parser$Advanced$succeed(
									{
										a: state.a,
										b: A2(
											$elm$core$List$cons,
											A4(
												$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
												tight,
												intended1,
												closeListItems2,
												_Utils_update(
													openListItem2,
													{
														bk: A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '\n', openListItem2.bk, body1)
													})),
											rest)
									});
							default:
								var _v54 = A2(
									$elm$parser$Parser$Advanced$run,
									$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
									openListItem2.bk);
								if (!_v54.$) {
									var value = _v54.a;
									var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
									return $elm$parser$Parser$Advanced$succeed(
										{
											a: _Utils_ap(state.a, value.a),
											b: A2(
												$elm$core$List$cons,
												newRawBlock,
												A2(
													$elm$core$List$cons,
													A4(
														$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
														tight2,
														intended1,
														A2(
															$elm$core$List$cons,
															{bk: value.b, l: openListItem2.l},
															closeListItems2),
														openListItem2),
													rest))
										});
								} else {
									var e = _v54.a;
									return $elm$parser$Parser$Advanced$problem(
										$elm$parser$Parser$Problem(
											$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
								}
						}
					case 4:
						var _v55 = _v41.b;
						var _v56 = _v55.a;
						var tight = _v56.a;
						var intended1 = _v56.b;
						var marker = _v56.c;
						var order = _v56.d;
						var closeListItems2 = _v56.e;
						var openListItem2 = _v56.f;
						var rest = _v55.b;
						switch (newRawBlock.$) {
							case 4:
								var intended2 = newRawBlock.b;
								var marker2 = newRawBlock.c;
								var closeListItems1 = newRawBlock.e;
								var openListItem1 = newRawBlock.f;
								if (_Utils_eq(marker, marker2)) {
									var _v58 = A2(
										$elm$parser$Parser$Advanced$run,
										$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
										openListItem2);
									if (!_v58.$) {
										var value = _v58.a;
										var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
										return $elm$parser$Parser$Advanced$succeed(
											{
												a: _Utils_ap(state.a, value.a),
												b: A2(
													$elm$core$List$cons,
													A6(
														$dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock,
														tight2,
														intended2,
														marker,
														order,
														A2($elm$core$List$cons, value.b, closeListItems2),
														openListItem1),
													rest)
											});
									} else {
										var e = _v58.a;
										return $elm$parser$Parser$Advanced$problem(
											$elm$parser$Parser$Problem(
												$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
									}
								} else {
									var _v59 = A2(
										$elm$parser$Parser$Advanced$run,
										$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
										openListItem2);
									if (!_v59.$) {
										var value = _v59.a;
										var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
										return $elm$parser$Parser$Advanced$succeed(
											{
												a: _Utils_ap(state.a, value.a),
												b: A2(
													$elm$core$List$cons,
													newRawBlock,
													A2(
														$elm$core$List$cons,
														A6(
															$dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock,
															tight2,
															intended1,
															marker,
															order,
															A2($elm$core$List$cons, value.b, closeListItems2),
															openListItem2),
														rest))
											});
									} else {
										var e = _v59.a;
										return $elm$parser$Parser$Advanced$problem(
											$elm$parser$Parser$Problem(
												$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
									}
								}
							case 1:
								var body1 = newRawBlock.a;
								return $elm$parser$Parser$Advanced$succeed(
									{
										a: state.a,
										b: A2(
											$elm$core$List$cons,
											A6($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock, tight, intended1, marker, order, closeListItems2, openListItem2 + ('\n' + body1)),
											rest)
									});
							default:
								var _v60 = A2(
									$elm$parser$Parser$Advanced$run,
									$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
									openListItem2);
								if (!_v60.$) {
									var value = _v60.a;
									var tight2 = A2($elm$core$List$member, $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine, value.b) ? false : tight;
									return $elm$parser$Parser$Advanced$succeed(
										{
											a: _Utils_ap(state.a, value.a),
											b: A2(
												$elm$core$List$cons,
												newRawBlock,
												A2(
													$elm$core$List$cons,
													A6(
														$dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock,
														tight2,
														intended1,
														marker,
														order,
														A2($elm$core$List$cons, value.b, closeListItems2),
														openListItem2),
													rest))
										});
								} else {
									var e = _v60.a;
									return $elm$parser$Parser$Advanced$problem(
										$elm$parser$Parser$Problem(
											$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
								}
						}
					case 1:
						switch (_v41.a.$) {
							case 1:
								var body1 = _v41.a.a;
								var _v61 = _v41.b;
								var body2 = _v61.a.a;
								var rest = _v61.b;
								return $elm$parser$Parser$Advanced$succeed(
									{
										a: state.a,
										b: A2(
											$elm$core$List$cons,
											$dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(
												A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '\n', body2, body1)),
											rest)
									});
							case 13:
								if (!_v41.a.a) {
									var _v62 = _v41.a;
									var _v63 = _v62.a;
									var _v64 = _v41.b;
									var unparsedInlines = _v64.a.a;
									var rest = _v64.b;
									return $elm$parser$Parser$Advanced$succeed(
										{
											a: state.a,
											b: A2(
												$elm$core$List$cons,
												A2($dillonkearns$elm_markdown$Markdown$RawBlock$Heading, 1, unparsedInlines),
												rest)
										});
								} else {
									var _v65 = _v41.a;
									var _v66 = _v65.a;
									var _v67 = _v41.b;
									var unparsedInlines = _v67.a.a;
									var rest = _v67.b;
									return $elm$parser$Parser$Advanced$succeed(
										{
											a: state.a,
											b: A2(
												$elm$core$List$cons,
												A2($dillonkearns$elm_markdown$Markdown$RawBlock$Heading, 2, unparsedInlines),
												rest)
										});
								}
							case 9:
								var _v68 = _v41.a.a;
								var text = _v68.a;
								var alignments = _v68.b;
								var _v69 = _v41.b;
								var rawHeaders = _v69.a.a;
								var rest = _v69.b;
								var _v70 = A2(
									$dillonkearns$elm_markdown$Markdown$TableParser$parseHeader,
									A2($dillonkearns$elm_markdown$Markdown$Table$TableDelimiterRow, text, alignments),
									rawHeaders);
								if (!_v70.$) {
									var headers = _v70.a;
									return $elm$parser$Parser$Advanced$succeed(
										{
											a: state.a,
											b: A2(
												$elm$core$List$cons,
												$dillonkearns$elm_markdown$Markdown$RawBlock$Table(
													A2($dillonkearns$elm_markdown$Markdown$Table$Table, headers, _List_Nil)),
												rest)
										});
								} else {
									return $elm$parser$Parser$Advanced$succeed(
										{
											a: state.a,
											b: A2(
												$elm$core$List$cons,
												$dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(
													A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '\n', rawHeaders, text.bK)),
												rest)
										});
								}
							default:
								break _v41$13;
						}
					case 8:
						if (_v41.a.$ === 8) {
							var updatedTable = _v41.a.a;
							var _v71 = _v41.b;
							var rest = _v71.b;
							return $elm$parser$Parser$Advanced$succeed(
								{
									a: state.a,
									b: A2(
										$elm$core$List$cons,
										$dillonkearns$elm_markdown$Markdown$RawBlock$Table(updatedTable),
										rest)
								});
						} else {
							break _v41$13;
						}
					case 10:
						if (_v41.b.b.b) {
							switch (_v41.b.b.a.$) {
								case 4:
									var _v72 = _v41.b;
									var _v73 = _v72.a;
									var _v74 = _v72.b;
									var _v75 = _v74.a;
									var tight = _v75.a;
									var intended1 = _v75.b;
									var marker = _v75.c;
									var order = _v75.d;
									var closeListItems2 = _v75.e;
									var openListItem2 = _v75.f;
									var rest = _v74.b;
									var _v76 = A2(
										$elm$parser$Parser$Advanced$run,
										$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
										openListItem2);
									if (!_v76.$) {
										var value = _v76.a;
										if (newRawBlock.$ === 4) {
											var intended2 = newRawBlock.b;
											var openListItem = newRawBlock.f;
											return $elm$parser$Parser$Advanced$succeed(
												{
													a: _Utils_ap(state.a, value.a),
													b: A2(
														$elm$core$List$cons,
														A6(
															$dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock,
															false,
															intended2,
															marker,
															order,
															A2($elm$core$List$cons, value.b, closeListItems2),
															openListItem),
														rest)
												});
										} else {
											return $elm$parser$Parser$Advanced$succeed(
												{
													a: _Utils_ap(state.a, value.a),
													b: A2(
														$elm$core$List$cons,
														newRawBlock,
														A2(
															$elm$core$List$cons,
															$dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine,
															A2(
																$elm$core$List$cons,
																A6(
																	$dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock,
																	tight,
																	intended1,
																	marker,
																	order,
																	A2($elm$core$List$cons, value.b, closeListItems2),
																	openListItem2),
																rest)))
												});
										}
									} else {
										var e = _v76.a;
										return $elm$parser$Parser$Advanced$problem(
											$elm$parser$Parser$Problem(
												$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
									}
								case 3:
									var _v78 = _v41.b;
									var _v79 = _v78.a;
									var _v80 = _v78.b;
									var _v81 = _v80.a;
									var tight = _v81.a;
									var intended1 = _v81.b;
									var closeListItems2 = _v81.c;
									var openListItem2 = _v81.d;
									var rest = _v80.b;
									var _v82 = A2(
										$elm$parser$Parser$Advanced$run,
										$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
										openListItem2.bk);
									if (!_v82.$) {
										var value = _v82.a;
										if (newRawBlock.$ === 3) {
											var openListItem = newRawBlock.d;
											return $elm$parser$Parser$Advanced$succeed(
												{
													a: _Utils_ap(state.a, value.a),
													b: A2(
														$elm$core$List$cons,
														A4(
															$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
															false,
															intended1,
															A2(
																$elm$core$List$cons,
																{bk: value.b, l: openListItem2.l},
																closeListItems2),
															openListItem),
														rest)
												});
										} else {
											return $elm$parser$Parser$Advanced$succeed(
												{
													a: _Utils_ap(state.a, value.a),
													b: A2(
														$elm$core$List$cons,
														newRawBlock,
														A2(
															$elm$core$List$cons,
															$dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine,
															A2(
																$elm$core$List$cons,
																A4(
																	$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
																	tight,
																	intended1,
																	A2(
																		$elm$core$List$cons,
																		{bk: value.b, l: openListItem2.l},
																		closeListItems2),
																	openListItem2),
																rest)))
												});
										}
									} else {
										var e = _v82.a;
										return $elm$parser$Parser$Advanced$problem(
											$elm$parser$Parser$Problem(
												$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(e)));
									}
								default:
									break _v41$13;
							}
						} else {
							break _v41$13;
						}
					default:
						break _v41$13;
				}
			} else {
				break _v41$13;
			}
		}
		return $elm$parser$Parser$Advanced$succeed(
			{
				a: state.a,
				b: A2($elm$core$List$cons, newRawBlock, state.b)
			});
	});
var $dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper = F2(
	function (referencesDict, _v36) {
		var unparsedInlines = _v36;
		var mappedReferencesDict = $elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$mapSecond(
					function (_v37) {
						var destination = _v37.cb;
						var title = _v37.bW;
						return _Utils_Tuple2(destination, title);
					}),
				referencesDict));
		return A2(
			$elm$core$List$map,
			$dillonkearns$elm_markdown$Markdown$Parser$mapInline,
			A2($dillonkearns$elm_markdown$Markdown$InlineParser$parse, mappedReferencesDict, unparsedInlines));
	});
var $dillonkearns$elm_markdown$Markdown$Parser$mapInline = function (inline) {
	switch (inline.$) {
		case 0:
			var string = inline.a;
			return $dillonkearns$elm_markdown$Markdown$Block$Text(string);
		case 1:
			return $dillonkearns$elm_markdown$Markdown$Block$HardLineBreak;
		case 2:
			var string = inline.a;
			return $dillonkearns$elm_markdown$Markdown$Block$CodeSpan(string);
		case 3:
			var string = inline.a;
			var maybeString = inline.b;
			var inlines = inline.c;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Block$Link,
				string,
				maybeString,
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
		case 4:
			var string = inline.a;
			var maybeString = inline.b;
			var inlines = inline.c;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Block$Image,
				string,
				maybeString,
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
		case 5:
			var node = inline.a;
			return $dillonkearns$elm_markdown$Markdown$Block$HtmlInline(
				$dillonkearns$elm_markdown$Markdown$Parser$nodeToRawBlock(node));
		case 6:
			var level = inline.a;
			var inlines = inline.b;
			switch (level) {
				case 1:
					return $dillonkearns$elm_markdown$Markdown$Block$Emphasis(
						A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
				case 2:
					return $dillonkearns$elm_markdown$Markdown$Block$Strong(
						A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
				default:
					return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(level) ? $dillonkearns$elm_markdown$Markdown$Block$Strong(
						_List_fromArray(
							[
								$dillonkearns$elm_markdown$Markdown$Parser$mapInline(
								A2($dillonkearns$elm_markdown$Markdown$Inline$Emphasis, level - 2, inlines))
							])) : $dillonkearns$elm_markdown$Markdown$Block$Emphasis(
						_List_fromArray(
							[
								$dillonkearns$elm_markdown$Markdown$Parser$mapInline(
								A2($dillonkearns$elm_markdown$Markdown$Inline$Emphasis, level - 1, inlines))
							]));
			}
		default:
			var inlines = inline.a;
			return $dillonkearns$elm_markdown$Markdown$Block$Strikethrough(
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
	}
};
var $dillonkearns$elm_markdown$Markdown$Parser$nodeToRawBlock = function (node) {
	switch (node.$) {
		case 1:
			var innerText = node.a;
			return $dillonkearns$elm_markdown$Markdown$Block$HtmlComment('TODO this never happens, but use types to drop this case.');
		case 0:
			var tag = node.a;
			var attributes = node.b;
			var children = node.c;
			var parseChild = function (child) {
				if (child.$ === 1) {
					var text = child.a;
					return $dillonkearns$elm_markdown$Markdown$Parser$textNodeToBlocks(text);
				} else {
					return _List_fromArray(
						[
							$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
							$dillonkearns$elm_markdown$Markdown$Parser$nodeToRawBlock(child))
						]);
				}
			};
			return A3(
				$dillonkearns$elm_markdown$Markdown$Block$HtmlElement,
				tag,
				attributes,
				A2($elm$core$List$concatMap, parseChild, children));
		case 2:
			var string = node.a;
			return $dillonkearns$elm_markdown$Markdown$Block$HtmlComment(string);
		case 3:
			var string = node.a;
			return $dillonkearns$elm_markdown$Markdown$Block$Cdata(string);
		case 4:
			var string = node.a;
			return $dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction(string);
		default:
			var declarationType = node.a;
			var content = node.b;
			return A2($dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration, declarationType, content);
	}
};
var $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocks = function (children) {
	return A2($dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocksHelp, children, _List_Nil);
};
var $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocksHelp = F2(
	function (remaining, soFar) {
		nodesToBlocksHelp:
		while (true) {
			if (remaining.b) {
				var node = remaining.a;
				var rest = remaining.b;
				var _v31 = A2($dillonkearns$elm_markdown$Markdown$Parser$childToBlocks, node, soFar);
				if (!_v31.$) {
					var newSoFar = _v31.a;
					var $temp$remaining = rest,
						$temp$soFar = newSoFar;
					remaining = $temp$remaining;
					soFar = $temp$soFar;
					continue nodesToBlocksHelp;
				} else {
					var e = _v31.a;
					return $elm$core$Result$Err(e);
				}
			} else {
				return $elm$core$Result$Ok(
					$elm$core$List$reverse(soFar));
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$parse = function (input) {
	var _v27 = A2(
		$elm$parser$Parser$Advanced$run,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
			$dillonkearns$elm_markdown$Helpers$endOfFile),
		input);
	if (_v27.$ === 1) {
		var e = _v27.a;
		return $elm$core$Result$Err(e);
	} else {
		var v = _v27.a;
		var _v28 = $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines(v);
		if (_v28.$ === 1) {
			var e = _v28.a;
			return A2(
				$elm$parser$Parser$Advanced$run,
				$elm$parser$Parser$Advanced$problem(e),
				'');
		} else {
			var blocks = _v28.a;
			var isNotEmptyParagraph = function (block) {
				if ((block.$ === 5) && (!block.a.b)) {
					return false;
				} else {
					return true;
				}
			};
			return $elm$core$Result$Ok(
				A2($elm$core$List$filter, isNotEmptyParagraph, blocks));
		}
	}
};
var $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines = function (state) {
	return A3($dillonkearns$elm_markdown$Markdown$Parser$parseAllInlinesHelp, state, state.b, _List_Nil);
};
var $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlinesHelp = F3(
	function (state, rawBlocks, parsedBlocks) {
		parseAllInlinesHelp:
		while (true) {
			if (rawBlocks.b) {
				var rawBlock = rawBlocks.a;
				var rest = rawBlocks.b;
				var _v26 = A2($dillonkearns$elm_markdown$Markdown$Parser$parseInlines, state.a, rawBlock);
				switch (_v26.$) {
					case 1:
						var newParsedBlock = _v26.a;
						var $temp$state = state,
							$temp$rawBlocks = rest,
							$temp$parsedBlocks = A2($elm$core$List$cons, newParsedBlock, parsedBlocks);
						state = $temp$state;
						rawBlocks = $temp$rawBlocks;
						parsedBlocks = $temp$parsedBlocks;
						continue parseAllInlinesHelp;
					case 0:
						var $temp$state = state,
							$temp$rawBlocks = rest,
							$temp$parsedBlocks = parsedBlocks;
						state = $temp$state;
						rawBlocks = $temp$rawBlocks;
						parsedBlocks = $temp$parsedBlocks;
						continue parseAllInlinesHelp;
					default:
						var e = _v26.a;
						return $elm$core$Result$Err(e);
				}
			} else {
				return $elm$core$Result$Ok(parsedBlocks);
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$parseHeaderInlines = F2(
	function (linkReferences, header) {
		return A2(
			$elm$core$List$map,
			function (_v24) {
				var label = _v24.S;
				var alignment = _v24.ax;
				return A3(
					$dillonkearns$elm_markdown$Markdown$Parser$parseRawInline,
					linkReferences,
					function (parsedHeaderLabel) {
						return {ax: alignment, S: parsedHeaderLabel};
					},
					label);
			},
			header);
	});
var $dillonkearns$elm_markdown$Markdown$Parser$parseInlines = F2(
	function (linkReferences, rawBlock) {
		switch (rawBlock.$) {
			case 0:
				var level = rawBlock.a;
				var unparsedInlines = rawBlock.b;
				var _v17 = $dillonkearns$elm_markdown$Markdown$Parser$toHeading(level);
				if (!_v17.$) {
					var parsedLevel = _v17.a;
					return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
						A2(
							$dillonkearns$elm_markdown$Markdown$Block$Heading,
							parsedLevel,
							A2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper, linkReferences, unparsedInlines)));
				} else {
					var e = _v17.a;
					return $dillonkearns$elm_markdown$Markdown$Parser$InlineProblem(e);
				}
			case 1:
				var unparsedInlines = rawBlock.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$Paragraph(
						A2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper, linkReferences, unparsedInlines)));
			case 2:
				var html = rawBlock.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(html));
			case 3:
				var tight = rawBlock.a;
				var intended = rawBlock.b;
				var unparsedItems = rawBlock.c;
				var parseItem = F2(
					function (rawBlockTask, rawBlocks) {
						var blocksTask = function () {
							if (!rawBlockTask.$) {
								if (!rawBlockTask.a) {
									return 1;
								} else {
									return 2;
								}
							} else {
								return 0;
							}
						}();
						var blocks = function () {
							var _v18 = $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines(
								{a: linkReferences, b: rawBlocks});
							if (!_v18.$) {
								var parsedBlocks = _v18.a;
								return parsedBlocks;
							} else {
								var e = _v18.a;
								return _List_Nil;
							}
						}();
						return A2($dillonkearns$elm_markdown$Markdown$Block$ListItem, blocksTask, blocks);
					});
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					A2(
						$dillonkearns$elm_markdown$Markdown$Block$UnorderedList,
						$dillonkearns$elm_markdown$Markdown$Parser$isTightBoolToListDisplay(tight),
						$elm$core$List$reverse(
							A2(
								$elm$core$List$map,
								function (item) {
									return A2(parseItem, item.l, item.bk);
								},
								unparsedItems))));
			case 4:
				var tight = rawBlock.a;
				var startingIndex = rawBlock.d;
				var unparsedItems = rawBlock.e;
				var parseItem = function (rawBlocks) {
					var _v20 = $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines(
						{a: linkReferences, b: rawBlocks});
					if (!_v20.$) {
						var parsedBlocks = _v20.a;
						return parsedBlocks;
					} else {
						var e = _v20.a;
						return _List_Nil;
					}
				};
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					A3(
						$dillonkearns$elm_markdown$Markdown$Block$OrderedList,
						$dillonkearns$elm_markdown$Markdown$Parser$isTightBoolToListDisplay(tight),
						startingIndex,
						$elm$core$List$reverse(
							A2($elm$core$List$map, parseItem, unparsedItems))));
			case 5:
				var codeBlock = rawBlock.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$CodeBlock(codeBlock));
			case 7:
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock($dillonkearns$elm_markdown$Markdown$Block$ThematicBreak);
			case 10:
				return $dillonkearns$elm_markdown$Markdown$Parser$EmptyBlock;
			case 11:
				var rawBlocks = rawBlock.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$EmptyBlock;
			case 12:
				var rawBlocks = rawBlock.a;
				var _v21 = $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines(
					{a: linkReferences, b: rawBlocks});
				if (!_v21.$) {
					var parsedBlocks = _v21.a;
					return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
						$dillonkearns$elm_markdown$Markdown$Block$BlockQuote(parsedBlocks));
				} else {
					var e = _v21.a;
					return $dillonkearns$elm_markdown$Markdown$Parser$InlineProblem(e);
				}
			case 6:
				var codeBlockBody = rawBlock.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$CodeBlock(
						{bk: codeBlockBody, cq: $elm$core$Maybe$Nothing}));
			case 8:
				var _v22 = rawBlock.a;
				var header = _v22.a;
				var rows = _v22.b;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					A2(
						$dillonkearns$elm_markdown$Markdown$Block$Table,
						A2($dillonkearns$elm_markdown$Markdown$Parser$parseHeaderInlines, linkReferences, header),
						A2($dillonkearns$elm_markdown$Markdown$Parser$parseRowInlines, linkReferences, rows)));
			case 9:
				var _v23 = rawBlock.a;
				var text = _v23.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$Paragraph(
						A2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper, linkReferences, text.bK)));
			default:
				var raw = rawBlock.b;
				return $dillonkearns$elm_markdown$Markdown$Parser$ParsedBlock(
					$dillonkearns$elm_markdown$Markdown$Block$Paragraph(
						A2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper, linkReferences, raw)));
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$parseRawInline = F3(
	function (linkReferences, wrap, unparsedInlines) {
		return wrap(
			A2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper, linkReferences, unparsedInlines));
	});
var $dillonkearns$elm_markdown$Markdown$Parser$parseRowInlines = F2(
	function (linkReferences, rows) {
		return A2(
			$elm$core$List$map,
			function (row) {
				return A2(
					$elm$core$List$map,
					function (column) {
						return A3($dillonkearns$elm_markdown$Markdown$Parser$parseRawInline, linkReferences, $elm$core$Basics$identity, column);
					},
					row);
			},
			rows);
	});
var $dillonkearns$elm_markdown$Markdown$Parser$stepRawBlock = function (revStmts) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v2) {
					return $elm$parser$Parser$Advanced$Done(revStmts);
				},
				$dillonkearns$elm_markdown$Helpers$endOfFile),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (reference) {
					return $elm$parser$Parser$Advanced$Loop(
						A2($dillonkearns$elm_markdown$Markdown$Parser$addReference, revStmts, reference));
				},
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$parser)),
				function () {
				var _v3 = revStmts.b;
				_v3$6:
				while (true) {
					if (_v3.b) {
						switch (_v3.a.$) {
							case 1:
								return A2(
									$elm$parser$Parser$Advanced$map,
									function (block) {
										return $elm$parser$Parser$Advanced$Loop(block);
									},
									A2(
										$elm$parser$Parser$Advanced$andThen,
										$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
										$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterOpenBlockOrParagraphParser()));
							case 8:
								var table = _v3.a.a;
								return A2(
									$elm$parser$Parser$Advanced$map,
									function (block) {
										return $elm$parser$Parser$Advanced$Loop(block);
									},
									A2(
										$elm$parser$Parser$Advanced$andThen,
										$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
										$elm$parser$Parser$Advanced$oneOf(
											_List_fromArray(
												[
													$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser(),
													$dillonkearns$elm_markdown$Markdown$Parser$tableRowIfTableStarted(table)
												]))));
							case 3:
								var _v4 = _v3.a;
								var tight = _v4.a;
								var intended = _v4.b;
								var closeListItems = _v4.c;
								var openListItem = _v4.d;
								var rest = _v3.b;
								var completeOrMergeUnorderedListBlockBlankLine = F2(
									function (state, newString) {
										return _Utils_update(
											state,
											{
												b: A2(
													$elm$core$List$cons,
													$dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine,
													A2(
														$elm$core$List$cons,
														A4(
															$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
															tight,
															intended,
															closeListItems,
															_Utils_update(
																openListItem,
																{
																	bk: A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '', openListItem.bk, newString)
																})),
														rest))
											});
									});
								var completeOrMergeUnorderedListBlock = F2(
									function (state, newString) {
										return _Utils_update(
											state,
											{
												b: A2(
													$elm$core$List$cons,
													A4(
														$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
														tight,
														intended,
														closeListItems,
														_Utils_update(
															openListItem,
															{
																bk: A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '\n', openListItem.bk, newString)
															})),
													rest)
											});
									});
								return $elm$parser$Parser$Advanced$oneOf(
									_List_fromArray(
										[
											A2(
											$elm$parser$Parser$Advanced$map,
											function (block) {
												return $elm$parser$Parser$Advanced$Loop(block);
											},
											A2(
												$elm$parser$Parser$Advanced$map,
												function (_v5) {
													return A2(completeOrMergeUnorderedListBlockBlankLine, revStmts, '\n');
												},
												$dillonkearns$elm_markdown$Markdown$Parser$blankLine)),
											A2(
											$elm$parser$Parser$Advanced$map,
											function (block) {
												return $elm$parser$Parser$Advanced$Loop(block);
											},
											A2(
												$elm$parser$Parser$Advanced$map,
												completeOrMergeUnorderedListBlock(revStmts),
												A2(
													$elm$parser$Parser$Advanced$keeper,
													A2(
														$elm$parser$Parser$Advanced$ignorer,
														$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
														$elm$parser$Parser$Advanced$symbol(
															A2(
																$elm$parser$Parser$Advanced$Token,
																A2($elm$core$String$repeat, intended, ' '),
																$elm$parser$Parser$ExpectingSymbol('Indentation')))),
													A2(
														$elm$parser$Parser$Advanced$ignorer,
														$elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
														$dillonkearns$elm_markdown$Helpers$lineEndOrEnd)))),
											A2(
											$elm$parser$Parser$Advanced$map,
											function (block) {
												return $elm$parser$Parser$Advanced$Loop(block);
											},
											A2(
												$elm$parser$Parser$Advanced$andThen,
												$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
												$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterList()))
										]));
							case 4:
								var _v10 = _v3.a;
								var tight = _v10.a;
								var intended = _v10.b;
								var marker = _v10.c;
								var order = _v10.d;
								var closeListItems = _v10.e;
								var openListItem = _v10.f;
								var rest = _v3.b;
								var completeOrMergeUnorderedListBlockBlankLine = F2(
									function (state, newString) {
										return _Utils_update(
											state,
											{
												b: A2(
													$elm$core$List$cons,
													$dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine,
													A2(
														$elm$core$List$cons,
														A6($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock, tight, intended, marker, order, closeListItems, openListItem + ('\n' + newString)),
														rest))
											});
									});
								var completeOrMergeUnorderedListBlock = F2(
									function (state, newString) {
										return _Utils_update(
											state,
											{
												b: A2(
													$elm$core$List$cons,
													A6($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock, tight, intended, marker, order, closeListItems, openListItem + ('\n' + newString)),
													rest)
											});
									});
								return $elm$parser$Parser$Advanced$oneOf(
									_List_fromArray(
										[
											A2(
											$elm$parser$Parser$Advanced$map,
											function (block) {
												return $elm$parser$Parser$Advanced$Loop(block);
											},
											A2(
												$elm$parser$Parser$Advanced$map,
												function (_v11) {
													return A2(completeOrMergeUnorderedListBlockBlankLine, revStmts, '\n');
												},
												$dillonkearns$elm_markdown$Markdown$Parser$blankLine)),
											A2(
											$elm$parser$Parser$Advanced$map,
											function (block) {
												return $elm$parser$Parser$Advanced$Loop(block);
											},
											A2(
												$elm$parser$Parser$Advanced$map,
												completeOrMergeUnorderedListBlock(revStmts),
												A2(
													$elm$parser$Parser$Advanced$keeper,
													A2(
														$elm$parser$Parser$Advanced$ignorer,
														$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
														$elm$parser$Parser$Advanced$symbol(
															A2(
																$elm$parser$Parser$Advanced$Token,
																A2($elm$core$String$repeat, intended, ' '),
																$elm$parser$Parser$ExpectingSymbol('Indentation')))),
													A2(
														$elm$parser$Parser$Advanced$ignorer,
														$elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
														$dillonkearns$elm_markdown$Helpers$lineEndOrEnd)))),
											A2(
											$elm$parser$Parser$Advanced$map,
											function (block) {
												return $elm$parser$Parser$Advanced$Loop(block);
											},
											A2(
												$elm$parser$Parser$Advanced$andThen,
												$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
												$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterList()))
										]));
							case 10:
								if (_v3.b.b) {
									switch (_v3.b.a.$) {
										case 3:
											var _v6 = _v3.a;
											var _v7 = _v3.b;
											var _v8 = _v7.a;
											var tight = _v8.a;
											var intended = _v8.b;
											var closeListItems = _v8.c;
											var openListItem = _v8.d;
											var rest = _v7.b;
											var completeOrMergeUnorderedListBlockBlankLine = F2(
												function (state, newString) {
													return _Utils_update(
														state,
														{
															b: A2(
																$elm$core$List$cons,
																$dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine,
																A2(
																	$elm$core$List$cons,
																	A4(
																		$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
																		tight,
																		intended,
																		closeListItems,
																		_Utils_update(
																			openListItem,
																			{
																				bk: A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '', openListItem.bk, newString)
																			})),
																	rest))
														});
												});
											var completeOrMergeUnorderedListBlock = F2(
												function (state, newString) {
													return _Utils_update(
														state,
														{
															b: A2(
																$elm$core$List$cons,
																A4(
																	$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
																	tight,
																	intended,
																	closeListItems,
																	_Utils_update(
																		openListItem,
																		{
																			bk: A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '\n', openListItem.bk, newString)
																		})),
																rest)
														});
												});
											return ($elm$core$String$trim(openListItem.bk) === '') ? A2(
												$elm$parser$Parser$Advanced$map,
												function (block) {
													return $elm$parser$Parser$Advanced$Loop(block);
												},
												A2(
													$elm$parser$Parser$Advanced$andThen,
													$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
													$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser())) : $elm$parser$Parser$Advanced$oneOf(
												_List_fromArray(
													[
														A2(
														$elm$parser$Parser$Advanced$map,
														function (block) {
															return $elm$parser$Parser$Advanced$Loop(block);
														},
														A2(
															$elm$parser$Parser$Advanced$map,
															function (_v9) {
																return A2(completeOrMergeUnorderedListBlockBlankLine, revStmts, '\n');
															},
															$dillonkearns$elm_markdown$Markdown$Parser$blankLine)),
														A2(
														$elm$parser$Parser$Advanced$map,
														function (block) {
															return $elm$parser$Parser$Advanced$Loop(block);
														},
														A2(
															$elm$parser$Parser$Advanced$map,
															completeOrMergeUnorderedListBlock(revStmts),
															A2(
																$elm$parser$Parser$Advanced$keeper,
																A2(
																	$elm$parser$Parser$Advanced$ignorer,
																	$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
																	$elm$parser$Parser$Advanced$symbol(
																		A2(
																			$elm$parser$Parser$Advanced$Token,
																			A2($elm$core$String$repeat, intended, ' '),
																			$elm$parser$Parser$ExpectingSymbol('Indentation')))),
																A2(
																	$elm$parser$Parser$Advanced$ignorer,
																	$elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
																	$dillonkearns$elm_markdown$Helpers$lineEndOrEnd)))),
														A2(
														$elm$parser$Parser$Advanced$map,
														function (block) {
															return $elm$parser$Parser$Advanced$Loop(block);
														},
														A2(
															$elm$parser$Parser$Advanced$andThen,
															$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
															$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser()))
													]));
										case 4:
											var _v12 = _v3.a;
											var _v13 = _v3.b;
											var _v14 = _v13.a;
											var tight = _v14.a;
											var intended = _v14.b;
											var marker = _v14.c;
											var order = _v14.d;
											var closeListItems = _v14.e;
											var openListItem = _v14.f;
											var rest = _v13.b;
											var completeOrMergeUnorderedListBlockBlankLine = F2(
												function (state, newString) {
													return _Utils_update(
														state,
														{
															b: A2(
																$elm$core$List$cons,
																$dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine,
																A2(
																	$elm$core$List$cons,
																	A6($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock, tight, intended, marker, order, closeListItems, openListItem + ('\n' + newString)),
																	rest))
														});
												});
											var completeOrMergeUnorderedListBlock = F2(
												function (state, newString) {
													return _Utils_update(
														state,
														{
															b: A2(
																$elm$core$List$cons,
																A6($dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock, tight, intended, marker, order, closeListItems, openListItem + ('\n' + newString)),
																rest)
														});
												});
											return ($elm$core$String$trim(openListItem) === '') ? A2(
												$elm$parser$Parser$Advanced$map,
												function (block) {
													return $elm$parser$Parser$Advanced$Loop(block);
												},
												A2(
													$elm$parser$Parser$Advanced$andThen,
													$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
													$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser())) : $elm$parser$Parser$Advanced$oneOf(
												_List_fromArray(
													[
														A2(
														$elm$parser$Parser$Advanced$map,
														function (block) {
															return $elm$parser$Parser$Advanced$Loop(block);
														},
														A2(
															$elm$parser$Parser$Advanced$map,
															function (_v15) {
																return A2(completeOrMergeUnorderedListBlockBlankLine, revStmts, '\n');
															},
															$dillonkearns$elm_markdown$Markdown$Parser$blankLine)),
														A2(
														$elm$parser$Parser$Advanced$map,
														function (block) {
															return $elm$parser$Parser$Advanced$Loop(block);
														},
														A2(
															$elm$parser$Parser$Advanced$map,
															completeOrMergeUnorderedListBlock(revStmts),
															A2(
																$elm$parser$Parser$Advanced$keeper,
																A2(
																	$elm$parser$Parser$Advanced$ignorer,
																	$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
																	$elm$parser$Parser$Advanced$symbol(
																		A2(
																			$elm$parser$Parser$Advanced$Token,
																			A2($elm$core$String$repeat, intended, ' '),
																			$elm$parser$Parser$ExpectingSymbol('Indentation')))),
																A2(
																	$elm$parser$Parser$Advanced$ignorer,
																	$elm$parser$Parser$Advanced$getChompedString($dillonkearns$elm_markdown$Helpers$chompUntilLineEndOrEnd),
																	$dillonkearns$elm_markdown$Helpers$lineEndOrEnd)))),
														A2(
														$elm$parser$Parser$Advanced$map,
														function (block) {
															return $elm$parser$Parser$Advanced$Loop(block);
														},
														A2(
															$elm$parser$Parser$Advanced$andThen,
															$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
															$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser()))
													]));
										default:
											break _v3$6;
									}
								} else {
									break _v3$6;
								}
							default:
								break _v3$6;
						}
					} else {
						break _v3$6;
					}
				}
				return A2(
					$elm$parser$Parser$Advanced$map,
					function (block) {
						return $elm$parser$Parser$Advanced$Loop(block);
					},
					A2(
						$elm$parser$Parser$Advanced$andThen,
						$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
						$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser()));
			}(),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (block) {
					return $elm$parser$Parser$Advanced$Loop(block);
				},
				A2(
					$elm$parser$Parser$Advanced$andThen,
					$dillonkearns$elm_markdown$Markdown$Parser$completeOrMergeBlocks(revStmts),
					$dillonkearns$elm_markdown$Markdown$Parser$openBlockOrParagraphParser))
			]));
};
var $dillonkearns$elm_markdown$Markdown$Parser$textNodeToBlocks = function (textNodeValue) {
	return A2(
		$elm$core$Result$withDefault,
		_List_Nil,
		$dillonkearns$elm_markdown$Markdown$Parser$parse(textNodeValue));
};
var $dillonkearns$elm_markdown$Markdown$Parser$xmlNodeToHtmlNode = function (xmlNode) {
	switch (xmlNode.$) {
		case 1:
			var innerText = xmlNode.a;
			return $elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$RawBlock$OpenBlockOrParagraph(innerText));
		case 0:
			var tag = xmlNode.a;
			var attributes = xmlNode.b;
			var children = xmlNode.c;
			var _v1 = $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocks(children);
			if (!_v1.$) {
				var parsedChildren = _v1.a;
				return $elm$parser$Parser$Advanced$succeed(
					$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
						A3($dillonkearns$elm_markdown$Markdown$Block$HtmlElement, tag, attributes, parsedChildren)));
			} else {
				var err = _v1.a;
				return $elm$parser$Parser$Advanced$problem(err);
			}
		case 2:
			var string = xmlNode.a;
			return $elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
					$dillonkearns$elm_markdown$Markdown$Block$HtmlComment(string)));
		case 3:
			var string = xmlNode.a;
			return $elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
					$dillonkearns$elm_markdown$Markdown$Block$Cdata(string)));
		case 4:
			var string = xmlNode.a;
			return $elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
					$dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction(string)));
		default:
			var declarationType = xmlNode.a;
			var content = xmlNode.b;
			return $elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
					A2($dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration, declarationType, content)));
	}
};
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser() {
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		$dillonkearns$elm_markdown$Markdown$Parser$completeBlocks,
		A2(
			$elm$parser$Parser$Advanced$loop,
			{a: _List_Nil, b: _List_Nil},
			$dillonkearns$elm_markdown$Markdown$Parser$stepRawBlock));
}
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser() {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock,
				$dillonkearns$elm_markdown$Markdown$Parser$blankLine,
				$dillonkearns$elm_markdown$Markdown$Parser$blockQuote,
				A2(
				$elm$parser$Parser$Advanced$map,
				$dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock,
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$CodeBlock$parser)),
				$dillonkearns$elm_markdown$Markdown$Parser$indentedCodeBlock,
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v40) {
					return $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak;
				},
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$ThematicBreak$parser)),
				$dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock(false),
				$dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock(false),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Heading$parser),
				$dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser()
			]));
}
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterOpenBlockOrParagraphParser() {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock,
				$dillonkearns$elm_markdown$Markdown$Parser$blankLine,
				$dillonkearns$elm_markdown$Markdown$Parser$blockQuote,
				A2(
				$elm$parser$Parser$Advanced$map,
				$dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock,
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$CodeBlock$parser)),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Parser$setextLineParser),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v39) {
					return $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak;
				},
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$ThematicBreak$parser)),
				$dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock(true),
				$dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock(true),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Heading$parser),
				$dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser(),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Parser$tableDelimiterInOpenParagraph)
			]));
}
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterList() {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock,
				$dillonkearns$elm_markdown$Markdown$Parser$blankLine,
				$dillonkearns$elm_markdown$Markdown$Parser$blockQuote,
				A2(
				$elm$parser$Parser$Advanced$map,
				$dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock,
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$CodeBlock$parser)),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v38) {
					return $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak;
				},
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$ThematicBreak$parser)),
				$dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock(false),
				$dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock(false),
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Heading$parser),
				$dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser()
			]));
}
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser() {
	return A2($elm$parser$Parser$Advanced$andThen, $dillonkearns$elm_markdown$Markdown$Parser$xmlNodeToHtmlNode, $dillonkearns$elm_markdown$HtmlParser$html);
}
var $dillonkearns$elm_markdown$Markdown$Parser$rawBlockParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser();
$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser = function () {
	return $dillonkearns$elm_markdown$Markdown$Parser$rawBlockParser;
};
var $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockNotAfterOpenBlockOrParagraphParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser();
$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockNotAfterOpenBlockOrParagraphParser = function () {
	return $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockNotAfterOpenBlockOrParagraphParser;
};
var $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockAfterOpenBlockOrParagraphParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterOpenBlockOrParagraphParser();
$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterOpenBlockOrParagraphParser = function () {
	return $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockAfterOpenBlockOrParagraphParser;
};
var $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockAfterList = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterList();
$dillonkearns$elm_markdown$Markdown$Parser$cyclic$mergeableBlockAfterList = function () {
	return $dillonkearns$elm_markdown$Markdown$Parser$mergeableBlockAfterList;
};
var $dillonkearns$elm_markdown$Markdown$Parser$htmlParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser();
$dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser = function () {
	return $dillonkearns$elm_markdown$Markdown$Parser$htmlParser;
};
var $elm$core$Result$map2 = F3(
	function (func, ra, rb) {
		if (ra.$ === 1) {
			var x = ra.a;
			return $elm$core$Result$Err(x);
		} else {
			var a = ra.a;
			if (rb.$ === 1) {
				var x = rb.a;
				return $elm$core$Result$Err(x);
			} else {
				var b = rb.a;
				return $elm$core$Result$Ok(
					A2(func, a, b));
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$combineResults = A2(
	$elm$core$List$foldr,
	$elm$core$Result$map2($elm$core$List$cons),
	$elm$core$Result$Ok(_List_Nil));
var $dillonkearns$elm_markdown$Markdown$Block$foldl = F3(
	function (_function, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var block = list.a;
				var remainingBlocks = list.b;
				switch (block.$) {
					case 0:
						var html = block.a;
						if (!html.$) {
							var children = html.c;
							var $temp$function = _function,
								$temp$acc = A2(_function, block, acc),
								$temp$list = _Utils_ap(children, remainingBlocks);
							_function = $temp$function;
							acc = $temp$acc;
							list = $temp$list;
							continue foldl;
						} else {
							var $temp$function = _function,
								$temp$acc = A2(_function, block, acc),
								$temp$list = remainingBlocks;
							_function = $temp$function;
							acc = $temp$acc;
							list = $temp$list;
							continue foldl;
						}
					case 1:
						var tight = block.a;
						var blocks = block.b;
						var childBlocks = A2(
							$elm$core$List$concatMap,
							function (_v3) {
								var children = _v3.b;
								return children;
							},
							blocks);
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = _Utils_ap(childBlocks, remainingBlocks);
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 2:
						var _int = block.b;
						var blocks = block.c;
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = _Utils_ap(
							$elm$core$List$concat(blocks),
							remainingBlocks);
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 3:
						var blocks = block.a;
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = _Utils_ap(blocks, remainingBlocks);
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 4:
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 5:
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 6:
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 7:
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					default:
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText = function (block) {
	switch (block.$) {
		case 5:
			var inlines = block.a;
			return $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines);
		case 0:
			var html = block.a;
			if (!html.$) {
				var blocks = html.c;
				return A3(
					$dillonkearns$elm_markdown$Markdown$Block$foldl,
					F2(
						function (nestedBlock, soFar) {
							return _Utils_ap(
								soFar,
								$dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText(nestedBlock));
						}),
					'',
					blocks);
			} else {
				return '';
			}
		case 1:
			var tight = block.a;
			var items = block.b;
			return A2(
				$elm$core$String$join,
				'\n',
				A2(
					$elm$core$List$map,
					function (_v4) {
						var task = _v4.a;
						var blocks = _v4.b;
						return A2(
							$elm$core$String$join,
							'\n',
							A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText, blocks));
					},
					items));
		case 2:
			var tight = block.a;
			var _int = block.b;
			var items = block.c;
			return A2(
				$elm$core$String$join,
				'\n',
				A2(
					$elm$core$List$map,
					function (blocks) {
						return A2(
							$elm$core$String$join,
							'\n',
							A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText, blocks));
					},
					items));
		case 3:
			var blocks = block.a;
			return A2(
				$elm$core$String$join,
				'\n',
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText, blocks));
		case 4:
			var headingLevel = block.a;
			var inlines = block.b;
			return $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines);
		case 6:
			var header = block.a;
			var rows = block.b;
			return A2(
				$elm$core$String$join,
				'\n',
				$elm$core$List$concat(
					_List_fromArray(
						[
							A2(
							$elm$core$List$map,
							$dillonkearns$elm_markdown$Markdown$Block$extractInlineText,
							A2(
								$elm$core$List$map,
								function ($) {
									return $.S;
								},
								header)),
							$elm$core$List$concat(
							A2(
								$elm$core$List$map,
								$elm$core$List$map($dillonkearns$elm_markdown$Markdown$Block$extractInlineText),
								rows))
						])));
		case 7:
			var body = block.a.bk;
			return body;
		default:
			return '';
	}
};
var $dillonkearns$elm_markdown$Markdown$Block$extractInlineText = function (inlines) {
	return A3($elm$core$List$foldl, $dillonkearns$elm_markdown$Markdown$Block$extractTextHelp, '', inlines);
};
var $dillonkearns$elm_markdown$Markdown$Block$extractTextHelp = F2(
	function (inline, text) {
		switch (inline.$) {
			case 7:
				var str = inline.a;
				return _Utils_ap(text, str);
			case 8:
				return text + ' ';
			case 6:
				var str = inline.a;
				return _Utils_ap(text, str);
			case 1:
				var inlines = inline.c;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
			case 2:
				var inlines = inline.c;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
			case 0:
				var html = inline.a;
				if (!html.$) {
					var blocks = html.c;
					return A3(
						$dillonkearns$elm_markdown$Markdown$Block$foldl,
						F2(
							function (block, soFar) {
								return _Utils_ap(
									soFar,
									$dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText(block));
							}),
						text,
						blocks);
				} else {
					return text;
				}
			case 4:
				var inlines = inline.a;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
			case 3:
				var inlines = inline.a;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
			default:
				var inlines = inline.a;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
		}
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderHtml = F5(
	function (tagName, attributes, children, _v0, renderedChildren) {
		var htmlRenderer = _v0;
		return A2(
			$elm$core$Result$andThen,
			function (okChildren) {
				return A2(
					$elm$core$Result$map,
					function (myRenderer) {
						return myRenderer(okChildren);
					},
					A3(htmlRenderer, tagName, attributes, children));
			},
			$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(renderedChildren));
	});
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $dillonkearns$elm_markdown$Markdown$Renderer$foldThing = F3(
	function (renderer, topLevelInline, soFar) {
		var _v12 = A2($dillonkearns$elm_markdown$Markdown$Renderer$renderSingleInline, renderer, topLevelInline);
		if (!_v12.$) {
			var inline = _v12.a;
			return A2($elm$core$List$cons, inline, soFar);
		} else {
			return soFar;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderHelper = F2(
	function (renderer, blocks) {
		return A2(
			$elm$core$List$filterMap,
			$dillonkearns$elm_markdown$Markdown$Renderer$renderHelperSingle(renderer),
			blocks);
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderHelperSingle = function (renderer) {
	return function (block) {
		switch (block.$) {
			case 4:
				var level = block.a;
				var content = block.b;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						function (children) {
							return renderer.aS(
								{
									bm: children,
									bC: level,
									cE: $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(content)
								});
						},
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, content)));
			case 5:
				var content = block.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.a1,
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, content)));
			case 0:
				var html = block.a;
				if (!html.$) {
					var tag = html.a;
					var attributes = html.b;
					var children = html.c;
					return $elm$core$Maybe$Just(
						A4($dillonkearns$elm_markdown$Markdown$Renderer$renderHtmlNode, renderer, tag, attributes, children));
				} else {
					return $elm$core$Maybe$Nothing;
				}
			case 1:
				var tight = block.a;
				var items = block.b;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						function (listItems) {
							return renderer.bg(
								A2(
									$elm$core$List$map,
									function (_v7) {
										var task = _v7.a;
										var children = _v7.b;
										return A2(
											$dillonkearns$elm_markdown$Markdown$Block$ListItem,
											task,
											$elm$core$List$concat(children));
									},
									listItems));
						},
						$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
							A2(
								$elm$core$List$map,
								function (_v4) {
									var task = _v4.a;
									var children = _v4.b;
									return A2(
										$elm$core$Result$map,
										$dillonkearns$elm_markdown$Markdown$Block$ListItem(task),
										$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
											function (blocks) {
												return A2(
													$elm$core$List$filterMap,
													function (listItemBlock) {
														var _v5 = _Utils_Tuple2(tight, listItemBlock);
														if ((_v5.a === 1) && (_v5.b.$ === 5)) {
															var _v6 = _v5.a;
															var content = _v5.b.a;
															return $elm$core$Maybe$Just(
																A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, content));
														} else {
															return A2(
																$elm$core$Maybe$map,
																$elm$core$Result$map($elm$core$List$singleton),
																A2($dillonkearns$elm_markdown$Markdown$Renderer$renderHelperSingle, renderer, listItemBlock));
														}
													},
													blocks);
											}(children)));
								},
								items))));
			case 2:
				var tight = block.a;
				var startingIndex = block.b;
				var items = block.c;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						function (listItems) {
							return A2(
								renderer.a0,
								startingIndex,
								A2(
									$elm$core$List$map,
									function (children) {
										return $elm$core$List$concat(children);
									},
									listItems));
						},
						$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
							A2(
								$elm$core$List$map,
								function (itemsblocks) {
									return $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
										function (blocks) {
											return A2(
												$elm$core$List$filterMap,
												function (listItemBlock) {
													var _v8 = _Utils_Tuple2(tight, listItemBlock);
													if ((_v8.a === 1) && (_v8.b.$ === 5)) {
														var _v9 = _v8.a;
														var content = _v8.b.a;
														return $elm$core$Maybe$Just(
															A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, content));
													} else {
														return A2(
															$elm$core$Maybe$map,
															$elm$core$Result$map($elm$core$List$singleton),
															A2($dillonkearns$elm_markdown$Markdown$Renderer$renderHelperSingle, renderer, listItemBlock));
													}
												},
												blocks);
										}(itemsblocks));
								},
								items))));
			case 7:
				var codeBlock = block.a;
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(
						renderer.aM(codeBlock)));
			case 8:
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(renderer.bf));
			case 3:
				var nestedBlocks = block.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.aL,
						$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
							A2($dillonkearns$elm_markdown$Markdown$Renderer$renderHelper, renderer, nestedBlocks))));
			default:
				var header = block.a;
				var rows = block.b;
				var renderedHeaderCells = $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
					A2(
						$elm$core$List$map,
						function (_v11) {
							var label = _v11.S;
							var alignment = _v11.ax;
							return A2(
								$elm$core$Result$map,
								$elm$core$Tuple$pair(alignment),
								A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, label));
						},
						header));
				var renderedHeader = A2(
					$elm$core$Result$map,
					function (listListView) {
						return renderer.bd(
							$elm$core$List$singleton(
								renderer.aH(
									A2(
										$elm$core$List$map,
										function (_v10) {
											var maybeAlignment = _v10.a;
											var item = _v10.b;
											return A2(renderer.be, maybeAlignment, item);
										},
										listListView))));
					},
					renderedHeaderCells);
				var renderedBody = function (r) {
					return $elm$core$List$isEmpty(r) ? _List_Nil : _List_fromArray(
						[
							renderer.bb(r)
						]);
				};
				var alignmentForColumn = function (columnIndex) {
					return A2(
						$elm$core$Maybe$andThen,
						function ($) {
							return $.ax;
						},
						$elm$core$List$head(
							A2($elm$core$List$drop, columnIndex, header)));
				};
				var renderRow = function (cells) {
					return A2(
						$elm$core$Result$map,
						renderer.aH,
						A2(
							$elm$core$Result$map,
							$elm$core$List$indexedMap(
								F2(
									function (index, cell) {
										return A2(
											renderer.bc,
											alignmentForColumn(index),
											cell);
									})),
							$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
								A2(
									$elm$core$List$map,
									$dillonkearns$elm_markdown$Markdown$Renderer$renderStyled(renderer),
									cells))));
				};
				var renderedRows = $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
					A2($elm$core$List$map, renderRow, rows));
				return $elm$core$Maybe$Just(
					A3(
						$elm$core$Result$map2,
						F2(
							function (h, r) {
								return renderer.ba(
									A2(
										$elm$core$List$cons,
										h,
										renderedBody(r)));
							}),
						renderedHeader,
						renderedRows));
		}
	};
};
var $dillonkearns$elm_markdown$Markdown$Renderer$renderHtmlNode = F4(
	function (renderer, tag, attributes, children) {
		return A5(
			$dillonkearns$elm_markdown$Markdown$Renderer$renderHtml,
			tag,
			attributes,
			children,
			renderer.cl,
			A2($dillonkearns$elm_markdown$Markdown$Renderer$renderHelper, renderer, children));
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderSingleInline = F2(
	function (renderer, inline) {
		switch (inline.$) {
			case 4:
				var innerInlines = inline.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.a8,
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, innerInlines)));
			case 3:
				var innerInlines = inline.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.aP,
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, innerInlines)));
			case 5:
				var innerInlines = inline.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.a7,
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, innerInlines)));
			case 2:
				var src = inline.a;
				var title = inline.b;
				var children = inline.c;
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(
						renderer.aT(
							{
								aK: $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(children),
								a5: src,
								bW: title
							})));
			case 7:
				var string = inline.a;
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(
						renderer.j(string)));
			case 6:
				var string = inline.a;
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(
						renderer.aN(string)));
			case 1:
				var destination = inline.a;
				var title = inline.b;
				var inlines = inline.c;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$andThen,
						function (children) {
							return $elm$core$Result$Ok(
								A2(
									renderer.aX,
									{cb: destination, bW: title},
									children));
						},
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, inlines)));
			case 8:
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(renderer.aR));
			default:
				var html = inline.a;
				if (!html.$) {
					var tag = html.a;
					var attributes = html.b;
					var children = html.c;
					return $elm$core$Maybe$Just(
						A4($dillonkearns$elm_markdown$Markdown$Renderer$renderHtmlNode, renderer, tag, attributes, children));
				} else {
					return $elm$core$Maybe$Nothing;
				}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderStyled = F2(
	function (renderer, styledStrings) {
		return $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
			A3(
				$elm$core$List$foldr,
				$dillonkearns$elm_markdown$Markdown$Renderer$foldThing(renderer),
				_List_Nil,
				styledStrings));
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$render = F2(
	function (renderer, ast) {
		return $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
			A2($dillonkearns$elm_markdown$Markdown$Renderer$renderHelper, renderer, ast));
	});
var $elm$html$Html$Attributes$align = $elm$html$Html$Attributes$stringProperty('align');
var $elm$html$Html$Attributes$alt = $elm$html$Html$Attributes$stringProperty('alt');
var $elm$html$Html$blockquote = _VirtualDom_node('blockquote');
var $elm$html$Html$br = _VirtualDom_node('br');
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$checked = $elm$html$Html$Attributes$boolProperty('checked');
var $elm$html$Html$del = _VirtualDom_node('del');
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $elm$html$Html$em = _VirtualDom_node('em');
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $elm$html$Html$h4 = _VirtualDom_node('h4');
var $elm$html$Html$h5 = _VirtualDom_node('h5');
var $elm$html$Html$h6 = _VirtualDom_node('h6');
var $elm$html$Html$hr = _VirtualDom_node('hr');
var $elm$html$Html$img = _VirtualDom_node('img');
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$html$Html$ol = _VirtualDom_node('ol');
var $dillonkearns$elm_markdown$Markdown$HtmlRenderer$HtmlRenderer = $elm$core$Basics$identity;
var $dillonkearns$elm_markdown$Markdown$Html$resultOr = F2(
	function (ra, rb) {
		if (ra.$ === 1) {
			var singleError = ra.a;
			if (!rb.$) {
				var okValue = rb.a;
				return $elm$core$Result$Ok(okValue);
			} else {
				var errorsSoFar = rb.a;
				return $elm$core$Result$Err(
					A2($elm$core$List$cons, singleError, errorsSoFar));
			}
		} else {
			var okValue = ra.a;
			return $elm$core$Result$Ok(okValue);
		}
	});
var $dillonkearns$elm_markdown$Markdown$Html$attributesToString = function (attributes) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$map,
			function (_v0) {
				var name = _v0.aZ;
				var value = _v0.bh;
				return name + ('=\"' + (value + '\"'));
			},
			attributes));
};
var $dillonkearns$elm_markdown$Markdown$Html$tagToString = F2(
	function (tagName, attributes) {
		return $elm$core$List$isEmpty(attributes) ? ('<' + (tagName + '>')) : ('<' + (tagName + (' ' + ($dillonkearns$elm_markdown$Markdown$Html$attributesToString(attributes) + '>'))));
	});
var $dillonkearns$elm_markdown$Markdown$Html$oneOf = function (decoders) {
	var unwrappedDecoders = A2(
		$elm$core$List$map,
		function (_v1) {
			var rawDecoder = _v1;
			return rawDecoder;
		},
		decoders);
	return function (rawDecoder) {
		return F3(
			function (tagName, attributes, innerBlocks) {
				return A2(
					$elm$core$Result$mapError,
					function (errors) {
						if (!errors.b) {
							return 'Ran into a oneOf with no possibilities!';
						} else {
							if (!errors.b.b) {
								var singleError = errors.a;
								return 'Problem with the given value:\n\n' + (A2($dillonkearns$elm_markdown$Markdown$Html$tagToString, tagName, attributes) + ('\n\n' + (singleError + '\n')));
							} else {
								return 'oneOf failed parsing this value:\n    ' + (A2($dillonkearns$elm_markdown$Markdown$Html$tagToString, tagName, attributes) + ('\n\nParsing failed in the following 2 ways:\n\n\n' + (A2(
									$elm$core$String$join,
									'\n\n',
									A2(
										$elm$core$List$indexedMap,
										F2(
											function (index, error) {
												return '(' + ($elm$core$String$fromInt(index + 1) + (') ' + error));
											}),
										errors)) + '\n')));
							}
						}
					},
					A3(rawDecoder, tagName, attributes, innerBlocks));
			});
	}(
		A3(
			$elm$core$List$foldl,
			F2(
				function (decoder, soFar) {
					return F3(
						function (tagName, attributes, children) {
							return A2(
								$dillonkearns$elm_markdown$Markdown$Html$resultOr,
								A3(decoder, tagName, attributes, children),
								A3(soFar, tagName, attributes, children));
						});
				}),
			F3(
				function (tagName, attributes, children) {
					return $elm$core$Result$Err(_List_Nil);
				}),
			unwrappedDecoders));
};
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $elm$html$Html$Attributes$start = function (n) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'start',
		$elm$core$String$fromInt(n));
};
var $elm$html$Html$strong = _VirtualDom_node('strong');
var $elm$html$Html$table = _VirtualDom_node('table');
var $elm$html$Html$tbody = _VirtualDom_node('tbody');
var $elm$html$Html$td = _VirtualDom_node('td');
var $elm$html$Html$th = _VirtualDom_node('th');
var $elm$html$Html$thead = _VirtualDom_node('thead');
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $elm$core$String$words = _String_words;
var $dillonkearns$elm_markdown$Markdown$Renderer$defaultHtmlRenderer = {
	aL: $elm$html$Html$blockquote(_List_Nil),
	aM: function (_v0) {
		var body = _v0.bk;
		var language = _v0.cq;
		var classes = function () {
			var _v1 = A2($elm$core$Maybe$map, $elm$core$String$words, language);
			if ((!_v1.$) && _v1.a.b) {
				var _v2 = _v1.a;
				var actualLanguage = _v2.a;
				return _List_fromArray(
					[
						$elm$html$Html$Attributes$class('language-' + actualLanguage)
					]);
			} else {
				return _List_Nil;
			}
		}();
		return A2(
			$elm$html$Html$pre,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$code,
					classes,
					_List_fromArray(
						[
							$elm$html$Html$text(body)
						]))
				]));
	},
	aN: function (content) {
		return A2(
			$elm$html$Html$code,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text(content)
				]));
	},
	aP: function (children) {
		return A2($elm$html$Html$em, _List_Nil, children);
	},
	aR: A2($elm$html$Html$br, _List_Nil, _List_Nil),
	aS: function (_v3) {
		var level = _v3.bC;
		var children = _v3.bm;
		switch (level) {
			case 0:
				return A2($elm$html$Html$h1, _List_Nil, children);
			case 1:
				return A2($elm$html$Html$h2, _List_Nil, children);
			case 2:
				return A2($elm$html$Html$h3, _List_Nil, children);
			case 3:
				return A2($elm$html$Html$h4, _List_Nil, children);
			case 4:
				return A2($elm$html$Html$h5, _List_Nil, children);
			default:
				return A2($elm$html$Html$h6, _List_Nil, children);
		}
	},
	cl: $dillonkearns$elm_markdown$Markdown$Html$oneOf(_List_Nil),
	aT: function (imageInfo) {
		var _v5 = imageInfo.bW;
		if (!_v5.$) {
			var title = _v5.a;
			return A2(
				$elm$html$Html$img,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$src(imageInfo.a5),
						$elm$html$Html$Attributes$alt(imageInfo.aK),
						$elm$html$Html$Attributes$title(title)
					]),
				_List_Nil);
		} else {
			return A2(
				$elm$html$Html$img,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$src(imageInfo.a5),
						$elm$html$Html$Attributes$alt(imageInfo.aK)
					]),
				_List_Nil);
		}
	},
	aX: F2(
		function (link, content) {
			var _v6 = link.bW;
			if (!_v6.$) {
				var title = _v6.a;
				return A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href(link.cb),
							$elm$html$Html$Attributes$title(title)
						]),
					content);
			} else {
				return A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href(link.cb)
						]),
					content);
			}
		}),
	a0: F2(
		function (startingIndex, items) {
			return A2(
				$elm$html$Html$ol,
				function () {
					if (startingIndex === 1) {
						return _List_fromArray(
							[
								$elm$html$Html$Attributes$start(startingIndex)
							]);
					} else {
						return _List_Nil;
					}
				}(),
				A2(
					$elm$core$List$map,
					function (itemBlocks) {
						return A2($elm$html$Html$li, _List_Nil, itemBlocks);
					},
					items));
		}),
	a1: $elm$html$Html$p(_List_Nil),
	a7: function (children) {
		return A2($elm$html$Html$del, _List_Nil, children);
	},
	a8: function (children) {
		return A2($elm$html$Html$strong, _List_Nil, children);
	},
	ba: $elm$html$Html$table(_List_Nil),
	bb: $elm$html$Html$tbody(_List_Nil),
	bc: function (maybeAlignment) {
		var attrs = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				$elm$core$List$singleton,
				A2(
					$elm$core$Maybe$map,
					$elm$html$Html$Attributes$align,
					A2(
						$elm$core$Maybe$map,
						function (alignment) {
							switch (alignment) {
								case 0:
									return 'left';
								case 2:
									return 'center';
								default:
									return 'right';
							}
						},
						maybeAlignment))));
		return $elm$html$Html$td(attrs);
	},
	bd: $elm$html$Html$thead(_List_Nil),
	be: function (maybeAlignment) {
		var attrs = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				$elm$core$List$singleton,
				A2(
					$elm$core$Maybe$map,
					$elm$html$Html$Attributes$align,
					A2(
						$elm$core$Maybe$map,
						function (alignment) {
							switch (alignment) {
								case 0:
									return 'left';
								case 2:
									return 'center';
								default:
									return 'right';
							}
						},
						maybeAlignment))));
		return $elm$html$Html$th(attrs);
	},
	aH: $elm$html$Html$tr(_List_Nil),
	j: $elm$html$Html$text,
	bf: A2($elm$html$Html$hr, _List_Nil, _List_Nil),
	bg: function (items) {
		return A2(
			$elm$html$Html$ul,
			_List_Nil,
			A2(
				$elm$core$List$map,
				function (item) {
					var task = item.a;
					var children = item.b;
					var checkbox = function () {
						switch (task) {
							case 0:
								return $elm$html$Html$text('');
							case 1:
								return A2(
									$elm$html$Html$input,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$disabled(true),
											$elm$html$Html$Attributes$checked(false),
											$elm$html$Html$Attributes$type_('checkbox')
										]),
									_List_Nil);
							default:
								return A2(
									$elm$html$Html$input,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$disabled(true),
											$elm$html$Html$Attributes$checked(true),
											$elm$html$Html$Attributes$type_('checkbox')
										]),
									_List_Nil);
						}
					}();
					return A2(
						$elm$html$Html$li,
						_List_Nil,
						A2($elm$core$List$cons, checkbox, children));
				},
				items));
	}
};
var $dillonkearns$elm_markdown$Markdown$Html$tag = F2(
	function (expectedTag, a) {
		return F3(
			function (tagName, attributes, children) {
				return _Utils_eq(tagName, expectedTag) ? $elm$core$Result$Ok(a) : $elm$core$Result$Err('Expected ' + (expectedTag + (' but was ' + tagName)));
			});
	});
var $author$project$Lib$Markdown$renderer = _Utils_update(
	$dillonkearns$elm_markdown$Markdown$Renderer$defaultHtmlRenderer,
	{
		cl: $dillonkearns$elm_markdown$Markdown$Html$oneOf(
			_List_fromArray(
				[
					A2(
					$dillonkearns$elm_markdown$Markdown$Html$tag,
					'simple',
					$elm$html$Html$div(_List_Nil))
				]))
	});
var $author$project$Lib$Markdown$simple = function (md) {
	return function (res) {
		if (!res.$) {
			var html = res.a;
			return html;
		} else {
			var error = res.a;
			return _List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('alert alert-danger')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(error)
						]))
				]);
		}
	}(
		A2(
			$elm$core$Result$andThen,
			$dillonkearns$elm_markdown$Markdown$Renderer$render($author$project$Lib$Markdown$renderer),
			A2(
				$elm$core$Result$mapError,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$List$map($dillonkearns$elm_markdown$Markdown$Parser$deadEndToString),
					$elm$core$String$join('\n')),
				$dillonkearns$elm_markdown$Markdown$Parser$parse('<simple>' + (md + '</simple>')))));
};
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Add = 1;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Del = 2;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Normal = 0;
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$requiredStyleToString = function (required) {
	return 'elmsh' + function () {
		switch (required) {
			case 0:
				return '0';
			case 1:
				return '-comm';
			case 2:
				return '1';
			case 3:
				return '2';
			case 4:
				return '3';
			case 5:
				return '4';
			case 6:
				return '5';
			case 7:
				return '6';
			default:
				return '7';
		}
	}();
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$fragmentView = function (_v0) {
	var text = _v0.j;
	var requiredStyle = _v0.cG;
	var additionalClass = _v0.b1;
	return ((!requiredStyle) && $elm$core$String$isEmpty(additionalClass)) ? $elm$html$Html$text(text) : A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$requiredStyleToString(requiredStyle),
						!(!requiredStyle)),
						_Utils_Tuple2('elmsh-' + additionalClass, additionalClass !== '')
					]))
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(text)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$lineView = F3(
	function (start, index, _v0) {
		var fragments = _v0.ci;
		var highlight = _v0.P;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('elmsh-line', true),
							_Utils_Tuple2(
							'elmsh-hl',
							_Utils_eq(
								highlight,
								$elm$core$Maybe$Just(0))),
							_Utils_Tuple2(
							'elmsh-add',
							_Utils_eq(
								highlight,
								$elm$core$Maybe$Just(1))),
							_Utils_Tuple2(
							'elmsh-del',
							_Utils_eq(
								highlight,
								$elm$core$Maybe$Just(2)))
						])),
					A2(
					$elm$html$Html$Attributes$attribute,
					'data-elmsh-lc',
					$elm$core$String$fromInt(start + index))
				]),
			A2($elm$core$List$map, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$fragmentView, fragments));
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$toInlineHtml = function (lines) {
	return A2(
		$elm$html$Html$code,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('elmsh')
			]),
		$elm$core$List$concat(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var highlight = _v0.P;
					var fragments = _v0.ci;
					return _Utils_eq(highlight, $elm$core$Maybe$Nothing) ? A2($elm$core$List$map, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$fragmentView, fragments) : _List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$classList(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'elmsh-hl',
											_Utils_eq(
												highlight,
												$elm$core$Maybe$Just(0))),
											_Utils_Tuple2(
											'elmsh-add',
											_Utils_eq(
												highlight,
												$elm$core$Maybe$Just(1))),
											_Utils_Tuple2(
											'elmsh-del',
											_Utils_eq(
												highlight,
												$elm$core$Maybe$Just(2)))
										]))
								]),
							A2($elm$core$List$map, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$fragmentView, fragments))
						]);
				},
				lines)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$toBlockHtml = F2(
	function (maybeStart, lines) {
		if (maybeStart.$ === 1) {
			return A2(
				$elm$html$Html$pre,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('elmsh')
					]),
				_List_fromArray(
					[
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$toInlineHtml(lines)
					]));
		} else {
			var start = maybeStart.a;
			return A2(
				$elm$html$Html$pre,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('elmsh')
					]),
				$elm$core$List$singleton(
					A2(
						$elm$html$Html$code,
						_List_Nil,
						A2(
							$elm$core$List$indexedMap,
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$lineView(start),
							lines))));
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toBlockHtml = F2(
	function (maybeStart, _v0) {
		var lines = _v0;
		return A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$toBlockHtml, maybeStart, lines);
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$useTheme = function (_v0) {
	var theme = _v0;
	return A3(
		$elm$html$Html$node,
		'style',
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text(theme)
			]));
};
var $author$project$Pages$Day$view = function (_v0) {
	var day = _v0.aO;
	var sourceCode = _v0.aj;
	var _v1 = $author$project$Pages$Day$getDayData(day);
	if (!_v1.$) {
		var dayData = _v1.a;
		return {
			bk: _List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('row')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('col-lg-6')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h2,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text(
											$author$project$Pages$Day$extractTitle(dayData.cz))
										])),
									A2(
									$elm$html$Html$p,
									_List_Nil,
									_List_fromArray(
										[
											A2(
											$elm$html$Html$a,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$href(
													$author$project$Pages$Day$adventOfCodeSource(day)),
													$elm$html$Html$Attributes$target('_blank')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('View original')
												]))
										])),
									A2(
									$elm$html$Html$div,
									_List_Nil,
									$author$project$Lib$Markdown$simple(dayData.cz))
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('col-lg-6')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h3,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('fs-2')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Answer')
										])),
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('card mb-3')
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$pre,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('card-body pb-0'),
													A2($elm$html$Html$Attributes$style, 'white-space', 'pre-wrap')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text(dayData.b3)
												]))
										])),
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('card')
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$div,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('card-header d-flex justify-content-between')
												]),
											_List_fromArray(
												[
													A2(
													$elm$html$Html$span,
													_List_Nil,
													_List_fromArray(
														[
															$elm$html$Html$text('Source code ')
														])),
													A2(
													$elm$html$Html$a,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$href(
															$author$project$Pages$Day$githubSource(day)),
															$elm$html$Html$Attributes$target('_blank')
														]),
													_List_fromArray(
														[
															$elm$html$Html$text('Open on Github')
														]))
												])),
											A2(
											$elm$html$Html$div,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('card-body pb-0')
												]),
											_List_fromArray(
												[
													$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$useTheme($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$oneDark),
													A2(
													$elm$core$Result$withDefault,
													A2(
														$elm$html$Html$pre,
														_List_Nil,
														_List_fromArray(
															[
																A2(
																$elm$html$Html$code,
																_List_Nil,
																_List_fromArray(
																	[
																		$elm$html$Html$text(sourceCode)
																	]))
															])),
													A2(
														$elm$core$Result$map,
														$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toBlockHtml($elm$core$Maybe$Nothing),
														$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$elm(sourceCode))),
													A3(
													$elm$html$Html$node,
													'style',
													_List_Nil,
													_List_fromArray(
														[
															$elm$html$Html$text('.elmsh { background: none; font-size: .9em; }')
														]))
												]))
										]))
								]))
						]))
				]),
			bW: $author$project$Pages$Day$extractTitle(dayData.cz)
		};
	} else {
		var error = _v1.a;
		return {
			bk: _List_fromArray(
				[
					A2(
					$elm$html$Html$h2,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							'Day #' + ($elm$core$String$fromInt(day) + ': error'))
						])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(error)
						]))
				]),
			bW: 'Day #' + ($elm$core$String$fromInt(day) + ': error')
		};
	}
};
var $author$project$Pages$Day$page = function (_v0) {
	return $orus_io$elm_spa$Spa$Page$element(
		{
			cn: $author$project$Pages$Day$init,
			cN: function (_v1) {
				return $elm$core$Platform$Sub$none;
			},
			cR: $author$project$Pages$Day$update,
			cT: $author$project$Pages$Day$view
		});
};
var $author$project$Pages$Home$view = function (_v0) {
	return {
		bk: $author$project$Lib$Markdown$simple('This is [my](https://nicolas.perriault.net/) attempt at the 2021\n        [Advent of Code](https://adventofcode.com/) in [Elm](https://elm-lang.org/).\n        '),
		bW: 'Home'
	};
};
var $author$project$Pages$Home$page = function (_v0) {
	return $orus_io$elm_spa$Spa$Page$element(
		{
			cn: function (_v1) {
				return A2(
					$orus_io$elm_spa$Effect$withShared,
					$author$project$Shared$setCurrentDay($elm$core$Maybe$Nothing),
					0);
			},
			cN: $elm$core$Basics$always($elm$core$Platform$Sub$none),
			cR: F2(
				function (_v2, _v3) {
					return _Utils_Tuple2(0, $orus_io$elm_spa$Effect$none);
				}),
			cT: $author$project$Pages$Home$view
		});
};
var $author$project$Shared$subscriptions = $elm$core$Basics$always($elm$core$Platform$Sub$none);
var $author$project$Route$Day = function (a) {
	return {$: 1, a: a};
};
var $author$project$Pages$Day$hasDayData = function (day) {
	var _v0 = $author$project$Pages$Day$getDayData(day);
	if (!_v0.$) {
		return true;
	} else {
		return false;
	}
};
var $author$project$Route$toUrl = function (r) {
	switch (r.$) {
		case 0:
			return '/';
		case 1:
			var day = r.a;
			return '/day/' + $elm$core$String$fromInt(day);
		default:
			var url = r.a;
			return $elm$url$Url$toString(url);
	}
};
var $author$project$Main$dayMenu = function (currentDay) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('list-group')
			]),
		A2(
			$elm$core$List$map,
			function (day) {
				return $author$project$Pages$Day$hasDayData(day) ? A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('list-group-item list-group-item-action fw-bold'),
							$elm$html$Html$Attributes$classList(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'active',
									_Utils_eq(
										currentDay,
										$elm$core$Maybe$Just(day)))
								])),
							$elm$html$Html$Attributes$href(
							'#' + $author$project$Route$toUrl(
								$author$project$Route$Day(day)))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							'Day #' + $elm$core$String$fromInt(day))
						])) : A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('list-group-item list-group-item-action disabled'),
							A2($elm$html$Html$Attributes$style, 'text-decoration', 'line-through')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							'Day #' + $elm$core$String$fromInt(day))
						]));
			},
			A2($elm$core$List$range, 1, 31)));
};
var $author$project$Main$toDocument = F2(
	function (_v0, view) {
		var currentDay = _v0.b8;
		return {
			bk: _List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('container mb-5')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('my-5')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$a,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$href(
											$author$project$Route$toUrl($author$project$Route$Home))
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Advent of Code 2021, in Elm')
										]))
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('row')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('col-md-10')
										]),
									view.bk),
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('col-md-2')
										]),
									_List_fromArray(
										[
											$author$project$Main$dayMenu(currentDay)
										]))
								]))
						]))
				]),
			bW: view.bW + ' | Elm Advent of Code 2021'
		};
	});
var $author$project$Route$NotFound = function (a) {
	return {$: 2, a: a};
};
var $elm$url$Url$Parser$State = F5(
	function (visited, unvisited, params, frag, value) {
		return {J: frag, K: params, H: unvisited, bh: value, M: visited};
	});
var $elm$url$Url$Parser$getFirstMatch = function (states) {
	getFirstMatch:
	while (true) {
		if (!states.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var state = states.a;
			var rest = states.b;
			var _v1 = state.H;
			if (!_v1.b) {
				return $elm$core$Maybe$Just(state.bh);
			} else {
				if ((_v1.a === '') && (!_v1.b.b)) {
					return $elm$core$Maybe$Just(state.bh);
				} else {
					var $temp$states = rest;
					states = $temp$states;
					continue getFirstMatch;
				}
			}
		}
	}
};
var $elm$url$Url$Parser$removeFinalEmpty = function (segments) {
	if (!segments.b) {
		return _List_Nil;
	} else {
		if ((segments.a === '') && (!segments.b.b)) {
			return _List_Nil;
		} else {
			var segment = segments.a;
			var rest = segments.b;
			return A2(
				$elm$core$List$cons,
				segment,
				$elm$url$Url$Parser$removeFinalEmpty(rest));
		}
	}
};
var $elm$url$Url$Parser$preparePath = function (path) {
	var _v0 = A2($elm$core$String$split, '/', path);
	if (_v0.b && (_v0.a === '')) {
		var segments = _v0.b;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	} else {
		var segments = _v0;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	}
};
var $elm$url$Url$Parser$addToParametersHelp = F2(
	function (value, maybeList) {
		if (maybeList.$ === 1) {
			return $elm$core$Maybe$Just(
				_List_fromArray(
					[value]));
		} else {
			var list = maybeList.a;
			return $elm$core$Maybe$Just(
				A2($elm$core$List$cons, value, list));
		}
	});
var $elm$url$Url$Parser$addParam = F2(
	function (segment, dict) {
		var _v0 = A2($elm$core$String$split, '=', segment);
		if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
			var rawKey = _v0.a;
			var _v1 = _v0.b;
			var rawValue = _v1.a;
			var _v2 = $elm$url$Url$percentDecode(rawKey);
			if (_v2.$ === 1) {
				return dict;
			} else {
				var key = _v2.a;
				var _v3 = $elm$url$Url$percentDecode(rawValue);
				if (_v3.$ === 1) {
					return dict;
				} else {
					var value = _v3.a;
					return A3(
						$elm$core$Dict$update,
						key,
						$elm$url$Url$Parser$addToParametersHelp(value),
						dict);
				}
			}
		} else {
			return dict;
		}
	});
var $elm$url$Url$Parser$prepareQuery = function (maybeQuery) {
	if (maybeQuery.$ === 1) {
		return $elm$core$Dict$empty;
	} else {
		var qry = maybeQuery.a;
		return A3(
			$elm$core$List$foldr,
			$elm$url$Url$Parser$addParam,
			$elm$core$Dict$empty,
			A2($elm$core$String$split, '&', qry));
	}
};
var $elm$url$Url$Parser$parse = F2(
	function (_v0, url) {
		var parser = _v0;
		return $elm$url$Url$Parser$getFirstMatch(
			parser(
				A5(
					$elm$url$Url$Parser$State,
					_List_Nil,
					$elm$url$Url$Parser$preparePath(url.bF),
					$elm$url$Url$Parser$prepareQuery(url.bJ),
					url.ch,
					$elm$core$Basics$identity)));
	});
var $elm$url$Url$Parser$Parser = $elm$core$Basics$identity;
var $elm$url$Url$Parser$custom = F2(
	function (tipe, stringToSomething) {
		return function (_v0) {
			var visited = _v0.M;
			var unvisited = _v0.H;
			var params = _v0.K;
			var frag = _v0.J;
			var value = _v0.bh;
			if (!unvisited.b) {
				return _List_Nil;
			} else {
				var next = unvisited.a;
				var rest = unvisited.b;
				var _v2 = stringToSomething(next);
				if (!_v2.$) {
					var nextValue = _v2.a;
					return _List_fromArray(
						[
							A5(
							$elm$url$Url$Parser$State,
							A2($elm$core$List$cons, next, visited),
							rest,
							params,
							frag,
							value(nextValue))
						]);
				} else {
					return _List_Nil;
				}
			}
		};
	});
var $elm$url$Url$Parser$int = A2($elm$url$Url$Parser$custom, 'NUMBER', $elm$core$String$toInt);
var $elm$url$Url$Parser$mapState = F2(
	function (func, _v0) {
		var visited = _v0.M;
		var unvisited = _v0.H;
		var params = _v0.K;
		var frag = _v0.J;
		var value = _v0.bh;
		return A5(
			$elm$url$Url$Parser$State,
			visited,
			unvisited,
			params,
			frag,
			func(value));
	});
var $elm$url$Url$Parser$map = F2(
	function (subValue, _v0) {
		var parseArg = _v0;
		return function (_v1) {
			var visited = _v1.M;
			var unvisited = _v1.H;
			var params = _v1.K;
			var frag = _v1.J;
			var value = _v1.bh;
			return A2(
				$elm$core$List$map,
				$elm$url$Url$Parser$mapState(value),
				parseArg(
					A5($elm$url$Url$Parser$State, visited, unvisited, params, frag, subValue)));
		};
	});
var $elm$url$Url$Parser$oneOf = function (parsers) {
	return function (state) {
		return A2(
			$elm$core$List$concatMap,
			function (_v0) {
				var parser = _v0;
				return parser(state);
			},
			parsers);
	};
};
var $elm$url$Url$Parser$s = function (str) {
	return function (_v0) {
		var visited = _v0.M;
		var unvisited = _v0.H;
		var params = _v0.K;
		var frag = _v0.J;
		var value = _v0.bh;
		if (!unvisited.b) {
			return _List_Nil;
		} else {
			var next = unvisited.a;
			var rest = unvisited.b;
			return _Utils_eq(next, str) ? _List_fromArray(
				[
					A5(
					$elm$url$Url$Parser$State,
					A2($elm$core$List$cons, next, visited),
					rest,
					params,
					frag,
					value)
				]) : _List_Nil;
		}
	};
};
var $elm$url$Url$Parser$slash = F2(
	function (_v0, _v1) {
		var parseBefore = _v0;
		var parseAfter = _v1;
		return function (state) {
			return A2(
				$elm$core$List$concatMap,
				parseAfter,
				parseBefore(state));
		};
	});
var $elm$url$Url$Parser$top = function (state) {
	return _List_fromArray(
		[state]);
};
var $author$project$Route$route = $elm$url$Url$Parser$oneOf(
	_List_fromArray(
		[
			A2($elm$url$Url$Parser$map, $author$project$Route$Home, $elm$url$Url$Parser$top),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Route$Day,
			A2(
				$elm$url$Url$Parser$slash,
				$elm$url$Url$Parser$s('day'),
				$elm$url$Url$Parser$int))
		]));
var $author$project$Route$toRoute = function (url) {
	var protocol = (url.cD === 1) ? 'https' : 'http';
	var port_ = function () {
		var _v0 = url.cA;
		if (!_v0.$) {
			var p = _v0.a;
			return ':' + $elm$core$String$fromInt(p);
		} else {
			return '';
		}
	}();
	var path = A2($elm$core$Maybe$withDefault, '/', url.ch);
	return A2(
		$elm$core$Maybe$withDefault,
		$author$project$Route$NotFound(url),
		A2(
			$elm$url$Url$Parser$parse,
			$author$project$Route$route,
			A2(
				$elm$core$Maybe$withDefault,
				url,
				$elm$url$Url$fromString(protocol + ('://' + (url.ck + (port_ + path)))))));
};
var $author$project$Shared$update = F2(
	function (msg, shared) {
		switch (msg.$) {
			case 0:
				var currentDay = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						shared,
						{b8: currentDay}),
					$elm$core$Platform$Cmd$none);
			case 1:
				var newIdentity = msg.a;
				var redirect = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						shared,
						{
							ae: $elm$core$Maybe$Just(newIdentity)
						}),
					A2(
						$elm$core$Maybe$withDefault,
						$elm$core$Platform$Cmd$none,
						A2(
							$elm$core$Maybe$map,
							$elm$browser$Browser$Navigation$replaceUrl(shared.aV),
							redirect)));
			default:
				return _Utils_Tuple2(
					_Utils_update(
						shared,
						{ae: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$main = $elm$browser$Browser$application(
	A2(
		$orus_io$elm_spa$Spa$application,
		{cP: $author$project$Main$toDocument},
		A4(
			$orus_io$elm_spa$Spa$addPublicPage,
			$author$project$Main$mappers,
			$author$project$Route$matchDay,
			$author$project$Pages$Day$page,
			A4(
				$orus_io$elm_spa$Spa$addPublicPage,
				$author$project$Main$mappers,
				$author$project$Route$matchHome,
				$author$project$Pages$Home$page,
				$orus_io$elm_spa$Spa$init(
					{
						ca: $author$project$View$defaultView,
						cg: $elm$core$Basics$always($elm$core$Maybe$Nothing),
						cn: $author$project$Shared$init,
						cC: $elm$core$Basics$always(''),
						cN: $author$project$Shared$subscriptions,
						cQ: $author$project$Route$toRoute,
						cR: $author$project$Shared$update
					})))));
_Platform_export({'Main':{'init':$author$project$Main$main(
	$elm$json$Json$Decode$succeed(0))(0)}});}(this));