<script>
    import Header from '$lib/components/Headers.svelte'
    import Footer from '$lib/components/Footers.svelte'
    import '$lib/styles/style.css'
    import "@picocss/pico";
</script>

<Header />

<main>
    <slot />
</main>

<Footer />