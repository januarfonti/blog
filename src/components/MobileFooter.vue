<template>
	<ul class="mobile-footer flex sticky bottom-0 m-0 z-50 uppercase">
		<li class="text-center flex-1 m-0 py-1">
			<g-link to="/">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="mx-auto"><path fill="currentColor" class="heroicon-ui" d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"/></svg>
				Home
			</g-link>
		</li>
		<li class="text-center flex-1 m-0 py-1">
			<g-link to="/what-is-this/">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="mx-auto"><path fill="currentColor" class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
				What is this?
			</g-link>
		</li>
		<li class="flex-1 m-0 text-center py-1">
			<a href="#">
				<ToggleTheme/>
			</a>
		</li>
	</ul>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import ToggleTheme from '~/components/ToggleTheme.vue'
export default {
	components: {
		ToggleTheme
	}
}
</script>

<style lang="scss">
	ul {
		list-style: none;
	}
	.mobile-footer {
		background: var(--bg-secondary);
		transition: color .6s, background-color .6s;
		font-size: .5em;
		a{
			color: var(--body-color);
		}
	}
</style>
