const { createClient } = supabase
supabase = createClient("https://ujxtaeuyzxhwtnliwmce.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqeHRhZXV5enhod3RubGl3bWNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1MDUyMjQsImV4cCI6MjEwODA4MTIyNH0.6coHJgw_n_douhL6vH6ll3vnB8wOrV0-pZCUm2j9sWI")

const form = document.querySelector('#contact-form')
form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const formInputs = form.querySelectorAll('input, textares')

    let submission = {}

    formInputs.forEach(element => {
        const { value, name } = element
        if (value) {
            submission[name] = value
        }
    })

    const { error, data } = await supabase.form('entries').insert([submission])

    console.log({ error, data })
})