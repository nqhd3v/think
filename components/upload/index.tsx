"use client";
import { useRequestData } from "@/hooks/use-request";
import { uploadFile } from "@/services/firebase/client";
import $http from "@/utils/request";
import { useSetState } from "ahooks";
import { ChangeEventHandler } from "react";

const Upload = () => {
  const [{ names }, setUploaded] = useSetState<{
    names: string[];
  }>({
    names: [],
  });

  const handleUploadFile: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0];
    const pass = localStorage.getItem("__THINK_CREATE_PASS_CODE");
    if (!file || !pass) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    const res = await uploadFile(file);
    if (res) {
      setUploaded((p) => ({ ...p, names: [...p.names, res] }));
    }
  };
  // const { run } = useRequestData(
  //   (name) =>
  //     $http.get("image", {
  //       params: {
  //         create_pass_code: localStorage.getItem("__THINK_CREATE_PASS_CODE"),
  //         filename: name,
  //       },
  //     }),
  //   {
  //     manual: true,
  //     onData({ url }) {
  //       console.log({ url });
  //     },
  //   }
  // );

  return (
    <div>
      <input type="file" onChange={handleUploadFile} />
      <div>
        {names.map((name) => (
          <div key={name} className="text-dark-100">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upload;
