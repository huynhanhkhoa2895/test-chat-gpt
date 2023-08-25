'use client'

import FormChat from "@/components/organisms/formChat";
import ListChat from "@/components/organisms/listChat";
import Providers from "@/reducers/provider";

export default function Home() {
  return (
    <Providers>
      <main className="h-screen p-5 h-full w-full overflow-hidden">

        <ListChat/>
        <div className={'border-gray-500 pt-3'}>
          <FormChat/>
        </div>
      </main>
    </Providers>

  )
}
