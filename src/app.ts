import express from 'express';
import dotenv from 'dotenv';
import nftRoutes from "./nft/route";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use("/nft", nftRoutes);

app.use(router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});