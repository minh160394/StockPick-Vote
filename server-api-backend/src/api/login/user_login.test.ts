import request from "supertest";
import app from "../../app";
import { userRegisterDb } from "../../db";

beforeAll(async () => {
 
}); 
let jwtCookie ='';
describe("api/v1/login", () =>{
    it("Login Account", async ()=>{
        const res = await request(app)
            .post("/api/v1/login")
            .send({
                email: "minh1603942@gmail.com",
                password: "minh123456",
            })
            .set("Accept", "application/json")
            expect(res.statusCode).toEqual(200)
            jwtCookie = res.body.token;
    });
})
describe("api/v1/login/profile", () =>{
    it("Get User Profile based on the provided token ", async ()=>{
        const res = await request(app)
            .get("/api/v1/login/profile")
            .set('Cookie', [`stockpicker=${jwtCookie}`]);
            expect(res.status).toEqual(200);
    });
})
