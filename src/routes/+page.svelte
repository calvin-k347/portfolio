<script>
  import pr from '$lib/assets/PRbooks.png';
  import athome from '$lib/assets/athome.png';
  import Sent from './Sent.svelte';
  import Received from './Received.svelte';
  import conversations from '$lib/data/convos.json';
  import { fade } from 'svelte/transition';
   let currentIndex = 0;
    let currentConversation = conversations[currentIndex];
  function next() {
    currentIndex = (currentIndex +=1) % conversations.length ;
    currentConversation = conversations[currentIndex];
  }
</script>
<div class="grid gap-6 px-1">
    <button
    on:click={next} 
    class=" absolute text-4xl w-fit hover:rotate-[-10deg] hover:cursor-pointer duration-300 transition">
        ➡️
    </button>
    
    {#each currentConversation.messages as message }
       {#if message.type == "sent"}
       {#key currentIndex}
        <div  transition:fade={{ duration: 400 }}>
        <Sent >
            <p>
                {@html message.text}
            </p>
        </Sent>
       </div>
       {/key}
       
        
        {:else if message.type == "received"}
        {#key currentIndex}
            <div transition:fade={{ duration: 400 }} >
            <Received>
            <p>
                {@html message.text}
            </p>
        </Received>
        </div>
        {/key}
            {:else}
                {#key currentIndex}
                    <div class="flex flex-col ml-auto w-1/2 sm:w-2/5" transition:fade={{ duration: 400 }}>
                        <img
                        class="rounded-l-4xl border-2 shadow-lg border-blue-300 rounded-tr-4xl"
                        src="{message.src}"
                        alt="{message.alt}"
                        />
                    {#if message.type == "music"}
                        <audio controls  class="w-full bg-[#efeee8] mx-auto mt-2">
                            <source src="{message.sound}" type="audio/mpeg">
                        </audio>
                    {/if}
                </div>
        {/key}

            
       {/if}
    {/each}
</div>
