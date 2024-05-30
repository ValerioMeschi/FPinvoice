import puppeteer from 'puppeteer';
import { json } from '@sveltejs/kit';


export async function POST({ request }) {
    const data = await request.json();
    //const browser = await puppeteer.launch({headless:true,executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const browser = await puppeteer.launch({headless:true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
		const page = await browser.newPage();
        await page.setContent(
				data.mkp
			);
        await page.addStyleTag({
            content: data.style
        })
        const buffer = await page.pdf({
				format: 'A4',
				printBackground: true
			});

    console.log(data)
    return new Response(buffer, {
        status: 200,
        headers: {
            'Content-Type': 'application/pdf',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
    });
}
