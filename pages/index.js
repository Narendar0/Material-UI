import styles from "../styles/Home.module.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function Home() {
  return (
    <>
      <div className={styles["features-section"]}>
        <Container fixed>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              lg={6}
              className={styles["features-grid-section"]}
            >
              <p className={styles["features-top-head"]}>Features</p>
              <p className={styles["text-abt"]}>
                Top Features That Keep Us Ahed
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <List>
                <ListItem className={styles["features-list"]} disablePadding>
                  <ListItemIcon>
                    <div className={styles.round}>
                      <LightbulbOutlinedIcon />
                    </div>
                  </ListItemIcon>
                  <ListItemText
                    className={styles["features-in-heading"]}
                    primary="Developer Friendly Design"
                    secondary=" Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s"
                  />
                </ListItem>

                <ListItem className={styles["features-list"]} disablePadding>
                  <ListItemIcon>
                    <div className={styles.round}>
                      <LightbulbOutlinedIcon />
                    </div>
                  </ListItemIcon>
                  <ListItemText
                    className={styles["features-in-heading"]}
                    primary="Developer Friendly Design"
                    secondary=" Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <img
                className={styles["features-img"]}
                src={"/logo/feature2-img.png"}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles["latest-section"]}>
        <Container fixed>
          <p className={styles["features-top-head"]}>Latest News</p>
          <p className={styles["text-abt"]}>From Our Blog</p>
          <p className="mb-30">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
          <Grid
            container
            spacing={2}
            className={`${styles["latest-grid"]} mb-30`}
          >
            <Grid item xs={12} sm={12} lg={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="/logo/blog-img1.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Febrauary 04, 2020
                  </Typography>
                  <Typography gutterBottom component="div">
                    Lets make the begging to mankind to save the world again
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="/logo/blog-img2.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Febrauary 04, 2020
                  </Typography>
                  <Typography gutterBottom component="div">
                    Lets make the begging to mankind to save the world again
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="/logo/blog-img3.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Febrauary 04, 2020
                  </Typography>
                  <Typography gutterBottom component="div">
                    Lets make the begging to mankind to save the world again
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles["contact-section"]}>
        <Container fixed>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <p className={styles["features-top-head"]}>Contact Us</p>
              <p className={styles["text-abt"]}>Stay Connected </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <List>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Address"
                    className={styles["contact-bold"]}
                  />
                  <ListItemText
                    className={styles["contact-min-bold"]}
                    secondary=" 20,Bhardeshi,Amin Road"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Phone"
                    className={styles["contact-bold"]}
                  />
                  <ListItemText
                    className={styles["contact-min-bold"]}
                    secondary="+123 456 7890"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Email"
                    className={styles["contact-bold"]}
                  />
                  <ListItemText
                    className={styles["contact-min-bold"]}
                    secondary="abc@abcgmail.com"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <div className={`${styles["contact-form"]} mt-30`}>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                >
                  <TextField
                    id="filled-required"
                    label="Your Name"
                    variant="filled"
                  />
                  <TextField
                    id="filled-required"
                    label="Your Email"
                    variant="filled"
                  />
                  <TextField
                    id="filled-required"
                    label="Your Phone"
                    variant="filled"
                  />
                  <TextField
                    id="filled-required"
                    label="Subject"
                    variant="filled"
                  />
                </Box>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "52ch" },
                  }}
                >
                  <TextField
                    id="outlined-multiline-static"
                    label="Write Your Message"
                    multiline
                    rows={6}
                    variant="filled"
                  />
                </Box>
              </div>
              <Button
                variant="contained"
                component="label"
                sx={{ mr: 1, borderRadius: 28 }}
                className={styles["contact-btn"]}
              >
                Submit Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={`${styles["banner-section"]} mb-20 mt-20`}>
        <Container fixed>
          <Grid className={styles["banner-in-section"]} container spacing={2}>
            <Grid item xs={8} sm={8} lg={8}>
              <p className={styles["banner-text"]}>
                Buy 2050 & Stay Ahed Of Time
              </p>
              <p>Lorem Ipsum is simply Keep Us Ahed</p>
            </Grid>
            <Grid item xs={8} sm={8} lg={4}>
              <Button
                variant="contained"
                component="label"
                sx={{ mr: 1, borderRadius: 28 }}
                className={styles["banner-btn"]}
              >
                Buy Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={`${styles["patners-section"]} mb-30 mt-30`}>
        <Container fixed>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <p className={`${styles["features-top-head"]} mt-30`}>Patners</p>
              <p className={`${styles["text-abt"]} mt-30`}>Trusted By Brands</p>
              <p className="mt-50">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </Grid>
            <Grid xs={12} sm={12} lg={6}>
              <Grid container spacing={2}>
                <Grid item xs={4} sm={4} lg={4}>
                  <img
                    className={styles["barnd-img"]}
                    src={"/logo/brand-img1.png"}
                  />
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                  <img
                    className={styles["barnd-img"]}
                    src={"/logo/brand-img2.png"}
                  />
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                  <img
                    className={styles["barnd-img"]}
                    src={"/logo/brand-img3.png"}
                  />
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                  <img
                    className={styles["barnd-img"]}
                    src={"/logo/brand-img4.png"}
                  />
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                  <img
                    className={styles["barnd-img"]}
                    src={"/logo/brand-img5.png"}
                  />
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                  <img
                    className={styles["barnd-img"]}
                    src={"/logo/brand-img6.png"}
                  />
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                  <img
                    className={styles["barnd-img"]}
                    src={"/logo/brand-img7.png"}
                  />
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                  <img
                    className={styles["barnd-img"]}
                    src={"/logo/brand-img8.png"}
                  />
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                  <img
                    className={styles["barnd-img"]}
                    src={"/logo/brand-img9.png"}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* <div className={`${styles["team-section"]}`}>
        <Container fixed>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <p className={`${styles["features-top-head"]} mt-30`}>
                Team Members
              </p>
              <p className={`${styles["text-abt"]} mt-30`}>Amazing Team</p>
              <p className="mt-50">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>

              <div className={styles["cards-absolute"]}>
                <img
                  className={styles["team1-img"]}
                  src={"/logo/team-img3.jpg"}
                />
                <p className={styles["team-text-vertical"]}>Johnson Deo</p>
              </div>
            </Grid>
            <Grid item lg={6}>
              <Grid container spacing={2}>
                <Grid item lg={6}>
                  <div className={styles["cards-absolute-1"]}>
                    <img
                      className={styles["team2-img"]}
                      src={"/logo/team-img1.jpg"}
                    />
                    <p className={styles["team-text-vertical-1"]}>
                      Johnson Deo
                    </p>
                  </div>
                </Grid>
                <Grid item lg={6}>
                  <div>
                    <img
                      className={styles["team3-img"]}
                      src={"/logo/team-img2.jpg"}
                    />
                    <p>Johnson Deo</p>
                  </div>
                </Grid>
                <Grid item lg={6}>
                  <div>
                    <img
                      className={styles["team4-img"]}
                      src={"/logo/team-img4.jpg"}
                    />
                    <p>Johnson Deo</p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div> */}
      <div className={`${styles["footer-section"]} mb-30`}>
        <Container fixed>
          <Grid container spacing={2}>
            <Grid
              item
              lg={4}
              xs={12}
              sm={12}
              md={3}
              className={styles["footer-grid-section"]}
            >
              <p className={styles["footer-head"]}>Address</p>
              <ListItemText
                className={styles["footer-min-bold"]}
                secondary="20,Bhardeshi,Amin Road"
              />
              <ListItemText
                className={styles["footer-min-bold"]}
                secondary="abc@abcgmail.com"
              />
              <ListItemText
                className={styles["footer-min-bold"]}
                secondary="+1 234 567 890"
              />
            </Grid>
            <Grid
              item
              lg={2}
              xs={12}
              sm={12}
              md={3}
              className={styles["footer-grid-section"]}
            >
              <p className={styles["footer-head"]}>Links</p>
              <ListItemText
                className={styles["footer-min-bold"]}
                secondary="About Us"
              />
              <ListItemText
                className={styles["footer-min-bold"]}
                secondary="Service"
              />
              <ListItemText
                className={styles["footer-min-bold"]}
                secondary="Customer"
              />
            </Grid>
            <Grid
              item
              lg={2}
              xs={12}
              sm={12}
              md={3}
              className={styles["footer-grid-section"]}
            >
              <p className={styles["footer-head"]}>Help</p>
              <ListItemText
                className={styles["footer-min-bold"]}
                secondary="About Us"
              />
              <ListItemText
                className={styles["footer-min-bold"]}
                secondary="Service"
              />
              <ListItemText
                className={styles["footer-min-bold"]}
                secondary="Customer"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={4}
              md={3}
              className={styles["footer-grid-section"]}
            >
              <p className={styles["footer-head"]}>
                subscribe to our newsletter
              </p>
              <ListItemText
                className={styles["footer-min-bold"]}
                secondary="About Us"
              />
              <ListItemText
                className={styles["footer-min-bold"]}
                secondary="Service"
              />
              <ListItemText
                className={styles["footer-min-bold"]}
                secondary="Customer"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
