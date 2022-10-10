const fundList = document.getElementById("funds-list");
const hiddenFundInput = document.getElementById("hidden-fund-input");
// const givingFundInput = document.getElementById("fund-1140742");
const givingFundInput = document.getElementById("fund-amount");

// when a new option is selected
fundList.onchange = function (e) {
  // get the option that is currently selected
  let selectedOption = fundList.options[fundList.selectedIndex];

  // get the data- attributes that was set in the HTML and
  // assign to the inputs
  hiddenFundInput.name = selectedOption.getAttribute("data-FUND");
  hiddenFundInput.value = selectedOption.value;
  givingFundInput.name = selectedOption.getAttribute("data-GIFT");
};
