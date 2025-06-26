const request = require("supertest");
const app = require("../app");
const { User, Proposal, PromptProposal, LimitPackage } = require("../models");
const { signJwtToken } = require("../helpers/helper");
const users = require("../data/users.json");
let access_token;

jest.setTimeout(60000);

beforeAll(async () => {
  // Find or create user from users.json and generate token
  let user = await User.findOne({ where: { email: users[0].email } });
  if (!user) {
    user = await User.create(users[0]);
  }
  access_token = signJwtToken({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  });
});

describe("ProposalController", () => {
  let proposalId;
  let promptProposalId;
  it("should create a proposal and prompt proposal", async () => {
    const body = {
      businessInterestField: "Culinary",
      capital: 10000000,
      location: "Jakarta",
      preference: "Snacks",
      businessGoal: "Increase sales",
      longTermVision: "Become a national brand",
      targetMarket: "Young people",
      productUniqueness: "Secret recipe",
      mainCompetitors: "Brand X",
      marketingPlan: "Social media",
    };
    const res = await request(app)
      .post("/proposals")
      .set("Authorization", `Bearer ${access_token}`)
      .send(body);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    proposalId = res.body.id;
    promptProposalId = res.body.PromptProposalId;
  });

  it("should get all proposals for the user", async () => {
    const res = await request(app)
      .get("/proposals")
      .set("Authorization", `Bearer ${access_token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should get a proposal by id", async () => {
    const res = await request(app)
      .get(`/proposals/${proposalId}`)
      .set("Authorization", `Bearer ${access_token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", proposalId);
  });

  it("should update a proposal", async () => {
    const res = await request(app)
      .put(`/proposals/${proposalId}`)
      .set("Authorization", `Bearer ${access_token}`)
      .send({
        businessInterestField: "Household Products",
        capital: 15000000,
        location: "Bandung",
        preference: "Eco-friendly detergent",
        businessGoal: "Reduce plastic use",
        longTermVision: "Be a leader in sustainable living",
        targetMarket: "Environmentally conscious families",
        productUniqueness: "Biodegradable formula",
        mainCompetitors: "EcoClean",
        marketingPlan: "Influencer collaboration and eco-events",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("title");
    expect(res.body).toHaveProperty("aiOutput");
    expect(res.body).toHaveProperty("PromptProposal");
  });

  it("should delete a proposal", async () => {
    const res = await request(app)
      .delete(`/proposals/${proposalId}`)
      .set("Authorization", `Bearer ${access_token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Proposal deleted successfully");
  });
});

describe("TransactionController", () => {
  let limitPackageId;
  beforeAll(async () => {
    // Create a LimitPackage for testing
    const pkg = await LimitPackage.create({
      name: "Test Package",
      description: "For testing",
      limit: 5,
      price: 10000,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    limitPackageId = pkg.id;
  });

  it("should generate a midtrans token", async () => {
    const res = await request(app)
      .post(`/generate-midtrans-token/${limitPackageId}`)
      .set("Authorization", `Bearer ${access_token}`);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("token");
  });

  it("should update user limit package", async () => {
    const res = await request(app)
      .patch("/users")
      .set("Authorization", `Bearer ${access_token}`)
      .send({ LimitPackageId: limitPackageId });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Limit updated successfully");
  });
});

describe("LoginController (error cases)", () => {
  it("should return 400 if token is missing", async () => {
    const res = await request(app).post("/login/google").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
  });

  it("should return 401 if token is invalid", async () => {
    const res = await request(app)
      .post("/login/google")
      .send({ token: "invalid_token" });
    expect([400, 401]).toContain(res.statusCode); // Google error can be 400 or 401
    expect(res.body).toHaveProperty("message");
  });
});

describe("Authorization (401 error cases)", () => {
  it("should return 401 if no token is provided for POST /proposals", async () => {
    const res = await request(app).post("/proposals").send({});
    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("message");
  });

  it("should return 401 if no token is provided for GET /proposals", async () => {
    const res = await request(app).get("/proposals");
    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("message");
  });

  it("should return 401 if no token is provided for GET /proposals/:id", async () => {
    const res = await request(app).get("/proposals/1");
    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("message");
  });

  it("should return 401 if no token is provided for PUT /proposals/:id", async () => {
    const res = await request(app).put("/proposals/1").send({});
    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("message");
  });

  it("should return 401 if no token is provided for DELETE /proposals/:id", async () => {
    const res = await request(app).delete("/proposals/1");
    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("message");
  });

  it("should return 401 if no token is provided for POST /generate-midtrans-token/:LimitPackageId", async () => {
    const res = await request(app).post("/generate-midtrans-token/1");
    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("message");
  });

  it("should return 401 if no token is provided for PATCH /users", async () => {
    const res = await request(app).patch("/users").send({ LimitPackageId: 1 });
    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("message");
  });

  it("should return 401 if user in token payload does not exist in database", async () => {
    // Generate token with non-existent user id
    const fakeToken = signJwtToken({
      id: 9999999,
      email: "notfound@mail.com",
      name: "Not Found",
    });
    const res = await request(app)
      .get("/proposals")
      .set("Authorization", `Bearer ${fakeToken}`);
    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("message");
  });
});

describe("404 Not Found error cases", () => {
  it("should return 404 if proposal is not found for GET /proposals/:id", async () => {
    const res = await request(app)
      .get("/proposals/9999999")
      .set("Authorization", `Bearer ${access_token}`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("message", "Proposal not found");
  });

  it("should return 404 if proposal is not found for PUT /proposals/:id", async () => {
    const res = await request(app)
      .put("/proposals/9999999")
      .set("Authorization", `Bearer ${access_token}`)
      .send({
        businessInterestField: "Test",
        capital: 1,
        location: "Test",
        preference: "Test",
        businessGoal: "Test",
      });
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("message", "Proposal not found");
  });

  it("should return 404 if proposal is not found for DELETE /proposals/:id", async () => {
    const res = await request(app)
      .delete("/proposals/9999999")
      .set("Authorization", `Bearer ${access_token}`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("message", "Proposal not found");
  });

  it("should return 404 if user is not found for GET /users/:id", async () => {
    const res = await request(app)
      .get("/users/9999999")
      .set("Authorization", `Bearer ${access_token}`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("message", "User not found");
  });
});

describe("400 Bad Request error cases", () => {
  it("should return 400 if required field is missing in POST /proposals", async () => {
    // Remove businessInterestField (required)
    const body = {
      capital: 10000000,
      location: "Jakarta",
      preference: "Snacks",
      businessGoal: "Increase sales",
    };
    const res = await request(app)
      .post("/proposals")
      .set("Authorization", `Bearer ${access_token}`)
      .send(body);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
  });

  it("should return 400 if required field is missing in PUT /proposals/:id", async () => {
    // Create a proposal first
    const createRes = await request(app)
      .post("/proposals")
      .set("Authorization", `Bearer ${access_token}`)
      .send({
        businessInterestField: "Culinary",
        capital: 10000000,
        location: "Jakarta",
        preference: "Snacks",
        businessGoal: "Increase sales",
      });
    const proposalId = createRes.body.id;
    // Update without businessInterestField
    const res = await request(app)
      .put(`/proposals/${proposalId}`)
      .set("Authorization", `Bearer ${access_token}`)
      .send({
        location: "Bandung",
        preference: "Drinks",
        businessGoal: "Expand market",
      });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
  });
});

describe("TransactionController (400/404 error cases)", () => {
  it("should return 400 if LimitPackageId is missing in POST /generate-midtrans-token/:LimitPackageId", async () => {
    const res = await request(app)
      .post("/generate-midtrans-token")
      .set("Authorization", `Bearer ${access_token}`);
    expect([400, 404]).toContain(res.statusCode);
  });

  it("should return 404 if LimitPackageId does not exist in POST /generate-midtrans-token/:LimitPackageId", async () => {
    const res = await request(app)
      .post("/generate-midtrans-token/9999999")
      .set("Authorization", `Bearer ${access_token}`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("message", "Limit Package not found");
  });

  it("should return 400 if LimitPackageId is missing in PATCH /users", async () => {
    const res = await request(app)
      .patch("/users")
      .set("Authorization", `Bearer ${access_token}`);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
  });

  it("should return 404 if LimitPackageId does not exist in PATCH /users", async () => {
    const res = await request(app)
      .patch("/users")
      .set("Authorization", `Bearer ${access_token}`)
      .send({ LimitPackageId: 9999999 });
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("message", "Limit Package not found");
  });
});

describe("GET /users/:id", () => {
  let userId;
  beforeAll(async () => {
    // Ambil user id dari users.json
    const user = await User.findOne({ where: { email: users[0].email } });
    userId = user.id;
  });
  it("should return user data (200)", async () => {
    const res = await request(app)
      .get(`/users/${userId}`)
      .set("Authorization", `Bearer ${access_token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", userId);
    expect(res.body).not.toHaveProperty("password");
  });
  it("should return 404 if user not found", async () => {
    const res = await request(app)
      .get("/users/9999999")
      .set("Authorization", `Bearer ${access_token}`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("message", "User not found");
  });
});

describe("GET /packages", () => {
  it("should return all limit packages (200)", async () => {
    const res = await request(app)
      .get("/packages")
      .set("Authorization", `Bearer ${access_token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty("name");
      expect(res.body[0]).toHaveProperty("price");
    }
  });
});
