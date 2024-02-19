// subbmition form 
var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)

// ------------------------

// Back to top
const backtotop = document.querySelector('#backtotop');
backtotop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});

function refreshNavigationDots() {
    // Remove the specified class from all navigation dots
    document.getElementById('navDot1').classList.remove('bg-[#3f3fff]');
    document.getElementById('navDot2').classList.remove('bg-[#3f3fff]');
    document.getElementById('navDot3').classList.remove('bg-[#3f3fff]');
    document.getElementById('navDot4').classList.remove('bg-[#3f3fff]');
    document.getElementById('navDot5').classList.remove('bg-[#3f3fff]');

    document.getElementById('navDots1').classList.remove('text-gray-400');
    document.getElementById('navDots2').classList.remove('text-gray-400');
    document.getElementById('navDots3').classList.remove('text-gray-400');
    document.getElementById('navDots4').classList.remove('text-gray-400');

    // Check the current URL and add the specified class to the corresponding navigation dot
    if (window.location.href === 'https://kalashvasaniya.com' || window.location.href === 'https://kalashvasaniya.com/#') {
        document.getElementById('navDot1').classList.add('bg-[#3f3fff]');
    } else if (window.location.href === 'https://kalashvasaniya.com/#about') {
        document.getElementById('navDot2').classList.add('bg-[#3f3fff]');
    } else if (window.location.href === 'https://kalashvasaniya.com/#project') {
        document.getElementById('navDot3').classList.add('bg-[#3f3fff]');
    } else if (window.location.href === 'https://kalashvasaniya.com/#Experience') {
        document.getElementById('navDot4').classList.add('bg-[#3f3fff]');
    } else if (window.location.href === 'https://kalashvasaniya.com/#hire') {
        document.getElementById('navDot5').classList.add('bg-[#3f3fff]');
    }

    // Check the current URL and add the specified class to the corresponding navigation dot
    if (window.location.href === 'https://kalashvasaniya.com' || window.location.href === 'https://kalashvasaniya.com/#') {
        document.getElementById('navDots1').classList.add('text-white');
    } else if (window.location.href === 'https://kalashvasaniya.com/#about') {
        document.getElementById('navDots2').classList.add('text-white');
    } else if (window.location.href === 'https://kalashvasaniya.com/#project') {
        document.getElementById('navDots3').classList.add('text-white');
    } else if (window.location.href === 'https://kalashvasaniya.com/#Experience') {
        document.getElementById('navDots4').classList.add('text-white');
    }
}

// Refresh the script every second
setInterval(refreshNavigationDots, 1);

// ------------------------

// alert in responsive web
// document
//     .getElementById("confirmClickActionElementId")
//     .addEventListener("click", function( e ){ //e => event
//         alert('Under Construction :)');
//     });

// ------------------------
