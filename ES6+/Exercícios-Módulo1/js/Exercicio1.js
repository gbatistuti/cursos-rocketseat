class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        return this.admin === true;
    }
}

class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new Usuario('teste@teste.com', '123');
const Adm1 = new Admin('admin@teste.com', 'senha');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());