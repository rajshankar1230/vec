const mongoose = require("mongoose");
const Nproject = require("./models/Nproject.js");

// --- YOUR MONGODB ATLAS URI ---
const ATLAS_URI = "mongodb+srv://shankarraj00772002_db_user:YibTrKYpjdWBogSE@project.rovh20g.mongodb.net/?retryWrites=true&w=majority&appName=project";

async function main(){
    console.log("Connecting to MongoDB Atlas for International Projects...");
    await mongoose.connect(ATLAS_URI);
    console.log("Connection successful.");

    // *** THE FIX: Clear existing Nproject data before seeding to prevent duplicates ***
    await Nproject.deleteMany({});
    console.log("Existing Nproject data cleared.");

    let projects = [
        { SN : 1, Nameofproject : "Biodiversity Impact Assessment through Integrated Biodiversity Assessment Tools(IBAT)for 765 Kv D/C transmission line from Madhunaghat to Moheshkhali to Moheshkhali, Bangladesh.", Client: "Aurora Consultant Lid, Humayun Road, Mohammadpur,Dhaka-1207, Bangladesh", Projectproponent: "Power Grid company Bangladesh Limited (PGCBL)", Country: "Bangladesh", Status: "Completed" },
        { SN : 2, Nameofproject : "Calculation of Enteric fermentation Emission Factor (EF) of tier-2 methods and development of model for emissions in Livestock sector under Climate Change Project, funded by the United Nation Development Programme (UNDP) AND Global Enviroment Facility (GEF) and Implemented by the Food & Agriculture Research & Extension Institue (FARAEI), Minsitry of Environment , sold waste Management & Climate Change, Republic of Mauritius.", Client: "Deloitte India & Mauritius", Projectproponent: "Ministry of Envionment, sold waste Management & Climate change, Republic of Mauritius.", Country: "Mauritus(East Africa)", Status : "On going" },
        { SN : 3, Nameofproject : "Calculation of Enteric fermentation Emission Factor (EF) of tier-2 methods and development of model for emissions in Livestock sector under Climate Change Project, funded by the United Nation Development Programme (UNDP) AND Global Enviroment Facility (GEF) and Implemented by the Food & Agriculture Research & Extension Institue (FARAEI), Minsitry of Environment , sold waste Management & Climate Change, Rodriges(Island Country of East Africa).", Client: "Deloitte India & Rodriges", Projectproponent: "Ministry of Envionment, sold waste Management & Climate change, Republic of Mauritius.", Country: "Rodriges(East Africa)", Status : "On going" },
    ];
    
    await Nproject.insertMany(projects);
    console.log(`Successfully inserted ${projects.length} International Projects.`);
    mongoose.connection.close();
}

main().catch(err => console.error("International Project Seeding failed:", err));