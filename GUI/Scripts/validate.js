function myFunction() {
            //username
            
            if (document.getElementById('Username').value == "") {
                window.alert('Enter UserName');
                return false;
            }
                //lastname
            else if (document.getElementById('pwd').value == "") {
                window.alert('Enter Password');
                return false;
            }
                //email
            else  {
                window.alert('Welcome ' + document.getElementById('Username').value );
                return false;
            }
             
        }