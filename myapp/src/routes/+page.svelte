<script>
  import "@picocss/pico";

  async function getRandomNumber() {
    const res = await fetch(`http://127.0.0.1:8000/random-number`);
    const text = await res.text();

    console.log("res.ok: ", res.ok);
    console.log("text: ", text);
    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  }

  // let promise = Promise.resolve(42);
  let promise = Promise.resolve(42);


  function handleClick() {
    promise = getRandomNumber();
    console.log("promise: ", promise);
  }
</script>

<h1>Hello, world!</h1>

<button on:click={handleClick}> generate random number </button>

<blockquote>
    "This does not work currently<br />
    But I swear it works locally."
    <footer>
      <cite>- Sir McCarthy Alister (My rubber duck)</cite>
    </footer>
  </blockquote>

{#if promise != null}
  {#await promise}
    <p>...waiting</p>
  {:then number}
    <p>The number is {number}</p>
  {:catch error}
    <p style="color: red">{error.message}</p>
    <button aria-busy="true" class="secondary"></button>
    <progress value="75" max="100"></progress>
  {/await}
{/if}

<!-- {#await promise}
  <p>...waiting</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
    <button aria-busy="true" class="secondary"></button>
    <progress value="75" max="100"></progress>
{/await} -->