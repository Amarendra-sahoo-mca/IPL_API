interface PaginationData {
    take: number;
    skip: number;
}
interface Entity {
    new (): any;
}
interface ApplySortingParams {
    entity: any;
    sortBy?: string;
    sortOrder?: string;
    relations?: {
        [key: string]: string;
    };
    alias: string;
}
export declare const getUserTypeName: (type: number) => string;
export declare const generatePassword: (length?: number) => string;
export declare class CreatedBy {
    created_by: number;
}
export declare class email {
    email: string;
}
export declare const generateOtp: () => string;
export declare const applyPagination: (page?: string | number) => PaginationData;
export declare const applySorting: <T extends Entity>(sortBy: string | undefined, sortOrder: string | undefined, entity: T) => {
    [key: string]: "ASC" | "DESC";
};
export declare const applySortingJoin: ({ entity, sortBy, sortOrder, relations, alias, }: ApplySortingParams) => {
    sortField: string;
    sortOrder: "ASC" | "DESC";
};
export {};
