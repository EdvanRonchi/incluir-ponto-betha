const readlineSync = require('readline-sync');
const puppeteer    = require('puppeteer');
const delay        = require('delay');

require('dotenv').config();

let url = 'https://docs.google.com/forms/d/e/1FAIpQLSehVgNNj4R6O9-2_PZMmyRK9XqxzsXPdPijq5cvhXpJKhf4wg/viewform';

let matricula = process.env.MATRICULA;

(async () => {
    const browser = await puppeteer.launch( { headless: false });
    const page = await browser.newPage();

    await page.goto(url);

    console.log('🔥🔥🔥🔥🔥🔥🔥');
    console.log('🔥 Welcome  🔥');
    console.log('🔥🔥🔥🔥🔥🔥🔥');

    console.log('\n\n');

    console.log('Selecione o tipo de login:');
    console.log('1 - Login manual');
    console.log('2 - Login automatico');   

    let metodoEntrada = readlineSync.question('>>: ');

    console.log('\n\n');

    if (metodoEntrada == 2) {

        await page.type('.zHQkBf', process.env.USER, { delay: 50 })

        page.click('.VfPpkd-LgbsSe-OWXEXe-dgl2Hf')

        await delay('2000')

        await page.type('.zHQkBf', process.env.PASSWORD, { delay: 50 })

        page.click('.VfPpkd-LgbsSe-OWXEXe-dgl2Hf')

        await delay('2000')

    }   

    readlineSync.question('Aperte Enter caso voce esta na tela de inclusao de ponto!');

    console.log('\n\n');

    if (matricula == 0) {
        matricula = readlineSync.question('Digite sua matricula: ')
        console.log('\n\n');
    }

    //data = readlineSync.question('Digite os dias separados por virgula: ')

    let data = '11,12,13'

    for (let i = 0; i < 1; i++) {

        //Local
        for (let i = 0; i < 2; i++) {
            await page.keyboard.press('Tab', { delay: 500 });
        }

        await page.keyboard.press('Enter', { delay: 500 });

        for (let i = 0; i < 4; i++) {
            await page.keyboard.press('ArrowDown', { delay: 500 });
        }

        await page.keyboard.press('Enter', { delay: 500 });

        //Código matricula
        await page.keyboard.press('Tab', { delay: 500 });       

        await page.keyboard.type(matricula);

        //Função
        await page.keyboard.press('Tab', { delay: 500 });

        await page.keyboard.press('Enter', { delay: 500 });

        await page.keyboard.press('ArrowDown', { delay: 500 });

        await page.keyboard.press('Enter', { delay: 500 });

        //Data
        await page.keyboard.press('Tab', { delay: 500 });

    } 
})(); 