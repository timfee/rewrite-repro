import { notFound, redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams || !searchParams.path) {
    return (
      <div className="m-12">
        The <code>./page</code> entry point was hit without any{" "}
        <code>searchParams</code>; not redirecting. Try visiting{" "}
        <a href="/test/123" className="text-blue-500 underline">
          /test/123
        </a>{" "}
        instead.
      </div>
    );
  } else {
    const path = (
      Array.isArray(searchParams.path)
        ? searchParams.path.join("/")
        : searchParams.path
    ).replaceAll("/", "-");

    console.log(`Rewriting ${searchParams.path} --> ${path}`);
    redirect(`/company/${path}`);
  }
}
