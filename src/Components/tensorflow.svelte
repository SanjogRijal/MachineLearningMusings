<script>
    import * as tf from '@tensorflow/tfjs';
    let linearModel;
    let prediction
    let trainNewModel = async () =>  {
        //Create a model
        linearModel = tf.sequential();
        linearModel.add(tf.layers.dense({units:1, inputShape: [1]}));
        linearModel.compile({loss: "meanSquaredError", optimizer:'sgd'});
        
        //Tensor is like an array. 1d tensor would be array.
        const xs = tf.tensor1d([1.1,4.5,123,1,1,123,4,5,6,7,8,8]);
        const ys = tf.tensor1d([3.5,1.5,12.3,11.01,1.01,1.23,4.48,5.59,6.13,7.123,8.33,1.133]);
        await linearModel.fit(xs,ys);
        console.log("modelTrained");
    }

    const linearPrediction = (evt) => {
        let val = evt.target.value;
        console.log(parseInt(val));
        const output = linearModel.predict(tf.tensor2d([parseInt(val)], [1,1]));
        prediction = Array.from(output.dataSync())[0];
    }

    
    trainNewModel();
</script>

<style>
    .tensorSection {
        left: 40%;
        position: relative;
        right:0px
    }
</style>

<section>
    <div class="tensorSection">
        <h4>Predicted Value: {prediction}</h4>

    <input type="number" on:change={linearPrediction}>
    </div>
    
</section>