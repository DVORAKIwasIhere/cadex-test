type TextBlockProps = {
  title: string;
  description: string;
};

const TextBlock = ({ title, description }: TextBlockProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TextBlock;
