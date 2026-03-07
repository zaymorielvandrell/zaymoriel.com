import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import * as React from "react";
import { cn } from "~/lib/utils";

const components: MDXComponents = {
  h1: (props: React.ComponentPropsWithRef<"h1">) => (
    <h1
      className="text-3xl font-semibold tracking-tight not-first:mt-6"
      {...props}
    />
  ),
  h2: (props: React.ComponentPropsWithRef<"h2">) => (
    <h2
      className="text-2xl font-semibold tracking-tight not-first:mt-6"
      {...props}
    />
  ),
  h3: (props: React.ComponentPropsWithRef<"h3">) => (
    <h3
      className="text-xl font-semibold tracking-tight not-first:mt-6"
      {...props}
    />
  ),
  h4: (props: React.ComponentPropsWithRef<"h4">) => (
    <h4
      className="text-lg font-semibold tracking-tight not-first:mt-6"
      {...props}
    />
  ),
  p: (props: React.ComponentPropsWithRef<"p">) => (
    <p className="leading-7 not-first:mt-4" {...props} />
  ),
  ul: (props: React.ComponentPropsWithRef<"ul">) => (
    <ul className="ml-6 list-disc not-first:mt-4" {...props} />
  ),
  ol: (props: React.ComponentPropsWithRef<"ol">) => (
    <ol className="ml-6 list-decimal not-first:mt-4" {...props} />
  ),
  li: (props: React.ComponentPropsWithRef<"li">) => (
    <li className="leading-7" {...props} />
  ),
  a: ({ href, ...props }: React.ComponentPropsWithRef<"a">) => {
    const className = cn(
      "underline decoration-primary/50 underline-offset-2 transition-all hover:decoration-primary"
    );

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
  strong: (props: React.ComponentPropsWithRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  code: (props: React.ComponentPropsWithRef<"code">) => (
    <code
      className="rounded bg-muted px-1 py-0.5 font-mono text-sm"
      {...props}
    />
  )
};

export const useMDXComponents = (): MDXComponents => {
  return components;
};
