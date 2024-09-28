import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import ButtonTags from "../src/components";
import Button from "../src/components/Button";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello World! Iam Wajid Ali
      </h1>
      <div>
        <Button
          text={"Home"}
          bgColor={"bg-red-500"}
          textColor={"text-white"}
          borderColor={"border-red-500"}
        />
        <Button
          text={"About"}
          bgColor={"bg-blue-500"}
          textColor={"text-white"}
          borderColor={"border-blue-500"}
        />
        <Button
          text={"Contact Us"}
          width={"w-25"}
          bgColor={"bg-green-500"}
          borderColor={"border-green-500"}
          textColor={"text-white"}
        />
        <Button
          text={"Products"}
          bgColor={"bg-black"}
          borderColor={"border-black"}
          textColor={"text-white"}
        />
        <Button
          text={"Services"}
          bgColor={"bg-yellow-500"}
          borderColor={"border-yellow-500"}
          textColor={"text-white"}
        />
        <Button
          text={"Feeback"}
          bgColor={"bg-pink-500"}
          borderColor={"border-pink-500"}
          textColor={"text-white"}
        />
      </div>
    </>
  );
}

export default App;
