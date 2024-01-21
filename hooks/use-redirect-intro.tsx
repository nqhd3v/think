import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const __REDIRECT_INTRO_PAGE = "REDIRECT-INTRO-PAGE";

export const useRedirectIntro = () => {
  const router = useRouter();

  useEffect(() => {
    const isRedirected = localStorage.getItem(__REDIRECT_INTRO_PAGE);
    if (!isRedirected) {
      localStorage.setItem(__REDIRECT_INTRO_PAGE, "true");
      router.push("/intro");
    }
  }, []);
};
