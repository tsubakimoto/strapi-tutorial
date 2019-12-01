module.exports = strapi => {
    return {
        initialize() {
            strapi.app.use(async (ctx, next) => {
                const appInsights = require("applicationinsights");
                appInsights.setup(process.env.INSTRUMENTATION_KEY);
                appInsights.start();
                strapi.log.debug('app insights started');

                let client = appInsights.defaultClient;
                client.trackTrace({message: "trace message from strapi"});

                await next();
            });
        },
    };
};