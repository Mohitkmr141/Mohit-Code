class Employee{

    // constructor(leaves){
    //     this.leaves = leaves
    // }


    login(){
        console.log(`Employee is logged in`);
    }
    logout(){
        console.log(`Employee is logged out`);
    }
    leave(leaves){
        console.log(`Employee is requested ${leaves}`)
    }
}


class Programmer extends Employee{
    request(){
        console.log(`Employee is requested `)
    }

    leave(leaves){
        console.log(`leaves granted : ${leaves + 1} One extra Leaves`)
        super.leave(leaves)
        console.log(`${leaves}`)
 

            
        }
    }

    

let Mohit = new Programmer()
Mohit.login()
Mohit.logout()
Mohit.leave(3)