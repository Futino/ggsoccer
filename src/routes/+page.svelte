<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
</script>

<Header />

<main
	class="text-center border-b shadow-2xl border-primary-light/40 dark:border-primary-dark/40 flex flex-col items-stretch"
>
	<section id="hero" class="grow py-20 sm:py-32 md:py-40 shadow-lg px-4 sm:px-6 md:px-8 grid justify-items-center space-y-12 border-b border-secondary-light/20 dark:border-secondary-dark/20">
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
	</section>

    <section id="about" class="text-center py-5 sm:py-10 md:py-20 px-4 sm:px-6 md:px-8 shadow-lg border-b border-secondary-light/20 dark:border-secondary-dark/20">
        <h2 class="text-4xl tracking-tight font-extrabold sm:text-5xl">About GG Soccer</h2>
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
                    <div class="font-semibold">
                        Gabe
                    </div>
                    <div class="mt-0.5 text-sm leading-6">
                        Creator of Good Game Soccer
                    </div>
                </div>
            </figcaption>
        </figure>
    </section>

    <section id="contact" class="text-center py-5 sm:py-10 md:py-20 px-4 sm:px-6 md:px-8 md:w-2/3 self-center max-w-4xl">
        <div class="flex p-8 shadow-lg shadow-black/40 space-y-12 flex-col">
            <div class="text-left space-y-10">
                <h2 class="text-4xl tracking-tight font-extrabold sm:text-5xl">Contact Us</h2>
                <p>
                    Have any questions? Get in contact with us!
                </p>
            </div>
            <form class="flex-1 flex flex-col space-y-5 h-50">
                <input class="border border-black/50 dark:border-white/50 p-1 dark:bg-black/5" type="text" name="name" id="name" placeholder="Name">
                <input class="border border-black/50 dark:border-white/50 p-1 dark:bg-black/5" type="text" name="email" id="email" placeholder="E-Mail">
                <textarea class="flex-1 border border-black/50 dark:border-white/50 p-1 dark:bg-black/5" name="message" id="message" placeholder="Message"></textarea>
                <Button><input type="submit" value="Send"></Button>
            </form>
        </div>
    </section>
</main>

<Footer />
