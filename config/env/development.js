module.exports = {
    datastores: {
        default: {
        }
    },
    models: {
        migrate: "safe"
    },
    blueprints: {
        shortcuts: false
    },
    security: {
        cors: {
            allRoutes: true,
            allowOrigins: "http://localhost:20251",
            allowCredentials: false
        }
    },
    session: {
        cookie: {
            maxAge: 30 * 24 * 60 * 60 * 1000
        }
    },
    sockets: {
        onlyAllowOrigins: [
            "http://localhost:20251"
        ]
    },
    log: {
        level: "debug"
    },
    http: {
        cache: 365.25 * 24 * 60 * 60 * 1000
    },
    port: 8088
};