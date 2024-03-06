import fs from 'fs';
import puppeteer from 'puppeteer';

async function pizzamenu() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://levantespizza.com/menu/');

  // await page.screenshot({path: 'pizzamenu.png', fullPage: true});
  //   let priceNameArrays;
  //   async function getPricenames() {
  //     const priceElements = await page.evaluate(() => {
  //       return Array.from(
  //         document.querySelectorAll(
  //           '#panel-17 .column .menu-item .menu-item__price',
  //         ),
  //         (e) => {
  //           return {
  //             priceName: e.querySelector(' .menu-item__price-name').innerText,
  //             // You may also want to extract priceValue here if needed
  //             priceValue: e.querySelector(' .menu-item__price-value').innerText,
  //           };
  //         },
  //       );
  //     });
  //     return priceElements;
  //   }
  //   priceNameArrays = await getPricenames();
  //   console.log(priceNameArrays);

  const pizzas = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll('#panel-17 .column .menu-item'),
      (e) => ({
        //   image: e.querySelector('.box-media img[src]'),
        image: e.querySelector('.box-media img').getAttribute('src'),
        title: e.querySelector('.box-body h3').innerText,
        description: e.querySelector('.box-body p').innerText,
        // priceName: e.querySelector(
        //   '.menu-item__cta .menu-item__price .menu-item__price-name',
        // ).innerText,

        priceName: e.querySelector(
          '#panel-17 .box-footer .menu-item__cta .menu-item__price .menu-item__price-name',
        ).innerText,

        priceValue: e.querySelector(
          '.menu-item__cta .menu-item__price .menu-item__price-value',
        ).innerText,
      }),
    );
  });
  //   const imageLinks = await page.$$eval('img', (images) => {
  //     return images.map((img) => img.src);
  //   });

  console.log(pizzas);
  //   console.log(imageLinks);

  //Save data to file
  fs.writeFile('pizzas.json', JSON.stringify(pizzas), (err) => {
    if (err) throw err;
    console.log('Saved!');
  });
  await browser.close();
}

pizzamenu();
