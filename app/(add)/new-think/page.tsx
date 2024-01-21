"use client";
import Upload from "@/components/upload";
import dayjs from "dayjs";
import { useState } from "react";

export default function NewThinkPage() {
  return (
    <div>
      <Upload />
      <input
        type="datetime-local"
        onChange={({ target }) =>
          console.log(dayjs(new Date(target.value)).unix())
        }
      />
    </div>
  );
}
