<template>
  <div id="app">

    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>

      <div class="header__right">
        <ToggleTheme />
      </div>
    </header>

    <main class="main">
      <slot/>
    </main>

    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }} Januar Fonti. </span>
      <span class="footer__links">Powered by <a href="//gridsome.org">Gridsome</a> and <a href="https://zeit.co/">Zeit</a>.</span>
      <ClientOnly>
        <cookie-law theme="blood-orange">
           <div slot="message">
            Howdy! Saat ini saya sedang proses migrasi konten dari alamat <a href="https://januarfonti.com" target="_blank">https://januarfonti.com</a> ke <a href="https://cuticuti.club" target="_blank">https://cuticuti.club</a>. Silahkan update bookmark anda ke alamat yang baru 😉.
          </div>
        </cookie-law>
      </ClientOnly>
    </footer>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'
import CookieLaw from 'vue-cookie-law'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme,
    CookieLaw
  }
}
</script>

<style lang="scss">
/**
 * Add back the container background-color, border-radius, padding, margin
 * and overflow that we removed from <pre>.
 */
.gridsome-highlight {
  background-color: #fdf6e3; //for solarized theme
  margin: 0.5em 0;
  padding: .5em;
  overflow: auto;
}
.gridsome-highlight-code-line {
  background-color: #feb; //for solarized theme
  display: block;
  margin-right: -1em;
  margin-left: -1em;
  padding-right: 0.5em;
  padding-left: 0.5em;
  border-left: 0.25em solid #f99;
}

/**
 * Remove the default PrismJS theme background-color, border-radius, margin,
 * padding and overflow.
 * 1. Make the element just wide enough to fit its content.
 * 2. Always fill the visible space in .gatsby-highlight.
 * 3. Adjust the position of the line numbers
 */
.gridsome-highlight pre[class*="language-"] {
  background-color: transparent;
  margin: 0;
  padding: 0;
  overflow: initial;
  float: left; /* 1 */
  min-width: 100%; /* 2 */
}

/* Adjust the position of the line numbers */
.gridsome-highlight pre[class*="language-"].line-numbers {
  padding-left: 2.8em;
}

.Cookie--blood-orange {
  padding: .5em 1.25em !important;
  opacity: .9;
  .Cookie__content {
    font-size: 12px;
  }
  .Cookie__button {
    padding: .4em 3.125em !important;
  }
}

pre {
  font-size: 14px !important;
}
code {
  font-size: 14px !important;
  padding: 0 !important;
  border-radius: 0 !important;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
</style>
