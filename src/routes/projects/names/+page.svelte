<script>
    export let form 
    const rows = 14
    const cols = 14
</script>
<div class="grid">
    <div id="app" class="grid gap-8 m-auto mt-12">
        <form class="m-auto grid gap-4 text-xl" method="POST">
            <label for="name">Enter your name:</label>
        <input type="text" id="name" name="name" placeholder="{form? form.data.spelling : "......." }" maxlength="50" size="30">
        <input type="submit" value="Submit" class="bg-white outline-[] rounded-lg">
        </form>
        
        <div class="m-auto w-full">
            {#if form}
            <div class=" flex m-auto justify-center gap-5 mb-8 ">
                        <div class="px-2"
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
                    <div class="" 
                            >Modeled probablity of name being given to female </div>
            {/if}
            <div class="aspect-square w-full h-full grid relative">
                {#if form}
                        
                       <div 
                        class="absolute inset-0 grid"
                        style="grid-template-columns: repeat({cols}, 1fr); grid-template-rows: repeat({rows}, 1fr);"
                    >
                            

                        {#each Array(11) as _, i}
                            {#each Array(14) as _, j}
                                <div class="border border-blue-300"></div>
                            {/each}
                        {/each}
                            
                        {#each Array(14) as _, i}
                            <div class="">{1880+10*i}</div>
                            {/each}
                       
                            
                    </div>
                    
                    
                    {#each form.data.model_predictions as proba,i (proba)}
                        <div 
                            class="absolute -translate-x-1/2 translate-y-1/2 font-extrabold text-center text-6xl"
                            style:left="{i*7}%"
                            style:bottom="{(proba *125)}%"
                            animate:flip={{duration:300}}
                        >
                            .
                        </div>
                    {/each}
                {/if}

            </div>
            
        </div>
    </div>
    
</div>