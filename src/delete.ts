import { string } from "yup/lib/locale";

// export var name = "wilson";

// function displayName(
//   name: string | number,
//   age: number,
//   occupation: string,
//   bio: string,
//   email: string,
//   _id: string,
//   _password: string,
//   phone: string,
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   _checked: boolean,
//   item: string
// ) {
//   return `
//     My Name is ${name}, i am ${age} years old, and my occupation is ${occupation}, and you can  contact me at ${email}, and this is my little live storey ${bio}
//     `;
// }

// export interface Item {
//   id: string;
//   item: string;
//   checked: boolean;
// }
// {  /* @ts-ignore */}

// export default class ListItem implements Item {
//   constructor(
//     private _id: string = "",
//     private _item: string = "",
//     private _checked: boolean = false
//   ) {}
//   get id(): string {
//     return this._id;
//   }
//   get item(): string {
//     return this._item;
//   }
//   get checked(): boolean {
//     return this._checked;
//   }
//   set checked(value: boolean) {
//     this._checked = value;
//   }
//   set id(id: string) {
//     this._id = id;
//   }
//   set item(item: string) {
//     this._item = item;
//   }
//   //   toString(): string {
//   //     return displayName(this._id, this._checked, this.item);
//   //   }
// }

// /// FULL LIST MODEL

// interface List {
//   list: ListItem[];
//   load(): void;
//   save(): void;
//   delete(id: string): void;
//   update(id: string, item: string): void;
//   add(item: string): void;
//   addItem(itemObj: ListItem): void;
//   remove(id: string): void;
//   clear(): void;
//   get(id: string): ListItem;
//   getChecked(id: string): ListItem[];
//   setChecked(id: string, checked: boolean): void;
//   setCheckedAll(checked: boolean): void;
//   getCheckedAll(): boolean;
//   setCheckedAll(checked: boolean): void;
//   getCheckedCount(): number;
//   setCheckedCount(count: number): void;
//   getCheckedCountAll(): number;
//   setCheckedCountAll(count: number): void;
//   getCheckedCountSelected(): number;
//   setCheckedCountSelected(count: number): void;
//   getCheckedCountUnselected(): number;
//   setCheckedCountUnselected(count: number): void;
// }
// {  /* @ts-ignore */}

// export default class FullList implements List {
  

//   static instance: FullList = new FullList();
//   private constructor(
//     private _list: ListItem[] = [],
//     private _load: () => void,
//     private _save: () => void,
//     private _delete: (id: string) => void,
//     private _update: (id: string, item: string) => void,
//     private _add: (item: string) => void,
//     private _addItem: (itemObj: ListItem) => void,
//     private _remove: (id: string) => void,
//     private _clear: () => void,
//     private _get: (id: string) => ListItem,
//     private _getChecked: (id: string) => ListItem[],
//     private _setChecked: (id: string, checked: boolean) => void,
//     private _setCheckedAll: (checked: boolean) => void,
//     private _getCheckedAll: () => boolean,
//     private _getCheckedCount: () => number,
//     private _setCheckedCount: (count: number) => void,
//     private _getCheckedCountAll: () => number,
//     private _getCheckedCountSelected: () => number,
//     private _setCheckedCountSelected: (count: number) => void,
//     private _getCheckedCountUnselected: () => number,
//     private _setCheckedCountUnselected: (count: number) => void
//   ) {}

//   get list(): ListItem[] {
//     return this._list;
//   }

//   load(): void {
//     const storedList: string | null = localStorage.getItem("MyList");
//     if (typeof storedList === "string" && storedList !== null) return;
//     const parsedList: { _id: string; _item: string; _checked: boolean }[] =
//       JSON.parse(storedList as string);
//     //   var name: string = "🔯"
//     this._list = parsedList.map(
//       (item: { _id: string; _item: string; _checked: boolean }) => {
//         return new ListItem(item._id, item._item, item._checked);
//         // FullList.instance.add
//       }
//     );
//   }

//   save(): void {
//     localStorage.setItem("MyList", JSON.stringify(this._list, null, 2));
//   }

//   clear(): void {
//     this._list = [];
//     this._load();
//     this._save();
//   }

//   /** @param itemObj @export  */

//   addItem(itemObj: ListItem): void {
//     this._list.push(itemObj);
//     this._save();
//   }

//   /** @param id @export  */

//   remove(id: string): void {
//     this._list = this._list.filter((item) => item.id !== id);
//     this._save();
//   }
// }

// export class ListModel {
//   items: Item[] = [];

//   constructor() {
//     this.items = [new ListItem(), new ListItem(), new ListItem()];
//   }
// }
