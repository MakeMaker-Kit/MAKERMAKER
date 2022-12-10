import React from "react";
import sfc from "jsx-sfc.macro";
import tw from "twin.macro";
import _ from "lodash";

interface ItemProps {
  no?: number;
  text?: string;
  completed?: boolean;
  onClickItem?(no: number): void;
}

const Item = sfc<ItemProps>()({
  Component({
    no,
    text,
    completed,
    onClickItem,
    styles: { Li },
    svgProps,
    pathD,
  }) {
    function onClick() {
      onClickItem?.(no as number);
    }

    return (
      <Li onClick={onClick}>
        <svg {...svgProps}>
          {completed ? (
            <>
              <polyline points="9 11 12 14 23 3"></polyline>
              <path d={pathD}></path>
            </>
          ) : (
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          )}
        </svg>
        <span>{text}</span>
      </Li>
    );
  },
  //
  static: {
    svgProps: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
    },

    pathD: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",

    defaultProps: {
      text: "TodoItem",
      completed: false,
    },
  },

  styles: {
    Li: tw.li`
        flex flex-row 
        `,
  },
});
const TodoList = sfc({
  Component({ initialSelected }) {
    const [selected, setSelected] = React.useState<number[]>(initialSelected);

    return {
      selected,
      onClickItem(no: number) {
        const index = selected.indexOf(no);
        if (index >= 0) {
          setSelected(selected.filter((i) => i !== no));
        } else {
          setSelected([...selected, no]);
        }
      },
    };
  },

  static: {
    initialSelected: [0, 1, 2, 3, 4, 5],
    Item,
  },

  render: ({ data, styles: { Ul, Title } }) => (
    <>
      <Title>
        Experience <b>React Fast Refresh</b> when you modify the code. Click{" "}
        <b>React DevTools</b> to view the component rendering structure.
      </Title>
      <Ul>
        {_.times(20).map((i) => (
          <TodoList.Item
            key={i}
            no={i}
            text={`test${i + 1}`}
            completed={data.selected.indexOf(i) >= 0}
            onClickItem={data.onClickItem}
          />
        ))}
      </Ul>
    </>
  ),

  styles: {
    Title: tw.div`mt-5 mb-5 text-center text-4xl`,
    Ul: tw.ul`mt-5 mb-5 p-0`,
  },
});

console.log(typeof TodoList.Item.styles.Li);
console.log(typeof TodoList.styles.Ul);
