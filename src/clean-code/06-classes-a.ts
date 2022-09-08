(() => {

    type Gender = 'M'|'F';

    // class Person{
    //     public name: string;
    //     public gender: Gender;
    //     public birthdate: Date;

    //     constructor(name: string, gender:Gender,  birthdate: Date){
    //         this.name = name;
    //         this.gender = gender;
    //         this.birthdate = birthdate;
    //     }
    // }

    class Person{
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date,
            ){}
    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super( name, gender, birthdate );
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSetting extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSetting(
        '/usr//home',
        '/home',
        'goguillos@gmail.com',
        'Admin',
        'Omar',
        'F',
        new Date('2004-11-09')
    )

    console.log({ userSettings });

})();