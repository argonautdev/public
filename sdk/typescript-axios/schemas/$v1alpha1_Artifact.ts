/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $v1alpha1_Artifact = {
    properties: {
        archive: {
            type: 'v1alpha1_ArchiveStrategy',
        },
        archiveLogs: {
            type: 'boolean',
        },
        artifactory: {
            type: 'v1alpha1_ArtifactoryArtifact',
        },
        from: {
            type: 'string',
        },
        fromExpression: {
            type: 'string',
        },
        gcs: {
            type: 'v1alpha1_GCSArtifact',
        },
        git: {
            type: 'v1alpha1_GitArtifact',
        },
        globalName: {
            type: 'string',
        },
        hdfs: {
            type: 'v1alpha1_HDFSArtifact',
        },
        http: {
            type: 'v1alpha1_HTTPArtifact',
        },
        mode: {
            type: 'number',
        },
        name: {
            type: 'string',
        },
        optional: {
            type: 'boolean',
        },
        oss: {
            type: 'v1alpha1_OSSArtifact',
        },
        path: {
            type: 'string',
        },
        raw: {
            type: 'v1alpha1_RawArtifact',
        },
        recurseMode: {
            type: 'boolean',
        },
        s3: {
            type: 'v1alpha1_S3Artifact',
        },
        subPath: {
            type: 'string',
        },
    },
};