<script>
    import {Tween} from "svelte/motion"
    import {cubicOut} from "svelte/easing"
    let tween = new Tween(0, {
        duration: 350,
        easing: cubicOut

    })
</script>

<div class="grid-cols-1 mx-auto rounded-lg text-lg">
    <div class=" bg-white flex flex-col rounded-lg border-2 border-blue-300 p-4 shadow-lg mb-8">
        <h1 class="text-2xl italic font-bold ">Education</h1>
        <p class="font-bold">Georgia Institute of Technology</p>
        <p class="text-blue-300 font-bold">2024-2028</p>
        <ul class="list-disc ml-6">
            <li>Bachelor of Science in Computer Science and Minor in Linguistics</li>
            <li>Concentrations: Theoretical CS and Human Centered Computing</li>
            <li>GPA: 3.60</li>
        </ul>
    </div>

    <div class="  bg-white flex flex-col rounded-lg border-2 border-blue-300 p-4 shadow-lg mb-8">
        <h1 class=" italic font-bold text-2xl">Experience</h1>
        <p class="font-bold">Verticaly Integrated Project: Langauge and Idenity in the New South </p>
        <p class="text-blue-300 font-bold">2025</p>
        <ul class="list-disc ml-6">
            <li>Joined the team this semester!</li>
            <li>Sociolinguistic interviewing, transcription, and data analysis using Python and R</li>
            <li>Investigating 2nd wave sociolinguistic variation among Georgia Tech Students that grew up in Georgia</li>
        </ul>
        <p class="font-bold">Robins Airforce Base: Software Engineering Intern</p>
        <p class="text-blue-300 font-bold">2025</p>
        <ul class="list-disc ml-6">
            <li>Modeled and constructed circuits to simulate systems control for aircraft flare pattern dispense tests using LEDs</li>
            <li>Developed a Smart Car with Raspberry Pi and various environmental sensors to navigate courses</li>
            <li>Designed YOLOv5-based vision model to give car expanded navigation capabilities </li>
        </ul>
    </div>

    <div class="  bg-white flex flex-col rounded-lg border-2 border-blue-300 p-4 shadow-lg mb-8">
        <h1 class=" italic font-bold text-2xl">Awards / Honors</h1>
        <p class="font-bold">Oral Presentation at Emory Undergraduate Lingustics Conference 6</p>
        <p class="text-blue-300 font-bold">2025</p>
        <ul class="list-disc ml-6">
            <li>Evaluated phonological structure in low-resource speech using Minionese as a case study</li>
            <li> Used output from Allosaurus phone recognizer model in an PCA + k-means algorithm for phonological discovery to hierarchically organize phonological class in nonsense language</li>
        </ul>
        <p class="font-bold">Dean's List</p>
        <p class="text-blue-300font-bold">2024, 2025</p>
    </div>

    <div class="  bg-white flex flex-col rounded-lg border-2 border-blue-300 p-4 shadow-lg mb-8">
        <h1 class=" italic font-bold text-2xl">Skills</h1>
        <p class="font-bold">Python, pandas, numpy, SvelteJS, Java</p>
    </div>
</div>