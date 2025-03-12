function addClient() {
    let table = document.getElementById("clientList");
    let row = table.insertRow();
    row.innerHTML = `
        <td>Nome Exemplo</td>
        <td>email@example.com</td>
        <td>30</td>
        <td>Brasil</td>
        <td>
            <button class='btn btn-success btn-sm'>Detalhes</button>
            <button class='btn btn-primary btn-sm' onclick="editClient(this)">Editar</button>
            <button class='btn btn-danger btn-sm' onclick="deleteClient(this)">Deletar</button>
        </td>
    `;
}

function deleteClient(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editClient(button) {
    let row = button.parentNode.parentNode;
    let newName = prompt("Edite o nome:", row.cells[0].textContent);
    if (newName !== null && newName.trim() !== "") {
        row.cells[0].textContent = newName.trim();
    }
}
