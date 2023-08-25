import {useForm} from "react-hook-form";
import React, {FC, ReactNode, useContext, useEffect, useState} from "react";
// import {IAppContext} from "@/types";
// import AppContext from "@/contexts";
import ButtonSubmitGroup from "@/components/molecules/form/buttonSubmitGroup";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import FormWrapper from "@/components/molecules/formWrapper";
import {useDispatch, useSelector} from "react-redux";
import {selectChat} from "@/reducers/select";
import {addChat,updateChat} from "@/reducers/actions";
import EventSource from "eventsource";
import OpenAI from "openai";

type Props = {
  submitText?: string | ReactNode;
};

const withForm = (FieldsComponent: FC<any>, schema?: Yup.ObjectSchema<any>) => {
  // eslint-disable-next-line react/display-name
  return ({submitText}: Props) => {
    const {
      control,
      handleSubmit,
      formState: {errors},
      watch,
      reset,
      formState
    } = useForm(
      {
        defaultValues: {
          msg: ''
        }
      }
    );
    const [loading,setLoading] = useState<boolean>(false)
    const dispatch = useDispatch();
    const listChat = useSelector(selectChat)
    const _addChat = (value: Message) => dispatch((addChat as any)(value))
    const _updateChat = (index: number,value: Message) => dispatch((updateChat as any)(index,value))

    const submit = async (data: any) => {
      setLoading(true)
      reset({msg: ''});
      const lastIndexOfList = listChat.length+1;
      _addChat({role: 'user', content: data?.msg})
      const dataChat: any = [...listChat, ...[{role: 'user', content: data?.msg}]]
      const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
        dangerouslyAllowBrowser: true
      });
      let index = 0;
      const stream = await openai.chat.completions.create({
        messages: dataChat,
        model: 'gpt-3.5-turbo',
        stream: true,
      });
      for await (const part of stream) {
        const content: string = part.choices[0]?.delta?.content || '';
        if(index === 0) {
          _addChat({role: 'assistant',content})
        }else{
          _updateChat(lastIndexOfList,{role: 'assistant',content})
        }
        index++;
      }
      // fetch("api", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     data: [...listChat, ...[{role: 'user', content: data?.msg}]]
      //   })
      // })
      //   .then(res => res.body.getReader())
      //   .then(async (stream) => {
      //     const decoder = new TextDecoder()
      //     const chunk = await stream.read()
      //     const {done,value} = chunk;
      //     console.log(decoder.decode(value))
      //     let index = 0;
      //     for await (const part of stream.data) {
      //
      //         const content: string = part.choices[0]?.delta?.content || '';
      //         if(index === 0) {
      //           _addChat({role: 'assistant',content})
      //         }else{
      //           _updateChat(lastIndexOfList,{role: 'assistant',content})
      //         }
      //         index++;
      //     }
      //
      //   }).catch((e) => {
      //     console.log("error", e)
      //   })


      // console.log("result", data)
    };

    const onError = (e: any) => {
      console.log("onError", e);
    };

    return (
      <>
        <form
          className={"w-full relative"}
          onSubmit={handleSubmit(submit, onError)}
        >
          <FormWrapper>
            <FieldsComponent
              control={control}
              errors={errors}

            />
            {/*<ButtonSubmitGroup*/}
            {/*  submitText={submitText || "Submit"}*/}
            {/*/>*/}
          </FormWrapper>
        </form>
      </>
    );
  };
};
export default withForm;
