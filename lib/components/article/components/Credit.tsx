export const Credit = (props: CreditProps) => {
  const { content, style = {} } = props;

  if (!content) {
    return null;
  }

  return (
    <cite
      className={["credit"].join(" ")}
      style={style}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

interface CreditProps {
  content: string;
  style?: any;
}
