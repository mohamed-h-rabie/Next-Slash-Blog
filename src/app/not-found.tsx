import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-3xl sm:text-5xl font-bold text-center">
        Page Not Found
      </h1>
      <p className="text-1xl sm:text-2xl mt-4 text-center mb-5">
        Could not find requested resource
      </p>

      <Button variant="destructive">
        <Link href="/" replace={true}>
          Go Home
        </Link>
      </Button>
    </div>
  );
}
