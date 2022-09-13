type TitleProps = {
  title: string;
};

export default function Title(props: TitleProps) {
  const { title } = props;
  return <h1 className="title">{title}</h1>;
}
