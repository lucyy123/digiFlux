import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = {
  cardDetails: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
};

const SingleCard = ({ cardDetails }: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={cardDetails.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardDetails.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {cardDetails.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Rs.{cardDetails.price}</Button>
        <Button size="small"> rating :{cardDetails.rating.count}</Button>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
