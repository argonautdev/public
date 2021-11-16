# V1alpha1Prometheus
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counter** | [**v1alpha1.Counter**](v1alpha1.Counter.md) |  | [optional] [default to null]
**gauge** | [**v1alpha1.Gauge**](v1alpha1.Gauge.md) |  | [optional] [default to null]
**help** | [**String**](string.md) | Help is a string that describes the metric | [optional] [default to null]
**histogram** | [**v1alpha1.Histogram**](v1alpha1.Histogram.md) |  | [optional] [default to null]
**labels** | [**List**](v1alpha1.MetricLabel.md) | Labels is a list of metric labels | [optional] [default to null]
**name** | [**String**](string.md) | Name is the name of the metric | [optional] [default to null]
**when** | [**String**](string.md) | When is a conditional statement that decides when to emit the metric | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

