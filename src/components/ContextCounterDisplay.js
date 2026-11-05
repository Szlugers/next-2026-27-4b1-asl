'use client'

import { useCounter } from "@/context/CounterContext";

export default function ContextCounerDisplay() {
    const { count } = useCounter();
    return <p>Wartość z kontekstu: {count}</p>
}