/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function validateForm()
                {
                    //declare variable nama and
                    //assign value input type text form
                        let nama = document.forms["exampleForm"]["nama"].value;
                        if (nama === "") { //== tu dia tak compare value === dia compare data type dan value dan mesti dua ii sama data type
                            alert("Your name must be filled out");
                            document.forms["exampleForm"]["nama"].select();
                            document.forms["exampleForm"]["nama"].focus();
                        return false;
                        }
                        
                        let emel = document.forms["exampleForm"]["emel"].value;
                        if (emel === "") { //== tu dia tak compare value === dia compare data type dan value dan mesti dua ii sama data type
                            alert("Your emel must be filled out");
                            document.forms["exampleForm"]["emel"].select();
                            document.forms["exampleForm"]["emel"].focus();
                        return false;
                        }
                        
                        let subjek = document.forms["exampleForm"]["subjek"].value;
                        if (subjek === "") { //== tu dia tak compare value === dia compare data type dan value dan mesti dua ii sama data type
                            alert("Subject must be filled out");
                            document.forms["exampleForm"]["subjek"].select();
                            document.forms["exampleForm"]["subjek"].focus();
                        return false;
                        }
                        
                        let mesej = document.forms["exampleForm"]["mesej"].value;
                        if (mesej === "") { //== tu dia tak compare value === dia compare data type dan value dan mesti dua ii sama data type
                            alert("Message must be filled out");
                            document.forms["exampleForm"]["mesej"].select();
                            document.forms["exampleForm"]["mesej"].focus();
                        return false;
                        }
                }
