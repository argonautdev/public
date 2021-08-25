# V1CephFSVolumeSource
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monitors** | [**List**](string.md) | Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it | [optional] [default to null]
**path** | [**String**](string.md) | Optional: Used as the mounted root, rather than the full Ceph tree, default is / +optional | [optional] [default to null]
**readOnly** | [**Boolean**](boolean.md) | Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it +optional | [optional] [default to null]
**secretFile** | [**String**](string.md) | Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it +optional | [optional] [default to null]
**secretRef** | [**v1.LocalObjectReference**](v1.LocalObjectReference.md) |  | [optional] [default to null]
**user** | [**String**](string.md) | Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it +optional | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

