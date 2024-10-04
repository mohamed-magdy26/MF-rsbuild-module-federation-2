
    export type RemoteKeys = 'SecondInternalRemoteName/SecondInternalExposeName';
    type PackageType<T> = T extends 'SecondInternalRemoteName/SecondInternalExposeName' ? typeof import('SecondInternalRemoteName/SecondInternalExposeName') :any;