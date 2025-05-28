/** https://docs.tsafe.dev/typeguard */
export function typeGuard<T>(value: any, isMatched: boolean): value is T {
    // NOTE: Just to make typescript happy
    value;

    return isMatched;
}
