<script>
    import Block from "./Block.svelte";
    export let form 
</script>
<div class="grid">
    <div id="app" class="grid grid-cols-2 gap-8 m-auto mt-24">
        <form class="m-auto grid gap-4 text-xl" method="POST">
            <label for="name">Enter you name:</label>
        <input type="text" id="name" name="name" placeholder="......" maxlength="50" size="30">
        <input type="submit" value="Submit" class="bg-white outline-[] rounded-lg">
        </form>
        
        <div class="flex m-auto">
            <div class="w-10 h-10 border-2 bg-white"></div>
            {#if form}
            {#each form.data.model_predictions as proba,i}
                <p>{proba}</p>
            {/each}
        {/if}
        </div>
    </div>
    
</div>