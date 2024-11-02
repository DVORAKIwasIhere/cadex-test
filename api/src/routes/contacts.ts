import { Router, Request, Response } from "express";
const { body, validationResult } = require("express-validator");
import { ContactData } from "../models/contactData";

const router = Router();
let contacts: ContactData[] = [];

const contactValidationRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("message").notEmpty().withMessage("message is required"),
  body("email").notEmpty().withMessage("Email is required"),
];

router.post("/", contactValidationRules, (req: any, res: any) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const contact: ContactData = {
    id: contacts.length + 1,
    name: req.body.name,
    message: req.body.message,
    email: req.body.email,
  };

  contacts.push(contact);
  res.status(201).json(contact);
});

router.get("/", (req: Request, res: Response) => {
  res.json(contacts);
});

router.get("/:id", (req: Request, res: Response) => {
  const task = contacts.find((c) => c.id === parseInt(req.params.id));

  if (!task) {
    res.status(404).send("Task not found");
  } else {
    res.json(task);
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  const index = contacts.findIndex((c) => c.id === parseInt(req.params.id));

  if (index === -1) {
    res.status(404).send("Task not found");
  } else {
    contacts.splice(index, 1);
    res.status(204).send();
  }
});

export default router;
