const fundList = document.getElementById("funds-list");
const hiddenFundInput = document.getElementById("hidden-fund-input");

const givingFundInput = document.getElementById("fund-amount");

fundList.onchange = function (e) {
  let selectedOption = fundList.options[fundList.selectedIndex];

  hiddenFundInput.name = selectedOption.getAttribute("data-FUND");
  hiddenFundInput.value = selectedOption.value;
  givingFundInput.name = selectedOption.getAttribute("data-GIFT");
  givingFundInput.id = selectedOption.getAttribute("data-GIFT");
};
