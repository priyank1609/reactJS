import Image from "next/image";
import Counter from "./Counter";

export default function Home() {
  let count = 0;

  return (
    <div className="h-12 space-y-4">
      <h1 className="text-3xl font-semibold">This is H!, does not need interactivity.</h1>
      <p className="text-2xl">Hello World From NextJS</p>
      <Counter />
    </div>
  );
}
