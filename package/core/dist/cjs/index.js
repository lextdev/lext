'use strict';

var react = require('@emotion/react');
var React = require('react');
var reactNative = require('react-native');
var styled = require('@emotion/native');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);
var styled__default = /*#__PURE__*/_interopDefaultCompat(styled);

var ThemeProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    return React__default.default.createElement(react.ThemeProvider, { children: children, theme: theme });
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var isPlainObj = value => {
	if (Object.prototype.toString.call(value) !== '[object Object]') {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);
	return prototype === null || prototype === Object.prototype;
};

const isOptionObject = isPlainObj;

const {hasOwnProperty} = Object.prototype;
const {propertyIsEnumerable} = Object;
const defineProperty = (object, name, value) => Object.defineProperty(object, name, {
	value,
	writable: true,
	enumerable: true,
	configurable: true
});

const globalThis$1 = commonjsGlobal;
const defaultMergeOptions = {
	concatArrays: false,
	ignoreUndefined: false
};

const getEnumerableOwnPropertyKeys = value => {
	const keys = [];

	for (const key in value) {
		if (hasOwnProperty.call(value, key)) {
			keys.push(key);
		}
	}

	/* istanbul ignore else  */
	if (Object.getOwnPropertySymbols) {
		const symbols = Object.getOwnPropertySymbols(value);

		for (const symbol of symbols) {
			if (propertyIsEnumerable.call(value, symbol)) {
				keys.push(symbol);
			}
		}
	}

	return keys;
};

function clone(value) {
	if (Array.isArray(value)) {
		return cloneArray(value);
	}

	if (isOptionObject(value)) {
		return cloneOptionObject(value);
	}

	return value;
}

function cloneArray(array) {
	const result = array.slice(0, 0);

	getEnumerableOwnPropertyKeys(array).forEach(key => {
		defineProperty(result, key, clone(array[key]));
	});

	return result;
}

function cloneOptionObject(object) {
	const result = Object.getPrototypeOf(object) === null ? Object.create(null) : {};

	getEnumerableOwnPropertyKeys(object).forEach(key => {
		defineProperty(result, key, clone(object[key]));
	});

	return result;
}

/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {string[]} keys keys to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 */
const mergeKeys = (merged, source, keys, config) => {
	keys.forEach(key => {
		if (typeof source[key] === 'undefined' && config.ignoreUndefined) {
			return;
		}

		// Do not recurse into prototype chain of merged
		if (key in merged && merged[key] !== Object.getPrototypeOf(merged)) {
			defineProperty(merged, key, merge$1(merged[key], source[key], config));
		} else {
			defineProperty(merged, key, clone(source[key]));
		}
	});

	return merged;
};

/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 *
 * see [Array.prototype.concat ( ...arguments )](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.concat)
 */
const concatArrays = (merged, source, config) => {
	let result = merged.slice(0, 0);
	let resultIndex = 0;

	[merged, source].forEach(array => {
		const indices = [];

		// `result.concat(array)` with cloning
		for (let k = 0; k < array.length; k++) {
			if (!hasOwnProperty.call(array, k)) {
				continue;
			}

			indices.push(String(k));

			if (array === merged) {
				// Already cloned
				defineProperty(result, resultIndex++, array[k]);
			} else {
				defineProperty(result, resultIndex++, clone(array[k]));
			}
		}

		// Merge non-index keys
		result = mergeKeys(result, array, getEnumerableOwnPropertyKeys(array).filter(key => !indices.includes(key)), config);
	});

	return result;
};

/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 */
function merge$1(merged, source, config) {
	if (config.concatArrays && Array.isArray(merged) && Array.isArray(source)) {
		return concatArrays(merged, source, config);
	}

	if (!isOptionObject(source) || !isOptionObject(merged)) {
		return clone(source);
	}

	return mergeKeys(merged, source, getEnumerableOwnPropertyKeys(source), config);
}

