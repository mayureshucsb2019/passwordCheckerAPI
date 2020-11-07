'use strict'
const bcrypt = require("bcrypt");

// Below function is used to check validity of the password

exports.checkPassword = (line) => {
    const flags = [0,0,0] //caps, small, number
    if(line.length >= 6){
        for(let i=0;i<line.length;i++){
            //condition for caps
            if( 65<=line.charCodeAt(i) && line.charCodeAt(i)<=90 ){
                flags[0] = 1;
            }
            else if( 97<=line.charCodeAt(i) && line.charCodeAt(i)<=122 ){
                flags[1] = 1;
            }
            else if( 48<=line.charCodeAt(i) && line.charCodeAt(i)<=57 ){
                flags[2] = 1;
            }
            else{
                //nothing, maybe some special character. check not asked
            }
        }
    }
    if(flags[0]&&flags[1]&&flags[2]){
        //console.log("Valid Password!");
        const rounds = Math.trunc(Math.random())*100;
        const hashedPassword = bcrypt.hashSync(line,rounds);
        //console.log(hashedPassword)
        return {status: 0,hash: hashedPassword};
    }
    else{
        //console.log("Invalid password of valid length!");
        return {status: 1,hash: "Invalid"};
    }
}


    