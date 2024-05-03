const btn = document.getElementById("btn");
const birthday = document.getElementById("birthday");
const result = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthday.value;
  if (birthdayValue === "") {
    alert("Please enter your Birth Date");
  } else {
    const age = getAge(birthdayValue);
    if (age > 0) {
      result.innerText = `Your age is ${age} ${age < 1 ? "year" : "years"} old`;
    }
  }
}
function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  let month = currentDate.getMonth() - birthDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    alert("please enter a correct age");
  } else {
    return age;
  }
}
btn.addEventListener("click", calculateAge);
