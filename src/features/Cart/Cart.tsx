import { useCart } from "@/context";
import { Drawer } from "@mui/material";

export function Cart() {
  const {
    state: { isDrawerOpen },
    dispatch,
  } = useCart();

  function handleCloseDrawer() {
    dispatch({
      type: "TOGGLE_DRAWER",
      payload: { isOpen: !isDrawerOpen },
    });
  }

  return (
    <Drawer open={isDrawerOpen} onClose={handleCloseDrawer}>
      <>E ai</>
    </Drawer>
  );
}
