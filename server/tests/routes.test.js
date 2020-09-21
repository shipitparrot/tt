const request = require('supertest')
const app = require('../app')

describe('Test the root path', () => {
  test('It should get response for the GET method on /', done => {
    request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
})

describe('Test the getByZip path', () => {

  test('The response for the GET method on /getByZip should return an object', done => {
    request(app)
      .get('/getByZip')
      .then(response => {
        expect(typeof response.body).toBe('object');
        done()
      })
  })
})


describe('All other routes should return 404', () => {
  test('It should get response 404', done => {
    request(app)
      .get('/random/route')
      .then(response => {
        expect(response.statusCode).toBe(404)
        done()
      })
  })
})
