import React, {Component} from 'react'
import {DropzoneArea} from 'react-mui-dropzone'
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box
  } from "@mui/material";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  handleChange(files) {
    this.setState({
      files: files,
    });
  }

  handleSave(files) {
    //Saving files to state for further use and closing Modal.
    // this.setState({
    //   files: files,
    //   open: false,
    // });
  }

  render() {
    return (
        <Card elevation={1} sx={{ width: "100%", height: "100"}}>
            <Typography sx={{p:2, fontSize:18, fontWeight:500}}>Upload Files</Typography>
            <CardContent sx={{width:'100%',height: "100%"}}>
                <DropzoneArea
                    filesLimit={5}
                    showPreviewsInDropzone={true}
                    showFileNames={true}
                    showFileNamesInPreview={false}
                    maxFileSize={5000000}
                    // acceptedFiles={["image/jpeg", "image/png"]}
                    // showPreviews={true}
                    onChange={this.handleChange.bind(this)}
                />
            </CardContent>
            <CardActions>
                <Box
                    spacing={2}
                    sx={{ flexGrow: 1, spacing: 2, mt: 2, pb: 3, float: "right" }}
                  >
                    <Button sx={{ minWidth: 100, ml: 1 }} variant="contained">
                    Upload
                    </Button>
                    <Button sx={{ minWidth: 100, ml: 1 }} variant="outlined">
                    Cancel
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
  }
}

export default FileUpload;