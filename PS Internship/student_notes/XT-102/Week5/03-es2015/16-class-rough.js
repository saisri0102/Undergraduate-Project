class User{
    constructor({email, password, confpass, name}){
        this.email= email;
        this.password= password;
        this.confpass= confpass;
        this.name= name;

        console.log(this.email, this.password, this.confpass, this.name);
    }

}

