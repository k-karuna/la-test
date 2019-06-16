declare module '*.css';
declare module '*.jpeg';
declare module '*.json';
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.ttf';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
