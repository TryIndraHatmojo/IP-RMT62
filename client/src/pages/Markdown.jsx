import ReactMarkdown from "react-markdown";

function Markdown({ markdownText }) {
  return (
    <section className="p-4 space-y-3">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-semibold" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-medium" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-base leading-relaxed" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="list-disc ml-6" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-bold text-gray-800" {...props} />
          ),
          em: ({ node, ...props }) => <em className="italic" {...props} />,
        }}
      >
        {markdownText}
      </ReactMarkdown>
    </section>
  );
}

export default Markdown;
