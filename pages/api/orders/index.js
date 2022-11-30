import nc from "next-connect";
import Order from "../../../src/models/Order";
import { isAuth } from "../../../src/utils/auth";
import { onError } from "../../../src/utils/error";
import db from "../../../src/utils/db";

const handler = nc({
  onError,
});
handler.use(isAuth);

handler.post(async (req, res) => {
  await db.connect();
  const newOrder = new Order({
    ...req.body,
    user: req.user._id,
  });
  const order = await newOrder.save();
  res.status(201).send(order);
});

export default handler;
