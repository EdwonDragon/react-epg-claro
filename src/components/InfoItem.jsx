import Card from "react-bootstrap/Card";

export const Info = ({ data }) => {
  const imageClaro =
    "https://clarovideocdn7.clarovideo.net/pregeneracion/cms/apa/uat_531eed34tvfy7b73a818a234/clarovideo_home_logo.png?1668182622";
  return (
    <Card className="cardInfoOver">
      <Card.Body style={{ backgroundImage: `url(${data.image})` }}>
        <img src={imageClaro} alt="" />
        <br />
        <br />
        <Card.Title>
          <h1>{data.title}</h1>
          <h3>{data.init}</h3>
        </Card.Title>
        <Card.Text>
          <span className="h4">
            {data.sinceTime}
            {data.tillTime} {data.hora} {data.min}
          </span>
          <br />
          {data.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
