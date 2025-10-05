// Get the selected category from URL
// Get the selected category from URL
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(!currentUser || !currentUser.name) window.location.href = "index.html";

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// DOM references
const categoryTitle = document.getElementById("categoryTitle");
const servicesList = document.getElementById("servicesList");

// Same services data
const categoriesData = {
  doctors: [
    { name: "Dr. Aijaz Hussain Shaikh", spec: "General Physician", location: "Citizen Colony Hyderabad",
      timings: "Monday to Sunday (7:00 PM to 11:30 PM)", fees: "Rs.600", rating: "★★★★★" },
    { name: "Dr. Aftab Ahmed Shah", spec: "General Physician", location: "Saddar Hyderabad",
      timings: "Thursday to Sunday (5:00 PM to 8:00 PM)", fees: "Rs.1000", rating: "★★★★☆" },
    { name: "Dr. Naila Masood", spec: "General Physician", location: "Latifabad Hyderabd", 
      timings: "Monday to Friday (8:00 PM to 10:00 PM)", fees: "Rs.800",rating: "★★☆☆☆"},

    { name: "Dr. Abid Hussin laghari", spec: "Cardiologist", location: "Aga Khan Hospital Hyderabd", 
      timings: "Sunday (10:00 AM to 4:00 PM)", fees: "Rs.3000", rating: "★★★★★"},
    { name: "Dr. Kashif", spec: "Cardiologist", location: "Latifabad Hyderabad",
      timings: "Wednesday and Thursday (3:00 PM to 5:00 PM)", fees: "Rs.2000", rating: "★★★★☆" },
    { name: "Dr. Zareena Mahar", spec: "Cardiologist", location: "Saddar Hyderabad",
     timings: "Monday to Wednesday (5:00 PM to 7:00 PM)", fees: "Rs.1200", rating: "★★★★☆" },

    { name: "Dr. Meera Kumari", spec: "Dermatologist", location: "Aga Khan Hospital Hyderabad",
      timings: "Monday to Saturday (6:00 PM to 7:00 PM)", fees: "Rs.2000", rating: "★★★★★" },
    { name: "Dr. Farid Shaikh", spec: "Dermatologist", location: "Saddar Hyderabad", 
      timings: "Monday to Friday (5:00 PM to 8:00 PM)", fees: "Rs.1500",rating: "★★★★☆" },
    { name: "Dr. Noor Ul Ain Syed", spec: "Dermatologist", location: "Latifabad Hyderabad",
      timings: "Monday to Thursday (7:00 PM to 9:00 PM)", fees: "Rs.1000", rating: "★★☆☆☆" },

    { name: "Dr. Nazeer Ahmed Shaikh", spec: "ENT", location: "Aga Khan Hospital Hyderabad",
      timings: "Thursday to Saturday (2:00 PM to 3:30 PM)", fees: "Rs.2000", rating: "★★★★★" },
    { name: "Dr. Ishfaq Ahmed Arain", spec: "ENT", location: "Hashim Medical city Hyderabad", 
      timings: "Saturday and Sunday (12:00 PM to 4:00 PM)", fees: "Rs.1000",rating: "★★★★☆" },
    { name: "Dr. Shakeel", spec: "ENT", location: "Zubaida shafi Medical Center Hyderabad",
      timings: "Monday to Friday (3:00 PM to 6:00 PM)", fees: "Rs.800", rating: "★★☆☆☆" },

    { name: "Dr. Raheel Sikandar", spec: "Gynecologist", location: "Aga Khan Hospital Hyderabad", 
      timings: "Monday to Thursday (12:00 PM to 3:00 PM)", fees: "Rs.2000",rating: "★★★★★" },
    { name: "Dr. Pushpa Mahli", spec: "Gynecologist", location: "Aga Khan Hospital Hyderabad",
      timings: "Monday to Sunday (11:00 AM to 1:00 PM)", fees: "Rs.1200", rating: "★★★★☆" },
    { name: "Dr. Momna khan", spec: "Gynecologist", location: "Aga Khan Hospital Hyderabad",
      timings: "Monday, Wednesday, Saturday (7:30 PM to 9:00 PM)", fees: "Rs.1000", rating: "★★★☆☆" },

    { name: "Dr. Jaweria Memon", spec: "Surgeon", location: "Isra University Hospital Hyderabad",
      timings: "Thursday and Friday (5:00 PM to 7:00 PM)", fees: "Rs.3000", rating: "★★★★★" },
    { name: "Dr. Awais Iqbal Bhatti", spec: "Surgeon", location: "Latifabad Hyderabad", 
      timings: "Monday and Tuesday (1:00 PM to 3:00 PM)", fees: "Rs.2500",rating: "★★★★☆" },
    { name: "Dr. Samar Memon", spec: "Surgeon", location: "Data Medicare Hospital Hyderabad",
      timings: "Tuesday to Thursday (10:00 AM to 2:00 PM)", fees: "Rs.1500", rating: "★★★☆☆" },

    { name: "Dr. Heeramani Lohana", spec: "Peadiatrician", location: "Aga Khan Hospital Hyderabad",
      timings: "Monday to Thursday (12:00 PM to 4:00 PM)", fees: "Rs.1500", rating: "★★★★★" },
    { name: "Dr. Abdul Rehman Siyal", spec: "Peadiatrician", location: "Aga Khan Hospital Hyderabad", 
      timings: "Monday to Sunday (3:00 PM to 5:00 PM)", fees: "Rs.1000",rating: "★★★★☆" },
    { name: "Dr. Abdul Malik Shaikh", spec: "Peadiatrician", location: "Shafay Hospital Hyderabad", 
      timings: "Tuesday to Saturday (4:00 PM to 7:00 PM)", fees: "Rs.1000",rating: "★★★☆☆" },

    { name: "Dr. Anwar Qureshi", spec: "Neurologist", location: "Neuro Medical Clinic Latifabad Hyderabad",
     timings: "Monday to Friday (3:00 PM to 6:00 PM)", fees: "Rs.3000",  rating: "★★★★★" },
    { name: "Dr. Masood Uz Zaman", spec: "Neurologist", location: "Aga Khan Hospital Hyderabad", 
     timings: "Tuesday and Friday (2:30 PM to 3:30 PM)", fees: "Rs.2000", rating: "★★★★☆" },
    { name: "Dr. Asif Ali Laghari", spec: "Neurologist", location: "Aga khan Hospital Hyderabad", 
      timings: "Saturday (5:00 PM to 8:00 PM)", fees: "Rs.1500",rating: "★★★☆☆" },

    { name: "Dr. Naveed M. Juman", spec: "Orthopedic", location: "Jeejal Hospital Hyderabad", 
      timings: "Every Month Sunday (10:00 AM to 2:00 PM)", fees: "Rs.2500",rating: "★★★★★"},
    { name: "Dr. Muhammad Shahid Khan", spec: "Orthopedic", location: "Heerabad Hyderabad", 
      timings: "Monday and Tuesday (4:00 PM to 7:00 PM)", fees: "Rs.1500",rating: "★★★★☆"},
    { name: "Dr. Asadullah Memon", spec: "Orthopedic", location: "Saddar Hyderabad", 
      timings: "Monday to Thursday (11:00 AM to 3:00 PM)", fees: "Rs.1200",rating: "★★★☆☆" },

    { name: "Dr. Farrukh Bashir ", spec: "Dentist", location: "Dental Care Center Saddar Hyderabad", 
      timings: "Monday to Wednesday (5:00 PM to 8:00 PM)", fees: "Rs.1800",rating: "★★★★★"},
    { name: "Dr. Shuja Aslam", spec: "Dentist", location: "Hashim Medical City Hospital Hyderabad", 
      timings: "Monday to Friday (2:00 PM to 5:00 PM)", fees: "Rs.1200",rating: "★★★★☆"},
    { name: "Dr. Rafique Ahmed", spec: "Dentist", location: "Latifabad Hyderabad",
      timings: "Wednesday and Thursday (7:00 PM to 9:00 PM)", fees: "Rs.1000", rating: "★★☆☆☆" },

    { name: "Dr. Shafi M Jatio ", spec: "Optometrist/Ophthalmologist", location: "Saddar Hyderabad", 
      timings: "Monday to Friday (2:00 PM to 6:00 PM)", fees: "Rs.1500",rating: "★★★★★"},
    { name: "Dr. Maria Nazish Memon", spec: "Optometrist/Ophthalmologist", location: "Aga Khan Hospital Hyderabad", 
      timings: "Monday to Thursday (1:00 PM to 3:00 PM)", fees: "Rs.1200",rating: "★★★★★" },
    { name: "Dr. Fahad Shaikh", spec: "Optometrist/Ophthalmologist", location: "Isra University Hospital Hyderabad", 
     timings: "Saturday and Sunday (10:00 AM to 2:00 PM)", fees: "Rs.1000", rating: "★★★★☆"},

     { name: "Dr. Abdul Rehman Qureshi ", spec: "Nephrologist", location: "Aga Khan Hospital Hyderabad", 
      timings: "Once a Month (10:00 AM to 1:00 PM)", fees: "Rs.1800",rating: "★★★★★"},
    { name: "Dr. Asadullah Kaboro", spec: "Nephrologist", location: "Hashim Medical City Hospital Hyderabad", 
      timings: "Monday to Saturday (10:00 AM to 2:00 PM)", fees: "Rs.1400",rating: "★★★★☆"},
    { name: "Dr. Rasheed Shaikh", spec: "Nephrologist", location: "Isra University Hospital Hyderabad",
      timings: "Wednesday and Wednesday (9:00 AM to 12:30 PM)", fees: "Rs.1000", rating: "★★★☆☆" },

      { name: "Dr. Talha Shahzad ", spec: "Pulmonologist", location: "Aga Khan Hospital Hyderabad", 
      timings: "once a Month Saturday (10:00 AM to 3:00 PM)", fees: "Rs.1800",rating: "★★★★★"},
    { name: "Dr. Rizwan Ali Tunio", spec: "Pulmonologist", location: "Aga Khan Hospital Hyderabad", 
      timings: "Alternate Sunday (12:00 PM to 2:30 PM)", fees: "Rs.1500",rating: "★★★★☆"},
    { name: "Dr. Muhammad Ashfaq Qazi", spec: "Pulmonologist", location: "Saddar Hyderabad",
      timings: "Tuesday to Saturday (3:00 PM to 5:00 PM)", fees: "Rs.1100", rating: "★★★☆☆" },

      { name: "Dr. Sadat Ali Jiskani ", spec: "Gastroenterologist", location: "Aga Khan Hospital Hyderabad", 
      timings: "Monday to Saturday (5:30 PM to 8:00 PM)", fees: "Rs.1500",rating: "★★★★★"},
    { name: "Dr. Naseem Ghouri", spec: "Gastroenterologist", location: "Heerabad Hyderabad", 
      timings: "Monday to Wednesday (2:00 PM to 4:00 PM)", fees: "Rs.1000",rating: "★★★★☆"},
    { name: "Dr. Shakir Hussain Keerio", spec: "Gastroenterologist", location: "Saddar Hyderabad",
      timings: "Monday to Thursday (11:00 AM to 1:00 PM)", fees: "Rs.1000", rating: "★★★☆☆" },

      { name: "Dr. Adnan Ahmed ", spec: "Sonographer", location: "Aga Khan Hospital Hyderabad", 
      timings: "Monday to Sunday (4:30 PM to 5:30 PM)", fees: "Rs.1500",rating: "★★★★★"},
    { name: "Dr. Khalida Parveen", spec: "Sonographer", location: "Aga Khan Hospital Hyderabad", 
      timings: "Monday to Friday (3:00 PM to 7:00 PM)", fees: "Rs.1500",rating: "★★★★★"},
    { name: "Dr. Kishore Motiani", spec: "Sonographer", location: "Saddar Hyderabad",
      timings: "Monday to Saturday (10:00 AM to 11:30 PM)", fees: "Rs.1000", rating: "★★★★☆" },
  ],
  restaurants: [
    { name: "Kababjees Restaurant", location: "Hyderabad Bypass", rating: "★★★★★" },
    { name: "Hyderabad Darbar", location: "Hyderabad Bypass", rating: "★★★★★" },
    { name: "Ridan House of Mandi", location: "Autobhan Hyderabad", rating: "★★★★☆" },
    { name: "Royal Taj Restaurant", location: "Autobhan Hyderabad", rating: "★★★★☆" },
    { name: "Al-Rahim Restaurant and BBQ", location: "Latifabad Hyderabad", rating: "★★★★☆" },
    { name: "The Rooftop", location: "Latifabad Hyderabad", rating: "★★★☆☆" },
    { name: "Lamoosh Cafe and Restaurant", location: "autobhan Hyderabad", rating: "★★★☆☆" },
    { name: "Kanaash Restaurant", location: "Wadhu Wah Road Hyderabad", rating: "★★★☆☆" },
    { name: "Zamzam Restaurant", location: "Gulistan-e-Sajjad Hyderabad", rating: "★★★☆☆" },
    { name: "Roopa Marri Restaurant", location: "Wadhu Wah Road Hyderabad", rating: "★★★☆☆" },
  ],
  schools: [
    { name: "Govt.High School", type: "Government", location: "Saddar Hyderabad", rating: "★★★★☆" },
    { name: "Govt.Girls Lower Secondary School", type: "Government", location: "Qasimabad Hyderabad", rating: "★★☆☆☆" },
    { name: "Govt.Boys High School", type: "Government", location: "Latifabad Hyderabad", rating: "★★★★☆" },
    { name: "Govt.Model School", type: "Government", location: "G.O.R Colony Hyderabad", rating: "★★★☆☆" },
    { name: "Hyderabad Institute Of Arts, Science and Technology", type: "Latifabad Hyderabad", location: "Saddar", rating: "★★★★★" },

    { name: "The City School", type: "Private", location: "Hyderabad", rating: "★★★★★" },
    { name: "Beaconhouse School", type: "Private", location: "Hyderabad", rating: "★★★★★" },
    { name: "County School/Girls College", type: "Private", location: "Thandi Sarak Hyderabad", rating: "★★★★☆" },
    { name: "Rockford Cambridge School", type: "Private", location: "Hyderabad", rating: "★★★★☆" },
    { name: "The Educators School", type: "Private", location: "Hyderabad", rating: "★★★☆☆" },
  
  ],
  play: [
    { name: "Super Space", type: "Indoor", location: "Boulevard Mall Hyderabad", rating: "★★★★★" },
    { name: "Fun Time Amusement Park", type: "Outdoor", location: "Jamshoro Road Hyderabad", rating: "★★★★★" },
    { name: "D Park", type: "Oudoor", location: "Hyderabad", rating: "★★★★☆" },
    { name: "Ziauddin Park", type: "Outdoor", location: "Cantonment Saddar Hyderabad", rating: "★★★★☆" },
    { name: "Rani Bagh Park", type: "Outdoor", location: "Wadhu Wah Road Hyderabad", rating: "★★☆☆☆" }
  ],
  salons: [
    { name: "The Beauty Bar", type: "Female", location: "Defence Plaza Hyderabad", rating: "★★★★★"  },
    { name: "Sana Sarah's Salon ", type: "Female",  location: "Autobhan Road Hyderabad", rating: "★★★★★" },
    { name: "Mahrose Beauty Parlour ", type: "Female", location: "Saddar Hyderabad", rating: "★★★★☆" },
    { name: "Sanaz Beauty Salon ", type: "Female",  location: "Wadhu Wah Road Hyderabad", rating: "★★★☆☆" },
    { name: "Ideal and Co.Barber Shop ", type: "Male",  location: "Latifabad Hyderabad", rating: "★★★★★" },
    { name: "Sass and Class Hair Salon ", type: "Male",  location: "Qasimabad Hyderabad", rating: "★★★★☆" },
    { name: "Looks Hair Salon ", type: "Male",  location: "Saddar Hyderabad", rating: "★★★★☆" },
    { name: "Men's Salon ", type: "Male",  location: "Qasimabad Hyderabad", rating: "★★★★★" },
  ]
};

