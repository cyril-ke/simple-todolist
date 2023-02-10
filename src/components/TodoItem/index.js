import Button from '../Button';

const TodoItem = ({ text }) => {
  return (
    <div className="flex items-center p-2w-full h-6 bg-[#e0e0e0] rounded-xl mt-2 first:mt-0">
      <p>{text}</p>
      <div>
        <Button text="刪除" />
        <Button text="編輯" />
        <Button text="確認" />
        <Button text="取消" />
      </div>
    </div>
  );
};

export default TodoItem;
