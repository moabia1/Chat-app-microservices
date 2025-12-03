import { publishToQueue } from "../config/rabbitmq.js";
import tryCatch from "../config/try-catch.js";
import { redisClient } from "../index.js";

export const loginUser = tryCatch(async (req, res) => {
  const { email } = req.body;
  
  const rateLimitKey = `otp:ratelimit:${email}`
  const ratelimit = await redisClient.get(rateLimitKey)
  if (ratelimit) {
    res.status(429).json({
      message:"Too many request. please wait before requesting new otp"
    })
    return
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpKey = `otp:${email}`
  await redisClient.set(otpKey, otp, {
    EX:300,
  })
  await redisClient.set(rateLimitKey, "true", {
    EX:60
  })

  const message = {
    to: email,
    subject: "your otp code",
    body: `your otp code is ${otp} it is valid for 5 minuites`
  }

  await publishToQueue("send-otp", message);
  
  res.status(200).json({message:"otp send to your Email"})
})