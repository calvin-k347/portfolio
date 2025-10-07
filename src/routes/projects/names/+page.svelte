<script>
    export let form 
    const rows = 14
    const cols = 14
</script>
<div class="grid">
    <div id="app" class="grid gap-8 m-auto mt-6">
        {#if !form}
            <div class="bg-white grid gap-4 rounded-xl p-6 border-2 border-blue-300">
                <p> This program uses an additive model to make a prediction of how "female" a name is given its phonological characteristics</p>
                <p>I used the CMU pronouncing dictionary to annotate the features of the name, as well as a grapheme-to-phoneme model as a fall back for less common names</p>
                <p>I also used pandas to organize the 200k+ names from US name data and train the additive model. The prediction is wrapped into an API, so that you can interact with it using your own name</p>
                <p>Give it a try to get a chart about how the model would predict the gender of your name given a decade <span class="text-xl">😸</span>!! </p>
            </div>
        {/if}

        
        <form class="m-auto grid gap-4 text-xl" method="POST">
            <label for="name">Enter your name:</label>
        <input type="text" id="name" name="name" placeholder="{form? form.data.name : "......." }" maxlength="50" size="30">
        <input type="submit" value="Submit" class="bg-white outline-[] rounded-lg">
        </form>
        
        <div class="m-auto w-full">
            {#if form}
            <div class=" flex m-auto justify-center gap-5 mb-8 ">
                        <div class="px-2 transition-colors duration-1000"
                            class:bg-rose-300={form.data.name_characterization.contains_i}
                            class:bg-sky-300={!form.data.name_characterization.contains_i}
                            >
                            {!form.data.name_characterization.contains_i? "does not": " " } contains /i/ sound
                        </div>
                        <div class="px-2"
                            class:bg-rose-300={form.data.name_characterization.ends_in_vowel}
                            class:bg-sky-300={!form.data.name_characterization.ends_in_vowel}
                            >
                            {!form.data.name_characterization.ends_in_vowel? "does not": " " } end in vowel
                        </div>
                        <div class="px-2"
                            class:bg-rose-300={form.data.name_characterization.initial_primary_stress}
                            class:bg-sky-300={!form.data.name_characterization.initial_primary_stress}
                            >
                            {!form.data.name_characterization.initial_primary_stress? "no": "" } initial primary stress
                        </div>
                        <div class="px-2"
                            class:bg-rose-300={form.data.name_characterization.longer}
                            class:bg-sky-300={!form.data.name_characterization.longer}
                            >
                            {!form.data.name_characterization.longer? "<": ">" } 2 syllables
                        </div>
                    </div>
                    <div class="text-lx" 
                            >
                            <h1 class="text-xl text-center mb-2">Model's prediction of a name being female </h1></div>
            {/if}
            <div class="aspect-square w-full h-full grid relative">
                {#if form}
                        
                       
                    
                    
                    {#each form.data.model_predictions as proba,i (proba)}
                        <div class="flex gap-2">
                            <p class=" my-auto min-w-8 max-w-8">{1880 + 10*i}</p>
                            <div 
                            class="bg-gray-500 mt-2 transition-all mx-2"
                            class:bg-rose-300={proba >= .5}
                            class:bg-sky-300={proba < .5}
                            style:width="{(proba *100)}%"
                            
                        >
                        <p
                         class=" font-bold mt-1.5 text-center ">{(parseFloat(proba)*100).toFixed(1)}%</p>
                        
                        </div>
                            
                        </div>
                    {/each}
                {/if}

            </div>
            
        </div>
    </div>
    
</div>