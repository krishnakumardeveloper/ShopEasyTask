const request = require("supertest")

const {app, server} = require('../app')

describe('GET /', () => {
    it("Should return 200 status and correct messege", async()=>{
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.status).toBe("welcome to ShopEasy From Kriz Code !");

    } )
})
afterAll(()=>{
    server.close()
})