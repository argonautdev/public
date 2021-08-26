#!/bin/bash

if [[ -z $1 ]]; then
	echo "Please provide the npm version number as an argument. Something like this: ./script 0.2.4"
	exit 1
fi

echo "Generating sdk"

echo "Generating sdk using typescript-axios"
openapi-generator generate -i ~/argonaut/midgard/docs/swagger.json \
	-g typescript-axios \
	-o sdk/typescript-axios/ \
	--additional-properties=supportsES6=true \
	--additional-properties=typescriptThreePlus=true \
	--additional-properties=useSingleRequestParameter=true \
	--additional-properties=withSeparateModelsAndApi=true,modelPackage=models,apiPackage=api,npmName=@argonautdev/midgard-js-sdk,npmVersion=$1,legacyDiscriminatorBehavior=false,disallowAdditionalPropertiesIfNotPresent=false \
	--enable-post-process-file

echo "Generating docs"

echo "Generating docs using markdown"
openapi-generator generate -i ~/argonaut/midgard/docs/swagger.json \
	-g markdown \
	-o sdk/docs/