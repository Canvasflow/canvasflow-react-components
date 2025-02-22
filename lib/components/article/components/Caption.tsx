export const Caption = (props: CaptionProps) => {
  const { content, style = {} } = props;

  if (!content) {
    return null;
  }

  return (
    <figcaption className="imagecaption" style={style}>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </figcaption>
  );
};

export default Caption;

interface CaptionProps {
  content: string;
  style?: any;
}
