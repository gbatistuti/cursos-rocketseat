import axios from 'axios';

const buscaUsuario = async usuario => {
    
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response);
    } catch (error) {
        console.warn('Usuário não existe');
    }
}

buscaUsuario('gbatistuti55555');