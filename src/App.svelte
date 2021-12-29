<script>
	import TensorFlow from './Components/tensorflow.svelte';
	export let name;

</script>

<main>
	<h1>Hello Everyone! I am {name}.</h1>
	<p>I created this app using Svelte, Tensorflow and mobilenet model of tensorflow.</p>
	<p>Please select an image and watch the model predict what kind of an animal it is. </p>
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
