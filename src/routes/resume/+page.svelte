<script>
    import {Tween} from "svelte/motion"
    import {cubicOut} from "svelte/easing"
    let tween = new Tween(0, {
        duration: 350,
        easing: cubicOut

    })
</script>
<div class="grid-cols-1 mx-auto rounded-lg w-full md:w-1/2 p-8 text-lg">
    <div class=" bg-white flex flex-col rounded-lg border-2 border-[#6ac8c8] p-4 shadow-lg mb-8">
        <h1 class="text-2xl italic font-bold ">Education</h1>
        <p class="font-bold">Georgia Institute of Technology</p>
        <p class="text-[#6ac8c8] font-bold">2024-2028</p>
        <li class="ml-2">Bachelor of Science in Computer Science and Minor in Linguistics</li>
        <li  class="ml-2">Concentrations: Theoretical CS and Human Centered Computing</li>
        <li  class="ml-2">GPA: 3.60</li>
    </div>

    <div class="  bg-white flex flex-col rounded-lg border-2 border-[#6ac8c8] p-4 shadow-lg mb-8">
        <h1 class=" italic font-bold text-2xl">Experience</h1>
        <p class="font-bold">Verticaly Integrated Project: Langauge and Idenity in the New South </p>
        <p class="text-[#6ac8c8] font-bold">2025</p>
        <li class="ml-2">Joined the team this semester!</li>
        <li class="ml-2">Sociolinguistic interviewing, transcription, and data analysis using Python and R</li>
        <li class="ml-2">Investigating 2nd wave sociolinguistic variation among Georgia Tech Students that grew up in Georgia</li>
        <p class="font-bold">Robins Airforce Base: Software Engineering Intern</p>
        <p class="text-[#6ac8c8] font-bold">2025</p>
        <li class="ml-2">Modeled and constructed circuits to simulate systems control for aircraft flare pattern dispense tests using LEDs</li>
        <li class="ml-2">Developed a Smart Car with Raspberry Pi and various environmental sensors to navigate courses</li>
        <li class="ml-2">Designed YOLOv5-based vision model to give car expanded navigation capabilities </li>
    </div>

    <div class="  bg-white flex flex-col rounded-lg border-2 border-[#6ac8c8] p-4 shadow-lg mb-8">
        <h1 class=" italic font-bold text-2xl">Awards / Honors</h1>
        <p class="font-bold">Oral Presentation at Emory Undergraduate Lingustics Conference 6</p>
        <p class="text-[#6ac8c8] font-bold">2025</p>
        <li class="ml-2">Evaluated phonological structure in low-resource speech using Minionese as a case study</li>
        <li class="ml-2"> Used output from Allosaurus phone recognizer model in an PCA + k-means algorithm for phonological discovery to hierarchically organize phonological class in nonsense language</li>
        <p class="font-bold">Dean's List</p>
        <p class="text-[#6ac8c8]font-bold">2024, 2025</p>
    </div>

    <div class="  bg-white flex flex-col rounded-lg border-2 border-[#6ac8c8] p-4 shadow-lg mb-8">
        <h1 class=" italic font-bold text-2xl">Skills</h1>
        <p class="font-bold">Python, pandas, numpy, SvelteJS, Java</p>
    </div>
</div>