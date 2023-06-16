export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Wrestle Clash',
      version: '1.0.0',
      description: 'A simple Express Wrestle Clash API',
    },
    servers: [
      {
        url: 'http://localhost:3300/',
      },
      {
        url: 'https://api.wrestleclash.app/',
      }
    ],
    components: {
      securitySchemes: {
        Authorization: {
          type: 'http',
          scheme: 'bearer',
          in: 'header',
        },
      },
    },
    security: [
      {
        Authorization: [],
      },
    ],
  },
  apis: ['./routes/*.ts', './routes/*/*.ts'],
};

export const corsOptions = {
  origin: '*',
};