// --- Show filter first ---
// --- Show filter first ---
if (category && categoriesData[category]) {
  categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);

  // Only doctors & schools show dropdown filter
  if (category === "doctors" || category === "schools") {
    showFilterForm(category);
  } else {
    renderServices(categoriesData[category], category);
  }
} else {
  categoryTitle.textContent = "No Services Found";
}

// Show filter form for doctors & schools
function showFilterForm(category) {
  const form = document.createElement("form");
  form.id = "filterForm";

  const label = document.createElement("label");
  label.textContent = "Select Type: ";
  form.appendChild(label);

  const select = document.createElement("select");
  let options = [];
  if (category === "doctors") {
    options = ["Categories","General Physician", "Cardiologist", "Dermatologist", "Neurologist",
      "Gynecologist", "Orthopedic", "Surgeon", "ENT", "Optometrist/Ophthalmologist", "Dentist", "Peadiatrician",
      "Nephrologist","Pulmonologist","Gastroenterologist","Sonographer"];
  }
  if (category === "schools") {
    options = ["Category","Private", "Government"];
  }

  options.forEach(opt => {
    const optionEl = document.createElement("option");
    optionEl.value = opt;
    optionEl.textContent = opt;
    select.appendChild(optionEl);
  });

  form.appendChild(select);

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Show Services";
  form.appendChild(submitBtn);

  servicesList.innerHTML = "";
  servicesList.appendChild(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const selected = select.value;

    const filteredServices = categoriesData[category].filter(service => {
      return service.spec === selected || service.type === selected;
    });

    renderServices(filteredServices, category);
  });
}

