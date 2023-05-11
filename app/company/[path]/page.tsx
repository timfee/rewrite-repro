export default async function Page({ params }: { params: { path: string } }) {
  return (
    <>
      <div>You have been successfully redirected!</div>
      <pre>{JSON.stringify(params, undefined, 2)}</pre>
    </>
  );
}
