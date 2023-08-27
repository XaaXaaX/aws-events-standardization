import { Logger } from "@aws-lambda-powertools/logger";
import { CloudEvent } from "cloudevents";

declare module "@aws-lambda-powertools/logger" {
    interface Logger {
      logEventMetaData<TData>(event: CloudEvent<TData>): void;
    }
  }
  
  Logger.prototype.logEventMetaData = function<TData>(event:  CloudEvent<TData>): void {
    this.appendKeys({
        id: event.id,
        type: event.type,
        source: event.source,
        specversion: event.specversion
    });
  }
  
  export {};