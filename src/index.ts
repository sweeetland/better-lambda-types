import { APIGatewayProxyEvent as AWSEvent, APIGatewayProxyResult, Handler } from 'aws-lambda'

export { Context } from 'aws-lambda'

type Obj = { [k: string]: any }

type ObjWithStringValues = { [k: string]: string | undefined }

type ObjWithStringArrayValues = { [k: string]: string[] | undefined }

export interface APIGatewayProxyEvent<
    Body extends Obj = {},
    PathParameters extends ObjWithStringValues = {},
    QueryStringParameters extends ObjWithStringValues = {},
    MultiValueQueryStringParameters extends ObjWithStringArrayValues = {}
>
    extends Omit<
        AWSEvent,
        'body' | 'pathParameters' | 'queryStringParameters' | 'multiValueQueryStringParameters'
    > {
    body: Body
    pathParameters: PathParameters
    queryStringParameters: QueryStringParameters
    multiValueQueryStringParameters: MultiValueQueryStringParameters
}

export type APIGatewayProxyHandler<
    Body extends Obj = {},
    PathParameters extends ObjWithStringValues = {},
    QueryStringParameters extends ObjWithStringValues = {},
    MultiValueQueryStringParameters extends ObjWithStringArrayValues = {}
> = Handler<
    APIGatewayProxyEvent<
        Body,
        PathParameters,
        QueryStringParameters,
        MultiValueQueryStringParameters
    >,
    APIGatewayProxyResult
>
