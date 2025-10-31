// middleware.js
import { NextResponse } from 'next/server';

// This middleware checks if the app is in maintenance mode
export function middleware(request) {
  const isMaintenance =
    process.env.NEXT_PUBLIC_MAINTENANCE_MODE?.toLowerCase() === 'true';
  const maintenanceMessage =
    process.env.NEXT_PUBLIC_MAINTENANCE_MESSAGE || 'We’ll be back shortly.';

  if (isMaintenance) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Maintenance</title>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Inter:wght@400&display=swap" rel="stylesheet">
          <style>
            html, body {
              height: 100%;
              margin: 0;
              padding: 0;
            }
            body {
              min-height: 100vh;
              min-width: 100vw;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #f8f9fa;
              color: #333;
              font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
            }
            .maintenance-container {
              background: #fff;
              border-radius: 1.5rem;
              box-shadow: 0 4px 32px rgba(69, 78, 159, 0.10);
              padding: 3rem 2.5rem;
              max-width: 420px;
              width: 100%;
              text-align: center;
              border: 2px solid #454E9F;
            }
            .maintenance-title {
              font-family: 'Montserrat', Arial, sans-serif;
              color: #454E9F;
              font-size: 2.2rem;
              font-weight: 700;
              margin-bottom: 1.2rem;
              letter-spacing: 1px;
            }
            .maintenance-message {
              font-family: 'Inter', Arial, sans-serif;
              color: #D43647;
              font-size: 1.15rem;
              margin-bottom: 0.5rem;
              line-height: 1.6;
            }
            @media (max-width: 600px) {
              .maintenance-container {
                padding: 2rem 1rem;
              }
              .maintenance-title {
                font-size: 1.5rem;
              }
              .maintenance-message {
                font-size: 1rem;
              }
            }
          </style>
        </head>
        <body>
          <div class="maintenance-container">
            <div class="maintenance-title">Maintenance Mode</div>
            <div class="maintenance-message">${maintenanceMessage}</div>
          </div>
        </body>
      </html>
    `;

    return new NextResponse(html, {
      status: 503,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  }

  return NextResponse.next();
}
