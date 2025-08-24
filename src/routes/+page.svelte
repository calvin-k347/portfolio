<script>
  import stonemountain from '$lib/assets/stonemountain.png';
  import pr from '$lib/assets/PRbooks.png';
  import athome from '$lib/assets/athome.png';
</script>

<div class="flex flex-col gap-5 justify-around">
    <div class="m-auto flex flex-col gap-8 max-w-72 ">
        <p class="text-2xl name">Hello! My name is <span class="italic">Calvin</span></p>
        <div class="w-72 h-72 flex gap-8 justify-center">
            <img src={stonemountain} alt="me" class="w-full h-full object-cover rounded-lg" />
            <img src={pr} alt="me" class="hidden md:block w-full h-full object-cover rounded-lg" />

        </div>
    </div>
    <div class=" mx-auto text-2xl rounded-lg flex flex-col ">
        <h1 class="mx-auto mb-4">I'm ...</h1>
        <ul class="gap-3 md:gap-1">
            <li>
                From Warner Robins, GA
            </li>
            <li>
                A second year CS and linguistics student at <span class="text-[#B3A369]">Georgia </span> <span class="text-[#003057]">Tech</span>
            </li>
            <li>
                Interested in language in relation to social idenity
            </li>
        </ul>
        <div class="mx-auto mt-8 flex">
            <p class="italic underline text-[#6ac8c8]" ><a href="mailto:cclark347@gatech.edu">cclark347@gatech.edu</a></p>
        </div>
    </div>
</div>
