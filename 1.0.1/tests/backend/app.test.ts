import request from 'supertest';
import app from '../../src/app';

describe('App', () => {
  it('should respond with a 200 status code on the root route', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  // Add more tests as needed
});