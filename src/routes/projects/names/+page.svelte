<script>
    import Block from "./Block.svelte";
</script>
<div class="grid">
    <div id="app" class="grid grid-cols-2 gap-8 m-auto mt-24">
        <form class="m-auto grid gap-4 text-xl">
            <label for="name">Enter you name:</label>
        <input type="text" id="username" name="username" placeholder="......" maxlength="50" size="30">
        <input type="submit" value="Submit" class="bg-white outline-[] rounded-lg">
        </form>
        <div class="flex m-auto">
            <div class="w-10 h-10 border-2 bg-white"></div>
            <Block message="hi"></Block>
        </div>
    </div>
    
</div>