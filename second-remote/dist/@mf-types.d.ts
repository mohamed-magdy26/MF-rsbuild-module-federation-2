
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/SecondInternalExposeName';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/SecondInternalExposeName' ? typeof import('REMOTE_ALIAS_IDENTIFIER/SecondInternalExposeName') :any;