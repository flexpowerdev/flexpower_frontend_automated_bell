/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Grid, useMediaQuery } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { Link } from "gatsby"
import { FiPhoneCall } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"

import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiRssFill,
  RiGithubFill,
  RiTelegramFill,
  RiPinterestFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiDribbbleFill,
  RiMediumFill,
  RiBehanceFill,
} from "react-icons/ri"
import { FaWordpress, FaVk } from "react-icons/fa"
import Icons from "../util/socialmedia.json"
import Contact from "../util/contact.json"
import { my_colors } from "../values/colors"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#212121",
  },
  container: {
    height: "calc(100vh/5)",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  containerFooter: {},
  containerInnerFooter: {
    justifyContent: "center",
    padding: "calc(5vw)",
  },
  iconFont: {
    color: "#8d8d8d",
    paddingRight: 10,
  },
  footerText: {
    fontSize: 13.5,
  },
}))

const orange = "#FE6600"
const MenuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/#about",
    title: "About",
  },
  {
    path: "/#products",
    title: "Products",
  },
  {
    path: "/#contact",
    title: "Contact",
  },
]
const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
const OtherFooter = () => {
  const listMenuItems = MenuItems.map((menuItem, index) => (
    <ListLink key={index} to={menuItem.path}>
      {menuItem.title}
    </ListLink>
  ))
  const sIcons = Icons.socialIcons.map((icons, index) => {
    return (
      <div key={"social icons" + index} style={{ color: "white" }}>
        {icons.icon === "facebook" ? (
          <Link to={icons.url} target="_blank">
            <RiFacebookBoxFill style={{ color: "white" }} />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "twitter" ? (
          <Link to={icons.url} target="_blank">
            <RiTwitterFill style={{ color: orange }} />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "linkedin" ? (
          <Link to={icons.url} target="_blank">
            <RiLinkedinBoxFill style={{ color: "white" }} />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "youtube" ? (
          <Link to={icons.url} target="_blank">
            <RiYoutubeFill style={{ color: orange }} />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "instagram" ? (
          <Link to={icons.url} target="_blank">
            <RiInstagramFill style={{ color: "white" }} />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "rss" ? (
          <Link to={icons.url} target="_blank">
            <RiRssFill style={{ color: orange }} />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "github" ? (
          <Link to={icons.url} target="_blank">
            <RiGithubFill style={{ color: orange }} />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "telegram" ? (
          <Link to={icons.url} target="_blank">
            <RiTelegramFill style={{ color: orange }} />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "pinterest" ? (
          <Link to={icons.url} target="_blank">
            <RiPinterestFill style={{ color: orange }} />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "snapchat" ? (
          <Link to={icons.url} target="_blank">
            <RiSnapchatFill style={{ color: orange }} />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "skype" ? (
          <Link to={icons.url} target="_blank">
            <RiSkypeFill style={{ color: orange }} />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "wordpress" ? (
          <Link to={icons.url} target="_blank">
            <FaWordpress />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "dribbble" ? (
          <Link to={icons.url} target="_blank">
            <RiDribbbleFill style={{ color: orange }} />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "medium" ? (
          <Link to={icons.url} target="_blank">
            <RiMediumFill style={{ color: orange }} />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "behance" ? (
          <Link to={icons.url} target="_blank">
            <RiBehanceFill style={{ color: orange }} />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "vk" ? (
          <Link to={icons.url} target="_blank">
            <FaVk />
          </Link>
        ) : (
          ""
        )}
      </div>
    )
  })
  const classes = useStyles()
  const preventDefault = () => {}
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <div id="contact" className={classes.root}>
      <Grid container className={classes.containerFooter}>
        <Grid
          container
          className={classes.containerInnerFooter}
          direction="column"
          item
          xs="12"
          sm="5"
        >
          <img
            src={
              "https://res.cloudinary.com/de78mkkoo/image/upload/v1620892355/logo/2021-05-13_10_50_42-Untitled-2_t3jsw7.png"
            }
            alt="logo"
            style={{
              objectFit: "contain",

              width: `${matches ? "50%" : "40%"}`,
            }}
          />
          <Typography
            variant="body1"
            component="p"
            className={classes.footerText}
            style={{ color: "#8d8d8d", paddingTop: "2rem" }}
          >
            At Flexpower Automation & Controls we are heavily focused on
            producing high quality, flexible, and reliable solutions for our
            customers.
          </Typography>
          <div
            style={{
              display: "flex",
              width: "100%",
              marginTop: "2rem",
              alignContent: "center",
            }}
          >
            {sIcons}
          </div>
          <Typography
            variant="body1"
            component="p"
            className={classes.footerText}
            style={{ color: "#8d8d8d", paddingTop: "2rem" }}
          >
            Unit 91,Alpha Center,Mombasa Road
            <br></br>
            P.O Box 61094-00200.Nairobi
          </Typography>
        </Grid>
        <Grid
          container
          className={classes.containerInnerFooter}
          direction="column"
          item
          xs="12"
          sm="3"
        >
          <Typography
            variant="body1"
            component="p"
            className={classes.footerText}
            style={{ color: "#ffffff" }}
          >
            <strong>USEFUL LINKS</strong>
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.footerText}
            style={{ color: "#8d8d8d", paddingTop: "1rem" }}
          >
            <Link
              style={{ color: "#8d8d8d", textDecoration: "none" }}
              to="/"
              onClick={preventDefault}
            >
              Home
            </Link>
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.footerText}
            style={{ color: "#8d8d8d", paddingTop: "1rem" }}
          >
            <Link
              style={{ color: "#8d8d8d", textDecoration: "none" }}
              to="/#products"
              onClick={preventDefault}
            >
              Products
            </Link>
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.footerText}
            style={{ color: "#8d8d8d", paddingTop: "1rem" }}
          >
            <Link
              style={{ color: "#8d8d8d", textDecoration: "none" }}
              to="/#about"
              onClick={preventDefault}
            >
              About Us
            </Link>
          </Typography>
        </Grid>
        <Grid
          item
          xs="12"
          sm="12"
          md="6"
          lg="4"
          className={classes.containerInnerFooter}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a
              href={`tel:${Contact.phonenumber}`}
              className="button"
              sx={{
                variant: "variants.button",
              }}
              style={{
                margin: "1rem",
                background: my_colors.secondary_color,
                color: "white",
              }}
            >
              {`call us : ${Contact.phonenumber}`}
              <span className="icon -right">
                <FiPhoneCall />
              </span>
            </a>
            <a
              href={`mailto:${Contact.email}`}
              className="button"
              sx={{
                variant: "variants.button",
              }}
              style={{
                margin: "1rem",
                padding: "1rem",
                background: my_colors.primary_color,
                color: "white",
              }}
            >
              {`email us : ${Contact.email}`}
              <span className="icon -right">
                <HiOutlineMail />
              </span>
            </a>
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.containerInnerFooter}>
        <Grid
          style={{ color: "#8d8d8d", textDecoration: "none" }}
          item
          xs="12"
          sm="9"
        >
          © 2021 Flexpower Automation & Controls, Ltd
        </Grid>
        <Grid container direction="row" item xs="12" sm="3">
          <Typography
            variant="body1"
            component="p"
            className={classes.footerText}
            style={{ color: "#8d8d8d", paddingTop: "1rem" }}
          >
            <Link
              style={{ color: "#8d8d8d", textDecoration: "none" }}
              href="#"
              onClick={preventDefault}
            >
              Privacy Policy .
            </Link>
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.footerText}
            style={{ color: "#8d8d8d", paddingTop: "1rem" }}
          >
            <Link
              style={{ color: "#8d8d8d", textDecoration: "none" }}
              href="#"
              onClick={preventDefault}
            >
              Terms Of use
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default OtherFooter
