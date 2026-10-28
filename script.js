const { createClient } = supabase;

const supabaseClient = createClient(SUPABASE_SITE, SUPABASE_ANON);

const form = document.querySelector("#contact-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    const submitButton = form.querySelector(".submit");
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
        const { error } = await supabaseClient
            .from("entries")
            .insert([{ name, email, message }]);

        if (error) throw error;

        alert("Message sent successfully!");
        form.reset();
    } catch (error) {
        console.error("Supabase error:", error);
        alert("Failed to send message. Please try again.");
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Send";
    }
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}