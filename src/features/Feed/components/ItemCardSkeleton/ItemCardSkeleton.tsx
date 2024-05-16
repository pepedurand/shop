import { Skeleton } from "antd";
import { motion } from "framer-motion";
import { BuyButton } from "../BuyButton";

export function ItemCardSkeleton() {
  const minFeedItems = new Array(8).fill(0);

  return minFeedItems.map((item, index) => {
    return (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        style={{ width: "240px" }}
      >
        <div
          className="centred"
          style={{
            borderRadius: "8px 8px 0 0",
            boxShadow: "0px 2px 8px 0px #00000022",
            flexDirection: "column",
            padding: "12px",
            height: "260px",
            gap: "12px",
          }}
        >
          <Skeleton.Image active />
          <Skeleton.Input active />
          <Skeleton.Input active />
          <Skeleton.Input active />
        </div>
        <BuyButton onClick={() => console.log("oi")} />
      </motion.div>
    );
  });
}
