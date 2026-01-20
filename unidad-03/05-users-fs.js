const crypto = require('crypto');
const fs = require('fs/promises');
const path = 'data/users.json';


class UsersManager {
    constructor(){
        this.users = []
    }

    async createUser(user) {
        const { firtsName, lastName, userName, password } = user;
        const hash = crypto.createHash('sha256');
        const id = crypto.randomUUID();

        hash.update(password);
        let passwordHash = hash.digest('hex');

        this.users.push({
            id,
            firtsName,
            lastName,
            userName,
            password: passwordHash
        });

        const text = JSON.stringify( this.users, null, 2)

        await fs.writeFile(path, text);
        

    }

    async getUsers() {
        try {        
            const data = await fs.readFile( path, 'utf-8');
            this.users = JSON.parse(data);
            return this.users
        } catch (error) {
            console.error(error)
            return []
        }

    }

    auth(userName, password){
        
    }
}


const manager = new UsersManager();
 manager.createUser({
    firtsName: 'Maria',
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

// No es valido, porque es una promesa!
// const r = manager.getUsers();
// console.log(r)

manager.getUsers().then( r => {
    console.table(r)
})