async function carregarTudo(){
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(data => console.log(data));
}

async function adicionar(){
    const name = document.getElementById('namead').value;
    const email = document.getElementById('emailad').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            
            title: name,
            body: email,
            userId: 1
        }),
        headers: {
            'Content-type' : 'application/json; charset=UTF-8' ,
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

async function atualizar(){
    const name = document.getElementById('nameat').value;
    const email = document.getElementById('emailat').value;
    const id = document.getElementById('idat').value;
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: id ,
            title: name,
            body: email,
            userId: 1
        }),
        headers: {
            'Content-type' : 'application/json; charset=UTF-8' ,
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

async function deletar(){
    const id = document.getElementById('iddel').value;
    fetch('https://jsonplaceholder.typicode.com/posts/1' , {
        method: 'DELETE' ,
        body: JSON.stringify({
            id: id ,
        }),
        headers: {
            'Content-type' : 'application/json; charset=UTF-8' ,
        },
    });
}







