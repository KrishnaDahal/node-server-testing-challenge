const server = require("../server");
const request = require("supertest");

describe("users routes", () => {
	it("should return 200", () => {
		request(server)
			.get("/api/users")
			.then(result => {
				expect(result.status).toBe(200);
			});
	});
	it("should return a token", () => {
		return request(server)
			.post("/api/auth/login")
			.send({
				username: "kdahal",
				password: "cryptopass"
			})
			.set("Content-Type", "application/json")
			.set("Accept", "application/json")
			.then(result => {
				expect(result.body.token.length).toBeGreaterThan(50);
				expect(result.status).toBe(200);
			});
	});
	it("should get users", async () => {
		const login = await request(server)
			.post("/api/auth/login")
			.send({
				username: "kdahal",
				password: "cryptopass"
			})
			.set("Content-Type", "application/json");

		const users = await request(server)
			.get("/api/users")
			.set("Content-Type", "application/json")
			.set("Authorization", login.body.token);

		console.log(users.body);

		expect(users.body).toMatchObject([
			{"id": 1,
            "username": "harry",
            "password": "1234567",
            "department": "Finance"
     },
			{"id": 2,
            "username": "Narry",
            "password": "123qwerty",
            "department": "Finance"
     },
			{        "id": 3,
            "username": "Carry",
            "password": "123123",
            "department": "Finance"
    
     },
			{        "id": 4,
            "username": "Barry",
            "password": "ABCasd",
            "department": "Sales"
    
     },
			{        "id": 5,
            "username": "Darry",
            "password": "123543",
            "department": "Sales"
    
     },
			{        "id": 6,
            "username": "Earry",
            "password": "123tyrt",
            "department": "Sales"
    
     },
			{        "id": 7,
            "username": "Garry",
            "password": "123ABC",
            "department": "IT & Technology"
    
     },
			{        "id": 8,
            "username": "Farry",
            "password": "123ABC33",
            "department": "IT & Technology"
    
     },
			{        "id": 9,
            "username": "kdahal",
            "password": "$2a$10$4BYWHZErjbG59SGSJtCyv.iwp5Uj43HIyHT.arir.sME0T9c.9/ra",
            "department": null
    
     },
     
		]);
	});
});