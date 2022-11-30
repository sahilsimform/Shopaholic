import nc from "next-connect";
import db from "../../../src/utils/db";
import Product from "../../../src/models/Product";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const categories = await Product.find().distinct("category");
  await db.disconnect();
  res.send(categories);
});

export default handler;
