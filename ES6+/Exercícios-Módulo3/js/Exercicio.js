
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    await delay();
    console.log('1s');

    await delay();
    console.log('2s');

    await delay();
    console.log('3s');
}

umPorSegundo();

//B

import axios from 'axios';

async function getUserFromGithub(user) {
    
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response);
    } catch (error) {
        console.log('Usuário não existe');
    }
}

getUserFromGithub('gbatistuti');
getUserFromGithub('gbatistuti656564');

//C

class Github {
    static async getRepositories(user){
        try {
            const response = await axios.get(`https://api.github.com/users/${user}/repos
            `);
            console.log(response.data);
            
        } catch (error) {
            console.warn('Repositório não existe');
        }
    }
}

Github.getRepositories('gbatistuti');
Github.getRepositories('rocketseat/etgegfhtgregf');

//D

const buscaUsuario = async usuario => {
    
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response);
    } catch (error) {
        console.warn('Usuário não existe');
    }
}

buscaUsuario('gbatistuti');