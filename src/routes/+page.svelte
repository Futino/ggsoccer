<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
</script>

<Header />

<main
	class="border-b shadow-2xl border-primary-light/40 dark:border-primary-dark/40"
>
	<div class="py-20 sm:py-32 md:py-40 shadow-lg px-4 sm:px-6 md:px-8 grid justify-items-center space-y-12 mx-auto border-b border-secondary-light/20 dark:border-secondary-dark/20">
		<h1 class="display-large">Good Game Soccer</h1>

		<h3 class="text-2xl">
			Empowering Players, Inspiring Victories: Your Path to Soccer Excellence
		</h3>

		<div class="space-x-6">
			<a href="#">
				<Button>
					<p>Register Now</p>
				</Button>
			</a>
            <a href="#">
				<Button>
					<p>Contact Us</p>
				</Button>
			</a>
			<!-- <a href="{base}/about">
				<Button>
					<p>Who Are We?</p>
				</Button>
			</a> -->
		</div>
	</div>

    <section class="text-center px-8 py-20 sm:py-32 md:py-40">
        <h2 class="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">About GG Soccer</h2>
        <figure>
            <blockquote>
                <p class="mt-6 max-w-3xl mx-auto text-lg">
                    At GGSoccer, we ignite soccer passion, unlock potential,
                    and elevate game performance. Our personalized coaching approach
                    focuses on skill development, tactical understanding, and fostering
                    a strong team spirit. Join our inclusive community where players of
                    all levels thrive, exceed expectations, and become well-rounded
                    athletes. With dedicated coaches, individualized attention, and
                    emphasis on teamwork, we cultivate both physical and mental growth.
                    Experience the transformative power of GGSoccer as we guide you towards
                    greatness. Unleash your soccer potential, forge lifelong connections,
                    and embrace the joy of the game.
                </p>
            </blockquote>
            <figcaption class="mt-6 flex items-center justify-center space-x-4 text-left">
                <img src="" alt="" class="w-14 h-14 rounded-full" loading="lazy" decoding="async">
                <div>
                    <div class="text-slate-900 font-semibold dark:text-white">
                        Gabe
                    </div>
                    <div class="mt-0.5 text-sm leading-6">
                        Creator of Good Game Soccer
                    </div>
                </div>
            </figcaption>
        </figure>
    </section>
</main>

<Footer />
