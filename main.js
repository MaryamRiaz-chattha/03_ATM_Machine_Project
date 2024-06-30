import inquirer from "inquirer";
//My Balance In Account 
let myBalance = 10000;
//My Password Of Atm Machine
let mypin = 2303;
//Code for My Atm  Password
console.log("Welcome To Maryam's Atm Machine");
let Password = await inquirer.prompt([{
        message: "Please Enter Your Password",
        type: "number",
        name: "pin"
    }]);
if (Password.pin === mypin) {
    console.log("Congrate! Your Password is Correct.");
    //Asking Question To User
    let OperationAns = await inquirer.prompt([{
            message: "Select Any One To Perform Opeartion",
            type: "list",
            name: "askOperation",
            choices: ["Withdraw", "Fast Cash", "Check Balance"]
        }]);
    //code for Withdraw
    if (OperationAns.askOperation === "Withdraw") {
        let Withdrawcash = await inquirer.prompt([{
                message: "Enter Amount PLease",
                type: "number",
                name: "amountfastcash"
            }]);
        if (Withdrawcash.amountfastcash > myBalance) {
            console.log("Insufficient Balance!!");
            console.log(`Your Current Balance is only:${myBalance}`);
        }
        else {
            myBalance -= Withdrawcash.amountfastcash;
            console.log(`Congrate Your Amount Is Sucessfully Withdraw.`);
            console.log(`Your Remaing Balance is ${myBalance} `);
        }
    }
    //code for Check Balance
    if (OperationAns.askOperation === "Check Balance") {
        console.log(`Your Current Balance is :${myBalance}`);
    }
    // Code for Fast Cash
    else if (OperationAns.askOperation === "Fast Cash") {
        let fastcash = await inquirer.prompt([
            {
                message: "Select any one option ",
                type: "list",
                name: "cashdraw",
                choices: ["5000", "1000", "1500", "20000"]
            }
        ]);
        let amountWithdraw = parseInt(fastcash.cashdraw);
        if (amountWithdraw > myBalance) {
            console.log("Insufficient Balance!!");
            console.log(`Your Current Balance is only: ${myBalance}`);
        }
        else {
            myBalance -= amountWithdraw;
            console.log(`Congrats! Your Amount of ${amountWithdraw} is Successfully Withdrawn.`);
            console.log(`Your Remaining Balance is ${myBalance}`);
        }
    }
}
else {
    console.log("Kindly enter correct Pin");
}
