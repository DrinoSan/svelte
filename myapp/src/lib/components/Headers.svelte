<script>
  import "@picocss/pico";
</script>

<nav class="container-fluid" id="navi">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
  <ul>
    <li>
      <details role="list" dir="rtl">
        <summary aria-haspopup="listbox" role="link" class="secondary">About me</summary>
        <ul role="listbox">
          <li><a href="/about" data-theme-switcher="auto">About me</a></li>
          <li><a href="/contact" data-theme-switcher="light">Contact</a></li>
          <li><a href="/form" data-theme-switcher="dark">Send a mail</a></li>
        </ul>
      </details>
    </li>
    <li>
      <details role="list" dir="rtl">
        <summary aria-haspopup="listbox" role="link" class="secondary">Blog</summary>
        <ul role="listbox">
          <li><a href="/blog">My Blog</a></li>
          <li><a href="/uses">Markdown</a></li>
        </ul>
      </details>
    </li>
    <li>
      <details role="list" dir="rtl">
        <summary aria-haspopup="listbox" role="link" class="secondary">Login</summary>
        <ul role="listbox">
          <li><a href="/login" data-theme-switcher="auto">Log-in</a></li>
        </ul>
      </details>
    </li>
  </ul>
</nav>

<style> 
  #navi {
    background: #333333;
  }

</style>