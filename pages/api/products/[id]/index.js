import nc from "next-connect";
import db from "../../../../src/utils/db";
import Product from "../../../../src/models/Product";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  await db.disconnect();
  res.send(product);
});

export default handler;