// Render service cards
function renderServices(servicesArray, category) {
  servicesList.innerHTML = "";

  servicesArray.forEach(service => {
    const card = document.createElement("div");
    card.classList.add("service-card");

    let details = "";
    if (category === "doctors") {
      details = `${service.spec} | ${service.location} | Fees: ${service.fees} | ${service.timings ? service.timings + " |" : ""} Rating: ${service.rating}`;
    } else if (category === "schools") {
      details = `${service.type} | ${service.location} | Rating: ${service.rating}`;
    } else if (category === "restaurants") {
      details = `${service.location} | Rating: ${service.rating}`;
    } else {
      // For play areas & salons
      details = `${service.type || ""} | ${service.location} | Rating: ${service.rating}`;
    }

    card.innerHTML = `
      <h3>${service.name}</h3>
      <p>${details}</p>
      <button class="service-button" onclick="bookService('${category}','${service.name}')">
        Book
      </button>
    `;

    servicesList.appendChild(card);
  });
}
// ==================== BOOKINGS LOGIC ====================
const BOOKINGS_KEY = "myBookings";

// Open booking form
function bookService(category, name) {
  // Skip booking for Play Areas
  if (category === "play") {
    alert("Booking is not required for Play Areas. You're welcome to visit anytime!");
    return;
  }

  const service = categoriesData[category].find(s => s.name === name);
  if (!service) return;

  const bookingContent = document.getElementById("bookingContent");

  // Detect if it's a doctor (we'll extract times)
  let timeInputHTML = "";
  if (category === "doctors" && service.timings) {
    // Extract start and end times from the "timings" string
    const timeMatch = service.timings.match(/(\d{1,2}:\d{2})\s*(AM|PM)\s*to\s*(\d{1,2}:\d{2})\s*(AM|PM)/i);
    if (timeMatch) {
      const startTime = timeMatch[1] + " " + timeMatch[2].toUpperCase();
      const endTime = timeMatch[3] + " " + timeMatch[4].toUpperCase();

      // Create time slot dropdown (each hour between start & end)
      const slots = generateTimeSlots(startTime, endTime);
      const optionsHTML = slots.map(t => `<option value="${t}">${t}</option>`).join("");

      timeInputHTML = `
        <label>Available Time:
          <select id="bTime" required>
            <option value="">Select Time</option>
            ${optionsHTML}
          </select>
        </label>
      `;
    } else {
      // If no proper timing found, fallback to manual input
      timeInputHTML = `<label>Time:<input type="time" id="bTime" required></label>`;
    }
  } else {
    // Other categories → manual input
    timeInputHTML = `<label>Time:<input type="time" id="bTime" required></label>`;
  }

  bookingContent.innerHTML = `
    <h2>Book Service</h2>
    <form id="bookingForm">
      <label>Your Name:<input type="text" id="bName" required></label>
      <label>Contact No: <input type="tel" id="bookingContact" required></label>
      <label>Date:<input type="date" id="bDate" required></label>
      ${timeInputHTML}
      <button type="submit">Confirm Booking</button>
    </form>
  `;

  document.getElementById("bookingForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const booking = {
      service: service.name,
      category,
      name: document.getElementById("bName").value.trim(),
      contact: document.getElementById("bookingContact").value.trim(),
      date: document.getElementById("bDate").value,
      time: document.getElementById("bTime").value
    };

    saveBooking(booking);
    alert("✅ Booking confirmed! Thank you, " + booking.name + ".");
    closeModal();
  });

  document.getElementById("bookingModal").classList.remove("hidden");
}

