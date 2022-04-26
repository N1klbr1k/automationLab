const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const {crossOffMovie, movieMessage, deleteMovie } = require('../functions/functions')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit();
}) 

describe('movie tests', ()=> {
    test('movie is crossed off', async () => {
        await crossOffMovie(driver)
        await driver.sleep(2000)
    })
    test('message is displayed', async () => {
        await movieMessage(driver)
    })
    test('movie is deleted',async () => {
        await deleteMovie(driver)
    })
})