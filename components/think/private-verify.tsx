import { useRequestData } from "@/hooks/use-request";
import PassCode from "../pass-code";
import $http from "@/utils/request";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const InternalPrivateVerifyThinkCard: React.FC = () => {
  const router = useRouter();
  const [isWrongPass, setWrongPass] = useState<boolean>(false);
  const { run, loading } = useRequestData(
    (pass: string) =>
      $http.post<{ isOK: boolean }>("think/access-private", {
        pass,
      }),
    {
      manual: true,
      onData({ isOK }) {
        if (isOK) {
          window.location.reload();
          return;
        }
        setWrongPass(true);
      },
      onError({ error, root }) {
        console.error(root || error);
        setWrongPass(true);
      },
    }
  );

  return (
    <div className="w-full px-5 border border-gray-200 bg-white shadow-sm">
      <div className="py-5 border border-x-0 border-t-0 border-gray-200 font-writer">
        to access private mode :&gt;, you need to input the pass-code
      </div>
      <div className="py-5">
        <div className="flex gap-2 mb-3 items-center">
          <PassCode
            length={6}
            className="font-ubuntu"
            onFullFilled={run}
            disabled={loading}
            inputClassName="text-xl"
          />
          {isWrongPass ? <span className="text-love-400">wrong!</span> : ""}
        </div>
        <div className="font-ubuntu text-gray-400">
          if you forgot your pass-code, click{" "}
          <Link
            href="/config#reset-pass-code"
            className="underline text-gray-500"
          >
            here
          </Link>
          !
        </div>
      </div>
    </div>
  );
};

export default InternalPrivateVerifyThinkCard;
