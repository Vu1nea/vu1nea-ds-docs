<script lang="ts">
	import Example from '../Example.svelte';
	import { Avatar } from '$lib/components/ui/avatar/index.js';

	const sizeCode = `<Avatar size="sm" fallback="VG" />
<Avatar fallback="VG" />
<Avatar size="lg" fallback="VG" />`;
	const imgCode = `<Avatar src="/photo.jpg" alt="Vinodh" fallback="VG" />`;
</script>

<Example title="Sizes" description="Initials show when there is no image." code={sizeCode}>
	<Avatar size="sm" fallback="VG" />
	<Avatar fallback="VG" />
	<Avatar size="lg" fallback="VG" />
</Example>

<Example title="With image" description="If the image fails to load, the fallback appears." code={imgCode}>
	<Avatar src="/missing.jpg" alt="Vinodh Gnanakkan" fallback="VG" />
</Example>
