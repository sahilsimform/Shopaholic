import nc from "next-connect";
import { isAuth } from "../../../../src/utils/auth";
import Order from "../../../../src/models/Order";
import db from "../../../../src/utils/db";

const handler = nc();
handler.use(isAuth);

handler.get(async (req, res) => {
  await db.connect();
  const order = await Order.findById(req.query.id);
  await db.disconnect();
  res.send(order);
});

export default handler;
