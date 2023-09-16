module.exports = {
    mongo: {
        uri: process.env.MONGO_URL
    },
    jwt: {
        secret: process.env.JWT_SECRET
    }
}