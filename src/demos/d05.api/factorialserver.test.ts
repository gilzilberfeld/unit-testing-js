import request from "supertest";
const hostUrl = "http://localhost:3000";

describe.skip("Factorial APIs", () => {
  it("calculates correctly", async () => {
    const body = { theNumber: 5 };
    const response = await request(hostUrl)
      .post("/api/factorial")
      .send(body)
      .expect(200);

    const result = JSON.parse(response.text).result;
    expect(result).toBe(120);
  });
});
