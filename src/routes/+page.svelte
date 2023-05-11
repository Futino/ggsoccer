<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Logo from '$lib/components/atoms/Logo.svelte';
	import Icon from '$lib/components/atoms/Icon.svelte';
</script>

<Header />

<main
	class="text-center border-b shadow-2xl border-primary-light/40 dark:border-primary-dark/40 flex flex-col items-stretch"
>
	<section
		id="hero"
		class="grow py-30 sm:py-34 md:py-44 shadow-lg px-4 sm:px-6 md:px-8 grid justify-items-center space-y-12 border-b border-secondary-light/20 dark:border-secondary-dark/20 bg-black relative "
	>
		<img
			src="media/IMG_4905.jpeg"
			alt=""
			class="absolute opacity-50
             w-full h-full object-cover"
		/>
		<h1 class="display-large text-white z-10">Good Game Soccer</h1>

		<h3 class="text-2xl text-white z-10">
			Empowering Players, Inspiring Victories: Your Path to Soccer Excellence
		</h3>

		<div class="space-x-6">
			<a href="https://forms.gle/8Aez3YWynF7PMAz66">
				<Button>
					<p>Register Now</p>
				</Button>
			</a>
			<a href="#contact">
				<Button>
					<p>Contact Us</p>
				</Button>
			</a>
		</div>
	</section>

	<!--About section-->
	<section
		id="about"
		class="text-center py-5 sm:py-10 md:py-20 px-4 sm:px-6 md:px-8 shadow-lg border-b border-secondary-light/20 dark:border-secondary-dark/20"
	>
		<h2 class="text-4xl tracking-tight font-extrabold sm:text-5xl">About GG Soccer</h2>
		<figure>
			<blockquote>
				<p class="mt-6 max-w-3xl mx-auto text-lg">
					At GGSoccer, we ignite soccer passion, unlock potential, and elevate game performance. Our
					personalized coaching approach focuses on skill development, tactical understanding, and
					fostering a strong team spirit. Join our inclusive community where players of all levels
					thrive, exceed expectations, and become well-rounded athletes. With dedicated coaches,
					individualized attention, and emphasis on teamwork, we cultivate both physical and mental
					growth. Experience the transformative power of GGSoccer as we guide you towards greatness.
					Unleash your soccer potential, forge lifelong connections, and embrace the joy of the
					game.
				</p>
			</blockquote>
			<figcaption class="mt-6 flex items-center justify-center space-x-4 text-left">
				<img src="" alt="" class="w-14 h-14 rounded-full" loading="lazy" decoding="async" />
				<div>
					<div class="font-semibold">Gabe</div>
					<div class="mt-0.5 text-sm leading-6">Creator of Good Game Soccer</div>
				</div>
			</figcaption>
		</figure>

		<style>
			.card {
				@apply rounded-lg max-w-xl shadow-2xl flex flex-col text-surface-on-light dark:text-surface-on-dark p-8 h-full;
			}
		</style>

		<!--Camp Options-->
		<div id="camps" class="grid grid-cols-1 lg:grid-cols-2 place-items-center m-6 my-12 gap-x-4">
			<div class="card">
				<img src="media/IMG_4855.jpeg" alt="" class="object-cover rounded-lg h-1/2 w-full" />
				<h1 class="headline-medium font-bold p-4">Ages 3-6</h1>
				<h2 class="body-large p-2">
					At GGSoccer, we ignite soccer passion, unlock potential, and elevate game performance. Our
					personalized coaching approach focuses on skill development, tactical understanding, and
					fostering a strong team spirit. Join our inclusive community where players of all levels
					thrive, exceed expectations.
				</h2>
				<h2 class="font-bold title-large text-secondary-light dark:text-secondary-dark pt-2">
					$85
				</h2>
				<Button class="mt-7 mx-auto self-end">
					<p>Register Now</p>
				</Button>
			</div>
			<div class="card">
				<img src="media/IMG_8900.jpeg" alt="" class="object-cover rounded-lg h-1/2 w-full" />
				<h1 class="title-large font-bold p-4">Ages 7-12</h1>
				<h2 class="body-large p-2">
					At GGSoccer, we ignite soccer passion, unlock potential, and elevate game performance. Our
					personalized coaching approach focuses on skill development, tactical understanding, and
					fostering a strong team spirit. Join our inclusive community where players of all levels
					thrive, exceed expectations.
				</h2>
				<h2 class="font-bold title-large text-secondary-light dark:text-secondary-dark pt-2">
					$135
				</h2>
				<Button class="mt-7 mx-auto self-end">
					<p>Register Now</p>
				</Button>
			</div>
		</div>
	</section>

	<!--Contact Section-->
	<section
		id="contact"
		class="text-center py-5 sm:py-10 md:py-24 px-4 sm:px-6 md:px-8 md:w-2/3 self-center"
	>
		<div class="flex flex-row align-middle justify-center place-items-center space-x-64">
			<!--Contant methods-->
			<div class="flex flex-col space-y-12">
				<!--Phone number-->
				<div class="flex flex-col space-y-2">
					<div class="rounded-full bg-surface-variant-light w-fit p-6">
						<Icon icon="phone" height="32px" width="32px" />
					</div>
					<a class="" href="tel:9133600394">
						<h1 class="title-large font-extrabold text-left text-surface-on-light">
							(913) 360-0394
						</h1>
					</a>
				</div>
				<!--Email-->
				<div class="flex flex-col space-y-2">
					<div class="rounded-full bg-surface-variant-light w-fit p-6">
						<Icon icon="email" height="32px" width="32px" />
					</div>
					<a class="" href="mailto:ggsoccercamps@gmail.com">
						<h1 class="title-large font-extrabold text-left text-surface-on-light">
							(913) 360-0394
						</h1>
					</a>
				</div>
				<!--Email-->
				<div class="flex flex-col space-y-2">
					<div class="rounded-full bg-surface-variant-light w-fit p-6">
						<Icon icon="location" height="32px" width="32px" />
					</div>
					<a class="" href="tel:9133600394">
						<h1 class="title-large font-extrabold text-left text-surface-on-light">
							Atchison Recreation Sports Complex
						</h1>
					</a>
				</div>
			</div>
			<!--Contact form-->
			<div class="flex grow p-8 shadow-lg shadow-black/40 space-y-12 flex-col">
				<div class="text-left space-y-10">
					<h2 class="text-4xl tracking-tight font-extrabold sm:text-5xl">Contact Us</h2>
					<p>Have any questions? Get in contact with us!</p>
				</div>
				<form class="flex-1 flex flex-col space-y-5 h-50">
					<input
						class="border border-black/50 dark:border-white/50 p-1 dark:bg-black/5"
						type="text"
						name="name"
						id="name"
						placeholder="Name"
					/>
					<input
						class="border border-black/50 dark:border-white/50 p-1 dark:bg-black/5"
						type="text"
						name="email"
						id="email"
						placeholder="E-Mail"
					/>
					<textarea
						class="flex-1 border border-black/50 dark:border-white/50 p-1 dark:bg-black/5"
						name="message"
						id="message"
						placeholder="Message"
					/>
					<Button><input type="submit" value="Send" /></Button>
				</form>
			</div>
		</div>
	</section>

	<!--Gallery Section-->
	<section
		id="gallery"
		class="text-center py-5 sm:py-10 md:py-24 px-4 sm:px-6 md:px-8 md:w-2/3 self-center"
	/>
</main>

<Footer />
