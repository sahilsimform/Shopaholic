import nc from "next-connect";
import { isAuth } from "../../../../src/utils/auth";
import db from "../../../../src/utils/db";
import Order from "../../../../src/models/Order";
import { onError } from "../../../../src/utils/error";

const handler = nc({
  onError,
});
handler.use(isAuth);
handler.put(async (req, res) => {
  await db.connect();
  const order = await Order.findById(req.query.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    const deliveredOrder = await order.save();
    await db.disconnect();
    res.send({ message: "order delivered", order: deliveredOrder });
  } else {
    await db.disconnect();
    res.status(404).send({ message: "order not found" });
  }
});

export default handler;
