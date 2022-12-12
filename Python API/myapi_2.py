# path parameters
# Query parameters
from fastapi import FastAPI,Path
from typing import Optional
from pydantic import BaseModel

app = FastAPI()

students ={
    1: {
        "name":"Sufiya",
        "age":"20",
        "year":"b.tech final year"
    }
}

# for create new object in the data

class Student(BaseModel):
    name : str
    age : int
    year : str

#for update data 

class UpdateStudent(BaseModel):
    name: Optional[str]=None
    age: Optional[int]=None
    year: Optional[str]=None
    


@app.get("/")  # / is represented home page
def index():
    return{"name": "first data"}

# path parameters

@app.get("/get-student/{student_id}") #student_id is a parameter
def get_student(student_id: int=Path(None, description="The ID of the student you want to view", gt=0 ,lt=3)):
    return students[student_id]

# query parameters
#  example

#google.co/results?search=python (search=Python is a query parameters)
 
@app.get("/get-by-name")
# def get_student(name : str):# if str =none then   name is not required 
# def get_student(name : Optional[str]=None):#default
# def get_student(name : Optional[str]=None,test:int): it shows error because we can not use optional parameter before required parameters
def get_student(*,name : Optional[str]=None,test:int): #now it works any condition
    for student_id in students:
        if students[student_id]['name']==name:
            return students[student_id]
    return{'data':'Not Found'}


#combining path and query parameters
@app.get("/get-by-name/{student_id}")
def get_student(*,student_id: int ,name : Optional[str]=None,test:int): 
    for student_id in students:
        if students[student_id]['name']==name:
            return students[student_id]
    return{'data':'Not Found'}

# request body and the post methods

@app.post("/create-student/{student_id}")
def create_student(student_id :int , student : Student):
    if student_id in student:
        return {"Error":"Student exists"}

    students[student_id]=student
    return students[student_id] 

# Put method (it update somthing that already exists)

@app.put("/update-student/{student_id}")
def update_student(student_id: int, student:UpdateStudent ):
    if student_id not in students:
        return{"Error":"Student does not exist"}

    # students[student_id]=student

    if student.name != None:
        students[student_id].name=student.name 

    if student.age != None:
        students[student_id].age=student.age 

    if student.year!= None:
        students[student_id].year=student.year

    return students[student_id]

#delete method (it help to delete the data from data base)

@app.delete("/delete-student/{student_id}")
def delete_student(student_id :int):
    if student_id not in students:
        return{"Error":"Student does not exist"}

    del students[student_id]
    return{"message":"Student delete successfully"}
