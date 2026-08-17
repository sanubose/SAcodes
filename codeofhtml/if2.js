// The question visible in the YouTube video in your screenshot is about voting eligibility based on three conditions:

// Age (whether the person is 18 or older)
// Citizenship (whether the person is a citizen)
// Voter registration (whether the person is registered to vote)
// Requirements in the Question:
// If a person is 18 or older, a citizen, and registered to vote, they are eligible to vote.
// If a person is younger than 18, not a citizen, or not registered, they are not eligible.
// If a person is 18 or older but not a citizen, they are not eligible due to citizenship status.
// If a person is 18 or older, a citizen, but not registered, they are not eligible due to registration status.






let userAge = 23;
let isCitizen = true;
let isResgistred = true;

if(userAge >=18  && isCitizen && isResgistred){
    console.log("you are eligible to vate")
} else if( userAge<18 || !isCitizen || !isResgistred){
    console.log("your not ")
} else if( userAge >=18 || !isCitizen){
    console.log(" you canot ")
} else if( userAge>=18 ||!isResgistred || isCitizen ){
    console.log("u canot do this ")
}