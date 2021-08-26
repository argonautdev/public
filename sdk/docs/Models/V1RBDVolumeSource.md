# V1RBDVolumeSource
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fsType** | [**String**](string.md) | Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. Implicitly inferred to be \&quot;ext4\&quot; if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine +optional | [optional] [default to null]
**image** | [**String**](string.md) | The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it | [optional] [default to null]
**keyring** | [**String**](string.md) | Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it +optional | [optional] [default to null]
**monitors** | [**List**](string.md) | A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it | [optional] [default to null]
**pool** | [**String**](string.md) | The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it +optional | [optional] [default to null]
**readOnly** | [**Boolean**](boolean.md) | ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it +optional | [optional] [default to null]
**secretRef** | [**v1.LocalObjectReference**](v1.LocalObjectReference.md) |  | [optional] [default to null]
**user** | [**String**](string.md) | The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it +optional | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

