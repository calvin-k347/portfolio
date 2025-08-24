<script>
  import cordele from '$lib/assets/cordele.jpg';
  import minionese from '$lib/assets/Minionese.png';
</script>
<div class="flex">
    <h1 class="mx-auto text-2xl">Highlighted projects have full pages, click to learn more!</h1>
</div>
<div class="grid grid-cols-1 gap-8 mx-auto mt-20">
    <div class="rounded-lg grid grid-cols-1 md:flex gap-5 mx-auto">
        <div class="grid-cols-1 gap-y-4 border-4 rounded-lg border-[#6ac8c8] hover:cursor-pointer hover:shadow-xl bg-white w-72 h-72">
            <img class="rounded-lg border-b-2" src={cordele} alt="welcome to cordele sign">
            <p class="justify-center px-2 font-bold">Language Change and Migration in Cordele, GA</p>
        </div>
        <div class="bg-[#d6f0f0] p-4 min-w-72 max-w-72 rounded-xl">
            <p>I was born in Cordele and most of my family is from there. <br> <br>
                We moved when I was 6, and over the years I've noticed more and more families move away from the town. <br> <br> Why? What consequneces does this have on language change?  </p>
        </div>
    </div>

    <div class="rounded-lg grid grid-cols-1 md:flex gap-5 mx-auto">
        <div class="grid-cols-1 gap-y-4 border-4 rounded-lg border-[#6ac8c8] hover:cursor-pointer hover:border-blue-500 bg-white w-72 h-72">
            <img class="rounded-lg" src={minionese} alt="welcome to cordele sign">
            <p class="justify-center px-2 font-bold">Minionese Speech Processing</p>
        </div>
        <div class="bg-[#d6f0f0] p-4 min-w-72 max-w-72 rounded-xl ">
            <p>Speech recogniton tools require an orthographic transcription of the language. What can we do for unwritten languages?
                <br><br> 
                The minions speak an unwritten language, so I developed a pipline to process their speech and reconstruct phonological class
            </p>
        </div>
    </div>

    <div class="rounded-lg grid grid-cols-1 md:flex gap-5 mx-auto">
        <div class="grid-cols-1 gap-y-4 border-4 rounded-lg border-blue-700 hover:cursor-pointer hover:border-blue-500 bg-gray-200/50 w-72 h-72">
            <img class="rounded-lg" src={cordele} alt="welcome to cordele sign">
            <p class="justify-center px-2 font-bold">Language Change and Migration in Cordele, GA</p>
        </div>
        <div class="bg-gray-200/50 p-4 min-w-72 max-w-72 rounded-xl">
            <p>I was born in Cordele and most of my family is from there. <br> <br>
                We moved when I was 6, and over the years I've noticed more and more families move away from the town. <br> <br> Why? What consequneces does this have on language change?  </p>
        </div>
    </div>

    <div class="rounded-lg border-2 bg-gray-200 w-72 h-72 mx-auto"></div>
</div>