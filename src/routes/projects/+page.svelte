<script>
  import cordele from '$lib/assets/cordele.jpg';
  import minionese from '$lib/assets/Minionese.png';
  import langandnames from '$lib/assets/langandnames.png'
</script>
<div class="flex">
    <h1 class="mx-auto text-2xl">Projects have full pages, click to learn more!</h1>
</div>
<div class="grid grid-cols-1 gap-8 mx-auto mt-20">
    {#snippet project(caption, image, description, link)}
        <div class="rounded-lg grid grid-cols-1 md:flex gap-5 mx-auto">
        <div class="grid-cols-1 gap-y-4 border-2 rounded-lg border-[#6ac8c8]  shadow-lg hover:shadow-[#6ac8c8] transition-all ease-in bg-white w-72 h-72">
            {#if link}
            <a href="{link}">
            
            <img class="rounded-lg min-h-32" src={image} alt="welcome to cordele sign">
            <p class="justify-center px-2 font-bold">{caption}</p>
            </a>
            {:else}
            <img class="rounded-lg" src={image} alt="welcome to cordele sign">
            <p class="justify-center px-2 font-bold whitespace-pre-line">{caption}</p>
            {/if}
        </div>
        <div class="bg-[#d6f0f0] p-4 min-w-72 max-w-72 rounded-xl">
            <p>{@html description.replaceAll('\n', '<br>')}</p>
        </div>
        </div>
    {/snippet}
    {@render project("Language Change and Migration in Cordele, GA", cordele, "I was born in Cordele and most of my family is from there. \n\n We moved when I was 6, and over the years I've noticed more and more families move away from the town. \n \n Why? What consequneces does this have on language change?", "/projects/cordele")}
    {@render project("Minionese Speech Processing", minionese, "Speech recogniton tools require an orthographic transcription of the language. What can we do for unwritten languages? \n\n The minions speak an unwritten language, so I developed a pipline to process their speech and reconstruct phonological class" )}
    {@render project("Langauge and Names", langandnames, "See how sound features of your name influence a model's predictions of gender over time. Created on decades of US baby name data! \n\n Based on the paper \"Modeling Language Change in English First Names\" (Williams, Savannah Jane, and Margaret Renwick. 2022)", "/projects/names" )}
    
</div>