import request from "supertest";
import app from "../../app";
import { userRegisterDb } from "./user_register.model";
beforeAll(async () => {
   userRegisterDb.drop();
}); 

describe("api/v1/register", () =>{
    it("Create new account", async ()=>{
        const res = await request(app)
            .post("/api/v1/register")
            .send({
                email: "minh1603942@gmail.com",
                password: "minh123456",
                firstname: "Minh",
                lastname: "Huynh",
                phone: 6476249349
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            expect(res.statusCode).toEqual(201)
            expect(res.body).toHaveProperty("_id")
            expect(res.body).toHaveProperty("email")
            expect(res.body).toHaveProperty("password")
            expect(res.body).toHaveProperty("lastname")
            expect(res.body).toHaveProperty("firstname")
            expect(res.body).toHaveProperty("phone")
        
    });
})

describe("api/v1/register", () =>{
    it("Create new account", async ()=>{
        const res = await request(app)
            .post("/api/v1/register")
            .send({
                email: "minh1603942@gmail.com",
                password: "minh123456",
                firstname: "Minh",
                lastname: "Huynh",
                phone: 6476249349
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            expect(res.statusCode).toEqual(404)
    });
})