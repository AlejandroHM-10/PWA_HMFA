$("document").ready(() => {
    getPersons()
})

function getPersons() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            let registros = "";
            for (person of data.data) {
                registros += '<div class="card m-2" style="width: 18rem;">' +
                    '<img src="' + person.avatar + '" class="card-img-top" alt="...">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">' + person.first_name + ' ' + person.last_name + '</h5>' +
                    '<p class="card-text">' + person.email + '</p>' +
                    '</div>' +
                    '</div>';
            }
            $("#results").html(registros)
        });
}

function nuevoRegistro() {
    const nombre = $("#nombre").val();
    const puesto = $("#puesto").val();
    const data = {
        "name": nombre,
        "job": puesto
    }
    fetch('https://reqres.in/api/users', {
            method: "POST",
            body: data
        })
        .then(response => response.json())
        .then(data => {
            $("#closeModal").click();
            let message = "El usuario " + nombre + " fue registrado con éxito a las " + data.createdAt
            $("#liveAlertPlaceholder").html('<div class="alert alert-success alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
        })
        .catch((error) => {})
}