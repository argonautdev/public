#!/bin/bash

if [[ -z $1 ]]; then
	echo "Please provide the npm version number as an argument. Something like this: ./script 0.2.4."
	echo "If you want to release for go also. Run ./script 0.2.4 --release-go"
	exit 1
fi

if [[ ($# -le 1) ]]; then
	echo "put --release-js or --release-go as second parameter to release"
fi

if [[ ($# -ge 2) && ("$2" == "--release-js") ]]; then
	echo "Generating sdk"

	echo "Generating sdk using typescript-axios and schemas"
	openapi-generator-cli generate -i ~/argonaut/midgard/docs/swagger.json \
		-g typescript-axios \
		-o sdk/typescript-axios/ \
		--additional-properties=supportsES6=true \
		--additional-properties=typescriptThreePlus=true \
		--additional-properties=useSingleRequestParameter=true \
		--additional-properties=withSeparateModelsAndApi=true,modelPackage=models,apiPackage=api,npmName=@argonautdev/midgard-js-sdk,npmVersion=$1,legacyDiscriminatorBehavior=false,disallowAdditionalPropertiesIfNotPresent=false \
		--enable-post-process-file

	rm -rf sdk/typescript-axios/schemas

	openapi -i ~/argonaut/midgard/docs/swagger.json \
		-o sdk/typescript-fetch \
		--exportCore false \
		--exportServices false \
		--exportModels false \
		--exportSchemas true

	mv sdk/typescript-fetch/schemas sdk/typescript-axios/schemas
	mv sdk/typescript-fetch/index.ts sdk/typescript-axios/schema.ts
	echo 'import * as Schema from "./schema";' >> sdk/typescript-axios/index.ts
	echo -e "\nexport {Schema};" >> sdk/typescript-axios/index.ts
	rmdir sdk/typescript-fetch

	echo "Generating docs"

	echo "Generating docs using markdown"
	openapi-generator-cli generate -i ~/argonaut/midgard/docs/swagger.json \
		-g markdown \
		-o sdk/docs/

	git add .
	git commit -m "$1"
	git push
fi 

if [[ ($# -ge 2) && ("$2" == "--release-go") ]]; then
	echo "Generating go sdk"
	rm -r ../go-midgard-sdk/api*
	rm -r ../go-midgard-sdk/model*
	rm -rf ../go-midgard-sdk/docs
	openapi-generator-cli generate -i ~/argonaut/midgard/docs/swagger.json \
		-g go \
		-o ../go-midgard-sdk \
		--additional-properties=disallowAdditionalPropertiesIfNotPresent=false \
		--additional-properties=generateInterfaces=true \
		--additional-properties=packageName=go_midgard_sdk \
		--additional-properties=packageVersion=$1

	cd ../go-midgard-sdk
	git add .
	git commit -m "$1"
	git push
	gh release create "v$1" --title "v$1"
fi