var mergeOptions = function (...options) {
	const config = merge$1(clone(defaultMergeOptions), (this !== globalThis$1 && this) || {}, defaultMergeOptions);
	let merged = {_: {}};

	for (const option of options) {
		if (option === undefined) {
			continue;
		}

		if (!isOptionObject(option)) {
			throw new TypeError('`' + option + '` is not an Option Object');
		}

		merged = merge$1(merged, {_: option}, config);
	}

	return merged._;
};

var mergeOptions$1 = /*@__PURE__*/getDefaultExportFromCjs(mergeOptions);

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


// eslint-disable-next-line @typescript-eslint/ban-types

// eslint-disable-next-line @typescript-eslint/ban-types

const merge = mergeOptions$1.bind({
  concatArrays: true,
  ignoreUndefined: true
});
function mergeLocalStorageItem(key, value) {
  const oldValue = window.localStorage.getItem(key);
  if (oldValue) {
    const oldObject = JSON.parse(oldValue);
    const newObject = JSON.parse(value);
    const nextValue = JSON.stringify(merge(oldObject, newObject));
    window.localStorage.setItem(key, nextValue);
  } else {
    window.localStorage.setItem(key, value);
  }
}
function createPromise(getValue, callback) {
  return new Promise((resolve, reject) => {
    try {
      const value = getValue();
      callback === null || callback === void 0 ? void 0 : callback(null, value);
      resolve(value);
    } catch (err) {
      callback === null || callback === void 0 ? void 0 : callback(err);
      reject(err);
    }
  });
}
function createPromiseAll(promises, callback, processResult) {
  return Promise.all(promises).then(result => {
    const value = (processResult === null || processResult === void 0 ? void 0 : processResult(result)) ?? null;
    callback === null || callback === void 0 ? void 0 : callback(null, value);
    return Promise.resolve(value);
  }, errors => {
    callback === null || callback === void 0 ? void 0 : callback(errors);
    return Promise.reject(errors);
  });
}
const AsyncStorage = {
  /**
   * Fetches `key` value.
   */
  getItem: (key, callback) => {
    return createPromise(() => window.localStorage.getItem(key), callback);
  },
  /**
   * Sets `value` for `key`.
   */
  setItem: (key, value, callback) => {
    return createPromise(() => window.localStorage.setItem(key, value), callback);
  },
  /**
   * Removes a `key`
   */
  removeItem: (key, callback) => {
    return createPromise(() => window.localStorage.removeItem(key), callback);
  },
  /**
   * Merges existing value with input value, assuming they are stringified JSON.
   */
  mergeItem: (key, value, callback) => {
    return createPromise(() => mergeLocalStorageItem(key, value), callback);
  },
  /**
   * Erases *all* AsyncStorage for the domain.
   */
  clear: callback => {
    return createPromise(() => window.localStorage.clear(), callback);
  },
  /**
   * Gets *all* keys known to the app, for all callers, libraries, etc.
   */
  getAllKeys: callback => {
    return createPromise(() => {
      const numberOfKeys = window.localStorage.length;
      const keys = [];
      for (let i = 0; i < numberOfKeys; i += 1) {
        const key = window.localStorage.key(i) || "";
        keys.push(key);
      }
      return keys;
    }, callback);
  },
  /**
   * (stub) Flushes any pending requests using a single batch call to get the data.
   */
  flushGetRequests: () => undefined,
  /**
   * multiGet resolves to an array of key-value pair arrays that matches the
   * input format of multiSet.
   *
   *   multiGet(['k1', 'k2']) -> [['k1', 'val1'], ['k2', 'val2']]
   */
  multiGet: (keys, callback) => {
    const promises = keys.map(key => AsyncStorage.getItem(key));
    const processResult = result => result.map((value, i) => [keys[i], value]);
    return createPromiseAll(promises, callback, processResult);
  },
  /**
   * Takes an array of key-value array pairs.
   *   multiSet([['k1', 'val1'], ['k2', 'val2']])
   */
  multiSet: (keyValuePairs, callback) => {
    const promises = keyValuePairs.map(item => AsyncStorage.setItem(item[0], item[1]));
    return createPromiseAll(promises, callback);
  },
  /**
   * Delete all the keys in the `keys` array.
   */
  multiRemove: (keys, callback) => {
    const promises = keys.map(key => AsyncStorage.removeItem(key));
    return createPromiseAll(promises, callback);
  },
  /**
   * Takes an array of key-value array pairs and merges them with existing
   * values, assuming they are stringified JSON.
   *
   *   multiMerge([['k1', 'val1'], ['k2', 'val2']])
   */
  multiMerge: (keyValuePairs, callback) => {
    const promises = keyValuePairs.map(item => AsyncStorage.mergeItem(item[0], item[1]));
    return createPromiseAll(promises, callback);
  }
};

