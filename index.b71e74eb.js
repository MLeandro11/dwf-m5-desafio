// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iJYvl":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _button = require("./components/button");
var _text = require("./components/text");
var _myMove = require("./components/my-move");
var _route = require("./route");
var _counter = require("./components/counter");
var _results = require("./components/results");
var _state = require("./state");
(0, _state.state).init();
(0, _counter.initCounter)();
(0, _button.initButton)();
(0, _text.initText)();
(0, _myMove.initMove)();
(0, _results.initResult)();
const rootEl = document.querySelector(".root");
(0, _route.initRouter)(rootEl);

},{"./components/button":"dZaQH","./components/text":"6Xncd","./components/my-move":"ld1fu","./route":"jqJ1j","./components/counter":"9ZXz4","./components/results":"bxdRM","./state":"1Yeju"}],"dZaQH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initButton", ()=>initButton);
function initButton() {
    class Button extends HTMLElement {
        constructor(){
            super();
        }
        connectedCallback() {
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.shadow.innerHTML = `
            <button class="button">${this.textContent}</button>
            `;
            const style = document.createElement("style");
            style.innerHTML = `
            .button{
                background-color: #006CFC;
                color: #D8FCFC;
                border: solid 8px #001997;
                border-radius: 10px;
                width: 100%;
                
                padding: 8px 0;
                font-size: 45px;
                font-family: 'Odibee Sans', cursive; 
            }
            `;
            this.shadow.appendChild(style);
        }
    }
    customElements.define("my-button", Button);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6Xncd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initText", ()=>initText);
function initText() {
    class Text extends HTMLElement {
        constructor(){
            super();
        }
        connectedCallback() {
            this.shadow = this.attachShadow({
                mode: "open"
            });
            const color = this.getAttribute("color") || "#000";
            const style = document.createElement("style");
            style.innerHTML = `
            .body{
                font-family: 'Odibee Sans', cursive; 
                font-size: 40px;
                color: ${color};
                margin: 0px;
                text-align: center;
            }
            `;
            this.shadow.append(style);
            this.render();
        }
        render() {
            const p = document.createElement("p");
            p.className = "body";
            p.textContent = this.textContent;
            this.shadow.append(p);
        }
    }
    customElements.define("my-text", Text);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ld1fu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initMove", ()=>initMove);
const hands = {
    tijera: require("url:../../image/tijera.png"),
    piedra: require("url:../../image/piedra.png"),
    papel: require("url:../../image/papel.png")
};
function initMove() {
    class Move extends HTMLElement {
        constructor(){
            super();
        }
        connectedCallback() {
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.move = this.getAttribute("move");
            const size = this.getAttribute("size") || "";
            const style = document.createElement("style");
            style.innerHTML = `
            .img{
                height: ${size}px
            }
            `;
            this.shadow.append(style);
            this.render();
        }
        render() {
            const img = document.createElement("img");
            img.className = "img";
            if (this.move == "piedra") img.src = `${hands[this.move]}`;
            if (this.move == "papel") img.src = `${hands[this.move]}`;
            if (this.move == "tijera") img.src = `${hands[this.move]}`;
            this.shadow.append(img);
        }
    }
    customElements.define("my-move", Move);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../../image/piedra.png":"5qhv7","url:../../image/papel.png":"hDwfi","url:../../image/tijera.png":"6nUxB"}],"5qhv7":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "piedra.16549b12.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"hDwfi":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "papel.7352c34f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6nUxB":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "tijera.b6a54b59.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jqJ1j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _welcome = require("./pages/welcome");
var _start = require("./pages/start");
var _play = require("./pages/play");
var _results = require("./pages/results");
const routes = [
    {
        path: /\/welcome/,
        component: (0, _welcome.initWelcome)
    },
    {
        path: /\/start/,
        component: (0, _start.initStart)
    },
    {
        path: /\/play/,
        component: (0, _play.initPlay)
    },
    {
        path: /\/results/,
        component: (0, _results.initResults)
    }, 
];
const BASE_PATH = "/desafio-m5";
function isGithubPages() {
    return location.host.includes("github.io");
}
function initRouter(container) {
    const goTo = (path)=>{
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", path);
        handleRoute(completePath);
    };
    const handleRoute = (route)=>{
        console.log("handleRoute recibio una nueva ruta", route);
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes)if (r.path.test(newRoute)) {
            const el = r.component({
                goTo: goTo
            });
            container.innerHTML = "";
            container.appendChild(el);
        }
    };
    if (location.pathname == "/") goTo("/welcome");
    else handleRoute(location.pathname);
    window.onpopstate = ()=>{
        handleRoute(location.pathname);
    };
}

},{"./pages/welcome":"fNSF3","./pages/start":"c3BqK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pages/play":"hbEIY","./pages/results":"4Cdh4"}],"fNSF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcome", ()=>initWelcome);
function initWelcome(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <h1 class="h1">Piedra Papel o Tijera</h1>
    
    <my-button>Empezar</my-button>
    <div class="move-uno">
    <my-move move="tijera"></my-move>
    </div>
    <div class="move-dos">
    <my-move move="piedra"></my-move>
    </div>
    <div class="move-tres">
    <my-move move="papel"></my-move>
    </div>
    `;
    const style = document.createElement("style");
    style.innerHTML = `
    .container{
        position: relative;
        min-width: 375px;
        max-width: 375px;
        margin: 0 auto;
        height: 100vh;
        overflow: hidden;
        padding: 115px 35px 0;
        
    }
    .h1{
        margin: 0;
        margin-bottom: 75px;
        font-family: 'Odibee Sans', cursive; 
        font-size: 80px;
        font-weight: 700;
        text-align: left;
        line-height: 70.48px;
        color: #009048 
    }
    .move-uno{
        position: absolute;
        left: 30px;
        bottom: -30px;
    }

    .move-dos{
        position: absolute;
        
        right: 43%;
        bottom: -30px;
    }

    .move-tres{
        position: absolute;
        right: 30px;
        bottom: -30px;
    } 

    `;
    div.className = "container";
    div.appendChild(style);
    const buttonEl = div.querySelector("my-button");
    buttonEl?.addEventListener("click", ()=>{
        params.goTo("/start");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c3BqK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStart", ()=>initStart);
function initStart(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="text">
    <my-text>
    Presioná jugar
    y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
    </my-text>
    </div>
    <my-button>¡Jugar!</my-button>
    <div class="move-uno">
    <my-move  move="tijera"></my-move>
    </div>
    <div class="move-dos">
    <my-move  move="piedra"></my-move>
    </div>
    <div class="move-tres">
    <my-move  move="papel"></my-move>
    </div>
    `;
    const style = document.createElement("style");
    style.innerHTML = `
    .container{
        position: relative;
        width: 375px;
        margin: 0 auto;
        height: 100vh;
        overflow: hidden;
        padding: 115px 35px 0;
    }
    .text{
        margin-bottom:45px
    }
    .move-uno{
        position: absolute;
        left: 30px;
        bottom: -30px;
    }

    .move-dos{
        position: absolute;
        
        right: 43%;
        bottom: -30px;
    }

    .move-tres{
        position: absolute;
        right: 30px;
        bottom: -30px;
    }  
    `;
    div.className = "container";
    div.appendChild(style);
    const buttonEl = div.querySelector("my-button");
    buttonEl?.addEventListener("click", ()=>{
        params.goTo("/play");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbEIY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPlay", ()=>initPlay);
var _state = require("../../state");
function initPlay(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    let counter = 3;
    const intervalId = setInterval(()=>{
        counter--;
        if (counter < 0) {
            clearInterval(intervalId);
            div.innerHTML = `
            <div class="cartel">
                <my-text>¡Se agoto el tiempo!</my-text>
                <my-button class="reset">¡reset!</my-button>
                <my-button class="exit">Exit</my-button>
            </div>
            <style>
            .container{
                width: 375px;
                margin: 0 auto;
                height: 100vh;
                overflow: hidden;
                padding: 118px 0;
            }
            .cartel{
                display: flex;
                flex-direction: column;
                gap: 40px
            }
            </style>
            `;
            const buttonReset = div.querySelector(".reset");
            buttonReset?.addEventListener("click", (e)=>{
                e.preventDefault();
                params.goTo("/play");
            });
            const buttonExit = div.querySelector(".exit");
            buttonExit?.addEventListener("click", (e)=>{
                e.preventDefault();
                params.goTo("/welcome");
            });
        }
    }, 1000);
    div.innerHTML = `

    <my-counter></my-counter>

    <div class="hands">
    <div class="move-uno">
    <my-move size="200" move="tijera"></my-move>
    </div>
    <div class="move-dos">
    <my-move size="200" move="piedra"></my-move>
    </div>
    <div class="move-tres">
    <my-move size="200" move="papel"></my-move>
    </div>
    </div>
    `;
    style.innerHTML = `
    .container{
        position: relative;
        width: 375px;
        margin: 0 auto;
        height: 100vh;
        overflow: hidden;
        padding: 118px 0;
    }
    .text{
        margin-bottom:45px
    }
    .hands .move-uno{
        position: absolute;
        left: 0;
        bottom: -50px;
    }

    .hands .move-dos{
        position: absolute;
        
        right: 150px;
        bottom: -50px;
    }

    .hands .move-tres{
        position: absolute;
        right: 0;
        bottom: -50px;
    }
    .hands .move-uno:hover{
        bottom: 0
    }
    .hands .move-dos:hover{
        bottom: 0
    }
    .hands .move-tres:hover{
        bottom: 0
    }
    
    
    `;
    div.className = "container";
    div.appendChild(style);
    const jugadas = div.querySelector(".hands")?.children;
    //console.log(jugadas);
    for (const iterator of jugadas)iterator?.addEventListener("click", (e)=>{
        e.preventDefault();
        const numRandom = Math.trunc(Math.random() * 3);
        const computerPlay = [
            "piedra",
            "papel",
            "tijera"
        ][numRandom];
        //console.log(e.target.move);
        //console.log(computerPlay);
        (0, _state.state).setMove(e.target.move, computerPlay);
        div.innerHTML = `
            
            <div class="hands">
            <div class="my-move">
            <my-move size="300" move="${e.target.move}"></my-move>
            </div>
            <div class="move-computer">
            <my-move size="300" move="${computerPlay}"></my-move>
            </div>
            `;
        style.innerHTML = `
            .container{
                position: relative;
                width: 375px;
                margin: 0 auto;
                height: 100vh;
                overflow: hidden;
            }
            .hands  .my-move{
                position: absolute;
                left: 35%;
                bottom: 0;
            }
            .hands  .move-computer{
                position: absolute;
                top: 0;
                left: 35%;
                transform: rotate(180deg);
            }
            
            `;
        div.appendChild(style);
        counter = 2;
        setTimeout(function() {
            params.goTo("/results");
        //console.log(counter);
        }, 2000);
    });
    return div;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        history: []
    },
    listeners: [],
    init () {
        const localData = localStorage.getItem("saved-state");
        if (!localData) return;
        else this.setState(JSON.parse(localData));
    },
    setMove (myMove, computerMove) {
        const cs = this.getState();
        cs.currentGame.myPlay = myMove;
        cs.currentGame.computerPlay = computerMove;
        //this.whoWins(myMove, computerMove)
        this.setState(cs);
    },
    whoWins (myPlay, computerPlay) {
        if (myPlay == computerPlay) this.pushToHistory("empate");
        else if (myPlay == "piedra" && computerPlay == "tijera") this.pushToHistory("ganaste");
        else if (myPlay == "papel" && computerPlay == "piedra") this.pushToHistory("ganaste");
        else if (myPlay == "tijera" && computerPlay == "papel") this.pushToHistory("ganaste");
        else this.pushToHistory("perdiste");
    },
    pushToHistory (game) {
        //console.log(game);
        const cs = this.getState();
        cs.history.push(game);
        this.setState(cs);
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb();
        localStorage.setItem("saved-state", JSON.stringify(newState));
        console.log("Soy el state, he cambiado", this.data);
    },
    subscribe (callback) {
        this.listeners.push(callback);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Cdh4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResults", ()=>initResults);
var _state = require("../../state");
function initResults(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    const cs = (0, _state.state).getState();
    const obtenerResultado = ()=>{
        const player = cs.currentGame.myPlay;
        const computer = cs.currentGame.computerPlay;
        /* if ( player&&computer.includes("")) {
            params.goTo('/welcome')
        } */ (0, _state.state).whoWins(player, computer);
    };
    obtenerResultado();
    const history = cs.history;
    const result = history[history.length - 1];
    //console.log("result", result);
    const playerWins = cs.history.filter((p)=>p === "ganaste");
    const computerWins = cs.history.filter((c)=>c === "perdiste");
    div.innerHTML = `

     <div>
        <div class="cnt-results">
            <my-result result="${result}"></my-result>
            <div class="score">
                <my-text>Resultados</my-text>
                <my-text>Player: ${playerWins.length}</my-text>
                <my-text>Computer: ${computerWins.length}</my-text>
            </div>
        </div>
        <div class="cnt-button">
            <my-button class="reset">¡Volver a jugar!</my-button>
            <my-button class="exit">Exit</my-button>
        </div>
    </div>
    `;
    style.innerHTML = `
    .container{
        width: 375px;
        margin: 0 auto;
        height: 100vh;
        overflow: hidden;
        padding: 10px 0 0;
    }
    .cnt-results{
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
    
    .score{
        border: solid 10px;
        border-radius: 10px;
        padding: 10px 
    }
    .cnt-button{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px
    }
    `;
    div.className = "container";
    div.appendChild(style);
    const buttonReset = div.querySelector(".reset");
    buttonReset?.addEventListener("click", (e)=>{
        e.preventDefault();
        params.goTo("/play");
    });
    const buttonExit = div.querySelector(".exit");
    buttonExit?.addEventListener("click", (e)=>{
        e.preventDefault();
        params.goTo("/welcome");
    });
    return div;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ZXz4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCounter", ()=>initCounter);
function initCounter() {
    class Counter extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.countdown();
        }
        render(time) {
            this.shadow.innerHTML = `
            <div class="counter">
            <h1>${time}</h1>
            </div>
            `;
            /* if (time == 0) {
                this.shadow.innerHTML = `
                <div class="counter">
                </div>
                <div class="cnt-button">
                <div class="cartel">
                <my-text>¡Se agoto el tiempo!</my-text>
                <my-button>¡reset!</my-button>
                </div>
                </div>
                `
            }
                
            const button = this.shadow.querySelector('my-button')
            button?.addEventListener('click', e =>{
                e.preventDefault()
                this.countdown();
            }) */ const style = document.createElement("style");
            style.innerHTML = `
            .counter{
                border-radius: 100%;
                border: solid 20px #000;
                Width: 200px;
                Height: 200px;
                margin: 0 auto
            }
            .counter > h1{
                font-size:100px;
                text-align: center;
                font-family: 'Odibee Sans', cursive; 
                margin: 0;
                margin-top: 50px;   
            }

            `;
            this.shadow.appendChild(style);
        }
        countdown() {
            let counter = 3;
            const intervalId = setInterval(()=>{
                if (counter >= 0) {
                    this.render(counter);
                    counter--;
                } else clearInterval(intervalId);
            }, 1000);
        }
    }
    customElements.define("my-counter", Counter);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bxdRM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResult", ()=>initResult);
const results = {
    ganaste: require("url:../../image/ganaste.png"),
    perdiste: require("url:../../image/perdiste.png"),
    empate: require("url:../../image/empate.png")
};
function initResult() {
    class Result extends HTMLElement {
        constructor(){
            super();
        }
        connectedCallback() {
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.result = this.getAttribute("result");
            this.shadow.innerHTML = `
            <div class="texto">
            <my-text>${this.result.toUpperCase()}</my-text>
            </div>
            `;
            const style = document.createElement("style");
            style.innerHTML = `

            :host {
                position: relative;
            }
            .texto{
                position: absolute;
                bottom: 85px;
                left: 23%;
            }
            .img{   
                height: 220px; 
            }

            `;
            this.shadow.append(style);
            this.render();
        }
        render() {
            const img = document.createElement("img");
            img.className = "img";
            if (this.result == "ganaste") img.src = `${results[this.result]}`;
            if (this.result == "perdiste") img.src = `${results[this.result]}`;
            if (this.result == "empate") img.src = `${results[this.result]}`;
            this.shadow.append(img);
        }
    }
    customElements.define("my-result", Result);
}

},{"url:../../image/ganaste.png":"6B3Tw","url:../../image/perdiste.png":"A2IKY","url:../../image/empate.png":"8kOvW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6B3Tw":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "ganaste.15efce64.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"A2IKY":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "perdiste.4327e62c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8kOvW":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "empate.110b694c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["iJYvl","h7u1C"], "h7u1C", "parcelRequire555a")

//# sourceMappingURL=index.b71e74eb.js.map
