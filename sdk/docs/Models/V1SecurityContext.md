# V1SecurityContext
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowPrivilegeEscalation** | [**Boolean**](boolean.md) | AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN +optional | [optional] [default to null]
**capabilities** | [**v1.Capabilities**](v1.Capabilities.md) |  | [optional] [default to null]
**privileged** | [**Boolean**](boolean.md) | Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. +optional | [optional] [default to null]
**procMount** | [**String**](string.md) | procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. +optional | [optional] [default to null]
**readOnlyRootFilesystem** | [**Boolean**](boolean.md) | Whether this container has a read-only root filesystem. Default is false. +optional | [optional] [default to null]
**runAsGroup** | [**Integer**](integer.md) | The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional | [optional] [default to null]
**runAsNonRoot** | [**Boolean**](boolean.md) | Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional | [optional] [default to null]
**runAsUser** | [**Integer**](integer.md) | The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional | [optional] [default to null]
**seLinuxOptions** | [**v1.SELinuxOptions**](v1.SELinuxOptions.md) |  | [optional] [default to null]
**seccompProfile** | [**v1.SeccompProfile**](v1.SeccompProfile.md) |  | [optional] [default to null]
**windowsOptions** | [**v1.WindowsSecurityContextOptions**](v1.WindowsSecurityContextOptions.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

