import * as Sentry from "@sentry/react";

function InitSentry(){
    Sentry.init({
        dsn: "https://60772ca0bb2ad7c4f10d7c53be0a6b47@o4506103432544256.ingest.sentry.io/4506103435558912",
        integrations: [
            new Sentry.BrowserTracing({
            // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
            tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
            }),
            new Sentry.Replay(),
        ],
        // Performance Monitoring
        tracesSampleRate: 1.0, // Capture 100% of the transactions
        // Session Replay
        replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    });
}

export default InitSentry;