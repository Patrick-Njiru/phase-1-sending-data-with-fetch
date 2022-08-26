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
       document.querySelector('form').innerHTML = 
       `<p>
          <strong>Congratulations!</strong> Your account has been created with the following details: <br>
          UserName : ${obj.name}, <br>
          Email    : ${obj.email}. <br><br>
          Your user ID is ${obj.id}
       </p>` 
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