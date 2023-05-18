import {Config, JsonDB} from "node-json-db";
import {Nefturian, NefturianAlignment, WarRecapData} from "../../model";

const nefturianDB = new JsonDB(new Config("src/nft/clients/nodeDB/nefturianStock", true, false, "/"));

export async function getWarRecap(): Promise<WarRecapData> {
  const recap: WarRecapData = {FFA: {quantity: 0}, Samurians: {quantity: 0}, Cyberians: {quantity: 0}};
  for (let i = 1; i <= 1240; i++) {
    const nefturian = await getNefturianFromId(i);
    if (!nefturian) recap.FFA.quantity++; else {
      nefturian?.alignment === NefturianAlignment.Samurians ? recap.Samurians.quantity++ : recap.Cyberians.quantity++;
    }
  }
  return recap;
}

async function getNefturianFromId(id: number): Promise<Nefturian | undefined> {
  let result;
  try {
    result = await nefturianDB.getData(`/${id}`);
  } catch (e) {
    // Too much spam for War Recap
    // console.log(`Nefturian ${id} doesn't exist`);
  }
  return result;
}

async function mintNefturian(nefturian: Nefturian): Promise<Nefturian> {
  let result;
  result = await getNefturianFromId(nefturian.id);
  if (result) throw new Error(`Nefturian ${nefturian.id} already exist !`);
  await nefturianDB.push(`/${nefturian.id}`, nefturian);
  return nefturian;
}

export {
  getNefturianFromId, mintNefturian
}