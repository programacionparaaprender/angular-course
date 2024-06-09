

//import express from 'express';
//import * as express from 'express';
const express = require('express');
import {Application} from "express";
import {getAllCourses} from './server/get-courses.route';
import {saveCourse} from './server/save-course.route';
import { getCourse } from "./server/get-course.route";
const cors = require('cors');

const bodyParser = require('body-parser');

const app: Application = express();

app.use(cors({origin: true}));
app.use(bodyParser.json());

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').put(saveCourse);

app.route('/api/courses/:id').get(getCourse);

const httpServer = app.listen(9000, () => {
    
    //console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()?.toString);
});



