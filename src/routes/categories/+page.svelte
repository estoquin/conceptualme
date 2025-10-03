<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
	import { 
		Code, Server, Settings, Palette, Database, Shield, 
		Cloud, Cpu, Smartphone, Globe, Atom, Box, Layers, 
		Zap, GitBranch, Terminal, Brain, Bitcoin 
	} from '@lucide/svelte';

	const categories = [
		{ name: 'Frontend', slug: 'frontend', icon: Code },
		{ name: 'Backend', slug: 'backend', icon: Server },
		{ name: 'DevOps', slug: 'devops', icon: Settings },
		{ name: 'Design', slug: 'design', icon: Palette },
		{ name: 'Databases', slug: 'databases', icon: Database },
		{ name: 'Cybersecurity', slug: 'cybersecurity', icon: Shield },
		{ name: 'Cloud Computing', slug: 'cloud', icon: Cloud },
		{ name: 'Hardware & IoT', slug: 'hardware', icon: Cpu },
		{ name: 'Mobile Development', slug: 'mobile', icon: Smartphone },
		{ name: 'Networking', slug: 'networking', icon: Globe },
		{ name: 'AI & Machine Learning', slug: 'ai-ml', icon: Brain },
		{ name: 'Blockchain & Web3', slug: 'blockchain', icon: Bitcoin },
		{ name: 'Automation & Robotics', slug: 'automation', icon: Zap },
		{ name: 'Open Source', slug: 'open-source', icon: GitBranch },
		{ name: 'Programming Languages', slug: 'languages', icon: Terminal },
		{ name: 'Architecture & Patterns', slug: 'architecture', icon: Layers },
		{ name: 'Emerging Tech', slug: 'emerging', icon: Atom },
		{ name: 'Productivity Tools', slug: 'productivity', icon: Box }
	];
</script>


<svelte:head>
	<title>Categories - ConceptualMe</title>
</svelte:head>

<PageContainer>
    <h1 class="text-4xl font-bold mb-8 text-center">Categories</h1>
	<ul class="grid grid-cols-1 sm:grid-cols-2 gap-6">
		{#each categories as category}
			<li>
				<a href={`/categories/${category.slug}`} class="flex items-center gap-4 px-6 py-5 bg-white shadow hover:bg-green-50 transition group" style="border-radius:0;">
					<svelte:component this={category.icon} class="w-8 h-8 text-gray-600 group-hover:text-gray-800 transition" />
					<span class="text-2xl font-semibold text-gray-900 group-hover:text-blue-800 transition">{category.name}</span>
				</a>
			</li>
		{/each}
	</ul>
</PageContainer>
