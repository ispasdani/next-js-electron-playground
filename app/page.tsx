"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    if (count === 10) {
      router.push(`/count/${count}`);
    }
  }, [count]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div onClick={() => setCount(count - 1)}>-</div>
      <div>{count}</div>
      <div onClick={() => setCount(count + 1)}>+</div>
    </div>
  );
}
