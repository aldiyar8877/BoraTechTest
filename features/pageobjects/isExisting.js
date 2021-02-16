it('should detect if elements are existing', () => {
    let elem = $("//*[@class='dash-buttons']")
    let isExisting = elem.isExisting()
    console.log(isExisting); // outputs: false
   
});