const app = require("../app");
const {
  hashPassword,
  compareHashPassword,
  signJwtToken,
  verifyJwtToken,
  formatRupiah,
} = require("../helpers/helper");

describe("Helper Functions", () => {
  describe("hashPassword & compareHashPassword", () => {
    it("should hash a password and compare correctly", () => {
      const password = "testPassword123!";
      const hash = hashPassword(password);
      expect(typeof hash).toBe("string");
      expect(hash).not.toBe(password);
      expect(compareHashPassword(password, hash)).toBe(true);
      expect(compareHashPassword("wrongPassword", hash)).toBe(false);
    });
  });

  describe("signJwtToken & verifyJwtToken", () => {
    it("should sign and verify a JWT token", () => {
      const payload = { id: 1, email: "test@mail.com" };
      const token = signJwtToken(payload);
      expect(typeof token).toBe("string");
      const decoded = verifyJwtToken(token);
      expect(decoded).toMatchObject(payload);
    });
  });

  describe("formatRupiah", () => {
    it("should format number to Indonesian Rupiah currency", () => {
      expect(formatRupiah(10000).toString()).toContain("10.000,00");
      expect(formatRupiah(1500000).toString()).toContain("1.500.000,00");
    });
  });
});
