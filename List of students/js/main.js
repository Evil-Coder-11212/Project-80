const submitBtn = document.querySelector("#submit-btn");
const sortButton = document.querySelector("#sort-btn");
inputsEl_array = [];

function submit() {
  var array = [];

  for (var j = 1; j <= 4; j++) {
    var inputsEl = document.getElementById("input-" + j).value;
    inputsEl_array.push(inputsEl);
  }

  console.log(inputsEl_array);

  var length_of_name_of_students_array = inputsEl_array.length;
  console.log(length_of_name_of_students_array);

  for (var k = 0; k < length_of_name_of_students_array; k++) {
    array.push("<h4>NAME - " + inputsEl_array[k] + "</h4>");
    console.log(array);
  }

  console.log(array);
  document.getElementById("result").innerHTML = array;

  var remove_commas = array.join(" ");
  console.log(remove_commas);
  document.getElementById("display_name_without_commas").innerHTML =
    remove_commas;

  document.getElementById("submit_button").style.display = "none";
  document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
  inputsEl_array.sort();
  console.log(inputsEl_array);

  var array_sorting = [];

  var lenght_of_name_of_students_array = inputsEl_array.length;
  console.log(lenght_of_name_of_students_array);

  for (var k = 0; k < lenght_of_name_of_students_array; k++) {
    array_sorting.push("<h4>NAME - " + inputsEl_array[k] + "</h4>");
    console.log(array_sorting);
  }

  var remove_commas = array_sorting.join(" ");
  console.log(remove_commas);

  document.getElementById("display_name_without_commas").innerHTML =
    remove_commas;
}

submitBtn.addEventListener("click", () => {
  submit();
});

sortButton.addEventListener("click", () => {
  sorting();
});
