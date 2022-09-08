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
        email: string;
        role: string;
    }

    class User{
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({email,role}:UserProps){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings{
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({workingDirectory,lastOpenFolder}:SettingsProps){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder
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

    class UserSetting{
        public person  : Person;
        public user    : User;
        public settings: Settings;

        constructor({
            name, gender, birthdate, email, role, lastOpenFolder, workingDirectory
        }: UserSettingProps){
            this.person = new Person({name, gender, birthdate});
            this.user = new User({email, role});
            this.settings = new Settings({ lastOpenFolder, workingDirectory});
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