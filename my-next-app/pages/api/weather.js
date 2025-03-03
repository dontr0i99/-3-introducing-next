export default async function handler(req, res) {
    const latitude = req.query.lat || '-7.983908';
    const longitude = req.query.lon || '112.621391';
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherRes.json();
  
    res.status(200).json(weatherData);
  }