//script for passing thread information to database and screen rendering
const thread = async (event) => {
    event.preventDefault();

    const thread = document.querySelector('#thread-text').value.trim();
    const counter_offer = document.querySelector('#counter-text').value.trim();
    const post_id = event.target.getAttribute('data-id');

    if (thread) {
        const response = await fetch('/', {
            method: 'POST',
            body: JSON.stringify({ thread, counter_offer, post_id }),
            headers: { 'Content-Type': "application/json" },
        });

        if (response.ok) {
            document.location.reload()
        } else {
            const x = await response.json()
            console.log(x.message)
        }
    }
}

document.querySelector('#thread-post-btn').addEventListener('click', thread);