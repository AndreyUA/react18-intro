import { useNavigate, useLocation } from "react-router-dom";

// Constants
import { ROUTES } from "../../constants/routes";

// Styled
import { Wrapper, List, ListItem, Button } from "./styled";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateHandler = (path: string) => navigate(path);

  return (
    <Wrapper>
      <List>
        {ROUTES.map((route) => (
          <ListItem key={route}>
            <Button
              isActiveRoute={location.pathname === route}
              onClick={() => navigateHandler(route)}
            >
              go to "{route}" page
            </Button>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default SideBar;
