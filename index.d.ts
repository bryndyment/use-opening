export interface Opening {
    anchor: any | null;
    close: () => void;
    isOpen: boolean;
    open: (event?: any) => void;
    toggle: (event?: any) => void;
}
export declare const useOpening: (initialState?: {
    anchor: null;
    isOpen: boolean;
}) => Opening;
//# sourceMappingURL=index.d.ts.map