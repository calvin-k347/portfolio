<script>
    let { children } = $props();
</script>

<div class="flex  flex-col gap-5 w-fit mr-2 bg-white border-2 border-gray-300 px-8 py-6 rounded-r-4xl rounded-tl-4xl shadow-lg">
{@render children()}
</div>