var ASYNCSTORAGE_SESSION_KEY = "lext_session";
function getSessionLocale() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, AsyncStorage.getItem(ASYNCSTORAGE_SESSION_KEY)];
                case 1:
                    result = _a.sent();
                    if (result) {
                        return [2 /*return*/, JSON.parse(result)];
                    }
                    return [2 /*return*/, null];
            }
        });
    });
}
function setSessionLocale(data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, AsyncStorage.setItem(ASYNCSTORAGE_SESSION_KEY, JSON.stringify(data))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function removeSessionLocale() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, AsyncStorage.removeItem(ASYNCSTORAGE_SESSION_KEY)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var SessionStore = {
    getSessionLocale: getSessionLocale,
    setSessionLocale: setSessionLocale,
    removeSessionLocale: removeSessionLocale,
};

var SessionContext = React.createContext(null);
var SessionContextDispatch = React.createContext(function () { });
var SessionProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(null), session = _b[0], setSession = _b[1];
    var onHandlerSession = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, SessionStore.getSessionLocale()];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, setSession(result)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        onHandlerSession();
    }, [session]);
    return (React__default.default.createElement(SessionContext.Provider, { value: session },
        React__default.default.createElement(SessionContextDispatch.Provider, { value: setSession }, children)));
};

function useCountdown(seconds) {
    var _a = React.useState(seconds), remainingTime = _a[0], setRemainingTime = _a[1];
    var _b = React.useState(false), isCompleteRemainingTime = _b[0], setCompleteRemainingTime = _b[1];
    React.useEffect(function () {
        var countdownInterval = setInterval(function () {
            setRemainingTime(function (prevTime) { return prevTime - 1; });
        }, 1000);
        return function () {
            clearInterval(countdownInterval);
        };
    }, []);
    React.useEffect(function () {
        if (remainingTime <= 0) {
            setCompleteRemainingTime(true);
        }
    }, [remainingTime]);
    var formatTime = function () {
        var minutes = Math.floor(remainingTime / 60);
        var seconds = remainingTime % 60;
        return "".concat(minutes.toString().padStart(2, "0"), ":").concat(seconds
            .toString()
            .padStart(2, "0"));
    };
    return {
        isCompleteRemainingTime: isCompleteRemainingTime,
        formatTime: formatTime(),
    };
}

