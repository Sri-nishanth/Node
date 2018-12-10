var Chai = require('chai');
var request = require('supertest');
var testApi = require('../Models/armstrong.js');
var multiples = require('../Models/multiply.js');
var toObject = require('../Models/toObject.js');
var app = require('../app.js');
var assert = Chai.assert;
var expect = Chai.expect;

//===============================UNIT TESTING=============================================

describe('Testing Armstrong number function', function () {
    it('Should return if the num is armstrong', function (done) {
        assert.equal(testApi(371), true);
        done();
    });
    it('Should return if the num is not_armstrong', function (done) {
        assert.equal(testApi(3711), false);
        done();
    });
});

describe('Testing multiply number function', function () {
    it('Should return if multiples are printed', function (done) {
        assert.deepEqual(multiples(10), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
        done();
    });
});

describe('Testing toObject function', function () {
    it('Should return if Object is printed', function (done) {
        var Obj = { 'l': 2, 'e': 1, 't': 1, 's': 1, 'p': 1, 'a': 1, 'y': 1, '!': 1 };
        assert.deepEqual(toObject("LetsPLay!"), Obj);
        done();
    });
});

//===============================INTEGRATION TESTING====================================
describe('Integration Testing', function () {
    describe('Open home page', function () {
        it('Prints the welcome message', function (done) {
            request(app).get('/home')
                .expect(/Welcome to my assignment/)
                .end(function (err, res) {
                    expect(res.statusCode).to.equal(200);
                    //  expect(res.body).to.be.an("string");
                    done();
                });
        });
    });
    describe('Open APIs', function () {
        it('Opens the multiply api', function (done) {
            request(app).get('/api/multiply/10')
                .end(function (err, res) {
                    expect(res.statusCode).to.equal(200);
                    done();
                })
        });
        it('Opens the armstrong api', function (done) {
            request(app).get('/api/armstrong/?id=37')
                .end(function (err, res) {
                    expect(res.statusCode).to.equal(200);
                    done();
                });
        });
        it('Opens the jwt api', function (done) {
            request(app).get('/api/jwt/jbk')
                .end(function (err, res) {
                    expect(res.statusCode).to.equal(200);
                    done();
                });
        });
        it('Opens the jwt validate api', function (done) {
            request(app).get('/api/jwt/ValidatE')
                .end(function (err, res) {
                    expect(res.statusCode).to.equal(200);
                    done();
                });
        });
        it('Opens the toObject api', function (done) {
            request(app).get('/api/object/letsplay!')
                .end(function (err, res) {
                    expect(res.statusCode).to.equal(200);
                    done();
                });
        });
    });
});
