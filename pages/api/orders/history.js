import nc from "next-connect";
import Order from "../../../src/models/Order";
import { isAuth } from "../../../src/utils/auth";
import db from "../../../src/utils/db";
import { onError } from "../../../src/utils/error";

const handler = nc({
  onError,
});

handler.use(isAuth);

handler.get(async (req, res) => {
  await db.connect();
  const orders = await Order.find({ user: req.user._id });

  res.send(orders);
});

export default handler;
  