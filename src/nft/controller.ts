import {createHash} from 'crypto';
import * as nodeDbClient from "./clients/nodeDB/nodeDb";
import {Nefturian, WarRecapData} from "./model";

const GENERATION_RANGE =  +(process.env.GENERATION_RANGE || 1240);
const SECRET_SALT = process.env.SECRET_SALT || 1337;

function _computeNefturianId(wallet: string) {
  const hashWallet = createHash('sha256')
  hashWallet.update(wallet);
  const result = hashWallet.digest('hex');
  const intValue = parseInt(result.substring(0, 4) + SECRET_SALT, 16);
  const nefturianId = intValue % GENERATION_RANGE;
  return nefturianId + 1; // Range 1 - 1240
}

async function getNefturianForWallet(wallet: string): Promise<string | Nefturian> {
  const nefturianId = _computeNefturianId(wallet);
  const nefturian = await nodeDbClient.getNefturianFromId(nefturianId);
  if (!nefturian) return `No Nefturian for ID ${nefturianId} yet`;
  return nefturian as Nefturian;
}

async function mintNefturian(nefturian: Nefturian): Promise<Nefturian> {
  return await nodeDbClient.mintNefturian(nefturian);
}

export async function getWarRecap(): Promise<WarRecapData> {
  return await nodeDbClient.getWarRecap();
}


export {
  getNefturianForWallet,
  mintNefturian,
  _computeNefturianId
}