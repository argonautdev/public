# ChartMetadata
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | [**Map**](string.md) | Annotations are additional mappings uninterpreted by Helm, made available for inspection by other applications. | [optional] [default to null]
**apiVersion** | [**String**](string.md) | The API Version of this chart. Required. | [optional] [default to null]
**appVersion** | [**String**](string.md) | The version of the application enclosed inside of this chart. | [optional] [default to null]
**condition** | [**String**](string.md) | The condition to check to enable chart | [optional] [default to null]
**dependencies** | [**List**](chart.Dependency.md) | Dependencies are a list of dependencies for a chart. | [optional] [default to null]
**deprecated** | [**Boolean**](boolean.md) | Whether or not this chart is deprecated | [optional] [default to null]
**description** | [**String**](string.md) | A one-sentence description of the chart | [optional] [default to null]
**home** | [**String**](string.md) | The URL to a relevant project page, git repo, or contact person | [optional] [default to null]
**icon** | [**String**](string.md) | The URL to an icon file. | [optional] [default to null]
**keywords** | [**List**](string.md) | A list of string keywords | [optional] [default to null]
**kubeVersion** | [**String**](string.md) | KubeVersion is a SemVer constraint specifying the version of Kubernetes required. | [optional] [default to null]
**maintainers** | [**List**](chart.Maintainer.md) | A list of name and URL/email address combinations for the maintainer(s) | [optional] [default to null]
**name** | [**String**](string.md) | The name of the chart. Required. | [optional] [default to null]
**sources** | [**List**](string.md) | Source is the URL to the source code of this chart | [optional] [default to null]
**tags** | [**String**](string.md) | The tags to check to enable chart | [optional] [default to null]
**type** | [**String**](string.md) | Specifies the chart type: application or library | [optional] [default to null]
**version** | [**String**](string.md) | A SemVer 2 conformant version string of the chart. Required. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

