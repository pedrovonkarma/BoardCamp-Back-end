import joi from 'joi'

const rentSchema = joi.object({
    id: joi.number().required(),
    customerId: joi.number().required(),
    gameId: joi.number().required(),
    rentDate: joi.string().required(),
    daysRented: joi.number().required(),
    returnDate: joi.string().allow(null).required(),
    originalPrice: joi.number().required(),
    delayFee: joi.number().allow(null).required()
})

export default rentSchema
