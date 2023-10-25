import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { Nav, Avatar } from "@douyinfe/semi-ui";
import { IconSemiLogo, IconHelpCircle, IconBell } from "@douyinfe/semi-icons";

function Navbar() {
  return (
    <Nav
      mode="horizontal"
      header={{
        logo: (
          <div className={styles.navigationHeaderLogo}>
            <IconSemiLogo className={styles.semiIconsSemiLogo} />
          </div>
        ),
        text: "Helper M",
      }}
      footer={
        <div className={styles.dIV}>
          <IconHelpCircle size="large" className={styles.semiIconsHelpCircle} />
          <IconBell size="large" className={styles.semiIconsBell} />
          <Avatar
            size="small"
            src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg"
            color="blue"
            className={styles.avatar}
          >
            我
          </Avatar>
        </div>
      }
      className={styles.nav}
    >
      <Link to="/" style={{ textDecoration: "None" }}>
        <Nav.Item itemKey="Home" text="Home" />
      </Link>
      <Link to="/react" style={{ textDecoration: "None" }}>
        <Nav.Item itemKey="React" text="React" />
      </Link>
    </Nav>
  );
}

export default Navbar;
