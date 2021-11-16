/* tslint:disable */
/* eslint-disable */
/**
 * Midgard API Docs
 * This is the docs for midgard api for argonaut
 *
 * The version of the OpenAPI document: 0.4.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { V1alpha1ArchiveStrategy } from './v1alpha1-archive-strategy';
import { V1alpha1ArtifactoryArtifact } from './v1alpha1-artifactory-artifact';
import { V1alpha1GCSArtifact } from './v1alpha1-gcsartifact';
import { V1alpha1GitArtifact } from './v1alpha1-git-artifact';
import { V1alpha1HDFSArtifact } from './v1alpha1-hdfsartifact';
import { V1alpha1HTTPArtifact } from './v1alpha1-httpartifact';
import { V1alpha1OSSArtifact } from './v1alpha1-ossartifact';
import { V1alpha1RawArtifact } from './v1alpha1-raw-artifact';
import { V1alpha1S3Artifact } from './v1alpha1-s3-artifact';

/**
 * 
 * @export
 * @interface V1alpha1ArtifactPaths
 */
export interface V1alpha1ArtifactPaths {
    /**
     * 
     * @type {V1alpha1ArchiveStrategy}
     * @memberof V1alpha1ArtifactPaths
     */
    archive?: V1alpha1ArchiveStrategy;
    /**
     * ArchiveLogs indicates if the container logs should be archived
     * @type {boolean}
     * @memberof V1alpha1ArtifactPaths
     */
    archiveLogs?: boolean;
    /**
     * 
     * @type {V1alpha1ArtifactoryArtifact}
     * @memberof V1alpha1ArtifactPaths
     */
    artifactory?: V1alpha1ArtifactoryArtifact;
    /**
     * From allows an artifact to reference an artifact from a previous step
     * @type {string}
     * @memberof V1alpha1ArtifactPaths
     */
    from?: string;
    /**
     * FromExpression, if defined, is evaluated to specify the value for the artifact
     * @type {string}
     * @memberof V1alpha1ArtifactPaths
     */
    fromExpression?: string;
    /**
     * 
     * @type {V1alpha1GCSArtifact}
     * @memberof V1alpha1ArtifactPaths
     */
    gcs?: V1alpha1GCSArtifact;
    /**
     * 
     * @type {V1alpha1GitArtifact}
     * @memberof V1alpha1ArtifactPaths
     */
    git?: V1alpha1GitArtifact;
    /**
     * GlobalName exports an output artifact to the global scope, making it available as \'{{workflow.outputs.artifacts.XXXX}} and in workflow.status.outputs.artifacts
     * @type {string}
     * @memberof V1alpha1ArtifactPaths
     */
    globalName?: string;
    /**
     * 
     * @type {V1alpha1HDFSArtifact}
     * @memberof V1alpha1ArtifactPaths
     */
    hdfs?: V1alpha1HDFSArtifact;
    /**
     * 
     * @type {V1alpha1HTTPArtifact}
     * @memberof V1alpha1ArtifactPaths
     */
    http?: V1alpha1HTTPArtifact;
    /**
     * mode bits to use on this file, must be a value between 0 and 0777 set when loading input artifacts.
     * @type {number}
     * @memberof V1alpha1ArtifactPaths
     */
    mode?: number;
    /**
     * name of the artifact. must be unique within a template\'s inputs/outputs.
     * @type {string}
     * @memberof V1alpha1ArtifactPaths
     */
    name?: string;
    /**
     * Make Artifacts optional, if Artifacts doesn\'t generate or exist
     * @type {boolean}
     * @memberof V1alpha1ArtifactPaths
     */
    optional?: boolean;
    /**
     * 
     * @type {V1alpha1OSSArtifact}
     * @memberof V1alpha1ArtifactPaths
     */
    oss?: V1alpha1OSSArtifact;
    /**
     * Path is the container path to the artifact
     * @type {string}
     * @memberof V1alpha1ArtifactPaths
     */
    path?: string;
    /**
     * 
     * @type {V1alpha1RawArtifact}
     * @memberof V1alpha1ArtifactPaths
     */
    raw?: V1alpha1RawArtifact;
    /**
     * If mode is set, apply the permission recursively into the artifact if it is a folder
     * @type {boolean}
     * @memberof V1alpha1ArtifactPaths
     */
    recurseMode?: boolean;
    /**
     * 
     * @type {V1alpha1S3Artifact}
     * @memberof V1alpha1ArtifactPaths
     */
    s3?: V1alpha1S3Artifact;
    /**
     * SubPath allows an artifact to be sourced from a subpath within the specified source
     * @type {string}
     * @memberof V1alpha1ArtifactPaths
     */
    subPath?: string;
}


