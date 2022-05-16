const path = require("require");
const db = require("../../db/db.json");
const router = require("express").Router();
const { validateNote, createNote, filterId } = require("../../lib/notes");
