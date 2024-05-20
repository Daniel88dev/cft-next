import crypto from "node:crypto";

const keylen = 64;

export function hashUserPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hashedPassword = crypto
    .scryptSync(password, salt, keylen, { N: 1024 })
    .toString("hex");
  return hashedPassword + ":" + salt;
}

export function verifyPassword(
  storedPassword: string,
  suppliedPassword: string
) {
  const [hashedPassword, salt] = storedPassword.split(":");
  const hashedPasswordBuf = Buffer.from(hashedPassword, "hex");
  const suppliedPasswordBuf = crypto.scryptSync(
    suppliedPassword,
    salt,
    keylen,
    { N: 1024 }
  );
  return crypto.timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf);
}
