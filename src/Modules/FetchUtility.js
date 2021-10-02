function Fetch() {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        // SENDS THIS BODY AS REQUEST , SENDS NAME AND PASSWORD AS JSON
        body: JSON.stringify({
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            phone: "",
            address: ""
        })
    }

    fetch('http://localhost:4000/users', options)
        .then(res => res.json())
        .then(userData => {
            console.log(userData)
            localStorage.setItem("armin_testPack_user_id" , JSON.stringify(userData.id))
        })
        .catch(error => {
            console.error(error)
        });
}

module.exports = Fetch;
