import {Router, Request, Response} from "express";
const GENERATION_RANGE =  process.env.GENERATION_RANGE || 1240;

import * as nftController from "./controller";
import {Nefturian, WarRecapData} from "./model";
import {nefturianSchema} from "./joi";

const ETH_WALLET_REGEX = /^0x[a-fA-F0-9]{40}$/;

const nftRoutes = Router();

export const getNefturianForWallet = async (req: Request, res: Response<Nefturian | string>) => {
  try {
    const {wallet} = req.params;
    if (!ETH_WALLET_REGEX.test(wallet)) {
      return res.status(400).send(`The wallet: ${wallet} is invalid`);
      return;
    }
    const result = await nftController.getNefturianForWallet(wallet);
    res.send(result);
  } catch (e) {
    console.error("Error while get Nefturian for wallet", e);
    return res.status(500).send(`Error while get Nefturian for wallet: ${e}`);
  }
};

export const mintNefturian = async (req: Request, res: Response<Nefturian | string>) => {
  try {
    const nefturian = req.body;
    await nefturianSchema.validateAsync(nefturian);
    const createdNefturian = await nftController.mintNefturian(nefturian);
    return res.send(createdNefturian);
  } catch (e) {
    console.error("Error while minting Nefturian", e);
    return res.status(500).send(`Error while minting Nefturian: ${e}`);
  }
};

export const getNefturiansWarRecap = async (req: Request, res: Response<WarRecapData | string>) => {
  try {
    const warRecap = await nftController.getWarRecap();
    return res.send(warRecap);
  } catch (e) {
    console.error("Error while getting war recap", e);
    return res.status(500).send(`Error while getting war recap: ${e}`);
  }
};
nftRoutes.get("/:wallet/", getNefturianForWallet);
nftRoutes.get("", getNefturiansWarRecap);
nftRoutes.post("/", mintNefturian);

export default nftRoutes;