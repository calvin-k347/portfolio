<script>
  import stonemountain from '$lib/assets/stonemountain.png';
  import pr from '$lib/assets/PRbooks.png';
  import athome from '$lib/assets/athome.png';
  import Sent from './Sent.svelte';
  import Received from './Received.svelte';
</script>
<div class="grid gap-6 px-1">
    <Sent>
        <h1 class="font-bold">Hi, I'm Calvin <span class="text-xl">😃</span></h1>
    </Sent>
    <div class="flex ml-auto w-1/2 sm:w-2/5">
        <img class="rounded-l-4xl border-2 shadow-lg border-blue-300 rounded-tr-4xl" src={stonemountain} alt="welcome to cordele sign" />
    </div>
    <Received>
        <p>
            Nice to meet you! <span class="text-xl">👍</span>
        </p>
    </Received>
    <Sent>
        <p>
            I am a 2nd year CS major @ <span class="text-[#B3A369] font-bold">Georgia</span> <span class="text-[#003057] font-bold">Tech</span>
        </p>
        
    </Sent>
    <Sent>
        <p>
            I'm also minoring in linguistics, and a big interest of mine is using computers to understand the social meanings of language
        </p>
    </Sent>
    


</div>
