import React from "react";
import {PortableTextComponents} from "@portabletext/react";
import { PortableText } from "@portabletext/react";
export default function CustomPortableText({
  value,
}: React.ComponentProps<typeof PortableText>) {
  const components:PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-4xl font-bold my-4">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl font-semibold my-3">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-medium my-2">{children}</h3>
      ),
      h4: ({ children }) => <h4 className="text-xl my-1">{children}</h4>,
      h5: ({ children }) => <h5 className="text-lg">{children}</h5>,
      h6: ({ children }) => <h6 className="text-base">{children}</h6>,
      normal: ({ children }) => <p className="my-2">{children}</p>,
    },
    types: {
      // Define a component for your custom hr block type
      horizontalRule: () => <hr className="border-gray-300 my-4" />,
    },
    hardBreak: () => <br />,
  };
  return <PortableText value={value} components={components}/>;
}
