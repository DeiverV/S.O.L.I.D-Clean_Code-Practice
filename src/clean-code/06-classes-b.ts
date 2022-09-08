(() => {

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

    type Gender = 'M'|'F';
    
    interface PersonProps {
       birthdate: Date;
       gender: Gender;
       name: string;
    }

    class Person{
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({name,gender,birthdate}: PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        role: string;
    }

    class User extends Person {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({email,role,name,gender,birthdate}:UserProps){
            super( {name, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface UserSettingProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSetting extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({workingDirectory,lastOpenFolder,email,role,name,gender,birthdate}:UserSettingProps){
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder
        }
    }

    const userSettings = new UserSetting({
        birthdate: new Date('2004-11-09'),
        email: 'goguillos@gmail.com',
        gender: 'F',
        lastOpenFolder: '/home',
        name: 'Omar',
        role: 'Admin',
        workingDirectory: '/usr//home',
    })

    console.log({ userSettings });

})();