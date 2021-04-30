export class User {
    constructor(
       
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public mob?: number,
        public phoneNumber?:number,
        public id?: number,
    ) {}
    static fromJson(jsonData: any): User {
        return Object.assign(new User(jsonData.id), jsonData);
    }
}