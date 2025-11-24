import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-white rounded-lg p-6",
      bordered: "bg-white rounded-lg border border-gray-200 p-6",
      elevated: "bg-white rounded-lg shadow-lg p-6",
    };

    return (
      <div
        ref={ref}
        className={`${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`mb-4 ${className}`}
        {...props}
      />
    );
  }
);

CardHeader.displayName = "CardHeader";

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
        {...props}
      />
    );
  }
);

CardTitle.displayName = "CardTitle";

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${className}`}
        {...props}
      />
    );
  }
);

CardContent.displayName = "CardContent";
