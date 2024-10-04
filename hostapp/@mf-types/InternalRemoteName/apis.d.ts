
    export type RemoteKeys = 'InternalRemoteName/InternalExposedName';
    type PackageType<T> = T extends 'InternalRemoteName/InternalExposedName' ? typeof import('InternalRemoteName/InternalExposedName') :any;