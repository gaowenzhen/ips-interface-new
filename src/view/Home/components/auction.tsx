import { useEffect, useState } from "react";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

import iconds from "../../../asstes/images/vicond.png";
import Vector2 from "../../../asstes/images/Vector2.png";
import prold from "../../../asstes/images/prold.png";
import Component43 from "../../../asstes/images/Component43.png";
import image3 from "../../../asstes/images/image3.png";
import Component240 from "../../../asstes/images/Component240.png";
import reExport from "../../../asstes/images/export.png";


export default function Auction() {
  
  useEffect(() => {
    console.dir(67555);

    return () => {
      console.dir(111);
    };
  }, []);

  return (
    <div className="auctionbox">
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <div className="l">left</div>
        </Grid>
        <Grid item xs={6}>
          <div className="r">
            <div>
              <span>
                <img className="imgi" src={iconds} />
              </span>
              <span className="minit">Randomly selected Space NFT</span>
            </div>
            <div className="b">COORD 4058</div>

            <Grid container spacing={5}>
              <Grid item xs={6}>
                <div className="subl">
                  <div>
                    <span>
                      <img className="imgi" src={Vector2} />
                    </span>
                    <span className="minit">Current bid</span>
                  </div>
                  <div className="subprvec">
                    <span>
                      <img className="imgi" src={Component43} />
                    </span>
                    <span className="b4">545.64</span>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="subl">
                  <div>
                    <span>
                      <img className="imgi" src={prold} />
                    </span>
                    <span className="minit">The number of visiting</span>
                  </div>
                  <div className="subprvec">
                    <span className="b4">435522.64</span>
                  </div>
                </div>
              </Grid>
            </Grid>
            <div className="mb10px">
              <span>
                <img className="imgi" src={iconds} />
              </span>
              <span className="minit">Help mint the MNS</span>
            </div>
            <div className="inputbox">
              <span>
                <FormControl size="small" variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    startAdornment={
                      <InputAdornment position="end">
                        <img className="imgi" src={Component240} />
                      </InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                    labelWidth={0}
                  />
                </FormControl>
              </span>
              <span className="ml20">
                <Button variant="contained" color="primary">
                  Place bid
                </Button>
              </span>
            </div>

            <div className="bootmbox">
              <Grid container spacing={5}>
                <Grid item xs={4}>
                  <span>
                    <img className="imgi" src={image3} />
                  </span>
                  <span>4564....676</span>
                </Grid>
                <Grid item xs={4}>
                  <span>
                    <img className="imgi" src={Component240} />
                  </span>
                  <span>1032.12</span>
                </Grid>
                <Grid item xs={4}>
                  <span className="minit4 txtbolink">View all bids</span>
                  <span>
                    <img className="imgi" src={reExport} />
                  </span>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
