const mongoose = require("mongoose");
// Ensure these paths match your model file locations
const Project = require("./models/project.js");
const Nproject = require("./models/Nproject.js");

async function main(){
    console.log("Connecting to MongoDB...");
    await mongoose.connect("mongodb://127.0.0.1:27017/project");
    console.log("Connection successful. Dropping existing collections...");

    // Clear previous data for a fresh start
    await Project.deleteMany({});
    await Nproject.deleteMany({});
    console.log("Existing data cleared.");


    // Data for Project Model (Indian Projects)
    const indianProjects = [
        { SN: 1, Nameofproject: "Forest Diversion Proposal (FDP) of 132 kv D/C of Bahragoda-Dhalmugarh LiLO-1@Chhatrapur Transmission line", EPC: "TEEMS INDIA Chennai", Projectproponent: "JUSNL, Jharkhand", Status: "On going" },
        { SN: 2, Nameofproject: "Forest Diversion Proposal (FDP) of 132 kv D/C of Naudiha -Chhatrapur Transmission line", EPC: "TEEMS INDIA Chennai", Projectproponent: "JUSNL, Jharkhand", Status: "On going" },
        { SN: 3, Nameofproject: "Forest Diversion Proposal (FDP) of 132 kv D/C of Nagar Utari-Garhwa Transmission line", EPC: "TEEMS INDIA Chennai", Projectproponent: "JUSNL, Jharkhand", Status: "On going" },
        { SN: 4, Nameofproject: "Forest Diversion Proposal (FDP) of 132 kv D/C of Surda-Bahragoda Transmission line", EPC: "TEEMS INDIA Chennai", Projectproponent: "JUSNL, Jharkhand", Status: "On going" },
        { SN: 5, Nameofproject: "Forest Diversion Proposal (FDP) of 132 kv D/C of Surda-jadugoda Transmission line", EPC: "TEEMS INDIA Chennai", Projectproponent: "JUSNL, Jharkhand", Status: "On going" },
        { SN: 6, Nameofproject: "Forest Diversion Proposal (FDP) of 132 kv D/C of Dumka-Shikaripara Transmission line", EPC: "Reliance Elecrik, Gujarat", Projectproponent: "JUSNL, Jharkhand", Status: "On going" },
        { SN: 7, Nameofproject: "Forest Diversion Proposal (FDP) of 132 kv D/C of Amarapara-Godda Transmission line", EPC: "Reliance Elecrik, Gujarat", Projectproponent: "JUSNL, Jharkhand", Status: "On going" }, 
        { SN: 8, Nameofproject: "Forest Diversion Proposal (FDP) of 132 kv D/C of Amarapara-Pakur Transmission line", EPC: "Reliance Elecrik, Gujarat", Projectproponent: "JUSNL, Jharkhand", Status: "On going" }, 
        { SN: 9, Nameofproject: "Site Specific Wildlife Conservation & Management Plan (SSWLC&MP) of West Bokaro Collieries of Tata Steel LTD (West Bokaro Division", EPC: "Arpu Environtech PVT LTD, Jamshedpur", Projectproponent: "Tata Steel Ltd, Bokaro", Status: "Completed" }, 
        { SN: 10, Nameofproject: "Site Specific Wildlife Conservation & Management Plan for Conservation of corridors and tiger dispersal areas around Mandla North Coal Mines in Chhindwara district, Madhya Pradesh", EPC: "IEM,Ranchi", Projectproponent: "M/S Dalmia Cement (Bharat) Ltd,New Delhi-110001", Status: "Completed" }, 
        { SN: 11, Nameofproject: "Site Specific Wildlife Conservation & Management Plan for Railway Redevelopment construction Project, Ranchi, Jharkhand", EPC: "Ram Kripal Singh Construction Pvt Ltd, Ranchi", Projectproponent: "Southeastern Railway Ranchi, Jharkhand", Status: "Completed" },
        { SN: 12, Nameofproject: "Environmental Management Plan (EMP) for Railway Redevelopment Project", EPC: "Ram Kripal Singh Construction Pvt Ltd, Ranchi", Projectproponent: "Southeastern Railway Ranchi, Jharkhand", Status: "Completed" },
        { SN: 13, Nameofproject: "Study of birds in summer and winter season around the ESL, Vedanta Steel Ltd,Bokaro", EPC: "IEM Ranchi", Projectproponent: "Vedanta Steel Liminted, Bokaro", Status: "Completed" },
        { SN: 14, Nameofproject: "Consultancy services for the preparation Crossing Profile of 132 kV S/S Transmission line under the DVC 132kV D/C transmission line", EPC: "Gajanan Ferro PVt Ltd, Jamshedpur", Projectproponent: "Gajanan Ferro Pvt Ltd,Jamshedpur", Status: "Submitted to NHAI" },
        { SN: 15, Nameofproject: "Consultancy services for the preparation Crossing Profile of 132 kV S/S Transmission line under the DVC 132kV D/C transmission line", EPC: "Gajanan Ferro PVt Ltd, Jamshedpur", Projectproponent: "Gajanan Ferro Pvt Ltd,Jamshedpur", Status: "Submitted to DVC Kolkata" },
        { SN: 16, Nameofproject: "Consultancy services for the preparation Crossing Profile of 132 kV S/S Transmission line over the JUSNL 132 kVD/C transmission line", EPC: "Gajanan Ferro PVt Ltd, Jamshedpur", Projectproponent: "Gajanan Ferro Pvt Ltd,Jamshedpur", Status: "Submitted to JUSNL" },
        { SN: 17, Nameofproject: "Environmental Audit of tata powers, Mumbai,Maharashtra", EPC: "IEM, Ranchi", Projectproponent: "Tata Powers Mumbai, Maharashtra", Status: "Completed" },
        { SN: 18, Nameofproject: "Site Specific Wildlife Conservation & Management Plan (SSWLC&MP) along with Schedule-1 species management for Anindita Steel Limited (ASL) to comply the Environmental Clearnce(EC)", EPC: "IEM, Ranchi", Projectproponent: "Anindita Steel Limited, Ramgarh", Status: "On going" },
        { SN: 19, Nameofproject: "Site Specific Wildlife Conservation & Management Plan (SSWLC&MP) of 400 kV D/C Latehar-Patrau Tranmission Line of Power Grid Coroporation of India Limited (PGCIL)", EPC: "IEM, Ranchi", Projectproponent: "Power Grid Corporation of india Limited (PGCIL) Ranchi, Jharkhand", Status: "On going" },
        { SN: 20, Nameofproject: "Site Specific Wildlife Conservation & Management Plan (SSWLC&MP) of 400 kV D/C Latehar-Patrau Tranmission Line of Power Grid Coroporation of India Limited (PGCIL)", EPC: "IEM, Ranchi", Projectproponent: "Power Grid Corporation of india Limited (PGCIL) Ranchi, Jharkhand", Status: "On going" },
    ];
    await Project.insertMany(indianProjects);
    console.log(`Successfully inserted ${indianProjects.length} Indian Projects.`);

    // Data for Nproject Model (International Projects)
    const internationalProjects = [
        { SN : 1, Nameofproject : "Biodiversity Impact Assessment through Integrated Biodiversity Assessment Tools(IBAT)for 765 Kv D/C transmission line from Madhunaghat to Moheshkhali to Moheshkhali, Bangladesh.", Client: "Aurora Consultant Lid, Humayun Road, Mohammadpur,Dhaka-1207, Bangladesh", Projectproponent: "Power Grid company Bangladesh Limited (PGCBL)", Country: "Bangladesh", Status: "Completed" },
        { SN : 2, Nameofproject : "Calculation of Enteric fermentation Emission Factor (EF) of tier-2 methods and development of model for emissions in Livestock sector under Climate Change Project, funded by the United Nation Development Programme (UNDP) AND Global Enviroment Facility (GEF) and Implemented by the Food & Agriculture Research & Extension Institue (FARAEI), Minsitry of Environment , sold waste Management & Climate Change, Republic of Mauritius.", Client: "Deloitte India & Mauritius", Projectproponent: "Ministry of Envionment, sold waste Management & Climate change, Republic of Mauritius.", Country: "Mauritus(East Africa)", Status : "On going" },
        { SN : 3, Nameofproject : "Calculation of Enteric fermentation Emission Factor (EF) of tier-2 methods and development of model for emissions in Livestock sector under Climate Change Project, funded by the United Nation Development Programme (UNDP) AND Global Enviroment Facility (GEF) and Implemented by the Food & Agriculture Research & Extension Institue (FARAEI), Minsitry of Environment , sold waste Management & Climate Change, Rodriges(Island Country of East Africa).", Client: "Deloitte India & Rodriges", Projectproponent: "Ministry of Envionment, sold waste Management & Climate change, Republic of Mauritius.", Country: "Rodriges(East Africa)", Status : "On going" },
    ];
    await Nproject.insertMany(internationalProjects);
    console.log(`Successfully inserted ${internationalProjects.length} International Projects.`);

    console.log("All projects successfully inserted.");
    mongoose.connection.close();
}

main().catch(err => {
    console.error("Seeding failed. Is MongoDB running on port 27017?");
    console.error(err);
});
