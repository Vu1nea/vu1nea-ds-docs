// src/lib/docs/registry.ts
var groups = [
	"Actions",
	"Forms",
	"Display",
	"Feedback",
	"Navigation",
	"Overlays"
];
var cls = {
	name: "class",
	type: "string",
	description: "Extra classes merged onto the root element."
};
var entries = [
	{
		slug: "button",
		title: "Button",
		group: "Actions",
		description: "Triggers an action. Renders an anchor when `href` is set.",
		importLine: "import { Button } from '$lib/components/ui/button/index.js';",
		tables: [{ rows: [
			{
				name: "variant",
				type: "'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link'",
				default: "'default'",
				description: "Visual style."
			},
			{
				name: "color",
				type: "'purple' | 'orange' | 'blue' | 'light' | 'error'",
				default: "'purple'",
				description: "Brand color. Applies to the default and outline variants."
			},
			{
				name: "size",
				type: "'default' | 'lg' | 'icon' | 'icon-lg'",
				default: "'default'",
				description: "Padding and type size. Icon sizes are square."
			},
			{
				name: "rounded",
				type: "boolean",
				default: "false",
				description: "Pill shape instead of the 4px radius."
			},
			{
				name: "href",
				type: "string",
				description: "Renders an `<a>` instead of a `<button>`."
			},
			{
				name: "disabled",
				type: "boolean",
				default: "false",
				description: "Dims the button and blocks pointer events."
			}
		] }]
	},
	{
		slug: "badge",
		title: "Badge",
		group: "Display",
		description: "Short status label. Light variant is a bright fill, dark variant is a muted fill.",
		importLine: "import { Badge } from '$lib/components/ui/badge/index.js';",
		tables: [{ rows: [
			{
				name: "variant",
				type: "'light' | 'dark'",
				default: "'light'",
				description: "Light = bright fill with dark text. Dark = dark fill with bright text."
			},
			{
				name: "color",
				type: "'purple' | 'orange' | 'blue' | 'light'",
				default: "'purple'",
				description: "Brand color."
			},
			{
				name: "rounded",
				type: "boolean",
				default: "false",
				description: "Pill shape."
			},
			{
				name: "indicator",
				type: "boolean",
				default: "false",
				description: "Shows a small blue dot before the label."
			},
			{
				name: "href",
				type: "string",
				description: "Renders an `<a>` instead of a `<span>`."
			}
		] }]
	},
	{
		slug: "input",
		title: "Input",
		group: "Forms",
		description: "Single-line text field. Pair with `Label` and a hint line.",
		importLine: "import { Input } from '$lib/components/ui/input/index.js';",
		tables: [{ rows: [
			{
				name: "value",
				type: "string",
				description: "Bindable value."
			},
			{
				name: "type",
				type: "HTMLInputTypeAttribute",
				default: "'text'",
				description: "Any native input type, including `file`."
			},
			{
				name: "aria-invalid",
				type: "boolean | \"true\"",
				description: "Turns the border red."
			},
			{
				name: "disabled",
				type: "boolean",
				default: "false",
				description: "Dims and blocks input."
			},
			cls
		] }]
	},
	{
		slug: "textarea",
		title: "Textarea",
		group: "Forms",
		description: "Multi-line text field with the same states as Input.",
		importLine: "import { Textarea } from '$lib/components/ui/textarea/index.js';",
		tables: [{ rows: [
			{
				name: "value",
				type: "string",
				description: "Bindable value."
			},
			{
				name: "rows",
				type: "number",
				description: "Visible lines. Minimum height is 96px."
			},
			{
				name: "aria-invalid",
				type: "boolean | \"true\"",
				description: "Turns the border red."
			},
			{
				name: "disabled",
				type: "boolean",
				default: "false",
				description: "Dims and blocks input."
			},
			cls
		] }]
	},
	{
		slug: "checkbox",
		title: "Checkbox",
		group: "Forms",
		description: "Toggle one option on or off. Supports an indeterminate state for partial groups.",
		importLine: "import { Checkbox } from '$lib/components/ui/checkbox/index.js';",
		tables: [{ rows: [
			{
				name: "checked",
				type: "boolean",
				default: "false",
				description: "Bindable checked state."
			},
			{
				name: "indeterminate",
				type: "boolean",
				default: "false",
				description: "Shows a dash. Use for a parent of partly selected children."
			},
			{
				name: "disabled",
				type: "boolean",
				default: "false",
				description: "Dims and blocks input."
			},
			{
				name: "aria-invalid",
				type: "boolean | \"true\"",
				description: "Turns the border red."
			},
			cls
		] }]
	},
	{
		slug: "radio-group",
		title: "Radio group",
		group: "Forms",
		description: "Pick exactly one option from a short list.",
		importLine: "import * as RadioGroup from '$lib/components/ui/radio-group/index.js';",
		tables: [{
			title: "RadioGroup.Root",
			rows: [{
				name: "value",
				type: "string",
				description: "Bindable selected value."
			}, {
				name: "disabled",
				type: "boolean",
				default: "false",
				description: "Disables every item."
			}]
		}, {
			title: "RadioGroup.Item",
			rows: [
				{
					name: "value",
					type: "string",
					description: "Value this item selects."
				},
				{
					name: "id",
					type: "string",
					description: "Link a `Label` with `for`."
				},
				{
					name: "disabled",
					type: "boolean",
					default: "false",
					description: "Disables this item."
				}
			]
		}]
	},
	{
		slug: "select",
		title: "Select",
		group: "Forms",
		description: "Dropdown to choose one value from a list.",
		importLine: "import * as Select from '$lib/components/ui/select/index.js';",
		tables: [
			{
				title: "Select.Root",
				rows: [{
					name: "type",
					type: "'single' | 'multiple'",
					description: "Selection mode. Required."
				}, {
					name: "value",
					type: "string",
					description: "Bindable selected value."
				}]
			},
			{
				title: "Select.Trigger",
				rows: [{
					name: "size",
					type: "'default' | 'sm'",
					default: "'default'",
					description: "Height: 38px or 32px."
				}, cls]
			},
			{
				title: "Select.Item",
				rows: [{
					name: "value",
					type: "string",
					description: "Value this item selects."
				}]
			}
		]
	},
	{
		slug: "switch",
		title: "Switch",
		group: "Forms",
		description: "Immediate on/off setting, like a notification toggle.",
		importLine: "import { Switch } from '$lib/components/ui/switch/index.js';",
		tables: [{ rows: [
			{
				name: "checked",
				type: "boolean",
				default: "false",
				description: "Bindable on/off state."
			},
			{
				name: "disabled",
				type: "boolean",
				default: "false",
				description: "Dims and blocks input."
			},
			cls
		] }]
	},
	{
		slug: "date-picker",
		title: "Date picker",
		group: "Forms",
		description: "Text field with a calendar popover. Also available as a standalone `Calendar`.",
		importLine: "import { DatePicker } from '$lib/components/ui/date-picker/index.js';",
		tables: [{ rows: [
			{
				name: "value",
				type: "DateValue",
				description: "Bindable date from `@internationalized/date`."
			},
			{
				name: "label",
				type: "string",
				description: "Field label."
			},
			{
				name: "required",
				type: "boolean",
				default: "false",
				description: "Adds the required asterisk."
			},
			{
				name: "minValue",
				type: "DateValue",
				description: "Earliest selectable date."
			},
			{
				name: "maxValue",
				type: "DateValue",
				description: "Latest selectable date."
			},
			cls
		] }]
	},
	{
		slug: "card",
		title: "Card",
		group: "Display",
		description: "Surface that groups related content. Compose it from header, content and footer parts.",
		importLine: "import * as Card from '$lib/components/ui/card/index.js';",
		tables: [{
			title: "Card.Root",
			rows: [{
				name: "size",
				type: "'default' | 'sm'",
				default: "'default'",
				description: "Inner spacing: 24px or 16px."
			}, cls]
		}, {
			title: "Parts",
			rows: [
				{
					name: "Card.Header",
					type: "component",
					description: "Top block. Holds title, description and an optional action."
				},
				{
					name: "Card.Title",
					type: "component",
					description: "Heading text."
				},
				{
					name: "Card.Description",
					type: "component",
					description: "Subheading text."
				},
				{
					name: "Card.Action",
					type: "component",
					description: "Control aligned to the right of the header."
				},
				{
					name: "Card.Content",
					type: "component",
					description: "Body."
				},
				{
					name: "Card.Footer",
					type: "component",
					description: "Bottom row, usually buttons."
				}
			]
		}]
	},
	{
		slug: "avatar",
		title: "Avatar",
		group: "Display",
		description: "Profile image with an initials fallback.",
		importLine: "import { Avatar } from '$lib/components/ui/avatar/index.js';",
		tables: [{ rows: [
			{
				name: "src",
				type: "string",
				description: "Image URL. Falls back to `fallback` if it fails to load."
			},
			{
				name: "alt",
				type: "string",
				default: "''",
				description: "Image alt text."
			},
			{
				name: "fallback",
				type: "string",
				default: "''",
				description: "Initials shown without an image."
			},
			{
				name: "size",
				type: "'sm' | 'default' | 'lg'",
				default: "'default'",
				description: "32px, 40px or 56px."
			},
			cls
		] }]
	},
	{
		slug: "progress",
		title: "Progress",
		group: "Feedback",
		description: "Bar showing how much of a task is done. Turns green at 100%.",
		importLine: "import { Progress } from '$lib/components/ui/progress/index.js';",
		tables: [{ rows: [
			{
				name: "value",
				type: "number",
				description: "Current amount."
			},
			{
				name: "max",
				type: "number",
				default: "100",
				description: "Amount that counts as complete."
			},
			cls
		] }]
	},
	{
		slug: "skeleton",
		title: "Skeleton",
		group: "Feedback",
		description: "Placeholder shown while content loads. Size it with classes.",
		importLine: "import { Skeleton } from '$lib/components/ui/skeleton/index.js';",
		tables: [{ rows: [cls] }]
	},
	{
		slug: "alert",
		title: "Alert",
		group: "Feedback",
		description: "Inline banner for info, success, warning and error messages.",
		importLine: "import { Alert, AlertDescription } from '$lib/components/ui/alert/index.js';",
		tables: [{ rows: [{
			name: "variant",
			type: "'default' | 'info' | 'success' | 'warning' | 'destructive'",
			default: "'default'",
			description: "Message tone. Sets background and icon color."
		}, cls] }]
	},
	{
		slug: "flag",
		title: "Flag",
		group: "Feedback",
		description: "Toast notification that auto-dismisses. Call `flag()` from anywhere. Needs one `Toaster` in the root layout.",
		importLine: "import { flag } from '$lib/components/ui/flag/index.js';",
		tables: [{
			title: "flag(type, message, duration?)",
			rows: [
				{
					name: "type",
					type: "'info' | 'success' | 'warning' | 'danger'",
					description: "Tone and icon."
				},
				{
					name: "message",
					type: "string",
					description: "Text shown in the toast."
				},
				{
					name: "duration",
					type: "number",
					default: "5000",
					description: "Milliseconds before it closes."
				}
			]
		}]
	},
	{
		slug: "stepper",
		title: "Stepper",
		group: "Navigation",
		description: "Shows position in a multi-step flow, vertical or horizontal.",
		importLine: "import { Stepper } from '$lib/components/ui/stepper/index.js';",
		tables: [{ rows: [
			{
				name: "steps",
				type: "{ label?: string }[]",
				description: "One entry per step."
			},
			{
				name: "current",
				type: "number",
				default: "0",
				description: "Zero-based active step. Steps up to it are filled."
			},
			{
				name: "orientation",
				type: "'vertical' | 'horizontal'",
				default: "'vertical'",
				description: "Layout direction."
			},
			cls
		] }]
	},
	{
		slug: "tabs",
		title: "Tabs",
		group: "Navigation",
		description: "Switch between related panels without leaving the page.",
		importLine: "import * as Tabs from '$lib/components/ui/tabs/index.js';",
		tables: [{
			title: "Tabs.Root",
			rows: [{
				name: "value",
				type: "string",
				description: "Bindable id of the active tab."
			}]
		}, {
			title: "Tabs.Trigger / Tabs.Content",
			rows: [{
				name: "value",
				type: "string",
				description: "Id that links a trigger to its panel."
			}, {
				name: "disabled",
				type: "boolean",
				default: "false",
				description: "Trigger only. Blocks selection."
			}]
		}]
	},
	{
		slug: "menu",
		title: "Menu",
		group: "Navigation",
		description: "Sidebar navigation with an optional header and footer.",
		importLine: "import { Menu, MenuItem } from '$lib/components/ui/menu/index.js';",
		tables: [{
			title: "Menu",
			rows: [
				{
					name: "header",
					type: "Snippet",
					description: "Brand or title row."
				},
				{
					name: "footer",
					type: "Snippet",
					description: "Bottom row, usually the signed-in user."
				},
				{
					name: "aria-label",
					type: "string",
					default: "'Main'",
					description: "Accessible name of the nav landmark."
				}
			]
		}, {
			title: "MenuItem",
			rows: [
				{
					name: "href",
					type: "string",
					description: "Renders a link. Omit for a button."
				},
				{
					name: "active",
					type: "boolean",
					default: "false",
					description: "Marks the current page."
				},
				{
					name: "icon",
					type: "Snippet",
					description: "Leading icon."
				}
			]
		}]
	},
	{
		slug: "streak-tracker",
		title: "Streak tracker",
		group: "Display",
		description: "Grid of days showing which were completed.",
		importLine: "import { StreakTracker } from '$lib/components/ui/streak-tracker/index.js';",
		tables: [{ rows: [
			{
				name: "title",
				type: "string",
				description: "Heading."
			},
			{
				name: "subtitle",
				type: "string",
				description: "Line under the heading, such as the month."
			},
			{
				name: "count",
				type: "string",
				description: "Large figure on the right, such as \"11x\"."
			},
			{
				name: "days",
				type: "boolean[]",
				description: "One entry per day. `true` = completed."
			},
			{
				name: "columns",
				type: "number",
				default: "10",
				description: "Grid columns."
			}
		] }]
	},
	{
		slug: "tooltip",
		title: "Tooltip",
		group: "Overlays",
		description: "Short hint shown on hover or focus.",
		importLine: "import * as Tooltip from '$lib/components/ui/tooltip/index.js';",
		tables: [{
			title: "Tooltip.Content",
			rows: [{
				name: "side",
				type: "'top' | 'right' | 'bottom' | 'left'",
				default: "'top'",
				description: "Preferred side of the trigger."
			}, {
				name: "sideOffset",
				type: "number",
				default: "6",
				description: "Gap from the trigger in px."
			}]
		}]
	},
	{
		slug: "dialog",
		title: "Dialog",
		group: "Overlays",
		description: "Modal window that blocks the page until dismissed.",
		importLine: "import * as Dialog from '$lib/components/ui/dialog/index.js';",
		tables: [{
			title: "Parts",
			rows: [
				{
					name: "Dialog.Root",
					type: "component",
					description: "Holds open state. Bind `open` to control it."
				},
				{
					name: "Dialog.Trigger",
					type: "component",
					description: "Opens the dialog."
				},
				{
					name: "Dialog.Content",
					type: "component",
					description: "The modal surface."
				},
				{
					name: "Dialog.Header",
					type: "component",
					description: "Wraps title and description."
				},
				{
					name: "Dialog.Title",
					type: "component",
					description: "Required for screen readers."
				},
				{
					name: "Dialog.Description",
					type: "component",
					description: "Supporting text."
				},
				{
					name: "Dialog.Footer",
					type: "component",
					description: "Action row."
				},
				{
					name: "Dialog.Close",
					type: "component",
					description: "Closes the dialog."
				}
			]
		}]
	}
];
var bySlug = (slug) => entries.find((e) => e.slug === slug);
var grouped = groups.map((g) => ({
	group: g,
	items: entries.filter((e) => e.group === g).sort((a, b) => a.title.localeCompare(b.title))
})).filter((g) => g.items.length);
/** Flat list in sidebar order, for prev/next links. */
var ordered = grouped.flatMap((g) => g.items);
export { ordered as i, entries as n, grouped as r, bySlug as t };
