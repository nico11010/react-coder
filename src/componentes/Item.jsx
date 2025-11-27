import { NavLink } from "react-router-dom";
import "../item.css";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

const Item = ({ prod }) => {
  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">{prod.name}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <div className="img-box">
        <img className="img-size" src={prod.img} alt={prod.name} />
      </div>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Precio:</Typography>
          <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
            ${prod.price}
          </Typography>
        </div>
        <Button
          as={NavLink}
          to={"/item/" + prod.id}
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          Detalles
        </Button>
      </CardContent>
    </Card>
  );
};

export default Item;
