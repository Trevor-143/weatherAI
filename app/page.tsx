"use client"

import CityPicker from "@/components/CityPicker"
import { Card, Divider, Subtitle, Text } from "@tremor/react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#165f4d] to-[#044a53] p-10 flex flex-col justify-center items-center">
      <Card className=" max-w-4xl mx-auto rounded-3xl ">
        <Text className=" text-5xl font-bold text-center mb-10" >Weather AI</Text>
        <Subtitle className="text-xl text-center" >Powered by NextJS</Subtitle>

        <Divider className="my-10" />
        <Card className = "bg-gradient-to-br from-[#165f4d] to-[#044a53] rounded-2xl " >
          {/* cityPicker */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  )
}
