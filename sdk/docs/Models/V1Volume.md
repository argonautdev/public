# V1Volume
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**awsElasticBlockStore** | [**v1.AWSElasticBlockStoreVolumeSource**](v1.AWSElasticBlockStoreVolumeSource.md) |  | [optional] [default to null]
**azureDisk** | [**v1.AzureDiskVolumeSource**](v1.AzureDiskVolumeSource.md) |  | [optional] [default to null]
**azureFile** | [**v1.AzureFileVolumeSource**](v1.AzureFileVolumeSource.md) |  | [optional] [default to null]
**cephfs** | [**v1.CephFSVolumeSource**](v1.CephFSVolumeSource.md) |  | [optional] [default to null]
**cinder** | [**v1.CinderVolumeSource**](v1.CinderVolumeSource.md) |  | [optional] [default to null]
**configMap** | [**v1.ConfigMapVolumeSource**](v1.ConfigMapVolumeSource.md) |  | [optional] [default to null]
**csi** | [**v1.CSIVolumeSource**](v1.CSIVolumeSource.md) |  | [optional] [default to null]
**downwardAPI** | [**v1.DownwardAPIVolumeSource**](v1.DownwardAPIVolumeSource.md) |  | [optional] [default to null]
**emptyDir** | [**v1.EmptyDirVolumeSource**](v1.EmptyDirVolumeSource.md) |  | [optional] [default to null]
**ephemeral** | [**v1.EphemeralVolumeSource**](v1.EphemeralVolumeSource.md) |  | [optional] [default to null]
**fc** | [**v1.FCVolumeSource**](v1.FCVolumeSource.md) |  | [optional] [default to null]
**flexVolume** | [**v1.FlexVolumeSource**](v1.FlexVolumeSource.md) |  | [optional] [default to null]
**flocker** | [**v1.FlockerVolumeSource**](v1.FlockerVolumeSource.md) |  | [optional] [default to null]
**gcePersistentDisk** | [**v1.GCEPersistentDiskVolumeSource**](v1.GCEPersistentDiskVolumeSource.md) |  | [optional] [default to null]
**gitRepo** | [**v1.GitRepoVolumeSource**](v1.GitRepoVolumeSource.md) |  | [optional] [default to null]
**glusterfs** | [**v1.GlusterfsVolumeSource**](v1.GlusterfsVolumeSource.md) |  | [optional] [default to null]
**hostPath** | [**v1.HostPathVolumeSource**](v1.HostPathVolumeSource.md) |  | [optional] [default to null]
**iscsi** | [**v1.ISCSIVolumeSource**](v1.ISCSIVolumeSource.md) |  | [optional] [default to null]
**name** | [**String**](string.md) | Volume&#39;s name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names | [optional] [default to null]
**nfs** | [**v1.NFSVolumeSource**](v1.NFSVolumeSource.md) |  | [optional] [default to null]
**persistentVolumeClaim** | [**v1.PersistentVolumeClaimVolumeSource**](v1.PersistentVolumeClaimVolumeSource.md) |  | [optional] [default to null]
**photonPersistentDisk** | [**v1.PhotonPersistentDiskVolumeSource**](v1.PhotonPersistentDiskVolumeSource.md) |  | [optional] [default to null]
**portworxVolume** | [**v1.PortworxVolumeSource**](v1.PortworxVolumeSource.md) |  | [optional] [default to null]
**projected** | [**v1.ProjectedVolumeSource**](v1.ProjectedVolumeSource.md) |  | [optional] [default to null]
**quobyte** | [**v1.QuobyteVolumeSource**](v1.QuobyteVolumeSource.md) |  | [optional] [default to null]
**rbd** | [**v1.RBDVolumeSource**](v1.RBDVolumeSource.md) |  | [optional] [default to null]
**scaleIO** | [**v1.ScaleIOVolumeSource**](v1.ScaleIOVolumeSource.md) |  | [optional] [default to null]
**secret** | [**v1.SecretVolumeSource**](v1.SecretVolumeSource.md) |  | [optional] [default to null]
**storageos** | [**v1.StorageOSVolumeSource**](v1.StorageOSVolumeSource.md) |  | [optional] [default to null]
**vsphereVolume** | [**v1.VsphereVirtualDiskVolumeSource**](v1.VsphereVirtualDiskVolumeSource.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

