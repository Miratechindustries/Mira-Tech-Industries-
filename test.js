const { chromium } = require('playwright');
const path = require('path');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    const errors = [];
    page.on('console', msg => {
        if (msg.type() === 'error') {
            errors.push(msg.text());
        }
    });
    
    page.on('pageerror', err => {
        errors.push(err.message);
    });
    
    const filePath = 'file://' + path.resolve(__dirname, 'index.html');
    console.log('Loading:', filePath);
    
    await page.goto(filePath, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Check page title
    const title = await page.title();
    console.log('Page title:', title);
    
    // Check key elements exist
    const heroTitle = await page.$('.hero-title');
    console.log('Hero title exists:', !!heroTitle);
    
    const nav = await page.$('.nav');
    console.log('Navigation exists:', !!nav);
    
    const sections = await page.$$('section');
    console.log('Number of sections:', sections.length);
    
    const serviceCards = await page.$$('.service-card');
    console.log('Number of service cards:', serviceCards.length);
    
    const chatWidget = await page.$('.chat-widget');
    console.log('Chat widget exists:', !!chatWidget);
    
    // Check for console errors
    if (errors.length > 0) {
        console.log('\nConsole errors found:');
        errors.forEach(err => console.log('  -', err));
    } else {
        console.log('\nNo console errors found!');
    }
    
    await browser.close();
    
    if (errors.length > 0) {
        process.exit(1);
    }
    console.log('\nTest completed successfully!');
})();