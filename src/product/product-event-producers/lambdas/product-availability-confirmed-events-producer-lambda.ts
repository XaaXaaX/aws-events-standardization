import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda";
import { PublishEvent } from "@shared/repository/sns-repository";
import { enableLambdaPowertoolsLoggingAndMetrics } from "@shared/cross-cutting/lambda-logging-middleware";
import { BaseHandler } from "@shared/handlers/base-handler";
import { generateSucessResponse } from "@shared/cross-cutting/http-respose-helper";
import { EventType as ProductEventType,  } from "@shared/specs/product/product-v1-models";
import { ProductSource } from "@shared/models/constants/event-sources";

export class ProductAvailabilityConfirmedEventHandler extends BaseHandler {
	Handler: Handler = async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> => {
		const orderCreatedEvent = super.GenerateIntegrationEvent(ProductSource, "product.availability-confirmed.v1" satisfies ProductEventType, { producId: JSON.parse(event.body).productId });
		await PublishEvent(orderCreatedEvent);
		return generateSucessResponse({message: "Product Availability Confirmation published"});
	};
}

export const handler = enableLambdaPowertoolsLoggingAndMetrics(new ProductAvailabilityConfirmedEventHandler().Handler);
