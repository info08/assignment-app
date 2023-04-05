import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Header from "./Header";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import {data ,btnData} from './data';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Index() {
  const [open, setOpen] = React.useState(true);
  const [filterData, setFilterData] = React.useState(data);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [buttonFun, setButtonFun] = React.useState(btnData);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    //console.log("data files", data);
  });

  

  const SearchBox = (value) => {
    if (!value) {
      setSearchQuery(value);
      setFilterData(data)
    } else {
       let d = data.filter((d) => d.type.toLowerCase().includes(value) || d.title.toLowerCase().includes(value));
       setFilterData(d)
      setSearchQuery(value);
    }
  };

  const changeData = (type) =>{
    if(type==="All"){
      setButtonFun(btnData);
      setFilterData(data)
    }else{
      let tmpData=btnData.map((value)=>{ return value.type===type?{id:value.id, name: value.name ,type: value.type,active:true}:{id:value.id, name: value.name ,type: value.type,active:false}});
      setButtonFun(tmpData);
      let d = data.filter((d) => d.type===type);
      setFilterData(d)
    }
  }

  return (
    <div>
      <Header />
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className="btn-click-here"
      >
        Click Here !
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={"xl"}
        className="dialog-box"
      >
        <DialogContent dividers>
          {/* ----------Header Container ----------- */}
          <Grid container className="header">
            <Grid xs={2}>
              <Typography variant="h6">Select Your Source</Typography>
            </Grid>
            <Grid xs={8}>
            </Grid>
            <Grid xs={2}>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>

          {/* --------- Boday Container -------- */}
          <Grid container style={{ justifyContent: "end", marginTop: "10px" }}>
            <TextField
              id="standard-basic"
              label="&#128269; Search.."
              variant="outlined"
              onChange={(e) => SearchBox(e.target.value)}
              value={searchQuery}
            />
          </Grid>
          <Grid container className="body-container">
            <Grid xs={4} lg={4} md={4}>
              <div>
                <Button variant="contained" size="medium" className="btnTable">
                  <AddIcon /> &nbsp;Custom Tables
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  size="medium"
                  className="btnTable btnUpload"
                >
                  <DriveFolderUploadIcon /> &nbsp;Upload
                </Button>
              </div>
              {buttonFun.map((value) => {
                return (
                  <div>
                    <Button
                      variant={value.active && "contained"}
                      size="medium"
                      className={
                        value.active ? "btnTable btnActive" : "btnUnActive"
                      }
                      onClick={()=> changeData(value.type)}
                    >
                      {value.name}
                    </Button>
                  </div>
                );
              })}
            </Grid>
            <Grid xs={8} lg={8} md={8} container>
              {filterData.map((value, index) => {
                return (
                  <Card xs={3} lg={3} md={3} className="cardBox">
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{ marginBottom: "20px" }}
                      >
                        {value.type}
                      </Typography>
                      <CardMedia
                        sx={{
                          height: 20,
                          backgroundSize: "contain",
                          padding: "10px",
                        }}
                        image={value.urlImage}
                        title="green iguana"
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{ marginTop: "20px" }}
                      >
                        {value.title}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </Grid>
          </Grid>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
