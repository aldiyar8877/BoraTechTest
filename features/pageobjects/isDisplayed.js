it("should detect if an element is displayed", () => {
  let elem = $("//*[@class='alert alert-danger']");
  let isDisplayed = elem.isDisplayed();
  console.log(isDisplayed); // outputs: false
});
