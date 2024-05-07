"use client"
import "./i18n"
import Form from "./form";
import { Suspense } from "react";

export default function Home() {
  return (

    <Suspense fallback="loading">
      <main >
        <div >
          <Form />
        </div>
      </main>
    </Suspense>
  );
}
