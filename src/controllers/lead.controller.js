import { Lead } from "../models/lead.model.js"

// create Lead
export const createLead = async (req, res) => {
    try {
        const { name, email, phone, status } = req.body;
        if (!name || !email || !phone) {
            return res.status(400).json({ message: "Name, email and phone number are required" });
        }

        const lead = new Lead({ name, email, phone, status: status || "New" });
        await lead.save();

        res.status(201).json({ message: "Lead created successfully", lead });

    } catch (error) {

        console.error("Error creating lead:", error);
        res.status(500).json({ message: "Server error while creating lead" });

    }
}



// Get all leads
export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    if (!leads || leads.length === 0) {
  return res.status(404).json({ message: "No leads found" });
}

    console.log("leads",leads)
    res.status(200).json(leads);
  } catch (error) {
    console.error("Error fetching leads:", error);
    res.status(500).json({ message: "Server error while fetching leads" });
  }
};




// Get single lead by ID
export const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }
    res.status(200).json(lead);
  } catch (error) {
    console.error("Error fetching lead:", error);
    res.status(500).json({ message: "Server error while fetching lead" });
  }
};




// Update lead details name, email, phone,all
export const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }
    res.status(200).json({ message: "Lead updated successfully", lead });
  } catch (error) {
    console.error("Error updating lead:", error);
    res.status(500).json({ message: "Server error while updating lead" });
  }
};





// Update only the status of a lead
export const updateLeadStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.status(200).json({ message: "Lead status updated successfully", lead });
  } catch (error) {
    console.error("Error updating lead status:", error);
    res.status(500).json({ message: "Server error while updating status" });
  }
};

// Delete a lead
export const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }
    res.status(200).json({ message: "Lead deleted successfully" });
  } catch (error) {
    console.error("Error deleting lead:", error);
    res.status(500).json({ message: "Server error while deleting lead" });
  }
};