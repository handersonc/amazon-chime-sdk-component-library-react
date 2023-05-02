declare function useMemoCompare<T>(next: any, compare: (prev: T | undefined, next: T | undefined) => boolean): any;
export default useMemoCompare;
