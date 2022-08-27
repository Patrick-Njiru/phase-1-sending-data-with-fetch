// // Add your code here
// let formData = {
//     dogName : "Byron",
//     dogBreed: "Poodle"
// }

// const configurationObject = {
//     method: "POST",
//     headers : {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
// }


// // fetch(destinationURL, configurationObject)

// fetch("http://localhost:3000/dogs", configurationObject)

// .then(response => response.json())
// .then(json => console.log(json))

// .catch(error => error.message)


document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        let userName = document.querySelector('#user_name').value,
        userEmail = document.querySelector('#email').value
        submitData(userName, userEmail)
    })
})


const submitData = (userName, userEmail) => {
    let formData = {
        name : userName,
        email : userEmail
    }
    const configurationObject = {
        method : "POST",
        headers : {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(formData)
    }
    return fetch("http://localhost:3000/users", configurationObject)
    .then(resp => resp.json())
    .then(obj => {
        if ( obj.name === '' || obj.email === '') {
            return alert('Please fill the Username and email before you proceed!')
        } else {
          document.querySelector('form').innerHTML = `<p> User ID: <b style="font-size: 3em;">${obj.id} </b>`
        }
    })
    .catch(error => {
        document.querySelector('body').innerHTML= 
        `<div class="error"> 
        <p 
        id="error"> ${error} 
        </p> 
        </div>`
    })
}