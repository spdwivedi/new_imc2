document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const allCentralDepts = [ { name: "Dept. of Financial Services (Banking)", commonGrievances: ["Server downtime", "Long queues", "Loan processing delays", "Failed ATM transactions"] }, { name: "Central Board of Direct Taxes (CBDT)", commonGrievances: ["Income tax refund delays", "Tax filing portal issues", "Responses to notices"] }, { name: "Central Board of Indirect Taxes (CBIC)", commonGrievances: ["GST portal problems", "GST refund delays", "Customs duty issues"] }, { name: "Employees' Provident Fund (EPFO)", commonGrievances: ["PF withdrawal delays", "Claim rejections", "Account transfer issues"] }, { name: "Ministry of Railways (Railway Board)", commonGrievances: ["Train delays", "Ticketing/refund issues (IRCTC)", "Cleanliness problems", "Staff issues"] }, { name: "Ministry of Road Transport (MoRTH)", commonGrievances: ["National highway conditions", "Vehicle registration (Vahan) issues", "License (Sarathi) issues"] }, { name: "National Highways Authority (NHAI)", commonGrievances: ["Potholes on highways", "Dysfunctional toll plazas", "Incorrect FASTag deductions"] }, { name: "Ministry of Civil Aviation", commonGrievances: ["Airport congestion", "Long security queues", "Flight delays", "Baggage policy issues"] }, { name: "Dept. of Telecommunications (DoT)", commonGrievances: ["Poor network coverage", "Call drops", "Spam calls/SMS", "Billing disputes"] }, { name: "Department of Posts (India Post)", commonGrievances: ["Delivery delays", "Lost articles", "Failed Speed Post", "Money order issues"] }, { name: "Ministry of Power", commonGrievances: ["National grid failures", "Frequent power cuts", "High electricity costs"] }, { name: "Ministry of Petroleum & Natural Gas", commonGrievances: ["LPG cylinder booking issues", "Delivery delays", "Gas subsidy problems"] }, { name: "Ministry of External Affairs (Passport)", commonGrievances: ["Passport appointment issues", "Police verification delays", "Passport issuance delays"] }, { name: "Dept. of Food & Public Distribution", commonGrievances: ["Ration card issues", "Problems at Fair Price Shops", "Incorrect food grain quantity"] }, { name: "Ministry of Housing & Urban Affairs", commonGrievances: ["Failure of Swachh Bharat Mission", "Smart Cities Mission issues"] }, { name: "Department of Consumer Affairs", commonGrievances: ["Faulty products", "Poor service by companies", "Misleading advertisements"] }, { name: "Ministry of Health & Family Welfare", commonGrievances: ["Long waits at Govt. hospitals", "Service quality at AIIMS", "CGHS issues"] }, { name: "Ministry of Home Affairs (MHA)", commonGrievances: ["Issues with central police forces", "Issues with Delhi Police"] }, { name: "University Grants Commission (UGC)", commonGrievances: ["University affiliation problems", "Degree recognition", "Exam schedules", "Fellowship delays"] }, { name: "Ministry of IT (MeitY)", commonGrievances: ["DigiLocker issues", "MyGov portal problems", "Cybersecurity concerns"] } ];
    
    // NEW: Detailed data for State Governments
    const stateGovData = [
        { name: "Home Department (State Police)", commonGrievances: ["Slow response times (100/112)", "Refusal/delay in filing FIR", "Slow passport verification", "Unresponsiveness or corruption"] },
        { name: "Urban Development (Municipal Corp.)", commonGrievances: ["Garbage not collected", "Potholes on city roads", "Broken street lights", "Water logging", "Stray animal menace"] },
        { name: "Energy Department (Electricity Board)", commonGrievances: ["Unscheduled power cuts", "Voltage fluctuations", "Inflated bills", "Faulty meters", "New connection delays"] },
        { name: "Revenue Department (Tehsildar Office)", commonGrievances: ["Land mutation delays", "Issues getting land records", "Delays in issuing certificates (caste, income)"] },
        { name: "Transport Department (RTO & State Bus)", commonGrievances: ["Long queues at RTO", "Driver's license/RC issues", "Overcrowded state buses", "Buses not on time"] },
        { name: "Water Department (Jal Board)", commonGrievances: ["Inconsistent water supply", "Dirty/contaminated water", "Ignored pipeline leakages", "Incorrect billing"] },
        { name: "Health & Family Welfare (State Hospitals)", commonGrievances: ["Long waiting times", "Unavailability of doctors", "Non-availability of free medicines", "Poor sanitation"] },
        { name: "Stamps and Registration Dept.", commonGrievances: ["Server downtime for property registration", "Complex procedures", "Delays in getting appointments"] },
        { name: "Food and Supplies Department (PDS)", commonGrievances: ["Ration card issues (Aadhaar linking)", "Ration shop owner fraud", "Poor quality of food grains"] },
        { name: "Public Works Department (PWD)", commonGrievances: ["Poor condition of state highways", "Large potholes on district roads", "Slow repair or construction work"] }
    ];

    const nationalEmblem = "assets/national_emblem.png"; 
    const states = [ { name: "Andaman & Nicobar", logo: "assets/andaman_nicobar.png" }, { name: "Andhra Pradesh", logo: "assets/andhra_pradesh.png" }, { name: "Arunachal Pradesh", logo: "assets/arunachal_pradesh.png" }, { name: "Assam", logo: "assets/assam.png" }, { name: "Bihar", logo: "assets/bihar.png" }, { name: "Chandigarh", logo: "assets/chandigarh.png" }, { name: "Chhattisgarh", logo: "assets/chhattisgarh.png" }, { name: "Dadra and Nagar Haveli", logo: nationalEmblem }, { name: "Delhi", logo: "assets/delhi.png" }, { name: "Goa", logo: "assets/goa.png" }, { name: "Gujarat", logo: "assets/gujarat.png" }, { name: "Haryana", logo: "assets/haryana.png" }, { name: "Himachal Pradesh", logo: "assets/himachal_pradesh.png" }, { name: "Jammu and Kashmir", logo: "assets/jammu_kashmir.png" }, { name: "Jharkhand", logo: "assets/jharkhand.png" }, { name: "Karnataka", logo: "assets/karnataka.png" }, { name: "Kerala", logo: "assets/kerala.png" }, { name: "Ladakh", logo: nationalEmblem }, { name: "Lakshadweep", logo: "assets/lakshadweep.png" }, { name: "Madhya Pradesh", logo: "assets/madhya_pradesh.png" }, { name: "Maharashtra", logo: "assets/maharashtra.png" }, { name: "Manipur", logo: "assets/manipur.png" }, { name: "Meghalaya", logo: "assets/meghalaya.png" }, { name: "Mizoram", logo: "assets/mizoram.png" }, { name: "Nagaland", logo: nationalEmblem }, { name: "Odisha", logo: "assets/odisha.png" }, { name: "Puducherry", logo: "assets/puducherry.png" }, { name: "Punjab", logo: "assets/punjab.png" }, { name: "Rajasthan", logo: "assets/rajasthan.png" }, { name: "Sikkim", logo: "assets/sikkim.png" }, { name: "Tamil Nadu", logo: "assets/tamil_nadu.png" }, { name: "Telangana", logo: nationalEmblem }, { name: "Tripura", logo: "assets/tripura.png" }, { name: "Uttar Pradesh", logo: "assets/uttar_pradesh.png" }, { name: "Uttarakhand", logo: "assets/uttarakhand.png" }, { name: "West Bengal", logo: "assets/west_bengal.png" } ];
    
    // --- DOM ELEMENTS ---
    const sections = document.querySelectorAll('main > section');
    const initialChoiceSection = document.getElementById('initial-choice-section'), selectionSection = document.getElementById('selection-section'), complaintFormSection = document.getElementById('complaint-form-section');
    const centralBtn = document.getElementById('central-btn'), stateBtn = document.getElementById('state-btn');
    const selectionList = document.getElementById('selection-list'), selectionTitle = document.getElementById('selection-title'), searchBar = document.getElementById('search-bar');
    const subCategoryContainer = document.getElementById('sub-category-container'), subCategorySelect = document.getElementById('sub-category-select');
    const backToMainBtn = document.getElementById('back-to-main-btn'), backToSelectionBtn = document.getElementById('back-to-selection-btn');
    const complaintForm = document.getElementById('complaint-form');
    let userFlow = [];

    function showSection(sectionToShow) { sections.forEach(section => { section.id === sectionToShow.id ? section.classList.remove('hidden') : section.classList.add('hidden'); }); }
    
    function populateSelectionList(items, type) {
        selectionList.innerHTML = '';
        items.forEach(item => {
            const button = document.createElement('button');
            button.className = 'list-item-btn';
            if (typeof item === 'object' && item.logo) {
                button.innerHTML = `<img src="${item.logo}" alt="${item.name} logo" class="state-logo"><span>${item.name}</span>`;
                button.dataset.value = item.name;
            } else {
                const name = typeof item === 'object' ? item.name : item;
                button.textContent = name;
                button.dataset.value = name;
            }
            button.dataset.type = type; selectionList.appendChild(button);
        });
    }

    function populateSubCategoryDropdown(grievances) {
        subCategorySelect.innerHTML = '<option value="">-- Please select a sub-category --</option>';
        grievances.forEach(grievance => {
            const option = document.createElement('option');
            option.value = grievance;
            option.textContent = grievance;
            subCategorySelect.appendChild(option);
        });
    }
    
    centralBtn.addEventListener('click', () => {
        selectionTitle.textContent = 'Select a Central Government Department';
        searchBar.placeholder = 'Search for a Department...';
        searchBar.value = ''; searchBar.dispatchEvent(new Event('input'));
        searchBar.classList.remove('hidden');
        populateSelectionList(allCentralDepts, 'central-dept');
        showSection(selectionSection);
        userFlow = ['Central Government'];
    });

    stateBtn.addEventListener('click', () => {
        selectionTitle.textContent = 'Select a State / Union Territory';
        searchBar.placeholder = 'Search for a State or UT...';
        searchBar.value = ''; searchBar.dispatchEvent(new Event('input'));
        searchBar.classList.remove('hidden');
        populateSelectionList(states, 'state');
        showSection(selectionSection);
        userFlow = ['State Government'];
    });

    // *** THE KEY CHANGE IS HERE ***
    selectionList.addEventListener('click', (event) => {
        const button = event.target.closest('button'); if (!button) return;
        const type = button.dataset.type; const value = button.dataset.value;
        userFlow.push(value);

        if (type === 'state') { // User clicked on a state logo
            selectionTitle.textContent = `Select a Department in ${value}`;
            searchBar.classList.add('hidden'); // Hide search for this step
            populateSelectionList(stateGovData, 'state-dept'); // Show the list of 10 state depts
        } else { // User clicked on a final department (either central or state)
            let department;
            if (userFlow[0] === 'Central Government') {
                department = allCentralDepts.find(dept => dept.name === value);
            } else { // It's a state complaint
                department = stateGovData.find(dept => dept.name === value);
            }
            
            populateSubCategoryDropdown(department.commonGrievances);
            subCategoryContainer.classList.remove('hidden');
            subCategorySelect.required = true;
            
            showSection(complaintFormSection);
        }
    });

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase(); const items = selectionList.querySelectorAll('.list-item-btn');
        items.forEach(item => { const itemText = item.textContent.toLowerCase(); item.style.display = itemText.includes(searchTerm) ? 'flex' : 'none'; });
    });
    
    backToMainBtn.addEventListener('click', () => { showSection(initialChoiceSection); userFlow = []; });

    backToSelectionBtn.addEventListener('click', () => {
        userFlow.pop();
        if (userFlow.length === 0) { showSection(initialChoiceSection); }
        // NEW logic for backing out of state department list
        else if (userFlow[0] === 'State Government' && userFlow.length === 2) {
            selectionTitle.textContent = `Select a Department in ${userFlow[1]}`;
            searchBar.classList.add('hidden');
            populateSelectionList(stateGovData, 'state-dept');
            showSection(selectionSection);
        }
        else if (userFlow[0] === 'State Government' && userFlow.length === 1) {
            selectionTitle.textContent = 'Select a State / Union Territory';
            searchBar.classList.remove('hidden');
            populateSelectionList(states, 'state');
            showSection(selectionSection);
        } else if (userFlow[0] === 'Central Government' && userFlow.length === 1) {
            selectionTitle.textContent = 'Select a Central Government Department';
            searchBar.classList.remove('hidden');
            populateSelectionList(allCentralDepts, 'central-dept');
            showSection(selectionSection);
        } else { showSection(initialChoiceSection); }
    });

    complaintForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = {
            userName: document.getElementById('user-name').value, userPhone: document.getElementById('user-phone').value, userEmail: document.getElementById('user-email').value,
            userAddress: document.getElementById('user-address').value, description: document.getElementById('description').value, category: userFlow[0],
            department: userFlow.slice(1).join(' - '),
            subCategory: subCategorySelect.value
        };
        try {
            // SUBMISSION FIX: Use relative Vercel path
            const response = await fetch('/api/complaints', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const result = await response.json();
            alert(`Success! Your grievance has been submitted.\nYour Grievance ID is: ${result.grievanceId}`);
            complaintForm.reset(); 
            showSection(initialChoiceSection);
            userFlow = [];
        } catch (error) { console.error("Submission Error:", error); alert("There was an error submitting your grievance. Please try again."); }
    });

    const trackForm = document.getElementById('track-form'); 
    const grievanceIdInput = document.getElementById('grievance-id-input'); 
    const trackingResultDiv = document.getElementById('tracking-result');
    
    trackForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 
        const grievanceId = grievanceIdInput.value; 
        if (!grievanceId) return;
        
        try {
            // TRACKING FIX: Use GET method and the correct Vercel tracking URL
            const response = await fetch(`/api/complaints/track/${grievanceId}`); 
            const result = await response.json(); // Must parse JSON result

            if (response.ok) { 
                trackingResultDiv.innerHTML = `<p><strong>Status for ID ${result.grievanceId}:</strong></p><p><strong>Department:</strong> ${result.department}<br><strong>Sub-Category:</strong> ${result.subCategory || 'N/A'}<br><strong>Status:</strong> <span style="font-weight: bold; color: #ff8c00;">${result.status}</span></p>`; 
            }
            else { 
                trackingResultDiv.innerHTML = `<p style="color: red;">Error: ${result.error}</p>`; 
            }
        } catch (error) { 
            console.error("Tracking Error:", error); 
            trackingResultDiv.innerHTML = `<p style="color: red;">Could not connect to the server to track status.</p>`; 
        }
    });
    
    showSection(initialChoiceSection);
});