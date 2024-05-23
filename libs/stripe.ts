import Stripe from "stripe";

export const stripe = new Stripe(process.env.SRIPE_SECRET_KEY ?? "", {
  apiVersion: "2024-04-10",
  appInfo: {
    name: "Fred-Spotify-Clone",
    version: "0.1.0",
  },
});
