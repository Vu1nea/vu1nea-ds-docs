<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Progress } from '$lib/components/ui/progress/index.js';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
	import { Alert, AlertDescription } from '$lib/components/ui/alert/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import * as RadioGroup from '$lib/components/ui/radio-group/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { flag } from '$lib/components/ui/flag/index.js';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import { Stepper } from '$lib/components/ui/stepper/index.js';
	import { Menu, MenuItem } from '$lib/components/ui/menu/index.js';
	import { StreakTracker } from '$lib/components/ui/streak-tracker/index.js';
	import { Icon } from '$lib/components/ui/icon/index.js';
	import { DatePicker } from '$lib/components/ui/date-picker/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import { Switch } from '$lib/components/ui/switch/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Avatar } from '$lib/components/ui/avatar/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import type { DateValue } from '@internationalized/date';

	const colors = ['purple', 'orange', 'blue', 'light', 'error'] as const;
	const badgeColors = ['purple', 'orange', 'blue', 'light'] as const;
	let fruit = $state('');
	let radio = $state('a');
	let agreed = $state(true);
	let notify = $state(true);
	let tab = $state('overview');
	let date = $state<DateValue | undefined>();
	const streak = Array.from({ length: 30 }, (_, i) => i < 11 || i === 14 || i === 15);
</script>

