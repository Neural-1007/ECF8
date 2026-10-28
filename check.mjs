const res = await fetch("https://en.akinator.com/");
const html = await res.text();
console.log("Status:", res.status);
console.log("Looks like Cloudflare challenge:", /just a moment|cf-chl|challenge/i.test(html));
console.log(html.slice(0, 300));