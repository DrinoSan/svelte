<script>
  import "@picocss/pico";

  async function getRandomNumber() {
    const res = await fetch(`http://127.0.0.1:8000/random-number`);
    const text = await res.text();

    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  }

  let promise = getRandomNumber();

  function handleClick() {
    promise = getRandomNumber();
  }
</script>

<h1>Hi</h1>

<button on:click={handleClick}> generate random number </button>

<p>
  This does not work currently couse i cant install kqueue on ubuntu...<br />
  But I swear it works locally
</p>

{#await promise}
  <p>...waiting</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
