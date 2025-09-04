import { Router } from "express";
import { createLead, deleteLead, getLeadById, getLeads, updateLead, updateLeadStatus } from "../controllers/lead.controller.js";

export const leadroute = Router();


leadroute.post("/", createLead);
leadroute.get("/", getLeads);
leadroute.get("/:id", getLeadById);
leadroute.put("/:id", updateLead);
leadroute.patch("/:id/status", updateLeadStatus); 
leadroute.delete("/:id", deleteLead);