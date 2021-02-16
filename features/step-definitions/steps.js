const { Given, When, Then } = require("@cucumber/cucumber");

Given(/^I am on Boratech login page$/, function () {
  browser.url("http://boratech.herokuapp.com/login#!");
});

When(/^I login as default user$/, function () {
  browser.$("//input[@name='email']").setValue("aldiyar8877@gmail.com");
  browser.$("//input[@name='password']").setValue("Aldiyar707!");
  browser.$("//input[@class='btn btn-primary']").click();
});

Then(/^login must be successful$/, function () {
  $("//*[@class='dash-buttons']").isExisting()
});

Then(/^close browser$/, function () {
  $("//*[@class='fas fa-sign-out-alt']").click()
});

When(/^I login with random password$/, function () {
  browser.$("//input[@name='email']").setValue("aldiyar8877@gmail.com");
  browser.$("//input[@name='password']").setValue("123456");
  browser.$("//input[@class='btn btn-primary']").click();
});

Then(/^error message will be display$/, function () {
  $("//*[@class='alert alert-danger']").isDisplayed()
});//input[@class='alert alert-danger']
