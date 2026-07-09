interface PageHeaderProps {
  title: string;
  description?: string;
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="mb-6">
      <h1 className="text-heading font-bold text-foreground">{title}</h1>
      {description && <p className="mt-1 text-body text-muted-foreground">{description}</p>}
    </div>
  );
};