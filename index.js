// Add your code here
function submitData (name, email){
    const submission = {
        name: name,
        email: email,
    }

    return fetch ('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(submission),
    })
    .then (res => res.json())
    .then (data => document.querySelector('body').append(data.id))
    .catch (error => document.querySelector('body').append(error.message))
}