



function validateForm (){

    let valid=true;

    // clear error messages

    document.getElementById('nameError').innerHTML=''
     document.getElementById('emailError').innerHTML=''
      document.getElementById('passwordError').innerHTML=''
       document.getElementById('ageError').innerHTML=''
       document.getElementById('genderError').innerHTML = '';

       // validate name
       let name= document.getElementById('name').value;
       if (name ===""){

        document.getElementById('nameError').innerHTML= 'Error! Name is Required.'
        
        valid=false;
       }

       // validate email

       let email= document.getElementById('email').value;
       if (email ===""){

        document.getElementById('emailError').innerHTML= 'Error! Email is Required.'
        
        valid=false;
       }

         // validate password

         let password= document.getElementById('password').value;
         if (password ===""){
  
          document.getElementById('passwordError').innerHTML= 'Error! Password is Required.'
          
          valid=false;
         }

         else if(password.length < 6){

            document.getElementById('passwordError').innerHTML='Error! Password must be atleast 6 characters long.'
            valid=false;



         }

         //validate confirm password

         let confirmpassword= document.getElementById('confirmpassword').value;
         if (confirmpassword ===""){
  
          document.getElementById('confirmpasswordError').innerHTML= 'Error! Confirm Password is Required.'
          
          valid=false;
         }

         else if (confirmpassword !== password){
  
            document.getElementById('confirmpasswordError').innerHTML= 'Error! Password does not Match.'
            
            valid=false;
           }
 
            // validate Terms and Condtions 
           
           //  let toc= (!document.getElementById('toc').checked);
            //if (toc ===""){
     
            // document.getElementById('Error').innerHTML= 'Error! You must agree to the Terms and Conditions.'
             
            // valid=false;
           // }

              // validate Terms and Conditions
           if (!document.getElementById('toc').checked){
     
              document.getElementById('Error').innerHTML= 'Error! You must agree to the Terms and Conditions.'
             
              valid =false;
            }
   

            // validate gender
            let genderSelected = document.querySelector('input[name="gender"]:checked');
           
            // if (!document.getElementById('gender').checked){
     
            //    document.getElementById('genderError').innerHTML= 'Error! You must chose a gender.'
              
            //    valid =false;
            //  }

             if (!genderSelected) {
               document.getElementById('genderError').innerHTML = 'Error! You must choose a gender.';
               valid = false;
           }

 
         // validate age

         let age= document.getElementById('age').value;
         if (age ===""){
  
          document.getElementById('ageError').innerHTML= 'Error! Age is Required.'
          
          valid=false;
         }

         else if(isNaN(age)|| age < 18){

          document.getElementById('ageError').innerHTML='Error! Age must not be a number less than 18.'
          valid=false;
         }

         return valid


  }





