// my fav data
  let userJSON = {
    fname: "Kevin",
    lname: "Salgado",
    email: "ksalgado@una.edu",
    car:   "$15,000,000",
    phone: "256-332-5190"
  };
// load my fav data
  $("#loadData").click(() => {

    $("#fname").val(userJSON.fname);

    $("#lname").val(userJSON.lname);

    $("#email").val(userJSON.email);

    $("#car").val(userJSON.car);

    $("#phone").val(userJSON.phone);
  });


  // getting submit button after verification
function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("submitButton");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  // radio button for dependant input
  $("input[type=radio]").on("change", function () {

    let radioChoice = $("input[type=radio]:checked").val(); // Yes or No
    let newList = getAge(radioChoice);

    let optionList = "";

    for (i = 0; i < newList.length; i++) {
      optionList += `<option value=" ${newList[i]} ">${newList[i]} </option>`;
    }
    $("#carSelect").empty().append(optionList);
  });

  $("#submitForm").on("click", (e) => {
    e.preventDefault();

    // get data from an input

    let dataStuff = `{ "letterSelected:" " ${$(
      "input[type=radio]:checked"
    ).val()} " }`;

    console.log(dataStuff);
  });

// gets your answer from radio button and then displays correct options for dropdown
function getAge(choice) {

  let yesArray = ["Choose the car you would like to own!", "Toyota Corolla", "Nissan Altima", "Ford Fusion", "Honda Accord"];
  let noArray= ["Thanks for coming to visit us!"]

  if (choice === "yes") {
    return yesArray; }
  else if (choice === "no") {
    return noArray; } 
  else {
    return ["Thank you"];
  }
}

// submit event
$(document).ready(function () {
  $("#greetingOutput").text("");

  $("#submitButton").click(function () {
    $("#greetingOutput").text("Hello, " + $("#fname").val() + "! Congratulations on your new" + $("#carSelect").val() + "!" + " We hope to see you back!");
  });
});

