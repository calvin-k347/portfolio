<div class="grid gap-8 ">
    <div class="mt-8 mx-auto grid full md:w-2/3 py-4">
        <h1 class="mx-auto text-2xl font-bold">Cordele Voices</h1>
        <p class="mx-auto text-xl italic underline">Southern Georgia Sociophonetics. Urban movement as a catalyst for language change</p>
    </div>
    {#snippet blog(date,title, text, img)}
        <div class="grid mx-auto bg-white rounded-xl w-full md:w-2/3 py-4 border-2 border-[#6ac8c8]">
            <p class="text-xl text-[#6ac8c8] ml-4 text-">{date}: <span class="text-black"> {title}</span></p>
            <p class="px-4 ">{text}</p>
        </div>
    {/snippet}
    {@render blog("8/24", "King Papers", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", [])}
    {@render blog("Summer 2025","Project Ideation", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",[])}

</div>