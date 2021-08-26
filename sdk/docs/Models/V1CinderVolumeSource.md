# V1CinderVolumeSource
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fsType** | [**String**](string.md) | Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. Implicitly inferred to be \&quot;ext4\&quot; if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md +optional | [optional] [default to null]
**readOnly** | [**Boolean**](boolean.md) | Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md +optional | [optional] [default to null]
**secretRef** | [**v1.LocalObjectReference**](v1.LocalObjectReference.md) |  | [optional] [default to null]
**volumeID** | [**String**](string.md) | volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

