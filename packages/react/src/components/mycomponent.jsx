import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 10px;
`;

export const MyComponent = ({ showInput }) => {
  const [newItemName, setNewItemName] = useState(() => "New item");
  const [list, setList] = useState(() => ["hello", "world"]);
  function addItem() {
    list = [...list, newItemName];
  }

  return (
    <>
      <div>
        {Boolean(showInput) && (
          <>
            <input
              value={newItemName}
              onChange={(event) => {
                setNewItemName(event.target.value);
              }}
            />
          </>
        )}

        <Div>
          <button
            onClick={(event) => {
              addItem();
            }}
          >
            Add list item
          </button>

          <div>
            {list.map((item) => (
              <>
                <div>{item}</div>
              </>
            ))}
          </div>
        </Div>
      </div>
    </>
  );
}
