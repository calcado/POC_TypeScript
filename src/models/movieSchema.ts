import joi from "joi";

export const movieSchema = joi.object({
name: joi.string().required(),
platform: joi.string().required(),
genre:joi.string().required(),
status:joi.string(),
notes:joi.string()
    
})

