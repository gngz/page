import express from 'express';
import payload from 'payload';

const PORT = process.env.PORT ?? 3000;

require('dotenv').config();
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(
        `Payload Admin URL: http://localhost:${PORT}${payload.getAdminURL()}`,
      );
    },
  });

  // Add your own express routes here

  app.listen(PORT);
};

start();
