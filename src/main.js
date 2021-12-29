import App from './App.svelte';
// import Tensorflow__SvelteComponent_ from './Components/tensorflow.svelte';
import ImageClassify from './Components/ImageClassification/imageClassify.svelte';
const app = new App({
	target: document.body,
	props: {
		name: 'Sanjog Rijal'
	}
});

// const tensorflowJS = new Tensorflow__SvelteComponent_({
// 	target: document.body,
// 	props: {

// 	}
// });

const imageClassifyJS = new ImageClassify({
	target: document.body
})

export default {
	app,
	imageClassifyJS
};