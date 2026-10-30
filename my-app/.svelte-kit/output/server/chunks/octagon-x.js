import "./index-server.js";
import { Gt as run, Ht as fallback, Kt as to_array, a as derived, d as spread_props, o as element, r as attributes, s as ensure_array_like, v as getContext } from "./server.js";
// node_modules/svelte-sonner/dist/internal/helpers.js
function cn(...classes) {
	return classes.filter(Boolean).join(" ");
}
var isBrowser = typeof document !== "undefined";
globalThis.Date;
globalThis.Set;
var SvelteMap = globalThis.Map;
globalThis.URL;
globalThis.URLSearchParams;
/**
* @param {any} _
*/
function createSubscriber(_) {
	return () => {};
}
// node_modules/svelte-sonner/dist/toast-state.svelte.js
var toastsCounter = 0;
function getToastId(data) {
	return typeof data?.id === "number" || typeof data?.id === "string" && data.id.length > 0 ? data.id : toastsCounter++;
}
var ToastState = class {
	toasts = [];
	heights = [];
	#pendingRemovals = /* @__PURE__ */ new Map();
	#findToastIdx = (id) => {
		const idx = this.toasts.findIndex((toast) => toast.id === id);
		if (idx === -1) return null;
		return idx;
	};
	#findHeightIdx = (toastId) => this.heights.findIndex((height) => height.toastId === toastId);
	addToast = (data) => {
		if (!isBrowser) return;
		this.toasts.unshift(data);
	};
	updateToast = ({ id, data, type, message }) => {
		const toastIdx = this.toasts.findIndex((toast) => toast.id === id);
		const toastToUpdate = this.toasts[toastIdx];
		this.toasts[toastIdx] = {
			...toastToUpdate,
			...data,
			id,
			title: message,
			type,
			dismiss: false,
			delete: false,
			updated: true
		};
	};
	markDismissed = (id) => {
		const toastIdx = this.#findToastIdx(id);
		if (toastIdx === null) return;
		const toast = this.toasts[toastIdx];
		if (!toast) return;
		if (!toast.dismiss || !toast.delete) this.toasts[toastIdx] = {
			...toast,
			dismiss: true,
			delete: true
		};
	};
	scheduleRemoval = (id, delay) => {
		this.cancelRemoval(id);
		this.#pendingRemovals.set(id, setTimeout(() => {
			this.#pendingRemovals.delete(id);
			this.remove(id);
		}, delay));
	};
	cancelRemoval = (id) => {
		const timeout = this.#pendingRemovals.get(id);
		if (timeout !== void 0) {
			clearTimeout(timeout);
			this.#pendingRemovals.delete(id);
		}
	};
	create = (data) => {
		const { message, ...rest } = data;
		const id = getToastId(data);
		const dismissible = data.dismissible !== void 0 ? data.dismissible : data.dismissable !== void 0 ? data.dismissable : true;
		const type = data.type === void 0 ? "default" : data.type;
		run(() => {
			this.cancelRemoval(id);
			const alreadyExists = this.toasts.find((toast) => toast.id === id);
			if (alreadyExists?.dismiss || alreadyExists?.delete) {
				this.remove(id);
				this.addToast({
					...rest,
					id,
					title: message,
					dismissible,
					type,
					updated: true
				});
			} else if (alreadyExists) this.updateToast({
				id,
				data,
				type,
				message,
				dismissible
			});
			else this.addToast({
				...rest,
				id,
				title: message,
				dismissible,
				type
			});
		});
		return id;
	};
	dismiss = (id) => {
		run(() => {
			if (id === void 0) {
				this.toasts = this.toasts.map((toast) => toast.dismiss ? toast : {
					...toast,
					dismiss: true
				});
				return;
			}
			const toastIdx = this.toasts.findIndex((toast) => toast.id === id);
			if (this.toasts[toastIdx]) this.toasts[toastIdx] = {
				...this.toasts[toastIdx],
				dismiss: true
			};
		});
		return id;
	};
	remove = (id) => {
		if (id === void 0) {
			this.toasts = [];
			return;
		}
		const toastIdx = this.#findToastIdx(id);
		if (toastIdx === null) return;
		this.toasts.splice(toastIdx, 1);
		return id;
	};
	message = (message, data) => {
		return this.create({
			...data,
			type: "default",
			message
		});
	};
	error = (message, data) => {
		return this.create({
			...data,
			type: "error",
			message
		});
	};
	success = (message, data) => {
		return this.create({
			...data,
			type: "success",
			message
		});
	};
	info = (message, data) => {
		return this.create({
			...data,
			type: "info",
			message
		});
	};
	warning = (message, data) => {
		return this.create({
			...data,
			type: "warning",
			message
		});
	};
	loading = (message, data) => {
		return this.create({
			...data,
			type: "loading",
			message
		});
	};
	promise = (promise, data) => {
		if (!data) return;
		let id = void 0;
		if (data.loading !== void 0) id = this.create({
			...data,
			promise,
			type: "loading",
			message: typeof data.loading === "string" ? data.loading : data.loading()
		});
		const p = promise instanceof Promise ? promise : promise();
		let shouldDismiss = id !== void 0;
		p.then((response) => {
			if (typeof response === "object" && response && "ok" in response && typeof response.ok === "boolean" && !response.ok) {
				shouldDismiss = false;
				const message = constructPromiseErrorMessage(response);
				this.create({
					id,
					type: "error",
					message
				});
			} else if (data.success !== void 0) {
				shouldDismiss = false;
				const message = typeof data.success === "function" ? data.success(response) : data.success;
				this.create({
					id,
					type: "success",
					message
				});
			}
		}).catch((error) => {
			if (data.error !== void 0) {
				shouldDismiss = false;
				const message = typeof data.error === "function" ? data.error(error) : data.error;
				this.create({
					id,
					type: "error",
					message
				});
			}
		}).finally(() => {
			if (shouldDismiss) {
				this.dismiss(id);
				id = void 0;
			}
			data.finally?.();
		});
		return id;
	};
	custom = (component, data) => {
		const id = getToastId(data);
		this.create({
			component,
			...data,
			id
		});
		return id;
	};
	removeHeight = (id) => {
		this.heights = this.heights.filter((height) => height.toastId !== id);
	};
	setHeight = (data) => {
		run(() => {
			const heightIdx = this.#findHeightIdx(data.toastId);
			if (heightIdx !== -1) {
				this.heights[heightIdx] = data;
				return;
			}
			const order = new Map(this.toasts.map((toast, idx) => [toast.id, idx]));
			const toastOrder = order.get(data.toastId) ?? -1;
			const insertIdx = this.heights.findIndex((height) => (order.get(height.toastId) ?? Infinity) > toastOrder);
			if (insertIdx === -1) this.heights.push(data);
			else this.heights.splice(insertIdx, 0, data);
		});
	};
	reset = () => {
		this.toasts = [];
		this.heights = [];
		this.#pendingRemovals.forEach((timeout) => clearTimeout(timeout));
		this.#pendingRemovals.clear();
	};
};
function constructPromiseErrorMessage(response) {
	if (response && typeof response === "object" && "status" in response) return `HTTP error! Status: ${response.status}`;
	return `Error! ${response}`;
}
var toastState = new ToastState();
function toastFunction(message, data) {
	return toastState.message(message, data);
}
var SonnerState = class {
	/**
	* A derived state of the toasts that are not dismissed.
	*/
	#activeToasts = derived(() => toastState.toasts.filter((toast) => !toast.dismiss));
	get toasts() {
		return this.#activeToasts();
	}
};
var toast = Object.assign(toastFunction, {
	success: toastState.success,
	info: toastState.info,
	warning: toastState.warning,
	error: toastState.error,
	custom: toastState.custom,
	message: toastState.message,
	promise: toastState.promise,
	dismiss: toastState.dismiss,
	loading: toastState.loading,
	getActiveToasts: () => {
		return toastState.toasts.filter((toast) => !toast.dismiss);
	}
});
// node_modules/@lucide/svelte/dist/utils/defaultAttributes.js
/**
* @file
* @license @lucide/svelte v1.61.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
// node_modules/@lucide/svelte/dist/utils/mergeClasses.js
/**
* @file
* @license @lucide/svelte v1.61.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
/**
* Merges classes into a single string
*
* @param {array} classes
* @returns {string} A string of classes
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
// node_modules/@lucide/svelte/dist/utils/buildLucideIconNode.js
/**
* @file
* @license @lucide/svelte v1.61.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
function isDefined(value) {
	return value !== null && value !== void 0;
}
/**
* Creates a Lucide icon node (an svgson-like format) from a Lucide icon object.
*
* @param icon The icon to build.
* @param params Additional build parameters.
*/
function buildLucideIconNode(icon, params = {}) {
	const attributeNames = params.attributeNames ?? {};
	const getAttributeName = (attributeName) => attributeNames[attributeName] ?? attributeName;
	const viewBoxWidth = icon.size ?? icon.width ?? defaultAttributes["width"];
	const viewBoxHeight = icon.size ?? icon.height ?? defaultAttributes["height"];
	const aliasClassNames = icon.aliases?.filter((alias) => typeof alias === "string" && alias.trim() !== "").map((alias) => `lucide-${alias}`) ?? [];
	const iconClassNames = [...icon.name ? [`lucide-${icon.name}`] : [], ...aliasClassNames];
	const classNamesFromClassName = params.className?.split(" ").filter(Boolean) ?? [];
	const className = params.includeDefaultClasses === false ? mergeClasses(...classNamesFromClassName) : mergeClasses("lucide", ...iconClassNames, ...classNamesFromClassName);
	const calculatedStrokeWidth = params.absoluteStrokeWidth ? Number(params.strokeWidth ?? defaultAttributes["stroke-width"]) * Number(icon.size ?? icon.width ?? defaultAttributes["width"]) / Number(params.size ?? params.width ?? defaultAttributes["width"]) : params.strokeWidth ?? defaultAttributes["stroke-width"];
	return [
		"svg",
		{
			...Object.entries(defaultAttributes).reduce((attrs, [attrName, value]) => {
				attrs[getAttributeName(attrName)] = value;
				return attrs;
			}, {}),
			..."color" in params && params.color && { [getAttributeName("stroke")]: params.color },
			..."size" in params && isDefined(params.size) && {
				[getAttributeName("width")]: params.size,
				[getAttributeName("height")]: params.size
			},
			..."width" in params && isDefined(params.width) && { [getAttributeName("width")]: params.width },
			..."height" in params && isDefined(params.height) && { [getAttributeName("height")]: params.height },
			[getAttributeName("stroke-width")]: calculatedStrokeWidth,
			...className && { [getAttributeName("class")]: className },
			[getAttributeName("viewBox")]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
			...params.hasA11yProp === false ? { [getAttributeName("aria-hidden")]: "true" } : {},
			..."attributes" in params && params.attributes
		},
		icon.node.map((child) => {
			const [name, attrs, children] = child;
			const nextAttrs = params.nonScalingStroke ? {
				[getAttributeName("vector-effect")]: "non-scaling-stroke",
				...attrs
			} : attrs;
			return children ? [
				name,
				nextAttrs,
				children
			] : [name, nextAttrs];
		})
	];
}
// node_modules/@lucide/svelte/dist/utils/hasA11yProp.js
/**
* @file
* @license @lucide/svelte v1.61.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
/**
* Check if a component has an accessibility prop
*
* @param {object} props
* @returns {boolean} Whether the component has an accessibility prop
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
// node_modules/@lucide/svelte/dist/context.js
/**
* @file
* @license @lucide/svelte v1.61.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LucideContext = Symbol("lucide-context");
var getLucideContext = () => getContext(LucideContext);
// node_modules/@lucide/svelte/dist/Icon.svelte
function Icon($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const globalProps = getLucideContext() ?? {};
		const { color = globalProps.color ?? "currentColor", size = globalProps.size ?? 24, width = size, height = size, strokeWidth = globalProps.strokeWidth ?? 2, absoluteStrokeWidth = globalProps.absoluteStrokeWidth ?? false, nonScalingStroke = globalProps.nonScalingStroke ?? false, iconNode = [], icon = {
			node: iconNode,
			aliases: [],
			size: 24
		}, class: propsClass, children, $$slots, $$events, ...props } = $$props;
		const hasAccessibleProp = derived(() => Boolean(children) || hasA11yProp(props));
		const $$d = derived(() => buildLucideIconNode(icon, {
			color,
			width,
			height,
			strokeWidth,
			absoluteStrokeWidth,
			nonScalingStroke,
			className: mergeClasses("lucide-icon", globalProps.class),
			hasA11yProp: hasAccessibleProp(),
			attributes: props
		})), $$derived_array = derived(() => to_array($$d(), 3)), svgAttributes = derived(() => $$derived_array()[1]), builtIconNode = derived(() => fallback($$derived_array()[2], () => [], true));
		const iconAttributes = derived(() => ({
			...svgAttributes(),
			class: [...svgAttributes().class.split(" "), propsClass]
		}));
		$$renderer.push(`<svg${attributes({ ...iconAttributes() }, void 0, void 0, void 0, 3)}><!--[-->`);
		const each_array = ensure_array_like(builtIconNode());
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let [tag, attrs] = each_array[$$index];
			element($$renderer, tag, () => {
				$$renderer.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
			});
		}
		$$renderer.push(`<!--]-->`);
		children?.($$renderer);
		$$renderer.push(`<!----></svg>`);
	});
}
// node_modules/@lucide/svelte/dist/icons/octagon-x.svelte
var __iconData = {
	"name": "octagon-x",
	"size": 24,
	"node": [
		["path", { "d": "m15 9-6 6" }],
		["path", { "d": "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" }],
		["path", { "d": "m9 9 6 6" }]
	],
	"aliases": ["x-octagon"]
};
__iconData.node;
function Octagon_x($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([props, { icon: __iconData }]));
}
export { toastState as a, cn as c, toast as i, Icon as n, SvelteMap as o, SonnerState as r, createSubscriber as s, Octagon_x as t };
