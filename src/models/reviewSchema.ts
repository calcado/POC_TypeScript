import joi from "joi";

export const reviewSchema = joi.object({
status: joi.string().required(),
notes:joi.string()   
})