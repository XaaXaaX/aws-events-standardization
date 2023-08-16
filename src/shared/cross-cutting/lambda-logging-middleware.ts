import { injectLambdaContext } from "@aws-lambda-powertools/logger";
import { logMetrics } from "@aws-lambda-powertools/metrics";
import middy from "@middy/core";
import { Handler } from "aws-lambda";
import { logger, metrics } from "./logger";

const  enableLambdaPowertoolsLoggingAndMetrics = (lambdaHandler: Handler) => {
    const enhancedhandler =  middy(lambdaHandler)
    .use(logMetrics(metrics, { captureColdStartMetric: true }))
    .use(injectLambdaContext(logger , { clearState: true }));

    return enhancedhandler;
}

export  {
    enableLambdaPowertoolsLoggingAndMetrics
}