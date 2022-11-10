export interface navType {
  name: string;
  link: string;
  id: number | string;
  navContents: NavItemTypes[];
}

export interface NavItemTypes {
  name: string;
  link: string;
  id: number | string;
  icon: React.ReactNode;
}
export interface BrandTypes {
  img: string;
  link: string;
  id: number | string;
}
type IconType = {
  icon: React.ReactNode;
};
export interface DisplayContentTypes {
  title: string;
  desc: string;
  image: string;
  coreTags: string[];
  iconsValues: IconType[];
  handleClick: () => void | any;
  id: string | null | undefined;
  isReversed: Boolean | boolean;
}

export interface ShopCarouselTypes {
  image: string;
  link: string;
  id: string | null | undefined;
}
type SubCategoryType = {
  name: string;
  link: string;
  id: number | string | undefined;
};
export interface ShopCategoryTypes {
  name: string;
  link: string;
  id: number | string | undefined;
  icon: React.ReactNode;
  subCategory: SubCategoryType[];
}

export interface TBrands {}
type Return = {
  talk: () => string;
};
type Person = <T>(name: T) => Return;
const person: Person = (name) => {
  return {
    talk() {
      return `fkfkfk ${name}`;
    },
  };
};
const wilson = person("wilson");
wilson.talk();
type Fish = {
  swim?: string;
};
type Bird = boolean | string;
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
function iNum(x: any): x is number {
  return typeof x === "number";
}
function f(stringornull: string | null): string {
  return stringornull ?? "default";
}
// Type assertion operator
type Tree<T> = {
  value: T;
  left?: Tree<T>;
  right?: Tree<T>;
};
type LinkedList<Type> = Type & { next: LinkedList<Type> };
type Partial<T> = {
  [P in keyof T]?: T[P];
};
type key = "option1" | "option2";
type Flags = { readonly [k in key]: boolean };
type proxy<T> = {
  get(): T;
  set(value: T): void;
};

type Proxify<T> = {
  [P in keyof T]: proxy<T[P]>;
};

function proxify<T>(o: T): Proxify<T> {}
let props = { roma: 2 };
let proxyProp = proxify(props);
declare function func<T extends boolean>(
  x: T
): T extends true ? string : number;

// Type is 'string | number'
let x = func(Math.random() < 0.5);
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";
