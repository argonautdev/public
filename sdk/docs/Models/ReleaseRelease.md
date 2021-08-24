# ReleaseRelease
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chart** | [**chart.Chart**](chart.Chart.md) |  | [optional] [default to null]
**config** | [**Object**](.md) | Config is the set of extra Values added to the chart. These values override the default values inside of the chart. | [optional] [default to null]
**hooks** | [**List**](release.Hook.md) | Hooks are all of the hooks declared for this release. | [optional] [default to null]
**info** | [**release.Info**](release.Info.md) |  | [optional] [default to null]
**manifest** | [**String**](string.md) | Manifest is the string representation of the rendered template. | [optional] [default to null]
**name** | [**String**](string.md) | Name is the name of the release | [optional] [default to null]
**namespace** | [**String**](string.md) | Namespace is the kubernetes namespace of the release. | [optional] [default to null]
**version** | [**Integer**](integer.md) | Version is an int which represents the revision of the release. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

