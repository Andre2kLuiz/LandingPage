
const btnfechar = document.querySelector('.btn__fechar');
const msgErro = document.querySelector('.modal__msg_erro');
const msgsucesso = document.querySelector('.modal__msg_sucesso');
const modalEnviar = document.querySelector('.modal__enviar')
const btnEnviar = document.querySelector('.btn__enviar')

const validarDados = ({ nome, email }) => {
    // validar dados
    const nomeValido = nome && nome.length > 3
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const emailValido = email && emailRegex.test(email)

    return {
        nome: nomeValido,
        email: emailValido
    }
}

const pegarDados = () => {
    // pegar dados do formulario

    const dados = {
        nome: document.querySelector('.input__nome').value,
        email: document.querySelector('.input__email').value
    }

    const { nome, email } = validarDados(dados)

    const resultado = nome && email ? 'sucesso' : 'erro'

    document.querySelector('form').reset()

    return resultado

}

const formatarModal = (statusRegister) => {
    
    msgsucesso.style.display = (statusRegister === 'sucesso') ? 'block' : 'none'
    msgErro.style.display = (statusRegister === 'erro') ? 'block' : 'none'
    btnfechar.classList.add((statusRegister === 'sucesso') ? 'bg__sucesso' : 'bg__erro')
    btnfechar.classList.remove((statusRegister === 'sucesso') ? 'bg__erro' : 'bg__sucesso')

}

const mostrarModal = (statusRegister) => {
    formatarModal(statusRegister)
    modalEnviar.showModal()
}

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarModal(pegarDados())
})

btnfechar.addEventListener("click", () => {
   modalEnviar.close()
})
