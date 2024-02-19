import Drawer from "rc-drawer";

function MainDrawer({ children, drawerOpen, closeDrawer }) {
  return (
    <Drawer
      open={drawerOpen}
      onClose={closeDrawer}
      handler={false}
      level={null}
      placement="right"
    >
      {children}
    </Drawer>
  );
}

export default MainDrawer;
