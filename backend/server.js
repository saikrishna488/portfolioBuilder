/*Copyright 2022 Google LLC 
  
Licensed under the Apache License, Version 2.0 (the "License"); 
you may not use this file except in compliance with the License. 
You may obtain a copy of the License at     https://www.apache.org/licenses/LICENSE-2.0 
Unless required by applicable law or agreed to in writing, software 
distributed under the License is distributed on an "AS IS" BASIS, 
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
See the License for the specific language governing permissions and 
limitations under the License.*/

const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const pdfParser = require('pdf-parse');
const port = 5000 || process.env.PORT;
require('dotenv').config();

const temp = require('./models/templates');

require('./config/db')();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(upload.single('file'));

app.use('/',require('./routes/user'));

app.listen(port, () => {
    console.log("server is running on port " + port);
})