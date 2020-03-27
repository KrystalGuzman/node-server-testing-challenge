const request = require("supertest");
const server = require("../api/server.js")

describe("Helpers router", () => {
    it("tests run", function() {
        expect(true).toBe(true);
    });
})

// testing GET /api/helpers
describe("GET /api/helpers", function() {
    it("should return a 200 status code", function () {
        return request(server)
            .get("/api/helpers")
            .then(response => {
                expect(response.status).toBe(200);
            })
    })

    it("should return a JSON-formatted body", function () {
        return request(server)
            .get("/api/helpers")
            .then(response => {
                expect(response.type).toMatch(/json/i);
            })
    })

    it("should return an array of helpers", function () {
        return request(server)
            .get("/api/helpers")
            .then(response => {
                expect(Array.isArray(response.body)).toBe(true);
            })
    })   
});

// testing GET /api/helpers/:name
describe("GET /api/helpers/policeman", function () {
    it("should return a 200 status code", function () {
        return request(server)
            .get("/api/helpers/policeman")
            .then(response => {
                expect(response.status).toBe(200);
            })
    })
});

describe("GET /api/helpers/1", function () {
    it("should return a 500 status code", function () {
        return request(server)
            .get("/api/helpers/1")
            .then(response => {
                expect(response.status).toBe(500);
            })
    })
});

// testing POST /api/helpers
describe("POST /api/helpers", function () {
    it("should return a 201 status code", function () {
        return request(server)
            .post("/api/helpers")
            .send({ name: "paramedic", job: "responds to medical emergencies"})
            .then(response => {
                expect(response.status).toBe(201);
            })
    })
});

describe("POST /api/helpers", function () {
    it("should return a 400 status code", function () {
        return request(server)
            .post("/api/helpers")
            .send({ name: "principal"})
            .then(response => {
                expect(response.status).toBe(400);
            })
    })
});

