import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://ydelovvqqcyncppbgqnc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-05-20T17%3A01%3A58.071Z"></img>
    </Row>
  );
}

export default Cabins;
