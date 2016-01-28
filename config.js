System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "components/main.js",
      "npm:react-dom@0.14.6",
      "npm:react@0.14.6",
      "npm:react-dom@0.14.6/index",
      "npm:react@0.14.6/react",
      "npm:react@0.14.6/lib/ReactDOM",
      "npm:react@0.14.6/lib/React",
      "npm:react@0.14.6/lib/ReactCurrentOwner",
      "npm:react@0.14.6/lib/ReactVersion",
      "npm:react@0.14.6/lib/ReactReconciler",
      "npm:react@0.14.6/lib/ReactDOMTextComponent",
      "npm:react@0.14.6/lib/ReactPerf",
      "npm:react@0.14.6/lib/ReactDefaultInjection",
      "npm:react@0.14.6/lib/ReactInstanceHandles",
      "npm:react@0.14.6/lib/ReactMount",
      "npm:react@0.14.6/lib/ReactUpdates",
      "npm:react@0.14.6/lib/findDOMNode",
      "npm:react@0.14.6/lib/Object.assign",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:react@0.14.6/lib/renderSubtreeIntoContainer",
      "npm:react@0.14.6/lib/ReactDOMServer",
      "npm:react@0.14.6/lib/ReactIsomorphic",
      "npm:react@0.14.6/lib/deprecated",
      "npm:fbjs@0.6.1/lib/warning",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:react@0.14.6/lib/escapeTextContentForBrowser",
      "npm:react@0.14.6/lib/ClientReactRootIndex",
      "npm:react@0.14.6/lib/ServerReactRootIndex",
      "npm:react@0.14.6/lib/ReactRootIndex",
      "npm:react@0.14.6/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.6/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.6/lib/ReactInstanceMap",
      "npm:react@0.14.6/lib/ReactInjection",
      "npm:react@0.14.6/lib/ReactReconcileTransaction",
      "npm:react@0.14.6/lib/SVGDOMPropertyConfig",
      "npm:react@0.14.6/lib/ReactMarkupChecksum",
      "npm:react@0.14.6/lib/ReactRef",
      "npm:react@0.14.6/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.14.6/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.6/lib/ReactElement",
      "npm:react@0.14.6/lib/DOMChildrenOperations",
      "npm:react@0.14.6/lib/DOMPropertyOperations",
      "npm:react@0.14.6/lib/setTextContent",
      "npm:react@0.14.6/lib/validateDOMNesting",
      "npm:react@0.14.6/lib/EnterLeaveEventPlugin",
      "npm:react@0.14.6/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.6/lib/ChangeEventPlugin",
      "npm:react@0.14.6/lib/DefaultEventPluginOrder",
      "npm:react@0.14.6/lib/BeforeInputEventPlugin",
      "npm:react@0.14.6/lib/ReactDOMComponent",
      "npm:react@0.14.6/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.6/lib/ReactEventListener",
      "npm:react@0.14.6/lib/SelectEventPlugin",
      "npm:react@0.14.6/lib/SimpleEventPlugin",
      "npm:react@0.14.6/lib/ReactDefaultPerf",
      "npm:react@0.14.6/lib/DOMProperty",
      "npm:react@0.14.6/lib/ReactUpdateQueue",
      "npm:react@0.14.6/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.6/lib/instantiateReactComponent",
      "npm:react@0.14.6/lib/shouldUpdateReactComponent",
      "npm:fbjs@0.6.1/lib/containsNode",
      "npm:react@0.14.6/lib/setInnerHTML",
      "npm:react@0.14.6/lib/CallbackQueue",
      "npm:react@0.14.6/lib/PooledClass",
      "npm:react@0.14.6/lib/Transaction",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:fbjs@0.6.1/lib/emptyObject",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:react@0.14.6/lib/ReactServerRendering",
      "npm:react@0.14.6/lib/ReactClass",
      "npm:react@0.14.6/lib/ReactChildren",
      "npm:react@0.14.6/lib/ReactDOMFactories",
      "npm:react@0.14.6/lib/ReactElementValidator",
      "npm:react@0.14.6/lib/ReactPropTypes",
      "npm:react@0.14.6/lib/onlyChild",
      "npm:react@0.14.6/lib/ReactComponent",
      "npm:fbjs@0.6.1/lib/emptyFunction",
      "npm:react@0.14.6/lib/ReactNativeComponent",
      "npm:react@0.14.6/lib/ReactComponentEnvironment",
      "npm:react@0.14.6/lib/adler32",
      "npm:react@0.14.6/lib/ViewportMetrics",
      "npm:fbjs@0.6.1/lib/keyOf",
      "npm:react@0.14.6/lib/getEventTarget",
      "npm:react@0.14.6/lib/isTextInputElement",
      "npm:fbjs@0.6.1/lib/shallowEqual",
      "npm:react@0.14.6/lib/ReactEventEmitterMixin",
      "npm:react@0.14.6/lib/SyntheticMouseEvent",
      "npm:react@0.14.6/lib/quoteAttributeValueForBrowser",
      "npm:react@0.14.6/lib/ReactEmptyComponent",
      "npm:react@0.14.6/lib/SyntheticCompositionEvent",
      "npm:react@0.14.6/lib/FallbackCompositionState",
      "npm:react@0.14.6/lib/SyntheticInputEvent",
      "npm:react@0.14.6/lib/canDefineProperty",
      "npm:react@0.14.6/lib/ReactMultiChild",
      "npm:react@0.14.6/lib/EventPluginHub",
      "npm:react@0.14.6/lib/ReactOwner",
      "npm:react@0.14.6/lib/ReactInputSelection",
      "npm:react@0.14.6/lib/EventConstants",
      "npm:react@0.14.6/lib/isEventSupported",
      "npm:react@0.14.6/lib/ReactDOMIDOperations",
      "npm:react@0.14.6/lib/EventPluginRegistry",
      "npm:react@0.14.6/lib/Danger",
      "npm:react@0.14.6/lib/EventPropagators",
      "npm:react@0.14.6/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.6/lib/SyntheticEvent",
      "npm:react@0.14.6/lib/AutoFocusUtils",
      "npm:react@0.14.6/lib/CSSPropertyOperations",
      "npm:react@0.14.6/lib/ReactDOMInput",
      "npm:react@0.14.6/lib/ReactDOMOption",
      "npm:react@0.14.6/lib/ReactDOMSelect",
      "npm:react@0.14.6/lib/ReactDOMTextarea",
      "npm:fbjs@0.6.1/lib/getUnboundedScrollPosition",
      "npm:react@0.14.6/lib/ReactDOMButton",
      "npm:fbjs@0.6.1/lib/getActiveElement",
      "npm:react@0.14.6/lib/getEventCharCode",
      "npm:react@0.14.6/lib/SyntheticClipboardEvent",
      "npm:react@0.14.6/lib/SyntheticFocusEvent",
      "npm:react@0.14.6/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.6/lib/SyntheticDragEvent",
      "npm:react@0.14.6/lib/SyntheticTouchEvent",
      "npm:react@0.14.6/lib/SyntheticUIEvent",
      "npm:react@0.14.6/lib/SyntheticWheelEvent",
      "npm:react@0.14.6/lib/ReactDefaultPerfAnalysis",
      "npm:fbjs@0.6.1/lib/performanceNow",
      "npm:fbjs@0.6.1/lib/isTextNode",
      "npm:fbjs@0.6.1/lib/EventListener",
      "npm:react@0.14.6/lib/ReactCompositeComponent",
      "npm:react@0.14.6/lib/ReactServerBatchingStrategy",
      "npm:react@0.14.6/lib/getIteratorFn",
      "npm:process@0.11.2",
      "npm:react@0.14.6/lib/ReactPropTypeLocationNames",
      "npm:fbjs@0.6.1/lib/keyMirror",
      "npm:react@0.14.6/lib/ReactServerRenderingTransaction",
      "npm:react@0.14.6/lib/ReactPropTypeLocations",
      "npm:react@0.14.6/lib/ReactNoopUpdateQueue",
      "npm:react@0.14.6/lib/traverseAllChildren",
      "npm:fbjs@0.6.1/lib/mapObject",
      "npm:react@0.14.6/lib/getEventModifierState",
      "npm:react@0.14.6/lib/getTextContentAccessor",
      "npm:react@0.14.6/lib/accumulateInto",
      "npm:react@0.14.6/lib/forEachAccumulated",
      "npm:fbjs@0.6.1/lib/focusNode",
      "npm:react@0.14.6/lib/CSSProperty",
      "npm:fbjs@0.6.1/lib/memoizeStringOnly",
      "npm:fbjs@0.6.1/lib/camelizeStyleName",
      "npm:react@0.14.6/lib/dangerousStyleValue",
      "npm:fbjs@0.6.1/lib/hyphenateStyleName",
      "npm:react@0.14.6/lib/ReactErrorUtils",
      "npm:fbjs@0.6.1/lib/createNodesFromMarkup",
      "npm:fbjs@0.6.1/lib/getMarkupWrap",
      "npm:react@0.14.6/lib/ReactChildReconciler",
      "npm:react@0.14.6/lib/flattenChildren",
      "npm:react@0.14.6/lib/EventPluginUtils",
      "npm:react@0.14.6/lib/ReactDOMSelection",
      "npm:react@0.14.6/lib/LinkedValueUtils",
      "npm:fbjs@0.6.1/lib/isNode",
      "npm:fbjs@0.6.1/lib/performance",
      "npm:react@0.14.6/lib/getEventKey",
      "npm:process@0.11.2/browser",
      "npm:fbjs@0.6.1/lib/camelize",
      "npm:react@0.14.6/lib/getNodeForCharacterOffset",
      "npm:fbjs@0.6.1/lib/hyphenate",
      "npm:fbjs@0.6.1/lib/createArrayFromMixed",
      "npm:fbjs@0.6.1/lib/toArray"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "core-js": "npm:core-js@1.2.6",
    "react": "npm:react@0.14.6",
    "react-bootstrap": "npm:react-bootstrap@0.28.2",
    "react-dom": "npm:react-dom@0.14.6",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash-compat@3.10.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:react-bootstrap@0.28.2": {
      "babel-runtime": "npm:babel-runtime@5.8.35",
      "classnames": "npm:classnames@2.2.3",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "invariant": "npm:invariant@2.2.0",
      "keycode": "npm:keycode@2.1.0",
      "lodash-compat": "npm:lodash-compat@3.10.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.6",
      "react-dom": "npm:react-dom@0.14.6",
      "react-overlays": "npm:react-overlays@0.5.4",
      "react-prop-types": "npm:react-prop-types@0.3.0",
      "uncontrollable": "npm:uncontrollable@3.2.1",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-dom@0.14.6": {
      "react": "npm:react@0.14.6"
    },
    "npm:react-overlays@0.5.4": {
      "classnames": "npm:classnames@2.2.3",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "react": "npm:react@0.14.6",
      "react-dom": "npm:react-dom@0.14.6",
      "react-prop-types": "npm:react-prop-types@0.2.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-prop-types@0.2.2": {
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-prop-types@0.3.0": {
      "warning": "npm:warning@2.1.0"
    },
    "npm:react@0.14.6": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:uncontrollable@3.2.1": {
      "invariant": "npm:invariant@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.6"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
