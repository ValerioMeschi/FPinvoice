import puppeteer from "puppeteer";
async function POST({ request }) {
  const data = await request.json();
  const browser = await puppeteer.launch({ headless: true, executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  await page.setContent(
    data.mkp
  );
  await page.addStyleTag({
    content: data.style
  });
  const buffer = await page.pdf({
    format: "A4",
    printBackground: true
  });
  console.log(data);
  return new Response(buffer);
}
export {
  POST
};
