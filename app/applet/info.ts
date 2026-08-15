import https from 'https';

https.get('https://pin.it/6FGoEdi7A', (res) => {
  console.log('Location:', res.headers.location);
}).on('error', (e) => {
  console.error(e);
});
