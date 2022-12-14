import React from "react";
// import tw, { globalStyles, theme, screen, GlobalStyles } from "twin.macro";
// export type TwComponent<K extends keyof JSX.IntrinsicElements> = (
//   props: JSX.IntrinsicElements[K]
// ) => JSX.Element;

// export type TwComponentMap = {
//   [K in keyof JSX.IntrinsicElements]: TemplateFn<TwComponent<K>>;
// };

// import type { Action } from "redux";
// import type {
//   IsUnknownOrNonInferrable,
//   IfMaybeUndefined,
//   IfVoid,
//   IsAny,
// } from "./tsHelpers";
// /**
//  * An action with a string type and an associated payload. This is the
//  * type of action returned by `createAction()` action creators.
//  *
//  * @template P The type of the action's payload.
//  * @template T the type used for the action type.
//  * @template M The type of the action's meta (optional)
//  * @template E The type of the action's error (optional)
//  *
//  * @public
//  */
// export declare type PayloadAction<
//   P = void,
//   T extends string = string,
//   M = never,
//   E = never
// > = {
//   payload: P;
//   type: T;
// } & ([M] extends [never]
//   ? {}
//   : {
//       meta: M;
//     }) &
//   ([E] extends [never]
//     ? {}
//     : {
//         error: E;
//       });
// /**
//  * A "prepare" method to be used as the second parameter of `createAction`.
//  * Takes any number of arguments and returns a Flux Standard Action without
//  * type (will be added later) that *must* contain a payload (might be undefined).
//  *
//  * @public
//  */
// export declare type PrepareAction<P> =
//   | ((...args: any[]) => {
//       payload: P;
//     })
//   | ((...args: any[]) => {
//       payload: P;
//       meta: any;
//     })
//   | ((...args: any[]) => {
//       payload: P;
//       error: any;
//     })
//   | ((...args: any[]) => {
//       payload: P;
//       meta: any;
//       error: any;
//     });
// /**
//  * Internal version of `ActionCreatorWithPreparedPayload`. Not to be used externally.
//  *
//  * @internal
//  */
// export declare type _ActionCreatorWithPreparedPayload<
//   PA extends PrepareAction<any> | void,
//   T extends string = string
// > = PA extends PrepareAction<infer P>
//   ? ActionCreatorWithPreparedPayload<
//       Parameters<PA>,
//       P,
//       T,
//       ReturnType<PA> extends {
//         error: infer E;
//       }
//         ? E
//         : never,
//       ReturnType<PA> extends {
//         meta: infer M;
//       }
//         ? M
//         : never
//     >
//   : void;
// /**
//  * Basic type for all action creators.
//  *
//  * @inheritdoc {redux#ActionCreator}
//  */
// export interface BaseActionCreator<P, T extends string, M = never, E = never> {
//   type: T;
//   match: (action: Action<unknown>) => action is PayloadAction<P, T, M, E>;
// }
// /**
//  * An action creator that takes multiple arguments that are passed
//  * to a `PrepareAction` method to create the final Action.
//  * @typeParam Args arguments for the action creator function
//  * @typeParam P `payload` type
//  * @typeParam T `type` name
//  * @typeParam E optional `error` type
//  * @typeParam M optional `meta` type
//  *
//  * @inheritdoc {redux#ActionCreator}
//  *
//  * @public
//  */
// export interface ActionCreatorWithPreparedPayload<
//   Args extends unknown[],
//   P,
//   T extends string = string,
//   E = never,
//   M = never
// > extends BaseActionCreator<P, T, M, E> {
//   /**
//    * Calling this {@link redux#ActionCreator} with `Args` will return
//    * an Action with a payload of type `P` and (depending on the `PrepareAction`
//    * method used) a `meta`- and `error` property of types `M` and `E` respectively.
//    */
//   (...args: Args): PayloadAction<P, T, M, E>;
// }
// /**
//  * An action creator of type `T` that takes an optional payload of type `P`.
//  *
//  * @inheritdoc {redux#ActionCreator}
//  *
//  * @public
//  */
// export interface ActionCreatorWithOptionalPayload<P, T extends string = string>
//   extends BaseActionCreator<P, T> {
//   /**
//    * Calling this {@link redux#ActionCreator} with an argument will
//    * return a {@link PayloadAction} of type `T` with a payload of `P`.
//    * Calling it without an argument will return a PayloadAction with a payload of `undefined`.
//    */
//   (payload?: P): PayloadAction<P, T>;
// }
// /**
//  * An action creator of type `T` that takes no payload.
//  *
//  * @inheritdoc {redux#ActionCreator}
//  *
//  * @public
//  */
// export interface ActionCreatorWithoutPayload<T extends string = string>
//   extends BaseActionCreator<undefined, T> {
//   /**
//    * Calling this {@link redux#ActionCreator} will
//    * return a {@link PayloadAction} of type `T` with a payload of `undefined`
//    */
//   (): PayloadAction<undefined, T>;
// }
// /**
//  * An action creator of type `T` that requires a payload of type P.
//  *
//  * @inheritdoc {redux#ActionCreator}
//  *
//  * @public
//  */
// export interface ActionCreatorWithPayload<P, T extends string = string>
//   extends BaseActionCreator<P, T> {
//   /**
//    * Calling this {@link redux#ActionCreator} with an argument will
//    * return a {@link PayloadAction} of type `T` with a payload of `P`
//    */
//   (payload: P): PayloadAction<P, T>;
// }
// /**
//  * An action creator of type `T` whose `payload` type could not be inferred. Accepts everything as `payload`.
//  *
//  * @inheritdoc {redux#ActionCreator}
//  *
//  * @public
//  */
// export interface ActionCreatorWithNonInferrablePayload<
//   T extends string = string
// > extends BaseActionCreator<unknown, T> {
//   /**
//    * Calling this {@link redux#ActionCreator} with an argument will
//    * return a {@link PayloadAction} of type `T` with a payload
//    * of exactly the type of the argument.
//    */
//   <PT extends unknown>(payload: PT): PayloadAction<PT, T>;
// }
// /**
//  * An action creator that produces actions with a `payload` attribute.
//  *
//  * @typeParam P the `payload` type
//  * @typeParam T the `type` of the resulting action
//  * @typeParam PA if the resulting action is preprocessed by a `prepare` method, the signature of said method.
//  *
//  * @public
//  */
// export declare type PayloadActionCreator<
//   P = void,
//   T extends string = string,
//   PA extends PrepareAction<P> | void = void
// > = IfPrepareActionMethodProvided<
//   PA,
//   _ActionCreatorWithPreparedPayload<PA, T>,
//   IsAny<
//     P,
//     ActionCreatorWithPayload<any, T>,
//     IsUnknownOrNonInferrable<
//       P,
//       ActionCreatorWithNonInferrablePayload<T>,
//       IfVoid<
//         P,
//         ActionCreatorWithoutPayload<T>,
//         IfMaybeUndefined<
//           P,
//           ActionCreatorWithOptionalPayload<P, T>,
//           ActionCreatorWithPayload<P, T>
//         >
//       >
//     >
//   >
// >;
// /**
//  * A utility function to create an action creator for the given action type
//  * string. The action creator accepts a single argument, which will be included
//  * in the action object as a field called payload. The action creator function
//  * will also have its toString() overriden so that it returns the action type,
//  * allowing it to be used in reducer logic that is looking for that action type.
//  *
//  * @param type The action type to use for created actions.
//  * @param prepare (optional) a method that takes any number of arguments and returns { payload } or { payload, meta }.
//  *                If this is given, the resulting action creator will pass its arguments to this method to calculate payload & meta.
//  *
//  * @public
//  */
// export declare function createAction<P = void, T extends string = string>(
//   type: T
// ): PayloadActionCreator<P, T>;
// /**
//  * A utility function to create an action creator for the given action type
//  * string. The action creator accepts a single argument, which will be included
//  * in the action object as a field called payload. The action creator function
//  * will also have its toString() overriden so that it returns the action type,
//  * allowing it to be used in reducer logic that is looking for that action type.
//  *
//  * @param type The action type to use for created actions.
//  * @param prepare (optional) a method that takes any number of arguments and returns { payload } or { payload, meta }.
//  *                If this is given, the resulting action creator will pass its arguments to this method to calculate payload & meta.
//  *
//  * @public
//  */
// export declare function createAction<
//   PA extends PrepareAction<any>,
//   T extends string = string
// >(
//   type: T,
//   prepareAction: PA
// ): PayloadActionCreator<ReturnType<PA>["payload"], T, PA>;
// export declare function isFSA(action: unknown): action is {
//   type: string;
//   payload?: unknown;
//   error?: unknown;
//   meta?: unknown;
// };
// /**
//  * Returns the action type of the actions created by the passed
//  * `createAction()`-generated action creator (arbitrary action creators
//  * are not supported).
//  *
//  * @param action The action creator whose action type to get.
//  * @returns The action type used by the action creator.
//  *
//  * @public
//  */
// export declare function getType<T extends string>(
//   actionCreator: PayloadActionCreator<any, T>
// ): T;
// declare type IfPrepareActionMethodProvided<
//   PA extends PrepareAction<any> | void,
//   True,
//   False
// > = PA extends (...args: any[]) => any ? True : False;
// export {};

