<header>
	<nav>
		<ul>
			<li>
				<a href="/async-server">async server load function</a>
			</li>

			<li>
				<a href="/async">async load function</a>
			</li>

			<li>
				<a href="/sync-server">sync server load function</a>
			</li>

			<li>
				<a href="/sync">sync load function</a>
			</li>

			<li>
				<a href="/async-get">async get</a>
			</li>
		</ul>
	</nav>
</header>

<main>
	<h1>Content</h1>
	<slot />
</main>

<ul>
	<li>
		<code>async load functions</code> will wait to be resolved before the page is loading.
	</li>
</ul>

<style>
	header {
		background-color: bisque;
	}

	main {
		background-color: aqua;
	}
</style>
