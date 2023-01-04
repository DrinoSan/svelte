<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

  <input type="button" class="contrast outline" value="Go back!" onclick="history.back()">
  
<article>
  <h1>{data.title}</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>
