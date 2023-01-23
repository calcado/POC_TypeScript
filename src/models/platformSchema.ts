import joi from "joi";

export const platformSchema = joi.object({
platform: joi.string().required()    
})
