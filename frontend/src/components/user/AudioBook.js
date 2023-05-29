import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import myimg1 from './images/audiobook.png';

const AudioBook = () => {


  const [selFile, setSelFile] = useState('');

  const [generateAudio, setGenerateAudio] = useState(null);

  const [downloadLink, setDownloadLink] = useState('');

  const uploadFileToGenerateAudio = async (e) => {
    const file = e.target.files[0];
    if(!file) return
    console.log(file);
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("file", file);
    console.log("uploading File ...");

    const res = await fetch("http://localhost:8000/generateaudiobook", {
      method: "POST",
      body: fd,
    })
    console.log(res.status);
    if(res.status === 200){
      const data = await res.json();

      console.log(data);
      setDownloadLink(data.url);
      setGenerateAudio(data);
    }
   
  };

  return (
    <div>
      <header className="bg-secondary">
        <div className="container">
          <p className="display-2 text-center fw-bold text-white ">Audiobook</p>

          <div class="header-text-box">
            <p class="text-center fw-bold">
              A text summarizer is an online tool that wraps up a text to a specified short length. It condenses a long article to main points. The need for text summarizers is
              increasing day by day, because of time constraints. People are looking for shortcut methods to learn ideas in lesser time. Even text summarizers are helping them to
              decide whether a book, a research paper, or an article is worth reading or not.
            </p>
          </div>
          <div>
            <img src={myimg1} className="img-fluid animate__animated animate__fadeInRight" width="340" height="256" alt="Photo" />
          </div>
        </div>
      </header>
      <div style={{ background: '#dff1ee' }}>
        <div className="container ">
          <div className="card">
            <div className="card-body">
              <p className="display-5 text-center fw bold animate__animated animate__fadeInBottomLeft">
                {' '}
                Audiobook <i class="fas fa-headphones"></i>
              </p>
              <hr />

              <TextField label="Paste or write about your topic then click on the generate button" multiline rows={12} size="100" variant="filled" fullWidth sx={{ m: 1 }} />
              <label className="btn btn-primary" htmlFor="upload-doc">
                <i class="fas fa-upload"></i>&nbsp; Upload
              </label>
              <input id="upload-doc" hidden accept="document/*" type="file" onChange={uploadFileToGenerateAudio} />
              
              {
                generateAudio && (
                  <div>
                    <h3>Generated Audio</h3>
                    <hr/>
                    <audio src={generateAudio.url} controls />
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioBook;
