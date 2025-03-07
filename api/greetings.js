export default function handler(req, res) {
  const greetings = {
    message: "献给亲爱的妈妈的妇女节祝福",
    timestamp: new Date().toISOString(),
    visitor: req.headers['x-real-ip'] || req.connection.remoteAddress,
    language: req.headers['accept-language'] || 'unknown'
  };
  
  // 设置CORS头
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // 如果是OPTIONS请求，直接返回200
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 返回问候信息
  res.status(200).json(greetings);
} 