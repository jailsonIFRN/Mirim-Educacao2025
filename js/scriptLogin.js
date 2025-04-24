
// Pegar o valor do campo de email
function validateFields() {
        const emailValid = isEmailValid();
        document.getElementById('recover-password-button').disabled = !emailValid;

         // verificar se o email não é vazio e se o email é válido
         const passwordValid = isPasswordValid();
         document.getElementById('login-button').disabled = !emailValid || !passwordValid;
        // verificar se o email não é vazio e se o email é válido
        // se verdadeiro, então habilitar o botão de recuperar senha
        // se falso, então desabilitar o botão de recuperar senha

function isEmailValid() {
        const email = document.getElementById("email").value;
        if (!email) {
                return false;
        }

        return validateEmail(email);

}

function isPasswordValid() {
        const password = document.getElementById('password').value;
        if (!password) {
                return false;
        }
        return true;
}
} 

function validateEmail(email) {
        return /\S+@\S+\.\S/.test(email);
}


        