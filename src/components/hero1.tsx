import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "cn";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Image {
  src: string;
  alt: string;
  srcDark?: string;
  className?: string;
}
interface Button {
  text: string;
  url: string;
  icon?: React.ReactNode;
}
interface Buttons {
  primary?: Button;
  secondary?: Button;
}
interface Badge {
  text: string;
  announcement?: string;
  url?: string;
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  className?: string;
}

interface HeroBasicProps {
  badge?: Badge;
  heading: string;
  description: string;
  buttons?: Buttons;
  image: Image;
  className?: string;
}

interface Hero1Props extends HeroBasicProps {}
type Props = Partial<Hero1Props>;

const defaultProps: Hero1Props = {
  badge: {
    text: "Now in Beta",
    announcement: "Check out our latest updates",
  },
  heading: "The CRM platform for modern product teams.",
  description:
    "An open-source project management platform built for modern product teams. Plan, track, and ship with confidence.",
  buttons: {
    primary: { text: "Get started", url: "#" },
    secondary: { text: "Learn more", url: "#" },
  },
  image: {
    src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/saas-details/saas-detail-1-16x9.png",
    alt: "Product dashboard",
  },
};

const Hero1 = (props: Props) => {
  const { badge, heading, description, buttons, image, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant={badge.variant ?? "outline"} className={badge.className}>
                {badge.text}
                <ArrowUpRight className="size-4" />
              </Badge>
            )}
            <h1 className="max-w-xl text-2xl font-semibold tracking-tight text-pretty md:text-3xl lg:text-4xl">
              {heading}
            </h1>
            <p className="max-w-5xl text-balance text-muted-foreground lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons?.primary && (
                <Button size="lg" className="w-full sm:w-auto" render={<a href={buttons.primary.url} />} nativeButton={false}>{buttons.primary.text}<ArrowRight className="size-4" /></Button>
              )}
              {buttons?.secondary && (
                <Button variant="outline" size="lg" className="w-full sm:w-auto" render={<a href={buttons.secondary.url} />} nativeButton={false}>{buttons.secondary.text}</Button>
              )}
            </div>
          </div>
          {image.srcDark ? (
            <>
              <img
                src={image.src}
                alt={image.alt}
                className={cn("aspect-video w-full rounded-md border border-border object-contain object-top dark:hidden", image.className)}
              />
              <img
                src={image.srcDark}
                alt={image.alt}
                className={cn("hidden aspect-video w-full rounded-md border border-border object-contain object-top dark:block", image.className)}
              />
            </>
          ) : (
            <img
              src={image.src}
              alt={image.alt}
              className={cn("aspect-video w-full rounded-md border border-border object-contain object-top", image.className)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
