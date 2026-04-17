export const metadata = {
  title: "Server Streaming in Next.js",
};

export default function StreamingConcept() {
  return (
    <article className="prose prose-slate max-w-none">

      <h1 className="text-2xl font-bold mb-3">
        Server Streaming
      </h1>

      <p className="text-gray-600 mb-4">
        Streaming sends parts of the UI to the browser as they are ready.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Definition
      </h2>
      <p className="text-gray-600 mb-6">
        Streaming allows the server to send HTML chunks progressively instead
        of waiting for the entire page to finish rendering.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Why We Use
      </h2>
      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Improve perceived performance</li>
        <li>Reduce waiting time</li>
      </ul>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        When To Use
      </h2>
      <p className="text-gray-600 mb-6">
        When parts of the page load at different speeds.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Real-World Example
      </h2>
      <p className="text-gray-600 mb-6">
        E-commerce site loads product list first,
        reviews load later.
      </p>

      <h2 className="text-blue-600 border-l-4 border-blue-600 pl-4">
        Interview Tip
      </h2>
      <p className="text-gray-600">
        Streaming improves UX by progressively sending rendered HTML.
      </p>

    </article>
  );
}