var useKeyboard = function () {
    var _a = React.useState(false), isKeyboardOpen = _a[0], setIsKeyboardOpen = _a[1];
    var _b = React.useState(0), getKeyboardHeight = _b[0], setKeyboardHeight = _b[1];
    var closeKeyboard = function () {
        reactNative.Keyboard.dismiss();
    };
    React.useEffect(function () {
        var keyboardDidShowListener = reactNative.Keyboard.addListener("keyboardDidShow", function (event) {
            setIsKeyboardOpen(true);
            setKeyboardHeight(event.endCoordinates.height);
        });
        var keyboardDidHideListener = reactNative.Keyboard.addListener("keyboardDidHide", function () {
            setIsKeyboardOpen(false);
            setKeyboardHeight(0);
        });
        return function () {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    });
    return {
        isKeyboardOpen: isKeyboardOpen,
        getKeyboardHeight: getKeyboardHeight,
        closeKeyboard: closeKeyboard,
    };
};

var useSession = function () {
    var session = React.useContext(SessionContext);
    var setSessionContext = React.useContext(SessionContextDispatch);
    var signIn = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, SessionStore.setSessionLocale(data)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, setSessionContext(data)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var signOut = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, SessionStore.removeSessionLocale()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, setSessionContext(null)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return { session: session, signIn: signIn, signOut: signOut };
};

var GetTextSizeValue = function (size, sizes) {
    if (!size || !sizes) {
        return undefined;
    }
    if (typeof size === "number") {
        return size;
    }
    else {
        return sizes[size];
    }
};

var GetHeadingSizeValue = function (size, sizes) {
    if (!size || !sizes) {
        return undefined;
    }
    if (typeof size === "number") {
        return size;
    }
    else {
        return sizes[size];
    }
};

var Text = styled__default.default.Text(function (props) {
    var _a;
    var theme = props.theme; props.style; props.children; var componentProps = __rest(props, ["theme", "style", "children"]);
    var defaultProps = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.components.Text.default;
    var merged = __assign(__assign({}, defaultProps), componentProps);
    return __assign(__assign({}, merged), { color: merged.color && theme.colors[merged.color], fontSize: GetTextSizeValue(props.fontSize, theme.fontSizes.text) });
});

var Heading = styled__default.default.Text(function (props) {
    var _a;
    var theme = props.theme; props.style; props.children; var componentProps = __rest(props, ["theme", "style", "children"]);
    var defaultProps = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.components.Heading.default;
    var merged = __assign(__assign({}, defaultProps), componentProps);
    return __assign(__assign({}, merged), { color: merged.color && theme.colors[merged.color], fontSize: GetHeadingSizeValue(props.fontSize, theme.fontSizes.heading) });
});

var StyledActionButton = styled__default.default.TouchableOpacity(function (props) {
    var _a;
    var theme = props.theme; props.children; var variant = props.variant, size = props.size, componentProps = __rest(props, ["theme", "children", "variant", "size"]);
    var defaultProps = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.components.ActionButton.default;
    var merged = __assign(__assign({}, defaultProps), componentProps);
    var variantStyle = {};
    if (variant === "outline") {
        variantStyle = {
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: merged.backgroundColor && theme.colors[merged.backgroundColor],
            borderStyle: "solid",
        };
    }
    else if (variant === "transparent") {
        variantStyle = {};
    }
    else {
        variantStyle = {
            backgroundColor: merged.backgroundColor && theme.colors[merged.backgroundColor],
        };
    }
    var divisionValue = function (value, division) {
        if (division === void 0) { division = 2; }
        return value / division;
    };
    var typeStyle = {};
    switch (size) {
        case "lg":
            typeStyle = {
                paddingVertical: divisionValue(theme.defaultOptions.paddingVertical) * 2,
                paddingHorizontal: divisionValue(theme.defaultOptions.paddingHorizontal) * 2,
                borderRadius: theme.defaultOptions.borderRadius * 2,
            };
            break;
        case "sm":
            typeStyle = {
                paddingVertical: divisionValue(theme.defaultOptions.paddingVertical) * 0.5,
                paddingHorizontal: divisionValue(theme.defaultOptions.paddingHorizontal) * 0.5,
                borderRadius: theme.defaultOptions.borderRadius * 0.5,
            };
            break;
        default:
            typeStyle = {
                paddingVertical: divisionValue(theme.defaultOptions.paddingVertical) * 1.5,
                paddingHorizontal: divisionValue(theme.defaultOptions.paddingHorizontal),
                borderRadius: theme.defaultOptions.borderRadius,
            };
            break;
    }
    return __assign(__assign(__assign(__assign({}, merged), typeStyle), variantStyle), { display: "flex", alignItems: "center", justifyContent: "center" });
});

var ActionButton = function (props) {
    var children = props.children; props.color; var touchableComponent = __rest(props, ["children", "color"]);
    return (React__default.default.createElement(StyledActionButton, __assign({}, touchableComponent, { activeOpacity: 0.7, style: { opacity: props.disabled ? 0.3 : 1 } }), children));
};

var Anchor = function (props) {
    var children = props.children, _a = props.color, color = _a === void 0 ? "primary" : _a, fontSize = props.fontSize, touchableOpacityProps = __rest(props, ["children", "color", "fontSize"]);
    var fontProps = __assign({ color: color, fontSize: fontSize });
    return (React__default.default.createElement(reactNative.TouchableOpacity, __assign({ activeOpacity: 0.7 }, touchableOpacityProps),
        React__default.default.createElement(Text, __assign({}, fontProps), children)));
};

var StyledButton = styled__default.default.TouchableOpacity(function (props) {
    var _a;
    var theme = props.theme; props.children; var variant = props.variant, size = props.size, componentProps = __rest(props, ["theme", "children", "variant", "size"]);
    var defaultProps = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.components.Button.default;
    var merged = __assign(__assign({}, defaultProps), componentProps);
    var variantStyle = {};
    if (variant === "outline") {
        variantStyle = {
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: merged.backgroundColor && theme.colors[merged.backgroundColor],
            borderStyle: "solid",
        };
    }
    else {
        variantStyle = {
            backgroundColor: merged.backgroundColor && theme.colors[merged.backgroundColor],
        };
    }
    var divisionValue = function (value, division) {
        if (division === void 0) { division = 2; }
        return value / division;
    };
    var typeStyle = {};
    switch (size) {
        case "lg":
            typeStyle = {
                paddingVertical: divisionValue(theme.defaultOptions.paddingVertical) * 2,
                paddingHorizontal: divisionValue(theme.defaultOptions.paddingHorizontal) * 2,
                borderRadius: theme.defaultOptions.borderRadius * 2,
            };
            break;
        case "sm":
            typeStyle = {
                paddingVertical: divisionValue(theme.defaultOptions.paddingVertical) * 0.5,
                paddingHorizontal: divisionValue(theme.defaultOptions.paddingHorizontal) * 0.5,
                borderRadius: theme.defaultOptions.borderRadius * 0.5,
            };
            break;
        default:
            typeStyle = {
                paddingVertical: divisionValue(theme.defaultOptions.paddingVertical) * 1.5,
                paddingHorizontal: divisionValue(theme.defaultOptions.paddingHorizontal),
                borderRadius: theme.defaultOptions.borderRadius,
            };
            break;
    }
    return __assign(__assign(__assign(__assign({}, merged), typeStyle), variantStyle), { display: "flex", alignItems: "center", justifyContent: "center" });
});

var Button = function (props) {
    var children = props.children, color = props.color, touchableComponent = __rest(props, ["children", "color"]);
    var fonstSize = props.size === "sm" ? "caption" : "body";
    return (React__default.default.createElement(StyledButton, __assign({}, touchableComponent, { activeOpacity: 0.7, style: { opacity: props.disabled ? 0.3 : 1 } }),
        React__default.default.createElement(Text, { color: color, fontSize: fonstSize }, children)));
};

var Box = styled__default.default.View(function (props) {
    var _a;
    var theme = props.theme; props.style; props.children; var componentProps = __rest(props, ["theme", "style", "children"]);
    var defaultProps = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.components.Box.default;
    var merged = __assign(__assign({}, defaultProps), componentProps);
    return __assign(__assign({ paddingHorizontal: theme.defaultOptions.paddingHorizontal, paddingVertical: theme.defaultOptions.paddingVertical }, merged), { backgroundColor: merged.backgroundColor && theme.colors[merged.backgroundColor] });
});

var Group = styled__default.default.View(function (props) {
    var _a;
    props.theme; props.style; props.children; var componentProps = __rest(props, ["theme", "style", "children"]);
    var defaultProps = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.components.Group.default;
    var merged = __assign(__assign({}, defaultProps), componentProps);
    return __assign({ gap: props.theme.defaultOptions.gap, flexDirection: "row" }, merged);
});

var Divider = function (_a) {
    var label = _a.label, _b = _a.color, color = _b === void 0 ? "muted" : _b;
    var theme = react.useTheme();
    return (React__default.default.createElement(Group, { gap: 10 },
        React__default.default.createElement(reactNative.View, { style: {
                flex: 1,
                height: 1,
                backgroundColor: color && theme.colors[color],
            } }),
        React__default.default.createElement(reactNative.View, null,
            React__default.default.createElement(Text, { color: color, fontSize: "caption", style: { textAlign: "center" } }, label)),
        React__default.default.createElement(reactNative.View, { style: {
                flex: 5,
                height: 1,
                backgroundColor: color && theme.colors[color],
            } })));
};

var Container = styled__default.default.View(function (props) {
    var _a;
    props.theme; props.style; props.children; var componentProps = __rest(props, ["theme", "style", "children"]);
    var defaultProps = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.components.Grid.default;
    var merged = __assign(__assign({}, defaultProps), componentProps);
    return __assign({ gap: props.theme.defaultOptions.gap, flexDirection: "row" }, merged);
});
var Item = function (_a) {
    var children = _a.children, _b = _a.span, span = _b === void 0 ? 1 : _b;
    return React__default.default.createElement(reactNative.View, { style: { flex: span } }, children);
};
var Grid = { Container: Container, Item: Item };

var Stack = styled__default.default.View(function (props) {
    var _a;
    props.theme; props.style; props.children; var componentProps = __rest(props, ["theme", "style", "children"]);
    var defaultProps = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.components.Stack.default;
    var merged = __assign(__assign({}, defaultProps), componentProps);
    return __assign({ gap: props.theme.defaultOptions.gap }, merged);
});

var SafeAreaView = function (_a) {
    var children = _a.children, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? "background" : _b;
    var theme = react.useTheme();
    return (React__default.default.createElement(reactNative.SafeAreaView, { style: {
            flex: 1,
            backgroundColor: backgroundColor
                ? theme.colors[backgroundColor]
                : undefined,
        } }, children));
};

var ActionButtonComponentThemeData = {
    default: {
        backgroundColor: "primary",
        variant: "filled",
        size: "md",
    },
};

var ButtonComponentThemeData = {
    default: {
        backgroundColor: "primary",
        variant: "filled",
        size: "md",
        minHeight: 47,
    },
};

var BoxComponentThemeData = {
    default: {},
};

var GridComponentThemeData = {
    default: {},
};

var GroupComponentThemeData = {
    default: {
        alignItems: "center",
    },
};

var StackComponentThemeData = {
    default: {},
};

var HeadingComponentThemeData = {
    default: {
        color: "global",
        fontSize: "h1",
    },
};

var TextComponentThemeData = {
    default: {
        color: "global",
        fontSize: "body",
    },
};

var Black = "#000";
var White = "#FFF";
var Colors = {
    background: "#fff",
    default: "#1e87f0",
    emphasis: "#333",
    muted: "#999",
    primary: "#1e87f0",
    secondary: "#222",
    global: "#666",
    inverse: "#fff",
    link: "#1e87f0",
    danger: "#f0506e",
    success: "#32d296",
    warning: "#faa05a",
};

var HeadingSizes = {
    h1: 38,
    h2: 28,
    h3: 18,
};

var Spacing = {
    xl: 30,
    lg: 25,
    md: 15,
    sm: 10,
    xs: 5,
};

var TextSizes = {
    subHeading: 16,
    body: 14,
    caption: 12,
};

var Theme = {
    colors: Colors,
    white: White,
    black: Black,
    spacing: Spacing,
    fontSizes: {
        heading: HeadingSizes,
        text: TextSizes,
    },
    components: {
        Text: TextComponentThemeData,
        Heading: HeadingComponentThemeData,
        Stack: StackComponentThemeData,
        Group: GroupComponentThemeData,
        Grid: GridComponentThemeData,
        Box: BoxComponentThemeData,
        Button: ButtonComponentThemeData,
        ActionButton: ActionButtonComponentThemeData,
    },
    defaultOptions: {
        gap: 5,
        padding: 25,
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 5,
        minHeight: 45,
    },
};

var createTheme = function (newTheme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    var defaultTheme = Theme;
    return __assign(__assign({}, defaultTheme), (newTheme && {
        colors: __assign(__assign({}, defaultTheme.colors), (newTheme.colors || {})),
        white: newTheme.white || defaultTheme.white,
        black: newTheme.black || defaultTheme.black,
        spacing: __assign(__assign({}, defaultTheme.spacing), (newTheme.spacing || {})),
        fontSizes: {
            heading: __assign(__assign({}, defaultTheme.fontSizes.heading), (((_a = newTheme.fontSizes) === null || _a === void 0 ? void 0 : _a.heading) || {})),
            text: __assign(__assign({}, defaultTheme.fontSizes.text), (((_b = newTheme.fontSizes) === null || _b === void 0 ? void 0 : _b.text) || {})),
        },
        components: {
            Text: {
                default: __assign(__assign({}, defaultTheme.components.Text.default), (((_d = (_c = newTheme.components) === null || _c === void 0 ? void 0 : _c.Text) === null || _d === void 0 ? void 0 : _d.default) || {})),
                classes: ((_f = (_e = newTheme.components) === null || _e === void 0 ? void 0 : _e.Text) === null || _f === void 0 ? void 0 : _f.classes) || {},
            },
            Heading: {
                default: __assign(__assign({}, defaultTheme.components.Heading.default), (((_h = (_g = newTheme.components) === null || _g === void 0 ? void 0 : _g.Heading) === null || _h === void 0 ? void 0 : _h.default) || {})),
                classes: ((_k = (_j = newTheme.components) === null || _j === void 0 ? void 0 : _j.Heading) === null || _k === void 0 ? void 0 : _k.classes) || {},
            },
            Stack: {
                default: __assign({}, (((_m = (_l = newTheme.components) === null || _l === void 0 ? void 0 : _l.Stack) === null || _m === void 0 ? void 0 : _m.default) || {})),
                // Other features will be added here
            },
            Group: {
                default: __assign({}, (((_p = (_o = newTheme.components) === null || _o === void 0 ? void 0 : _o.Group) === null || _p === void 0 ? void 0 : _p.default) || {})),
                // Other features will be added here
            },
            Grid: {
                default: __assign({}, (((_r = (_q = newTheme.components) === null || _q === void 0 ? void 0 : _q.Grid) === null || _r === void 0 ? void 0 : _r.default) || {})),
                // Other features will be added here
            },
            Box: {
                default: __assign({}, (((_t = (_s = newTheme.components) === null || _s === void 0 ? void 0 : _s.Box) === null || _t === void 0 ? void 0 : _t.default) || {})),
                // Other features will be added here
            },
            Button: {
                default: __assign({}, (((_v = (_u = newTheme.components) === null || _u === void 0 ? void 0 : _u.Button) === null || _v === void 0 ? void 0 : _v.default) || {})),
                // Other features will be added here
            },
            ActionButton: {
                default: __assign({}, (((_x = (_w = newTheme.components) === null || _w === void 0 ? void 0 : _w.ActionButton) === null || _x === void 0 ? void 0 : _x.default) || {})),
                // Other features will be added here
            },
        },
        defaultOptions: __assign(__assign({}, defaultTheme.defaultOptions), (newTheme.defaultOptions || {})),
    }));
};

exports.ActionButton = ActionButton;
exports.Anchor = Anchor;
exports.Box = Box;
exports.Button = Button;
exports.Divider = Divider;
exports.Grid = Grid;
exports.Group = Group;
exports.Heading = Heading;
exports.SafeAreaView = SafeAreaView;
exports.SessionProvider = SessionProvider;
exports.Stack = Stack;
exports.Text = Text;
exports.Theme = Theme;
exports.ThemeProvider = ThemeProvider;
exports.createTheme = createTheme;
exports.useCountdown = useCountdown;
exports.useKeyboard = useKeyboard;
exports.useSession = useSession;
//# sourceMappingURL=index.js.map
