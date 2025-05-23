
        // Funcionalidades JavaScript
        function showLogin() {
            document.getElementById('loginModal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('loginModal').style.display = 'none';
        }

        function showRegister() {
            const form = `
                <h3>Cadastro</h3>
                <form id="registerForm">
                    <input type="text" placeholder="Nome completo" required>
                    <input type="text" placeholder="Nome do aluno" required>
                    <input type="date" required>
                    <input type="tel" placeholder="Telefone" required>
                    <button type="submit">Cadastrar</button>
                </form>
            `;
            document.querySelector('.modal-content').innerHTML = form;
        }