// const Example = () => {
//   const Header = tw.div`
//     text
//     `;
//   return (
//     <div>
//       <Header>
//         <h1>
//           <a
//             href="https://www.npmjs.com/package/react-hooks-intro"
//             target="_blank"
//           >
//             <img src="https://img.shields.io/npm/v/react-hooks-intro.svg" />
//             <img src="https://img.shields.io/npm/v/react-hooks" />
//           </a>
//         </h1>
//       </Header>
//     </div>
//   );
// };

// export default Example;


// import { useState } from "react";
// import sfc from "jsx-sfc.macro";
// import tw from "twin.macro";
// import _ from "lodash";

// interface ItemProps {
//   no: number;
//   text: string;
//   completed?: boolean;
//   onClickItem?: (no: number) => void;
// }

// const Item = sfc<ItemProps>()({
//   Component({
//     no,
//     text,
//     completed,
//     onClickItem,
//     styles: { Li },
//     svgProps,
//     pathD
//   }) {
//     function onClick() {
//       onClickItem?.(no);
//     }

//     return (
//       <Li onClick={onClick}>
//         <svg {...svgProps}>
//           {completed ? (
//             <>
//               <polyline points="9 11 12 14 23 3"></polyline>
//               <path d={pathD}></path>
//             </>
//           ) : (
//             <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
//           )}
//         </svg>
//         <span>{text}</span>
//       </Li>
//     );
//   },

