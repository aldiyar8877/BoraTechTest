it("should demonstrate the click command", () => {
  const myButton = $("//*[@class='fas fa-sign-out-alt']");
  myButton.click();
  assert(text === "I was clicked"); // true
});
