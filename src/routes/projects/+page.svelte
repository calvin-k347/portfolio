<script>
  import cordele from '$lib/assets/cordele.jpg';
  import minionese from '$lib/assets/Minionese.png';
  import langandnames from '$lib/assets/langandnames.png'
  import Project from './Project.svelte';
</script>


<div class="grid grid-cols-1 gap-8 mt-8">
    <Project
        caption="Language Change and Migration in Cordele, GA"
        image={cordele}
        link="/projects/cordele"
    >
        <p>
            I was born in Cordele and most of my family is from there.
        </p>
        <p>
            We moved when I was 6, and over the years I've noticed more and more families move away from the town.
        </p>
        <p>
            Why? What consequneces does this have on language change?
        </p>
    </Project>

    <Project
        caption="Minionese Speech Processing"
        image={minionese}
    >
        <p>Speech recogniton tools require an orthographic transcription of the language. What can we do for unwritten languages?</p>
        <p>The minions speak an unwritten language, so I developed a pipline to process their speech and reconstruct phonological class</p>
    </Project>

    <Project
        caption="Language and Names"
        image={langandnames}
        link="/projects/names"
    >
        <p>See how sound features of your name influence a model's predictions of gender over time. Created on decades of US baby name data!</p>
        <p>Based on the paper "Modeling Language Change in English First Names" (Williams, Savannah Jane, and Margaret Renwick. 2022)</p>
    </Project>    
</div>

<div class="flex">
    <h1 class="mt-8 mx-auto text-lg">Projects have full pages, click to learn more!</h1>
</div>
