const {By} = require('selenium-webdriver');

const crossOffMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Avengers');

    await driver.findElement(By.xpath('//button[1]')).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//ul/li/span')).click();
    await driver.sleep(2000)
    //cross off movie in index js adds a class called checked
    const movie = await driver.findElement(By.xpath('//ul/li/span'))
    const selected = movie.isSelected();
    expect(selected).toBeTruthy();
}

const movieMessage = async (driver) => {
    const message = await driver.findElement(By.xpath('//aside'))
    const displayed = message.isDisplayed;
    expect(displayed).toBeTruthy();
}

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//button[@id="Avengers"]')).click();
    const movieExists = await driver.findElement(By.xpath('//button[@id="Avengers"]')).then( () => true, ()=>false)
    expect(!movieExists).toBeTruthy();
}

module.exports = {
crossOffMovie,
movieMessage,
deleteMovie
}