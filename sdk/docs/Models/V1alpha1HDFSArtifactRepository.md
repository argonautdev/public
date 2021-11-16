# V1alpha1HDFSArtifactRepository
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List**](string.md) | Addresses is accessible addresses of HDFS name nodes | [optional] [default to null]
**force** | [**Boolean**](boolean.md) | Force copies a file forcibly even if it exists (default: false) | [optional] [default to null]
**hdfsUser** | [**String**](string.md) | HDFSUser is the user to access HDFS file system. It is ignored if either ccache or keytab is used. | [optional] [default to null]
**krbCCacheSecret** | [**v1.SecretKeySelector**](v1.SecretKeySelector.md) |  | [optional] [default to null]
**krbConfigConfigMap** | [**v1.ConfigMapKeySelector**](v1.ConfigMapKeySelector.md) |  | [optional] [default to null]
**krbKeytabSecret** | [**v1.SecretKeySelector**](v1.SecretKeySelector.md) |  | [optional] [default to null]
**krbRealm** | [**String**](string.md) | KrbRealm is the Kerberos realm used with Kerberos keytab It must be set if keytab is used. | [optional] [default to null]
**krbServicePrincipalName** | [**String**](string.md) | KrbServicePrincipalName is the principal name of Kerberos service It must be set if either ccache or keytab is used. | [optional] [default to null]
**krbUsername** | [**String**](string.md) | KrbUsername is the Kerberos username used with Kerberos keytab It must be set if keytab is used. | [optional] [default to null]
**pathFormat** | [**String**](string.md) | PathFormat is defines the format of path to store a file. Can reference workflow variables | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

