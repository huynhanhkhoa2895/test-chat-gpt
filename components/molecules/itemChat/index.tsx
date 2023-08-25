import {twMerge} from "tailwind-merge";

const ItemChat = ({message}: { message: Message }) => {
  return (
    <div
      className={twMerge('w-full h-auto ',)}>
      <div className={'w-full'}>
        <span
          className={twMerge('block rounded-lg border p-3 w-max max-w-[50%] ', message.role === 'user' ? 'border-gray-500 ml-auto' : 'bg-primary text-white')}>{message.content}</span>
      </div>
    </div>
  )
}
export default ItemChat;