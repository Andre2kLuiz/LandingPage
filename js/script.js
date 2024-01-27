
const btnfechar = document.querySelector('.btn__fechar');
const msgErro = document.querySelector('.modal__msg_erro');
const msgsucesso = document.querySelector('.modal__msg_sucesso');
const modalEnviar = document.querySelector('.modal__enviar')

const validarDados = ({ nome, email }) => {
    // validar dados
    const nomeValido = nome && nome.length <= 3
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/
    const emailValido = email && emailRegex.test(email)

    return {
        nomeValido,
        emailValido
    }
}

const pegarDados = () => {
    // pegar dados do formulario

    const dados = {
        nome: document.querySelector('.input__nome').value,
        email: document.querySelector('.input__email').value
    }

    const { nomeValido, emailValido } = validarDados(dados)

    const resultado = nomeValido && emailValido ? 'sucesso' : 'erro'

    document.querySelector('form').reset()

    return resultado

}

const formatarModal = (statusRegister) => {
    if (statusRegister === 'sucesso') {
        msgErro.style.display = 'none'
        msgsucesso.style.display = "block"
        btnfechar.classList.add('bg__sucesso')
        btnfechar.classList.remove('bg__erro')

    }
    if (statusRegister === 'erro') {
        msgsucesso.style.display = 'none'
        msgErro.style.dispay = "block"
        btnfechar.classList.add('bg__erro')
        btnfechar.classList.remove('bg__sucesso')
    }
}

const mostrarModal = (statusRegister) => {
    // formatação codisional da janela modal
    
    formatarModal(statusRegister)
    modalEnviar.showModal()
}

document.querySelector('.btn__enviar').addEventListener("click", (e) => {
    e.preventDefault();
    mostrarModal(pegarDados())
})

btnfechar.addEventListener("click", () => {
   modalEnviar.close()
})
