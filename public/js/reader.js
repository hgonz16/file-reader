// function to add a file to read
const showFile = function showFile(input) {
  const file = input.files[0]; // array of how many files to choose
  const reader = new FileReader(); // new object to read our file

  // reading the file as a string
  reader.readAsText(file);

  // shows the text to the paragraph tag in the HTML
  reader.onload = function returnText() {
    document.getElementById('text').innerHTML = reader.result;
    console.log(reader.result);
  };

  // if anything fails this will output an error in the console
  reader.error = function returnError() {
    console.error(reader);
  };
};
