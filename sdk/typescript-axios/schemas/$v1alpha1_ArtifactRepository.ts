/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_ArtifactRepository = {
    properties: {
        archiveLogs: {
            type: 'boolean',
        },
        artifactory: {
            type: 'v1alpha1_ArtifactoryArtifactRepository',
        },
        gcs: {
            type: 'v1alpha1_GCSArtifactRepository',
        },
        hdfs: {
            type: 'v1alpha1_HDFSArtifactRepository',
        },
        oss: {
            type: 'v1alpha1_OSSArtifactRepository',
        },
        s3: {
            type: 'v1alpha1_S3ArtifactRepository',
        },
    },
};