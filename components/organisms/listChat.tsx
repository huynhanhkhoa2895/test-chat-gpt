import {useSelector} from "react-redux";
import {selectChat} from "@/reducers/select";
import ItemChat from "@/components/molecules/itemChat";
import {useEffect, useRef} from "react";
import EventSource from 'eventsource'
const ListChat = () => {
  const listChat = useSelector(selectChat);
  const ref = useRef<HTMLInputElement | null>(null)


  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollTo({top: ref.current?.getBoundingClientRect().height, behavior: "smooth"});
    }
  }, [listChat])

  return (
    <div ref={ref} className={"h-[calc(100vh-100px)] overflow-auto test"}>
      <div className={'h-full w-full flex flex-col p-3 gap-3'}>
        {
          listChat.map((item: Message, index) => {
            return <ItemChat key={index} message={item}/>
          })
        }
      </div>
    </div>
  )
}
export default ListChat