



  //These 2 functions prevent spaces in the name box
  $("#fname").blur(function () {
    let inputVal = $(this).val();
    //initialize an string variable that represents a space
    let strSpace = " ";
    let spaceCount = inputVal.split(" ").length - 1;

    console.log(spaceCount);
    if (spaceCount === 0) {
      $(this).next().next().text("This Entry is Valid!");
    } else if (spaceCount > 0) {
      $(this).next().next().text("NO spaces are allowed in First Name!");
    }
  });

  $("#lname").blur(function () {
    let inputVal = $(this).val();
    //initialize an string variable that represents a space
    let strSpace = " ";
    let spaceCount = inputVal.split(" ").length - 1;

    console.log(spaceCount);
    if (spaceCount === 0) {
      $(this).next().next().text("This Entry is Valid!");
    } else if (spaceCount > 0) {
      $(this).next().next().text("NO spaces allowed in Last Name!");
    }
  });


  //prevents leters being typed into the credit card box
  $("#ccard").keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    $(this).next().next().text("Please do not enter letters");
  });


  //provides a response based on whether or not the person has their own car
  $("#car").on("change", function (e) {
    $("#car").prop("disabled", false);

    let inputVal = this.value;

    console.log(inputVal);

    if (inputVal=== 'yes' ) {
      $(this).next().next().text("I'm Happy for You!");
    } else {
      $(this).next().next().text("Don't Worry I'll Help You Find the Perfect Car!");
    }

  });

    
    
    
    
    
    
    
    //Creates submit button
      $( ":submit" ).css( "background", "green" );
  
  
   
  // Function to submit form. Takes first and last name and says thank you
  
      $( ":submit" ).click( function(e) {
  
        e.preventDefualt; 
      
        console.log('did we click the bbutton? yes!') ; 
  
        let greetingOutput = 'Thank you for your business ';
        greetingOutput += $("#fname").val(); 
        
       
      
        $("#formOutput").text(greetingOutput); 
      
      }); 

      console.log("user name: " + $("#noSpaces").val());

      // end of doc ready f/n
   
  
  
  
   
  
  
  
   