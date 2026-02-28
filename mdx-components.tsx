import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentPropsWithRef } from "react";

const components: MDXComponents = {
  h1: (props: ComponentPropsWithRef<"h1">) => (
    <h1
      className="not-first:mt-6 font-semibold text-3xl tracking-tight"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithRef<"h2">) => (
    <h2
      className="not-first:mt-6 font-semibold text-2xl tracking-tight"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithRef<"h3">) => (
    <h3
      className="not-first:mt-6 font-semibold text-xl tracking-tight"
      {...props}
    />
  ),
  h4: (props: ComponentPropsWithRef<"h4">) => (
    <h4
      className="not-first:mt-6 font-semibold text-lg tracking-tight"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithRef<"p">) => (
    <p className="not-first:mt-4 leading-7" {...props} />
  ),
  ul: (props: ComponentPropsWithRef<"ul">) => (
    <ul className="space-y-1 not-first:mt-4 ml-6 list-disc" {...props} />
  ),
  ol: (props: ComponentPropsWithRef<"ol">) => (
    <ol className="space-y-1 not-first:mt-4 ml-6 list-decimal" {...props} />
  ),
  li: (props: ComponentPropsWithRef<"li">) => (
    <li className="leading-7" {...props} />
  ),
  a: ({ href, ...props }: ComponentPropsWithRef<"a">) => {
    const className =
      "decoration-primary/80 hover:decoration-primary underline underline-offset-2 transition-all";

    if (href?.startsWith("/")) {
      return <Link href={href} className={className} {...props} />;
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      />
    );
  },
  strong: (props: ComponentPropsWithRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  code: (props: ComponentPropsWithRef<"code">) => (
    <code
      className="bg-muted px-1 py-0.5 rounded font-mono text-sm"
      {...props}
    />
  ),
};

export const useMDXComponents = (): MDXComponents => {
  return components;
};
