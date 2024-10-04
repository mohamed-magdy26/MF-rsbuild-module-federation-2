
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/InternalExposedName';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/InternalExposedName' ? typeof import('REMOTE_ALIAS_IDENTIFIER/InternalExposedName') :any;