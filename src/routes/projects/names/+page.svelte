<script>
    import Block from "./Block.svelte";
    export let form 
    const rows = 14
    const cols = 14
</script>
<div class="grid">
    <div id="app" class="grid gap-8 m-auto mt-24">
        <form class="m-auto grid gap-4 text-xl" method="POST">
            <label for="name">Enter you name:</label>
        <input type="text" id="name" name="name" placeholder="{form? form.data.spelling : "..." }" maxlength="50" size="30">
        <input type="submit" value="Submit" class="bg-white outline-[] rounded-lg">
        </form>
        
        <div class="m-auto w-full">
            <div class="aspect-square w-full grid relative">
                {#if form}
                       <div 
                        class="absolute inset-0 grid"
                        style="grid-template-columns: repeat({cols}, 1fr); grid-template-rows: repeat({rows}, 1fr);"
                    >
                        {#each form.data.model_predictions as _, i}
                            {#each form.data.model_predictions as _, j}
                                <div class="border border-blue-300"></div>
                            {/each}
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