<div class="grid gap-8 ">
    <div class="mt-8 mx-auto grid py-4">
        <h1 class="mx-auto text-2xl font-bold">Cordele Voices</h1>
        <p class="mx-auto text-xl italic underline">Southern Georgia Sociophonetics. Movement into middle GA as a catalyst for language change</p>
    </div>
    {#snippet blog(date,title, text, img)}
        <div class="grid bg-white rounded-xl  py-4 border-2 border-[#6ac8c8]">
            <p class="text-xl text-[#6ac8c8] ml-4 text-">{date}: <span class="text-black"> {title}</span></p>
            <p class="px-4 ">{text}</p>
        </div>
    {/snippet}
    {@render blog("9/19/25", "First Recordings", "This week I visted, recruited, and recorded my first interviews in Cordele!", [])}
    {@render blog("Summer 2025","Project Ideation", "A big source of inspiration for this project was from reading Demographic change, migration, and the African American Vowel System in Georgia (Forrest, Jon & Renwick, Margaret & Stanley, Joseph & Glass, Lelia 2024). I wanted to take a granular look at AAE language chnage in Georgia by looking recent movement from rural to urban Black communites. ",[])}

</div>