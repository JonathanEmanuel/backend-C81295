const crypto = require('crypto');


class UsersManager {
    constructor(){
        this.users = []
    }

    createUser(user) {
        const { firtsName, lastName, userName, password } = user;
        const hash = crypto.createHash('sha256');
        const id = crypto.randomUUID();

        hash.update(password);
        let passwordHash = hash.digest('hex');


        this.users.push({
           // id,
            firtsName,
            lastName,
            userName,
            password: passwordHash
        });
    }

    getUsers() {
       return this.users;
    }

    auth(userName, password){

    }
}


const manager = new UsersManager();
manager.createUser({
    firtsName: 'Sofia',
    lastName: 'Ruiz',
    userName: 'sofi',
    password: '123'
});

manager.createUser({
    firtsName: 'Marcos',
    lastName: 'Herrera',
    userName: 'mark',
    password: '0004'
});

console.table( manager.getUsers() );