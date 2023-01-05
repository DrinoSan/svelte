<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

  <a href="/blog" id="back" role="button" class="contrast outline">Go back!</a>
  
<article>
  <h1>{data.title}</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>


<style>
  #back{
    width: 100%;
  }
</style>