// Helper function to generate hourly time slots between two times
function generateTimeSlots(start, end) {
  const slots = [];
  const parseTime = t => {
    const [time, meridian] = t.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (meridian === "PM" && hours < 12) hours += 12;
    if (meridian === "AM" && hours === 12) hours = 0;
    return { hours, minutes };
  };

  const startT = parseTime(start);
  const endT = parseTime(end);
  let current = new Date();
  current.setHours(startT.hours, startT.minutes, 0);

  const endTime = new Date();
  endTime.setHours(endT.hours, endT.minutes, 0);

  while (current < endTime) {
    const next = new Date(current.getTime() + 60 * 60 * 1000); // +1 hour
    const formatted = current.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    slots.push(formatted);
    current = next;
  }

  return slots;
}


// Save booking in localStorage
function saveBooking(booking) {
  const bookings = JSON.parse(localStorage.getItem(BOOKINGS_KEY)) || [];
  bookings.push(booking);
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
}

// Show bookings in modal
function openBookings() {
  renderBookings();
  document.getElementById("bookingsModal").classList.remove("hidden");
}

function renderBookings() {
  const list = document.getElementById("myBookingsList");
  list.innerHTML = "";
  const bookings = JSON.parse(localStorage.getItem(BOOKINGS_KEY)) || [];

  if (bookings.length === 0) {
    list.innerHTML = "<li>No bookings yet.</li>";
    return;
  }
bookings.forEach((b, i) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${b.service}</strong> (${b.category})<br>
    <small>${b.date} at ${b.time}</small><br>
    <em>${b.name} - ${b.contact}</em><br>
    <button onclick="openReceiptByIndex(${i})">View Receipt</button>
  `;
  list.appendChild(li);
});

}

function closeBookings() {
  document.getElementById("bookingsModal").classList.add("hidden");
}

// Close booking form modal
function closeModal() {
  document.getElementById("bookingModal").classList.add("hidden");
}

// === Receipt Generation Function ===
function openReceiptByIndex(index) {
  const bookings = JSON.parse(localStorage.getItem("myBookings")) || [];
  const b = bookings[index];
  if (!b) return alert("Receipt not found.");

  // Save this booking as current receipt
  localStorage.setItem("receiptData", JSON.stringify(b));

  // Open receipt.html to display it
  window.open("receipt.html", "_blank");
}


