<script>
    // import fs from 'fs';
    import * as tf from '@tensorflow/tfjs';
    import * as mobilenet from '@tensorflow-models/mobilenet';
    
    const imageSpiderman = `assets/images/fatSpiderman.jpeg`;
    const frost = `assets/images/frost.jpg`;
    const dog = `assets/images/dog.jpeg`;
    const me = `assets/images/sanjog.jpg`;
    const man = `assets/images/man.jpg`;
    const rabbit = `assets/images/rabbit.jpg`;
    let predictions = [{className: '',probability:''}];
    const imageClassify = async (evt) => {
        let imgTag = '';
        let imageDiv = '';
        console.log(evt);
        let reader = new FileReader();
        reader.onload = async (res) => {
            console.log(res.target.result);
            imgTag = document.createElement("img");
            imageDiv = document.getElementById('imgDiv');
            imageDiv.appendChild(imgTag);
            imgTag.src = res.target.result; 
        const model = await mobilenet.load();
        predictions = await model.classify(imgTag);
        console.log(`Predictions: ${JSON.stringify(predictions, undefined,2)}`);
    }

        reader.readAsDataURL(evt.target.files[0]);
        
    }
    // imageClassify();
</script>

<style>
    section {
        left: 40%;
        right: 0px;
        position: relative;
    }

    img {
        height: 500px;
        width: 500px;
    }
</style>

<section>
    <input type="file" on:change={imageClassify}/>
    <!-- <button class="bttn" on:click = {imageClassify}>Predict</button> -->
    <div>
        <div class="imgDiv" id = "imgDiv">

        </div>
        {#each predictions as prediction}
        <div>
            <h1>Predictions</h1>
        <p>Classname: {prediction.className}</p>
        <p>Probability: {prediction.probability}</p>
        </div>
        {/each}
        
    </div>

</section>