<main class="mx-auto flex max-w-6xl flex-col gap-12 p-6 md:p-8">
	<header class="flex flex-col gap-2">
		<h1 class="text-[32px] leading-9 font-bold">Guinea Design</h1>
		<p class="text-sm leading-5 text-(--grey-300)">Demo page. Compare each block with the Figma Components page.</p>
	</header>

	<section class="flex flex-col gap-4">
		<h2 class="text-2xl leading-7 font-bold">Button</h2>
		{#each [false, true] as rounded}
			{#each ['default', 'outline'] as const as variant}
				<div class="flex flex-wrap items-center gap-4">
					<span class="w-28 text-xs text-(--grey-400)">{variant}{rounded ? ' / rounded' : ''}</span>
					{#each colors as color}
						<Button {variant} {color} {rounded}>Submit</Button>
					{/each}
					<Button {variant} color="purple" {rounded} disabled>Disabled</Button>
				</div>
			{/each}
		{/each}
	</section>

	<section class="flex flex-col gap-4">
		<h2 class="text-2xl leading-7 font-bold">Badge</h2>
		{#each [false, true] as rounded}
			{#each ['light', 'dark'] as const as variant}
				<div class="flex flex-wrap items-center gap-4">
					<span class="w-28 text-xs text-(--grey-400)">{variant}{rounded ? ' / rounded' : ''}</span>
					{#each badgeColors as color}
						<Badge {variant} {color} {rounded} indicator={color === 'light'}>Finance</Badge>
					{/each}
				</div>
			{/each}
		{/each}
	</section>

	<section class="grid gap-8 md:grid-cols-2">
		<div class="flex flex-col gap-4">
			<h2 class="text-2xl leading-7 font-bold">Input and Select</h2>
			<div class="flex w-60 flex-col gap-1">
				<Label for="name">Username <span class="text-destructive">*</span></Label>
				<Input id="name" placeholder="e.g John Doe" />
				<p class="text-xs leading-4 text-(--grey-400)">What's your name?</p>
			</div>
			<div class="flex w-60 flex-col gap-1">
				<Label for="email">Email <span class="text-destructive" aria-hidden="true">*</span><span class="sr-only">required</span></Label>
				<Input id="email" aria-invalid="true" value="not-an-email" />
				<p class="text-xs leading-4 text-(--danger-300)">Enter a valid email address.</p>
			</div>
			<div class="flex w-60 flex-col gap-1">
				<Label for="off">Disabled</Label>
				<Input id="off" placeholder="Disabled" disabled />
			</div>
			<div class="flex w-60 flex-col gap-1">
				<Label>Fruit</Label>
				<Select.Root type="single" bind:value={fruit}>
					<Select.Trigger class="w-full">{fruit || 'Select from dropdown'}</Select.Trigger>
					<Select.Content>
						<Select.Item value="apple">Option 1</Select.Item>
						<Select.Item value="pear">Option 2</Select.Item>
						<Select.Item value="plum">Option 3</Select.Item>
					</Select.Content>
				</Select.Root>
			</div>
			<RadioGroup.Root bind:value={radio} class="flex gap-4">
				<div class="flex items-center gap-2">
					<RadioGroup.Item value="a" id="ra" />
					<Label for="ra" class="text-xs leading-4 text-foreground">Radio Input</Label>
				</div>
				<div class="flex items-center gap-2">
					<RadioGroup.Item value="b" id="rb" />
					<Label for="rb" class="text-xs leading-4 text-foreground">Radio Input</Label>
				</div>
			</RadioGroup.Root>
		</div>

		<div class="flex flex-col gap-4">
			<h2 class="text-2xl leading-7 font-bold">Card</h2>
			<Card.Root class="w-full max-w-sm">
				<Card.Header>
					<Card.Title class="text-2xl leading-7 font-bold">Title Here</Card.Title>
					<Card.Description class="text-sm leading-5 text-foreground">Subheading</Card.Description>
				</Card.Header>
				<Card.Content class="text-xs leading-4 text-(--grey-300)">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in elit et leo mollis facilisis nec in turpis.
				</Card.Content>
			</Card.Root>
		</div>
	</section>

	<section class="grid gap-8 md:grid-cols-2">
		<div class="flex flex-col gap-4">
			<h2 class="text-2xl leading-7 font-bold">Checkbox, Switch and Textarea</h2>
			<div class="flex items-center gap-2">
				<Checkbox id="c1" bind:checked={agreed} />
				<Label for="c1" class="text-xs leading-4 text-foreground">Accept terms</Label>
			</div>
			<div class="flex items-center gap-2">
				<Checkbox id="c2" indeterminate />
				<Label for="c2" class="text-xs leading-4 text-foreground">Indeterminate</Label>
			</div>
			<div class="flex items-center gap-2">
				<Checkbox id="c3" disabled />
				<Label for="c3" class="text-xs leading-4 text-foreground">Disabled</Label>
			</div>
			<div class="flex items-center gap-2">
				<Switch id="s1" bind:checked={notify} />
				<Label for="s1" class="text-xs leading-4 text-foreground">Notifications</Label>
			</div>
			<div class="flex items-center gap-2">
				<Switch id="s2" disabled />
				<Label for="s2" class="text-xs leading-4 text-foreground">Disabled</Label>
			</div>
			<div class="flex w-60 flex-col gap-1">
				<Label for="bio">Bio</Label>
				<Textarea id="bio" placeholder="Tell us about yourself" />
				<p class="text-xs leading-4 text-(--grey-400)">Max 200 characters.</p>
			</div>
		</div>

		<div class="flex flex-col gap-4">
			<h2 class="text-2xl leading-7 font-bold">Avatar and Tooltip</h2>
			<div class="flex items-center gap-4">
				<Avatar size="sm" fallback="VG" />
				<Avatar fallback="VG" />
				<Avatar size="lg" fallback="VG" />
			</div>
			<Tooltip.Provider>
				<Tooltip.Root>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<Button {...props} variant="outline" color="light" class="w-fit">Hover me</Button>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Content>Helpful hint</Tooltip.Content>
				</Tooltip.Root>
			</Tooltip.Provider>

			<h2 class="mt-4 text-2xl leading-7 font-bold">Tabs</h2>
			<Tabs.Root bind:value={tab}>
				<Tabs.List>
					<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
					<Tabs.Trigger value="activity">Activity</Tabs.Trigger>
					<Tabs.Trigger value="settings">Settings</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="overview">Overview content.</Tabs.Content>
				<Tabs.Content value="activity">Activity content.</Tabs.Content>
				<Tabs.Content value="settings">Settings content.</Tabs.Content>
			</Tabs.Root>
		</div>
	</section>

	<section class="flex flex-col gap-4">
		<h2 class="text-2xl leading-7 font-bold">Banner</h2>
		<Alert variant="success"><Icon name="check-circle" /><AlertDescription>You've been successfully logged in!</AlertDescription></Alert>
		<Alert variant="info"><Icon name="info" /><AlertDescription>You have permissions to do this!</AlertDescription></Alert>
		<Alert variant="destructive"><Icon name="dangerous" /><AlertDescription>This will delete all files</AlertDescription></Alert>
		<Alert variant="warning"><Icon name="warning" /><AlertDescription>Your password is insecure</AlertDescription></Alert>
	</section>

	<section class="flex flex-col gap-4">
		<h2 class="text-2xl leading-7 font-bold">Flag (toast)</h2>
		<div class="flex flex-wrap gap-4">
			<Button variant="outline" color="blue" onclick={() => flag('info', 'This is the button')}>Info</Button>
			<Button variant="outline" color="light" onclick={() => flag('success', 'A new feature was added!')}>Success</Button>
			<Button variant="outline" color="orange" onclick={() => flag('warning', 'Are you sure?')}>Warning</Button>
			<Button variant="outline" color="error" onclick={() => flag('danger', 'You will delete this!')}>Danger</Button>
		</div>
	</section>

	<section class="grid gap-8 md:grid-cols-2">
		<div class="flex flex-col gap-4">
			<h2 class="text-2xl leading-7 font-bold">Progress and Skeleton</h2>
			<Progress value={36} class="w-80" />
			<Progress value={100} class="w-80" />
			<Skeleton class="h-6 w-60" />
		</div>
		<div class="flex flex-col gap-4">
			<h2 class="text-2xl leading-7 font-bold">Modal</h2>
			<Dialog.Root>
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
			</Dialog.Root>
		</div>
	</section>
	<section class="grid gap-8 md:grid-cols-2">
		<div class="flex flex-col gap-4">
			<h2 class="text-2xl leading-7 font-bold">Date picker</h2>
			<DatePicker label="Due date" required bind:value={date} />
			<Calendar type="single" bind:value={date} />
		</div>
		<div class="flex flex-col gap-4">
			<h2 class="text-2xl leading-7 font-bold">Stepper</h2>
			<div class="flex gap-12">
				<Stepper steps={[{ label: 'Account' }, { label: 'Profile' }, { label: 'Done' }]} current={1} />
				<Stepper orientation="horizontal" steps={[{}, {}, {}, {}]} current={2} />
			</div>
			<h2 class="mt-4 text-2xl leading-7 font-bold">Streak tracker</h2>
			<StreakTracker title="Daily Reading" subtitle="August 2025" count="11x" days={streak} />
		</div>
	</section>

	<section class="flex flex-col gap-4">
		<h2 class="text-2xl leading-7 font-bold">Menu</h2>
		<Menu class="h-[420px]">
			{#snippet header()}Mushpoint{/snippet}
			<MenuItem href="#home" active>{#snippet icon()}<Icon name="home" />{/snippet}Home</MenuItem>
			<MenuItem href="#goals">{#snippet icon()}<Icon name="target" />{/snippet}Goals</MenuItem>
			<MenuItem href="#ideas">{#snippet icon()}<Icon name="idea" />{/snippet}Idea Vault</MenuItem>
			{#snippet footer()}
				<span class="bg-card grid size-10 place-items-center rounded-full text-sm font-bold" aria-hidden="true">VG</span>
				<span class="flex-1 text-sm leading-5 font-bold">Vinodh Gnanakkan</span>
				<Icon name="arrow-down" />
			{/snippet}
		</Menu>
	</section>
</main>
