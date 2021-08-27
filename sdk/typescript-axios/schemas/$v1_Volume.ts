/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1_Volume = {
    properties: {
        awsElasticBlockStore: {
            type: 'v1_AWSElasticBlockStoreVolumeSource',
        },
        azureDisk: {
            type: 'v1_AzureDiskVolumeSource',
        },
        azureFile: {
            type: 'v1_AzureFileVolumeSource',
        },
        cephfs: {
            type: 'v1_CephFSVolumeSource',
        },
        cinder: {
            type: 'v1_CinderVolumeSource',
        },
        configMap: {
            type: 'v1_ConfigMapVolumeSource',
        },
        csi: {
            type: 'v1_CSIVolumeSource',
        },
        downwardAPI: {
            type: 'v1_DownwardAPIVolumeSource',
        },
        emptyDir: {
            type: 'v1_EmptyDirVolumeSource',
        },
        ephemeral: {
            type: 'v1_EphemeralVolumeSource',
        },
        fc: {
            type: 'v1_FCVolumeSource',
        },
        flexVolume: {
            type: 'v1_FlexVolumeSource',
        },
        flocker: {
            type: 'v1_FlockerVolumeSource',
        },
        gcePersistentDisk: {
            type: 'v1_GCEPersistentDiskVolumeSource',
        },
        gitRepo: {
            type: 'v1_GitRepoVolumeSource',
        },
        glusterfs: {
            type: 'v1_GlusterfsVolumeSource',
        },
        hostPath: {
            type: 'v1_HostPathVolumeSource',
        },
        iscsi: {
            type: 'v1_ISCSIVolumeSource',
        },
        name: {
            type: 'string',
        },
        nfs: {
            type: 'v1_NFSVolumeSource',
        },
        persistentVolumeClaim: {
            type: 'v1_PersistentVolumeClaimVolumeSource',
        },
        photonPersistentDisk: {
            type: 'v1_PhotonPersistentDiskVolumeSource',
        },
        portworxVolume: {
            type: 'v1_PortworxVolumeSource',
        },
        projected: {
            type: 'v1_ProjectedVolumeSource',
        },
        quobyte: {
            type: 'v1_QuobyteVolumeSource',
        },
        rbd: {
            type: 'v1_RBDVolumeSource',
        },
        scaleIO: {
            type: 'v1_ScaleIOVolumeSource',
        },
        secret: {
            type: 'v1_SecretVolumeSource',
        },
        storageos: {
            type: 'v1_StorageOSVolumeSource',
        },
        vsphereVolume: {
            type: 'v1_VsphereVirtualDiskVolumeSource',
        },
    },
};