const http = require("http");

const HTML_RESPONSE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevOps Infrastructure Sandbox</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body {
            background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
            color: #f8fafc;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
        }
        .container {
            text-align: center;
            background: rgba(30, 41, 59, 0.7);
            padding: 3rem;
            border-radius: 16px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(99, 102, 241, 0.2);
            backdrop-filter: blur(12px);
            max-width: 90%;
            width: 500px;
        }
        .badge {
            background: linear-gradient(90deg, #6366f1 0%, #a855f7 100%);
            color: white;
            padding: 0.4rem 1rem;
            border-radius: 9999px;
            font-size: 0.85rem;
            font-weight: 600;
            letter-spacing: 0.05em;
            display: inline-block;
            margin-bottom: 1.5rem;
            text-transform: uppercase;
        }
        h1 {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(to right, #38bdf8, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1rem;
        }
        p {
            color: #94a3b8;
            font-size: 1.1rem;
            margin-bottom: 2rem;
        }
        .footer-tag {
            color: #38bdf8;
            font-weight: 600;
            background: rgba(56, 189, 248, 0.1);
            padding: 0.2rem 0.6rem;
            border-radius: 6px;
        }
        .system-status {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-size: 0.85rem;
            color: #4ade80;
            border-top: 1px solid rgba(148, 163, 184, 0.1);
            padding-top: 1.5rem;
        }
        .pulse-dot {
            width: 8px;
            height: 8px;
            background-color: #4ade80;
            border-radius: 50%;
            box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
            animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(74, 222, 128, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="badge">Production Environment</div>
        <h1>Hello DevOps World</h1>
        <p>Engineered & Deployed by <span class="footer-tag">@Faqii</span></p>
        
        <div class="system-status">
            <div class="pulse-dot"></div>
            <span>Containerized Service Online</span>
        </div>
    </div>

</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(HTML_RESPONSE);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`[SUCCESS] Microservice runtime listening on port ${PORT}`);
});
