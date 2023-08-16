import { Logger } from '@aws-lambda-powertools/logger';
import { Metrics } from '@aws-lambda-powertools/metrics';

const logger = new Logger({});
const metrics = new Metrics({});


export {
    logger,
    metrics
}
