import { useEffect, useState } from "react";
import axios from "axios";
import CustomPizza from "../Custom Pizza/CustomPizza";
import MenuBar from "./MenuBar";
import MenuCard from "./MenuCard";
import styles from "./Menu.module.css";

export default function Menu() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/menu");

        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className={styles["menu-container"]}>
      <CustomPizza />
      <MenuBar />
      <div className={styles["card-container"]}>
        {data.map((menuItem) => {
          return <MenuCard key={menuItem.id} menuItem={menuItem} />;
        })}
      </div>
    </div>
  );
}
