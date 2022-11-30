import nc from "next-connect";
import { isAdmin, isAuth } from "../../../src/utils/auth";
import db from "../../../src/utils/db";
import { onError } from "../../../src/utils/error";
import Order from "../../../src/models/Order";

const handler = nc({
  onError,
});
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const orders = await Order.find({}).populate("user", "name");
  await db.disconnect();
  res.send(orders);
});

export default handler;
