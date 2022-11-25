import nc from "next-connect";
import Product from "../../src/models/Product";
import db from "../../src/utils/db";
import data from "../../src/utils/data";
import User from "../../src/models/User";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: "Seeded Successfully" });
});

export default handler;
