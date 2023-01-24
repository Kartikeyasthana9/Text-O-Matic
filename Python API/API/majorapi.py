# import fastapi
from fastapi import FastAPI, Form, File, UploadFile
import summarization as smz
app = FastAPI()

# Create a route
@app.get("/")
def index():
    return {"data": {"api": "textomatic api", "version": "0.1", "author": "Sufiya ansari"}}

# Create a route that excepts files from form
@app.post("/files/")
async def create_file(file: bytes = File(...)):
    return {"file_size": len(file)}

# Create a route that excepts files from form
@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):
    return {"filename": file.filename}

# Create a route that excepts music files
@app.post("/uploadmusicfile/")
async def create_upload_music(file: UploadFile = File(...)):
    return {"filename": file.filename}

# create a api route that summarizes the text str 
@app.post("/textomatic/api/v1/summarize/text")
async def summarize_text(text: str = Form(...)):
    try:
        with open('temp.txt', 'w') as f:
            f.write(text)
        summary = smz.generate_summary('temp.txt')
        return {'summary': summary,
                'summary_length': len(summary),
                'status': 'success'}
    except Exception as e:
        return {'error': str(e), 'status': 'failed'}


# create an api route that summarizes the file after getting text from the file
@app.post("/textomatic/api/v1/summarize")
async def summarize_file(file: UploadFile = File(...)):
    try:
        summary = smz.generate_summary(file)
        return {'summary': summary, 
                'summary_length': len(summary),
                'status': 'success'}
    except Exception as e:
        return {'error': str(e), 'status': 'failed'}

    


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

