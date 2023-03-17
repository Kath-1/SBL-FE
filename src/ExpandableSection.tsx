import { ReactNode, useState } from "react";

type ExtandableSectionProps = {
  title: string;
  children: ReactNode;
  expandedInitially: boolean;
};

const ExpandableSection = ({
  title,
  children,
  expandedInitially,
}: ExtandableSectionProps) => {
  const [expanded, setExpanded] = useState(expandedInitially);
  return (
    <section className="mt-4 bg-slate-50/50 rounded-sm p-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left flex items-center"
      >
        <h3 className="text-lg mr-2">{title}</h3>
        {expanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
      </button>
      {expanded ? <div className="mt-2">{children}</div> : null}
    </section>
  );
};

export default ExpandableSection;
