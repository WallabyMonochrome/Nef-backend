import Joi from "joi";
import {NefturianAlignment} from "./model";

const nefturianSchema = Joi.object({
  id: Joi.number().required().min(1).max(1240),
  name: Joi.string().required(),
  imageUrl: Joi.string().required(),
  alignment: Joi.string().valid(NefturianAlignment.Cyberians, NefturianAlignment.Samurians).required(),
  attributes: Joi.object({
    str: Joi.number().min(1).max(10).required(),
    char: Joi.number().min(1).max(10).required(),
    mag: Joi.number().min(1).max(10).required(),
    def: Joi.number().min(1).max(10).required()
  }),
});


export {nefturianSchema};

