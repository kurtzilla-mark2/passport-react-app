
require('jest');
const request = require('supertest');

describe('The User API', () => {

  it('Returns a list of all users', async () => {
    // connect and get a response
    const res = await request('http://localhost:8080')
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /json/);

    console.log('RES', Object.values(res.body.users));

    expect(res.body.users).toEqual(expect.anything());

    // These expects are Jest (not supertest)
    expect(Object.keys(res.body.users)).toEqual(expect.anything());
    expect(Object.values(res.body.users)).toEqual(expect.anything());
    expect(Array.isArray(Object.keys(res.body.users))).toBe(true);
    expect(Array.isArray(Object.values(res.body.users))).toBe(true);
    expect(Object.keys(res.body.users).length).toBeGreaterThan(0);
    expect(Object.values(res.body.users).length).toBeGreaterThan(0);
    // expect(res.body[0].username).toBe('administrator');
  });
});
