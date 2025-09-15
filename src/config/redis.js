const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-16312.crce206.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 16312
    }
});

module.exports = redisClient;