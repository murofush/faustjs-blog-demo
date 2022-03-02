// Type applicable for both Maybe<T> (default type T|null) and optional chain (undefined).
type Nullable<T> = import('client/schema.generated').Maybe<T> | undefined
