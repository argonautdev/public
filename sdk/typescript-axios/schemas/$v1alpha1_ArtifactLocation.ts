/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_ArtifactLocation = {
    properties: {
        archiveLogs: {
            type: 'boolean',
        },
        artifactory: {
            type: 'v1alpha1_ArtifactoryArtifact',
        },
        gcs: {
            type: 'v1alpha1_GCSArtifact',
        },
        git: {
            type: 'v1alpha1_GitArtifact',
        },
        hdfs: {
            type: 'v1alpha1_HDFSArtifact',
        },
        http: {
            type: 'v1alpha1_HTTPArtifact',
        },
        oss: {
            type: 'v1alpha1_OSSArtifact',
        },
        raw: {
            type: 'v1alpha1_RawArtifact',
        },
        s3: {
            type: 'v1alpha1_S3Artifact',
        },
    },
};