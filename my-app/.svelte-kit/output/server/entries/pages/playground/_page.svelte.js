import { D as escape_html, d as spread_props, s as ensure_array_like } from "../../../chunks/server.js";
import { A as Dialog_content, C as flag, D as Dialog_header, E as Dialog_title, F as Label, G as Badge, H as Card_content, I as Checkbox, J as Alert, K as Avatar, L as Card, M as Date_picker, N as Calendar_1, O as Dialog_footer, P as Input, R as Card_title, S as Menu, T as Dialog_trigger, V as Card_description, W as Button, Y as Alert_description, _ as Select_content, a as Textarea, b as Progress, c as Tabs_list, d as Streak_tracker, f as Stepper, g as Select_item, h as Select_trigger, i as Tooltip_content, j as Dialog_close, k as Dialog_description, l as Tabs, m as Select, n as Root, o as Tabs_content, p as Skeleton, q as Icon, r as Trigger, s as Tabs_trigger, t as Provider, u as Switch, v as Radio_group, w as Dialog, x as Menu_item, y as Radio_group_item, z as Card_header } from "../../../chunks/tooltip.js";
// src/routes/playground/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const colors = [
			"purple",
			"orange",
			"blue",
			"light",
			"error"
		];
		const badgeColors = [
			"purple",
			"orange",
			"blue",
			"light"
		];
		let fruit = "";
		let radio = "a";
		let agreed = true;
		let notify = true;
		let tab = "overview";
		let date = void 0;
		const streak = Array.from({ length: 30 }, (_, i) => i < 11 || i === 14 || i === 15);
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<main class="mx-auto flex max-w-6xl flex-col gap-12 p-6 md:p-8"><header class="flex flex-col gap-2"><h1 class="text-[32px] leading-9 font-bold">Guinea Design</h1> <p class="text-sm leading-5 text-(--grey-300)">Demo page. Compare each block with the Figma Components page.</p></header> <section class="flex flex-col gap-4"><h2 class="text-2xl leading-7 font-bold">Button</h2> <!--[-->`);
			const each_array = ensure_array_like([false, true]);
			for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
				let rounded = each_array[$$index_2];
				$$renderer.push(`<!--[-->`);
				const each_array_1 = ensure_array_like(["default", "outline"]);
				for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
					let variant = each_array_1[$$index_1];
					$$renderer.push(`<div class="flex flex-wrap items-center gap-4"><span class="w-28 text-xs text-(--grey-400)">${escape_html(variant)}${escape_html(rounded ? " / rounded" : "")}</span> <!--[-->`);
					const each_array_2 = ensure_array_like(colors);
					for (let $$index = 0, $$length = each_array_2.length; $$index < $$length; $$index++) {
						let color = each_array_2[$$index];
						Button($$renderer, {
							variant,
							color,
							rounded,
							children: ($$renderer) => {
								$$renderer.push(`<!---->Submit`);
							},
							$$slots: { default: true }
						});
					}
					$$renderer.push(`<!--]--> `);
					Button($$renderer, {
						variant,
						color: "purple",
						rounded,
						disabled: true,
						children: ($$renderer) => {
							$$renderer.push(`<!---->Disabled`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></div>`);
				}
				$$renderer.push(`<!--]-->`);
			}
			$$renderer.push(`<!--]--></section> <section class="flex flex-col gap-4"><h2 class="text-2xl leading-7 font-bold">Badge</h2> <!--[-->`);
			const each_array_3 = ensure_array_like([false, true]);
			for (let $$index_5 = 0, $$length = each_array_3.length; $$index_5 < $$length; $$index_5++) {
				let rounded = each_array_3[$$index_5];
				$$renderer.push(`<!--[-->`);
				const each_array_4 = ensure_array_like(["light", "dark"]);
				for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
					let variant = each_array_4[$$index_4];
					$$renderer.push(`<div class="flex flex-wrap items-center gap-4"><span class="w-28 text-xs text-(--grey-400)">${escape_html(variant)}${escape_html(rounded ? " / rounded" : "")}</span> <!--[-->`);
					const each_array_5 = ensure_array_like(badgeColors);
					for (let $$index_3 = 0, $$length = each_array_5.length; $$index_3 < $$length; $$index_3++) {
						let color = each_array_5[$$index_3];
						Badge($$renderer, {
							variant,
							color,
							rounded,
							indicator: color === "light",
							children: ($$renderer) => {
								$$renderer.push(`<!---->Finance`);
							},
							$$slots: { default: true }
						});
					}
					$$renderer.push(`<!--]--></div>`);
				}
				$$renderer.push(`<!--]-->`);
			}
			$$renderer.push(`<!--]--></section> <section class="grid gap-8 md:grid-cols-2"><div class="flex flex-col gap-4"><h2 class="text-2xl leading-7 font-bold">Input and Select</h2> <div class="flex w-60 flex-col gap-1">`);
			Label($$renderer, {
				for: "name",
				children: ($$renderer) => {
					$$renderer.push(`<!---->Username <span class="text-destructive">*</span>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Input($$renderer, {
				id: "name",
				placeholder: "e.g John Doe"
			});
			$$renderer.push(`<!----> <p class="text-xs leading-4 text-(--grey-400)">What's your name?</p></div> <div class="flex w-60 flex-col gap-1">`);
			Label($$renderer, {
				for: "email",
				children: ($$renderer) => {
					$$renderer.push(`<!---->Email <span class="text-destructive" aria-hidden="true">*</span><span class="sr-only">required</span>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Input($$renderer, {
				id: "email",
				"aria-invalid": "true",
				value: "not-an-email"
			});
			$$renderer.push(`<!----> <p class="text-xs leading-4 text-(--danger-300)">Enter a valid email address.</p></div> <div class="flex w-60 flex-col gap-1">`);
			Label($$renderer, {
				for: "off",
				children: ($$renderer) => {
					$$renderer.push(`<!---->Disabled`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Input($$renderer, {
				id: "off",
				placeholder: "Disabled",
				disabled: true
			});
			$$renderer.push(`<!----></div> <div class="flex w-60 flex-col gap-1">`);
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
											value: "pear",
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
									$$renderer.push(` `);
									if (Select_item) {
										$$renderer.push("<!--[-->");
										Select_item($$renderer, {
											value: "plum",
											children: ($$renderer) => {
												$$renderer.push(`<!---->Option 3`);
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
			$$renderer.push(`</div> `);
			if (Radio_group) {
				$$renderer.push("<!--[-->");
				Radio_group($$renderer, {
					class: "flex gap-4",
					get value() {
						return radio;
					},
					set value($$value) {
						radio = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						$$renderer.push(`<div class="flex items-center gap-2">`);
						if (Radio_group_item) {
							$$renderer.push("<!--[-->");
							Radio_group_item($$renderer, {
								value: "a",
								id: "ra"
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
						$$renderer.push(` `);
						Label($$renderer, {
							for: "ra",
							class: "text-xs leading-4 text-foreground",
							children: ($$renderer) => {
								$$renderer.push(`<!---->Radio Input`);
							},
							$$slots: { default: true }
						});
						$$renderer.push(`<!----></div> <div class="flex items-center gap-2">`);
						if (Radio_group_item) {
							$$renderer.push("<!--[-->");
							Radio_group_item($$renderer, {
								value: "b",
								id: "rb"
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
						$$renderer.push(` `);
						Label($$renderer, {
							for: "rb",
							class: "text-xs leading-4 text-foreground",
							children: ($$renderer) => {
								$$renderer.push(`<!---->Radio Input`);
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
			$$renderer.push(`</div> <div class="flex flex-col gap-4"><h2 class="text-2xl leading-7 font-bold">Card</h2> `);
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
									$$renderer.push(`<!---->Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in elit et leo mollis facilisis nec in turpis.`);
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
			$$renderer.push(`</div></section> <section class="grid gap-8 md:grid-cols-2"><div class="flex flex-col gap-4"><h2 class="text-2xl leading-7 font-bold">Checkbox, Switch and Textarea</h2> <div class="flex items-center gap-2">`);
			Checkbox($$renderer, {
				id: "c1",
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
				for: "c1",
				class: "text-xs leading-4 text-foreground",
				children: ($$renderer) => {
					$$renderer.push(`<!---->Accept terms`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div> <div class="flex items-center gap-2">`);
			Checkbox($$renderer, {
				id: "c2",
				indeterminate: true
			});
			$$renderer.push(`<!----> `);
			Label($$renderer, {
				for: "c2",
				class: "text-xs leading-4 text-foreground",
				children: ($$renderer) => {
					$$renderer.push(`<!---->Indeterminate`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div> <div class="flex items-center gap-2">`);
			Checkbox($$renderer, {
				id: "c3",
				disabled: true
			});
			$$renderer.push(`<!----> `);
			Label($$renderer, {
				for: "c3",
				class: "text-xs leading-4 text-foreground",
				children: ($$renderer) => {
					$$renderer.push(`<!---->Disabled`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div> <div class="flex items-center gap-2">`);
			Switch($$renderer, {
				id: "s1",
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
				for: "s1",
				class: "text-xs leading-4 text-foreground",
				children: ($$renderer) => {
					$$renderer.push(`<!---->Notifications`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div> <div class="flex items-center gap-2">`);
			Switch($$renderer, {
				id: "s2",
				disabled: true
			});
			$$renderer.push(`<!----> `);
			Label($$renderer, {
				for: "s2",
				class: "text-xs leading-4 text-foreground",
				children: ($$renderer) => {
					$$renderer.push(`<!---->Disabled`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div> <div class="flex w-60 flex-col gap-1">`);
			Label($$renderer, {
				for: "bio",
				children: ($$renderer) => {
					$$renderer.push(`<!---->Bio`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Textarea($$renderer, {
				id: "bio",
				placeholder: "Tell us about yourself"
			});
			$$renderer.push(`<!----> <p class="text-xs leading-4 text-(--grey-400)">Max 200 characters.</p></div></div> <div class="flex flex-col gap-4"><h2 class="text-2xl leading-7 font-bold">Avatar and Tooltip</h2> <div class="flex items-center gap-4">`);
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
			$$renderer.push(`<!----></div> `);
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
												class: "w-fit",
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
			$$renderer.push(` <h2 class="mt-4 text-2xl leading-7 font-bold">Tabs</h2> `);
			if (Tabs) {
				$$renderer.push("<!--[-->");
				Tabs($$renderer, {
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
			$$renderer.push(`</div></section> <section class="flex flex-col gap-4"><h2 class="text-2xl leading-7 font-bold">Banner</h2> `);
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
			$$renderer.push(`<!----></section> <section class="flex flex-col gap-4"><h2 class="text-2xl leading-7 font-bold">Flag (toast)</h2> <div class="flex flex-wrap gap-4">`);
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
			$$renderer.push(`<!----></div></section> <section class="grid gap-8 md:grid-cols-2"><div class="flex flex-col gap-4"><h2 class="text-2xl leading-7 font-bold">Progress and Skeleton</h2> `);
			Progress($$renderer, {
				value: 36,
				class: "w-80"
			});
			$$renderer.push(`<!----> `);
			Progress($$renderer, {
				value: 100,
				class: "w-80"
			});
			$$renderer.push(`<!----> `);
			Skeleton($$renderer, { class: "h-6 w-60" });
			$$renderer.push(`<!----></div> <div class="flex flex-col gap-4"><h2 class="text-2xl leading-7 font-bold">Modal</h2> `);
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
			$$renderer.push(`</div></section> <section class="grid gap-8 md:grid-cols-2"><div class="flex flex-col gap-4"><h2 class="text-2xl leading-7 font-bold">Date picker</h2> `);
			Date_picker($$renderer, {
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
			$$renderer.push(`<!----> `);
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
			$$renderer.push(`<!----></div> <div class="flex flex-col gap-4"><h2 class="text-2xl leading-7 font-bold">Stepper</h2> <div class="flex gap-12">`);
			Stepper($$renderer, {
				steps: [
					{ label: "Account" },
					{ label: "Profile" },
					{ label: "Done" }
				],
				current: 1
			});
			$$renderer.push(`<!----> `);
			Stepper($$renderer, {
				orientation: "horizontal",
				steps: [
					{},
					{},
					{},
					{}
				],
				current: 2
			});
			$$renderer.push(`<!----></div> <h2 class="mt-4 text-2xl leading-7 font-bold">Streak tracker</h2> `);
			Streak_tracker($$renderer, {
				title: "Daily Reading",
				subtitle: "August 2025",
				count: "11x",
				days: streak
			});
			$$renderer.push(`<!----></div></section> <section class="flex flex-col gap-4"><h2 class="text-2xl leading-7 font-bold">Menu</h2> `);
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
			$$renderer.push(`<!----></section></main>`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}
export { _page as default };