//   static: {
//     svgProps: {
//       xmlns: "http://www.w3.org/2000/svg",
//       width: "24",
//       height: "24",
//       viewBox: "0 0 24 24",
//       fill: "none",
//       stroke: "currentColor",
//       strokeWidth: "2"
//     },

//     pathD: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",

//     defaultProps: {
//       text: "TodoItem",
//       completed: false
//     }
//   },

//   styles: {
//     Li: tw.li`
//       flex flex-row items-center p-1
//       border-t-0 border-l-0 border-r-0 border-b
//       border-gray-300 border-solid
//       text-gray-600 leading-6 text-lg
//       hover:bg-gray-300 cursor-pointer
//     `
//   }
// });

// const TodoList = sfc({
//   Component({ initialSelected }) {
//     const [selected, setSelected] = useState<number[]>(initialSelected);

//     return {
//       selected,

//       onClickItem(no: number) {
//         const index = selected.indexOf(no);
//         if (index >= 0) {
//           setSelected(selected.filter((i) => i !== no));
//         } else {
//           setSelected([...selected, no]);
//         }
//       }
//     };
//   },

//   static: {
//     initialSelected: [0, 1, 2, 3, 4],

//     Item
//   },

//   render: ({ data, styles: { Ul, Title } }) => (
//     <>
//       <Title>
//         Experience <b>React Fast Refresh</b> when you modify the code. Click{" "}
//         <b>React DevTools</b> to view the component rendering structure.
//       </Title>
//       <Ul>
//         {_.times(20).map((i) => (
//           <TodoList.Item
//             key={i}
//             no={i}
//             text={`test${i + 1}`}
//             completed={data.selected.indexOf(i) >= 0}
//             onClickItem={data.onClickItem}
//           />
//         ))}
//       </Ul>
//     </>
//   ),

//   styles: {
//     Title: tw.div`mt-5 mb-5 text-center text-xl`,

//     Ul: tw.ul`mt-5 mb-5 p-0`
//   }
// });

// // The following shows exporting static members from a component
// console.log(typeof TodoList.Item.styles.Li);
// console.log(typeof TodoList.Item.svgProps);
// console.log(typeof TodoList.Item);
// console.log(typeof TodoList.styles.Ul);
// console.log(typeof TodoList.Render);

// export default TodoList;
