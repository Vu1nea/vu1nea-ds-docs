import { l as __exportAll } from "../../../../chunks/index-server.js";
import { D as escape_html, E as clsx, T as attr, a as derived, c as head, d as spread_props, f as stringify, i as bind_props, r as attributes, s as ensure_array_like, t as attr_class } from "../../../../chunks/server.js";
import { t as cn } from "../../../../chunks/utils2.js";
import { i as ordered, t as bySlug } from "../../../../chunks/registry.js";
import { t as CodeBlock } from "../../../../chunks/CodeBlock.js";
import { A as Dialog_content, B as Card_description, C as flag, D as Dialog_header, E as Dialog_title, F as Label, G as Icon, H as Button, I as Checkbox, K as Alert, L as Card, M as Date_picker$1, N as Calendar_1, O as Dialog_footer, P as Input, R as Card_title, S as Menu, T as Dialog_trigger, U as Badge, V as Card_content, W as Avatar, _ as Select_content, a as Textarea, b as Progress, c as Tabs_list, d as Streak_tracker$1, f as Stepper, g as Select_item, h as Select_trigger, i as Tooltip_content, j as Dialog_close, k as Dialog_description, l as Tabs, m as Select, n as Root, o as Tabs_content, p as Skeleton, q as Alert_description, r as Trigger, s as Tabs_trigger, t as Provider, u as Switch, v as Radio_group$1, w as Dialog, x as Menu_item, y as Radio_group_item, z as Card_header } from "../../../../chunks/tooltip.js";
// src/lib/docs/Example.svelte
function Example($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { title, description, code, children, class: className } = $$props;
		const id = derived(() => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""));
		let showCode = false;
		$$renderer.push(`<section class="flex flex-col gap-3"><h2${attr("id", id())} class="scroll-mt-24 text-xl leading-7 font-bold"><a${attr("href", `#${stringify(id())}`)} class="hover:text-(--purple-300) focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-3">${escape_html(title)}</a></h2> `);
		if (description) $$renderer.push(`<!--[0--><p class="text-sm leading-5 text-(--grey-300)">${escape_html(description)}</p>`);
		else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="border-card overflow-hidden rounded-lg border"><div${attr_class(clsx(cn("flex min-h-32 flex-wrap items-center gap-4 p-6", className)))}>`);
		children($$renderer);
		$$renderer.push(`<!----></div> <div class="border-card flex items-center justify-end border-t px-2 py-1.5"><button type="button"${attr("aria-expanded", showCode)} class="text-(--grey-300) hover:text-foreground focus-visible:ring-ring/50 rounded-md px-2.5 py-1 text-xs leading-4 outline-none focus-visible:ring-3">${escape_html("Show code")}</button></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></section>`);
	});
}
// src/lib/docs/demos/alert.svelte
var alert_exports = /* @__PURE__ */ __exportAll({ default: () => Alert_1 });
function Alert_1($$renderer) {
	Example($$renderer, {
		title: "Variants",
		description: "Pair each variant with its icon. The icon carries the color cue.",
		code: `<Alert variant="success">
  <Icon name="check-circle" />
  <AlertDescription>You've been successfully logged in!</AlertDescription>
</Alert>
<Alert variant="info">
  <Icon name="info" />
  <AlertDescription>You have permissions to do this!</AlertDescription>
</Alert>
<Alert variant="warning">
  <Icon name="warning" />
  <AlertDescription>Your password is insecure</AlertDescription>
</Alert>
<Alert variant="destructive">
  <Icon name="dangerous" />
  <AlertDescription>This will delete all files</AlertDescription>
</Alert>`,
		class: "flex-col items-stretch",
		children: ($$renderer) => {
			Alert($$renderer, {
				variant: "success",
				children: ($$renderer) => {
					Icon($$renderer, { name: "check-circle" });
					$$renderer.push(`<!---->`);
					Alert_description($$renderer, {
						children: ($$renderer) => {
							$$renderer.push(`<!---->You've been successfully logged in!`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Alert($$renderer, {
				variant: "info",
				children: ($$renderer) => {
					Icon($$renderer, { name: "info" });
					$$renderer.push(`<!---->`);
					Alert_description($$renderer, {
						children: ($$renderer) => {
							$$renderer.push(`<!---->You have permissions to do this!`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Alert($$renderer, {
				variant: "warning",
				children: ($$renderer) => {
					Icon($$renderer, { name: "warning" });
					$$renderer.push(`<!---->`);
					Alert_description($$renderer, {
						children: ($$renderer) => {
							$$renderer.push(`<!---->Your password is insecure`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Alert($$renderer, {
				variant: "destructive",
				children: ($$renderer) => {
					Icon($$renderer, { name: "dangerous" });
					$$renderer.push(`<!---->`);
					Alert_description($$renderer, {
						children: ($$renderer) => {
							$$renderer.push(`<!---->This will delete all files`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!---->`);
		},
		$$slots: { default: true }
	});
}
// src/lib/docs/demos/avatar.svelte
var avatar_exports = /* @__PURE__ */ __exportAll({ default: () => Avatar_1 });
function Avatar_1($$renderer) {
	const sizeCode = `<Avatar size="sm" fallback="VG" />
<Avatar fallback="VG" />
<Avatar size="lg" fallback="VG" />`;
	const imgCode = `<Avatar src="/photo.jpg" alt="Vinodh" fallback="VG" />`;
	Example($$renderer, {
		title: "Sizes",
		description: "Initials show when there is no image.",
		code: sizeCode,
		children: ($$renderer) => {
			Avatar($$renderer, {
				size: "sm",
				fallback: "VG"
			});
			$$renderer.push(`<!----> `);
			Avatar($$renderer, { fallback: "VG" });
			$$renderer.push(`<!----> `);
			Avatar($$renderer, {
				size: "lg",
				fallback: "VG"
			});
			$$renderer.push(`<!---->`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "With image",
		description: "If the image fails to load, the fallback appears.",
		code: imgCode,
		children: ($$renderer) => {
			Avatar($$renderer, {
				src: "/missing.jpg",
				alt: "Vinodh Gnanakkan",
				fallback: "VG"
			});
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!---->`);
}
// src/lib/docs/demos/badge.svelte
var badge_exports = /* @__PURE__ */ __exportAll({ default: () => Badge_1 });
function Badge_1($$renderer) {
	const colors = [
		"purple",
		"orange",
		"blue",
		"light"
	];
	const lightCode = `<Badge color="purple">Label</Badge>
<Badge color="orange">Label</Badge>
<Badge color="blue">Label</Badge>
<Badge color="light">Label</Badge>`;
	const darkCode = `<Badge variant="dark" color="purple">Label</Badge>
<Badge variant="dark" color="orange">Label</Badge>
<Badge variant="dark" color="blue">Label</Badge>
<Badge variant="dark" color="light">Label</Badge>`;
	const extraCode = `<Badge rounded>Rounded</Badge>
<Badge indicator>With indicator</Badge>
<Badge href="/">As a link</Badge>`;
	Example($$renderer, {
		title: "Light",
		description: "Bright fill, dark text.",
		code: lightCode,
		children: ($$renderer) => {
			$$renderer.push(`<!--[-->`);
			const each_array = ensure_array_like(colors);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let color = each_array[$$index];
				Badge($$renderer, {
					color,
					children: ($$renderer) => {
						$$renderer.push(`<!---->Label`);
					},
					$$slots: { default: true }
				});
			}
			$$renderer.push(`<!--]-->`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Dark",
		description: "Dark fill, bright text.",
		code: darkCode,
		children: ($$renderer) => {
			$$renderer.push(`<!--[-->`);
			const each_array_1 = ensure_array_like(colors);
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let color = each_array_1[$$index_1];
				Badge($$renderer, {
					variant: "dark",
					color,
					children: ($$renderer) => {
						$$renderer.push(`<!---->Label`);
					},
					$$slots: { default: true }
				});
			}
			$$renderer.push(`<!--]-->`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Rounded, indicator and link",
		code: extraCode,
		children: ($$renderer) => {
			Badge($$renderer, {
				rounded: true,
				children: ($$renderer) => {
					$$renderer.push(`<!---->Rounded`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Badge($$renderer, {
				indicator: true,
				children: ($$renderer) => {
					$$renderer.push(`<!---->With indicator`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Badge($$renderer, {
				href: "/",
				children: ($$renderer) => {
					$$renderer.push(`<!---->As a link`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!---->`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!---->`);
}
// src/lib/docs/demos/button.svelte
var button_exports = /* @__PURE__ */ __exportAll({ default: () => Button_1 });
function Button_1($$renderer) {
	const colors = [
		"purple",
		"orange",
		"blue",
		"light",
		"error"
	];
	const variants = [
		"default",
		"outline",
		"secondary",
		"ghost",
		"destructive",
		"link"
	];
	const colorCode = `<Button color="purple">Submit</Button>
<Button color="orange">Submit</Button>
<Button color="blue">Submit</Button>
<Button color="light">Submit</Button>
<Button color="error">Submit</Button>`;
	const outlineCode = `<Button variant="outline" color="purple">Submit</Button>
<Button variant="outline" color="orange">Submit</Button>
<Button variant="outline" color="blue">Submit</Button>
<Button variant="outline" color="light">Submit</Button>
<Button variant="outline" color="error">Submit</Button>`;
	const variantCode = `<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`;
	const shapeCode = `<Button>Square</Button>
<Button rounded>Rounded</Button>
<Button size="lg">Large</Button>
<Button disabled>Disabled</Button>`;
	Example($$renderer, {
		title: "Colors",
		description: "Filled buttons in each brand color. Labels stay white (or dark on light) in every state.",
		code: colorCode,
		children: ($$renderer) => {
			$$renderer.push(`<!--[-->`);
			const each_array = ensure_array_like(colors);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let color = each_array[$$index];
				Button($$renderer, {
					color,
					children: ($$renderer) => {
						$$renderer.push(`<!---->Submit`);
					},
					$$slots: { default: true }
				});
			}
			$$renderer.push(`<!--]-->`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Outline",
		description: "Border keeps the brand color. Text is lifted a step so it clears 4.5:1 on dark.",
		code: outlineCode,
		children: ($$renderer) => {
			$$renderer.push(`<!--[-->`);
			const each_array_1 = ensure_array_like(colors);
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let color = each_array_1[$$index_1];
				Button($$renderer, {
					variant: "outline",
					color,
					children: ($$renderer) => {
						$$renderer.push(`<!---->Submit`);
					},
					$$slots: { default: true }
				});
			}
			$$renderer.push(`<!--]-->`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Variants",
		code: variantCode,
		children: ($$renderer) => {
			$$renderer.push(`<!--[-->`);
			const each_array_2 = ensure_array_like(variants);
			for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
				let variant = each_array_2[$$index_2];
				Button($$renderer, {
					variant,
					class: "capitalize",
					children: ($$renderer) => {
						$$renderer.push(`<!---->${escape_html(variant)}`);
					},
					$$slots: { default: true }
				});
			}
			$$renderer.push(`<!--]-->`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Shape and size",
		code: shapeCode,
		children: ($$renderer) => {
			Button($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<!---->Square`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Button($$renderer, {
				rounded: true,
				children: ($$renderer) => {
					$$renderer.push(`<!---->Rounded`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Button($$renderer, {
				size: "lg",
				children: ($$renderer) => {
					$$renderer.push(`<!---->Large`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Button($$renderer, {
				disabled: true,
				children: ($$renderer) => {
					$$renderer.push(`<!---->Disabled`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!---->`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!---->`);
}
// src/lib/components/ui/card/card-action.svelte
function Card_action($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			"data-slot": "card-action",
			class: clsx(cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
// src/lib/components/ui/card/card-footer.svelte
function Card_footer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			"data-slot": "card-footer",
			class: clsx(cn("rounded-b-4xl px-(--card-spacing) [.border-t]:pt-(--card-spacing) flex items-center", className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
// src/lib/docs/demos/card.svelte
var card_exports = /* @__PURE__ */ __exportAll({ default: () => Card_1 });
function Card_1($$renderer) {
	const basicCode = `<Card.Root class="w-full max-w-sm">
  <Card.Header>
    <Card.Title class="text-2xl leading-7 font-bold">Title Here</Card.Title>
    <Card.Description class="text-sm leading-5 text-foreground">Subheading</Card.Description>
  </Card.Header>
  <Card.Content class="text-xs leading-4 text-(--grey-300)">
    Body copy goes here.
  </Card.Content>
</Card.Root>`;
	const actionCode = `<Card.Root class="w-full max-w-sm">
  <Card.Header>
    <Card.Title>Weekly goal</Card.Title>
    <Card.Description>5 of 7 days</Card.Description>
    <Card.Action><Badge>On track</Badge></Card.Action>
  </Card.Header>
  <Card.Footer class="gap-2">
    <Button variant="outline" color="light">Details</Button>
    <Button>Log today</Button>
  </Card.Footer>
</Card.Root>`;
	const smallCode = `<Card.Root size="sm" class="w-full max-w-sm">
  <Card.Header><Card.Title>Compact</Card.Title></Card.Header>
  <Card.Content>Tighter 16px spacing.</Card.Content>
</Card.Root>`;
	Example($$renderer, {
		title: "Default",
		code: basicCode,
		children: ($$renderer) => {
			if (Card) {
				$$renderer.push("<!--[-->");
				Card($$renderer, {
					class: "w-full max-w-sm",
					children: ($$renderer) => {
						if (Card_header) {
							$$renderer.push("<!--[-->");
							Card_header($$renderer, {
								children: ($$renderer) => {
									if (Card_title) {
										$$renderer.push("<!--[-->");
										Card_title($$renderer, {
											class: "text-2xl leading-7 font-bold",
											children: ($$renderer) => {
												$$renderer.push(`<!---->Title Here`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									if (Card_description) {
										$$renderer.push("<!--[-->");
										Card_description($$renderer, {
											class: "text-sm leading-5 text-foreground",
											children: ($$renderer) => {
												$$renderer.push(`<!---->Subheading`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
						$$renderer.push(` `);
						if (Card_content) {
							$$renderer.push("<!--[-->");
							Card_content($$renderer, {
								class: "text-xs leading-4 text-(--grey-300)",
								children: ($$renderer) => {
									$$renderer.push(`<!---->Body copy goes here.`);
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "With action and footer",
		code: actionCode,
		children: ($$renderer) => {
			if (Card) {
				$$renderer.push("<!--[-->");
				Card($$renderer, {
					class: "w-full max-w-sm",
					children: ($$renderer) => {
						if (Card_header) {
							$$renderer.push("<!--[-->");
							Card_header($$renderer, {
								children: ($$renderer) => {
									if (Card_title) {
										$$renderer.push("<!--[-->");
										Card_title($$renderer, {
											children: ($$renderer) => {
												$$renderer.push(`<!---->Weekly goal`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									if (Card_description) {
										$$renderer.push("<!--[-->");
										Card_description($$renderer, {
											children: ($$renderer) => {
												$$renderer.push(`<!---->5 of 7 days`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									if (Card_action) {
										$$renderer.push("<!--[-->");
										Card_action($$renderer, {
											children: ($$renderer) => {
												Badge($$renderer, {
													children: ($$renderer) => {
														$$renderer.push(`<!---->On track`);
													},
													$$slots: { default: true }
												});
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
						$$renderer.push(` `);
						if (Card_footer) {
							$$renderer.push("<!--[-->");
							Card_footer($$renderer, {
								class: "gap-2",
								children: ($$renderer) => {
									Button($$renderer, {
										variant: "outline",
										color: "light",
										children: ($$renderer) => {
											$$renderer.push(`<!---->Details`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----> `);
									Button($$renderer, {
										children: ($$renderer) => {
											$$renderer.push(`<!---->Log today`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!---->`);
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Small",
		code: smallCode,
		children: ($$renderer) => {
			if (Card) {
				$$renderer.push("<!--[-->");
				Card($$renderer, {
					size: "sm",
					class: "w-full max-w-sm",
					children: ($$renderer) => {
						if (Card_header) {
							$$renderer.push("<!--[-->");
							Card_header($$renderer, {
								children: ($$renderer) => {
									if (Card_title) {
										$$renderer.push("<!--[-->");
										Card_title($$renderer, {
											children: ($$renderer) => {
												$$renderer.push(`<!---->Compact`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
						$$renderer.push(` `);
						if (Card_content) {
							$$renderer.push("<!--[-->");
							Card_content($$renderer, {
								children: ($$renderer) => {
									$$renderer.push(`<!---->Tighter 16px spacing.`);
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!---->`);
}
// src/lib/docs/demos/checkbox.svelte
var checkbox_exports = /* @__PURE__ */ __exportAll({ default: () => Checkbox_1 });
function Checkbox_1($$renderer) {
	let agreed = true;
	let items = [
		true,
		false,
		false
	];
	const all = derived(() => items.every(Boolean));
	const some = derived(() => items.some(Boolean) && !all());
	const basicCode = `<script lang="ts">
  let agreed = $state(true);
<\/script>

<Checkbox id="terms" bind:checked={agreed} />
<Label for="terms">Accept terms</Label>`;
	const stateCode = `<Checkbox id="a" indeterminate />
<Checkbox id="b" disabled />
<Checkbox id="c" aria-invalid="true" />`;
	const groupCode = `<Checkbox
  checked={all}
  indeterminate={some}
  onCheckedChange={(v) => (items = items.map(() => v))}
/>
{#each items as _, i}
  <Checkbox bind:checked={items[i]} />
{/each}`;
	let $$settled = true;
	let $$inner_renderer;
	function $$render_inner($$renderer) {
		Example($$renderer, {
			title: "Default",
			code: basicCode,
			children: ($$renderer) => {
				$$renderer.push(`<div class="flex items-center gap-2">`);
				Checkbox($$renderer, {
					id: "k-terms",
					get checked() {
						return agreed;
					},
					set checked($$value) {
						agreed = $$value;
						$$settled = false;
					}
				});
				$$renderer.push(`<!----> `);
				Label($$renderer, {
					for: "k-terms",
					class: "text-xs leading-4 text-foreground",
					children: ($$renderer) => {
						$$renderer.push(`<!---->Accept terms`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Example($$renderer, {
			title: "States",
			code: stateCode,
			children: ($$renderer) => {
				$$renderer.push(`<div class="flex items-center gap-2">`);
				Checkbox($$renderer, {
					id: "k-a",
					indeterminate: true
				});
				$$renderer.push(`<!---->`);
				Label($$renderer, {
					for: "k-a",
					class: "text-xs leading-4 text-foreground",
					children: ($$renderer) => {
						$$renderer.push(`<!---->Indeterminate`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></div> <div class="flex items-center gap-2">`);
				Checkbox($$renderer, {
					id: "k-b",
					disabled: true
				});
				$$renderer.push(`<!---->`);
				Label($$renderer, {
					for: "k-b",
					class: "text-xs leading-4 text-foreground",
					children: ($$renderer) => {
						$$renderer.push(`<!---->Disabled`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></div> <div class="flex items-center gap-2">`);
				Checkbox($$renderer, {
					id: "k-c",
					"aria-invalid": "true"
				});
				$$renderer.push(`<!---->`);
				Label($$renderer, {
					for: "k-c",
					class: "text-xs leading-4 text-foreground",
					children: ($$renderer) => {
						$$renderer.push(`<!---->Invalid`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Example($$renderer, {
			title: "Parent and children",
			description: "The parent shows a dash when only some children are checked.",
			code: groupCode,
			children: ($$renderer) => {
				$$renderer.push(`<div class="flex flex-col gap-3"><div class="flex items-center gap-2">`);
				Checkbox($$renderer, {
					id: "k-all",
					checked: all(),
					indeterminate: some(),
					onCheckedChange: (v) => items = items.map(() => v)
				});
				$$renderer.push(`<!----> `);
				Label($$renderer, {
					for: "k-all",
					class: "text-xs leading-4 font-bold text-foreground",
					children: ($$renderer) => {
						$$renderer.push(`<!---->Select all`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></div> <!--[-->`);
				const each_array = ensure_array_like(items);
				for (let i = 0, $$length = each_array.length; i < $$length; i++) {
					each_array[i];
					$$renderer.push(`<div class="ml-7 flex items-center gap-2">`);
					Checkbox($$renderer, {
						id: `k-${stringify(i)}`,
						get checked() {
							return items[i];
						},
						set checked($$value) {
							items[i] = $$value;
							$$settled = false;
						}
					});
					$$renderer.push(`<!----> `);
					Label($$renderer, {
						for: `k-${stringify(i)}`,
						class: "text-xs leading-4 text-foreground",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Option ${escape_html(i + 1)}`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></div>`);
				}
				$$renderer.push(`<!--]--></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!---->`);
	}
	do {
		$$settled = true;
		$$inner_renderer = $$renderer.copy();
		$$render_inner($$inner_renderer);
	} while (!$$settled);
	$$renderer.subsume($$inner_renderer);
}
// src/lib/docs/demos/date-picker.svelte
var date_picker_exports = /* @__PURE__ */ __exportAll({ default: () => Date_picker });
function Date_picker($$renderer) {
	let date = void 0;
	const code = `<script lang="ts">
  import type { DateValue } from '@internationalized/date';
  let date = $state<DateValue | undefined>();
<\/script>

<DatePicker label="Due date" required bind:value={date} />`;
	const calCode = `<Calendar type="single" bind:value={date} />`;
	let $$settled = true;
	let $$inner_renderer;
	function $$render_inner($$renderer) {
		Example($$renderer, {
			title: "Date picker",
			description: "Type a date or open the calendar.",
			code,
			children: ($$renderer) => {
				Date_picker$1($$renderer, {
					label: "Due date",
					required: true,
					get value() {
						return date;
					},
					set value($$value) {
						date = $$value;
						$$settled = false;
					}
				});
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Example($$renderer, {
			title: "Calendar",
			description: "Standalone calendar, sharing the same value.",
			code: calCode,
			children: ($$renderer) => {
				Calendar_1($$renderer, {
					type: "single",
					get value() {
						return date;
					},
					set value($$value) {
						date = $$value;
						$$settled = false;
					}
				});
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!---->`);
	}
	do {
		$$settled = true;
		$$inner_renderer = $$renderer.copy();
		$$render_inner($$inner_renderer);
	} while (!$$settled);
	$$renderer.subsume($$inner_renderer);
}
// src/lib/docs/demos/dialog.svelte
var dialog_exports = /* @__PURE__ */ __exportAll({ default: () => Dialog_1 });
function Dialog_1($$renderer) {
	Example($$renderer, {
		title: "Default",
		description: "Escape and the overlay both close it. Focus returns to the trigger.",
		code: `<Dialog.Root>
  <Dialog.Trigger>
    {#snippet child({ props })}
      <Button {...props} variant="outline" color="light" rounded>Open modal</Button>
    {/snippet}
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header class="px-4 pt-6">
      <Dialog.Title>Duplicate this Page</Dialog.Title>
      <Dialog.Description>You can duplicate this page with these instructions:</Dialog.Description>
    </Dialog.Header>
    <Dialog.Footer class="p-3">
      <Dialog.Close>
        {#snippet child({ props })}
          <Button {...props} variant="outline" color="light" rounded>Cancel</Button>
        {/snippet}
      </Dialog.Close>
      <Button rounded>Duplicate</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>`,
		children: ($$renderer) => {
			if (Dialog) {
				$$renderer.push("<!--[-->");
				Dialog($$renderer, {
					children: ($$renderer) => {
						{
							function child($$renderer, { props }) {
								Button($$renderer, spread_props([props, {
									variant: "outline",
									color: "light",
									rounded: true,
									children: ($$renderer) => {
										$$renderer.push(`<!---->Open modal`);
									},
									$$slots: { default: true }
								}]));
							}
							if (Dialog_trigger) {
								$$renderer.push("<!--[-->");
								Dialog_trigger($$renderer, {
									child,
									$$slots: { child: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						}
						$$renderer.push(` `);
						if (Dialog_content) {
							$$renderer.push("<!--[-->");
							Dialog_content($$renderer, {
								children: ($$renderer) => {
									if (Dialog_header) {
										$$renderer.push("<!--[-->");
										Dialog_header($$renderer, {
											class: "px-4 pt-6",
											children: ($$renderer) => {
												if (Dialog_title) {
													$$renderer.push("<!--[-->");
													Dialog_title($$renderer, {
														children: ($$renderer) => {
															$$renderer.push(`<!---->Duplicate this Page`);
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
												$$renderer.push(` `);
												if (Dialog_description) {
													$$renderer.push("<!--[-->");
													Dialog_description($$renderer, {
														children: ($$renderer) => {
															$$renderer.push(`<!---->You can duplicate this page with these instructions:`);
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									if (Dialog_footer) {
										$$renderer.push("<!--[-->");
										Dialog_footer($$renderer, {
											class: "p-3",
											children: ($$renderer) => {
												{
													function child($$renderer, { props }) {
														Button($$renderer, spread_props([props, {
															variant: "outline",
															color: "light",
															rounded: true,
															children: ($$renderer) => {
																$$renderer.push(`<!---->Cancel`);
															},
															$$slots: { default: true }
														}]));
													}
													if (Dialog_close) {
														$$renderer.push("<!--[-->");
														Dialog_close($$renderer, {
															child,
															$$slots: { child: true }
														});
														$$renderer.push("<!--]-->");
													} else {
														$$renderer.push("<!--[!-->");
														$$renderer.push("<!--]-->");
													}
												}
												$$renderer.push(` `);
												Button($$renderer, {
													rounded: true,
													children: ($$renderer) => {
														$$renderer.push(`<!---->Duplicate`);
													},
													$$slots: { default: true }
												});
												$$renderer.push(`<!---->`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		},
		$$slots: { default: true }
	});
}
// src/lib/docs/demos/flag.svelte
var flag_exports = /* @__PURE__ */ __exportAll({ default: () => Flag });
function Flag($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const code = `<Button variant="outline" color="blue" onclick={() => flag('info', 'This is the button')}>Info</Button>
<Button variant="outline" color="light" onclick={() => flag('success', 'A new feature was added!')}>Success</Button>
<Button variant="outline" color="orange" onclick={() => flag('warning', 'Are you sure?')}>Warning</Button>
<Button variant="outline" color="error" onclick={() => flag('danger', 'You will delete this!')}>Danger</Button>`;
		const setupCode = `<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { Toaster } from '$lib/components/ui/sonner/index.js';
<\/script>

{@render children()}
<Toaster position="bottom-right" />`;
		Example($$renderer, {
			title: "Types",
			description: "Click to show a toast. It closes itself after the duration.",
			code,
			children: ($$renderer) => {
				Button($$renderer, {
					variant: "outline",
					color: "blue",
					onclick: () => flag("info", "This is the button"),
					children: ($$renderer) => {
						$$renderer.push(`<!---->Info`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> `);
				Button($$renderer, {
					variant: "outline",
					color: "light",
					onclick: () => flag("success", "A new feature was added!"),
					children: ($$renderer) => {
						$$renderer.push(`<!---->Success`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> `);
				Button($$renderer, {
					variant: "outline",
					color: "orange",
					onclick: () => flag("warning", "Are you sure?"),
					children: ($$renderer) => {
						$$renderer.push(`<!---->Warning`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> `);
				Button($$renderer, {
					variant: "outline",
					color: "error",
					onclick: () => flag("danger", "You will delete this!"),
					children: ($$renderer) => {
						$$renderer.push(`<!---->Danger`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Example($$renderer, {
			title: "Setup",
			description: "Mount the Toaster once in the root layout.",
			code: setupCode,
			children: ($$renderer) => {
				$$renderer.push(`<p class="text-sm leading-5 text-(--grey-300)">Already done in this project's root layout.</p>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!---->`);
	});
}
// src/lib/docs/demos/input.svelte
var input_exports = /* @__PURE__ */ __exportAll({ default: () => Input_1 });
function Input_1($$renderer) {
	const basicCode = `<Label for="name">Username</Label>
<Input id="name" placeholder="e.g John Doe" />
<p class="text-xs leading-4 text-(--grey-400)">What's your name?</p>`;
	const errorCode = `<Label for="email">Email</Label>
<Input id="email" aria-invalid="true" value="not-an-email" />
<p class="text-xs leading-4 text-(--danger-300)">Enter a valid email address.</p>`;
	const disabledCode = `<Label for="off">Disabled</Label>
<Input id="off" placeholder="Disabled" disabled />`;
	Example($$renderer, {
		title: "Default",
		code: basicCode,
		children: ($$renderer) => {
			$$renderer.push(`<div class="flex w-60 flex-col gap-1">`);
			Label($$renderer, {
				for: "d-name",
				children: ($$renderer) => {
					$$renderer.push(`<!---->Username <span class="text-destructive">*</span>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Input($$renderer, {
				id: "d-name",
				placeholder: "e.g John Doe"
			});
			$$renderer.push(`<!----> <p class="text-xs leading-4 text-(--grey-400)">What's your name?</p></div>`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Error",
		description: "Set aria-invalid and show the message below, in the danger color.",
		code: errorCode,
		children: ($$renderer) => {
			$$renderer.push(`<div class="flex w-60 flex-col gap-1">`);
			Label($$renderer, {
				for: "d-email",
				children: ($$renderer) => {
					$$renderer.push(`<!---->Email`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Input($$renderer, {
				id: "d-email",
				"aria-invalid": "true",
				value: "not-an-email"
			});
			$$renderer.push(`<!----> <p class="text-xs leading-4 text-(--danger-300)">Enter a valid email address.</p></div>`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Disabled",
		code: disabledCode,
		children: ($$renderer) => {
			$$renderer.push(`<div class="flex w-60 flex-col gap-1">`);
			Label($$renderer, {
				for: "d-off",
				children: ($$renderer) => {
					$$renderer.push(`<!---->Disabled`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Input($$renderer, {
				id: "d-off",
				placeholder: "Disabled",
				disabled: true
			});
			$$renderer.push(`<!----></div>`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!---->`);
}
// src/lib/docs/demos/menu.svelte
var menu_exports = /* @__PURE__ */ __exportAll({ default: () => Menu_1 });
function Menu_1($$renderer) {
	Example($$renderer, {
		title: "Default",
		description: "Mark the current page with active. It sets aria-current.",
		code: `<Menu class="h-[420px]">
  {#snippet header()}Mushpoint{/snippet}
  <MenuItem href="#home" active>
    {#snippet icon()}<Icon name="home" />{/snippet}Home
  </MenuItem>
  <MenuItem href="#goals">
    {#snippet icon()}<Icon name="target" />{/snippet}Goals
  </MenuItem>
  <MenuItem href="#ideas">
    {#snippet icon()}<Icon name="idea" />{/snippet}Idea Vault
  </MenuItem>
  {#snippet footer()}
    <span class="flex-1 text-sm font-bold">Vinodh Gnanakkan</span>
  {/snippet}
</Menu>`,
		children: ($$renderer) => {
			{
				function header($$renderer) {
					$$renderer.push(`<!---->Mushpoint`);
				}
				function footer($$renderer) {
					$$renderer.push(`<span class="bg-card grid size-10 place-items-center rounded-full text-sm font-bold" aria-hidden="true">VG</span> <span class="flex-1 text-sm leading-5 font-bold">Vinodh Gnanakkan</span> `);
					Icon($$renderer, { name: "arrow-down" });
					$$renderer.push(`<!---->`);
				}
				Menu($$renderer, {
					class: "h-[420px]",
					header,
					footer,
					children: ($$renderer) => {
						{
							function icon($$renderer) {
								Icon($$renderer, { name: "home" });
							}
							Menu_item($$renderer, {
								href: "#home",
								active: true,
								icon,
								children: ($$renderer) => {
									$$renderer.push(`<!---->Home`);
								},
								$$slots: {
									icon: true,
									default: true
								}
							});
						}
						$$renderer.push(`<!----> `);
						{
							function icon($$renderer) {
								Icon($$renderer, { name: "target" });
							}
							Menu_item($$renderer, {
								href: "#goals",
								icon,
								children: ($$renderer) => {
									$$renderer.push(`<!---->Goals`);
								},
								$$slots: {
									icon: true,
									default: true
								}
							});
						}
						$$renderer.push(`<!----> `);
						{
							function icon($$renderer) {
								Icon($$renderer, { name: "idea" });
							}
							Menu_item($$renderer, {
								href: "#ideas",
								icon,
								children: ($$renderer) => {
									$$renderer.push(`<!---->Idea Vault`);
								},
								$$slots: {
									icon: true,
									default: true
								}
							});
						}
						$$renderer.push(`<!---->`);
					},
					$$slots: {
						header: true,
						footer: true,
						default: true
					}
				});
			}
		},
		$$slots: { default: true }
	});
}
// src/lib/docs/demos/progress.svelte
var progress_exports = /* @__PURE__ */ __exportAll({ default: () => Progress_1 });
function Progress_1($$renderer) {
	const code = `<Progress value={36} class="w-80" />`;
	const doneCode = `<Progress value={100} class="w-80" />`;
	const maxCode = `<Progress value={3} max={5} class="w-80" />`;
	Example($$renderer, {
		title: "Default",
		code,
		children: ($$renderer) => {
			Progress($$renderer, {
				value: 36,
				class: "w-80",
				"aria-label": "Upload progress"
			});
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Complete",
		description: "The bar turns green when value reaches max.",
		code: doneCode,
		children: ($$renderer) => {
			Progress($$renderer, {
				value: 100,
				class: "w-80",
				"aria-label": "Complete"
			});
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Custom max",
		code: maxCode,
		children: ($$renderer) => {
			Progress($$renderer, {
				value: 3,
				max: 5,
				class: "w-80",
				"aria-label": "3 of 5"
			});
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!---->`);
}
// src/lib/docs/demos/radio-group.svelte
var radio_group_exports = /* @__PURE__ */ __exportAll({ default: () => Radio_group });
function Radio_group($$renderer) {
	let plan = "free";
	const code = `<script lang="ts">
  let plan = $state('free');
<\/script>

<RadioGroup.Root bind:value={plan} class="flex gap-4">
  <div class="flex items-center gap-2">
    <RadioGroup.Item value="free" id="free" />
    <Label for="free">Free</Label>
  </div>
  <div class="flex items-center gap-2">
    <RadioGroup.Item value="pro" id="pro" />
    <Label for="pro">Pro</Label>
  </div>
</RadioGroup.Root>`;
	const disabledCode = `<RadioGroup.Item value="team" id="team" disabled />`;
	let $$settled = true;
	let $$inner_renderer;
	function $$render_inner($$renderer) {
		Example($$renderer, {
			title: "Default",
			code,
			children: ($$renderer) => {
				if (Radio_group$1) {
					$$renderer.push("<!--[-->");
					Radio_group$1($$renderer, {
						class: "flex gap-4",
						get value() {
							return plan;
						},
						set value($$value) {
							plan = $$value;
							$$settled = false;
						},
						children: ($$renderer) => {
							$$renderer.push(`<div class="flex items-center gap-2">`);
							if (Radio_group_item) {
								$$renderer.push("<!--[-->");
								Radio_group_item($$renderer, {
									value: "free",
									id: "r-free"
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
							$$renderer.push(` `);
							Label($$renderer, {
								for: "r-free",
								class: "text-xs leading-4 text-foreground",
								children: ($$renderer) => {
									$$renderer.push(`<!---->Free`);
								},
								$$slots: { default: true }
							});
							$$renderer.push(`<!----></div> <div class="flex items-center gap-2">`);
							if (Radio_group_item) {
								$$renderer.push("<!--[-->");
								Radio_group_item($$renderer, {
									value: "pro",
									id: "r-pro"
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
							$$renderer.push(` `);
							Label($$renderer, {
								for: "r-pro",
								class: "text-xs leading-4 text-foreground",
								children: ($$renderer) => {
									$$renderer.push(`<!---->Pro`);
								},
								$$slots: { default: true }
							});
							$$renderer.push(`<!----></div>`);
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Example($$renderer, {
			title: "Disabled",
			code: disabledCode,
			children: ($$renderer) => {
				$$renderer.push(`<div class="flex items-center gap-2">`);
				if (Radio_group$1) {
					$$renderer.push("<!--[-->");
					Radio_group$1($$renderer, {
						value: "x",
						children: ($$renderer) => {
							if (Radio_group_item) {
								$$renderer.push("<!--[-->");
								Radio_group_item($$renderer, {
									value: "team",
									id: "r-team",
									disabled: true
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
				$$renderer.push(` `);
				Label($$renderer, {
					for: "r-team",
					class: "text-xs leading-4 text-foreground",
					children: ($$renderer) => {
						$$renderer.push(`<!---->Team`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!---->`);
	}
	do {
		$$settled = true;
		$$inner_renderer = $$renderer.copy();
		$$render_inner($$inner_renderer);
	} while (!$$settled);
	$$renderer.subsume($$inner_renderer);
}
// src/lib/docs/demos/select.svelte
var select_exports = /* @__PURE__ */ __exportAll({ default: () => Select_1 });
function Select_1($$renderer) {
	let fruit = "";
	const code = `<script lang="ts">
  let fruit = $state('');
<\/script>

<Label>Fruit</Label>
<Select.Root type="single" bind:value={fruit}>
  <Select.Trigger class="w-full">{fruit || 'Select from dropdown'}</Select.Trigger>
  <Select.Content>
    <Select.Item value="apple">Apple</Select.Item>
    <Select.Item value="pear">Pear</Select.Item>
    <Select.Item value="plum">Plum</Select.Item>
  </Select.Content>
</Select.Root>`;
	const smallCode = `<Select.Trigger size="sm">Small</Select.Trigger>`;
	let $$settled = true;
	let $$inner_renderer;
	function $$render_inner($$renderer) {
		Example($$renderer, {
			title: "Default",
			code,
			children: ($$renderer) => {
				$$renderer.push(`<div class="flex w-60 flex-col gap-1">`);
				Label($$renderer, {
					children: ($$renderer) => {
						$$renderer.push(`<!---->Fruit`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> `);
				if (Select) {
					$$renderer.push("<!--[-->");
					Select($$renderer, {
						type: "single",
						get value() {
							return fruit;
						},
						set value($$value) {
							fruit = $$value;
							$$settled = false;
						},
						children: ($$renderer) => {
							if (Select_trigger) {
								$$renderer.push("<!--[-->");
								Select_trigger($$renderer, {
									class: "w-full",
									children: ($$renderer) => {
										$$renderer.push(`<!---->${escape_html(fruit || "Select from dropdown")}`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
							$$renderer.push(` `);
							if (Select_content) {
								$$renderer.push("<!--[-->");
								Select_content($$renderer, {
									children: ($$renderer) => {
										if (Select_item) {
											$$renderer.push("<!--[-->");
											Select_item($$renderer, {
												value: "apple",
												children: ($$renderer) => {
													$$renderer.push(`<!---->Apple`);
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
										$$renderer.push(` `);
										if (Select_item) {
											$$renderer.push("<!--[-->");
											Select_item($$renderer, {
												value: "pear",
												children: ($$renderer) => {
													$$renderer.push(`<!---->Pear`);
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
										$$renderer.push(` `);
										if (Select_item) {
											$$renderer.push("<!--[-->");
											Select_item($$renderer, {
												value: "plum",
												children: ($$renderer) => {
													$$renderer.push(`<!---->Plum`);
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
				$$renderer.push(`</div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Example($$renderer, {
			title: "Small",
			code: smallCode,
			children: ($$renderer) => {
				if (Select) {
					$$renderer.push("<!--[-->");
					Select($$renderer, {
						type: "single",
						children: ($$renderer) => {
							if (Select_trigger) {
								$$renderer.push("<!--[-->");
								Select_trigger($$renderer, {
									size: "sm",
									class: "w-48",
									children: ($$renderer) => {
										$$renderer.push(`<!---->Small`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
							$$renderer.push(` `);
							if (Select_content) {
								$$renderer.push("<!--[-->");
								Select_content($$renderer, {
									children: ($$renderer) => {
										if (Select_item) {
											$$renderer.push("<!--[-->");
											Select_item($$renderer, {
												value: "a",
												children: ($$renderer) => {
													$$renderer.push(`<!---->Option 1`);
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
										$$renderer.push(` `);
										if (Select_item) {
											$$renderer.push("<!--[-->");
											Select_item($$renderer, {
												value: "b",
												children: ($$renderer) => {
													$$renderer.push(`<!---->Option 2`);
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!---->`);
	}
	do {
		$$settled = true;
		$$inner_renderer = $$renderer.copy();
		$$render_inner($$inner_renderer);
	} while (!$$settled);
	$$renderer.subsume($$inner_renderer);
}
// src/lib/docs/demos/skeleton.svelte
var skeleton_exports = /* @__PURE__ */ __exportAll({ default: () => Skeleton_1 });
function Skeleton_1($$renderer) {
	const code = `<Skeleton class="h-6 w-60" />`;
	const cardCode = `<div class="flex items-center gap-4">
  <Skeleton class="size-12 rounded-full" />
  <div class="flex flex-col gap-2">
    <Skeleton class="h-4 w-48" />
    <Skeleton class="h-4 w-32" />
  </div>
</div>`;
	Example($$renderer, {
		title: "Default",
		code,
		children: ($$renderer) => {
			Skeleton($$renderer, { class: "h-6 w-60" });
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Profile row",
		description: "Match the shape of the content that will replace it.",
		code: cardCode,
		children: ($$renderer) => {
			$$renderer.push(`<div class="flex items-center gap-4">`);
			Skeleton($$renderer, { class: "size-12 rounded-full" });
			$$renderer.push(`<!----> <div class="flex flex-col gap-2">`);
			Skeleton($$renderer, { class: "h-4 w-48" });
			$$renderer.push(`<!----> `);
			Skeleton($$renderer, { class: "h-4 w-32" });
			$$renderer.push(`<!----></div></div>`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!---->`);
}
// src/lib/docs/demos/stepper.svelte
var stepper_exports = /* @__PURE__ */ __exportAll({ default: () => Stepper_1 });
function Stepper_1($$renderer) {
	const vCode = `<Stepper steps={[{ label: 'Account' }, { label: 'Profile' }, { label: 'Done' }]} current={1} />`;
	const hCode = `<Stepper orientation="horizontal" steps={[{}, {}, {}, {}]} current={2} class="w-full" />`;
	const hLabelCode = `<Stepper
  orientation="horizontal"
  steps={[{ label: 'Account' }, { label: 'Profile' }, { label: 'Done' }]}
  current={1}
  class="w-full"
/>`;
	Example($$renderer, {
		title: "Vertical",
		code: vCode,
		children: ($$renderer) => {
			Stepper($$renderer, {
				steps: [
					{ label: "Account" },
					{ label: "Profile" },
					{ label: "Done" }
				],
				current: 1
			});
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Horizontal",
		description: "The connector stretches to fill the width.",
		code: hCode,
		children: ($$renderer) => {
			Stepper($$renderer, {
				orientation: "horizontal",
				steps: [
					{},
					{},
					{},
					{}
				],
				current: 2,
				class: "w-full"
			});
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Horizontal with labels",
		code: hLabelCode,
		children: ($$renderer) => {
			Stepper($$renderer, {
				orientation: "horizontal",
				steps: [
					{ label: "Account" },
					{ label: "Profile" },
					{ label: "Done" }
				],
				current: 1,
				class: "w-full"
			});
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!---->`);
}
// src/lib/docs/demos/streak-tracker.svelte
var streak_tracker_exports = /* @__PURE__ */ __exportAll({ default: () => Streak_tracker });
function Streak_tracker($$renderer) {
	const days = Array.from({ length: 30 }, (_, i) => i < 11 || i === 14 || i === 15);
	const code = `<script lang="ts">
  const days = Array.from({ length: 30 }, (_, i) => i < 11 || i === 14 || i === 15);
<\/script>

<StreakTracker title="Daily Reading" subtitle="August 2025" count="11x" {days} />`;
	const colCode = `<StreakTracker title="This week" count="5x" days={[true, true, true, false, true, true, false]} columns={7} />`;
	Example($$renderer, {
		title: "Default",
		code,
		children: ($$renderer) => {
			Streak_tracker$1($$renderer, {
				title: "Daily Reading",
				subtitle: "August 2025",
				count: "11x",
				days
			});
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Seven columns",
		description: "Use columns to match a week.",
		code: colCode,
		children: ($$renderer) => {
			Streak_tracker$1($$renderer, {
				title: "This week",
				count: "5x",
				days: [
					true,
					true,
					true,
					false,
					true,
					true,
					false
				],
				columns: 7
			});
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!---->`);
}
// src/lib/docs/demos/switch.svelte
var switch_exports = /* @__PURE__ */ __exportAll({ default: () => Switch_1 });
function Switch_1($$renderer) {
	let notify = true;
	const code = `<script lang="ts">
  let notify = $state(true);
<\/script>

<Switch id="notify" bind:checked={notify} />
<Label for="notify">Notifications</Label>`;
	const disabledCode = `<Switch id="off" disabled />
<Switch id="off-on" disabled checked />`;
	let $$settled = true;
	let $$inner_renderer;
	function $$render_inner($$renderer) {
		Example($$renderer, {
			title: "Default",
			code,
			children: ($$renderer) => {
				$$renderer.push(`<div class="flex items-center gap-3">`);
				Switch($$renderer, {
					id: "w-notify",
					get checked() {
						return notify;
					},
					set checked($$value) {
						notify = $$value;
						$$settled = false;
					}
				});
				$$renderer.push(`<!----> `);
				Label($$renderer, {
					for: "w-notify",
					class: "text-xs leading-4 text-foreground",
					children: ($$renderer) => {
						$$renderer.push(`<!---->Notifications ${escape_html(notify ? "on" : "off")}`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Example($$renderer, {
			title: "Disabled",
			code: disabledCode,
			children: ($$renderer) => {
				Switch($$renderer, {
					id: "w-off",
					disabled: true,
					"aria-label": "Disabled off"
				});
				$$renderer.push(`<!----> `);
				Switch($$renderer, {
					id: "w-off-on",
					disabled: true,
					checked: true,
					"aria-label": "Disabled on"
				});
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!---->`);
	}
	do {
		$$settled = true;
		$$inner_renderer = $$renderer.copy();
		$$render_inner($$inner_renderer);
	} while (!$$settled);
	$$renderer.subsume($$inner_renderer);
}
// src/lib/docs/demos/tabs.svelte
var tabs_exports = /* @__PURE__ */ __exportAll({ default: () => Tabs_1 });
function Tabs_1($$renderer) {
	let tab = "overview";
	const code = `<script lang="ts">
  let tab = $state('overview');
<\/script>

<Tabs.Root bind:value={tab}>
  <Tabs.List>
    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
    <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="overview">Overview content.</Tabs.Content>
  <Tabs.Content value="activity">Activity content.</Tabs.Content>
  <Tabs.Content value="settings">Settings content.</Tabs.Content>
</Tabs.Root>`;
	const disabledCode = `<Tabs.Trigger value="billing" disabled>Billing</Tabs.Trigger>`;
	let $$settled = true;
	let $$inner_renderer;
	function $$render_inner($$renderer) {
		Example($$renderer, {
			title: "Default",
			description: "Arrow keys move between tabs.",
			code,
			class: "items-start",
			children: ($$renderer) => {
				if (Tabs) {
					$$renderer.push("<!--[-->");
					Tabs($$renderer, {
						class: "w-full max-w-md",
						get value() {
							return tab;
						},
						set value($$value) {
							tab = $$value;
							$$settled = false;
						},
						children: ($$renderer) => {
							if (Tabs_list) {
								$$renderer.push("<!--[-->");
								Tabs_list($$renderer, {
									children: ($$renderer) => {
										if (Tabs_trigger) {
											$$renderer.push("<!--[-->");
											Tabs_trigger($$renderer, {
												value: "overview",
												children: ($$renderer) => {
													$$renderer.push(`<!---->Overview`);
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
										$$renderer.push(` `);
										if (Tabs_trigger) {
											$$renderer.push("<!--[-->");
											Tabs_trigger($$renderer, {
												value: "activity",
												children: ($$renderer) => {
													$$renderer.push(`<!---->Activity`);
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
										$$renderer.push(` `);
										if (Tabs_trigger) {
											$$renderer.push("<!--[-->");
											Tabs_trigger($$renderer, {
												value: "settings",
												children: ($$renderer) => {
													$$renderer.push(`<!---->Settings`);
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
							$$renderer.push(` `);
							if (Tabs_content) {
								$$renderer.push("<!--[-->");
								Tabs_content($$renderer, {
									value: "overview",
									children: ($$renderer) => {
										$$renderer.push(`<!---->Overview content.`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
							$$renderer.push(` `);
							if (Tabs_content) {
								$$renderer.push("<!--[-->");
								Tabs_content($$renderer, {
									value: "activity",
									children: ($$renderer) => {
										$$renderer.push(`<!---->Activity content.`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
							$$renderer.push(` `);
							if (Tabs_content) {
								$$renderer.push("<!--[-->");
								Tabs_content($$renderer, {
									value: "settings",
									children: ($$renderer) => {
										$$renderer.push(`<!---->Settings content.`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Example($$renderer, {
			title: "Disabled tab",
			code: disabledCode,
			class: "items-start",
			children: ($$renderer) => {
				if (Tabs) {
					$$renderer.push("<!--[-->");
					Tabs($$renderer, {
						value: "a",
						class: "w-full max-w-md",
						children: ($$renderer) => {
							if (Tabs_list) {
								$$renderer.push("<!--[-->");
								Tabs_list($$renderer, {
									children: ($$renderer) => {
										if (Tabs_trigger) {
											$$renderer.push("<!--[-->");
											Tabs_trigger($$renderer, {
												value: "a",
												children: ($$renderer) => {
													$$renderer.push(`<!---->General`);
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
										$$renderer.push(` `);
										if (Tabs_trigger) {
											$$renderer.push("<!--[-->");
											Tabs_trigger($$renderer, {
												value: "billing",
												disabled: true,
												children: ($$renderer) => {
													$$renderer.push(`<!---->Billing`);
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
							$$renderer.push(` `);
							if (Tabs_content) {
								$$renderer.push("<!--[-->");
								Tabs_content($$renderer, {
									value: "a",
									children: ($$renderer) => {
										$$renderer.push(`<!---->General content.`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!---->`);
	}
	do {
		$$settled = true;
		$$inner_renderer = $$renderer.copy();
		$$render_inner($$inner_renderer);
	} while (!$$settled);
	$$renderer.subsume($$inner_renderer);
}
// src/lib/docs/demos/textarea.svelte
var textarea_exports = /* @__PURE__ */ __exportAll({ default: () => Textarea_1 });
function Textarea_1($$renderer) {
	const basicCode = `<Label for="bio">Bio</Label>
<Textarea id="bio" placeholder="Tell us about yourself" />
<p class="text-xs leading-4 text-(--grey-400)">Max 200 characters.</p>`;
	const errorCode = `<Textarea aria-invalid="true" value="Too short" />`;
	const disabledCode = `<Textarea disabled placeholder="Disabled" />`;
	Example($$renderer, {
		title: "Default",
		code: basicCode,
		children: ($$renderer) => {
			$$renderer.push(`<div class="flex w-72 flex-col gap-1">`);
			Label($$renderer, {
				for: "t-bio",
				children: ($$renderer) => {
					$$renderer.push(`<!---->Bio`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Textarea($$renderer, {
				id: "t-bio",
				placeholder: "Tell us about yourself"
			});
			$$renderer.push(`<!----> <p class="text-xs leading-4 text-(--grey-400)">Max 200 characters.</p></div>`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Error",
		code: errorCode,
		children: ($$renderer) => {
			Textarea($$renderer, {
				class: "w-72",
				"aria-invalid": "true",
				value: "Too short"
			});
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Disabled",
		code: disabledCode,
		children: ($$renderer) => {
			Textarea($$renderer, {
				class: "w-72",
				disabled: true,
				placeholder: "Disabled"
			});
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!---->`);
}
// src/lib/docs/demos/tooltip.svelte
var tooltip_exports = /* @__PURE__ */ __exportAll({ default: () => Tooltip_1 });
function Tooltip_1($$renderer) {
	const code = `<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      {#snippet child({ props })}
        <Button {...props} variant="outline" color="light">Hover me</Button>
      {/snippet}
    </Tooltip.Trigger>
    <Tooltip.Content>Helpful hint</Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>`;
	const sideCode = `<Tooltip.Content side="right">Shows on the right</Tooltip.Content>`;
	const sides = [
		"top",
		"right",
		"bottom",
		"left"
	];
	Example($$renderer, {
		title: "Default",
		description: "Shows on hover and keyboard focus. Keep the text to a short phrase.",
		code,
		children: ($$renderer) => {
			if (Provider) {
				$$renderer.push("<!--[-->");
				Provider($$renderer, {
					children: ($$renderer) => {
						if (Root) {
							$$renderer.push("<!--[-->");
							Root($$renderer, {
								children: ($$renderer) => {
									{
										function child($$renderer, { props }) {
											Button($$renderer, spread_props([props, {
												variant: "outline",
												color: "light",
												children: ($$renderer) => {
													$$renderer.push(`<!---->Hover me`);
												},
												$$slots: { default: true }
											}]));
										}
										if (Trigger) {
											$$renderer.push("<!--[-->");
											Trigger($$renderer, {
												child,
												$$slots: { child: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
									}
									$$renderer.push(` `);
									if (Tooltip_content) {
										$$renderer.push("<!--[-->");
										Tooltip_content($$renderer, {
											children: ($$renderer) => {
												$$renderer.push(`<!---->Helpful hint`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Example($$renderer, {
		title: "Sides",
		code: sideCode,
		children: ($$renderer) => {
			if (Provider) {
				$$renderer.push("<!--[-->");
				Provider($$renderer, {
					children: ($$renderer) => {
						$$renderer.push(`<!--[-->`);
						const each_array = ensure_array_like(sides);
						for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
							let side = each_array[$$index];
							if (Root) {
								$$renderer.push("<!--[-->");
								Root($$renderer, {
									children: ($$renderer) => {
										{
											function child($$renderer, { props }) {
												Button($$renderer, spread_props([props, {
													variant: "outline",
													color: "light",
													class: "capitalize",
													children: ($$renderer) => {
														$$renderer.push(`<!---->${escape_html(side)}`);
													},
													$$slots: { default: true }
												}]));
											}
											if (Trigger) {
												$$renderer.push("<!--[-->");
												Trigger($$renderer, {
													child,
													$$slots: { child: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
										}
										$$renderer.push(` `);
										if (Tooltip_content) {
											$$renderer.push("<!--[-->");
											Tooltip_content($$renderer, {
												side,
												children: ($$renderer) => {
													$$renderer.push(`<!---->Shows on the ${escape_html(side)}`);
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						}
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!---->`);
}
// src/lib/docs/PropsTable.svelte
function PropsTable($$renderer, $$props) {
	let { tables } = $$props;
	$$renderer.push(`<div class="flex flex-col gap-6"><!--[-->`);
	const each_array = ensure_array_like(tables);
	for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
		let table = each_array[$$index_1];
		$$renderer.push(`<div class="flex flex-col gap-2">`);
		if (table.title) $$renderer.push(`<!--[0--><h3 class="font-mono text-sm leading-5 font-bold">${escape_html(table.title)}</h3>`);
		else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="border-card overflow-x-auto rounded-lg border"><table class="w-full min-w-[560px] border-collapse text-left text-sm leading-5"><thead><tr class="border-card bg-card/50 border-b text-xs text-(--grey-300)"><th scope="col" class="px-4 py-2.5 font-medium">Prop</th><th scope="col" class="px-4 py-2.5 font-medium">Type</th><th scope="col" class="px-4 py-2.5 font-medium">Default</th><th scope="col" class="px-4 py-2.5 font-medium">Description</th></tr></thead><tbody><!--[-->`);
		const each_array_1 = ensure_array_like(table.rows);
		for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
			let row = each_array_1[$$index];
			$$renderer.push(`<tr class="border-card border-b align-top last:border-b-0"><td class="px-4 py-3 font-mono text-[13px] text-(--purple-300)">${escape_html(row.name)}</td><td class="px-4 py-3 font-mono text-xs text-(--blue-300)">${escape_html(row.type)}</td><td class="px-4 py-3 font-mono text-xs text-(--grey-300)">${escape_html(row.default ?? "—")}</td><td class="px-4 py-3 text-(--grey-200)">${escape_html(row.description)}</td></tr>`);
		}
		$$renderer.push(`<!--]--></tbody></table></div></div>`);
	}
	$$renderer.push(`<!--]--></div>`);
}
// src/routes/(docs)/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const demos = /* #__PURE__ */ Object.assign({
			"/src/lib/docs/demos/alert.svelte": alert_exports,
			"/src/lib/docs/demos/avatar.svelte": avatar_exports,
			"/src/lib/docs/demos/badge.svelte": badge_exports,
			"/src/lib/docs/demos/button.svelte": button_exports,
			"/src/lib/docs/demos/card.svelte": card_exports,
			"/src/lib/docs/demos/checkbox.svelte": checkbox_exports,
			"/src/lib/docs/demos/date-picker.svelte": date_picker_exports,
			"/src/lib/docs/demos/dialog.svelte": dialog_exports,
			"/src/lib/docs/demos/flag.svelte": flag_exports,
			"/src/lib/docs/demos/input.svelte": input_exports,
			"/src/lib/docs/demos/menu.svelte": menu_exports,
			"/src/lib/docs/demos/progress.svelte": progress_exports,
			"/src/lib/docs/demos/radio-group.svelte": radio_group_exports,
			"/src/lib/docs/demos/select.svelte": select_exports,
			"/src/lib/docs/demos/skeleton.svelte": skeleton_exports,
			"/src/lib/docs/demos/stepper.svelte": stepper_exports,
			"/src/lib/docs/demos/streak-tracker.svelte": streak_tracker_exports,
			"/src/lib/docs/demos/switch.svelte": switch_exports,
			"/src/lib/docs/demos/tabs.svelte": tabs_exports,
			"/src/lib/docs/demos/textarea.svelte": textarea_exports,
			"/src/lib/docs/demos/tooltip.svelte": tooltip_exports
		});
		const entry = derived(() => bySlug(data.slug));
		const Demo = derived(() => demos[`/src/lib/docs/demos/${data.slug}.svelte`]?.default);
		const index = derived(() => ordered.findIndex((e) => e.slug === data.slug));
		const prev = derived(() => ordered[index() - 1]);
		const next = derived(() => ordered[index() + 1]);
		let toc = [];
		let activeId = "";
		head("vn19b9", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(entry().title)} · Guinea Design Docs</title>`);
			});
		});
		$$renderer.push(`<div class="mx-auto flex max-w-5xl gap-10"><article class="flex min-w-0 flex-1 flex-col gap-10"><header class="flex flex-col gap-3"><p class="text-xs leading-4 font-medium tracking-wide text-(--purple-300) uppercase">${escape_html(entry().group)}</p> <h1 class="text-[32px] leading-9 font-bold">${escape_html(entry().title)}</h1> <p class="text-base leading-6 text-(--grey-300)"><!--[-->`);
		const each_array = ensure_array_like(entry().description.split("`"));
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let part = each_array[i];
			if (i % 2) $$renderer.push(`<!--[0--><code class="bg-card rounded px-1.5 py-0.5 font-mono text-[13px] text-foreground">${escape_html(part)}</code>`);
			else $$renderer.push(`<!--[-1-->${escape_html(part)}`);
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--></p> `);
		CodeBlock($$renderer, { code: entry().importLine });
		$$renderer.push(`<!----></header> `);
		if (Demo()) {
			$$renderer.push("<!--[0-->");
			if (Demo()) {
				$$renderer.push("<!--[-->");
				Demo()($$renderer, {});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <section class="flex flex-col gap-4"><h2 id="props" class="scroll-mt-24 text-xl leading-7 font-bold"><a href="#props" class="hover:text-(--purple-300) rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50">Props</a></h2> `);
		PropsTable($$renderer, { tables: entry().tables });
		$$renderer.push(`<!----></section> <nav aria-label="Pagination" class="border-card mt-4 grid grid-cols-2 gap-4 border-t pt-6">`);
		if (prev()) $$renderer.push(`<!--[0--><a${attr("href", `/${stringify(prev().slug)}`)} class="border-card hover:border-(--purple-400) flex flex-col gap-1 rounded-lg border p-4 transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50"><span class="text-xs leading-4 text-(--grey-400)">Previous</span> <span class="text-sm leading-5 font-bold">${escape_html(prev().title)}</span></a>`);
		else $$renderer.push(`<!--[-1--><span></span>`);
		$$renderer.push(`<!--]--> `);
		if (next()) $$renderer.push(`<!--[0--><a${attr("href", `/${stringify(next().slug)}`)} class="border-card hover:border-(--purple-400) flex flex-col gap-1 rounded-lg border p-4 text-right transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50"><span class="text-xs leading-4 text-(--grey-400)">Next</span> <span class="text-sm leading-5 font-bold">${escape_html(next().title)}</span></a>`);
		else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></nav></article> `);
		if (toc.length > 1) {
			$$renderer.push(`<!--[0--><aside class="sticky top-24 hidden h-fit w-48 shrink-0 xl:block" aria-label="On this page"><p class="mb-3 text-xs leading-4 font-medium tracking-wide text-(--grey-400) uppercase">On this page</p> <ul class="border-card flex flex-col border-l"><!--[-->`);
			const each_array_1 = ensure_array_like(toc);
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let t = each_array_1[$$index_1];
				$$renderer.push(`<li><a${attr("href", `#${stringify(t.id)}`)}${attr("aria-current", activeId === t.id ? "location" : void 0)} class="-ml-px block border-l border-transparent py-1 pl-3 text-sm leading-5 text-(--grey-400) transition-colors hover:text-foreground aria-[current=location]:border-(--purple-400) aria-[current=location]:text-foreground">${escape_html(t.text)}</a></li>`);
			}
			$$renderer.push(`<!--]--></ul></aside>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div>`);
	});
}
export { _page as default };
