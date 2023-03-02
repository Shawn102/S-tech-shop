import React, { useEffect, useState, useRef } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import axios from "axios";
import { Divider, Skeleton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { ListItemCategorySkeleton } from "./Skeleton";

const MaterialUi = ({ setOnClickForCategory }) => {
  const [isLoading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  //   fatching the category data
  const FetchAllCategory = async () => {
    setLoading(true);
    return axios
      .get("/findallcategory")
      .then((res) => {
        setCategory([
          "all",
          ...new Set(
            res.data.map((ct) => {
              return ct;
            })
          ),
        ]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    FetchAllCategory();
  }, []);
  console.log(category);
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        paddingBottom: "0px",
        margin: 0,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <div className="subheader-flex">
          <ListSubheader
            sx={{ color: "crimson", marginLeft: "-5px", fontWeight: "bold" }}
            component="div"
            id="nested-list-subheader"
          >
            Select Category
          </ListSubheader>
          <div>
            {/* small screen category item drop down button */}
            <div className="hideOnBigScreen">
              <Button
                sx={{
                  background: "black",
                  color: "crimson",
                  borderRadius: "25px",
                  height: "40px",
                  border: "2px solid crimson",
                  boxShadow: "1px 0 10px 2px crimson",
                }}
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Button>
            </div>
            <div className="zindex-menuitem">
              {/* small screen drop down item category */}
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          {isLoading ? (
                            <Stack sx={{ width: 200 }}>
                              <Skeleton animation="wave" />
                            </Stack>
                          ) : (
                            category.map((categ, i) => {
                              return (
                                <MenuItem
                                  key={i}
                                  onClick={(e) => {
                                    handleClose(e);
                                    setOnClickForCategory(categ);
                                  }}
                                >
                                  <span className="text-material-category">
                                    {categ}
                                  </span>
                                </MenuItem>
                              );
                            })
                          )}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              {/* end of small screen drop down category list */}
            </div>
          </div>
        </div>
      }
    >
      <div className="underlineBigScreen"></div>
      {/* big screen left side show list category */}
      <div className="hideOnSmallScreen">
        {isLoading ? (
          <ListItemCategorySkeleton />
        ) : (
            category.map((allCategory, index) => {
              return (
                <div className="text-material-category" key={index}>
                  <ListItemButton
                    sx={{ background: "black" }}
                    onClick={() => setOnClickForCategory(allCategory)}
                  >
                    <ListItemText
                      disableTypography
                      sx={{ color: "crimson" }}
                      primary={allCategory}
                    />
                  </ListItemButton>
                  <Divider />
                </div>
              );
            })
          )}
      </div>
    </List>
  );
};

export default MaterialUi;
