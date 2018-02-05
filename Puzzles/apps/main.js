            function GetElements(form){
                
                var inputs = document.getElementsByTagName("input");
                for (var i = 0; i<inputs.length; i++) {
                    if (inputs[i].value === "") {
                    
                        alert("Please fill out all of the boxes.");
                        return false;
                    }
                    else{
                        var userInput = document.getElementsByName[i].value;
                        return true;
                    }
                }
 
            }
            function resetForm(form) {
            // clearing inputs
            var inputs = document.getElementsByTagName("input");
            for (var j = 0; j<inputs.length; j++) {
                if (inputs[j].type === "text") {
                    
                        inputs[j].value = "";
                                         
                }
            }


            return false;
        }


