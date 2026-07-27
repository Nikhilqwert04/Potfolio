import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import waitOn from 'wait-on';

(async () => {
  const server = spawn('npm', ['run', 'dev'], { stdio: 'ignore' });
  
  try {
    await waitOn({ resources: ['http://localhost:5173'], timeout: 10000 });
    
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('LOG:', msg.text()));
    page.on('pageerror', err => console.log('ERROR:', err.toString()));
    
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
    
    await browser.close();
  } catch (e) {
    console.error("Test failed", e);
  } finally {
    server.kill();
  }
})();
