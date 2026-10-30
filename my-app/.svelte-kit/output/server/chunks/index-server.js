import { A as active_reaction, C as hydratable_serialization_failed, Gt as run, M as set_active_effect, N as set_active_reaction, Ut as noop, Vt as define_property, _ as getAllContexts, at as without_reactive_context, b as setContext, g as createContext, h as get_render_context, ht as async_mode_flag, k as active_effect, st as queue_micro_task, v as getContext, w as lifecycle_function_unavailable, x as ssr_context, y as hasContext, yt as experimental_async_required } from "./server.js";
import * as devalue from "devalue";
// \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
// node_modules/svelte/src/internal/client/dom/elements/events.js
/**
* Used on elements, as a map of event type -> event handler,
* and on events themselves to track which element handled an event
*/
var event_symbol = Symbol("events");
/** @type {Set<string>} */
var all_registered_events = /* @__PURE__ */ new Set();
/** @type {Set<(events: Array<string>) => void>} */
var root_event_handles = /* @__PURE__ */ new Set();
/**
* @param {string} event_name
* @param {EventTarget} dom
* @param {EventListener} [handler]
* @param {AddEventListenerOptions} [options]
*/
function create_event(event_name, dom, handler, options = {}) {
	/**
	* @this {EventTarget}
	*/
	function target_handler(event) {
		if (!options.capture) handle_event_propagation.call(dom, event);
		if (!event.cancelBubble) return without_reactive_context(() => {
			return handler?.call(this, event);
		});
	}
	if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") {
		target_handler.__removed = false;
		queue_micro_task(() => {
			if (!target_handler.__removed) dom.addEventListener(event_name, target_handler, options);
		});
	} else dom.addEventListener(event_name, target_handler, options);
	return target_handler;
}
/**
* Attaches an event handler to an element and returns a function that removes the handler. Using this
* rather than `addEventListener` will preserve the correct order relative to handlers added declaratively
* (with attributes like `onclick`), which use event delegation for performance reasons
*
* @param {EventTarget} element
* @param {string} type
* @param {EventListener} handler
* @param {AddEventListenerOptions} [options]
*/
function on(element, type, handler, options = {}) {
	var target_handler = create_event(type, element, handler, options);
	return () => {
		target_handler.__removed = true;
		element.removeEventListener(type, target_handler, options);
	};
}
var last_propagated_event = null;
var last_propagated_event_clear_scheduled = false;
/**
* @this {EventTarget}
* @param {Event} event
* @returns {void}
*/
function handle_event_propagation(event) {
	var handler_element = this;
	var owner_document = handler_element.ownerDocument;
	var event_name = event.type;
	var path = event.composedPath?.() || [];
	var current_target = path[0] || event.target;
	last_propagated_event = event;
	if (!last_propagated_event_clear_scheduled) {
		last_propagated_event_clear_scheduled = true;
		setTimeout(() => {
			last_propagated_event_clear_scheduled = false;
			last_propagated_event = null;
		});
	}
	var path_idx = 0;
	var handled_at = last_propagated_event === event && event[event_symbol];
	if (handled_at) {
		var at_idx = path.indexOf(handled_at);
		if (at_idx !== -1 && (handler_element === document || handler_element === window)) {
			event[event_symbol] = handler_element;
			return;
		}
		var handler_idx = path.indexOf(handler_element);
		if (handler_idx === -1) return;
		if (at_idx <= handler_idx) path_idx = at_idx;
	}
	current_target = path[path_idx] || event.target;
	if (current_target === handler_element) return;
	define_property(event, "currentTarget", {
		configurable: true,
		get() {
			return current_target || owner_document;
		}
	});
	var previous_reaction = active_reaction;
	var previous_effect = active_effect;
	set_active_reaction(null);
	set_active_effect(null);
	try {
		/**
		* @type {unknown}
		*/
		var throw_error;
		/**
		* @type {unknown[]}
		*/
		var other_errors = [];
		while (current_target !== null) {
			if (current_target === handler_element) break;
			try {
				var delegated = current_target[event_symbol]?.[event_name];
				if (delegated != null && (!current_target.disabled || event.target === current_target)) delegated.call(current_target, event);
			} catch (error) {
				if (throw_error) other_errors.push(error);
				else throw_error = error;
			}
			if (event.cancelBubble) break;
			path_idx++;
			current_target = path_idx < path.length ? path[path_idx] : null;
		}
		if (throw_error) {
			for (let error of other_errors) queueMicrotask(() => {
				throw error;
			});
			throw throw_error;
		}
	} finally {
		event[event_symbol] = handler_element;
		delete event.currentTarget;
		set_active_reaction(previous_reaction);
		set_active_effect(previous_effect);
	}
}
// node_modules/svelte/src/internal/server/abort-signal.js
function getAbortSignal() {
	let context = ssr_context;
	while (context !== null) {
		if (context.r !== null) return context.r.global.get_abort_signal();
		context = context.p;
	}
	return new AbortController().signal;
}
// node_modules/svelte/src/internal/server/hydratable.js
/** @import { HydratableLookupEntry } from '#server' */
/**
* @template T
* @param {string} key
* @param {() => T} fn
* @returns {T}
*/
function hydratable(key, fn) {
	if (!async_mode_flag) experimental_async_required("hydratable");
	const { hydratable } = get_render_context();
	let entry = hydratable.lookup.get(key);
	if (entry !== void 0) return entry.value;
	const value = fn();
	entry = encode(key, value, hydratable.unresolved_promises);
	hydratable.lookup.set(key, entry);
	return value;
}
/**
* @param {string} key
* @param {any} value
* @param {Map<Promise<any>, string>} [unresolved]
*/
function encode(key, value, unresolved) {
	/** @type {HydratableLookupEntry} */
	const entry = {
		value,
		serialized: ""
	};
	let uid = 1;
	entry.serialized = devalue.uneval(entry.value, (value, uneval) => {
		if (is_promise(value)) {
			const placeholder = `"${uid++}"`;
			const p = value.then((v) => {
				entry.serialized = entry.serialized.replace(placeholder, () => `r(${uneval(v)})`);
			}).catch((devalue_error) => hydratable_serialization_failed(key, serialization_stack(entry.stack, devalue_error?.stack)));
			unresolved?.set(p, key);
			p.catch(() => {}).finally(() => unresolved?.delete(p));
			(entry.promises ??= []).push(p);
			return placeholder;
		}
	});
	return entry;
}
/**
* @param {any} value
* @returns {value is Promise<any>}
*/
function is_promise(value) {
	return Object.prototype.toString.call(value) === "[object Promise]";
}
/**
* @param {string | undefined} root_stack
* @param {string | undefined} uneval_stack
*/
function serialization_stack(root_stack, uneval_stack) {
	let out = "";
	if (root_stack) out += root_stack + "\n";
	if (uneval_stack) out += "Caused by:\n" + uneval_stack + "\n";
	return out || "<missing stack trace>";
}
// node_modules/svelte/src/internal/server/blocks/snippet.js
/** @import { Snippet } from 'svelte' */
/** @import { Renderer } from '../renderer' */
/** @import { Getters } from '#shared' */
/**
* Create a snippet programmatically
* @template {unknown[]} Params
* @param {(...params: Getters<Params>) => {
*   render: () => string
*   setup?: (element: Element) => void | (() => void)
* }} fn
* @returns {Snippet<Params>}
*/
function createRawSnippet(fn) {
	return (renderer, ...args) => {
		var getters = args.map((value) => () => value);
		renderer.push(fn(...getters).render().trim());
	};
}
// node_modules/svelte/src/index-server.js
/** @import { SSRContext } from '#server' */
/** @import { Renderer } from './internal/server/renderer.js' */
var index_server_exports = /* @__PURE__ */ __exportAll({
	afterUpdate: () => noop,
	beforeUpdate: () => noop,
	createContext: () => createContext,
	createEventDispatcher: () => createEventDispatcher,
	createRawSnippet: () => createRawSnippet,
	flushSync: () => noop,
	fork: () => fork,
	getAbortSignal: () => getAbortSignal,
	getAllContexts: () => getAllContexts,
	getContext: () => getContext,
	hasContext: () => hasContext,
	hydratable: () => hydratable,
	hydrate: () => hydrate,
	mount: () => mount,
	onDestroy: () => onDestroy,
	onMount: () => noop,
	setContext: () => setContext,
	settled: () => settled,
	tick: () => tick,
	unmount: () => unmount,
	untrack: () => run
});
/** @param {() => void} fn */
function onDestroy(fn) {
	/** @type {Renderer} */ ssr_context.r.on_destroy(fn);
}
function createEventDispatcher() {
	return noop;
}
function mount() {
	lifecycle_function_unavailable("mount");
}
function hydrate() {
	lifecycle_function_unavailable("hydrate");
}
function unmount() {
	lifecycle_function_unavailable("unmount");
}
function fork() {
	lifecycle_function_unavailable("fork");
}
async function tick() {}
async function settled() {}
export { all_registered_events as a, root_event_handles as c, unmount as i, __exportAll as l, mount as n, handle_event_propagation as o, tick as r, on as s, index_server_exports as t };
