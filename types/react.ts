import { ReactNode } from "react";

export interface PropsWithChildren {
    children: ReactNode;
}

export interface PropsWithValue {
    value: string;
}

export interface PropsWithClassSelector {
    classSelector?: string;
}
