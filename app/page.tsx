import dynamic from "next/dynamic";
const Homepage = dynamic(() => import("@/components/Homepage"), { ssr: false });

export default function Page() {
  return <Homepage />;
}
