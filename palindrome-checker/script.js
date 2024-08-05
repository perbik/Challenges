const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  const originalText = textInput.value;
  const replaced = originalText.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  if (originalText === "") {
    alert("Please input a value");
  } else if (originalText.length === 1) {
    result.innerText = `${originalText} is a palindrome`;
  } else if (replaced === [...replaced].reverse().join("")) {
    result.innerText = `${originalText} is a palindrome`;
  } else {
    result.innerText = `${originalText} is not a palindrome`;
  }
});
