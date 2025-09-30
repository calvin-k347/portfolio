<script>
  import stonemountain from '$lib/assets/stonemountain.png';
  import pr from '$lib/assets/PRbooks.png';
  import athome from '$lib/assets/athome.png';
</script>
<div class="flex flex-col gap-5 justify-around">
    <p class="text-2xl name">Hello! My name is <span class="italic">Calvin</span></p>

    <div class="flex gap-8">
        <div class="flex-1">
            <img src={stonemountain} alt="me" class="w-full aspect-square flex-1 object-cover rounded-lg" />
        </div>
        <div class="flex-1 hidden sm:block">
            <img src={pr} alt="me" class="w-full aspect-square flex-1 object-cover rounded-lg" />
        </div>
    </div>

    <div class="rounded-lg flex flex-col ">
        <h1 class="mb-2 text-2xl">I'm ...</h1>
        <ul class="flex flex-col text-xl gap-y-2 list-disc ml-6">
            <li>
                From Warner Robins, GA
            </li>
            <li>
                A 2nd year CS and linguistics student at <b><span class="text-[#B3A369]">Georgia </span> <span class="text-[#003057]">Tech</span></b>
            </li>
            <li>
                Interested in language in relation to social idenity
            </li>
        </ul>
        <div class="mt-8 grid">
            <p class="text-center" >Contact me!</p>
            <p class="italic underline text-[#6ac8c8]" ><a href="mailto:cclark347@gatech.edu">cclark347@gatech.edu</a></p>

        </div>
    </div>
</div>
