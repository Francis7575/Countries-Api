export type Currency = {
    name: string
}

export type Languages = {
    name: string
}

export type IRouterType = {
    title: string;
    path?: string;
    element: JSX.Element;
    children?: IRouterType[];
}