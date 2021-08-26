# V1FCVolumeSource
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fsType** | [**String**](string.md) | Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. Implicitly inferred to be \&quot;ext4\&quot; if unspecified. TODO: how do we prevent errors in the filesystem from compromising the machine +optional | [optional] [default to null]
**lun** | [**Integer**](integer.md) | Optional: FC target lun number +optional | [optional] [default to null]
**readOnly** | [**Boolean**](boolean.md) | Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. +optional | [optional] [default to null]
**targetWWNs** | [**List**](string.md) | Optional: FC target worldwide names (WWNs) +optional | [optional] [default to null]
**wwids** | [**List**](string.md) | Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously. +optional | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

