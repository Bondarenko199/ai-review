import { app } from "../src/app";
import request from "supertest";

describe("GET /health", () => {
  it("returns status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});
