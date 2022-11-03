<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-JHL3V0CQXQ"></script>
	<script>
		try {
			if (typeof window !== 'undefined' && window) {
				const googleAnalyticsId = 'G-JHL3V0CQXQ';
				window.dataLayer = window.dataLayer || [];
				function gtag() {
					window.dataLayer.push(arguments);
				}
				gtag('js', new Date());
				gtag('config', googleAnalyticsId);
			}
		} catch (error) {
			console.error('Failed to initialize Analytics');
		}
	</script>
</svelte:head>

<slot />
