<script>
    let {children} = $props()
</script>

<div class="flex ml-auto flex-col gap-5 w-fit  bg-white border-2 border-blue-300 px-8 py-6 rounded-l-4xl rounded-tr-4xl shadow-lg">
{@render children()}
</div>