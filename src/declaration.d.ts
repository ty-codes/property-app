declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly PUBLIC_URL: string;

    }
}

declare module '*.png' {
    const src: string;
    export default src
}

declare module '*.gif' {
    const src: string;
    export default src
}

declare module '*.svg' {
    const src: string;
    export default src
}
declare module '*.jpg' {
    const src: string;
    export default src
}

declare module '*.jpeg' {
    const src: string;
    export default src
}