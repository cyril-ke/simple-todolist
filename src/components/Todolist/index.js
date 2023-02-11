import { useState, useEffect, useRef } from 'react';

const Todolist = () => {
  const inputRef = useRef(null);
  const [items, setItems] = useState([]);
  // 沒有項目在編輯，所以一開始給 -1
  const [editingIndex, setEditingIndex] = useState(-1);
  // 用來存編輯-新的內容
  const [newContent, setNewContent] = useState('');

  const addToList = () => {
    const todoItem = inputRef.current.value;

    setItems([...items, todoItem]);

    inputRef.current.value = '';
  };

  const removeItem = (index) => {
    // 作法1: 使用 splice
    // const newItems = [...items];
    // newItems.splice(index, 1);
    // setItems(newItems);

    // 作法2: 使用 filter
    setItems(
      items.filter((item, i) => {
        return index !== i;
      })
    );
  };

  useEffect(() => {
    console.log(editingIndex);
  }, [editingIndex]);

  const reset = () => {
    setEditingIndex(-1);
  };

  // const edit = () => {
  //   setEditingIndex();
  //   setNewContent(items);
  // };

  const update = () => {
    const newItems = [...items];
    newItems[editingIndex] = newContent;
    setItems(newItems);
    reset();
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[#333] text-3xl flex justify-center">Todo List</h1>
      <div className="mt-4">
        <input
          placeholder="type some todo item..."
          ref={inputRef}
          className="border-[1px] p-2 h-8 rounded"
          type="text"
        />
        <button
          className="ml-4 border-[1px] bg-white h-8 w-12 rounded"
          onClick={addToList}
        >
          Add
        </button>
      </div>
      <div className="mt-4 border-[1px] w-64 h-72 rounded p-4">
        {items.map((item, index) => {
          return (
            <div
              className="w-full h-8 flex items-center rounded bg-[#f0f0f0] mt-2 first:mt-0 p-2 justify-between"
              key={index}
            >
              {index === editingIndex ? (
                <input
                  className="rounded-md w-32 pl-1 border border-[#6a6a6a]"
                  type="text"
                  value={newContent}
                  onChange={(e) => {
                    const value = e.target.value;
                    setNewContent(value);
                  }}
                />
              ) : (
                <div>{item}</div>
              )}
              <div className="flex items-center">
                {index === editingIndex ? (
                  <>
                    <button
                      className="rounded text-xs p-1 bg-[#6ada6e] text-white"
                      onClick={update}
                    >
                      確認
                    </button>
                    <button
                      className="rounded text-xs ml-1 p-1 bg-[#f47a6a] text-white"
                      onClick={reset}
                    >
                      取消
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="rounded text-xs p-1 text-white bg-[#3963bc]"
                      onClick={() => {
                        setNewContent(item);
                        setEditingIndex(index);
                      }}
                    >
                      編輯
                    </button>
                    <button
                      className="ml-1 cursor-pointer rounded text-xs p-1 bg-[#f47a6a] text-white"
                      onClick={() => {
                        removeItem(index);
                      }}
                    >
                      刪除
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;
