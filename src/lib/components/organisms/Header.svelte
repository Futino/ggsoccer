<script lang="ts">
	import { base } from '$app/paths';
	import ThemeButton from '$lib/components/molecules/ThemeButton.svelte';
	import Logo from '$lib/components/atoms/Logo.svelte';
	import Icon from '../atoms/Icon.svelte';
</script>

<div
	class="{$$props.class} top-0 z-40 flex-none w-full transition-colors duration-500 backdrop-blur bg-primary-container-light/5 dark:bg-primary-container-dark/5 text-primary-container-on-light dark:text-primary-container-on-dark"
>
	<div class="py-2 mx-5 border-b border-secondary-light/10 dark:border-secondary-dark/10">
		<div class="flex relative items-center md:px-10 lg:px-20 xl:px-40 px-auto md:px-auto">
			<a class="flex overflow-hidden gap-3 justify-center flex-none" href="{base}/">
				<Logo />
				<p class="hidden 2xl:flex self-center display-small">Good Game Soccer</p>
			</a>

			<div class="flex items-center ml-auto">
				<nav class="text-sm font-semibold">
					<ul
						class="flex m-auto space-x-2 sm:space-x-5 lg:space-x-5 xl:space-x-12 [&>*]:my-auto text-surface-on-light dark:text-surface-on-dark "
					>
						<li class="hidden md:flex hover:text-tertiary-light dark:hover:text-tertiary-light">
							<a class="" href="#about">
								<h1 class="body-large">About Us</h1>
							</a>
						</li>
						<li class="hidden md:flex hover:text-tertiary-light dark:hover:text-tertiary-light">
							<a class="" href="#camps">
								<h1 class="body-large">Camps</h1>
							</a>
						</li>
						<li class="hidden md:flex hover:text-tertiary-light dark:hover:text-tertiary-light">
							<a class="inline" href="#contact">
								<h1 class="body-large">Contact Us</h1>
							</a>
						</li>

						<li
							class="bg-primary-light hover:bg-secondary-light hover:text-secondary-on-light dark:hover:text-secondary-on-dark dark:hover:bg-secondary-dark p-3 w-max"
						>
							<a class="inline" href="tel:9133600394">
								<h1 class="body-large text-primary-on-light">(913) 360-0394</h1>
							</a>
						</li>
						<div
							class="border-x-2 px-8 border-secondary-light/20 dark:border-secondary-dark/20 flex flex-row gap-6"
						>
							<li>
								<a
									class="inline text-secondary-light dark:text-secondary-dark hover:text-tertiary-light dark:hover:text-tertiary-dark mx-auto"
									href="https://www.instagram.com/ggsoccercamps/"
								>
									<Icon icon="instagram" height="24" width="24" />
								</a>
							</li>
							<li>
								<a
									class="inline text-secondary-light dark:text-secondary-dark hover:text-tertiary-light dark:hover:text-tertiary-dark mx-auto"
									href="https://www.facebook.com/goodgamesoccercamps"
								>
									<Icon icon="facebook" height="24" width="24" fillColor="DarkSlateBlue" />
								</a>
							</li>
						</div>
						<li class="border-l border-primary-light/20 dark:border-secondary-dark/20" />
						<li>
							<ThemeButton />
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</div>
