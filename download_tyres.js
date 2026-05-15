const https = require('https');
const fs = require('fs');

async function fetchImage(query, filename) {
  const url = `https://images.search.yahoo.com/search/images?p=${encodeURIComponent(query)}`;
  return new Promise((resolve, reject) => {
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<img[^>]+src='(https:\/\/tse\d\.mm\.bing\.net\/th\?id=[^']+)'/);
        if (match && match[1]) {
          console.log(`Found image for ${query}: ${match[1]}`);
          const file = fs.createWriteStream(filename);
          https.get(match[1], (response) => {
            response.pipe(file);
            file.on('finish', () => { file.close(); resolve(); });
          });
        } else {
          console.log(`No image found for ${query}`);
          resolve();
        }
      });
    }).on('error', reject);
  });
}

(async () => {
  try {
    await fetchImage('ceat securadrive car tyre isolated white background', 'public/ceat_securadrive.jpg');
    await fetchImage('apollo amazer 4g life car tyre isolated white background', 'public/apollo_amazer.jpg');
    await fetchImage('bridgestone ecopia ep150 car tyre isolated white background', 'public/bridgestone_ecopia.jpg');
    await fetchImage('bridgestone dueler at tyre isolated white background', 'public/bridgestone_dueler.jpg');
    await fetchImage('ceat czar at suv tyre isolated white background', 'public/ceat_czar.jpg');
    await fetchImage('apollo apterra at2 suv tyre isolated white background', 'public/apollo_apterra.jpg');
    await fetchImage('michelin energy xm2 car tyre isolated white background', 'public/michelin_energy.jpg');
    await fetchImage('michelin primacy 4 car tyre isolated white background', 'public/michelin_primacy.jpg');
    console.log("Done");
  } catch(e) {
    console.error(e);
  }
})();
