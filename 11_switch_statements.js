//switch  =  statements that examines a value
//            for a match against many case clauses.
//           more efficient than many "else-if " statements

let grade = 98;
switch(grade){
    case 'A':
        console.log("You did great!");
        break;
    case 'B':
        console.log("That was good!");
        break;
    case 'C':
        console.log("Could have been better!");
        break;
    case 'D':
        console.log("Try hard you can do better!");
        break;
    default:
        console.log(grade, "is not a letter grade!");
        break;
}