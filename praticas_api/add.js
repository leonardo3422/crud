function createLivro() {
    var books = {
        title: $("#nome").val(),
        description: $("#descricao").val(),
        year: $("#ano").val()
    };

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://127.0.0.1:3000/livro/add",
        "method": "POST",
        "contentType": "application/json",
        "data": JSON.stringify(books) 
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        alert("Livro adicionado com sucesso!");
    }).fail(function (error) {
        console.error(error);
        alert("Erro ao adicionar livro.");
    });
}
